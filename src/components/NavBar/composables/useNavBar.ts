import { ref, onMounted, onUnmounted } from 'vue'

export const useNavBar = () => {
  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  const scrollToSobre = () => {
    const el = document.getElementById('sobre')
    if (!el) return

    el.scrollIntoView({ behavior: 'smooth' })
  }

  const openCertificate = (index: number) => {
    scrollToSobre()

    window.dispatchEvent(
      new CustomEvent('open-certificates-popup', {
        detail: { index }
      })
    )
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled,
    scrollToSobre,
    openCertificate
  }
}

export const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre Nós', href: '#sobre' },
  {
    name: 'Certificados',
    href: '#sobre',
    children: [
      { name: 'ISO 9001', index: 0 },
      { name: 'ISO 9001 IQNET', index: 1 },
      { name: 'ISO 14001', index: 2 },
      { name: 'ISO 14001 IQNET', index: 3 },
      { name: 'ISO 16949', index: 4 }
    ]
  },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contato', href: '#contato' }
]
