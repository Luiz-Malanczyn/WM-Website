<script setup lang="ts">
import { useNavBar, menuItems } from './composables/useNavBar'
import './styles.css'

const { isScrolled } = useNavBar()

const scrollToCertificados = () => {
  document.querySelector('#certificados')?.scrollIntoView({ behavior: 'smooth' })
  window.dispatchEvent(new CustomEvent('open-certificates-popup'))
}
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="logo">
      <img src="../../assets/Logo-WM-sem-fundo.png" alt="Logo" />
    </div>

    <div class="menu">
      <template v-for="item in menuItems" :key="item.name">

        <a
          v-if="item.name !== 'Sobre Nós'"
          :href="item.href"
        >
          {{ item.name }}
        </a>

        <div v-else class="nav-cert-wrapper">
          <a :href="item.href">
            {{ item.name }}
            <span class="nav-cert-arrow">▾</span>
          </a>

          <div class="nav-cert-menu">
            <div
              class="nav-cert-item"
              @click="scrollToCertificados"
            >
              📎 Certificados
            </div>
          </div>
        </div>

      </template>
    </div>
  </nav>
</template>


