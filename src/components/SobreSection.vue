<script setup lang="ts">
</script>

<template>
  <section id="sobre">
    <div class="sobre-container">
      <div class="image-left">
        <div class="image-wrapper">
          <div class="orange-square top"></div>
          <div class="orange-square bottom"></div>
          <img src="../assets/imagem-sobre-WM.png" alt="Sobre WM" />
        </div>
      </div>
      <div class="content-right">
        <span class="sobre-text">Sobre nós</span>
        <div class="title-container">
          <h2 class="conheca">Conheça Nossa</h2>
          <h2 class="historia">História</h2>
        </div>
        <p class="description">
          Fundada em 2012, a indústria WM Termoplásticos atua no segmento de prestação 
          de serviços de injeção de peças técnicas em plástico bem como em pré-montagem 
          de componentes e conjuntos. Atualmente localizada na Cidade de Araucaria/PR 
          conta com uma área total de 35.000m². A WM conta com a certificação ISSO 9001 
          desde do ano de 2016, garantindo nosso comprometimento com a qualidade para 
          nossos clientes. Para este ano estamos trabalalhando na implementação da ISSO 
          14001 e IATF.
        </p>
        <div class="certificates">
          <img src="../assets/imagem-certificados.png" alt="Certificados" />
        </div>
      </div>
    </div>
    
    <div class="sobre-container segundo-sobre">
      <div class="content-left">
        <span class="sobre-text">Sobre nós</span>
        <p class="description">
          A WM Termoplásticos dispõe de um parque fabril com 20 injetoras para plástico 
          com capacidades de 80 até 800 toneladas de pressão de fechamento. Para 
          melhorar a eficiência de nosso processo buscamos ao máximo automatizar nossos 
          processos com a utilização de robôs e esteiras. Outro fator relevante é que 
          dispomos de uma sala de metrologia com tridimensional e demais equipamentos 
          para mantermos nosso processo sobre rigoroso controle de qualidade.
        </p>
      </div>
      <div class="images-right">
        <img src="../assets/imagem-sobre-WM-2.png" alt="Sobre WM 2" class="image-top" />
        <img src="../assets/imagem-sobre-WM-3.png" alt="Sobre WM 3" class="image-bottom" />
      </div>
    </div>
  </section>

  <section id="parceiros">
    <h2 class="parceiros-title">Nossos Parceiros</h2>
    <div class="parceiros-container">
      <img src="../assets/imagem-parceiros-HUNIV.png" alt="HUNIV" />
      <img src="../assets/imagem-parceiros-BWI.png" alt="BWI" />
      <img src="../assets/imagem-parceiros-WM-Treinamentos.png" alt="WM Treinamentos" />
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
  max-width: 80vw;
  margin: 0 auto;
}

.image-left {
  flex: 1;
  position: relative;
  padding-bottom: 5%;
}

.image-wrapper {
  width: 65%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
}

.orange-square {
  position: absolute;
  width: 40%;
  height: 40%;
  background-color: #DC3703;
  z-index: -1;
}

.orange-square.top {
  left: -12.5%;
}

.orange-square.bottom {
  bottom: -9.5%;
  right: -12.5%;
}

.content-right {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 0;
  height: 100%;
}

.sobre-text {
  color: #DC3703;
  font-size: 1.2rem;
  font-weight: bold;
}

.title-container {
  margin: 1rem 0;
  line-height: 0.9;
}

.conheca {
  color: #000;
  font-size: 3rem;
  margin: 0;
}

.historia {
  color: #DC3703;
  font-size: 3rem;
  margin: 0;
}

.description {
  color: #666;
  line-height: 1.6;
  margin: 1.5rem 0;
  text-align: justify;
}

.certificates {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

.certificates img {
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
}

.segundo-sobre {
  margin-top: 12rem;
  padding-bottom: 10%;
}

.content-left {
  flex: 1;
  text-align: left;
}

.images-right {
  flex: 1;
  position: relative;
  padding: 5%;
}

.image-top,
.image-bottom {
  width: 60%;
  height: auto;
  position: absolute;
  right: 0;
}

.image-top {
  top: 0;
  left: 0%;
  z-index: 2;
}

.image-bottom {
  bottom: 0;
  right: 0%;
  z-index: 1;
}

#parceiros {
  background-color: #f5f5f5;
  width: 100%;
  min-height: 30vh;
  max-height: fit-content;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.parceiros-title {
  color: #DC3703;
  font-size: 4.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.parceiros-container {
  display: flex;
  justify-content: center;
  gap: 12rem;
  max-width: 40%;
  margin: 0 auto;
}

.parceiros-container img {
  width: 25%;
  height: auto;
  object-fit: contain;
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

  .parceiros-container {
    gap: 4rem;
  }

  .parceiros-container img {
  width: 50%;
  height: auto;
  object-fit: contain;
}

  #parceiros {
    height: auto;
    padding: 2rem 0;
  }
}
</style>
