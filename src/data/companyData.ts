/* ============================================
 * Cara menambahkan gambar produk:
 * 1. Simpan file gambar ke folder src/assets/
 * 2. Import di sini, contoh:
 *    import kayuPutihImage from '../assets/kayu-putih.jpeg';
 * 3. Gunakan variabel import sebagai nilai 'image'
 * ============================================ */
import nilamImage from '../assets/minyak-nilam.jpeg';
import type { Product, Statistic, GalleryItem, NavLink, TimelineItem, CompanyValue, Advantage, TeamMember, SocialLink } from '../types';

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
    image: nilamImage,
    description: 'Minyak nilam (Patchouli Oil) premium dengan kadar patchouli alcohol tinggi. Diproses melalui distilasi uap dari daun nilam pilihan yang dibudidayakan di perkebunan lokal Buton.',
    benefits: [
      'Digunakan dalam industri parfum dan kosmetik',
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
    origin: 'Baubau, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'kayu-putih',
    name: 'Comming Soon',
    slug: 'Comming-Soon',
    image: '',
    description: '-',
    benefits: [
      'Manfaat 1',
      'Manfaat 2',
      'Manfaat 3',
      'Manfaat 4',
      'Manfaat 5',
    ],
    specifications: [
      { label: 'Spesifikasi 1', value: '-' },
      { label: 'Spesifikasi 2', value: '-' },
      { label: 'Spesifikasi 3', value: '-' },
      { label: 'Spesifikasi 4', value: '-' },
      { label: 'Spesifikasi 5', value: '-' },
    ],
    category: 'essential-oil',
    origin: 'Baubau, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'cengkeh',
    name: 'Comming Soon',
    slug: 'Comming-Soon',
    image: '',
    description: '-',
    benefits: [
      'Manfaat 1',
      'Manfaat 2',
      'Manfaat 3',
      'Manfaat 4',
      'Manfaat 5',
    ],
    specifications: [
      { label: 'Spesifikasi 1', value: '-' },
      { label: 'Spesifikasi 2', value: '-' },
      { label: 'Spesifikasi 3', value: '-' },
      { label: 'Spesifikasi 4', value: '-' },
      { label: 'Spesifikasi 5', value: '-' },
    ],
    category: 'essential-oil',
    origin: 'Buton, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'pala',
    name: 'Comming Soon',
    slug: 'Comming-Soon',
    image: '',
    description: '-',
    benefits: [
      'Manfaat 1',
      'Manfaat 2',
      'Manfaat 3',
      'Manfaat 4',
      'Manfaat 5',
    ],
    specifications: [
      { label: 'Spesifikasi 1', value: '-' },
      { label: 'Spesifikasi 2', value: '-' },
      { label: 'Spesifikasi 3', value: '-' },
      { label: 'Spesifikasi 4', value: '-' },
      { label: 'Spesifikasi 5', value: '-' },
    ],
    category: 'essential-oil',
    origin: 'Baubau, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
  {
    id: 'sereh',
    name: 'Coming Soon',
    slug: 'Comming-Soon',
    image: '',
    description: '-',
    benefits: [
      'Manfaat 1',
      'Manfaat 2',
      'Manfaat 3',
      'Manfaat 4',
      'Manfaat 5',
    ],
    specifications: [
      { label: 'Spesifikasi 1', value: '-' },
      { label: 'Spesifikasi 2', value: '-' },
      { label: 'Spesifikasi 3', value: '-' },
      { label: 'Spesifikasi 4', value: '-' },
      { label: 'Spesifikasi 5', value: '-' },
    ],
    category: 'essential-oil',
    origin: 'Baubau, Sulawesi Tenggara',
    extractionMethod: 'Distilasi Uap',
  },
];


export const statistics: Statistic[] = [
  {
    id: 's1',
    value: '10+',
    label: 'Tahun Pengalaman',
    icon: 'FaClock',
  },
  {
    id: 's2',
    value: '100+',
    label: 'Kilogram Produksi per Tahun',
    icon: 'FaIndustry',
  },
  {
    id: 's3',
    value: '12+',
    label: 'Kota di Indonesia',
    icon: 'FaMapMarkerAlt',
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
  { id: 'g10', src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', alt: 'Produk kemasan siap kirim', category: 'produk' },
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
    title: 'Distribusi Perdana',
    description: 'Memperluas jaringan distribusi ke berbagai kota di Sulawesi Tenggara, menandai langkah awal pengembangan pasar regional.',
  },
  {
    year: '2014',
    title: 'Sertifikasi ISO',
    description: 'Memperoleh sertifikasi mutu untuk sistem manajemen produksi, meningkatkan kepercayaan pelanggan di pasar domestik.',
  },
  {
    year: '2017',
    title: 'Perluas Jaringan',
    description: 'Memperluas jangkauan pemasaran ke berbagai kota di Indonesia. Produksi terus ditingkatkan dengan jaringan petani binaan yang semakin luas.',
  },
  {
    year: '2020',
    title: 'Modernisasi Pabrik',
    description: 'Investasi teknologi distilasi modern untuk meningkatkan kualitas dan kapasitas produksi serta efisiensi energi.',
  },
  {
    year: '2023',
    title: 'Sertifikasi Produk',
    description: 'Memperoleh sertifikasi organik untuk produk unggulan, meningkatkan daya saing di pasar nasional.',
  },
  {
    year: '2025',
    title: 'Pencapaian Baru',
    description: 'Produksi semakin meningkat dengan jaringan petani binaan yang bertambah di seluruh Sulawesi Tenggara dan jangkauan pemasaran ke berbagai daerah di Indonesia.',
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
    description: 'Komitmen pada standar kualitas tertinggi dalam setiap tetes essential oil yang diproduksi untuk kepuasan pelanggan di Indonesia.',
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
    title: 'Jangkauan Lokal',
    description: 'Jaringan distribusi yang terus berkembang di berbagai kota di Indonesia dengan pelayanan yang dekat dengan pelanggan.',
  },
  {
    icon: 'FaUsers',
    title: 'Petani Binaan',
    description: 'Memberdayakan ribuan petani lokal melalui program kemitraan yang adil dan berkelanjutan.',
  },
  {
    icon: 'FaCertificate',
    title: 'Bersertifikasi',
    description: 'Produk bersertifikasi dan terjamin kualitasnya melalui proses kontrol mutu yang ketat dan transparan.',
  },
  {
    icon: 'FaTruck',
    title: 'Logistik Andal',
    description: 'Sistem logistik yang handal dengan ketepatan pengiriman yang terjaga ke seluruh wilayah Indonesia.'
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Kosong',
    position: '?',
    avatar: '',
    description: '?',
  },
  {
    id: 'tm2',
    name: 'La Anton Maja',
    position: '?',
    avatar: '',
    description: '?',
  },
  {
    id: 'tm3',
    name: 'Kosong',
    position: '?',
    avatar: '',
    description: '?'
  },
];

export const contactInfo = {
  address: 'Jl.Pahlawan Kec.Kadolo Kel.Kokalukuna Kota Baubau, Sulawesi Tenggara',
  email: 'antonmajadarman@gmail.com',
  phone: '+62-852-5531-0307',
  whatsapp: '6285255310307',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d436.3732568095424!2d122.62066823996726!3d-5.461146257370567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1783830611759!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin">',
};

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com/mbamandiri', icon: 'FaInstagram' },
  { name: 'Facebook', url: 'https://facebook.com/mbamandiri', icon: 'FaFacebook' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/mbamandiri', icon: 'FaLinkedin' },
];
