<script setup lang="ts">
</script>

<template>
  <section id="sobre">
    <div class="sobre-container">
      <div class="image-left">
        <img src="../assets/imagem-sobre-WM.png" alt="Sobre WM" />
      </div>
      <div class="content-right">
        <span class="sobre-text">Sobre nós</span>
        <div class="title-container">
          <h2 class="conheca">Conheça Nossa</h2>
          <h2 class="historia">História</h2>
        </div>
        <p class="description">
          A WM Indústria de Termoplásticos Ltda, atuamos no mercado de prestação de serviços 
          de injeção de peças técnicas e montagem de sub conjuntos, desde 2012, estamos 
          localizados em Araucária/PR, com uma área 35.000m², empresa Certificada ISO 9001/2015 
          dês de 2016.
        </p>
        <div class="certificates">
          <img src="../assets/certificados.png" alt="Certificados" />
        </div>
      </div>
    </div>
    
    <div class="sobre-container segundo-sobre">
      <div class="content-left">
        <span class="sobre-text">Sobre nós</span>
        <p class="description">
          Hoje em fase de implantação IATF e ISO 14001, contamos com 20 injetoras de 800Ton a 80Ton, 
          nossos principais clientes, Electrolux do Brasil, Gelopar, Wap e Grupo kabel, realizamos 
          desenvolvimento de produtos, moldes e dispositivos de montagem. Dispomos de Equipe de 
          Engenharia especializada e todos os recursos necessários para injeção de materiais de Engenharia.
        </p>
      </div>
      <div class="images-right">
        <img src="../assets/imagem-sobre-WM-2.png" alt="Sobre WM 2" class="image-top" />
        <img src="../assets/imagem-sobre-WM-3.png" alt="Sobre WM 3" class="image-bottom" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#sobre {
  padding: 4rem 2rem;
}

.sobre-container {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.image-left {
  flex: 1;
}

.image-left img {
  width: 100%;
  height: auto;
}

.content-right {
  flex: 1;
  text-align: left;
}

.sobre-text {
  color: #FF6B00;
  font-size: 1.2rem;
  font-weight: 500;
}

.title-container {
  margin: 1rem 0;
}

.conheca {
  color: #000;
  font-size: 2.5rem;
  margin: 0;
}

.historia {
  color: #FF6B00;
  font-size: 2.5rem;
  margin: 0;
}

.description {
  color: #666;
  line-height: 1.6;
  margin: 1.5rem 0;
}

.certificates img {
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
}

.segundo-sobre {
  margin-top: 4rem;
}

.content-left {
  flex: 1;
  text-align: left;
}

.images-right {
  flex: 1;
  position: relative;
  height: 400px;
}

.image-top,
.image-bottom {
  width: 80%;
  height: auto;
  position: absolute;
  right: 0;
}

.image-top {
  top: 0;
  right: -25%;
  z-index: 2;
}

.image-bottom {
  bottom: 0;
  right: 25%;
  margin-top: 25%;
  z-index: 1;
}

@media (max-width: 768px) {
  .sobre-container {
    flex-direction: column;
    gap: 2rem;
  }

  .images-right {
    height: auto;
  }

  .image-top,
  .image-bottom {
    position: relative;
    width: 100%;
    margin-top: 1rem;
    right: 0;
  }
}
</style>
