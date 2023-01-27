import React from 'react';
import Info from "./Info";
import ThemeChangeToggle from "./ThemeChangeToggle";
import {UseIpaToggle} from "./UseIpaToggle";
import {SeeList} from "./SeeList";

function Header() {
    return (<header className="navbar bg-base-100 flex justify-between w-max sm:w-full">
        <div className="btn btn-ghost font-thin normal-case text-md md:text-lg xl:text-xxl">phonade</div>
        <div className="flex gap-2 md:gap-4">
            <UseIpaToggle/>
            <SeeList/>
            <Info/>
            <ThemeChangeToggle/>
        </div>
    </header>)
}

export default Header;