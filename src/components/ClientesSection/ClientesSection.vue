<script setup lang="ts">
import { clients } from './composables/useClientesSection'
import './styles.css'
</script>

<template>
  <section id="clientes">
    <div class="clientes-container">
      <h2 class="clientes-title">Nossos Clientes</h2>
      <div class="logos-container">
        <img v-for="(client, index) in clients" 
             :key="index" 
             :src="client.image" 
             :alt="client.name" 
             class="client-logo" />
      </div>
    </div>
  </section>
</template>