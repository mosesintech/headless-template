import React from "react"

import Banner, { BannerProps } from "./Banner"
import CallToAction, { CTAProps } from "./CallToAction"
import Carousel, { CarouselProps } from "./Carousel"
import DataTable, { DataTableProps } from "./DataTable"
import Faq, { FaqProps } from "./Faq"
import FeatureLinks, { FeatureLinksProps } from "./FeatureLinks"
import Form, { FormProps } from "./Form"
import Gallery, { GalleryProps } from "./Gallery"
import Hero, { HeroProps } from "./Hero"
import LatestArticles, { LatestArticlesProps } from "./LatestArticles"
import LinkBoxes, { LinkBoxesProps } from "./LinkBoxes"
import List, { ListProps } from "./List"
import Location, { LocationProps } from "./Location"
import Logos, { LogosProps } from "./Logos"
import NavBlock, { NavBlockProps } from "./NavBlock"
import SupportTiers, { SupportTiersProps } from "./SupportTiers"
// import TextArea, { TextAreaProps } from "./TextArea"
// import TextBlock, { TextBlockProps } from "./TextBlock"
// import TextImage, { TextImageProps } from "./TextImage"
// import Videos, { VideoProps } from "./Videos"

interface Components {
  Banner: React.FC<BannerProps>
  CallToAction: React.FC<CTAProps>
  Carousel: React.FC<CarouselProps>
  DataTable: React.FC<DataTableProps>
  Faq: React.FC<FaqProps>
  FeatureLinks: React.FC<FeatureLinksProps>
  Form: React.FC<FormProps>
  Gallery: React.FC<GalleryProps>
  Hero: React.FC<HeroProps>
  LatestArticles: React.FC<LatestArticlesProps>
  LinkBoxes: React.FC<LinkBoxesProps>
  List: React.FC<ListProps>
  Location: React.FC<LocationProps>
  Logos: React.FC<LogosProps>
  NavBlock: React.FC<NavBlockProps>
  SupportTiers: React.FC<SupportTiersProps>
  //   TextArea: React.FC<TextAreaProps>
  //   TextBlock: React.FC<TextBlockProps>
  //   TextImage: React.FC<TextImageProps>
  //   Videos: React.FC<VideoProps>
}

interface Props {
  modules?: any
  data?: {
    title?: string
    uri?: string
    slug?: string
  }
}

const components: Components = {
  Banner,
  CallToAction,
  Carousel,
  DataTable,
  Faq,
  FeatureLinks,
  Form,
  Gallery,
  Hero,
  LatestArticles,
  LinkBoxes,
  List,
  Location,
  Logos,
  NavBlock,
  SupportTiers,
  //   TextArea,
  //   TextBlock,
  //   TextImage,
  //   Videos,
}

const FlexibleContent: React.FC<Props> = props => {
  const { modules, data } = props

  if (!!modules) {
    return modules
      .filter((module: any) => !!module)
      .map((module: any, index: any) => {
        const { fieldGroupName } = module
        if (!fieldGroupName) {
          return null
        }

        const type: keyof Components = fieldGroupName.split("_").slice(-1)[0]

        const Component = components[type]

        return (
          Component && (
            <div key={index}>
              <Component {...module} {...data} />
            </div>
          )
        )
      })
  }
}

export default FlexibleContent
