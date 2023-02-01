import { AppRouter } from 'app/providers/router'
import { Suspense, type FC } from 'react'
import 'shared/config/i18n/i18n'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}

export default App
