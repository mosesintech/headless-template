import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Parser from "html-react-parser"

import { FlexibleContentProps, ArticleItem } from "../../interfaces"
import Edges from "../Layout/Edges"
import usePostData from "../../hooks/usePostData"
// import useDocData from "../../hooks/useDocData"

export interface LatestArticlesProps extends FlexibleContentProps {
  latestArticlesTitle?: string
  latestArticlesText?: string
  latestArticlesPostType?: string
  latestArticlesPostLimit?: string
  latestArticlesBackgroundColor?: string
  latestArticlesButton?: {
    target?: string
    title?: string
    url?: string
  }
}

interface ArticlesProps {
  title?: string
  text?: string
  button?: {
    target?: string
    title?: string
    url?: string
  }
  items?: any
}

const LatestArticles: React.FC<LatestArticlesProps> = props => {
  const {
    latestArticlesTitle,
    latestArticlesText,
    latestArticlesPostType,
    latestArticlesPostLimit,
    latestArticlesButton,
  } = props

  const { allWpPost } = usePostData()
  //   const { allWpDoc } = useDocData()
  const posts = allWpPost.nodes.slice(0, latestArticlesPostLimit)
  //   const docs = allWpDoc.nodes.slice(0, latestArticlesPostLimit)

  if (
    !!latestArticlesPostType &&
    latestArticlesPostType.toLowerCase() === "post"
  ) {
    return (
      <>
        <Articles
          title={latestArticlesTitle}
          text={latestArticlesText}
          button={latestArticlesButton}
          items={posts}
        />
      </>
    )
  }

  // This section is for a custom post type
  //   if (
  //     !!latestArticlesPostType &&
  //     latestArticlesPostType.toLowerCase().includes("doc")
  //   ) {
  //     return (
  //       <>
  //         <Articles
  //           title={latestArticlesTitle}
  //           text={latestArticlesText}
  //           button={latestArticlesButton}
  //           items={docs}
  //         />
  //       </>
  //     )
  //   }

  return (
    <>
      <h1>LATEST ARTICLES</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

const Articles: React.FC<ArticlesProps> = props => {
  const { title, text, items, button } = props

  return (
    <>
      <Edges size="lg">
        {title && (
          <>
            <h2 children={title} />
            {text && <p children={text} />}
          </>
        )}

        {items && (
          <>
            {items.map((item: ArticleItem) => {
              const image =
                item?.thumbnail?.node?.localFile &&
                getImage(item.thumbnail.node.localFile)

              return (
                <>
                  <div key={item.title || item.excerpt}>
                    {image && (
                      <Link to={item.uri}>
                        <GatsbyImage
                          image={image}
                          alt={item?.thumbnail?.node?.altText || ""}
                          className="h-48 w-full object-cover"
                        />
                      </Link>
                    )}

                    <p>
                      {item.categories &&
                        item.categories.nodes.map(
                          (cat: { name: string; uri: string }, i: number) => {
                            return (
                              <Link
                                to={cat.uri}
                                className={`${
                                  i === 0 ? "" : "ml-[3px]"
                                } text-indigo-600 hover:text-indigo-600`}
                                children={cat.name}
                              />
                            )
                          }
                        )}
                    </p>

                    {item.title && (
                      <p>
                        <Link to={item.uri} children={item.title} />
                      </p>
                    )}

                    {item.excerpt && <p>{Parser(item.excerpt)}</p>}
                  </div>
                </>
              )
            })}

            {button && (
              <Link to={button.url || ""}>
                <span>{button.title}</span>
              </Link>
            )}
          </>
        )}
      </Edges>
    </>
  )
}

export default LatestArticles

export const fragment = graphql`
  fragment LatestArticles on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_LatestArticles {
      fieldGroupName
      latestArticlesTitle
      latestArticlesText
      latestArticlesPostType
      latestArticlesPostLimit
      latestArticlesBackgroundColor
      latestArticlesButton {
        target
        title
        url
      }
    }
  }

  #   fragment contactLatestArticles on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_LatestArticles {
  #       fieldGroupName
  #       latestArticlesTitle
  #       latestArticlesText
  #       latestArticlesPostType
  #       latestArticlesPostLimit
  #       latestArticlesBackgroundColor
  #       latestArticlesButton {
  #         target
  #         title
  #         url
  #       }
  #     }
  #   }
`
