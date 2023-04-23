import { classNames } from 'shared/lib/classNames/classNames';

import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { HStack } from 'shared/Stack';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/constst';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?:boolean
}

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

export function ListBox(props:ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
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
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
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
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
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
