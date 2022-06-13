import React from "react"
import { useMutation } from "urql"
import GravityForm, { useGravityFormMutation } from "wpgravitybundle"

interface SingleFormProps {
  form: any
}

const SingleForm: React.FC<SingleFormProps> = ({ form }) => {
  const gravityFormMutation = useGravityFormMutation(form)
  const SubmitForm = `
    ${gravityFormMutation}
  `
  const [{ data, fetching, error }, submitForm] = useMutation(SubmitForm)

  const handleSubmit = (values: any) => {
    return submitForm(values)
  }

  if (fetching) {
    return <p>Loading... </p>
  }

  if (error) {
    return <p>There was an error submitting the form: {error.message}</p>
  }

  if (data) {
    return <p>Confirmation message here!</p>
  }

  return (
    <>
      {form && (
        <>
          <GravityForm form={form} onSubmit={handleSubmit} />
        </>
      )}
    </>
  )
}

export default SingleForm
