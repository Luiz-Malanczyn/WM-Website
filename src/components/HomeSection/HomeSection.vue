<script setup lang="ts">
import { useHomeSection } from './composables/useHomeSection'
import './styles.css'

const { title, description, description2 } = useHomeSection()
</script>

<template>
  <section id="home" class="home-section">
    <div class="home-content">
      <div class="title-container">
        <h1 v-html="title.replace('\n', '<br>')"></h1>
      </div>
      <p>{{ description }}</p><br>
      <h2>Política de qualidade</h2>
      <p>{{ description2 }}</p>
    </div>
  </section>
</template>