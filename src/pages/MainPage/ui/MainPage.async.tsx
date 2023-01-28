import { lazy } from 'react'

export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error incorrect import
        resolve(import('./MainPage'))
      }, 1500)
    })
)
