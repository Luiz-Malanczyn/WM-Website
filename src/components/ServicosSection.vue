<script setup lang="ts">
import { ref } from 'vue';

const services = [
  {
    title: 'Linha automotiva',
    image: '/src/assets/imagem-pecas-automotivas.png'
  },
  {
    title: 'Automotiva pesada',
    image: '/src/assets/imagem-caminhao.png'
  },
  {
    title: 'Agricola',
    image: '/src/assets/imagem-trator.png'
  },
  {
    title: 'Eletrodomésticos Linha Branca',
    image: '/src/assets/imagem-eletrodomesticos-linha-branca.png'
  },
  {
    title: 'Eletrodomésticos Portáteis',
    image: '/src/assets/imagem-eletrodomesticos-portateis.png'
  }
];

const showPopup = ref(false);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

const machines = [
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
];
</script>

<template>
  <section id="servicos">
    <div class="servicos-container">
      <span class="segmentos-text">Nossos Segmentos</span>
      <h2 class="conheca-title">Conheça todas nossas Soluções</h2>
      <p class="description">
        A WM Termoplásticos tem a capacidade de processar peças plásticas com até 
        3,0kg total por ciclo de injeção nos mais variados tipos de polímeros tanto 
        comerciais como de engenharia usando o exemplo dos utilizados por nós 
        atualmente como PP Homo e Copo, PEAD e PEBD, TPV, PS, ABS, SAN, PC, 
        POM, PA 6 e 6.6. <br> <br>
        Nossa empresa possui equipe altamente qualificada em Engenharia, Processo e 
        Qualidade o que nos possibilita além de prestar serviços de injeção, também 
        desenvolver dispositivos e moldes para atender as necessidades de nossos 
        clientes de uma forma completa.
      </p>

      <div class="cards-container">
        <div class="card" v-for="(service, index) in services" :key="index">
          <img :src="service.image" :alt="service.title" />
          <h3>{{ service.title }}</h3>
        </div>
      </div>

      <button class="equipment-button" @click="togglePopup">
        Relação de equipamentos
      </button>

      <!-- Popup -->
      <div class="popup-overlay" v-if="showPopup" @click="togglePopup">
        <div class="popup-content" @click.stop>
          <h2>Relação de Máquinas</h2>
          <table>
            <thead>
              <tr>
                <th>Quantidade</th>
                <th>Relatório de Máquinas</th>
                <th>Tonelagem</th>
                <th>Ano de compra</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="machine in machines" :key="machine.name">
                <td>{{ machine.quantity }}</td>
                <td>{{ machine.name }}</td>
                <td>{{ machine.tonnage }}</td>
                <td>{{ machine.year }}</td>
              </tr>
            </tbody>
          </table>
          <button class="close-button" @click="togglePopup">×</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#servicos {
  background-color: #FFFFFF;
  padding: 4rem 2rem;
}

.servicos-container {
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
}

.segmentos-text {
  color: #DC3703;
  font-size: 1.2rem;
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
}

.conheca-title {
  color: #000;
  font-size: 2.5rem;
  margin: 1rem 0;
}

.description {
  color: #666;
  line-height: 1.6;
  margin: 2rem auto;
  max-width: 900px;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.card h3 {
  color: #333;
  font-size: 1.1rem;
  margin: 0;
}

.equipment-button {
  background-color: #DC3703;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 3rem;
  transition: background-color 0.3s ease;
}

.equipment-button:hover {
  background-color: #e65000;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  max-width: 55vw;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 1px solid #ddd;
  padding: 0.8rem;
  text-align: left;
}

/* Add this to make the name column justified */
td:nth-child(2) {
  text-align: center;
}

th {
  background-color: #f5f5f5;
  font-weight: 500;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .cards-container {
    gap: 1rem;
  }

  .card {
    width: calc(50% - 1rem);
  }

  .popup-content {
    width: 95%;
    padding: 1rem;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.5rem;
  }
}
</style>
