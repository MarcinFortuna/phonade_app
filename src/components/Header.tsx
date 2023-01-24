import React from 'react';
import Info from "./Info";
import ThemeChangeToggle from "./ThemeChangeToggle";
import {UseIpaToggle} from "./UseIpaToggle";
import {SeeList} from "./SeeList";

function Header() {
    return (<header className="navbar bg-base-100 flex justify-between">
        <div className="btn btn-ghost normal-case text-xl">phonade</div>
        <div className="flex gap-4">
            <UseIpaToggle />
            <SeeList />
            <Info />
            <ThemeChangeToggle />
        </div>
    </header>)
}

export default Header;