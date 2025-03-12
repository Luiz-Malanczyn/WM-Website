<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contato', href: '#contato' }
]

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {})
})
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="logo">
      <img src="../assets/Logo-WM-sem-fundo.png" alt="Logo" />
    </div>
    <div class="menu">
      <a v-for="item in menuItems" 
         :key="item.name" 
         :href="item.href">{{ item.name }}</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vh 1.5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0.5vw 0.5vh rgba(0, 0, 0, 0.3);
}

.logo {
  width: 20%;
  transition: width 0.5s ease;
}

.scrolled .logo {
  width: 10%;
}

.logo img {
  width: 100%;
  height: auto;
}

.menu {
  display: flex;
  width: 60%;
  justify-content: flex-end;
}

.menu a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 0.9vw;
  padding: 1vh 1vw;
  position: relative;
  transition: background-color 0.3s;
}

.menu a:hover::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #DC3703;
  z-index: -1;
}
</style>
