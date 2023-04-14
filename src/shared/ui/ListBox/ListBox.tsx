import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { HStack } from 'shared/Stack';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?:boolean
}

type DropdownDirection= 'top' | 'bottom';

interface ListBoxProps {
    items?: ListBoxItem[];
    className?:string;
    value?:string;
    defaultValue?: string;
    onChange: (value:string)=> void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?:string
}

const mapDirectionClass:Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props:ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props;
    const [selectedPerson, setSelectedPerson] = useState();

    const optionClasses = [mapDirectionClass[direction]];

    return (

        <HStack>
            { label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}

            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button disabled={readonly} className={cls.trigger}>

                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
                    {items?.map((item) => (

                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}

                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>

        </HStack>
    );
}
