import type { Product, Testimonial, Statistic, GalleryItem, NavLink, TimelineItem, CompanyValue, Advantage, TeamMember, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang' },
  { label: 'Produk', path: '/produk' },
  { label: 'Galeri', path: '/galeri' },
  { label: 'Kontak', path: '/kontak' },
];

export const products: Product[] = [
  {
    id: 'nilam',
    name: 'Minyak Nilam',
    slug: 'minyak-nilam',
    image: 'https://images.unsplash.com/photo-1588409985743-68ad0f404427?w=600&q=80',
    description: 'Minyak nilam (Patchouli Oil) premium kualitas ekspor dengan kadar patchouli alcohol tinggi. Diproses melalui distilasi uap dari daun nilam pilihan yang dibudidayakan di perkebunan terbaik Indonesia.',
    benefits: [
      'Menenangkan pikiran dan mengurangi stres',
      'Mengatasi masalah kulit dan jerawat',
      'Aromaterapi alami untuk relaksasi',
      'Anti-inflamasi dan antijamur',
      'Menyegarkan ruangan secara alami',
    ],
    specifications: [
      { label: 'Kadar PA', value: '≥ 30%' },
      { label: 'Kadar Besi', value: '< 5 ppm' },
      { label: 'Berat Jenis', value: '0.955 - 0.975' },
      { label: 'Warna', value: 'Coklat kekuningan' },
      { label: 'Kemasan', value: 'Drum 180kg / 5kg' },
    ],
    category: 'essential-oil',
    origin: 'Buton, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'kayu-putih',
    name: 'Minyak Kayu Putih',
    slug: 'minyak-kayu-putih',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
    description: 'Minyak kayu putih (Cajuput Oil) berkualitas premium dengan kadar sineol tinggi. Diproduksi dari daun Melaleuca cajuputi yang tumbuh subur di wilayah Buton.',
    benefits: [
      'Meredakan masuk angin dan perut kembung',
      'Menghangatkan tubuh',
      'Mengatasi nyeri otot dan sendi',
      'Meredakan sakit kepala',
      'Anti-bakteri alami',
    ],
    specifications: [
      { label: 'Kadar Sineol', value: '≥ 55%' },
      { label: 'Berat Jenis', value: '0.905 - 0.925' },
      { label: 'Indeks Bias', value: '1.460 - 1.470' },
      { label: 'Warna', value: 'Bening kekuningan' },
      { label: 'Kemasan', value: 'Jerigen 5kg / 25kg' },
    ],
    category: 'essential-oil',
    origin: 'Buton, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'cengkeh',
    name: 'Minyak Cengkeh',
    slug: 'minyak-cengkeh',
    image: 'https://images.unsplash.com/photo-1534205211749-9e0e94db22c8?w=600&q=80',
    description: 'Minyak cengkeh (Clove Oil) berkualitas tinggi dengan kadar eugenol optimal. Diekstrak dari bunga cengkeh pilihan menggunakan teknologi distilasi modern.',
    benefits: [
      'Meredakan sakit gigi secara alami',
      'Anti-oksidan dan anti-bakteri',
      'Mengatasi masalah pencernaan',
      'Meningkatkan sistem kekebalan tubuh',
      'Aromaterapi menyegarkan',
    ],
    specifications: [
      { label: 'Kadar Eugenol', value: '≥ 82%' },
      { label: 'Berat Jenis', value: '1.040 - 1.060' },
      { label: 'Kelarutan', value: 'Larut dalam etanol' },
      { label: 'Warna', value: 'Kuning kecoklatan' },
      { label: 'Kemasan', value: 'Drum 200kg / 25kg' },
    ],
    category: 'essential-oil',
    origin: 'Buton, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'pala',
    name: 'Minyak Pala',
    slug: 'minyak-pala',
    image: 'https://images.unsplash.com/photo-1596040033229-982a1022d5f1?w=600&q=80',
    description: 'Minyak pala (Nutmeg Oil) premium dengan aroma hangat dan khas. Cocok untuk industri makanan, minuman, farmasi, dan kosmetik.',
    benefits: [
      'Meredakan nyeri sendi dan otot',
      'Meningkatkan konsentrasi',
      'Membantu pencernaan',
      'Anti-inflamasi alami',
      'Aroma terapi yang menenangkan',
    ],
    specifications: [
      { label: 'Kadar Miristisin', value: '≥ 60%' },
      { label: 'Berat Jenis', value: '0.880 - 0.920' },
      { label: 'Putaran Optik', value: '+10° hingga +30°' },
      { label: 'Warna', value: 'Bening pucat' },
      { label: 'Kemasan', value: 'Drum 180kg / 5kg' },
    ],
    category: 'essential-oil',
    origin: 'Buton, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'sereh',
    name: 'Minyak Sereh Wangi',
    slug: 'minyak-sereh-wangi',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80',
    description: 'Minyak sereh wangi (Citronella Oil) berkualitas premium. Aromanya yang segar dan kuat sangat efektif sebagai pengusir nyamuk alami dan bahan baku industri.',
    benefits: [
      'Pengusir nyamuk alami dan efektif',
      'Menyegarkan ruangan',
      'Anti-bakteri dan antijamur',
      'Meredakan nyeri otot',
      'Aroma terapi yang menyegarkan',
    ],
    specifications: [
      { label: 'Kadar Sitronela', value: '≥ 35%' },
      { label: 'Berat Jenis', value: '0.880 - 0.895' },
      { label: 'Indeks Bias', value: '1.466 - 1.475' },
      { label: 'Warna', value: 'Kuning pucat' },
      { label: 'Kemasan', value: 'Drum 180kg / 5kg' },
    ],
    category: 'essential-oil',
    origin: 'Buton, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Jean-Pierre Laurent',
    position: 'Purchasing Manager',
    company: 'L\'Occitane Fragrance SA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    quote: 'Kualitas minyak nilam dari MBA Mandiri Buton Atsiri konsisten memenuhi standar kami. Kadar patchouli alcohol yang tinggi membuatnya menjadi pilihan utama bahan baku parfum premium kami.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Maria Schmidt',
    position: 'CEO',
    company: 'Essenzia Naturals GmbH',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    quote: 'Kerjasama dengan MBA Mandiri Buton Atsiri telah menjadi kemitraan yang sangat berharga. Ketepatan pengiriman dan konsistensi kualitas produk mereka luar biasa.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Takeshi Yamamoto',
    position: 'Director of Procurement',
    company: 'Aroma Japan Co., Ltd.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    quote: 'Sejak bermitra dengan MBA Mandiri Buton Atsiri, rantai pasokan essential oil kami menjadi lebih stabil. Produk mereka memenuhi standar ekspor Jepang yang sangat ketat.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Sarah Thompson',
    position: 'Product Development',
    company: 'Natural Wellness Inc.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    quote: 'Minyak kayu putih dan cengkeh dari MBA sangat autentik. Aroma dan kemurniannya jauh melampaui produk serupa yang pernah kami coba sebelumnya.',
    rating: 4,
  },
];

