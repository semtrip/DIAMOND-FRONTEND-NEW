import React  from 'react';
import '../../css/base.css'
import '../../css/adaptive.css'
import '../../css/animate.css'
import Background                     from '../bg'
import TestModal                      from '../test-modal'
import Walkietalkie                   from '../walkietalkie/Walkietalkie';
import AuthMain                       from '../authorization/AuthMain'
import Hud                            from '../hud/Hud'
import Inventory                      from '../inventory/Inventory'  
import AccountMenu                    from '../accountmenu/AccountMenu'
import GovMenu                        from '../govmenu/GovMenu'
import Alert                          from '../alert/Alert'
import Bank                           from '../bank/Bank'
import CarShop                        from '../carshop/CarShop'
import Certificate                    from '../certificate/Certificate'
import Donate                         from '../donate/Donate'
import EditorMain                     from '../editorplayer/EditorMain';
import GunShop                        from '../hudmenus/gunshop/GunShop';
import CarRent                        from '../hudmenus/carrent/CarRent';
import Dialog                         from '../hudmenus/dialog/Dialog';
import Tatoo                          from '../hudmenus/tatoo/Tatoo';
import IDCard                         from '../idcard/IDCard';
import License                        from '../license/License';
import ModalInput                     from '../modalinput/ModalInput';
import Notification                   from '../notification/Notification';
import Phone                          from '../phone/Phone';
import RadialMenu                     from '../radialmenu/radialMenu';
import WorkID                         from '../workid/WorkID';


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
      <EditorMain />
      <Walkietalkie />
      <div className="box" id="box">
        <AuthMain />
        <Hud />
        <Inventory />
        {/* TODO  // Дописать тесты*/}
        <AccountMenu />
        <GovMenu />
        <Alert />
        <Bank />
        <CarShop />
        <Certificate />
        <Donate />
        <GunShop />
        <CarRent />
        <Dialog />
        <Tatoo />
        <IDCard />
        <License />
        <ModalInput />
        <Notification />
        <Phone />
        <RadialMenu />
        <WorkID />
      </div>
    </>
  )
}

// const { EventManager: em } = window;