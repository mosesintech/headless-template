import React from "react"
import { graphql } from "gatsby"
import Parser from "html-react-parser"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextBlockProps extends FlexibleContentProps {
  textBlockTitle?: string
  textBlockText?: string
  textBlockLocation?: string
  textBlockBackgroundColor?: string
  textBlockButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const TextBlock: React.FC<TextBlockProps> = props => {
  const { textBlockTitle, textBlockText, textBlockLocation, textBlockButton } =
    props
  return (
    <>
      <Edges size="lg">
        {textBlockLocation === "Below Title" ? (
          <>{textBlockTitle && <h2 children={textBlockTitle} />}</>
        ) : (
          <></>
        )}

        <div>{textBlockText && Parser(textBlockText)}</div>

        {textBlockButton && (
          <a href={textBlockButton.url} children={textBlockButton.title} />
        )}

        {textBlockLocation === "Above Title" ? (
          <>{textBlockTitle && <h2 children={textBlockTitle} />}</>
        ) : (
          <></>
        )}
      </Edges>
    </>
  )
}

export default TextBlock

export const fragment = graphql`
  fragment TextBlock on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextBlock {
      fieldGroupName
      textBlockTitle
      textBlockText
      textBlockLocation
      textBlockBackgroundColor
      textBlockButton {
        target
        title
        url
      }
    }
  }

  #   fragment contactTextBlock on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextBlock {
  #       fieldGroupName
  #       textBlockTitle
  #       textBlockText
  #       textBlockLocation
  #       textBlockBackgroundColor
  #       textBlockButton {
  #         target
  #         title
  #         url
  #       }
  #     }
  #   }
`
