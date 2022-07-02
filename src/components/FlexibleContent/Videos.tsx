import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

interface Video {
  videoTitle: string
  videoText: string
  videoEmbedLink: string
  downloadableItems: []
}

export interface VideoProps extends FlexibleContentProps {
  videosTitle?: string
  videosText?: string
  videosBackgroundColor?: string
  videosButton?: {
    target?: string
    title?: string
    url?: string
  }
  videos: []
}

const Videos: React.FC<VideoProps> = props => {
  const { videos } = props
  return (
    <>
      <Edges size="lg">
        <div className="flex justify-around flex-wrap">
          {videos &&
            videos.map((vid: Video) => {
              return (
                <>
                  {vid?.videoTitle && <h3 children={vid.videoTitle} />}

                  {vid?.videoText && <p children={vid.videoText} />}

                  {vid?.videoEmbedLink && (
                    <iframe
                      width="500"
                      height="315"
                      src={`${vid.videoEmbedLink}`}
                      title="video"
                    ></iframe>
                  )}
                  {vid?.downloadableItems && (
                    <ul>
                      {vid?.downloadableItems &&
                        vid.downloadableItems.map(
                          (item: {
                            downloadableItemTitle: string
                            downloadableItemLink: {
                              title: string
                              url: string
                            }
                          }) => {
                            return (
                              <li>
                                {item.downloadableItemTitle && (
                                  <span children={item.downloadableItemTitle} />
                                )}

                                {item.downloadableItemLink && (
                                  <a
                                    href={item.downloadableItemLink.url}
                                    children={item.downloadableItemLink.title}
                                  />
                                )}
                              </li>
                            )
                          }
                        )}
                    </ul>
                  )}
                </>
              )
            })}
        </div>
      </Edges>
    </>
  )
}

export default Videos

export const fragment = graphql`
  fragment Videos on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Videos {
      fieldGroupName
      videosTitle
      videosText
      videosBackgroundColor
      videosButton {
        target
        title
        url
      }
      videos {
        text
        videoEmbedLink
      }
    }
  }

  #   fragment contactVideos on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Videos {
  #       fieldGroupName
  #       videosTitle
  #       videosText
  #       videosBackgroundColor
  #       videosButton {
  #         target
  #         title
  #         url
  #       }
  #       videos {
  #         text
  #         videoEmbedLink
  #       }
  #     }
  #   }
`
