<script setup lang="ts">
import { useHomeSection } from './composables/useHomeSection'
import './styles.css'

const { title, iso9001Logo, iso14001Logo, iatfLogo } = useHomeSection()

const openPolicy = () => {
  window.dispatchEvent(new CustomEvent('open-certificates-popup', { detail: { index: 6 } }))
}
</script>

<template>
  <section id="home" class="home-section">
    <div class="home-content">
      <div class="home-logos-container">
        <img :src="iso9001Logo" alt="ISO 9001" class="iso-logo top-logo">
        <div class="bottom-logos">
          <img :src="iso14001Logo" alt="ISO 14001" class="iso-logo">
          <img :src="iatfLogo" alt="IATF" class="iso-logo">
        </div>
      </div>
      <div class="title-container">
        <h1 v-html="title.replace('\n', '<br>')"></h1>
      </div>
      <p class="intro-text">
        Injeção em peças plásticas técnicas, montagem de subconjunto, tampografia, hot-stamping, embalagem e toda a logística de entrega.
      </p>
      <p class="policy-link-container"><span class="policy-link" @click="openPolicy">Política de qualidade</span></p>
    </div>
  </section>
</template>