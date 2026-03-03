export const notifications = [
  {
    id: '1',
    icon: 'book-open',
    iconColor: '#8B5CF6',
    bgColor: '#EDE9FE',
    title: 'Yeni kurs eklendi',
    message: 'Egzersiz ve Doğurganlık kursu yayında!',
    time: '2 dakika önce',
  },
  {
    id: '2',
    icon: 'message-circle',
    iconColor: '#10B981',
    bgColor: '#D1FAE5',
    title: 'Forum yanıtı',
    message: 'Sorunuza yeni bir yanıt geldi.',
    time: '15 dakika önce',
  },
  {
    id: '3',
    icon: 'file-text',
    iconColor: '#F59E0B',
    bgColor: '#FEF3C7',
    title: 'Ev ödevi hatırlatması',
    message: 'Haftalık ödevinizi teslim etmeyi unutmayın.',
    time: '1 saat önce',
  },
  {
    id: '4',
    icon: 'heart',
    iconColor: '#EF4444',
    bgColor: '#FEE2E2',
    title: 'Blog yazısı',
    message: 'Uyku ve Doğurganlık hakkında yeni makale.',
    time: '3 saat önce',
  },
  {
    id: '5',
    icon: 'bell',
    iconColor: '#3B82F6',
    bgColor: '#DBEAFE',
    title: 'Danışmanlık randevusu',
    message: 'Randevunuz yarın saat 14:00\'te.',
    time: '5 saat önce',
  },
  {
    id: '6',
    icon: 'award',
    iconColor: '#8B5CF6',
    bgColor: '#EDE9FE',
    title: 'Anket tamamlandı',
    message: 'Anketiniz başarıyla gönderildi.',
    time: '1 gün önce',
  },
];

export const quickInfoPosts = [
  {
    id: '1',
    author: 'Esra ARBAĞ',
    avatar: 'EA',
    avatarColor: '#8B5CF6',
    category: 'Kısa Bilgiler',
    title: 'Uyku ve Doğurganlık Arasındaki İlişki',
    content:
      'Yeterli ve kaliteli uyku, hormonal dengeyi düzenleyerek doğurganlığı olumlu etkiler. Araştırmalar, düzensiz uyku düzeninin üreme hormonlarını olumsuz etkilediğini göstermektedir.',
    image: null,
    likes: 24,
    comments: 8,
    time: '2 saat önce',
    liked: false,
  },
  {
    id: '2',
    author: 'Dr. Ayşe Kaya',
    avatar: 'AK',
    avatarColor: '#10B981',
    category: 'Kısa Bilgiler',
    title: 'En İyi 5 Doğurganlığı Artıran Atıştırmalık',
    content:
      'Ceviz, yaban mersini, avokado, yeşil çay ve bitter çikolata doğurganlığı artırmaya yardımcı olan en iyi atıştırmalıklar arasında yer almaktadır.',
    image: null,
    likes: 42,
    comments: 15,
    time: '1 gün önce',
    liked: true,
  },
  {
    id: '3',
    author: 'Uzm. Dyt. Fatma Şahin',
    avatar: 'FŞ',
    avatarColor: '#F59E0B',
    category: 'Kısa Bilgiler',
    title: 'D Vitamini ve Doğurganlık',
    content:
      'D vitamini eksikliği, hem kadın hem de erkek doğurganlığını olumsuz etkileyebilir. Güneş ışığı ve takviyeler ile D vitamini seviyenizi dengede tutun.',
    image: null,
    likes: 31,
    comments: 11,
    time: '2 gün önce',
    liked: false,
  },
];

export const courses = [
  {
    id: '1',
    title: 'Egzersiz ve Doğurganlık',
    instructor: 'Uzm. Fizyoterapist Zeynep Ak',
    thumbnail: null,
    lessonsCount: 3,
    duration: '45 dk',
    lessons: [
      { id: '1', title: 'Ders-1: Giriş ve Temel Kavramlar', duration: '10:30', completed: true },
      { id: '2', title: 'Ders-2: Egzersiz Türleri', duration: '15:20', completed: false },
      { id: '3', title: 'Ders-3: Pratik Uygulamalar', duration: '19:10', completed: false },
    ],
  },
  {
    id: '2',
    title: 'Beslenme ve Doğurganlık',
    instructor: 'Uzm. Dyt. Fatma Şahin',
    thumbnail: null,
    lessonsCount: 4,
    duration: '60 dk',
    lessons: [
      { id: '1', title: 'Ders-1: Beslenme Temelleri', duration: '12:00', completed: true },
      { id: '2', title: 'Ders-2: Süper Besinler', duration: '14:30', completed: false },
      { id: '3', title: 'Ders-3: Menü Planlaması', duration: '18:00', completed: false },
      { id: '4', title: 'Ders-4: Takviyeler', duration: '15:30', completed: false },
    ],
  },
  {
    id: '3',
    title: 'Stres Yönetimi',
    instructor: 'Psk. Deniz Yıldız',
    thumbnail: null,
    lessonsCount: 3,
    duration: '40 dk',
    lessons: [
      { id: '1', title: 'Ders-1: Stresin Etkileri', duration: '11:00', completed: false },
      { id: '2', title: 'Ders-2: Rahatlama Teknikleri', duration: '16:00', completed: false },
      { id: '3', title: 'Ders-3: Meditasyon', duration: '13:00', completed: false },
    ],
  },
];

