import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface FeatureLinksProps extends FlexibleContentProps {
  featureLinksTitle?: string
  featureLinksText?: string
  featureLinksBackgroundColor?: string
  featureLinksButton?: {
    target?: string
    title?: string
    url?: string
  }
  featureLinks?: []
}

const FeatureLinks: React.FC<FeatureLinksProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>FEATURE LINKS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default FeatureLinks

export const fragment = graphql`
  fragment FeatureLinks on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_FeatureLinks {
      fieldGroupName
      featureLinksTitle
      featureLinksText
      featureLinksBackgroundColor
      featureLinksButton {
        target
        title
        url
      }
      featureLinks {
        title
        text
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        button {
          target
          title
          url
        }
      }
    }
  }

  #   fragment contactFeatureLinks on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_FeatureLinks {
  #       fieldGroupName
  #       featureLinksTitle
  #       featureLinksText
  #       featureLinksBackgroundColor
  #       featureLinksButton {
  #         target
  #         title
  #         url
  #       }
  #       featureLinks {
  #         title
  #         text
  #         image {
  #           altText
  #           localFile {
  #             childImageSharp {
  #               gatsbyImageData
  #             }
  #           }
  #         }
  #         button {
  #           target
  #           title
  #           url
  #         }
  #       }
  #     }
  #   }
`
