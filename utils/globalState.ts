import React from "react"

export const globalContext = React.createContext({
  theme: "tomorrow-night-eighties",
  setTheme: () => {},
})

export const useGlobalState = (): State => {
  return React.useContext(globalContext)
}

export const useProvideState = (): State => {
  const [theme, setTheme] = React.useState("tomorrow-night-eighties")

  return {
    theme,
    setTheme,
  }
}

export interface State {
  theme: string
  setTheme: Function
}
