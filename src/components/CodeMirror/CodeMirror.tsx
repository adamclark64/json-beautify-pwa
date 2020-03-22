import React from "react"
import styled from "styled-components"
import { UnControlled as CodeMirror } from "react-codemirror2"

import "codemirror/lib/codemirror.css"
import "codemirror/theme/tomorrow-night-eighties.css"
import "./codeMirror.css"

export default ({ value, onBeforeChange }) => (
  <StyledCodeMirror
    value={value}
    options={{
      mode: "json",
      theme: "tomorrow-night-eighties",
      lineNumbers: true,
    }}
    onBeforeChange={onBeforeChange}
  />
)

const StyledCodeMirror = styled(CodeMirror)`
  overflow: scroll;
`
