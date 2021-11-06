import '../../css/base.css'
import '../../css/adaptive.css'
import '../../css/animate.css'
import Background                     from '../bg'
import TestModal                      from '../test-modal'
import AuthMain                       from '../authorization/AuthMain'
import Hud                            from '../hud/Hud'
import Inventory                      from '../inventory/Inventory'  
import AccountMenu                    from '../accountmenu/AccountMenu'
import GovMenu                        from '../govmenu/GovMenu'
import Alert                          from '../alert/Alert'



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
      <Hud />
      <Inventory />
      <AccountMenu />
      <GovMenu />
      <Alert />
    </>
  )
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Загрузился')
  new AuthMain().setActiveApp()
})
