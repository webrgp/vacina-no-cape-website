import { Link } from 'gatsby'
import React from 'react'
import 'twin.macro'

const Resources = () => {
  return (
    <div>
      <header tw="max-w-sm mx-auto p-2 mt-2">
        <h2 tw="jost font-semibold text-3xl text-center bg-yellow-300 p-4"
        ><span tw="inline-block text-blue-600">Recursos &amp; Informações</span></h2>
      </header>
      <div tw="max-w-screen-lg  mx-auto mt-2 bg-white p-4">
        <ul>
          <li><a href="/COVID19vaccine_Preparing-for-Appointment_Final_PT-BR.jpg" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Como se preparar para a vacina contra o COVID-19</a></li>
          <li><a href="/Vaccine_Need-to-Know_Final_Updated-2021-02-12_PT-BR.jpg" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Detalhes que você precisa saber sobre a vacina contra o COVID-19</a></li>
          <li><a href="/Vaccine_Post_Vaccine_FAQ_FINAL_020521_PT-BR.jpg" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Perguntas frequentes após receber a vacina contra o COVID-19</a></li>
          <li><Link to="/faq" tw="text-blue-500 hover:underline">Perguntas Frequentes</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Resources
