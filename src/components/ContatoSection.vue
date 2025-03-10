<script setup lang="ts">
</script>

<template>
  <section id="contato">
    <div class="contact-container">
      <div class="contact-box">
        <h3>WM Térmoplasticos</h3>
        <p>A WM Indústria de Termoplásticos Ltda, atuamos no mercado de prestação de serviços de injeção de peças técnicas e montagem de sub conjuntos</p>
      </div>

      <div class="contact-box">
        <h3>Contato Comercial</h3>
        <p>Telefone: (41) 3069-0003</p>
        <p>Telefone: (41) 3069-0005</p>
        <p>Email: wagner@wmtermoplasticos.com.br</p>
      </div>

      <div class="contact-box">
        <h3>Contato Financeiro/RH</h3>
        <p>Telefone: (41) 3069-0003</p>
        <p>Telefone: (41) 3069-0005</p>
        <p>Email: fabiana@wmtermoplasticos.com.br</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contato {
  background-color: black;
  padding: 4rem 2rem;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-box {
  flex: 1;
  color: white;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

p {
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}
</style>
