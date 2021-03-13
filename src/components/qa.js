import React from 'react'
import 'twin.macro'

const QA = ({question, children}) => {
  return (
    <>
      <dt tw="font-semibold border-b pb-1 pt-6">{question}</dt>
      <dd tw="pt-2">{children}</dd>
    </>
  )
}

export default QA
