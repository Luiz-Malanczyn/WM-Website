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
        <p v-for="(telefone, index) in contactInfo.comercial.telefones" :key="'tel-' + index">
          Telefone: {{ telefone }}
        </p>
        <p v-for="(celular, index) in contactInfo.comercial.celulares" :key="'cel-' + index">
          Celular: {{ celular }}
        </p>
        <p>Email: {{ contactInfo.comercial.email }}</p>
      </div>

      <div class="contact-box">
        <h3>{{ contactInfo.financeiro.titulo }}</h3>
        <p v-for="(telefone, index) in contactInfo.financeiro.telefones" :key="'tel-fin-' + index">
          Telefone: {{ telefone }}
        </p>
        <p v-for="(celular, index) in contactInfo.financeiro.celulares" :key="'cel-fin-' + index">
          Celular: {{ celular }}
        </p>
        <p>Email: {{ contactInfo.financeiro.email }}</p>
      </div>
    </div>
  </section>
</template>
