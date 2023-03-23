import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

interface CardProps extends ButtonHTMLAttributes<HTMLDivElement> {
    className?: string;
    children:ReactNode;
}

export const Card = (props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
