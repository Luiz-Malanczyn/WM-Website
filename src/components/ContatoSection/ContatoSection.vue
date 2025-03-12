<script setup lang="ts">
import { contactInfo } from './composables/useContatoSection'
import './styles.css'
</script>

<template>
  <section id="contato">
    <div class="contact-container">
      <div class="contact-box">
        <h3>{{ contactInfo.empresa.titulo }}</h3>
        <p>{{ contactInfo.empresa.descricao }}</p>
      </div>

      <div class="contact-box">
        <h3>{{ contactInfo.comercial.titulo }}</h3>
        <p v-for="(telefone, index) in contactInfo.comercial.telefones" 
           :key="index">Telefone: {{ telefone }}</p>
        <p>Email: {{ contactInfo.comercial.email }}</p>
      </div>

      <div class="contact-box">
        <h3>{{ contactInfo.financeiro.titulo }}</h3>
        <p v-for="(telefone, index) in contactInfo.financeiro.telefones" 
           :key="index">Telefone: {{ telefone }}</p>
        <p>Email: {{ contactInfo.financeiro.email }}</p>
      </div>
    </div>
  </section>
</template>