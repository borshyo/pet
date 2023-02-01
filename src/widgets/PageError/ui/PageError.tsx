import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props
  const toggleReload = () => {
    window.location.reload()
  }
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('something went wrong')}
      <Button onClick={toggleReload}>{t('reload page')}</Button>
    </div>
  )
}
