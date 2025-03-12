<script setup lang="ts">
import { useSobreSection } from './composables/useSobreSection'
import './styles.css'

const { historiaText, capacidadeText } = useSobreSection()
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
        <p class="description">{{ historiaText }}</p>
        <div class="certificates">
          <img src="../../assets/imagem-certificados.png" alt="Certificados" />
        </div>
      </div>
    </div>
    
    <div class="sobre-container segundo-sobre">
      <div class="content-left">
        <span class="sobre-text">Sobre nós</span>
        <p class="description">{{ capacidadeText }}</p>
      </div>
      <div class="images-right">
        <img src="../../assets/imagem-sobre-WM-2.png" alt="Sobre WM 2" class="image-top" />
        <img src="../../assets/imagem-sobre-WM-3.png" alt="Sobre WM 3" class="image-bottom" />
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
</template>