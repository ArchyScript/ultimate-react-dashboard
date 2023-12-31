import React, { useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from '../contexts/ContextProvider';



const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  useEffect(() => {
    if (screenSize < 900) setActiveMenu(false)
    else setActiveMenu(true)

  }, [screenSize]);

  const NavButton = ({ title, icon, color, dotColor, customFunc }) => (
    <TooltipComponent content={ title } position='BottomCenter'>
      <button type='button' onClick={ customFunc } className={ `relative rounded-full p-3 hover:bg-light-gray` } style={ { color } }  >
        <span className={ `inline-flex absolute rounded-full h-2 w-2  right-2 top-2` } style={ { background: dotColor } } />
        <span className='text-xl '> { icon }   </span>
      </button>
    </TooltipComponent>
  )


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        color={ currentColor }
        dotColor=''
        customFunc={ () => setActiveMenu((prevValue) => !prevValue) }
        icon={ <AiOutlineMenu /> }
      />

      {/*  */ }
      <div className="flex space-x-1.5">
        <NavButton
          title='Cart'
          color={ currentColor }
          dotColor='#03c9d7'
          customFunc={ () => handleClick('cart') }
          icon={ <FiShoppingCart /> }
        />

        <NavButton
          title='Chat'
          color={ currentColor }
          dotColor='#03c9d7'
          customFunc={ () => handleClick('chat') }
          icon={ <BsChatLeft /> }
        />

        <NavButton
          title='Notification'
          color={ currentColor }
          dotColor=''
          customFunc={ () => handleClick('notification') }
          icon={ <RiNotification3Line /> }
        />

        <TooltipComponent content="Profile" position='BottomCenter'>
          <div
            onClick={ () => handleClick('userProfile') }
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg "
          >
            <img src={ avatar } alt="" className='rounded-full w-8 h-8' />

            <p>
              <span className='text-gray-400 text-sm'>
                Hi,
              </span>
              <span className='text-gray-400 text-sm font-bold'>
                { ` ArchyScript` }
              </span>
            </p>
            <MdKeyboardArrowDown className='text-sm text-gray-400' />
          </div>
        </TooltipComponent>

        { isClicked.cart && <Cart /> }
        { isClicked.chat && <Chat /> }
        { isClicked.notification && <Notification /> }
        { isClicked.userProfile && <UserProfile /> }
      </div>
    </div>
  )
}

export default Navbar