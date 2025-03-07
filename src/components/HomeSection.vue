<template>
  <section id="home" class="home-section">
    <div class="home-content">
      <div class="title-container">
        <h1>Bem-vindo à</h1>
        <h1>WM Termoplásticos</h1>
      </div>
      <p>Buscando através de pessoas comprometidas,<br>
         a melhoria de seus processos e a satisfação dos seus clientes.</p>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  min-height: 100vh;
  z-index: 2;
}

.home-content {
  position: relative;
  padding: 5%;
  width: 90%;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.title-container {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.home-section h1 {
  color: white;
  font-size: 3.5vw;
  line-height: 1.2;
}

.home-section p {
  color: white;
  font-size: 1.5vw;
  line-height: 1.8;
  margin-top: 2vh;
}
</style>
