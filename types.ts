
export interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  avatarUrl: string;
}

export interface GalleryItem {
  id: number;
  type: 'before-after' | 'video' | 'image';
  description: string;
  thumbnailUrl: string;
  beforeUrl?: string;
  afterUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
}