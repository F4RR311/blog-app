import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

                ARticle
            </DynamicModuleLoader>
        </div>
    );
};
