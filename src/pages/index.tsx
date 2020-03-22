import React from "react"

import Layout from "../components/Layout"
import Main from "../components/Main/Main"
import { globalContext, useProvideState } from "../../utils/globalState"

export const IndexPage = () => {}

export default () => (
  <ProvideState>
    <Layout>
      <Main />
    </Layout>
  </ProvideState>
)

const ProvideState = ({ children }) => {
  const auth: any = useProvideState()
  return (
    <globalContext.Provider value={auth}>{children}</globalContext.Provider>
  )
}

const ConsumeState = ({ children }) => {
  return <globalContext.Consumer>{children}</globalContext.Consumer>
}
