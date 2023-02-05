import React from "react";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";


export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (

        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <button onClick={toggleTheme}>TOGGLE</button>
            {/*<Link to={'/'}> Главная страница</Link>*/}
            {/*<Link to={'/about'}> О сайте</Link>*/}
            <AppRouter/>
        </div>
    )
}

export default App;
