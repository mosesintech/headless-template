import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface CTAProps extends FlexibleContentProps {
  ctaTitle?: string
  ctaContent?: string
  ctaPhoneNumber?: string
  ctaBackgroundColor?: string
  ctaButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const CallToAction: React.FC<CTAProps> = props => {
  const {
    title,
    // ctaTitle,
    // ctaContent,
    // ctaPhoneNumber,
    // ctaBackgroundColor,
    // ctaButton,
  } = props

  return (
    <>
      <Edges size="lg">
        <h1>CallToAction</h1>
        <pre>{JSON.stringify(title, null, 2)}</pre>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default CallToAction

export const fragment = graphql`
  fragment CallToAction on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_CallToAction {
      fieldGroupName
      ctaTitle
      ctaContent
      ctaPhoneNumber
      ctaBackgroundColor
      ctaButton {
        target
        title
        url
      }
    }
  }

  #   fragment contactCallToAction on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_CallToAction {
  #       fieldGroupName
  #       ctaTitle
  #       ctaContent
  #       ctaPhoneNumber
  #       ctaBackgroundColor
  #       ctaButton {
  #         target
  #         title
  #         url
  #       }
  #     }
  #   }
`
