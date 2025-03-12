import { ref } from 'vue'

export const useSobreSection = () => {
  const historiaText = ref(`Fundada em 2012, a indústria WM Termoplásticos atua no segmento de prestação 
    de serviços de injeção de peças técnicas em plástico bem como em pré-montagem 
    de componentes e conjuntos. Atualmente localizada na Cidade de Araucaria/PR 
    conta com uma área total de 35.000m². A WM conta com a certificação ISSO 9001 
    desde do ano de 2016, garantindo nosso comprometimento com a qualidade para 
    nossos clientes. Para este ano estamos trabalalhando na implementação da ISSO 
    14001 e IATF.`)

  const capacidadeText = ref(`A WM Termoplásticos dispõe de um parque fabril com 20 injetoras para plástico 
    com capacidades de 80 até 800 toneladas de pressão de fechamento. Para 
    melhorar a eficiência de nosso processo buscamos ao máximo automatizar nossos 
    processos com a utilização de robôs e esteiras. Outro fator relevante é que 
    dispomos de uma sala de metrologia com tridimensional e demais equipamentos 
    para mantermos nosso processo sobre rigoroso controle de qualidade.`)

  return {
    historiaText,
    capacidadeText
  }
}
