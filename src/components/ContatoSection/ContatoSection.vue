<script setup lang="ts">
import { ref } from 'vue'
import { contactInfo } from './composables/useContatoSection'
import './styles.css'

const complaint = ref('')
const category = ref('')

const submitComplaint = async () => {
  if (!complaint.value.trim()) {
    alert('Por favor, descreva a denúncia.')
    return
  }

  const response = await fetch('https://formspree.io/f/mkoqbdld', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ categoria: category.value, denuncia: complaint.value })
  })

  if (response.ok) {
    alert('Denúncia enviada anonimamente com sucesso!')
    complaint.value = ''
    category.value = ''
  } else {
    alert('Erro ao enviar a denúncia. Tente novamente.')
  }
}
</script>

<template>
  <section id="contato">
    <div class="contact-container">
      <div class="contact-box">
        <h3>{{ contactInfo.empresa.titulo }}</h3>
        <p>{{ contactInfo.empresa.descricao }}</p>
      </div>

      <div class="contact-box">
        <h3>{{ contactInfo.comercial.titulo }}</h3>
        <p v-for="(telefone, index) in contactInfo.comercial.telefones" :key="'tel-' + index">
          Telefone: {{ telefone }}
        </p>
        <p v-for="(celular, index) in contactInfo.comercial.celulares" :key="'cel-' + index">
          Celular: {{ celular }}
        </p>
        <p>Email: {{ contactInfo.comercial.email }}</p>
      </div>

      <div class="contact-box">
        <h3>{{ contactInfo.financeiro.titulo }}</h3>
        <p v-for="(telefone, index) in contactInfo.financeiro.telefones" :key="'tel-fin-' + index">
          Telefone: {{ telefone }}
        </p>
        <p v-for="(celular, index) in contactInfo.financeiro.celulares" :key="'cel-fin-' + index">
          Celular: {{ celular }}
        </p>
        <p>Email: {{ contactInfo.financeiro.email }}</p>
      </div>

      <div class="contact-box">
        <h3>{{ contactInfo.recursosHumanos.titulo }}</h3>
        <p v-for="(telefone, index) in contactInfo.recursosHumanos.telefones" :key="'tel-rh-' + index">
          Telefone: {{ telefone }}
        </p>
        <p v-for="(celular, index) in contactInfo.recursosHumanos.celulares" :key="'cel-rh-' + index">
          Celular: {{ celular }}
        </p>
        <p>Email: {{ contactInfo.recursosHumanos.email }}</p>
        <p>{{ contactInfo.recursosHumanos.descricao }}</p>
      </div>

      <div class="contact-box">
        <h3>Canal de Denúncia Anônima</h3>
        <p>Envie sua denúncia de forma anônima. Sua privacidade é garantida.</p>
        <form @submit.prevent="submitComplaint">
          <label for="category">Categoria:</label>
          <select id="category" v-model="category">
            <option value="">Selecione uma categoria</option>
            <option value="geral">Geral</option>
            <option value="servico">Serviço</option>
            <option value="produto">Produto</option>
            <option value="outro">Outro</option>
          </select>
          <label for="complaint">Descrição da Denúncia:</label>
          <textarea id="complaint" v-model="complaint" placeholder="Descreva sua denúncia aqui..." required></textarea>
          <button type="submit">Enviar Denúncia</button>
        </form>
      </div>
    </div>
  </section>
</template>
