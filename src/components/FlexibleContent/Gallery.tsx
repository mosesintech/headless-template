import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface GalleryProps extends FlexibleContentProps {
  galleryTitle?: string
  galleryText?: string
  galleryBackgroundColor?: string
  galleryButton?: {
    target?: string
    title?: string
    url?: string
  }
  imageGallery?: []
}

const Gallery: React.FC<GalleryProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>GALLERY</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Gallery

export const fragment = graphql`
  fragment Gallery on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Gallery {
      fieldGroupName
      galleryTitle
      galleryText
      galleryBackgroundColor
      galleryButton {
        target
        title
        url
      }
      imageGallery {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }

  #   fragment contactGallery on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Gallery {
  #       fieldGroupName
  #       galleryTitle
  #       galleryText
  #       galleryBackgroundColor
  #       galleryButton {
  #         target
  #         title
  #         url
  #       }
  #       imageGallery {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData
  #           }
  #         }
  #       }
  #     }
  #   }
`
