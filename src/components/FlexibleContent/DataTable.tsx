import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface DataTableProps extends FlexibleContentProps {
  dataTableTitle?: string
  dataTableText?: string
  dataTableBackgroundColor?: string
  dataTableButton?: {
    target?: string
    title?: string
    url?: string
  }
  dataTable?: {
    columns?: []
  }
}

const DataTable: React.FC<DataTableProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>DATA TABLE</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default DataTable

export const fragment = graphql`
  fragment DataTable on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_DataTable {
      fieldGroupName
      dataTableTitle
      dataTableText
      dataTableBackgroundColor
      dataTableButton {
        target
        title
        url
      }
      dataTable {
        columns {
          heading
          row {
            item
          }
        }
      }
    }
  }

  #   fragment contactDataTable on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_DataTable {
  #       fieldGroupName
  #       dataTableTitle
  #       dataTableText
  #       dataTableBackgroundColor
  #       dataTableButton {
  #         target
  #         title
  #         url
  #       }
  #       dataTable {
  #         columns {
  #           heading
  #           row {
  #             item
  #           }
  #         }
  #       }
  #     }
  #   }
`
