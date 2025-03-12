import { ref } from 'vue'

export const useHomeSection = () => {
  const title = ref('Bem-vindo à \nWM Termoplásticos')
  const description = ref('Trazer melhoria contínua nos processos satisfazendo as necessidades de nossos clientes através do comprometimento das pessoas de nosso time.')

  return {
    title,
    description
  }
}
