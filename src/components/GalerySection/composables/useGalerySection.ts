import { ref, computed } from 'vue'
import imagemGaleria1 from '../../../assets/imagem-galeria-1.png'
import imagemGaleria2 from '../../../assets/imagem-galeria-2.png'
import imagemGaleria3 from '../../../assets/imagem-galeria-3.png'
import imagemGaleria4 from '../../../assets/imagem-galeria-4.png'
import imagemGaleria5 from '../../../assets/imagem-galeria-5.png'
import imagemGaleria6 from '../../../assets/imagem-galeria-6.png'
import imagemGaleria7 from '../../../assets/imagem-galeria-7.png'
import videoGaleria1 from '../../../assets/video-galeria-1.mp4'
import videoGaleria2 from '../../../assets/video-galeria-2.mp4'
import videoGaleria3 from '../../../assets/video-galeria-3.mp4'
import videoGaleria4 from '../../../assets/video-galeria-4.mp4'
import videoGaleria5 from '../../../assets/video-galeria-5.mp4'
import videoGaleria6 from '../../../assets/video-galeria-6.mp4'

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export const galleryImages: GalleryItem[] = [
  { id: 1, src: imagemGaleria1, alt: 'Galeria 1', type: 'image' },
  { id: 2, src: imagemGaleria2, alt: 'Galeria 2', type: 'image' },
  { id: 3, src: imagemGaleria3, alt: 'Galeria 3', type: 'image' },
  { id: 4, src: imagemGaleria4, alt: 'Galeria 4', type: 'image' },
  { id: 5, src: imagemGaleria5, alt: 'Galeria 5', type: 'image' },
  { id: 6, src: imagemGaleria6, alt: 'Galeria 6', type: 'image' },
  { id: 7, src: imagemGaleria7, alt: 'Galeria 7', type: 'image' },
  { id: 8, src: videoGaleria1, alt: 'Video 1', type: 'video' },
  { id: 9, src: videoGaleria2, alt: 'Video 2', type: 'video' },
  { id: 10, src: videoGaleria3, alt: 'Video 3', type: 'video' },
  { id: 11, src: videoGaleria4, alt: 'Video 4', type: 'video' },
  { id: 12, src: videoGaleria5, alt: 'Video 5', type: 'video' },
  { id: 13, src: videoGaleria6, alt: 'Video 6', type: 'video' },
]

export const useGalerySection = () => {
  const selectedIndex = ref<number | null>(null)

  const openImage = (index: number) => {
    selectedIndex.value = index
    document.body.style.overflow = 'hidden'
  }

  const closeImage = () => {
    selectedIndex.value = null
    document.body.style.overflow = 'auto'
  }

  const currentImage = computed(() =>
    selectedIndex.value !== null ? galleryImages[selectedIndex.value] : null
  )

  const nextImage = () => {
    if (selectedIndex.value === null) return
    selectedIndex.value = (selectedIndex.value + 1) % galleryImages.length
  }

  const prevImage = () => {
    if (selectedIndex.value === null) return
    selectedIndex.value = (selectedIndex.value - 1 + galleryImages.length) % galleryImages.length
  }

  const goToImage = (index: number) => {
    selectedIndex.value = index
  }

  return {
    galleryImages,
    selectedIndex,
    currentImage,
    openImage,
    closeImage,
    nextImage,
    prevImage,
    goToImage
  }
}