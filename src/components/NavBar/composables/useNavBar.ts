import { ref, onMounted, onUnmounted } from 'vue'

export const useNavBar = () => {
  const isScrolled = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled,
  }
}

export const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contato', href: '#contato' }
]
