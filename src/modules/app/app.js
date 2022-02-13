import React  from 'react';
import '../../css/base.css'
import '../../css/adaptive.css'
import '../../css/animate.css'
import Background                     from '../bg'
import TestModal                      from '../test-modal'
import Walkietalkie                   from '../walkietalkie/Walkietalkie';
import AuthMain                       from '../authorization/AuthMain';
import CharacterSelection             from '../characterSelection/characterSelection';
import CharacterEditor                from '../characterEditor/characterEditor';  
//import EditorPlayer                   from '../editorplayer/EditorPlayer';
import Hud                            from '../hud/Hud';
import Inventory                      from '../inventory/Inventory'  
import AccountMenu                    from '../accountmenu/AccountMenu'
// import GovMenu                        from '../govmenu/GovMenu'
import Alert                          from '../alert/Alert'
import Bank                           from '../bank/Bank'
import CarShop                        from '../carshop/CarShop'
import Certificate                    from '../certificate/Certificate'
import DonateMenu                     from '../donate/DonateMenu'
import GunShop                        from '../hudmenus/gunshop/GunShop';
import CarRent                        from '../hudmenus/carrent/CarRent';
import Dialog                         from '../hudmenus/dialog/Dialog';
import Tatoo                          from '../hudmenus/tatoo/Tatoo';
import IDCard                         from '../idcard/IDCard';
import License                        from '../license/License';
import ModalInput                     from '../modalinput/ModalInput';
import DialogModal                    from '../dialog/dialog';
import Phone                          from '../phone/Phone';
import RadialMenu                     from '../radialmenu/radialMenu';
import WorkID                         from '../workid/WorkID';
import Notifications                  from '../notifications/notifications';


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
      <Walkietalkie />
      <Notifications />
      <div className="box" id="box">
        <AuthMain />
        <CharacterSelection/>
        <CharacterEditor/>
        {/* <EditorPlayer/> */}
        <Hud />
        <Inventory />
        {/* TODO  // Дописать тесты*/}
        <AccountMenu />
        {/* <GovMenu /> */}
        <Alert />
        <Bank />
        <CarShop />
        <Certificate />
        <DonateMenu />
        <GunShop />
        <CarRent />
        <Dialog />
        <Tatoo />
        <IDCard />
        <License />
        <ModalInput />
        <DialogModal />
        <Phone />
        <RadialMenu />
        <WorkID />
      </div>
    </>
  )
}

// const { EventManager: em } = window;