import React from "react"
import { Menu, Dropdown, Button } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { themes } from "./themes"

import "antd/dist/antd.css"
import { useGlobalState } from "../../../utils/globalState"

export default () => {
  const { theme, setTheme } = useGlobalState()

  const handleMenuClick = (e) => {
    setTheme(e.item.props.children[1].props.children)
  }

  const menu = (
    <Menu
      style={{ height: "50vh", overflowY: "scroll" }}
      theme="dark"
      onClick={handleMenuClick}
    >
      {themes.map((theme, key) => {
        return (
          <Menu.Item key={key}>
            <span>{theme.trim()}</span>
          </Menu.Item>
        )
      })}
    </Menu>
  )
  return (
    <>
      <h2>Current theme: {theme}</h2>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>
          Choose A Theme <DownOutlined />
        </Button>
      </Dropdown>
    </>
  )
}

// const StyledMenu = styled(Menu)`
//   height: 200px;
//   overflow: scroll;
// `
