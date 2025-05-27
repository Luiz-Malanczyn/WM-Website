import { ref } from 'vue'

export const useHomeSection = () => {
  const title = ref('Bem-vindo à \nWM Termoplásticos')
  const description = ref('Trazer melhoria contínua nos processos satisfazendo as necessidades de nossos clientes através do comprometimento das pessoas de nosso time')
  const description2 = ref('A WM Termoplásticos busca através de pessoas comprometidas, a melhoria de seus processos, a satisfação dos seus clientes, a prevenção da poluição e o atendimento aos requisitos legais.')

  return {
    title,
    description,
    description2
  }
}
