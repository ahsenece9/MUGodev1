# HiFertility – Mobil Uygulama

Doğurganlık sağlığı eğitim platformu. React Native (Expo) ile geliştirilmiştir.

---

## Ekranlar

| Ekran | Açıklama |
|---|---|
| Ana Sayfa | Hızlı erişim kartları, forum ve kısa bilgi özeti |
| Bildirimler | Uygulama bildirimleri listesi |
| Kurslar | Video kurs listesi ve ilerleme takibi |
| Kurs Detayı | Video oynatıcı + ders listesi |
| Forum | Topluluk paylaşımları, kategori filtresi |
| Yeni Konu | Forum başlığı oluşturma formu |
| Kısa Bilgiler | Kısa bilgi kartları |
| Blog | Makale listesi |
| Makale Detayı | Tam makale içeriği |
| Drawer Menü | Tüm bölümlere erişim + profil |

---

## Yerelde Nasıl Çalıştırılır?

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18 veya üzeri)
- [npm](https://www.npmjs.com/) (v9 veya üzeri)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Android Studio (fiziksel cihaz ya da emülatör için)

### Kurulum

```bash
# 1. Repoyu klonla
git clone https://github.com/ahsenece9/MUGodev1.git
cd MUGodev1

# 2. Bağımlılıkları yükle
npm install

# 3. Expo geliştirme sunucusunu başlat
npx expo start
```

### Çalıştırma Seçenekleri

```bash
# Android emülatörde çalıştır
npx expo start --android

# Expo Go uygulamasıyla (QR kod ile)
npx expo start
# → Expo Go uygulamasını aç ve QR kodu tara

# Web tarayıcısında çalıştır
npx expo start --web
```

### Android Studio Kurulumu

1. [Android Studio](https://developer.android.com/studio) indir ve kur
2. Android SDK (API 33+) yükle
3. AVD Manager'dan sanal cihaz oluştur (Pixel 6, API 33 önerilir)
4. Emülatörü çalıştır
5. `npx expo start --android` komutunu çalıştır

---

## APK / IPA Dosyaları

APK build için Expo EAS Build kullanabilirsiniz:

```bash
# EAS CLI kur
npm install -g eas-cli

# Giriş yap
eas login

# Android APK build et
eas build --platform android --profile preview
```

> APK dosyası build tamamlandığında Expo dashboard üzerinden indirilebilir.

---

## Demo Video

> Uygulama demo videosu YouTube playlist'e eklenecektir.

---

## Teknolojiler

- **React Native** (Expo Managed Workflow)
- **@react-navigation/native** – navigasyon altyapısı
- **@react-navigation/drawer** – yan menü (drawer)
- **@react-navigation/stack** – sayfa geçişleri
- **@expo/vector-icons** – Feather ikonları

---

## Proje Yapısı

```
MUGodev1/
├── App.js                    # Uygulama giriş noktası
├── app.json                  # Expo konfigürasyonu
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── NotificationsScreen.js
│   │   ├── CoursesScreen.js
│   │   ├── CourseDetailScreen.js
│   │   ├── ForumScreen.js
│   │   ├── NewTopicScreen.js
│   │   ├── QuickInfoScreen.js
│   │   ├── BlogScreen.js
│   │   ├── ArticleDetailScreen.js
│   │   └── PlaceholderScreen.js
│   ├── components/
│   │   ├── DrawerContent.js
│   │   └── PostCard.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   └── data/
│       └── mockData.js
└── README.md
```
