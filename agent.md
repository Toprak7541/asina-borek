# Aşina Börek & Cafe - Agent Guidelines

## Proje Yapısı
Proje, modern bir Next.js mimarisi üzerine kurulmuştur:

- `app/`: Uygulama çekirdeği (App Router).
  - `components/`: UI bileşenleri (BentoGrid, Hero, MenuCard vb.).
  - `context/`: Global state yönetimi (LanguageContext).
  - `data/`: Statik veriler ve tipler (menu.ts).
  - `globals.css`: Tailwind 4 ve CSS değişkenleri.
- `public/`: Statik varlıklar (resimler, fontlar).

## Teknolojiler
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 & Vanilla CSS
- **Animations**: Framer Motion
- **3D**: React Three Fiber / Drei / Three.js
- **Icons**: Lucide React

## Kod Yazım Standartları
- **Bileşen Geliştirme**: "use client" direktifi gerekli yerlerde kullanılmalı. Framer Motion ile mikro-animasyonlar eklenmeli.
- **Tasarım Sistemi**: Renkler ve boşluklar için CSS değişkenleri (`var(--accent)`, `var(--surface)` vb.) tercih edilmeli.
- **Tip Güvenliği**: TypeScript interface'leri her bileşen ve veri yapısı için tanımlanmalı.
- **Lokalizasyon**: Tüm metinler `LanguageContext` üzerinden çok dilli desteklenmeli.
- **Performans**: Animasyonlar 60 FPS hedeflenerek optimize edilmeli, gereksiz render'lardan kaçınılmalı.
