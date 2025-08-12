import { ref } from 'vue'

export const useSobreSection = () => {
  const historiaText = ref(`Fundada em 2012, a WM Termoplásticos é uma empresa especializada na prestação de serviços
  de injeção de peças técnicas em plástico, atuando também na pré-montagem de componentes e conjuntos, sempre com
  foco em eficiência, qualidade e inovação.<br>
  Localizada estrategicamente na cidade de Araucária/PR, a empresa dispõe de uma ampla estrutura com 35.000 m² de
  área total, preparada para atender às mais diversas demandas do mercado.<br>
  Desde 2016, a WM Termoplásticos é certificada pela ISO 9001, reafirmando seu compromisso com a qualidade, a
  melhoria contínua e a satisfação dos clientes. Atualmente, a empresa está em fase de implementação das certificações
  ISO 14001 e IATF 16949, ampliando seu foco em sustentabilidade ambiental e conformidade com os rigorosos padrões do
  setor automotivo.<br>
  Na WM, cada projeto é conduzido com responsabilidade, precisão e parceria, buscando sempre entregar soluções
  completas e personalizadas, com alto valor agregado.`)

  const capacidadeText = ref(`A WM Termoplásticos conta com um parque fabril composto por 22 injetoras de plástico, 
    com capacidades que variam de 80 a 800 toneladas de força de fechamento. Com o objetivo de aumentar a eficiência 
    produtiva, investimos continuamente na automatização de nossos processos, por meio da integração de robôs e esteiras 
    transportadoras. Além disso, dispomos de uma sala de metrologia equipada com máquina de medição tridimensional e outros 
    instrumentos de precisão, o que nos permite manter um rigoroso controle de qualidade em todas as etapas do processo.`)

  return {
    historiaText,
    capacidadeText
  }
}
