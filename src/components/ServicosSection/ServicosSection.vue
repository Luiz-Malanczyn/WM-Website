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
        A WM Termoplásticos tem capacidade para processar peças plásticas de até 3,0 kg 
        por ciclo de injeção, trabalhando com uma ampla variedade de polímeros, tanto 
        comerciais quanto de engenharia.
        Entre os materiais atualmente utilizados, destacam-se: PP Homo e Copo, PEAD, 
        PEBD, TPV, PS, ABS, SAN, PC, POM, PA 6 e PA 6.6. <br> <br>
        Contamos com uma equipe altamente qualificada nas áreas de Engenharia, Processos 
        e Qualidade, o que nos permite ir além da injeção de peças: desenvolvemos também 
        dispositivos e moldes sob medida, oferecendo soluções completas e personalizadas para as 
        necessidades de cada cliente.
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

      <div class="servico-popup-overlay" v-if="showPopup" @click="togglePopup">
        <div class="servico-popup-content" @click.stop>
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