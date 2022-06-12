import React from "react"
import { Link } from "gatsby"

import useMenu from "../../../hooks/useMenu"

export default function FooterMenu() {
  const menuItems = useMenu({ slug: "footer-menu" })

  return (
    <>
      {menuItems &&
        menuItems.map((item: any) => {
          return (
            <Link
              to={item.connectedNode.node.uri}
              style={{ marginRight: "15px" }}
            >
              {item.label}
            </Link>
          )
        })}
    </>
  )
}
