
import { Slide } from '@/types/slides';

export const slides: Slide[] = [
  // Slide 1: Title
  {
    id: 1,
    type: 'title',
    title: 'Menemukan Keseimbangan Di Era AI',
    subtitle: 'sebagai pembuka jalan produktifitas berkelanjutan',
    author: 'Hidayat Abisena',
    quote: '"Technology is best when it brings people together." - Matt Mullenweg (CEO of Automattic/WordPress)',
    logos: [
      'https://framerusercontent.com/images/0aaSOxupKAsVA4ou30WbxLvSQo0.png',
      'https://res.cloudinary.com/moyadev/image/upload/v1749432065/Mayar/logo-unma-transparent_likzmk.png'
    ]
  },
  // Slide 2: Opening Quote
  {
    id: 2,
    type: 'quote',
    content: '"Di era dimana semua orang bisa menghasilkan proposal "sempurna" dengan AI, yang paling berharga adalah perspektif unik kalian."',
    author: '- Arif Darmawan',
    question: 'Dosen tetap di Jurusan Hubungan Internasional FISIP Universitas Jenderal Soedirman (UNSOED), Koordintor Pusat Riset Kebijakan Strategis Asia Tenggara, LPPM UNSOED'
  },
  // Slide 3: Story
  {
    id: 3,
    type: 'story',
    title: 'Eksperimen di kelas Metode Penelitian',
    content: [
      '40 mahasiswa',
      '2 pertemuan',
      '2 pendekatan ekstrem: 100% WITH AI vs 100% WITHOUT AI'
    ],
    result: 'https://www.threads.com/@the.dotmatrix',
    visual: 'experiment'
  },
  {
    id: 4,
    type: 'story',
    title: 'Saat Semua Bisa ‘Canggih’ dalam 90 Menit',
    content: [
      'Topik: Diplomasi Digital Indonesia',
      'Mahasiswa bebas pakai ChatGPT, Claude, dll',
      'Hasil cepat & teknis: outline lengkap dalam 30 menit',
      'Tapi… pasif, seragam, kehilangan soul'
    ],
    result: 'Like following an invisible template.',
    visual: 'experiment'
  },
  {
    id: 5,
    type: 'story',
    title: 'Saat Mereka Dipaksa Berpikir Sendiri',
    content: [
      'Suasana kelas berubah: riuh, penuh diskusi, coretan',
      'Mahasiswa mulai mempertanyakan, menyusun ide sendiri',
      'Muncul pertanyaan-pertanyaan orisinil seperti:'
    ],
    result: 'Kenapa influencer lebih efektif dari diplomat?',
    visual: 'experiment'
  },
  // Slide 4: Question to Audience
  // {
  //   id: 4,
  //   type: 'audience-question',
  //   question: 'Have you ever felt more productive, but less fulfilled?',
  //   subtext: 'Raise your hand if this resonates with you'
  // },
  // Slides 5-7: Journey
  // {
  //   id: 5,
  //   type: 'journey',
  //   title: 'Saat Semua Bisa ‘Canggih’ dalam 90 Menit',
  //   subtitle: 'Chapter 1: Early Adoption (2021)',
  //   content: 'Discovered GPT-3, started automating simple coding tasks. Everything felt magical and limitless.',
  //   icon: '🌟',
  //   timeline: '2021'
  // },
  // {
  //   id: 6,
  //   type: 'journey',
  //   title: 'My 3-Year Journey with AI',
  //   subtitle: 'Chapter 2: Transformation (2022)',
  //   content: 'Integrated AI into daily workflows. Code reviews, documentation, even creative writing - AI became my co-pilot.',
  //   icon: '🚀',
  //   timeline: '2022'
  // },
  // {
  //   id: 7,
  //   type: 'journey',
  //   title: 'My 3-Year Journey with AI',
  //   subtitle: 'Chapter 3: Dilemmas (2023-2024)',
  //   content: 'Started questioning: Am I solving problems or just prompting solutions? Where did my creativity go?',
  //   icon: '🤔',
  //   timeline: '2023-2024'
  // },
  // Slides 8-10: Searching for Balance
  {
    id: 6, // Adjust the ID as needed based on where you want this slide to appear
    type: 'comparison-table',
    title: 'Perbandingan Dua Dunia',
    subtitle: 'Output "AI Execution" vs "Thinking Process"',
    headers: ['Aspek', 'WITH AI', 'WITHOUT AI'],
    rows: [
      {
        aspect: 'Kecepatan',
        withAI: 'Sangat cepat',
        withoutAI: 'Lambat'
      },
      {
        aspect: 'Hasil',
        withAI: 'Rapi, teknis',
        withoutAI: 'Acak, belum selesai'
      },
      {
        aspect: 'Ide',
        withAI: 'Generik',
        withoutAI: 'Orisinil'
      },
      {
        aspect: 'Emosi',
        withAI: 'Dingin',
        withoutAI: 'Bangga, terlibat'
      },
      {
        aspect: 'Proses',
        withAI: 'Autopilot',
        withoutAI: 'Struggle aktif'
      }
    ]
  },
  {
    id: 7,
    type: 'challenge',
    title: 'Struggling itu Penting',
    content: [
      "Pake AI itu seperti naik mobil autopilot.",
      "Kalo manual jelek, tapi 100% dari saya.",
      "AI bantu polish, tapi ide harus dari kita dulu."
    ],
    visual: 'overload'
  },
  {
    id: 8,
    type: 'story',
    title: 'Synthesis: Best of Both Worlds',
    content: [
      'Ambil core idea dari versi manual',
      'Gunakan AI untuk referensi dan perbaikan teknis',
      'Tapi tetap jaga original voice'
    ],
    result: 'AI + Human Thinking: Duo Ideals',
    visual: 'experiment'
  },
  // {
  //   id: 9,
  //   type: 'challenge',
  //   title: 'The Detachment',
  //   content: 'Work felt efficient but hollow. Like watching someone else solve my problems.',
  //   visual: 'detachment'
  // },
  // {
  //   id: 10,
  //   type: 'balance-attempt',
  //   title: 'Attempting Balance',
  //   content: 'Set boundaries: AI-free hours, manual journaling, deliberate slow thinking.',
  //   visual: 'balance'
  // },
  // Slides 11-13: Insights
  {
    id: 9,
    type: 'insight',
    title: 'Insight untuk Mahasiswa',
    content: 'AI Tidak Bisa Menggantikan Pertanyaan Bagus',
    description: 'Local insight, pengalaman pribadi, kepekaan sosial = tak tergantikan.',
    visual: 'efficiency'
  },
  {
    id: 10,
    type: 'insight',
    title: 'Insight untuk Pendidik',
    content: 'Jangan Larang AI. Tapi Jangan Biarkan Autopilot.',
    description: 'Mahasiswa harus alami keduanya: WITH & WITHOUT AI. Tantangan: mendidik kepekaan, bukan sekadar skill teknis.',
    visual: 'spark'
  },
  // {
  //   id: 11,
  //   type: 'insight',
  //   title: 'Insight #3',
  //   content: 'Preserve the human spark',
  //   description: 'The messy, imperfect, uniquely human process of creation has value.',
  //   visual: 'spark'
  // },
  // Slides 14-15: Tool or Driver
  {
    id: 11,
    type: 'comparison',
    title: 'Mencari Keseimbangan: Proses yang Masih Berjalan',
    content: 'Insight sementara: keseimbangan bukan tentang batas waktu, tapi tentang intentionality.',
    visual: 'tool'
  },
  // {
  //   id: 15,
  //   type: 'comparison',
  //   title: 'AI as Driver',
  //   content: 'Dictates workflow, makes decisions for us, replaces human judgment',
  //   visual: 'driver'
  // },
  // Slides 16-17: Open Questions
  {
    id: 12,
    type: 'reflection',
    title: 'Tantangan & Peluang Era AI',
    questions: [
      'Tantangan: over-automation, kehilangan deep work, kecanduan cepatnya hasil.',
      'Peluang: AI sebagai co-pilot, bukan driver utama.',
      'AI bisa bantu kita kerja lebih cepat, tapi cuma kita yang bisa menentukan kenapa kita kerja.'
    ]
  },
  {
    id: 13,
    type: 'reflection',
    title: 'Pertanyaan reflektif',
    questions: [
      'Tidak ada rumus pasti — tapi kita bisa refleksi dan eksplorasi bersama.',
      'Apa yang ingin kamu pertahankan sebagai manusia di era AI?'
    ]
  },
  // Slide 18: Closing
  {
    id: 14,
    type: 'toolkit',
    title: 'Submit jawabanmu',
    content: 'Scan qr code ini untuk membuka form',
    qr: true
  },
  {
    id: 15,
    type: 'closing',
    title: '✨ Pelajaran Penting dari seminar ini',
    content: [
      'AI adalah alat bantu, bukan pengganti proses berpikir.',
      'Proses struggling itu penting — di sanalah orisinalitas dan pemahaman tumbuh.',
      'AI membantu efisiensi teknis, tapi ide orisinal hanya muncul dari kepekaan, rasa ingin tahu, dan pengalaman manusia.',
      'Pendidikan harus mengajarkan kapan dan bagaimana menggunakan AI secara bijak, bukan sekadar mempercepat tugas.',
      'Proposal yang sempurna itu mudah dibuat dengan AI, tapi yang bernilai adalah proposal yang punya perspektif unik.',
      'Kreativitas dan pertanyaan kritis adalah aset paling berharga di era AI.',
      'Jangan hanya ajarkan hasil, ajarkan proses berpikir.'
    ],
    visual: 'path'
  },
  // Slide 20: Thank You
  {
    id: 16,
    type: 'thanks',
    title: 'Thank You',
    subtitle: 'Questions & Discussion',
    content: 'hidayatabisena@gmail.com'
  }
];