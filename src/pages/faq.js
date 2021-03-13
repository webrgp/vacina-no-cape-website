import * as React from "react"
import 'twin.macro'

import Layout from "../components/layout"
import QA from "../components/qa"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Perguntas Frequentes" />
    <div tw="max-w-screen-lg  mx-auto mt-2 bg-white p-4">
      <h2 tw="jost font-semibold text-4xl text-center mb-4">Perguntas Frequentes</h2>


      <section>
        <header><h3 tw="text-2xl font-semibold my-4">Antes de tomar a vacina</h3></header>

        <dl>
          <QA question="Terei de pagar para tomar a vacina?"><strong>A vacina está sendo fornecida gratuitamente</strong> a todas as pessoas pelo governo federal. Se você tiver seguro, a vacina será cobrada do seguro, e não haverá nenhum custo para você. Entretanto, você não precisa ter seguro para tomar a vacina. Nunca ninguém pedirá um número de cartão de crédito para marcar uma consulta.</QA>

          <QA question="Imigrantes sem documentos poderão tomar a vacina gratuitamente?"><strong>Sim.</strong> A vacina propriamente dita é gratuita para todos os residentes de Massachusetts. O seguro saúde (incluindo Medicare e Medicaid) cobrirá o custo de administração da vacina. Para os pacientes sem seguro saúde, os provedores de cuidados de saúde podem pedir um reembolso do governo federal pelo custo da administração da vacina a imigrantes sem documentos.</QA>

          <QA question="Posso tomar a vacina, mesmo se não tiver carteira de identidade?">Sim. Você pode tomar a vacina mesmo se não tiver seguro, carteira de motorista ou número do Seguro Social. Para obter mais informações, acesse <a href="/COVID19vaccine_Preparing-for-Appointment_Final_PT-BR.jpg" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Como se preparar para a vacinação contra o COVID-19</a></QA>

          <QA question="Receber a vacina causará um impacto negativo no status imigratório de uma pessoa?">Não. O governo federal confirmou que o tratamento para COVID-19 (incluindo a vacina) não será considerado parte da determinação se alguém é um “encargo público”, ou no que concerne à condição de benefício público para certas pessoas que estão buscando uma extensão de sua estadia ou uma mudança de status, mesmo se a vacina for paga pelo Medicaid ou por outros fundos federais.</QA>

          <QA question="O registro de vacinação de um paciente é protegido contra divulgação?">O Departamento de Saúde Pública manterá um registro eletrônico de cada paciente de Massachusetts que receber a vacina contra COVID-19. O banco de dados da vacina é mantido confidencial, como os registros médicos de um paciente com seu médico.</QA>

          <QA question="A vacina contra COVID-19 será obrigatória?">O Departamento de Saúde Pública não está obrigando as pessoas a tomar a vacina contra COVID-19. É um programa voluntário. Foi demonstrado que a vacina contra COVID-19 é altamente eficaz na prevenção da doença e é uma ferramenta importante na luta contra a pandemia.</QA>

          <QA question="Precisarei fazer o teste de COVID-19 antes de tomar a vacina?">Não, não é necessário fazer o teste de COVID-19 antes de receber a vacina.</QA>

          <QA question="Uma pessoa que teve um resultado de teste de COVID-19 positivo deve tomar a vacina?">Não, se estiver apresentando sintomas. A vacinação de pessoas que comprovadamente têm COVID-19 deve ser adiada até que não estejam apresentando mais nenhum sintoma.</QA>

          <QA question="As pessoas que já tiveram COVID-19 devem tomar a vacina?"><strong>Sim</strong>, as pessoas que já tiveram COVID-19 devem ser vacinadas.</QA>

          <QA question="Quais são os benefícios de tomar a vacina contra COVID-19?">Entendemos que algumas pessoas podem estar preocupadas sobre serem vacinadas, agora que as vacinas contra COVID-19 estão disponíveis nos Estados Unidos. Acesse Benefícios de tomar uma vacina contra COVID-19 | CDC para ver um resumo dos benefícios da vacinação contra COVID-19, com base no que sabemos atualmente.</QA>

          <QA question="Como as vacinas funcionarão contra as novas variantes da COVID-19, como a que apareceu no Reino Unido?">É normal que os vírus passem por mudanças à medida que se espalham e que novas variantes apareçam. Os cientistas estão trabalhando para aprender mais sobre as novas variantes da COVID-19, para entender o quanto elas podem se espalhar facilmente e se as vacinas que já temos protegerão as pessoas contra as novas variantes. No momento, não temos nenhuma comprovação de que as novas variantes da COVID-19 podem fazer com que as pessoas fiquem mais doentes ou podem aumentar o risco de morte. No entanto, com o tempo, os cientistas aprenderão mais e teremos informações mais detalhadas</QA>

          <QA question="Por que a vacina é necessária, se podemos fazer outras coisas, como manter o distanciamento social e usar máscaras, para prevenir a disseminação do vírus que causa a COVID-19?">Parar uma pandemia requer o uso de todas as ferramentas disponíveis. As vacinas trabalham com o seu sistema imunológico para que seu corpo esteja pronto para lutar contra o vírus se você for exposto a ele. Outros passos, como usar uma máscara que cubra sua boca e nariz e manter uma distância de, pelo menos, 6 pés (2 m) de distância de outras pessoas, ajudam a reduzir a probabilidade de você se expor ao vírus ou de transmiti-lo para outras pessoas. Juntos, a vacinação contra a COVID-19 e seguir as recomendações do CDC para se proteger e proteger a outras pessoas serão a melhor proteção contra a COVID-19. (Fonte: Perguntas frequentes sobre a vacinação contra COVID-19 | CDC em 21/12/20)</QA>

          <QA question="O que é uma autorização de uso emergencial?">As vacinas da Pfizer e da Moderna receberam Autorização de Uso de Emergência (EUA - Emergency Use Authorization) da FDA (Food and Drug Administration - Administração de Alimentos e Medicamentos).</QA>

          <QA question="Quem está autorizado a administrar as vacinas?">Além de prestadores de serviços de saúde licenciados, como médicos, enfermeiras e farmacêuticos, de acordo com a Lei CARES federal, as vacinações podem ser administradas por estagiários de farmácia, técnicos de farmácia certificados, paramédicos e assistentes médicos certificados, sob a supervisão direta de um prestador de cuidados primários. Quando disponível, todas as instituições de saúde, incluindo hospitais, centros de saúde comunitários e consultórios médicos particulares, terão acesso à vacina contra COVID-19 para seus pacientes. Farmácias, incluindo grandes varejistas como a CVS, Walgreens, Osco e Walmart, terão acesso à vacina e poderão vacinar seus clientes. A vacina provavelmente também será disponibilizada aos departamentos de saúde locais para a vacinação de seus residentes locais em clínicas públicas.</QA>
        </dl>
      </section>

      <section>
        <header><h3 tw="text-2xl font-semibold my-4">Durante a Consulta</h3></header>

        <dl>
          <QA question="O que posso esperar na minha consulta para tomar a vacina contra COVID-19?">Acesse <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect.html" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">O que posso esperar na minha consulta para tomar a vacina contra COVID-19 | CDC</a> para ver dicas do que você pode esperar quando for vacinado, quais informações seu provedor dará a você, e os recursos que poderá usar para monitorar sua saúde depois de ser vacinado.</QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

          <QA question=""></QA>

        </dl>
      </section>
    </div>

  </Layout>
)

export default IndexPage
