import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from '../contexts/ContextPRovoder';


const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  const activeLink = 'flex items-center space-x-5 px-4 py-3 rounded-lg text-white  '
  const normalLink = 'flex items-center space-x-5 px-4 py-3 rounded-lg   text-grey-700 dark:text-grey-200 dark:hover:text-black hover:bg-light-gray'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      { activeMenu && (
        <>
          <div className='flex justify-between items-center  '>
            <Link to="/" onClick={ () => { setActiveMenu(false) } } className='flex items-center space-x-3 ml-3 mt-4 text-xl font-extrabold trancking-tight dark:text-white text-slate-900 ' >
              <SiShopware />
              <span>Shoppy</span>
            </Link>

            <TooltipComponent content="Menu" position='BottomCenter'>
              <button
                type='button'
                onClick={ () => { setActiveMenu((prevActiveMenu) => !prevActiveMenu) } }
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className='mt-10 space-y-4'>
            { links.map(item => (
              <div key={ item.title } className='space-y-3'>
                <h5 className='text-gray-400 mx-3 uppercase'>
                  { item.title }
                </h5>

                <div className='space-y-2'>

                  { item.links.map((link) => (
                    <NavLink to={ `/${link.name}` } key={ link.name } onClick={ () => { } } className={ ({ isActive }) => isActive ? activeLink : normalLink }>
                      { link.icon }
                      <span className='capitalize'>
                        { link.name }
                      </span>
                    </NavLink>
                  )) }
                </div>
              </div>
            )) }
          </div>
        </>

      ) }
    </div>
  )
}

export default Sidebar