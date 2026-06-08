import {
  FileText,
  GraduationCap,
  SearchCheck,
  ScanSearch,
  Languages,
  BarChart3,
  Globe,
  BookOpenCheck,
} from "lucide-react";

export const services = [
  {
    title: "Publikasi Scopus",
    desc: "Bantuan profesional untuk publikasi jurnal terindeks Scopus Q1-Q4.",
    icon: <FileText size={20} />,
  },

  {
    title: "Jurnal SINTA",
    desc: "Layanan pendampingan publikasi jurnal terakreditasi SINTA.",
    icon: <GraduationCap size={20} />,
  },

  {
    title: "Jurnal International Index Copernicus",
    desc: "Pendampingan publikasi jurnal internasional terindeks Index Copernicus.",
    icon: <Globe size={20} />,
  },

  {
    title: "Jurnal Pengabdian",
    desc: "Bantuan publikasi jurnal pengabdian masyarakat untuk dosen dan mahasiswa.",
    icon: <BookOpenCheck size={20} />,
  },

  {
    title: "Proofreading",
    desc: "Proofreading bahasa Inggris akademik dan perbaikan manuskrip.",
    icon: <Languages size={20} />,
  },

  {
    title: "Penurunan Plagiarisme",
    desc: "Pengecekan plagiarisme dan pengurangan similarity secara profesional.",
    icon: <ScanSearch size={20} />,
  },

  {
    title: "Analisis Data",
    desc: "Bantuan analisis SPSS, SmartPLS, SEM, dan penelitian kuantitatif.",
    icon: <BarChart3 size={20} />,
  },

  {
    title: "Bantuan Proposal",
    desc: "Pendampingan proposal skripsi, tesis, dan disertasi.",
    icon: <SearchCheck size={20} />,
  },
];