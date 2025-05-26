<script setup lang="ts">
import { useGalerySection } from './composables/useGalerySection'
import './styles.css'

const {
  galleryImages: images,
  selectedIndex,
  currentImage,
  openImage,
  closeImage,
  nextImage,
  prevImage,
  goToImage
} = useGalerySection()
</script>

<template>
  <section id="galeria">
    <div class="galeria-container">
      <span class="galeria-subtitle">Galeria</span>
      <h2 class="galeria-title">Veja mais fotos</h2>

      <div class="gallery-grid">
        <div
          v-for="(item, index) in images.slice(0, 5)"
          :key="item.id"
          class="gallery-item"
          :class="{ featured: index === 0 }"
          @click="openImage(index)"
        >
          <template v-if="item.type === 'image'">
            <img :src="item.src" :alt="item.alt" class="gallery-image" :class="{ blurred: index === 4 }" />
          </template>
          <template v-else>
            <video :src="item.src" class="gallery-image" muted autoplay loop playsinline></video>
          </template>

          <div v-if="index === 4" class="overlay">
            <span class="view-text">Ver mais</span>
          </div>
        </div>
      </div>
    </div>

    <teleport to="body">
      <div v-if="currentImage" class="popup-overlay" @click.self="closeImage">
        <div class="popup-content">
          <button class="popup-close" @click="closeImage">×</button>

          <template v-if="currentImage.type === 'image'">
            <img :src="currentImage.src" :alt="currentImage.alt" class="popup-image" />
          </template>
          <template v-else>
            <video :src="currentImage.src" class="popup-image" controls autoplay loop></video>
          </template>

          <button @click.stop="prevImage" class="arrow left">‹</button>
          <button @click.stop="nextImage" class="arrow right">›</button>

          <div class="thumbnail-bar">
            <template v-for="(thumb, i) in images" :key="thumb.id">
              <template v-if="thumb.type === 'image'">
                <img
                  :src="thumb.src"
                  :alt="thumb.alt"
                  class="thumbnail"
                  :class="{ active: i === selectedIndex }"
                  @click.stop="goToImage(i)"
                />
              </template>
              <template v-else>
                <video
                  :src="thumb.src"
                  class="thumbnail"
                  :class="{ active: i === selectedIndex }"
                  @click.stop="goToImage(i)"
                  muted
                  playsinline
                ></video>
              </template>
            </template>
          </div>
        </div>
      </div>
    </teleport>
  </section>
</template>
