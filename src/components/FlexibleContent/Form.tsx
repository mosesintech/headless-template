import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"
import useGravityData from "../../hooks/useGravityData"
import SingleForm from "../SingleForm"

export interface FormProps extends FlexibleContentProps {
  formId?: string
  formTitle?: string
  formText?: string
  formBackgroundColor?: string
}

const Form: React.FC<FormProps> = props => {
  const {
    formId,
    formTitle,
    formText,
    // formBackgroundColor
  } = props

  const { allWpGravityFormsForm } = useGravityData()

  const form = allWpGravityFormsForm.nodes.find(
    (form: any) => Number(form.formId) === Number(formId)
  )

  return (
    <>
      <Edges size="lg">
        <h2>{formTitle}</h2>
        <p>{formText}</p>
        {form && (
          <>
            <SingleForm form={form} />
          </>
        )}
      </Edges>
    </>
  )
}

export default Form

export const fragment = graphql`
  fragment Form on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Form {
      fieldGroupName
      formTitle
      formText
      formBackgroundColor
      formId
    }
  }

  #   fragment contactForm on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
  #     ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Form {
  #       fieldGroupName
  #       formTitle
  #       formText
  #       formBackgroundColor
  #       formId
  #     }
  #   }
`
