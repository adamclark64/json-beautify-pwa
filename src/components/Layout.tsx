import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header"
import { globalContext, useProvideState, State } from "../../utils/globalState"

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ProvideState>
      <Header siteTitle={data.site.siteMetadata.title} />
      <>
        <MainWrapper>{children}</MainWrapper>
        <footer>
          © {new Date().getFullYear()}, Built with 🧇 && 🍕 && 🥓
        </footer>
      </>
    </ProvideState>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const MainWrapper = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`

const ProvideState = ({ children }) => {
  const theme: State = useProvideState()
  return (
    <globalContext.Provider value={theme}>{children}</globalContext.Provider>
  )
}

// const ConsumeState = ({ children }) => {
//   return <globalContext.Consumer>{children}</globalContext.Consumer>
// }
