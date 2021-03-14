import * as React from "react"
import 'twin.macro'
import ContactForm from "../components/contactForm"

import Layout from "../components/layout"
import Resources from "../components/resources"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Marque sua vacina" />
    <div tw="max-w-screen-lg  mx-auto mt-2 bg-white p-4">
      <p>Como parte da função da cidade de Barnstable na organização de Vacinas COVID-19 do Cape Cod, nosso Conselho de Divisão da Terceira Idade (<a href="https://www.town.barnstable.ma.us/BoardsCommittees/CouncilonAging" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Council On Aging</a>) está identificando adultos vulneráveis com mains de 65 anos, que ainda não conseguiram fazer parte das atuais ofertas de vacinas, especificamente indivíduos que precisam de ajuda para marcar as consultas de vacinação, mas são capazes de se transportar até o Cape Cod Community College.</p>
      <br />
      <p>Em um esforço para expandir as informações robustas que nosso Conselho de Divisão da Terceira Idade (<a href="https://www.town.barnstable.ma.us/BoardsCommittees/CouncilonAging" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Council On Aging</a>) possui atualmente, estamos pedindo a nossa comunidade brasileira no Cape Cod complete o formulário abaixo, <strong>ou ligue para 508-862-4003 e deixe seu nome e número de telefone.</strong></p>

      <ContactForm />
    </div>

    <Resources />

  </Layout>
)

export default IndexPage
