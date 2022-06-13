import { graphql } from "gatsby"

export const defaultFragment = graphql`
  fragment DefaultTemplateFragment on WpDefaultTemplate {
    templateName
    flexibleContentModules {
      contentModule {
        ...Banner
        ...CallToAction
        ...Carousel
        # ...CompareProducts
        # ...DataTable
        # ...Faq
        # ...FeatureLinks
        # ...Form
        # ...Gallery
        # ...Hero
        # ...LatestArticles
        # ...LinkBoxes
        # ...List
        # ...Logos
        # ...NavBlock
        # ...Selection
        # ...SupportTiers
        # ...Switch
        # ...TextArea
        # ...TextBlock
        # ...TextImage
        # ...Videos
      }
    }
  }
`
