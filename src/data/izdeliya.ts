export interface Product {
  slug: string;
  title: string;
  description?: string;
  
  image: string;

  details?: string;
  price?: string;
}

export const products: Product[] = [
  {
    slug: "test-1",
    title: "Тест 1",
    description: "product SEO description",
    image: "/images/placeholders/placeholder-1200x640.png",
    price: "123 ₽",
  },
  {
    slug: "test-2",
    title: "Тест 2",
    description: "product SEO description",
    image: "/images/placeholders/placeholder-1200x640.png",
    price: "123 ₽",
  },
];