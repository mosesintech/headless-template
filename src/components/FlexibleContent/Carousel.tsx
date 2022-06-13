import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface CarouselProps extends FlexibleContentProps {
  carouselTitle?: string
  carouselText?: string
  carouselBackgroundColor?: string
  carouselButton?: {
    target?: string
    title?: string
    url?: string
  }
  carouselCard?: []
}

const Carousel: React.FC<CarouselProps> = props => {
  const {
    title,
    // uri,
    // slug,
    // carouselTitle,
    // carouselText,
    // carouselBackgroundColor,
    // carouselButton,
    // carouselCard,
  } = props

  return (
    <>
      <Edges size="lg">
        <h1>CAROUSEL</h1>
        <pre>{JSON.stringify(title, null, 2)}</pre>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Carousel

export const fragment = graphql`
  fragment Carousel on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Carousel {
      fieldGroupName
      carouselTitle
      carouselText
      carouselBackgroundColor
      carouselCard {
        title
        text
        link {
          target
          title
          url
        }
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      carouselButton {
        target
        title
        url
      }
    }
  }

  #   fragment contactCarousel on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Carousel {
  #       fieldGroupName
  #       carouselTitle
  #       carouselText
  #       carouselBackgroundColor
  #       carouselCard {
  #         title
  #         text
  #         link {
  #           target
  #           title
  #           url
  #         }
  #         image {
  #           altText
  #           localFile {
  #             childImageSharp {
  #               gatsbyImageData
  #             }
  #           }
  #         }
  #       }
  #       carouselButton {
  #         target
  #         title
  #         url
  #       }
  #     }
  #   }
`
