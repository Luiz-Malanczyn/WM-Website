import { ref } from 'vue'

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'src/assets/imagem-galeria-1.png', alt: 'Galeria 1' },
  { id: 2, src: 'src/assets/imagem-galeria-2.png', alt: 'Galeria 2' },
  { id: 3, src: 'src/assets/imagem-galeria-3.png', alt: 'Galeria 3' },
  { id: 4, src: 'src/assets/imagem-galeria-4.png', alt: 'Galeria 4' },
  { id: 5, src: 'src/assets/imagem-galeria-5.png', alt: 'Galeria 5' },
  { id: 6, src: 'src/assets/imagem-galeria-6.png', alt: 'Galeria 6' },
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
