import React from "react"
import { Link } from "gatsby"
import prettier from "prettier/standalone"

import { UnControlled as CodeMirror } from "react-codemirror2"
import Layout from "../components/Layout"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
const plugins = [require("prettier/parser-graphql")];

const testblob = `{"allOn":"Single","Line":"example","noSpace":true,"quote":{"singleQuote":"example","indented":true},"phoneNumbers":[{"type":"home","number":"212 555-1234"},{"type":"office","trailing":"commas by accident"}]}`

const format = blob => {
  // return prettier.format(blob, {   plugins: [prettier_pluginPhp],
  // parser: ["php"] })
  return prettier.format(`query Browse($offset: Int, $limit: Int, $categories: [String!], $search: String) {
  browse(limit: $limit, offset: $offset, categories: $categories, search: $search) {
    total,
    results {
        title
        price
    }
  }
}`, { parser: "graphql", plugins })
}
export const IndexPage = () => (
  <>
    <h2>Hi people</h2>
    <p>
      The starter is a fork from default starter, with TypeScript and service
      worker support.
    </p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to another page</Link>
    </p>
    <CodeMirror
      value={`query Browse($offset: Int, $limit: Int, $categories: [String!], $search: String) {
  browse(limit: $limit,
     offset: $offset, categories: 
     $categories, search: $search) {
    total,
    results {
        title
        price
    }
  }
}`}
      options={{
        mode: "javascript",
        theme: "material",
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        console.log("val", value)
      }}
      onChange={(editor, data, value) => {}}
    />
    <hr/>
    <CodeMirror
      value={format(testblob)}
      options={{
        mode: "javascript",
        theme: "material",
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        console.log("val", value)
      }}
      onChange={(editor, data, value) => {}}
    />
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
