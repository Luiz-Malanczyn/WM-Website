<script setup lang="ts">
import { ref } from 'vue';

const services = [
  {
    title: 'Peças automotivas',
    image: '/src/assets/imagem-pecas-automotivas.png'
  },
  {
    title: 'Caminhões',
    image: '/src/assets/imagem-caminhao.png'
  },
  {
    title: 'Tratores',
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
</script>

<template>
  <section id="servicos">
    <div class="servicos-container">
      <span class="segmentos-text">Nossos Segmentos</span>
      <h2 class="conheca-title">Conheça todas nossas Soluções</h2>
      <p class="description">
        Dispomos de máquinas injetoras de variadas capacidades (800Ton a 80Ton), podendo processar peças plásticas com até 3.000 gramas por ciclo, além de possuirmos equipe de Engenheira especializada e recursos para trabalharmos com os mais variados tipos de injeção e materiais básicos aos de plásticos de engenharia, os mais processados são: PP homopolímero e copolímero, PEAD, PEBD, SAN, ABS, PC, PA (nylon) 6 e 6.6, POM (poliacetal), PS e TPV
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
              <tr v-for="i in 14" :key="i">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.segmentos-text {
  color: #FF6B00;
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
  background-color: #FF6B00;
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
  max-width: 800px;
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
