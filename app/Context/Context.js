'use client'
import React from 'react'
import { useState,createContext } from 'react'

export const SideBar = createContext(false)

const Context = ({children}) => {

const [open,SetOpen] = useState(true)


  return (
    <SideBar.Provider value={{open,SetOpen}}>{children}</SideBar.Provider>
  )
}

export default Context