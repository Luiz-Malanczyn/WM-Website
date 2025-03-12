<script setup lang="ts">
import NavBar from './components/NavBar/NavBar.vue'
import HomeSection from './components/HomeSection/HomeSection.vue'
import SobreSection from './components/SobreSection/SobreSection.vue'
import ServicosSection from './components/ServicosSection/ServicosSection.vue'
import ClientesSection from './components/ClientesSection/ClientesSection.vue'
import ContatoSection from './components/ContatoSection/ContatoSection.vue'
import GalerySection from './components/GalerySection/GalerySection.vue'
</script>

<template>
  <div class="app">
    <div class="hero-container">
      <NavBar />
      <HomeSection />
    </div>
    <main>
      <SobreSection />
      <ServicosSection />
      <ClientesSection />
      <GalerySection />
      <ContatoSection />
    </main>
  </div>
</template>

<style>
.app {
  background-color: white;
  min-height: 80vh;
}

section {
  min-height: 10vh;
  padding: 2rem;
}

.hero-container {
  position: relative;
  min-height: 80vh;
  width: 100%;
  overflow: hidden;
}

.hero-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/imagem-principal-WM.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  z-index: 1;
}

.hero-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Adicionado overlay cinza */
  z-index: 1;
}

.home-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  min-height: 100vh;
  z-index: 2;
}

.home-content {
  position: relative;
  padding: 5%;
  width: 90%;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.title-container {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.home-section h1 {
  color: white;
  font-size: 3.5vw;
  line-height: 1.2;
}

.home-section p {
  color: white;
  font-size: 1.5vw;
  line-height: 1.8;
  margin-top: 2vh;
}

h1, h2 {
  color: #333;
}

main {
  position: relative;
  z-index: 3;
  background-color: white;
}
</style>