import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const { t } = useTranslation();
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;
    if (!authData) {
        return null;
    }
    return (

        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: getRouteAdmin(),
                }] : []),

                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
            ]}
            trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
        />

    );
};
