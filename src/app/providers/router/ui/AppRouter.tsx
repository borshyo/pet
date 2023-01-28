import { Suspense, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter: FC = () => {
  const { t } = useTranslation()
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>{t('loading')}</div>}>
                <div className='page-wrapper'>{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
