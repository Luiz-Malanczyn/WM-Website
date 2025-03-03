<script setup lang="ts">
const menuItems = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contato', href: '#contato' }
]
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/logo-WM-sem-fundo.png" alt="Logo" />
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
  padding: 2vh 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
}

.logo {
  width: 20%;
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
  font-size: 1.2vw;
  padding: 1vh 1.5vw;
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
  background-color: #dc3704;
  z-index: -1;
  opacity: 0.4;
}
</style>
