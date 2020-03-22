import React from "react"
import { Menu, Dropdown, Button } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { themes } from "./themes"

import "antd/dist/antd.css"
import { useGlobalState } from "../../../utils/globalState"

export default () => {
  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button>
        Choose A Theme <DownOutlined />
      </Button>
    </Dropdown>
  )
}

const menu = () => {
  const { state, setState } = useGlobalState()
  return (
    <Menu
      onClick={({ item }) =>
        setState({ theme: item.props.children.props.children })
      }
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
}
