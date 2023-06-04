import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserAvatar from '../../assets/icons/default-avatar.svg';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?:string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className,
    src,
    size,
    alt,
    fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,

    }), [size]);

    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserAvatar} />;
    const fallback = <Skeleton width={size} height={size} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            alt={alt}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
