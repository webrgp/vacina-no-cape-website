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

          <QA question="Preciso usar máscara quando for tomar a vacina contra COVID-19?">Sim. O CDC recomenda que durante a pandemia as pessoas <strong>usem uma máscara</strong> que cubra seu nariz e boca quando entrarem em contato com outras pessoas que não as pessoas de sua casa, quando estiverem em unidades de saúde e quando forem tomar qualquer vacina, incluindo a vacina contra COVID-19. Qualquer pessoa que tenha problemas para respirar ou não consiga remover a máscara sem ajuda não deve usar máscara.</QA>

          <QA question="Posso escolher qual vacina irei tomar?">Não. Os recipientes da vacina receberão a vacina oferecida a eles quando comparecerem a uma clínica de vacinação. As duas vacinas são altamente eficazes e seguras.</QA>

          <QA question="Quanto tempo tenho de esperar entre a primeira e a segunda dose da vacina contra COVID- 19?">A vacina da Pfizer requer que as duas doses sejam administradas em um intervalo mínimo de 21 dias. A vacina da Moderna requer que as duas doses sejam administradas em um intervalo mínimo de 28 dias.</QA>

          <QA question="Receberei alguma coisa para comprovar que tomei a vacina?">Você deve receber um cartão de vacinação ou uma folha impressa que informa qual vacina contra COVID-19 você tomou, a data em que a tomou e onde. Você deve receber uma versão impressa ou eletrônica de uma ficha técnica que fornece mais informações sobre a vacina contra COVID-19 específica que está sendo oferecida a você. Cada vacina autorizada contra COVID-19 tem sua própria ficha técnica que contém informações para ajudá-lo a entender os riscos e benefícios de receber aquela vacina específica.</QA>

        </dl>
      </section>

      <section>
        <header><h3 tw="text-2xl font-semibold my-4">Depois de tomar a vacina</h3></header>

        <QA question="O que devo fazer se eu sentir algum sintoma depois de tomar a vacina contra COVID-19, como febre e dores no corpo?">
          Se você sentir alguma dor ou um desconforto significativo, converse com seu médico, que pode recomendar medicamentos vendidos sem receita médica, como ibuprofeno ou acetaminofeno (paracetamol). Para reduzir a dor e o desconforto no local da injeção, aplique uma toalha limpa, fria e úmida sobre a área e use ou exercite o braço. Para reduzir o desconforto causado pela febre, beba muitos líquidos e vista roupas leves. Na maioria dos casos, o desconforto causado pela febre ou dor é normal, mas entre em contato com seu médico se:

          <ul>
            <li>a vermelhidão ou sensibilidade no local onde você recebeu a injeção aumentar depois de 24 horas</li>
            <li>os efeitos colaterais estiverem preocupando você ou não desaparecem depois de alguns dias</li>
          </ul>
        </QA>

        <QA question="Como posso informar se eu tiver algum efeito colateral depois de tomar a vacina contra COVID-19?"><strong>V-safe</strong> é uma ferramenta de smartphone que usa mensagens de texto e pesquisas na web para fornecer verificações de saúde personalizadas, depois de você tomar uma vacina contra COVID- 19. Usando o V-safe, você pode informar rapidamente ao CDC se apresentar algum efeito colateral depois de tomar a vacina contra COVID-19. Dependendo de suas respostas, alguém do CDC poderá ligar para verificar como você está e obter mais informações. E o V-safe irá lembrá- lo de tomar sua segunda dose da vacina contra COVID-19, se precisar. Para inscrever-se no v- safe, acesse <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafe.html" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Verificador V-safe da saúde depois da vacinação | CDC.</a></QA>

        <QA question="Quanto tempo demora, depois da administração da vacina contra COVID-19, para que ela tenha efeito?">Geralmente, leva algumas semanas para o corpo desenvolver imunidade após a vacinação. Isso significa que é possível que uma pessoa seja infectada com o vírus que causa a COVID-19 logo antes ou logo depois da vacinação e fique doente. Isso acontece porque a vacina não teve tempo suficiente para proporcionar proteção.</QA>

        <QA question="Quanto tempo dura a proteção das vacinas contra COVID-19?">Ainda não temos dados para dizer por quanto tempo as vacinas contra COVID-19 fornecerão proteção contra a doença, mesmo se você pegar COVID-19. Os especialistas continuam a realizar mais estudos para descobrir se as vacinas também impedem que pessoas espalhem a COVID-19.</QA>

        <QA question="A imunidade depois de uma pessoa pegar COVID-19 dura mais do que a proteção oferecida pelas vacinas contra COVID-19?">A proteção que alguém adquire por ter uma infecção (chamada de imunidade natural) varia dependendo da doença e varia de pessoa para pessoa. Como esse vírus é novo, não sabemos quanto tempo a imunidade natural poderá durar. Algumas evidências iniciais - baseadas em algumas pessoas - parecem sugerir que a imunidade natural pode não durar muito. Em relação à vacinação, não saberemos quanto tempo a imunidade dura até que tenhamos uma vacina e mais dados sobre a eficácia da vacina. Tanto a imunidade natural quanto a imunidade induzida por vacina são aspectos importantes da COVID-19 sobre os quais os especialistas estão tentando aprender mais, e o CDC manterá o público informado, à medida que novas evidências sejam disponibilizadas.  </QA>

        <QA question="Qual é a eficácia de uma dose da vacina contra COVID-19 em comparação com duas doses?">As vacinas contra COVID-19 não foram estudadas para uso com uma única dose. As pessoas devem receber as duas doses da vacina para estarem totalmente vacinadas e para que a vacina seja eficaz.</QA>

        <QA question="Tenho de obedecer às Ordens de viagem se já tomei a vacina contra COVID-19?">Sim. Neste momento, as pessoas vacinadas devem continuar a cumprir a Ordem de Viagem do Governador e os requisitos de teste e quarentena relacionados. É importante que todos continuem usando todas as medidas de saúde pública disponíveis para ajudar a acabar com esta pandemia. Cubra sua boca e nariz com uma máscara quando estiver perto de outras pessoas, fique a pelo menos a 6 pés (2 m) de distância de outras pessoas, evite aglomerações e lave as mãos com frequência.</QA>

        <QA question="Ainda terei de ficar de quarentena depois de ter sido vacinado, se for identificado como um contato próximo de alguém com COVID-19?">Sim. Ainda não temos dados que indiquem por quanto tempo as vacinas contra COVID-19 fornecem proteção para não ficar doente nem se as vacinas também evitam que as pessoas transmitam a COVID-19. Os especialistas precisam entender mais a proteção que as vacinas contra COVID-19 fornecem antes de fazerem alterações nas recomendações de quarentena da saúde pública. Outros fatores, inclusive quantas pessoas são vacinadas, e como o vírus está se espalhando nas comunidades, também afetarão essa decisão.</QA>

        <QA question="Preciso usar máscara e evitar contato próximo com outras pessoas se já recebi as duas doses da vacina?">Sim. Enquanto os especialistas aprendem mais sobre a proteção que as vacinas contra COVID- 19 fornecem em condições da vida real, é importante que todos continuem usando todas as ferramentas disponíveis para nos ajudar a parar esta pandemia, como usar uma máscara que cubra sua boca e nariz, lavar as mãos com frequência e permanecer a pelo menos 6 pés (2 m) de distância de outras pessoas. Juntos, a vacinação contra a COVID-19 e seguir as recomendações do CDC quanto a como se proteger e proteger a outras pessoas oferecerão a melhor proteção contra o contágio e a disseminação da COVID-19. Os especialistas precisam entender mais sobre a proteção que as vacinas contra COVID-19 fornecem antes de decidirem alterar as recomendações sobre as medidas que todos nós devem tomar para retardar a disseminação do vírus que causa COVID-19. Outros fatores, inclusive quantas pessoas são vacinadas e como o vírus está se espalhando nas comunidades, também afetarão essa decisão.</QA>

        <QA question="Quando poderei parar de usar máscara e evitar contato próximo com outras pessoas depois de ter sido vacinado?">Não há informações suficientes atualmente disponíveis para dizer se ou quando o CDC irá parar de recomendar às pessoas que usem máscara e evitem contato próximo com outras pessoas para ajudar a prevenir a disseminação do vírus que causa a COVID-19. Os especialistas precisam entender mais a proteção que as vacinas contra COVID-19 fornecem antes de tomar essa decisão. Outros fatores, inclusive quantas pessoas são vacinadas e como o vírus está se espalhando nas comunidades, também afetarão essa decisão.</QA>

      </section>
    </div>

  </Layout>
)

export default IndexPage
