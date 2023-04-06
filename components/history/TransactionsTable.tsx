import Head from "next/head";

import { ThemeSwitcher } from "components";
import { Calculator } from "components/calculator";
import SideMenu from "components/menu/menu";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import AxiosInstance from "context/AxiosInstance";
import WithAuthProtection from "components/auth/AuthProtectionComponent";

const TransactionsTableChild = () => {

    const [rows, setRows] = useState([])

    useEffect(() => {
        AxiosInstance.get('/record/list').then((res) => {
            setRows(res.data.result[0])
        })
      }, []);

    const columns = [
        { field: 'id', headerName: 'Id', width: 300 },
        { field: 'amount', headerName: 'Amount', width: 300 },
        { field: 'user_balance', headerName: 'Balance', width: 150 },
        { field: 'operation_response', headerName: 'Operation Result', width: 300 },
      ];
  return (
    <>
          <DataGrid
          style={{background: 'white'}}
  rows={rows}
  columns={columns}
  checkboxSelection
/>
    </>
  );
}

const TransactionsTable = WithAuthProtection(TransactionsTableChild);

export {TransactionsTable}
