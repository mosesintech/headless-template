import * as React from "react"

import HeaderMenu from "./Menus/HeaderMenu"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
    }}
  >
    <HeaderMenu />
  </header>
)

export default Header
