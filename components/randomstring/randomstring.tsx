import classNames from "classnames";
import { FC } from "react";
import RandomStringGenerator from "./text";
import WithAuthProtection from "components/auth/AuthProtectionComponent";

const  ChildRandomString = () => (
    <div>
        <section className="h-[55vh] min-h-[340px] max-h-[480px]  items-center  grid grid-flow-col gap-4 sm:gap-[2.5vh] p-4 sm:p-6 bg-skin-keypad w-full rounded-xl">
            <RandomStringGenerator />
        </section>
    </div>
);
const RandomString = WithAuthProtection(ChildRandomString)
export { RandomString };
