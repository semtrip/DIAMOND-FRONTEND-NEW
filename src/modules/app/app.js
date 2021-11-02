import React                          from 'react'
import Background                     from '../bg'
import TestModal                      from '../test-modal'
import AuthMain                       from '../authorization/AuthMain'

export default function App () {
  const isDevMode = process.env.NODE_ENV === 'development'
  const devModules = isDevMode && (
    <>
      <TestModal />
      <Background />
    </>
  )

  return (
    <>
      {devModules}
      <AuthMain />
    </>
  )
}
