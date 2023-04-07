import { Screen } from './Screen'
import { Keyboard } from './Keyboard'
import WithAuthProtection from 'components/auth/AuthProtectionComponent'

const ChildCalc = () => (
  <div className="flex flex-col">
    <Screen />
    <Keyboard />
  </div>
)

const Calculator = WithAuthProtection(ChildCalc)

export { Calculator }
