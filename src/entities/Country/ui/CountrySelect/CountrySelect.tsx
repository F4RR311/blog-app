import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups/components/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectSelectProps {
    className?: string;
    value?: Country;
    onChange?:(value:Country)=> void;
    readonly?:boolean
}
const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];
export const CountrySelect = memo(({
    className, value, onChange, readonly,
}:CountrySelectSelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (

        <ListBox
            value={value}
            className={className}
            items={options}
            readonly={readonly}
            defaultValue={t('Укажите страну')}
            onChange={onChangeHandler}
            direction="top right"
            label={t('Укажите страну')}
        />
        // <Select
        //     className={classNames('', {}, [className])}
        //     label={t('Укажите страну')}
        //     options={options}
        //     value={value}
        //     onChange={onChangeHandler}
        //     readonly={readonly}
        // />
    );
});
