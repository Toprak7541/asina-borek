export enum MenuCategory {
  BOREKLER = "BOREKLER",
  HAMUR_ISLERI = "HAMUR_ISLERI",
  SOGUK_ICECEKLER = "SOGUK_ICECEKLER",
  SICAK_ICECEKLER = "SICAK_ICECEKLER",
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description: string;
  isHot: boolean;
  isAvailable: boolean;
}
