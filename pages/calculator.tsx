import Head from "next/head";

import { ThemeSwitcher } from "components";
import { Calculator } from "components/calculator";
import SideMenu from "components/menu/menu";

export default function Home() {
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
        
        <div className="flex min-h-[80vh] flex-col w-11/12 sm:min-w-[350px] sm:w-[65vh] max-w-[550px]">
          <SideMenu  />
          <div className="flex items-center w-full mb-8">
            <h1 className="text-3xl text-skin-switcher font-spartan">basic calculator</h1>
          </div>
          <Calculator />
        </div>
      </main>
    </>
  );
}