export const forumPosts = [
  {
    id: '1',
    author: 'Esra ARBAĞ',
    avatar: 'EA',
    avatarColor: '#8B5CF6',
    category: 'Ev Ödevi',
    title: 'Beslenme ve Doğurganlık Üzerine Araştırmam',
    content:
      'Bu hafta beslenme ve doğurganlık arasındaki ilişkiyi araştırdım. Akdeniz diyetinin doğurganlığı artırdığına dair güçlü kanıtlar buldum...',
    likes: 12,
    comments: 5,
    time: '3 saat önce',
    liked: false,
  },
  {
    id: '2',
    author: 'Merve Çelik',
    avatar: 'MÇ',
    avatarColor: '#EF4444',
    category: 'Forum',
    title: 'Fiziksel Aktivite Hakkında Sorularım',
    content:
      'Haftada kaç gün egzersiz yapmalıyız? Hangi egzersiz türleri doğurganlığı daha çok destekler?',
    likes: 8,
    comments: 14,
    time: '5 saat önce',
    liked: true,
  },
  {
    id: '3',
    author: 'Aylin Demir',
    avatar: 'AD',
    avatarColor: '#10B981',
    category: 'Forum',
    title: 'Uyku düzenimi nasıl iyileştiririm?',
    content:
      'Gece geç saatlere kadar çalışmak zorunda kalıyorum. Bu uyku düzenimi etkiliyor. Tavsiyeleriniz neler?',
    likes: 19,
    comments: 23,
    time: '1 gün önce',
    liked: false,
  },
];

export const articles = [
  {
    id: '1',
    title: 'Neden Yaşam Tarzımızı İyileştirmeliyiz?',
    author: 'Dr. Ayşe Kaya',
    category: 'Blog',
    readTime: '5 dk okuma',
    content: `Yaşam tarzı değişiklikleri, doğurganlık tedavisinin temel taşını oluşturmaktadır. Araştırmalar, sağlıklı yaşam alışkanlıklarının doğurganlık üzerinde önemli bir etkisi olduğunu göstermektedir.

**Beslenme**
Dengeli ve besleyici bir diyet, üreme sağlığını destekler. Antioksidanlar açısından zengin gıdalar, serbest radikallerin zararlarına karşı koruma sağlar.

**Fiziksel Aktivite**
Düzenli egzersiz, hormonal dengeyi destekler ve stres seviyelerini düşürür. Haftada en az 150 dakika orta yoğunlukta egzersiz önerilmektedir.

**Stres Yönetimi**
Kronik stres, üreme hormonlarını olumsuz etkileyebilir. Meditasyon, yoga ve nefes egzersizleri stres yönetiminde etkili yöntemlerdir.

**Uyku**
Kaliteli uyku, büyüme hormonu ve melatonin üretimini destekler. Günde 7-9 saat uyku hedeflenmelidir.`,
    time: '1 gün önce',
  },
  {
    id: '2',
    title: 'Fiziksel Aktivite ve Doğurganlık',
    author: 'Uzm. Fizyoterapist Zeynep Ak',
    category: 'Blog',
    readTime: '4 dk okuma',
    content: `Fiziksel aktivite, doğurganlığı desteklemek için güçlü bir araçtır. Ancak aşırı egzersiz de olumsuz sonuçlara yol açabilir.

**Önerilen Egzersizler**
Yürüyüş, yüzme, yoga ve pilates doğurganlık için en uygun egzersizlerdir. Bu aktiviteler vücudu zorlamadan hormonal dengeyi destekler.

**Kaçınılması Gerekenler**
Aşırı yoğun egzersiz programları, özellikle kadınlarda adet döngüsünü düzensizleştirebilir.

**Pratik Öneriler**
Haftada 3-5 gün, 30-45 dakikalık orta yoğunlukta egzersiz idealdir.`,
    time: '2 gün önce',
  },
];
