import React, { useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from '../contexts/ContextPRovoder';



const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  const NavButton = ({ title, icon, color, dotColor, customFunc }) => (
    <TooltipComponent content={ title } position='BottomCenter'>
      <button type='button' onClick={ customFunc } className={ `relative text-3xl rounded-full p-3 hover:bg-light-gray text-[${color}]` } >
        <span className={ `inline-flex absolute rounded-full h-2 w-2 right-2 top-2 bg-[${dotColor}]` } >
          { icon }
        </span>
      </button>
    </TooltipComponent>
  )


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' color='blue' customFunc={ () => setActiveMenu((prevValue) => !prevValue) } icon={ <AiOutlineMenu /> } />

    </div>
  )
}

export default Navbar