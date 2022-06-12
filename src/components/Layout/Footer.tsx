import React from "react"

import FooterMenu from "./Menus/FooterMenu"

const Footer = () => {
  return (
    <>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        <FooterMenu />
      </footer>
    </>
  )
}

export default Footer
