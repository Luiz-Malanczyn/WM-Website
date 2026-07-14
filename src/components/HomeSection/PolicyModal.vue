<template>
  <div class="policy-modal-overlay" v-if="modelValue">
    <div class="policy-modal">
      <button class="policy-close" @click="$emit('update:modelValue', false)">×</button>
      <div class="policy-content" v-html="policyHtml"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean; policyHtml: string }>()
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.policy-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.policy-modal {
  background: #111;
  color: #fff;
  padding: 1.5rem;
  max-width: 900px;
  width: 90%;
  max-height: 80vh;
  overflow: auto;
  border-radius: 8px;
  position: relative;
}
.policy-close {
  position: absolute;
  right: 0.5rem;
  top: 0.25rem;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
}
.policy-content h3 { margin-top: 1rem; }
.policy-content ul { margin: 0.5rem 0 0 0; padding-left: 1rem; }
</style>
