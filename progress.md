# Aşina Börek & Cafe - Progress Log

## Versiyon 9.0 (Uygulandı)

- [x] **Hero Section Görsel Yenilenmesi (Visual Fix)**
  - Sağ hero görsel alanı dairesel premium amblem sunumuna taşındı.
  - Siyah/keskin kutu görünümü kaldırılarak `var(--surface)` tabanında yumuşak gölge ve radius dengesi sağlandı.
  - Amblem arkasına `var(--accent)` tabanlı radial glow eklendi.
  - Framer Motion ile amblem için hafif floating animasyonu uygulandı.
  - Hero metin/görsel yerleşimi `md:grid-cols-5` oranı ile dengelendi.

- [x] **Esnek Giriş Sistemi (NextAuth Update)**
  - `CredentialsProvider` eklendi (E-posta + Şifre).
  - Google girişi opsiyon olarak korundu.
  - Statik admin doğrulaması tanımlandı (`admin@asinaborek.com` / `123456`, env ile override destekli).

- [x] **Giriş Modal Güncellemesi (UI/UX)**
  - `Giriş Yap` akışı modal yapıya geçirildi.
  - Modalda Google ile devam et, ayırıcı, e-posta/şifre alanları, giriş butonu ve "Şifremi Unuttum" bağlantısı eklendi.
  - Credentials formu NextAuth callback endpoint'i ile bağlandı.

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

- [x] **Auth Modal UX Düzeltmeleri**
  - Kapatma butonu, backdrop click, blur + overlay, scroll lock, merkez hizalama, scale-up animasyon, input focus glow ve loading durumu eklendi.

## Backlog

- [ ] **Instagram Feed Entegrasyonu** (Bunu sonra yapacağız demiştik)
- [ ] **Google Yorumları (Live Reviews)**
- [x] **Menü Altyapısı Tamamlandı**

---
*Son Güncelleme: 26.02.2026*
