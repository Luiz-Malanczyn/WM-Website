import { ref } from 'vue'
import imagemGaleria1 from '../../../assets/imagem-galeria-1.png'
import imagemGaleria2 from '../../../assets/imagem-galeria-2.png'
import imagemGaleria3 from '../../../assets/imagem-galeria-3.png'
import imagemGaleria4 from '../../../assets/imagem-galeria-4.png'
import imagemGaleria5 from '../../../assets/imagem-galeria-5.png'
import imagemGaleria6 from '../../../assets/imagem-galeria-6.png'

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: imagemGaleria1, alt: 'Galeria 1' },
  { id: 2, src: imagemGaleria2, alt: 'Galeria 2' },
  { id: 3, src: imagemGaleria3, alt: 'Galeria 3' },
  { id: 4, src: imagemGaleria4, alt: 'Galeria 4' },
  { id: 5, src: imagemGaleria5, alt: 'Galeria 5' },
  { id: 6, src: imagemGaleria6, alt: 'Galeria 6' },
]

export const useGalerySection = () => {
  const selectedImage = ref<GalleryImage | null>(null)

  const openImage = (image: GalleryImage) => {
    selectedImage.value = image
    document.body.style.overflow = 'hidden'
  }

  const closeImage = () => {
    selectedImage.value = null
    document.body.style.overflow = 'auto'
  }

  return {
    selectedImage,
    openImage,
    closeImage
  }
}