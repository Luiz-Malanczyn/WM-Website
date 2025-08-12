import { ref } from 'vue'
import iso9001Logo from '../../../assets/ISO-9001_logo.png'
import iso14001Logo from '../../../assets/ISO-14001_logo.png'
import iatfLogo from '../../../assets/IATF_logo.png'


export const useHomeSection = () => {
  const title = ref('Bem-vindo à \nWM Termoplásticos')
  const description = ref('A WM Termoplásticos busca através de pessoas comprometidas, a melhoria de seus processos, a satisfação dos seus clientes, a prevenção da poluição e o atendimento aos requisitos legais.')

  return {
    title,
    description,
    iso9001Logo,
    iso14001Logo,
    iatfLogo
  }
}
