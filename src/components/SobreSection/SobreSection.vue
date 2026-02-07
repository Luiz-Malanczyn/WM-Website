<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSobreSection } from './composables/useSobreSection'
import './styles.css'

import certificado9001 from '../../assets/WM INDUSTRIA 9001.pdf'
import certificado9001IQNET from '../../assets/WM INDUSTRIA 9001 IQNET.pdf'
import certificado14001 from '../../assets/ISO 14001.pdf'
import certificado14001IOQNET from '../../assets/ISO 14001 IQNET.pdf'
import certificado16949 from '../../assets/WM INDÚSTRIA IATF 16949.pdf'

const { historiaText, capacidadeText } = useSobreSection()

const isPopupVisible = ref(false)
const isPreviewVisible = ref(false)
const activeTabIndex = ref(0)

const pdfs = [
  { name: 'Certificado ISO 9001', path: certificado9001 },
  { name: 'Certificado ISO 9001 IQNET', path: certificado9001IQNET },
  { name: 'Certificado ISO 14001', path: certificado14001 },
  { name: 'Certificado ISO 14001 IQNET', path: certificado14001IOQNET },
  { name: 'Certificado IATF 16949', path: certificado16949 }
]

const openPopup = (index?: number) => {
  if (index !== undefined) {
    activeTabIndex.value = index
  }
  isPopupVisible.value = true
}

const openPopupFromClick = () => {
  openPopup()
}

const closePopup = () => {
  isPopupVisible.value = false
}

const handleOpenCertificatesPopup = (event: Event) => {
  const customEvent = event as CustomEvent<{ index?: number }>
  openPopup(customEvent.detail?.index)
}

onMounted(() => {
  window.addEventListener(
    'open-certificates-popup',
    handleOpenCertificatesPopup
  )
})

onUnmounted(() => {
  window.removeEventListener(
    'open-certificates-popup',
    handleOpenCertificatesPopup
  )
})
</script>

<template>
  <section id="sobre">
    <div class="sobre-container">
      <div class="image-left">
        <div class="image-wrapper">
          <div class="orange-square top"></div>
          <div class="orange-square bottom"></div>
          <img src="../../assets/imagem-sobre-WM.png" alt="Sobre WM" />
        </div>
      </div>

      <div class="content-right">
        <span class="sobre-text">Sobre nós</span>

        <div class="title-container">
          <h2 class="conheca">Conheça Nossa</h2>
          <h2 class="historia">História</h2>
        </div>

        <p class="description" v-html="historiaText"></p>

        <div
          id="certificates"
          class="certificates"
          @mouseenter="isPreviewVisible = true"
          @mouseleave="isPreviewVisible = false"
        >
          <img
            src="../../assets/imagem-certificados.png"
            alt="Certificados"
            class="certificados-img"
            @click="openPopupFromClick"
          />

          <span
            class="certificados-text"
            @click="openPopupFromClick"
          >
            CERTIFICADOS
          </span>

          <div v-if="isPreviewVisible" class="preview-container">
            <div
              v-for="(pdf, index) in pdfs"
              :key="pdf.name"
              class="preview-item"
              @click="openPopup(index)"
            >
              📎 {{ pdf.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sobre-container segundo-sobre">
      <div class="content-left">
        <span class="sobre-text">Sobre nós</span>
        <p class="description">{{ capacidadeText }}</p>
      </div>

      <div class="images-right">
        <img src="../../assets/imagem-sobre-WM-3.png" alt="Sobre WM 2" class="image-top" />
        <img src="../../assets/imagem-sobre-WM-2.png" alt="Sobre WM 3" class="image-bottom" />
      </div>
    </div>
  </section>

  <section id="parceiros">
    <h2 class="parceiros-title">Nossos Parceiros</h2>
    <div class="parceiros-container">
      <img src="../../assets/imagem-parceiros-HUNIV.png" alt="HUNIV" />
      <img src="../../assets/imagem-parceiros-BWI.png" alt="BWI" />
      <img src="../../assets/imagem-parceiros-WM-Treinamentos.png" alt="WM Treinamentos" />
    </div>
  </section>

  <teleport to="body">
    <div v-if="isPopupVisible" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">&times;</button>

        <h2>Nossos Certificados</h2>

        <div class="tabs-container">
          <button
            v-for="(pdf, index) in pdfs"
            :key="pdf.name"
            :class="['tab-button', { active: activeTabIndex === index }]"
            @click="activeTabIndex = index"
          >
            {{ pdf.name }}
          </button>
        </div>

        <div class="pdf-content-area">
          <iframe
            :src="pdfs[activeTabIndex].path"
            class="pdf-viewer"
            title="Visualizador de PDF"
          />
        </div>
      </div>
    </div>
  </teleport>
</template>
