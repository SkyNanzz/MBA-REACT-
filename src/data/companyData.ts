import nilamImage from '../assets/minyak-nilam.jpeg';
import type { Product, Statistic, GalleryItem, NavLink, CompanyValue, Advantage, TeamMember, SocialLink } from '../types';

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
    comingSoon: false,
  },
  {
    id: 'kayu-putih',
    name: '-',
    slug: '-',
    image: '',
    description: '-',
    benefits: ['-'],
    specifications: [{ label: '-', value: '-' }],
    category: 'essential-oil',
    origin: '-',
    extractionMethod: '-',
    comingSoon: true,
  },
  {
    id: 'cengkeh',
    name: '-',
    slug: '-',
    image: '',
    description: '-',
    benefits: ['-'],
    specifications: [{ label: '-', value: '-' }],
    category: 'essential-oil',
    origin: '-',
    extractionMethod: '-',
    comingSoon: true,
  },
  {
    id: 'pala',
    name: '-',
    slug: '-',
    image: '',
    description: '-',
    benefits: ['-'],
    specifications: [{ label: '-', value: '-' }],
    category: 'essential-oil',
    origin: '-',
    extractionMethod: '-',
    comingSoon: true,
  },
  {
    id: 'sereh',
    name: '-',
    slug: '-',
    image: '',
    description: '-',
    benefits: ['-'],
    specifications: [{ label: '-', value: '-' }],
    category: 'essential-oil',
    origin: '-',
    extractionMethod: '-',
    comingSoon: true,
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


/* ================================================
 * Cara menambahkan gambar galeri:
 * 1. Simpan file gambar ke folder src/assets/gallery/
 * 2. Import di sini, contoh:
 *    import kebunNilam from '../assets/gallery/kebun-nilam.jpeg';
 * 3. Gunakan variabel import sebagai nilai 'src', contoh:
 *    { id: 'g1', src: kebunNilam, alt: 'Kebun nilam Buton', category: 'perkebunan' },
 * Kategori yang tersedia: perkebunan, produksi, perusahaan, produk
 * ================================================ */
export const galleryItems: GalleryItem[] = [
  { id: 'g1', src: '', alt: 'Belum ada gambar', category: 'perkebunan' },
  { id: 'g2', src: '', alt: 'Belum ada gambar', category: 'produksi' },
  { id: 'g3', src: '', alt: 'Belum ada gambar', category: 'perusahaan' },
  { id: 'g4', src: '', alt: 'Belum ada gambar', category: 'produk' },
  { id: 'g5', src: '', alt: 'Belum ada gambar', category: 'perkebunan' },
  { id: 'g6', src: '', alt: 'Belum ada gambar', category: 'perkebunan' },
  { id: 'g7', src: '', alt: 'Belum ada gambar', category: 'produksi' },
  { id: 'g8', src: '', alt: 'Belum ada gambar', category: 'perusahaan' },
  { id: 'g9', src: '', alt: 'Belum ada gambar', category: 'perkebunan' },
  { id: 'g10', src: '', alt: 'Belum ada gambar', category: 'produk' },
  { id: 'g11', src: '', alt: 'Belum ada gambar', category: 'produksi' },
  { id: 'g12', src: '', alt: 'Belum ada gambar', category: 'perusahaan' },
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
  address: 'Jl.Pahlawan Kel.Kadolo Kec.Kokalukuna Kota Baubau, Sulawesi Tenggara',
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
