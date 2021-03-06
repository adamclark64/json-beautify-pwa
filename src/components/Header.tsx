import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { ThemePicker } from "./ThemePicker"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `tomato`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ThemePicker />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
