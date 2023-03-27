import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import TilesIcon from 'shared/assets/icons/tiled_list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view:ArticleView;
    onViewClick?: (view:ArticleView) =>void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TilesIcon,
    },

    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },

];
export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const { t } = useTranslation();

    const onClick = (newView:ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {
                viewTypes.map((viewType) => (
                    <Button
                        key={viewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                            Svg={viewType.icon}
                        />
                    </Button>
                ))
            }
        </div>
    );
};
