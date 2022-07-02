import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import Parser from "html-react-parser"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextImageProps extends FlexibleContentProps {
  textImageTitle?: string
  textImageSubtitle?: string
  textImageText?: string
  textImagePosition?: string
  textImageBackgroundColor?: string
  textImageButton?: {
    target?: string
    title?: string
    url?: string
  }
  textImage?: {
    localFile?: IGatsbyImageData
    altText?: string
  }
  altImage?: {
    localFile?: IGatsbyImageData
    altText?: string
  }
}

const TextImage: React.FC<TextImageProps> = props => {
  const {
    textImageTitle,
    textImageSubtitle,
    textImageText,
    textImagePosition,
    textImageButton,
    textImage,
    altImage,
  } = props

  const image = textImage?.localFile && getImage(textImage.localFile)
  const alternativeImage = altImage?.localFile && getImage(altImage.localFile)
  const aboveTitle = textImagePosition === "Above Title"
  const belowTitle = textImagePosition === "Below Title"
  const belowText = textImagePosition === "Below Text"

  return (
    <>
      <Edges size="lg">
        {/* 
            Ternary checks Left of Text first, then Right of Text.
            If neither, then returns default layout.
        */}
        {textImagePosition === "Left of Text" ? (
          <>
            {textImageTitle && <h2 children={textImageTitle} />}

            {textImageSubtitle && <h3 children={textImageSubtitle} />}

            {image && (
              <GatsbyImage image={image} alt={textImage?.altText || ""} />
            )}

            <div>{textImageText && Parser(textImageText)}</div>

            {textImageButton && (
              <a href={textImageButton.url} children={textImageButton.title} />
            )}
          </>
        ) : textImagePosition === "Right of Text" ? (
          <>
            {textImageTitle && <h2 children={textImageTitle} />}

            {textImageSubtitle && <h3 children={textImageSubtitle} />}

            {image && (
              <GatsbyImage image={image} alt={textImage?.altText || ""} />
            )}

            <div>{textImageText && Parser(textImageText)}</div>

            {textImageButton && (
              <a href={textImageButton.url} children={textImageButton.title} />
            )}
          </>
        ) : (
          <>
            {/* Above Title, Below Title, Below Text options */}
            {aboveTitle && (
              <>
                <figure>
                  {alternativeImage && (
                    <GatsbyImage
                      image={alternativeImage}
                      alt={altImage?.altText || ""}
                    />
                  )}
                </figure>
              </>
            )}

            {textImageTitle && <h2 children={textImageTitle} />}

            {textImageSubtitle && <h3 children={textImageSubtitle} />}

            {belowTitle && (
              <>
                {alternativeImage && (
                  <GatsbyImage
                    image={alternativeImage}
                    alt={altImage?.altText || ""}
                  />
                )}
              </>
            )}

            <div>{textImageText && Parser(textImageText)}</div>

            {textImageButton && (
              <a href={textImageButton.url} children={textImageButton.title} />
            )}

            {belowText && (
              <>
                {alternativeImage && (
                  <GatsbyImage
                    image={alternativeImage}
                    alt={altImage?.altText || ""}
                  />
                )}
              </>
            )}
          </>
        )}
      </Edges>
    </>
  )
}

export default TextImage

export const fragment = graphql`
  fragment TextImage on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextImage {
      fieldGroupName
      textImageTitle
      textImageText
      textImagePosition
      textImageBackgroundColor
      textImageButton {
        target
        title
        url
      }
      textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1184, height: 1376, placeholder: BLURRED)
          }
        }
      }
      altImage: textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1310, height: 873, placeholder: BLURRED)
          }
        }
      }
    }
  }

  #   fragment contactTextImage on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextImage {
  #       fieldGroupName
  #       textImageTitle
  #       textImageText
  #       textImagePosition
  #       textImageBackgroundColor
  #       textImageButton {
  #         target
  #         title
  #         url
  #       }
  #       textImage {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData(width: 1184, height: 1376, placeholder: BLURRED)
  #           }
  #         }
  #       }
  #       altImage: textImage {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData(width: 1310, height: 873, placeholder: BLURRED)
  #           }
  #         }
  #       }
  #     }
  #   }
`
