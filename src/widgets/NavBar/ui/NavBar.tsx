import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }:NavBarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>

        <div className={cls.links} />

    </div>
);
