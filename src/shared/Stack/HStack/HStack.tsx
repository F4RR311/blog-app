import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex, FlexProps } from '../Flex/Flex';
import cls from './HStack.module.scss';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Flex direction="row" {...props} />
    );
};
