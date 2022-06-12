import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface BannerProps extends FlexibleContentProps {
  bannerTitle?: string
  bannerContent?: string
  bannerBackgroundColor?: string
  bannerLink?: {
    target?: string
    title?: string
    url?: string
  }
}

const Banner: React.FC<BannerProps> = props => {
  const {
    title,
    // uri,
    // slug,
    // bannerTitle,
    // bannerContent,
    // bannerBackgroundColor,
    // bannerLink,
  } = props

  return (
    <>
      <Edges size="lg">
        <h1>BANNER</h1>
        <pre>{JSON.stringify(title, null, 2)}</pre>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Banner

export const fragment = graphql`
  fragment Banner on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Banner {
      fieldGroupName
      bannerTitle
      bannerContent
      bannerBackgroundColor
      bannerLink {
        target
        title
        url
      }
    }
  }

  #   fragment contactBanner on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Banner {
  #       fieldGroupName
  #       bannerTitle
  #       bannerContent
  #       bannerBackgroundColor
  #       bannerLink {
  #         target
  #         title
  #         url
  #       }
  #     }
  #   }
`
