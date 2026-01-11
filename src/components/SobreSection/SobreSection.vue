<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSobreSection } from './composables/useSobreSection'
import './styles.css'

import certificado9001 from '../../assets/WM INDUSTRIA 9001.pdf'
import certificado9001IQNET from '../../assets/WM INDUSTRIA 9001 IQNET.pdf'
import certificado14001 from '../../assets/ISO 14001.pdf'
import certificado14001IOQNET from '../../assets/ISO 14001 IQNET.pdf'

onMounted(() => {
  window.addEventListener('open-certificates-popup', openPopup)
})

onUnmounted(() => {
  window.removeEventListener('open-certificates-popup', openPopup)
})

const { historiaText, capacidadeText } = useSobreSection()

const isPopupVisible = ref(false)
const isPreviewVisible = ref(false)
const activeTabIndex = ref(0)

const pdfs = [
  { 
    name: 'Certificado ISO 9001',
    path: certificado9001,
    details: {
      'Norma': 'ISO 9001:2015 ',
      'Emissão': '28/07/2017 ',
      'Validade': '27/07/2026 ',
      'Escopo': 'Fabricação, industrialização e montagem de peças plásticas técnicas injetadas. '
    }
  },
  { 
    name: 'Certificado ISO 9001 IQNET',
    path: certificado9001IQNET,
    details: {
      'Reconhecimento': 'IQNET - Quality Management System ',
      'Emissão': '28/07/2017 ',
      'Validade': '27/07/2026 ',
      'Escopo': 'Manufacture, industrialization and assembly of technical injected plastic parts. '
    }
  },
  { 
    name: 'Certificado ISO 14001',
    path: certificado14001,
    details: {
      'Reconhecimento': 'IQNET - Quality Management System ',
      'Emissão': '18/12/2025 ',
      'Validade': '17/12/2028 ',
      'Escopo': 'FABRICAÇÃO, INDUSTRIALIZAÇÃO E MONTAGEM DE PEÇAS PLÁSTICAS TÉCNICAS INJETADAS.'
    }
  },
  { 
    name: 'Certificado ISO 14001 IQNET',
    path: certificado14001IOQNET,
    details: {
      'Reconhecimento': 'IQNET - Quality Management System ',
      'Emissão': '18/12/2025 ',
      'Validade': '17/12/2028 ',
      'Escopo': 'MANUFACTURING, INDUSTRIALIZATION AND ASSEMBLY OF INJECTION-MOLDED TECHNICAL PLASTIC PARTS. '
    }
  }
]

const openPopup = () => {
  isPopupVisible.value = true
}

const closePopup = () => {
  isPopupVisible.value = false
}
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
          class="certificates"
          @mouseover="isPreviewVisible = true"
          @mouseleave="isPreviewVisible = false"
        >
          <img 
            src="../../assets/imagem-certificados.png" 
            alt="Certificados" 
            @click="openPopup"
            style="cursor: pointer;"
          />
          <div v-if="isPreviewVisible" class="preview-container">
            <div v-for="pdf in pdfs" :key="pdf.name" class="preview-item">
              &#x1F4CE; {{ pdf.name }}
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
        <button @click="closePopup" class="close-button">&times;</button>
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
          <div class="pdf-viewer-wrapper">
            <iframe :src="pdfs[activeTabIndex].path" class="pdf-viewer" title="Visualizador de PDF"></iframe>
          </div>
        </div>
      </div>
    </div>
  </teleport>
  </template>