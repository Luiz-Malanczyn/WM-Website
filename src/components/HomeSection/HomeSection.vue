<script setup lang="ts">
import { useHomeSection } from './composables/useHomeSection'
import './styles.css'

const { title, description, iso9001Logo, iso14001Logo, iatfLogo } = useHomeSection()
</script>

<template>
  <section id="home" class="home-section">
    <div class="home-content">
      <div class="home-logos-container">
        <img :src="iso9001Logo" alt="ISO 9001" class="iso-logo top-logo">
        <p>Desde 2016</p>
        <div class="bottom-logos">
          <img :src="iso14001Logo" alt="ISO 14001" class="iso-logo">
          <img :src="iatfLogo" alt="IATF" class="iso-logo">
        </div>
        <p>Desde 2025</p>
      </div>
      <div class="title-container">
        <h1 v-html="title.replace('\n', '<br>')"></h1>
      </div>
      <p class="intro-text">
        Injeção em peças plásticas técnicas, montagem de subconjunto, tampografia, hot-stamping, embalagem e toda a logística de entrega.
      </p>
      <h2>Política de qualidade</h2>
      <p>{{ description }}</p>
    </div>
  </section>
</template>