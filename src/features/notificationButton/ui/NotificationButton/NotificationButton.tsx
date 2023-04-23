import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import AlarmIcon from 'shared/assets/icons/alarm.svg';
import { NotificationList } from 'entities/Notifications';
import React, { useCallback, useState } from 'react';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        (
            <Button onClick={onOpen} theme={ButtonTheme.CLEAR}>
                <Icon Svg={AlarmIcon} inverted />
            </Button>
        )
    );
    return (
        <div>

            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onClose}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
};