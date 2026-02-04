<script setup lang="ts">
import { useNavBar, menuItems } from './composables/useNavBar'
import './styles.css'

const { isScrolled, scrollToSobre, openCertificate } = useNavBar()
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="logo">
      <img src="../../assets/Logo-WM-sem-fundo.png" alt="Logo" />
    </div>

    <div class="menu">
      <template v-for="item in menuItems" :key="item.name">

        <a
          v-if="!item.children"
          :href="item.href"
        >
          {{ item.name }}
        </a>

        <div v-else class="nav-cert-wrapper">
          <a href="#sobre" @click.prevent="scrollToSobre">
            {{ item.name }}
            <span class="nav-cert-arrow">▾</span>
          </a>

          <div class="nav-cert-menu">
            <div
              v-for="child in item.children"
              :key="child.name"
              class="nav-cert-item"
              @click="openCertificate(child.index)"
            >
              📎 {{ child.name }}
            </div>
          </div>
        </div>

      </template>
    </div>
  </nav>
</template>
