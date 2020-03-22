import React from "react"

export const globalContext = React.createContext({ theme: "" })

export const useGlobalState = () => {
  return React.useContext(globalContext)
}

export const useProvideState = () => {
  const [state, setState] = React.useState({ theme: "" })

  return {
    state,
    setState,
  }
}
