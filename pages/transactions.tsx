import Head from 'next/head'

import { ThemeSwitcher } from 'components'
import { Calculator } from 'components/calculator'
import SideMenu from 'components/menu/menu'
import { DataGrid } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'
import AxiosInstance from 'context/AxiosInstance'
import { TransactionsTable } from 'components/history/TransactionsTable'
import SignOutButton from 'components/signout/SignOutButton'
export default function TransactionsTablePage() {
  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta
          name="description"
          content="Calculator app solution for frontendmentor challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="w-full min-h-[inherit] flex justify-center items-center font-spartan bg-skin-main transition-all duration-200 ease-in-out">
        <div className="sign-out-container">
          <SignOutButton />
        </div>
        <div className="flex flex-col min-h-[80vh] w-11/12 sm:min-w-[350px] sm:w-[80vh] max-w-[800px]">
          <SideMenu />
          <div className="flex items-center w-full mb-8">
            <h1 className="text-3xl text-skin-switcher font-spartan">
              Operations History
            </h1>
          </div>
          <TransactionsTable />
        </div>
      </main>
    </>
  )
}
