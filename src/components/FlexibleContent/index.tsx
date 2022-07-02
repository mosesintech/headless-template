import React, { lazy } from "react"

import { FlexibleContentModules } from "../../interfaces"

const Banner = lazy(() => import("./Banner"))
const CallToAction = lazy(() => import("./CallToAction"))
const Carousel = lazy(() => import("./Carousel"))
const DataTable = lazy(() => import("./DataTable"))
const Faq = lazy(() => import("./Faq"))
const FeatureLinks = lazy(() => import("./FeatureLinks"))
const Form = lazy(() => import("./Form"))
const Gallery = lazy(() => import("./Gallery"))
const Hero = lazy(() => import("./Hero"))
const LatestArticles = lazy(() => import("./LatestArticles"))
const LinkBoxes = lazy(() => import("./LinkBoxes"))
const List = lazy(() => import("./List"))
const Location = lazy(() => import("./Location"))
const Logos = lazy(() => import("./Logos"))
const NavBlock = lazy(() => import("./NavBlock"))
const SupportTiers = lazy(() => import("./SupportTiers"))
const TextArea = lazy(() => import("./TextArea"))
const TextBlock = lazy(() => import("./TextBlock"))
const TextImage = lazy(() => import("./TextImage"))
const Videos = lazy(() => import("./Videos"))

interface Props {
  modules?: any
  data?: {
    title?: string
    uri?: string
    slug?: string
  }
}

const components: FlexibleContentModules = {
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
  TextArea,
  TextBlock,
  TextImage,
  Videos,
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

        const type: keyof FlexibleContentModules = fieldGroupName
          .split("_")
          .slice(-1)[0]

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
