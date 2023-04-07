import Head from 'next/head'
import DeleteIcon from '@mui/icons-material/Delete'
import { ThemeSwitcher } from 'components'
import { Calculator } from 'components/calculator'
import SideMenu from 'components/menu/menu'
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridRowParams,
} from '@mui/x-data-grid'
import { useState, useEffect, useCallback } from 'react'
import AxiosInstance from 'context/AxiosInstance'
import WithAuthProtection from 'components/auth/AuthProtectionComponent'
import DeleteRecordModal from 'components/record/DeleteModal'

const TransactionsTableChild = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [recordId, setRecordId] = useState('')

  const [rows, setRows] = useState([])
  const handleAlertClose = () => {
    setShowAlert(false)
    setTimeout(() => {
      setRows((prevRows) => prevRows.filter((row) => row.id !== recordId))
    })
  }

  const deleteUser = useCallback(
    (id: any) => () => {
      setRecordId(id.toString())
      setShowAlert(true)
    },
    []
  )

  useEffect(() => {
    AxiosInstance.get('/record/list').then((res) => {
      setRows(res.data.result[0])
    })
  }, [])

  const columns = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'amount', headerName: 'Amount', width: 150 },
    { field: 'user_balance', headerName: 'Balance', width: 100 },
    {
      field: 'operation_response',
      headerName: 'Operation Result',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      getActions: (params: GridRowParams) => [
        // eslint-disable-next-line
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={deleteUser(params.id)}
          label="Delete"
        />,
      ],
    },
  ]
  return (
    <>
      <DataGrid
        style={{ background: 'white' }}
        rows={rows}
        columns={columns}
        checkboxSelection
      />
      <DeleteRecordModal
        recordId={recordId}
        onClose={handleAlertClose}
        isOpen={showAlert}
      />
    </>
  )
}

const TransactionsTable = WithAuthProtection(TransactionsTableChild)

export { TransactionsTable }
