export type MenuCategory = "veg" | "nonveg" | "egg";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: MenuCategory;
  imageUrl: string;
  description: string;
}
