<script setup lang="ts">
import { useServicosSection, services, machines } from './composables/useServicosSection'
import './styles.css'

const { showPopup, togglePopup } = useServicosSection()
</script>

<template>
  <section id="servicos">
    <div class="servicos-container">
      <span class="segmentos-text">Nossos Segmentos</span>
      <h2 class="conheca-title">Conheça todas nossas soluções</h2>
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