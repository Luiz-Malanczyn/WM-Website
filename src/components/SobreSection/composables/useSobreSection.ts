import { ref } from 'vue'

export const useSobreSection = () => {
  const historiaText = ref(`Fundada em 2012, a WM Termoplásticos é uma empresa especializada na prestação de serviços de 
    injeção de peças técnicas em plástico, atuando também na pré-montagem de componentes e conjuntos, sempre com foco em 
    eficiência, qualidade e inovação.
    Localizada estrategicamente na cidade de Araucária/PR, a empresa dispõe de uma ampla estrutura com 35.000 m² de área total, 
    preparada para atender às mais diversas demandas do mercado.
    É certificada pela ISO 9001, pela ISO 14001 e IATF 16949, reafirmando seu compromisso 
    com a qualidade, a melhoria contínua, satisfação dos clientes, ampliando seu foco em sustentabilidade ambiental e conformidade 
    com os rigorosos padrões do setor automotivo.
    Na WM, cada projeto é conduzido com responsabilidade, precisão e parceria, buscando sempre entregar soluções completas e 
    personalizadas, com alto valor agregado.`)

  const capacidadeText = ref(`A WM Termoplásticos conta com um parque fabril composto por 22 injetoras de plástico, 
    com capacidades que variam de 80 a 800 toneladas de força de fechamento. Com o objetivo de aumentar a eficiência 
    produtiva, investimos continuamente na automatização de nossos processos, por meio da integração de robôs, esteiras 
    transportadoras e sistema Lean Manufacturing 4.0, que combina os princípios de produção enxuta (redução 
    de desperdícios e valor ao cliente) com tecnologias da Indústria 4.0. Além disso, dispomos de uma sala de metrologia 
    equipada com máquina de medição tridimensional e outros instrumentos de precisão, o que nos permite manter um rigoroso 
    controle de qualidade em todas as etapas do processo.`)

  return {
    historiaText,
    capacidadeText
  }
}
