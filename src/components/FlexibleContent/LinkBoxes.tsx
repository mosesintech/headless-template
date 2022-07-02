import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

type LinkBox = {
  title?: string
  text?: string
  image?: {
    altText?: string
    localFile?: any
  }
  button?: {
    target?: string
    title?: string
    url?: string
  }
}

export interface LinkBoxesProps extends FlexibleContentProps {
  linkBoxesTitle?: string
  linkBoxesText?: string
  linkBoxesBackgroundColor?: string
  linkBoxesButton?: {
    target?: string
    title?: string
    url?: string
  }
  linkBoxes?: Array<LinkBox>
}

const LinkBoxes: React.FC<LinkBoxesProps> = props => {
  const { linkBoxesTitle, linkBoxesText, linkBoxesButton, linkBoxes } = props

  return (
    <>
      <Edges size="lg">
        {linkBoxesTitle && (
          <div>
            <h2 children={linkBoxesTitle} />
            {linkBoxesText && <p children={linkBoxesText} />}
          </div>
        )}

        {linkBoxes && (
          <>
            {linkBoxes.map(box => {
              const image =
                box?.image?.localFile && getImage(box.image.localFile)

              return (
                <>
                  <div key={box.title || box.text}>
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={box?.image?.altText || ""}
                      />
                    )}
                    <div>
                      <div>
                        <span>
                          {box.title && <p>{box.title}</p>}
                          {box.text && <p>{box.text}</p>}
                        </span>

                        {box.button && (
                          <a
                            href={box.button.url}
                            children={box.button.title}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </>
        )}

        {linkBoxesButton && (
          <Link to={linkBoxesButton.url || ""}>
            <span>{linkBoxesButton.title}</span>
          </Link>
        )}
      </Edges>
    </>
  )
}

export default LinkBoxes

export const fragment = graphql`
  fragment LinkBoxes on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_LinkBoxes {
      fieldGroupName
      linkBoxesTitle
      linkBoxesText
      linkBoxesBackgroundColor
      linkBoxesButton {
        target
        title
        url
      }
      linkBoxes {
        title
        text
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: SOUTH }
                placeholder: BLURRED
              )
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

  #   fragment contactLinkBoxes on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_LinkBoxes {
  #       fieldGroupName
  #       linkBoxesTitle
  #       linkBoxesText
  #       linkBoxesBackgroundColor
  #       linkBoxesButton {
  #         target
  #         title
  #         url
  #       }
  #       linkBoxes {
  #         title
  #         text
  #         image {
  #           altText
  #           localFile {
  #             childImageSharp {
  #               gatsbyImageData(
  #                 transformOptions: { cropFocus: SOUTH }
  #                 placeholder: BLURRED
  #               )
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
