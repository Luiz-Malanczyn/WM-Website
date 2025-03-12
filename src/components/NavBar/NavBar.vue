<script setup lang="ts">
import { useNavBar, menuItems } from './composables/useNavBar'
import './styles.css'

const { isScrolled } = useNavBar()
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="logo">
      <img src="../../assets/Logo-WM-sem-fundo.png" alt="Logo" />
    </div>
    <div class="menu">
      <a v-for="item in menuItems" 
         :key="item.name" 
         :href="item.href">{{ item.name }}</a>
    </div>
  </nav>
</template>