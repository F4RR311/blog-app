import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoadderProps {
    className?: string
}

export const Loader = ({ className }:LoadderProps) => (
    <div className={classNames('lds-ellipsis', {}, [])}>
        <div />
        <div />
        <div />
        <div />
    </div>

);