export const statistics: Statistic[] = [
  {
    id: 's1',
    value: '15+',
    label: 'Tahun Pengalaman',
    icon: 'FaClock',
  },
  {
    id: 's2',
    value: '500+',
    label: 'Ton Produksi per Tahun',
    icon: 'FaIndustry',
  },
  {
    id: 's3',
    value: '12+',
    label: 'Negara Tujuan Ekspor',
    icon: 'FaGlobe',
  },
  {
    id: 's4',
    value: '98%',
    label: 'Kepuasan Pelanggan',
    icon: 'FaStar',
  },
];


export const galleryItems: GalleryItem[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1588409985743-68ad0f404427?w=800&q=80', alt: 'Kebun nilam Buton', category: 'perkebunan' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', alt: 'Proses distilasi', category: 'produksi' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', alt: 'Kantor pusat MBA', category: 'perusahaan' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80', alt: 'Produk essential oil', category: 'produk' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1534205211749-9e0e94db22c8?w=800&q=80', alt: 'Tanaman cengkeh', category: 'perkebunan' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1596040033229-982a1022d5f1?w=800&q=80', alt: 'Buah pala segar', category: 'perkebunan' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1541888946425-d81bb47bae4e?w=800&q=80', alt: 'Area produksi', category: 'produksi' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80', alt: 'Tim MBA', category: 'perusahaan' },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80', alt: 'Tanaman sereh wangi', category: 'perkebunan' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', alt: 'Produk kemasan ekspor', category: 'produk' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Ruang kontrol produksi', category: 'produksi' },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', alt: 'Kantor dan tim', category: 'perusahaan' },
];

