import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface HeroProps extends FlexibleContentProps {
  heroTitle?: string
  //   heroSubtitle?: string
  heroText?: string
  heroImage?: {} // Add to WordPress
  heroBackgroundColor?: string
  heroBackgroundVideo?: string
  heroBackgroundImage?: {}
  heroSingleImage?: {
    image: {
      localFile: IGatsbyImageData
      altText: string
    }
  }
  heroGallery?: []
  heroPrimaryButton?: {
    target?: string
    title?: string
    url?: string
  }
  heroSecondaryButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const Hero: React.FC<HeroProps> = props => {
  const {
    heroTitle,
    heroText,
    heroGallery,
    heroSingleImage,
    heroPrimaryButton,
    heroSecondaryButton,
  } = props

  const image =
    heroSingleImage?.image?.localFile &&
    getImage(heroSingleImage.image?.localFile)
  return (
    <>
      <Edges size="lg">
        {heroTitle && <h1>{heroTitle}</h1>}
        {heroText && <p children={heroText} />}
        {heroGallery && <pre>{JSON.stringify(heroGallery, null, 2)}</pre>}
        {image && (
          <GatsbyImage
            image={image}
            alt={heroSingleImage?.image?.altText || ""}
          />
        )}
        {heroPrimaryButton && (
          <Link to={`${heroPrimaryButton.url}`}>{heroPrimaryButton.title}</Link>
        )}
        {heroSecondaryButton && (
          <Link to={`${heroSecondaryButton.url}`}>
            {heroSecondaryButton.title}
          </Link>
        )}
      </Edges>
    </>
  )
}

export default Hero

export const fragment = graphql`
  fragment Hero on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Hero {
      fieldGroupName
      heroTitle
      #   heroSubtitle
      heroText
      heroBackgroundColor
      heroBackgroundVideo
      heroBackgroundImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heroPrimaryButton {
        target
        title
        url
      }
      heroSecondaryButton {
        target
        title
        url
      }
      heroGallery {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heroSingleImage {
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }

  #   fragment contactHero on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Hero {
  #       fieldGroupName
  #       heroTitle
  #       heroSubtitle
  #       heroText
  #       heroBackgroundColor
  #       heroBackgroundVideo
  #       heroBackgroundImage {
  #         altText
  #         localFile {
  #           childImageSharp {
  #             gatsbyImageData
  #           }
  #         }
  #       }
  #       heroButton {
  #         target
  #         title
  #         url
  #       }
  #       heroSecondaryButton {
  #         target
  #         title
  #         url
  #       }
  #       heroGallery {
  #         altText
  #       }
  #     }
  #   }
`
