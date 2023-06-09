import { createContext, FC, ReactNode, useContext, useState } from 'react'
import AxiosInstance from './AxiosInstance'
import { KeyType } from 'types'

interface ICalculatorContext {
  expression: string
  value: string
  handleKeyPress: (_keyValue: KeyType) => void
}

const CalculatorContext = createContext<ICalculatorContext | undefined>(
  undefined
)

interface ICalculatorProviderProps {
  children: ReactNode
}

const operators = ['+', '-', '/', 'x']

const CalculatorProvider: FC<ICalculatorProviderProps> = ({ children }) => {
  const [expression, setExpression] = useState('')
  const [value, setValue] = useState('0')
  const [operatorWasPressed, setOperatorWasPressed] = useState(false)
  const [numberWasPressed, setNumberWasPressed] = useState(false)

  const handleKeysState = (keyValue: KeyType) => {
    switch (keyValue) {
      case '.':
      case 'del':
      case 'reset':
        setNumberWasPressed(false)
        setOperatorWasPressed(false)
        return
      case '+':
      case '-':
      case 'x':
      case '/':
        setOperatorWasPressed(true)
        return
      default:
        setOperatorWasPressed(false)
        setNumberWasPressed(true)
    }
  }

  const handleNumericKeyPress = (keyValue: KeyType) => {
    if (operatorWasPressed) {
      setValue(keyValue)
      return
    }

    const numericValue = value.replace(/,/g, '')
    if (numericValue.length === 15) return

    setValue(parseFloat(`${numericValue}${keyValue}`).toLocaleString())
  }

  const handleOperatorKeyPress = (keyValue: KeyType) => {
    const numberPressed = numberWasPressed
    setNumberWasPressed(false)

    if (!expression.length) {
      setExpression(`${value}${keyValue}`)
      setValue('')
      return
    }

    if (numberPressed) {
      setValue('')
      setExpression(`${expression}${value}${keyValue}`)
      return
    }

    setExpression((expression) => `${expression.slice(0, -1)}${keyValue}`)
  }

  const evaluateExpression = async () => {
    AxiosInstance.post('/record/evaluate-arithmetic-expression', {
      expression: expression.slice(0, -1),
    }).then((res) => {
      setValue(res.data.result)
    })
    setNumberWasPressed(false)
  }

  const handleKeyPress = (keyValue: KeyType) => {
    handleKeysState(keyValue)

    switch (keyValue) {
      case '+':
      case '-':
      case 'x':
      case '/':
        handleOperatorKeyPress(keyValue)
        return
      case '.':
        if (value.includes('.')) return
        setValue((value) => `${value}.`)
        return
      case '=':
        evaluateExpression()
        setExpression('')
        return
      case 'del':
        if (value.length === 1) {
          setValue('0')
          return
        }
        setValue((value) => {
          const newValue = value.slice(0, -1)
          if (newValue.at(-1) === ',') {
            return newValue.slice(0, -1)
          }
          return newValue
        })
        return
      case 'reset':
        setExpression('')
        setValue('0')
        return
      case '0':
        if (value === '0') {
          return
        }
      default:
        handleNumericKeyPress(keyValue)
    }
  }

  return (
    <CalculatorContext.Provider value={{ expression, value, handleKeyPress }}>
      {children}
    </CalculatorContext.Provider>
  )
}

const countOperators = (expression: string) =>
  expression
    .split('')
    .reduce(
      (acc, operator) => (operators.includes(operator) ? acc + 1 : acc),
      0
    )

const useCalculatorContext = () => useContext(CalculatorContext)

export { CalculatorProvider, useCalculatorContext }
