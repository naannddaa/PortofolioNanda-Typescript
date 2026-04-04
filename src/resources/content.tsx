import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nanda",
  lastName: "Ayu Astarika",
  name: `Nanda Ayu Astarika`,
  role: "Software Developer Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "nandakalipait@gmail.com",
  location: "Asia/Jakarta", // IANA time zone identifier
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/naannddaa",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nanda-ayu-8a1a08288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/naannddaa._?igsh=MTJpdDJ4d3I4b3cwNw==",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@naannddaa._",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>NANDA AYU ASTARIKA</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    {/* <span className="text-lg font-semibold" size="xl" weight="strong">
    Laravel • PHP • Dart • Flutter • Figma • Canva </span> */}
    <Text as="span" size="xl" weight="strong">Laravel • PHP • Dart • Flutter • Figma • Canva </Text>, 
    <br /> 
    <span className="text-sm text-gray-500">
   Enthusiast Software Development
    {/* Mahasiswa Teknik Informatika dengan ketertarikan pada pengembangan perangkat lunak, khususnya dalam pembuatan website dan aplikasi mobile. Memiliki pengalaman menggunakan Laravel, PHP, dan Flutter serta kemampuan dalam desain menggunakan Figma dan Canva untuk menghasilkan solusi digital yang efektif dan menarik. */}
</span>
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Halo! Saya Nanda Ayu Astarika, mahasiswa Teknik Informatika yang tertarik di bidang pengembangan perangkat lunak, khususnya pembuatan website dan aplikasi mobile.

Saya terbiasa menggunakan Laravel, PHP, dan Flutter dalam membangun aplikasi, serta memiliki kemampuan desain menggunakan Figma dan Canva untuk menghasilkan tampilan yang menarik dan user friendly. Selain itu, saya juga memiliki ketertarikan dalam bidang analisis data.

Selama masa perkuliahan, saya aktif mengikuti kompetisi, bootcamp, mengerjakan berbagai project, dan terlibat dalam organisasi untuk terus mengembangkan kemampuan saya.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects Experience",
    experiences: [

       {
        company: "Sistem IoT Klasifikasi Grading Buah ",
        timeframe: "Agustus - 2025",
        role: "Machine Learning Developer",
        achievements: [
          <>
           Mengembangkan sistem klasifikasi grading buah berbasis pengolahan citra menggunakan metode Backpropagation untuk meningkatkan efisiensi dan akurasi dalam proses penentuan kualitas buah. </>,
          <>
            Berperan dalam pengumpulan dan pengolahan dataset primer yang digunakan sebagai data pelatihan dan pengujian model.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/iot.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },


      {
        company: "Aplikasi Administrasi Pemerintah Desa",
        timeframe: "Agustus - 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Mengembangkan tampilan dari aplikasi mobile (Dart) dan website (PHP Native) untuk administrasi pemerintahan desa
          </>,
          <>
            Berkontribusi dalam pembuatan API yang menghubungkan aplikasi mobile dan website untuk sinkronisasi data secara real-time
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "DigitalVillage - Aplikasi Pengajuan Surat Desa",
        timeframe: "Februari - 2025",
        role: "Full Stack Developer",
        achievements: [
          <>
           Mendesign aplikasi Mobile dengan menggunakan Figma untuk memastikan tampilan yang user-friendly dan sesuai dengan kebutuhan pengguna.
          </>,
          <>
            Mengembangkan aplikasi mobile menggunakan Flutter untuk memudahkan warga desa dalam mengajukan surat secara online, meningkatkan efisiensi dan aksesibilitas layanan administrasi desa.
          </>,
           <>
          Mengembangakn aplikasi website menggunakan Laravel untuk mendukung proses administrasi surat desa, termasuk fitur manajemen data dan pelaporan yang memudahkan petugas desa dalam mengelola pengajuan surat.
          </>,
           <>
            Membuat API untuk menghubungkan aplikasi mobile dan website, memastikan sinkronisasi data yang lancar dan real-time antara kedua platform.  
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/mobile2.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

       {
        company: "Sistem Informasi Kasir Berbasis Desktop",
        timeframe: "Agustus - 2023",
        role: "Backend Developer | QA",
        achievements: [
          <>
           Membuat fitur manajemen barang untuk memastikan stok ter update secara rea-ltime
          </>,
          <>
           Membangun fitur login dan registrasi berbasis RFID untuk meningkatkan keamanan dan efisiensi proses autentikasi pengguna.
          </>,
          <>
          Melakukan pengujian aplikasi untuk memastikan kualitas dan kinerja yang optimal sebelum dirilis ke pengguna.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/desktop.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "D4 - Teknik Informatika",
        description: <>Mempelajari dan mengimplementasikan mengenai perangkat lunak, mulai dari Databaase, 
pengembangan aplikasi website, mobile, desktop, machine learning hingga embeded system 
(IoT).</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Membuat design sesuai dengan kebutuhan pengguna.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/figma.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Data Analyst Visualization",
        description: (
          <>Membangun dashboard sederhana untuk visualisasi data analitik.</>
        ),
        tags: [
          {
            name: "Microsoft Excel",
            icon: "excel",
          },
          // {
          //   name: "Next.js",
          //   icon: "nextjs",
          // },
          // {
          //   name: "Supabase",
          //   icon: "supabase",
          // },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/dataanalyst.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Achievement",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Activities",
  title: `Activities – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
