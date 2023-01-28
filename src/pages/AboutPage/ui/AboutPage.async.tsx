import { lazy } from 'react'

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error incorrect import
        resolve(import('./AboutPage'))
      }, 1500)
    })
)
