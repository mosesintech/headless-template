import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface FaqProps extends FlexibleContentProps {
  FaqTitle?: string
  FaqText?: string
  FaqBackgroundColor?: string
  FaqButton?: {
    target?: string
    title?: string
    url?: string
  }
  Faq?: []
}

const Faq: React.FC<FaqProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>FAQ</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Faq

export const fragment = graphql`
  fragment Faq on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Faq {
      fieldGroupName
      faqTitle
      faqText
      faqBackgroundColor
      faqButton {
        target
        title
        url
      }
      faq {
        question
        answer
      }
    }
  }

  #   fragment contactFaq on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Faq {
  #       fieldGroupName
  #       faqTitle
  #       faqText
  #       faqBackgroundColor
  #       faqButton {
  #         target
  #         title
  #         url
  #       }
  #       faq {
  #         question
  #         answer
  #       }
  #     }
  #   }
`
