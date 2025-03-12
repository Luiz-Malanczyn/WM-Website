import { ref } from 'vue'

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
  { title: 'Linha automotiva', image: '/src/assets/imagem-pecas-automotivas.png' },
  { title: 'Automotiva pesada', image: '/src/assets/imagem-caminhao.png' },
  { title: 'Agricola', image: '/src/assets/imagem-trator.png' },
  { title: 'Eletrodomésticos Linha Branca', image: '/src/assets/imagem-eletrodomesticos-linha-branca.png' },
  { title: 'Eletrodomésticos Portáteis', image: '/src/assets/imagem-eletrodomesticos-portateis.png' }
]

export const machines = [
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 800R com capacidade de fechamento – 800 Ton. – Capacidade de injeção – 2.983 gr. Distância entre colunas – 920 x 920 x 1000 mm com robô', tonnage: '800', year: '2021' },
  { quantity: 2, name: 'Injetora para Termoplástico marca PAVAN ZANETTI – Modelo HFX 650 com capacidade de fechamento – 650 Ton – Capacidade de injeção – 2.895 gr. Distância entre colunas – 895 x 895 x 1080 mm com robô', tonnage: '650', year: '2021' },
  { quantity: 1, name: 'Injetora para Termoplástico marca PAVAN ZANETTI – Modelo HFX 568 com capacidade de fechamento – 600 Ton – Capacidade de injeção – 2.575 gr. Distância entre colunas – 835 x 835 x 880 mm com robô', tonnage: '600', year: '2021' },
  { quantity: 2, name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 450R com capacidade de fechamento – 450 Ton – Capacidade de injeção – 1.440 gr/1972g Distância entre colunas – 800 x 880 x 880 mm com robô', tonnage: '450', year: '2021' },
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 450R com capacidade de fechamento – 450 Ton – Capacidade de injeção – 1.440 gr/1972g Distância entre colunas – 800 x 880 x 880 mm com robô', tonnage: '450', year: '2020' },
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 450R com capacidade de fechamento – 450 Ton – Capacidade de injeção – 1.440 gr/1972g Distância entre colunas – 780 x 780 x 820 mm com robô', tonnage: '450', year: '2020' },
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 300R com capacidade de fechamento – 300 Ton. – Capacidade de injeção – 1.245 gr/1.325g Distância entre colunas – 650 x 650 x 820 mm', tonnage: '300', year: '2016' },
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 300R com capacidade de fechamento – 300 Ton. – Capacidade de injeção – 1.245 gr/1.325g Distância entre colunas – 650 x 650 x 820 mm', tonnage: '300', year: '2022' },
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo Primax 200R com capacidade de fechamento – 200 Ton. – Capacidade de injeção – 992 gr/1.042g Distância entre colunas – 501 x 501 x 760 mm', tonnage: '200', year: '2020' },
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo PRÁTICA 170 com Capacidade de fechamento – 170 Ton. – Capacidade de injeção 585 cm3 / 622 cm3 Distância entre colunas – 470 x 470 x 640 mm', tonnage: '170', year: '2013' },
  { quantity: 1, name: 'Injetora para Termoplástico marca BATENFELD – Modelo TM 150 com capacidade de fechamento – 150 Ton. – Capacidade de injeção – 304 gr/389g Distância entre colunas – 500 x 500 x 450 mm', tonnage: '150', year: '2020' },
  { quantity: 2, name: 'Injetoras para Termoplástico marca ROMI – Modelo PRÁTICA 130 com capacidade de fechamento – 130 Ton. – Capacidade de injeção 402 cm3 / 487 cm3 Distância entre colunas – 420 x 420 x 460 mm', tonnage: '130', year: '2013' },
  { quantity: 1, name: 'Injetora para Termoplástico marca YIZUMI – Modelo UN400A5 com capacidade de fechamento – 400 Ton. – Capacidade de injeção – 986 gr Distância entre colunas – 710 x 670 mm', tonnage: '400', year: '2022' },
  { quantity: 1, name: 'Injetora para Termoplástico marca ROMI – Modelo PRÁTICA 80 com capacidade de fechamento – 80 Ton. – Capacidade de injeção 212 cm3 / 226 cm3 Distância entre colunas – 360 x 360 x 360 mm', tonnage: '80', year: '2008' },
]
