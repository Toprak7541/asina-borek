# Aşina Börek & Cafe - Progress Log

## Versiyon 9.0 (Uygulandı)

- [x] **Navigasyon & Smooth Scroll**
  - Navbar'a **Hakkımızda** linki eklendi.
  - `about`, `menu`, `konum` bölümlerine hem desktop hem mobil menüden yumuşak geçiş aktif.

- [x] **Sonsuz Kayışlı Fotoğraf Galerisi (Infinite Carousel)**
  - `app/components/ImageSlider.tsx` oluşturuldu.
  - Galeri kaynağı `public/images/gallery/` dizinine bağlandı (`1.jpg` - `6.jpg` varsayılan).
  - Soldan sağa kesintisiz, slow & steady premium akış animasyonu eklendi.
  - Kartlarda hafif `border-radius` + `box-shadow` uygulandı.

- [x] **Google Login & Sadakat Altyapısı (NextAuth.js Hazırlığı)**
  - `app/api/auth/[...nextauth]/route.ts` altyapısı eklendi.
  - Google Provider için `GOOGLE_CLIENT_ID` ve `GOOGLE_CLIENT_SECRET` env değişkenleri kullanıldı.
  - Navbar sağ üstte giriş akışı için `Giriş Yap` / `Hoş geldin, [İsim]` alanı eklendi.
  - Gelecekteki dijital sadakat kartı için `LoyaltyProfile` ve `LoyaltyUserModel` tasarlandı.

## Backlog

- [ ] **Instagram Feed Entegrasyonu** (Bunu sonra yapacağız demiştik)
- [ ] **Google Yorumları (Live Reviews)**
- [ ] **Menü Filtreleme (Gelişmiş UX)**

---
*Son Güncelleme: 26.02.2026*
