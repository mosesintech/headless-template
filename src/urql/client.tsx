import { createClient } from "urql"

const client = createClient({
  url: `${process.env.GATSBY_WPGRAPHQL_URL}`,
})

export default client
