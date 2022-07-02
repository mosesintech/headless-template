import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface LogosProps extends FlexibleContentProps {
  logosTitle?: string
  logosText?: string
  logosBackgroundColor?: string
  logosButton?: {
    target?: string
    title?: string
    url?: string
  }
  logos?: []
}

const Logos: React.FC<LogosProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>LOGOS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Logos

export const fragment = graphql`
  fragment Logos on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Logos {
      fieldGroupName
      logosTitle
      logosText
      logosBackgroundColor
      logosButton {
        target
        title
        url
      }
      logos {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 200, height: 200)
          }
        }
      }
    }
  }

  #   fragment contactLogos on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Logos {
  #       fieldGroupName
  #       logosTitle
  #       logosText
  #       logosBackgroundColor
  #       logosButton {
  #         target
  #         title
  #         url
  #       }
  #       logos {
  #         altText
  #       }
  #     }
  #   }
`
