import { MenuCategory, MenuItem } from "../types/menu";

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  [MenuCategory.BOREKLER]: "Börekler",
  [MenuCategory.HAMUR_ISLERI]: "Hamur İşleri",
  [MenuCategory.SOGUK_ICECEKLER]: "Soğuk İçecekler",
  [MenuCategory.SICAK_ICECEKLER]: "Sıcak İçecekler",
};

export const menuData: MenuItem[] = [
  { id: "kut-boregi", name: "Küt Böreği", price: 30, category: MenuCategory.BOREKLER, description: "1 Dilim", isHot: true, isAvailable: true },
  { id: "kiymali-borek", name: "Kıymalı Börek", price: 120, category: MenuCategory.BOREKLER, description: "Porsiyon", isHot: true, isAvailable: true },
  { id: "peynirli-borek", name: "Peynirli Börek", price: 120, category: MenuCategory.BOREKLER, description: "Porsiyon", isHot: true, isAvailable: true },
  { id: "patatesli-borek", name: "Patatesli Börek", price: 120, category: MenuCategory.BOREKLER, description: "Porsiyon", isHot: true, isAvailable: true },
  { id: "su-boregi", name: "Su Böreği", price: 120, category: MenuCategory.BOREKLER, description: "Porsiyon", isHot: true, isAvailable: true },

  { id: "pogaca", name: "Poğaçalar", price: 20, category: MenuCategory.HAMUR_ISLERI, description: "Günlük üretim", isHot: true, isAvailable: true },
  { id: "acma", name: "Açmalar", price: 20, category: MenuCategory.HAMUR_ISLERI, description: "Günlük üretim", isHot: true, isAvailable: true },
  { id: "sandvic", name: "Sandviçler", price: 75, category: MenuCategory.HAMUR_ISLERI, description: "Taze malzeme", isHot: false, isAvailable: true },
  { id: "pizza", name: "Pizza", price: 75, category: MenuCategory.HAMUR_ISLERI, description: "Fırından sıcak", isHot: true, isAvailable: true },

  { id: "link-meyve-suyu", name: "Link Meyve Suyu", price: 25, category: MenuCategory.SOGUK_ICECEKLER, description: "Soğuk servis", isHot: false, isAvailable: true },
  { id: "meysu-meyve-suyu", name: "Meysu Meyve Suyu", price: 15, category: MenuCategory.SOGUK_ICECEKLER, description: "Soğuk servis", isHot: false, isAvailable: true },
  { id: "sutler", name: "Sütler", price: 25, category: MenuCategory.SOGUK_ICECEKLER, description: "Soğuk servis", isHot: false, isAvailable: true },
  { id: "capri-sun", name: "Capri Sun", price: 25, category: MenuCategory.SOGUK_ICECEKLER, description: "Soğuk servis", isHot: false, isAvailable: true },
  { id: "kutu-icecekler", name: "Kola-Fanta-Cappy Çeşitleri", price: 50, category: MenuCategory.SOGUK_ICECEKLER, description: "Kutu içecek", isHot: false, isAvailable: true },
  { id: "sodalar", name: "Sodalar", price: 35, category: MenuCategory.SOGUK_ICECEKLER, description: "Maden suyu çeşitleri", isHot: false, isAvailable: true },
  { id: "limonata", name: "Limonata", price: 35, category: MenuCategory.SOGUK_ICECEKLER, description: "Ev yapımı", isHot: false, isAvailable: true },
  { id: "1lt-icecek", name: "1 LT Meyve Suyu-Kola", price: 60, category: MenuCategory.SOGUK_ICECEKLER, description: "Aile boy", isHot: false, isAvailable: true },
  { id: "25lt-kola", name: "2.5 LT Kola", price: 90, category: MenuCategory.SOGUK_ICECEKLER, description: "Aile boy", isHot: false, isAvailable: true },
  { id: "su", name: "Su", price: 10, category: MenuCategory.SOGUK_ICECEKLER, description: "Soğuk servis", isHot: false, isAvailable: true },

  { id: "turk-kahvesi", name: "Türk Kahvesi", price: 50, category: MenuCategory.SICAK_ICECEKLER, description: "Köz tadında", isHot: true, isAvailable: true },
  { id: "nescafe", name: "Nescafe", price: 25, category: MenuCategory.SICAK_ICECEKLER, description: "Sıcak servis", isHot: true, isAvailable: true },
  { id: "kucuk-cay", name: "Küçük Çay", price: 15, category: MenuCategory.SICAK_ICECEKLER, description: "İnce belli bardak", isHot: true, isAvailable: true },
  { id: "buyuk-cay", name: "Büyük Çay", price: 25, category: MenuCategory.SICAK_ICECEKLER, description: "Büyük bardak", isHot: true, isAvailable: true },
];
