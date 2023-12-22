<script>
  import 'swiper/css';
  import 'swiper/css/pagination';
  // import {Swiper, SwiperSlide} from "swiper/vue";
  // import {Autoplay, Pagination} from "swiper/modules";
  export default {
    // components: {
    //   Swiper,
    //   SwiperSlide,
    //   //   Lightgallery
    // },
    // data: () => ({
    //   // plugins: [lgThumbnail, lgZoom],
    //   isActive: true
    // }),
    // setup() {
    //   return {
    //     modules: [Autoplay, Pagination],
    //   };
    // },
  };
</script>

<template>
  <div>
    <main class="container category">
    <section class="hero d-flex align-items-center">
        <div class="row align-items-center">
            <div class="col">
                <p class="subtitle">Dive into the Diverse Palette of Indonesian Arts</p>
                <h1 class="headline">Explore the Depths of Indonesian Artistry with Our Category</h1>
                <p class="paragraph">Step into a world where tradition meets innovation, and creativity knows no bounds. Category ArtistryIndo invites you to embark on a cultural odyssey, delving into the richness of Indonesian arts across diverse categories.</p>
                <div class="button-group d-flex gap-2">
                    <a href="#category-1" class="button-primary">Explore Various Art</a>
                    <a href="/about" class="button-reverse">About Artistry</a>
                </div>
            </div>
            <div class="col-lg-5 col-xxl-6 d-none d-lg-flex justify-content-end">
                <img src="../assets/images/banners/banner-hero-category.svg" alt="Banner Hero Category" class="img-fluid banner-image">
            </div>
        </div>
    </section>

    <section class="category gap-section" id="category category-1">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Performing Arts Heritage at ArtistryIndo</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Step into the enchanting world of Indonesian Performing Arts Heritage, where every movement tells a story and every rhythm resonates with tradition.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-1.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Kecak Dance, Bali</h6>
                    <p class="card-caption">Mesmerizing cultural spectacle known for its rhythmic chanting and intricate choreography.</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-2.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Barong Dance, Gianyar, Bali</h6>
                    <p class="card-caption">Performed in Gianyar, Bali, is a captivating portrayal of the eternal battle.</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-3.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Ramayana Performance, Prambanan</h6>
                    <p class="card-caption">Mesmerizing cultural spectacle set against the backdrop of the majestic Prambanan Temple ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-4.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Martial arts</h6>
                    <p class="card-caption">Martial arts, an ancient practice with roots in various cultures, is a disciplined and dynamic ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-5.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Reog Ponorogo, East Java</h6>
                    <p class="card-caption">Reog Ponorogo, originating from East Java, is a vibrant and captivating traditional Indonesian ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-6.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Saman Dance, Aceh</h6>
                    <p class="card-caption">The Saman Dance from Aceh, Indonesia, is a remarkable cultural expression characterized ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-7.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Plate Dance, West Sumatra</h6>
                    <p class="card-caption">Tari Piring, originating from Sumatra Barat (West Sumatra), is a traditional Indonesian da ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-8.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Wayang Orang, Java</h6>
                    <p class="card-caption">Explore the classical Javanese dance drama of Wayang Orang, where performers bring to lif ...</p>
                </a>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 d-flex justify-content-center">
                <a href="/categories-artistry" class="button-reverse">More Performing Arts</a>
            </div>
        </div>
    </section>

    <section class="category gap-section" id="category">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Exploring Indonesia's Rich Heritage of Musical Arts</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Dive into the enchanting world of Indonesia's musical tapestry at ArtistryIndo. From the rhythmic allure of Gamelan to the soulful melodies of Sasando, this curated collection celebrates.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-1.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Gamelan, Java and Bali</h6>
                    <p class="card-caption">Explore the intricate world of Gamelan, a traditional ensemble of percussive instrument ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-2.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Angklung, West Java</h6>
                    <p class="card-caption">Experience the melodic charm of Angklung, a bamboo musical instrument ensemble from ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-3.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Sasando, East Nusa Tenggara</h6>
                    <p class="card-caption">Delight in the ethereal sounds of Sasando, a traditional stringed instrument from East Nusa ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-4.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Kolintang, North Sulawesi</h6>
                    <p class="card-caption">Immerse yourself in the harmonious tones of Kolintang, a traditional percussion ensemble ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-5.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Saluang, West Sumatra</h6>
                    <p class="card-caption">Discover the soulful tunes of Saluang, a traditional bamboo flute from West Sumatra ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-6.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Calung, West Java</h6>
                    <p class="card-caption">Delight in the rhythmic beats of Calung, a traditional bamboo percussion instrument fro ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-7.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Gong Kebyar, Bali</h6>
                    <p class="card-caption">Witness the dynamic and explosive sounds of Gong Kebyar, a Balinese gamelan ensemble ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-musics/thumbnail-music-8.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Rebab, Nationwide</h6>
                    <p class="card-caption">Dive into the enchanting melodies of Rebab, a traditional bowed string instrument found nati ...</p>
                </a>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 d-flex justify-content-center">
                <a href="/categories-artistry" class="button-reverse">More Musical Arts</a>
            </div>
        </div>
    </section>

    <section class="category gap-section" id="category">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Traditional Fine Arts at ArtistryIndo</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Embark on a visual odyssey through Indonesia's rich heritage of Traditional Fine Arts at ArtistryIndo. From the intricate details of Batik to the mesmerizing strokes of Wayang Kulit.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-arts/thumbnail-art-1.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Batik Art</h6>
                    <p class="card-caption">Explore the intricate world of Batik, a traditional Indonesian textile art where wax-resist dyein ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-arts/thumbnail-art-2.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Wayang Kulit</h6>
                    <p class="card-caption">Immerse yourself in the magical realm of Wayang Kulit, a traditional Javanese shadow ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-arts/thumbnail-art-3.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Wayang Golek</h6>
                    <p class="card-caption">Wayang Golek, a traditional Indonesian puppetry art form, comes to life with intricatel ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-arts/thumbnail-art-4.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Songket Art</h6>
                    <p class="card-caption">Songket, a traditional Indonesian textile art, exemplifies exquisite craftsmanship through ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-arts/thumbnail-art-5.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Keris</h6>
                    <p class="card-caption">The Keris, a traditional Indonesian dagger, is a symbol of cultural identity, craftsmanship, ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-arts/thumbnail-art-6.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Noken Bag</h6>
                    <p class="card-caption">The Noken bag, originating from Papua, Indonesia, is a unique and eco-friendly traditi ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-arts/thumbnail-art-7.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Wood Carving</h6>
                    <p class="card-caption">Wood carving in Indonesia is an ancient and revered art form that transforms raw timber ...</p>
                </a>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 d-flex justify-content-center">
                <a href="/categories-artistry" class="button-reverse">More Traditional Arts</a>
            </div>
        </div>
    </section>

    <section class="category gap-section" id="category">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Indonesian Literature and Folklore at ArtistryIndo</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Embark on a literary journey through the heart of Indonesia's rich heritage at ArtistryIndo. From the eloquence of ancient epics to the charm of traditional folklore.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-1.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Lutung Kasarung</h6>
                    <p class="card-caption">Lutung Kasarung is a traditional Sundanese folktale from West Java, Indonesia, recounting ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-2.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Sangkuriang</h6>
                    <p class="card-caption">Sangkuriang, a popular Javanese folklore, narrates the tale of unrequited love and cosm ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-3.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Malin Kundang</h6>
                    <p class="card-caption">Malin Kundang, a well-known Indonesian folklore, tells the poignant story of a young ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-4.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Danau Toba</h6>
                    <p class="card-caption">Danau Toba, nestled in the highlands of North Sumatra, is a majestic volcanic lake known fo ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-5.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Bawang Merah dan Bawang Putih</h6>
                    <p class="card-caption">The tale of "Bawang Merah dan Bawang Putih" is a timeless Indonesian folktale that explores ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-6.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Si Pitung</h6>
                    <p class="card-caption">Si Pitung, a legendary figure from Betawi folklore, is celebrated as a folk hero and symb ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-7.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Cindelaras</h6>
                    <p class="card-caption">Cindelaras, a beloved Javanese folklore, unfolds a narrative of a magical rooster and a young ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-folklores/thumbnail-folklore-8.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Keong Mas</h6>
                    <p class="card-caption">"Keong Mas," a captivating Indonesian folktale, unfolds the enchanting story of a golden snail ...</p>
                </a>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 d-flex justify-content-center">
                <a href="/categories-artistry" class="button-reverse">More Literature and Folklore</a>
            </div>
        </div>
    </section>

    <section class="category gap-section" id="category">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Traditional Culinary Delights at ArtistryIndo</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Indulge your senses in the culinary treasures of Indonesia at ArtistryIndo. Our curated collection of traditional delights invites you to savor the rich flavors, aromas, and cultural stories.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-1.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Mie Aceh (Aceh Province)</h6>
                    <p class="card-caption">Mie Aceh, hailing from the vibrant Aceh Province, is a culinary masterpiece known for ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-2.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Bika Ambon (North Sumatra)</h6>
                    <p class="card-caption">Bika Ambon, a delectable treat originating from North Sumatra, is a beloved Indonesian cake ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-3.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Rendang</h6>
                    <p class="card-caption">Bika Rendang, a culinary gem hailing from Sumatra Barat (West Sumatra), is a unique ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-4.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Pendap (Bengkulu Province)</h6>
                    <p class="card-caption">Pendap, a culinary treasure from Bengkulu Province, reflects the region's dedication to ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-5.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Belacan Curry (Riau Province)</h6>
                    <p class="card-caption">Belacan Curry, a culinary gem from Riau Province, is a tantalizing blend of flavors that ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-6.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Pempek (South Sumatra)</h6>
                    <p class="card-caption">Pempek, a culinary pride of South Sumatra, is a delectable dish that perfectly marries savory ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-7.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Mi Bangka (Bangka Belitung)</h6>
                    <p class="card-caption">Mi Bangka, originating from the pristine islands of Bangka Belitung, is a culinary delight that ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-culinaries/thumbnail-culinary-8.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Seruit (Lampung)</h6>
                    <p class="card-caption">Seruit, a culinary gem from Lampung, is a tantalizing blend of shredded fish, coconut ...</p>
                </a>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 d-flex justify-content-center">
                <a href="/categories-artistry" class="button-reverse">More Traditional Culinary</a>
            </div>
        </div>
    </section>

    <section class="category gap-section" id="category">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Poetic Manuscripts of Indonesian Art</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">We invite you to explore the beauty of Aksara and Literature in Indonesia at ArtistryIndo. Discover the wealth of poetry embedded in every character of Aksara Jawa, Aksara Bali, more</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-poetics/thumbnail-poetic-1.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Aksara Pallawa</h6>
                    <p class="card-caption">Aksara Pallawa, an ancient script originating from Indonesia, represents the rich historical ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-poetics/thumbnail-poetic-2.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Aksara Kawi</h6>
                    <p class="card-caption">Aksara Kawi, an ancient script derived from the Pallava script, holds a significant place in Indo ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-poetics/thumbnail-poetic-3.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Aksara Jawa</h6>
                    <p class="card-caption">Aksara Jawa, the Javanese script, is a venerable writing system that has played ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-poetics/thumbnail-poetic-4.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Aksara Bali</h6>
                    <p class="card-caption">Aksara Bali, the Balinese script, stands as a testament to the rich cultural and artistic trad ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-poetics/thumbnail-poetic-5.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Aksara Sasak</h6>
                    <p class="card-caption">Aksara Sasak, the script of the Sasak people in Lombok, Indonesia, is a unique writing system ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/artistry/kecak-dance" class="card-category">
                    <img src="../assets/images/thumbnail-poetics/thumbnail-poetic-6.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Aksara Lontara</h6>
                    <p class="card-caption">Aksara Lontara, originating from the Bugis and Makassar cultures of South Sulawesi, is a ...</p>
                </a>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 d-flex justify-content-center">
                <a href="/categories-artistry" class="button-reverse">More Poetic Manuscripts</a>
            </div>
        </div>
    </section>
    </main>
  </div>
</template>