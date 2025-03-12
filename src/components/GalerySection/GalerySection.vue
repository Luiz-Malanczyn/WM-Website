<script setup lang="ts">
import { useGalerySection, galleryImages } from './composables/useGalerySection'
import './styles.css'

const { selectedImage, openImage, closeImage } = useGalerySection()
</script>

<template>
  <section id="galeria">
    <div class="galeria-container">
      <span class="galeria-subtitle">Galeria</span>
      <h2 class="galeria-title">Veja mais fotos</h2>
      
      <div class="gallery-grid">
        <div v-for="image in galleryImages" 
             :key="image.id" 
             class="gallery-item"
             :class="{ 'featured': image.id === 1 || image.id === 4 }"
             @click="openImage(image)">
          <img :src="image.src" :alt="image.alt" class="gallery-image" />
          <div class="overlay">
            <img src="../../assets/imagem-fullscreen.png" alt="Fullscreen" class="fullscreen-icon" />
            <span class="view-text">Ver Imagem</span>
          </div>
        </div>
      </div>
    </div>

    <teleport to="body">
      <div v-if="selectedImage" class="popup-overlay" @click="closeImage">
        <div class="popup-content" @click.stop>
          <img :src="selectedImage.src" :alt="selectedImage.alt" class="popup-image"/>
          <button class="popup-close" @click="closeImage">×</button>
        </div>
      </div>
    </teleport>
  </section>
</template>
