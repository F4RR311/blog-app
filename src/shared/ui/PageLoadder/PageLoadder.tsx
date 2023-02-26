import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoadder.module.scss';

interface PageLoadderProps {
    className?: string
}

export const PageLoadder = ({ className }:PageLoadderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
