<script setup lang="ts">
import { ref } from 'vue';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'src/assets/imagem-galeria-1.png', alt: 'Galeria 1' },
  { id: 2, src: 'src/assets/imagem-galeria-2.png', alt: 'Galeria 2' },
  { id: 3, src: 'src/assets/imagem-galeria-3.png', alt: 'Galeria 3' },
  { id: 4, src: 'src/assets/imagem-galeria-4.png', alt: 'Galeria 4' },
  { id: 5, src: 'src/assets/imagem-galeria-5.png', alt: 'Galeria 5' },
  { id: 6, src: 'src/assets/imagem-galeria-6.png', alt: 'Galeria 6' },
];

const selectedImage = ref<GalleryImage | null>(null);

const openImage = (image: GalleryImage) => {
  selectedImage.value = image;
  document.body.style.overflow = 'hidden';
};

const closeImage = () => {
  selectedImage.value = null;
  document.body.style.overflow = 'auto';
};
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
            <img src="../assets/imagem-fullscreen.png" alt="Fullscreen" class="fullscreen-icon" />
            <span class="view-text">Ver Imagem</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Popup -->
    <div v-if="selectedImage" class="popup-overlay" @click="closeImage">
      <div class="popup-content" @click.stop>
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="popup-image"/>
        <button class="popup-close" @click="closeImage">×</button>
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

<style scoped>
#galeria {
  padding: 4rem 2rem;
}

.galeria-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.galeria-subtitle {
  color: #FF6B00;
  font-size: 1.2rem;
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
}

.galeria-title {
  color: #000;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  grid-auto-rows: 250px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item.featured {
  grid-row: span 2;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 107, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fullscreen-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
}

.view-text {
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;  /* Aumentado para um valor muito maior que o da navbar */
}

.popup-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.popup-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.popup-close {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 10px;
}

@media (max-width: 768px) {
  .popup-close {
    top: -40px;
    right: 0;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    grid-auto-rows: 200px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
