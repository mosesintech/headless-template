import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface SupportTiersProps extends FlexibleContentProps {
  supportTiersTitle?: string
  supportTiersText?: string
  supportTiersBackgroundColor?: string
  supportTiersButton?: {
    target?: string
    title?: string
    url?: string
  }
  supportTiersCategories?: []
  supportTiersFeatures?: []
}

const SupportTiers: React.FC<SupportTiersProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>SUPPORT TIERS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default SupportTiers

export const fragment = graphql`
  fragment SupportTiers on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_SupportTiers {
      fieldGroupName
      supportTiersTitle
      supportTiersText
      supportTiersBackgroundColor
      supportTiersButton {
        target
        title
        url
      }
      supportTiersCategories {
        category
      }
      supportTiersFeatures {
        featureTitle
        featureSupport {
          supported
        }
      }
    }
  }

  #   fragment contactSupportTiers on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_SupportTiers {
  #       fieldGroupName
  #       supportTiersTitle
  #       supportTiersText
  #       supportTiersBackgroundColor
  #       supportTiersButton {
  #         target
  #         title
  #         url
  #       }
  #       supportTiersCategories {
  #         category
  #       }
  #       supportTiersFeatures {
  #         featureTitle
  #         featureSupport {
  #           supported
  #         }
  #       }
  #     }
  #   }
`
