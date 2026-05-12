import { ref } from 'vue'
import imagemPecasAutomotivas from '../../../assets/imagem-pecas-automotivas.png'
import imagemCaminhao from '../../../assets/imagem-caminhao.png'
import imagemTrator from '../../../assets/imagem-trator.png'
import imagemEletrodomesticosLinhaBranca from '../../../assets/imagem-eletrodomesticos-linha-branca.png'
import imagemEletrodomesticosPortateis from '../../../assets/imagem-eletrodomesticos-portateis.png'

export const useServicosSection = () => {
  const showPopup = ref(false)

  const togglePopup = () => {
    showPopup.value = !showPopup.value
  }

  return {
    showPopup,
    togglePopup
  }
}

export const services = [
  { title: 'Linha automotiva', image: imagemPecasAutomotivas },
  { title: 'Automotiva pesada', image: imagemCaminhao },
  { title: 'Agricola', image: imagemTrator },
  { title: 'Eletrodomésticos Linha Branca', image: imagemEletrodomesticosLinhaBranca },
  { title: 'Eletrodomésticos Portáteis', image: imagemEletrodomesticosPortateis }
]

export const machines = [
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca PAVAN ZANNETTI – Modelo HFX 650 com capacidade de fechamento – 650 Ton. Distância entre colunas – 895 x 895 mm – Volume de injeção – 2895 gr com robô',
    tonnage: '650',
    year: '2021',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca PAVAN – Modelo HFX 568 com capacidade de fechamento – 568 Ton. Distância entre colunas – 835 x 835 mm – Volume de injeção – 2861 cm³ com robô',
    tonnage: '568',
    year: '2021',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 800 com capacidade de fechamento – 800 Ton. Distância entre colunas – 920 x 920 mm – Volume de injeção – 2983 cm³ com robô',
    tonnage: '800',
    year: '2021',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca PAVAN ZANNETTI com capacidade de fechamento – 650 Ton. Distância entre colunas – 895 x 895 mm – Volume de injeção – 2861 cm³ com robô',
    tonnage: '650',
    year: '2021',
  },
  {
    quantity: 3,
    name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 450 com capacidade de fechamento – 450 Ton. Distância entre colunas – 800 x 800 mm – Volume de injeção – 1325 cm³ / 2098 cm³ com robô',
    tonnage: '450',
    year: '2021',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 450 com capacidade de fechamento – 450 Ton. Distância entre colunas – 710 x 710 mm – Volume de injeção – 1400 gr com robô',
    tonnage: '450',
    year: '2020',
  },
  {
    quantity: 2,
    name: 'Injetora para Termoplástico marca ROMI – Modelo PRÁTICA 130 com capacidade de fechamento – 130 Ton. Distância entre colunas – 420 x 420 mm – Volume de injeção – 326 cm³ / 402 cm³',
    tonnage: '130',
    year: '2013',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca ROMI – Modelo PRÁTICA 300 com capacidade de fechamento – 300 Ton. Distância entre colunas – 650 x 650 mm – Volume de injeção – 913 cm³',
    tonnage: '300',
    year: '2016',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca ROMI – Modelo PRÁTICA 170 com capacidade de fechamento – 170 Ton. Distância entre colunas – 470 x 470 mm – Volume de injeção – 622 cm³',
    tonnage: '170',
    year: '2013',
  },
  {
    quantity: 2,
    name: 'Injetora para Termoplástico marca YIZUMI com capacidade de fechamento – 320 Ton. Distância entre colunas – 710 x 670 mm – Volume de injeção – 1071 cm³ com robô',
    tonnage: '320',
    year: '2024',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca YIZUMI com capacidade de fechamento – 260 Ton. Distância entre colunas – 610 x 570 mm – Volume de injeção – 749 cm³ com robô',
    tonnage: '260',
    year: '2024',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca YIZUMI com capacidade de fechamento – 530 Ton. Distância entre colunas – 810 x 810 mm – Volume de injeção – 2050 cm³ com robô',
    tonnage: '530',
    year: '2024',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca BATTENFELD com capacidade de fechamento – 150 Ton. Distância entre colunas – 500 x 500 mm – Volume de injeção – 286 cm³',
    tonnage: '150',
    year: '2020',
  },
  {
    quantity: 2,
    name: 'Injetora para Termoplástico marca YIZUMI com capacidade de fechamento – 400 Ton. Distância entre colunas – 760 x 710 mm – Volume de injeção – 1497 cm³ com robô',
    tonnage: '400',
    year: '2023',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca ROMI – Modelo PRÁTICA 80 com capacidade de fechamento – 80 Ton. Distância entre colunas – 360 x 360 mm – Volume de injeção – 226 cm³',
    tonnage: '80',
    year: '2008',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 300R com capacidade de fechamento – 300 Ton. Distância entre colunas – 650 x 650 mm – Volume de injeção – 1507 cm³',
    tonnage: '300',
    year: '2022',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 200 com capacidade de fechamento – 200 Ton. Distância entre colunas – 500 x 500 mm – Volume de injeção – 1042 cm³',
    tonnage: '200',
    year: '2020',
  },
  {
    quantity: 1,
    name: 'Injetora para Termoplástico marca TEDERIC com capacidade de fechamento – 1050 Ton. Distância entre colunas – 1160 x 1160 mm – Volume de injeção – 5227 cm³ com robô',
    tonnage: '1050',
    year: '2024',
  },
]