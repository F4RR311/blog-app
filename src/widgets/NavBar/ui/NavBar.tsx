import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }:NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCLoseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Войти')}
                <LoginModal isOpen={isAuthModal} onClose={onCLoseModal} />
            </Button>
        </div>
    );
};
