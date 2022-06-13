import React from "react"
import { Provider } from "urql"
import client from "./client"

export const wrapRootElement = ({ element }: any) => (
  <Provider value={client}>{element}</Provider>
)
