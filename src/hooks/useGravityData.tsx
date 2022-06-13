import { useStaticQuery, graphql } from "gatsby"

const useGravityData = () => {
  const { allWpGravityFormsForm } = useStaticQuery(
    graphql`
      query FormQuery {
        allWpGravityFormsForm {
          nodes {
            formId
            title
            description
            button {
              type
              text
            }
            confirmations {
              isDefault
              message
            }
            formFields {
              nodes {
                id
                type
                formId
                ... on WpNameField {
                  id
                  isRequired
                  label
                  type
                  size
                  visibility
                  inputs {
                    id
                    key
                    label
                    placeholder
                    isHidden
                    choices {
                      isSelected
                      text
                      value
                    }
                  }
                }
                ... on WpTextField {
                  id
                  size
                  label
                  cssClass
                  isRequired
                  description
                  placeholder
                }
                ... on WpEmailField {
                  id
                  size
                  label
                  cssClass
                  isRequired
                  description
                  placeholder
                }
                ... on WpTextAreaField {
                  id
                  size
                  label
                  cssClass
                  isRequired
                  description
                  placeholder
                }
              }
            }
          }
        }
      }
    `
  )
  return { allWpGravityFormsForm }
}

export default useGravityData
