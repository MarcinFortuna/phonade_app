import React from 'react';
import Info from "./Info";
import ThemeChangeToggle from "./ThemeChangeToggle";
import {UseIpaToggle} from "./UseIpaToggle";

function Header() {
    return (<header className="navbar bg-base-100 flex justify-between">
        <div className="btn btn-ghost normal-case text-xl">phonade</div>
        <div className="flex gap-1">
            <UseIpaToggle />
            <Info />
            <ThemeChangeToggle />
        </div>
    </header>)
}

export default Header;