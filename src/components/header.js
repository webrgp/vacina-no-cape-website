import { Link } from 'gatsby'
import React from 'react'
import 'twin.macro'

const Header = () => {
  return (
    <header tw="max-w-sm mx-auto p-2 mt-2">
      <h1
        tw="jost font-semibold text-3xl text-center bg-yellow-300 p-4"
      ><Link to="/" tw="inline-block text-blue-600">🇧🇷 Vacina No Cape 🇧🇷</Link></h1>
    </header>
  )
}

export default Header
