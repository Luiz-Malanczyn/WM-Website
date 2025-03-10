<script setup lang="ts">
const clients = [
  { name: 'Electrolux', image: 'src/assets/imagem-electrolux.png' },
  { name: 'Tardeli', image: 'src/assets/imagem-tardeli.png' },
  { name: 'Gelopar', image: 'src/assets/imagem-gelopar.png' },
  { name: 'WAP', image: 'src/assets/imagem-wap.png' },
  { name: 'Kabel', image: 'src/assets/imagem-kabel.png' },
];
</script>

<template>
  <section id="clientes">
    <div class="clientes-container">
      <h2 class="clientes-title">Nossos Clientes</h2>
      <div class="logos-container">
        <img v-for="(client, index) in clients" 
             :key="index" 
             :src="client.image" 
             :alt="client.name" 
             class="client-logo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#clientes {
  padding: 4rem 2rem;
}

.clientes-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.clientes-title {
  color: #FF6B00;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.logos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.client-logo {
  height: 60px;
  width: auto;
  object-fit: contain;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.client-logo:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .logos-container {
    gap: 2rem;
  }

  .client-logo {
    height: 40px;
  }
}
</style>
