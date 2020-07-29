import React from 'react'
import { Message } from 'semantic-ui-react'

const ErrorMessage = ({error}) => (

  <Message error hidden={!error} negative>
    <Message.Header>Something Wrong</Message.Header>
<p>{error && error.message}</p>
  </Message>
)

export default ErrorMessage;