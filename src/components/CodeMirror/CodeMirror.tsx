import React from "react"
import styled from "styled-components"
import { Controlled as CodeMirror } from "react-codemirror2"

import "./themeImports"
import "codemirror/lib/codemirror.css"
import "./codeMirror.css"

import { useGlobalState } from "../../../utils/globalState"

export default ({ value, onBeforeChange }) => {
  const { theme } = useGlobalState()
  return (
    <StyledCodeMirror
      value={value}
      options={{
        mode: "javascript",
        theme,
        lineNumbers: true,
        lineWrapping: true,
      }}
      onBeforeChange={onBeforeChange}
      onChange={onBeforeChange}
    />
  )
}

const StyledCodeMirror = styled(CodeMirror)`
  display: flex;
  justify-content: center;
`
