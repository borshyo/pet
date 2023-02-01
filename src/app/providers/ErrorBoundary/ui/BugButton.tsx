import { FC, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button'

export const BugButton: FC = () => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (isError) throw new Error('error')
  }, [isError])

  const onThrow = () => {
    setIsError(true)
  }

  return <Button onClick={onThrow}>throw new Error</Button>
}
