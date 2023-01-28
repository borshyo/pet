import { Theme, useTheme } from 'app/providers/ThemeProvider'
import type { FC } from 'react'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button'
import cls from './ToggleSwitcher.module.scss'

interface ToggleSwitcherProps {
  className?: string
}

export const ToggleSwitcher: FC<ToggleSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? <ThemeLight /> : <ThemeDark />}
    </Button>
  )
}
