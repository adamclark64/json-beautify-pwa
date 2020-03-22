import React from "react"
import beautify from "json-beautify"
import { CodeMirror } from "../CodeMirror"

export default () => {
  const [inputValue, updateInputValue] = React.useState("")
  const [outputValue, updateOutputValue] = React.useState({})
  return (
    <>
      <CodeMirror
        value={inputValue}
        onBeforeChange={(editor, data, value) => {
          console.log("onBeforeChange val", value)
          if (!value.length) {
            return
          }
          updateInputValue(value)
          handleUpdateOutputValue({ updateOutputValue, value })
        }}
      />
      <CodeMirror
        value={format(outputValue)}
        onBeforeChange={(editor, data, value) => {
          console.log("beauty onBeforeChange val", value)
        }}
      />
    </>
  )
}

const isJsonString = (str: string) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

const handleUpdateOutputValue = ({ value, updateOutputValue }) => {
  if (isJsonString(value)) {
    return updateOutputValue(JSON.parse(value))
  }
  return {}
}

const replacer: any = null
const format = (blob: object) => {
  if (Object.keys(blob).length === 0 && blob.constructor === Object) {
    return
  }
  return beautify(blob, replacer, 2, 80)
}
