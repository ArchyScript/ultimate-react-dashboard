import React, { createContext, useContext, useState } from "react"

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (value) => {
    setCurrentMode(value);
    setThemeSettings(false)
    localStorage.setItem('themeMode', value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    setThemeSettings(false)
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }

  const contextValues = {
    currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings
  }

  return (
    <StateContext.Provider
      value={ contextValues }
    >
      { children }
    </StateContext.Provider >
  )
}


export const useStateContext = () => useContext(StateContext)