export const timeline: TimelineItem[] = [
  {
    year: '2008',
    title: 'Berdirinya Perusahaan',
    description: 'MBA Mandiri Buton Atsiri didirikan dengan visi menjadi produsen essential oil terkemuka yang berbasis di Buton, Sulawesi Tenggara.',
  },
  {
    year: '2011',
    title: 'Ekspor Perdana',
    description: 'Melakukan pengiriman ekspor pertama minyak nilam ke Malaysia dan Singapura, menandai langkah awal di pasar internasional.',
  },
  {
    year: '2014',
    title: 'Sertifikasi ISO',
    description: 'Memperoleh sertifikasi ISO 9001:2008 untuk sistem manajemen mutu, meningkatkan kredibilitas di mata pembeli internasional.',
  },
  {
    year: '2017',
    title: 'Ekspansi Pasar',
    description: 'Memperluas pasar ke Eropa dan Amerika Serikat. Produksi mencapai 300 ton per tahun dengan jaringan petani binaan yang luas.',
  },
  {
    year: '2020',
    title: 'Modernisasi Pabrik',
    description: 'Investasi teknologi distilasi modern untuk meningkatkan kualitas dan kapasitas produksi serta efisiensi energi.',
  },
  {
    year: '2023',
    title: 'Sertifikasi Organik',
    description: 'Memperoleh sertifikasi organik internasional untuk sebagian besar produk, membuka akses ke pasar premium global.',
  },
  {
    year: '2025',
    title: 'Pencapaian Baru',
    description: 'Produksi mencapai 500+ ton per tahun dengan 12+ negara tujuan ekspor dan jaringan petani binaan di seluruh Sulawesi Tenggara.',
  },
];

export const companyValues: CompanyValue[] = [
  {
    icon: 'FaLeaf',
    title: 'Keberlanjutan',
    description: 'Menjaga keseimbangan alam dan memberdayakan petani lokal melalui praktik pertanian berkelanjutan dan ramah lingkungan.',
  },
  {
    icon: 'FaAward',
    title: 'Kualitas Premium',
    description: 'Komitmen pada standar kualitas tertinggi dalam setiap tetes essential oil yang diproduksi untuk kepuasan pelanggan global.',
  },
  {
    icon: 'FaHandshake',
    title: 'Integritas',
    description: 'Menjalankan bisnis dengan transparan, jujur, dan bertanggung jawab kepada seluruh pemangku kepentingan.',
  },
  {
    icon: 'FaFlask',
    title: 'Inovasi',
    description: 'Terus berinovasi dalam teknologi produksi dan pengembangan produk baru untuk memenuhi kebutuhan pasar yang dinamis.',
  },
];

export const advantages: Advantage[] = [
  {
    icon: 'FaLeaf',
    title: 'Bahan Baku Premium',
    description: 'Menggunakan bahan baku terbaik dari perkebunan di Buton yang dikenal memiliki kualitas minyak atsiri superior.',
  },
  {
    icon: 'FaIndustry',
    title: 'Teknologi Modern',
    description: 'Menggunakan teknologi distilasi uap modern dengan kontrol kualitas ketat untuk menghasilkan produk yang konsisten.',
  },
  {
    icon: 'FaGlobeAsia',
    title: 'Jangkauan Global',
    description: 'Jaringan distribusi internasional yang luas dengan standar ekspor yang telah diakui pasar global.',
  },
  {
    icon: 'FaUsers',
    title: 'Petani Binaan',
    description: 'Memberdayakan ribuan petani lokal melalui program kemitraan yang adil dan berkelanjutan.',
  },
  {
    icon: 'FaCertificate',
    title: 'Bersertifikasi',
    description: 'Produk bersertifikasi ISO dan standar internasional lainnya yang menjamin kualitas dan keamanan.',
  },
  {
    icon: 'FaTruck',
    title: 'Logistik Andal',
    description: 'Sistem logistik yang handal dengan ketepatan pengiriman yang terjaga ke seluruh penjuru dunia.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'La Ode Muhammad Arsyad',
    position: 'Direktur Utama',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    description: 'Berpengalaman lebih dari 20 tahun di industri minyak atsiri dan perdagangan internasional.',
  },
  {
    id: 'tm2',
    name: 'Wa Ode Sri Rahayu',
    position: 'Direktur Produksi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    description: 'Ahli teknologi distilasi dengan pengalaman di berbagai pabrik essential oil di Indonesia.',
  },
  {
    id: 'tm3',
    name: 'La Ode Askar',
    position: 'Direktur Pemasaran',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    description: 'Memiliki jaringan pemasaran global yang luas di industri fragrance dan essential oil.',
  },
];

export const contactInfo = {
  address: 'Jl. Poros Pasarwajo - Labungkari No. 88, Desa Labungkari, Kec. Pasarwajo, Kab. Buton, Sulawesi Tenggara 93754',
  email: 'info@mbamandiri.co.id',
  phone: '+62-822-6989-1328',
  whatsapp: '6282269891328',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0!2d122.0!3d-5.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDAnMDAuMCJTIDEyMsKwMDAnMDAuMCJF!5e0!3m2!1sid!2sid!4v1',
};

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com/mbamandiri', icon: 'FaInstagram' },
  { name: 'Facebook', url: 'https://facebook.com/mbamandiri', icon: 'FaFacebook' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/mbamandiri', icon: 'FaLinkedin' },
];
