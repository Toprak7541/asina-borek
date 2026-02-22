import { Language } from "../context/translations";

// Use a dynamic type based on Language keys
export type LocalizedString = Record<Language, string>;

export interface Product {
  id: string;
  name: LocalizedString;
  price: number;
  unit?: LocalizedString;
  description: LocalizedString;
}

export interface Category {
  id: string;
  title: LocalizedString;
  items: Product[];
}

export const menuData: Category[] = [
  {
    id: "borekler",
    title: { tr: "Börekler", en: "Boreks", de: "Börek", fr: "Börek", es: "Böreks", zh: "果仁蜜饼", ar: "بوريك", az: "Börəklər" },
    items: [
      {
        id: "kut-boregi",
        name: { tr: "Küt Böreği", en: "Kut Borek", de: "Küt Börek", fr: "Küt Börek", es: "Küt Börek", zh: "切片烤饼", ar: "كوت بوريك", az: "Küt Börəyi" },
        price: 30,
        unit: { tr: "1 dilim", en: "1 slice", de: "1 stück", fr: "1 tranche", es: "1 rebanada", zh: "1片", ar: "شريحة 1", az: "1 dilim" },
        description: {
          tr: "Pudra şekeriyle servis edilen, kat kat çıtır hamurlu efsane lezzet.",
          en: "Legendary taste with crispy layers served with powdered sugar.",
          de: "Legendärer Geschmack mit knusprigen Schichten.",
          fr: "Goût légendaire avec des couches croustillantes.",
          es: "Sabor legendario con capas crujientes.",
          zh: "撒糖粉多层脆皮传奇美味。",
          ar: "طعم أسطوري مع طبقات مقرمشة تقدم مع السكر البودرة.",
          az: "Pudra şəkəri ilə təqdim edilən qat-qat xırtıldayan xəmirli əfsanəvi ləzzət."
        }
      },
      {
        id: "kiymali-borek",
        name: { tr: "Kıymalı Börek", en: "Minced Meat Borek", de: "Hackfleisch Börek", fr: "Börek Viande Hachée", es: "Börek de Carne Picada", zh: "碎肉薄饼", ar: "بوريك باللحم المفروم", az: "Qiyməli Börək" },
        price: 120,
        unit: { tr: "Porsiyon", en: "Portion", de: "Portion", fr: "Portion", es: "Porción", zh: "份量", ar: "حصة", az: "Porsiya" },
        description: {
          tr: "Özel Aşina hamuruyla fırından çıktığı anki tazeliğiyle.",
          en: "Freshly baked with special Asina dough and fresh minced meat filling.",
          de: "Frisch gebacken mit speziellem Asina-Teig.",
          fr: "Fraîchement cuit avec la pâte spéciale Asina.",
          es: "Recién horneado con masa especial Asina.",
          zh: "特色Asina面团现烤，馅料新鲜碎肉。",
          ar: "مخبوز طازج مع عجينة أشينا الخاصة.",
          az: "Xüsusi Aşina xəmiri ilə sobadan çıxan təzəlik."
        }
      },
      {
        id: "peynirli-borek",
        name: { tr: "Peynirli Börek", en: "Cheese Borek", de: "Käse Börek", fr: "Börek Fromage", es: "Börek de Queso", zh: "芝士薄饼", ar: "بوريك بالجبن", az: "Pendirli Börək" },
        price: 120,
        unit: { tr: "Porsiyon", en: "Portion", de: "Portion", fr: "Portion", es: "Porción", zh: "份量", ar: "حصة", az: "Porsiya" },
        description: {
          tr: "Taze köy peyniri ile hazırlanan nefis lezzet.",
          en: "Delicious taste prepared with fresh village cheese.",
          de: "Köstlicher Geschmack zubereitet mit frischem Dorfkäse.",
          fr: "Goût délicieux préparé avec du fromage de village frais.",
          es: "Delicioso sabor preparado con queso fresco de pueblo.",
          zh: "新鲜乡村芝士制成的美味。",
          ar: "طعم لذيذ محضر بجبن القرية الطازج.",
          az: "Təzə kənd pendiri ilə hazırlanan nəfis ləzzət."
        }
      },
      {
        id: "su-boregi",
        name: { tr: "Su Böreği", en: "Water Borek", de: "Wasser-Börek", fr: "Börek à l'Eau", es: "Börek de Agua", zh: "水煮薄饼", ar: "سو بوريك", az: "Su Börəyi" },
        price: 120,
        unit: { tr: "Porsiyon", en: "Portion", de: "Portion", fr: "Portion", es: "Porción", zh: "份量", ar: "حصة", az: "Porsiya" },
        description: {
          tr: "Haşlanmış yufkaların tereyağı ile buluştuğu eşsiz tat.",
          en: "Unique taste where boiled dough meets butter.",
          de: "Einzigartiger Geschmack, bei dem gekochter Teig auf Butter trifft.",
          fr: "Goût unique où la pâte bouillie rencontre le beurre.",
          es: "Sabor único donde la masa hervida se encuentra con la mantequilla.",
          zh: "水煮面团与黄油相遇的独特美味。",
          ar: "طعم فريد حيث تلتقي العجينة المسلوقة بالزبدة.",
          az: "Qaynadılmış yuxaların kərə yağı ilə qovuşduğu unikal dad."
        }
      },
    ],
  },
  {
    id: "hamur-isleri",
    title: { tr: "Hamur İşleri", en: "Pastries", de: "Gebäck", fr: "Pâtisseries", es: "Pasteles", zh: "糕点", ar: "معجنات", az: "Xəmir İşləri" },
    items: [
      {
        id: "pogaca",
        name: { tr: "Poğaçalar", en: "Pogaca", de: "Pogaca", fr: "Pogaca", es: "Pogaca", zh: "面点", ar: "بوجا", az: "Poğaça" },
        price: 20,
        description: {
          tr: "Sabahın ilk ışıklarında hazırlanan pofuduk dokusuyla.",
          en: "Fluffy texture prepared in the first light of the morning.",
          de: "Flauschige Textur, im ersten Licht des Morgens zubereitet.",
          fr: "Texture moelleuse préparée aux premières lueurs du matin.",
          es: "Textura esponjosa preparada a las primeras luces de la mañana.",
          zh: "清晨的阳光下制作的松软口感。",
          ar: "قوام رقيق يحضر في أول ضوء من الصباح.",
          az: "Səhər ilk işıqlarında hazırlanan pambıq kimi dokunuşu ilə."
        }
      },
      {
        id: "sandvic",
        name: { tr: "Sandviçler", en: "Sandwiches", de: "Sandwiches", fr: "Sandwichs", es: "Sándwiches", zh: "三明治", ar: "سندويشات", az: "Sendviçlər" },
        price: 75,
        description: {
          tr: "Taze malzemelerle hazırlanan doyurucu sandviçler.",
          en: "Satisfying sandwiches prepared with fresh ingredients.",
          de: "Sättigende Sandwiches aus frischen Zutaten.",
          fr: "Des sandwichs rassasiants préparés avec des ingrédients frais.",
          es: "Sándwiches saciantes preparados con ingredientes frescos.",
          zh: "新鲜食材制成的令人满意的三明治。",
          ar: "سندويشات مشبعة محضرة بمكونات طازجة.",
          az: "Təzə inqrediyentlərlə hazırlanan doyumlu sendviçlər."
        }
      },
      {
        id: "pizza",
        name: { tr: "Pizza", en: "Pizza", de: "Pizza", fr: "Pizza", es: "Pizza", zh: "披萨", ar: "بيتزا", az: "Pizza" },
        price: 75,
        description: {
          tr: "Özel sosu ve bol malzemesiyle hazırlanan lezzetli pizza.",
          en: "Delicious pizza prepared with special sauce and plentiful ingredients.",
          de: "Leckere Pizza mit spezieller Soße und reichlich Zutaten.",
          fr: "Délicieuse pizza préparée avec une sauce spéciale.",
          es: "Deliciosa pizza preparada con salsa especial.",
          zh: "特制酱料加丰富配料的美味披萨。",
          ar: "بيتزا لذيذة محضرة بصلصة خاصة ومكونات وفيرة.",
          az: "Xüsusi sous və bol inqrediyentlə hazırlanmış dadlı pizza."
        }
      },
    ],
  },
  {
    id: "soguk-icecekler",
    title: { tr: "Soğuk İçecekler", en: "Cold Drinks", de: "Kalte Getränke", fr: "Boissons Froides", es: "Bebidas Frías", zh: "冷饮", ar: "مشروبات باردة", az: "Soyuq İçkilər" },
    items: [
      { id: "kola", name: { tr: "Kutu Kola/Fanta", en: "Canned Coke/Fanta", de: "Dose Cola/Fanta", fr: "Canette Cola/Fanta", es: "Lata Cola/Fanta", zh: "罐装可乐/芬达", ar: "علبة كولا/فانتا", az: "Qutu Kola/Fanta" }, price: 40, description: { tr: "Soğuk meşrubat.", en: "Cold refreshment.", de: "Kalte Erfrischung.", fr: "Rafraîchissement froid.", es: "Refresco frío.", zh: "冷饮。", ar: "مرطبات باردة.", az: "Soyuq sərinləşdirici." } },
      { id: "ayran", name: { tr: "Ayran", en: "Ayran", de: "Ayran", fr: "Ayran", es: "Ayran", zh: "咸酸奶", ar: "عيران", az: "Ayran" }, price: 20, description: { tr: "Böreğin en güzel eşlikçisi.", en: "Best companion for borek.", de: "Der beste Begleiter.", fr: "Le meilleur compagnon.", es: "El mejor compañero.", zh: "最佳佐餐饮品。", ar: "أفضل رفيق للبوريك.", az: "Börəyin ən gözəl müşayiətçisi." } },
      { id: "su", name: { tr: "Su", en: "Water", de: "Wasser", fr: "Eau", es: "Agua", zh: "水", ar: "ماء", az: "Su" }, price: 10, description: { tr: "Doğal kaynak suyu.", en: "Natural spring water.", de: "Natürliches Quellwasser.", fr: "Eau de source naturelle.", es: "Agua mineral natural.", zh: "天然泉水。", ar: "مياه الينابيع الطبيعية.", az: "Təbii bulaq suyu." } },
    ],
  },
  {
    id: "sicak-icecekler",
    title: { tr: "Sıcak İçecekler", en: "Hot Drinks", de: "Heiße Getränke", fr: "Boissons Chaudes", es: "Bebidas Calientes", zh: "热饮", ar: "مشروبات ساخنة", az: "İsti İçkilər" },
    items: [
      { id: "cay", name: { tr: "Çay", en: "Tea", de: "Tee", fr: "Thé", es: "Té", zh: "茶", ar: "شاي", az: "Çay" }, price: 15, description: { tr: "Taze demlenmiş sıcacık Karadeniz çayı.", en: "Freshly brewed hot Black Sea tea.", de: "Frisch gebrühter heißer Schwarzmeer-Tee.", fr: "Thé chaud fraîchement infusé.", es: "Té caliente recién hecho.", zh: "现煮热红茶。", ar: "شاي البحر الأسود الساخن الطازج.", az: "Təzə dəmlənmiş isti Qaradəniz çayı." } },
      { id: "kahve", name: { tr: "Türk Kahvesi", en: "Turkish Coffee", de: "Türkischer Kaffee", fr: "Café Turc", es: "Café Turco", zh: "土耳其咖啡", ar: "قهوة تركية", az: "Türk Qəhvəsi" }, price: 50, description: { tr: "Közde pişmiş, bol köpüklü.", en: "Roasted on embers, foamy.", de: "Geröstet auf Glut, schaumig.", fr: "Rôti sur braise, mousseux.", es: "Asado en brasas, espumoso.", zh: "灰烬中慢煮的多泡咖啡。", ar: "محمص على الجمر، رغوي.", az: "Közdə bişmiş, bol köpüklü." } },
    ],
  },
];
