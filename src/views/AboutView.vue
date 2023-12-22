<script>
//   Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

//   Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

//   import required modules
  import { Autoplay, Pagination } from 'swiper/modules';

//   import Lightgallery from 'lightgallery/vue';
//   import lgThumbnail from 'lightgallery/plugins/thumbnail';
//   import lgZoom from 'lightgallery/plugins/zoom';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    //   Lightgallery
    },
    data: () => ({
        // plugins: [lgThumbnail, lgZoom],
        isActive: true
    }),
    setup() {
      return {
        modules: [Autoplay, Pagination],        
      };
    },
  };
</script>

<template>
  <div>
    <main class="container about">
    <section class="hero d-flex align-items-center">
        <div class="row align-items-center">
            <div class="col-lg-5 col-xxl-6 d-none d-lg-flex">
                <img src="../assets/images/banners/banner-hero-about.svg" alt="Banner Hero" class="img-fluid banner-image">
            </div>
            <div class="col ps-lg-5 ps-xxl-0">
                <p class="subtitle">Celebrating the Tapestry of Indonesian Arts</p>
                <h1 class="headline">Igniting Creativity A Journey Through the Heartbeat of Indonesian Arts</h1>
                <p class="paragraph">At ArtistryIndo, we define ourselves as more than a platform; we are custodians of Indonesia's artistic legacy. Our mission goes beyond mere representation; we strive to be a dynamic force that showcases, preserves, and innovates the diverse tapestry of Indonesian arts.</p>
                <div class="button-group d-flex gap-2">
                    <a href="#award" class="button-primary">Explore Our Story</a>
                    <a href="#team" class="button-reverse">Meet the Team</a>
                </div>
            </div>
        </div>
    </section>

    <section class="award gap-section" id="award">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">ArtistryIndo's Journey in the Spotlight</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Explore the journey of ArtistryIndo through the lens of recognition and acclaim. Our commitment to promoting and preserving the diverse tapestry of Indonesian arts.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 position-relative">
              <swiper 
                class="position-relative"
                :slides-per-view="1"
                :space-between="10"
                :modules="modules"
                :breakpoints="{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }"
              >
                <swiper-slide class="swiper-slide p-1">
                    <button type="button" class="award-item" data-bs-toggle="modal" data-bs-target="#modalAward1">
                        <img src="../assets/images/awards/award-1.svg" alt="Thumbnail Award" class="img-fluid w-100">
                        <h6>Cultural Heritage Preservation Award</h6>
                    </button>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <button type="button" class="award-item" data-bs-toggle="modal" data-bs-target="#modalAward2">
                        <img src="../assets/images/awards/award-2.svg" alt="Thumbnail Award" class="img-fluid w-100">
                        <h6>Innovation in Arts Platform</h6>
                    </button>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <button type="button" class="award-item" data-bs-toggle="modal" data-bs-target="#modalAward3">
                        <img src="../assets/images/awards/award-3.svg" alt="Thumbnail Award" class="img-fluid w-100">
                        <h6>Community Impact Award</h6>
                    </button>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <button type="button" class="award-item" data-bs-toggle="modal" data-bs-target="#modalAward4">
                        <img src="../assets/images/awards/award-4.svg" alt="Thumbnail Award" class="img-fluid w-100">
                        <h6>Global Arts Ambassador</h6>
                    </button>
                </swiper-slide>                 
              </swiper>              
            </div>
        </div>
    </section>

    <section class="team gap-section pt-4" id="team">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Harmony of Expertise Meet the ArtistryIndo Maestros</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Delve into the heartbeat of ArtistryIndo as we introduce you to the brilliant minds. Our team, a tapestry of diverse talents, is driven by a shared love for Indonesian arts.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 position-relative">
                  <swiper 
                    class="position-relative"
                    :slides-per-view="1"
                    :space-between="10"
                    :modules="modules"
                    :loop="true"
                    :autoplay="{
                      delay: 5000,
                      disableOnInteraction: false,
                    }"
                    :breakpoints="{
                      768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }"
                  >                    
                    <swiper-slide class="swiper-slide">
                        <button type="button" class="team-item" data-bs-toggle="modal" data-bs-target="#modalTeam1">
                            <img src="../assets/images/teams/team-1.svg" alt="Thumbnail Team" class="img-fluid w-100">
                            <h6>Isha Suryawan</h6>
                        </button>
                    </swiper-slide>              
                    <swiper-slide class="swiper-slide">
                        <button type="button" class="team-item" data-bs-toggle="modal" data-bs-target="#modalTeam2">
                            <img src="../assets/images/teams/team-2.svg" alt="Thumbnail Team" class="img-fluid w-100">
                            <h6>Maya Wijaya</h6>
                        </button>              
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <button type="button" class="team-item" data-bs-toggle="modal" data-bs-target="#modalTeam3">
                            <img src="../assets/images/teams/team-3.svg" alt="Thumbnail Team" class="img-fluid w-100">
                            <h6>Nia Damayanti</h6>
                        </button>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <button type="button" class="team-item" data-bs-toggle="modal" data-bs-target="#modalTeam4">
                            <img src="../assets/images/teams/team-4.svg" alt="Thumbnail Team" class="img-fluid w-100">
                            <h6>Ayu Desita</h6>
                        </button>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <button type="button" class="team-item" data-bs-toggle="modal" data-bs-target="#modalTeam5">
                            <img src="../assets/images/teams/team-5.svg" alt="Thumbnail Team" class="img-fluid w-100">
                            <h6>Adi Santoso</h6>
                        </button>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <button type="button" class="team-item" data-bs-toggle="modal" data-bs-target="#modalTeam6">
                            <img src="../assets/images/teams/team-6.svg" alt="Thumbnail Team" class="img-fluid w-100">
                            <h6>Rizal Hakim</h6>
                        </button>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>

    <section class="mission d-flex align-items-center gap-section pt-4" id="mission">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="title">ArtistryIndo's Cultural Odyssey Unveiling Our Mission in Indonesian Arts</h3>
                <p class="paragraph">Embark on a journey with ArtistryIndo as we unveil the guiding principles that steer our cultural odyssey. Our mission goes beyond being a platform; it is a commitment to celebrate, preserve, and innovate the rich tapestry of Indonesian arts.</p>
                <div class="row mission-wrapper">
                    <div class="col-md-6 d-flex gap-3">
                        <img src="../assets/images/icons/check.svg" alt="Checklist Icon" class="img-fluid" width="22">
                        <div class="wrapper">
                            <p class="mission-caption">ArtistryIndo's Commitment</p>
                            <p class="mission-title">Preserving Heritage, Igniting Creativity</p>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex gap-3 mt-3 mt-md-0">
                        <img src="../assets/images/icons/check.svg" alt="Checklist Icon" class="img-fluid" width="22">
                        <div class="wrapper">
                            <p class="mission-caption">ArtistryIndo's Enduring Mission</p>
                            <p class="mission-title">Unveiling Beauty, Connecting Hearts</p>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex gap-3 mt-3">
                        <img src="../assets/images/icons/check.svg" alt="Checklist Icon" class="img-fluid" width="22">
                        <div class="wrapper">
                            <p class="mission-caption">ArtistryIndo's Unwavering Mission</p>
                            <p class="mission-title">Connecting Cultures, Inspiring Expression</p>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex gap-3 mt-3">
                        <img src="../assets/images/icons/check.svg" alt="Checklist Icon" class="img-fluid" width="22">
                        <div class="wrapper">
                            <p class="mission-caption">ArtistryIndo's Pioneering Mission</p>
                            <p class="mission-title">Celebrating Diversity, Inspiring Unity</p>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex gap-3 mt-3">
                        <img src="../assets/images/icons/check.svg" alt="Checklist Icon" class="img-fluid" width="22">
                        <div class="wrapper">
                            <p class="mission-caption">ArtistryIndo's Visionary Mission</p>
                            <p class="mission-title">Elevating Art, Empowering Artists</p>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex gap-3 mt-3">
                        <img src="../assets/images/icons/check.svg" alt="Checklist Icon" class="img-fluid" width="22">
                        <div class="wrapper">
                            <p class="mission-caption">ArtistryIndo's Everlasting Mission</p>
                            <p class="mission-title">Innovating Tradition, Connecting Generations</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-xxl-6 d-none d-lg-flex justify-content-end">
                <img src="../assets/images/banners/banner-mission.svg" alt="Banner Mission" class="img-fluid banner-image">
            </div>
        </div>
    </section>

    <section class="gallery gap-section" id="gallery">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Capturing the Essence of Indonesian Arts</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Immerse yourself in a visual journey that captures the essence of traditional and contemporary expressions. Our Gallery Documentation section is a testament to the diverse beauty.</p>
            </div>
        </div>
        <div class="gap-row row-gallery">
            <a href="assets/images/galleries/gallery-1.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-1.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="assets/images/galleries/gallery-3.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-3.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="assets/images/galleries/gallery-6.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-6.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="assets/images/galleries/gallery-9.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-9.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

             <a href="assets/images/galleries/gallery-2.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-2.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

             <a href="assets/images/galleries/gallery-4.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-4.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

             <a href="assets/images/galleries/gallery-5.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-5.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

             <a href="assets/images/galleries/gallery-7.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-7.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

             <a href="assets/images/galleries/gallery-8.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-8.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="assets/images/galleries/gallery-10.svg" data-lightbox="gallery-documentation" class="w-100">
                <img src="assets/images/galleries/gallery-10.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>
        </div>
    </section>

    <section class="testimonial gap-section" id="testimonial">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">ArtistryIndo in the Words of Our Community</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Explore the heartfelt expressions of our community in the 'Voices of Appreciation' section. ArtistryIndo takes pride in curating an enriching cultural experience, and here.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 position-relative">
                  <swiper 
                    class="position-relative"
                    :slides-per-view="1"
                    :space-between="20"
                    :modules="modules"
                    :loop="true"
                    :autoplay="{
                      delay: 5000,
                      disableOnInteraction: false,
                    }"
                    :breakpoints="{
                      768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }"
                  >                    
                    <swiper-slide class="swiper-slide">
                        <div class="card-testimonial">
                            <img src="../assets/images/icons/quote-testimonial.svg" alt="Quote Icon" class="img-fluid" width="30">
                            <p class="paragraph">“ArtistryIndo has become my virtual haven for inspiration. As a graphic designer, the diverse palette of Indonesian arts fuels my creativity.”</p>
                            <div class="profile-wrapper d-flex align-items-center gap-2">
                                <img src="../assets/images/testimonials/testimonial-1.svg" alt="Testimonial Image Profile" class="img-fluid" width="38">
                                <div class="wrapper">
                                    <h6 class="username">Sarah Kingston</h6>
                                    <p class="job">Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="card-testimonial">
                            <img src="../assets/images/icons/quote-testimonial.svg" alt="Quote Icon" class="img-fluid" width="30">
                            <p class="paragraph">“ArtistryIndo played a pivotal role in elevating my art career. Being featured here gave my work exposure beyond my expectations.”</p>
                            <div class="profile-wrapper d-flex align-items-center gap-2">
                                <img src="../assets/images/testimonials/testimonial-2.svg" alt="Testimonial Image Profile" class="img-fluid" width="38">
                                <div class="wrapper">
                                    <h6 class="username">James Mitchell</h6>
                                    <p class="job">Emerging Artist</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="card-testimonial">
                            <img src="../assets/images/icons/quote-testimonial.svg" alt="Quote Icon" class="img-fluid" width="30">
                            <p class="paragraph">“ArtistryIndo is not just a platform; it's a cultural phenomenon. As a marketing professional, I appreciate how it seamlessly combines.”</p>
                            <div class="profile-wrapper d-flex align-items-center gap-2">
                                <img src="../assets/images/testimonials/testimonial-3.svg" alt="Testimonial Image Profile" class="img-fluid" width="38">
                                <div class="wrapper">
                                    <h6 class="username">Mia Lawson</h6>
                                    <p class="job">Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="card-testimonial">
                            <img src="../assets/images/icons/quote-testimonial.svg" alt="Quote Icon" class="img-fluid" width="30">
                            <p class="paragraph">“ArtistryIndo is a beacon for preserving traditional Indonesian arts. As a cultural preservationist, I've witnessed the platform's impact.”</p>
                            <div class="profile-wrapper d-flex align-items-center gap-2">
                                <img src="../assets/images/testimonials/testimonial-4.svg" alt="Testimonial Image Profile" class="img-fluid" width="38">
                                <div class="wrapper">
                                    <h6 class="username">Alex Harrison</h6>
                                    <p class="job">Cultural Preservationist</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="card-testimonial">
                            <img src="../assets/images/icons/quote-testimonial.svg" alt="Quote Icon" class="img-fluid" width="30">
                            <p class="paragraph">“ArtistryIndo has been an invaluable resource for infusing cultural richness into my travel narratives. The content is not just informative.”</p>
                            <div class="profile-wrapper d-flex align-items-center gap-2">
                                <img src="../assets/images/testimonials/testimonial-5.svg" alt="Testimonial Image Profile" class="img-fluid" width="38">
                                <div class="wrapper">
                                    <h6 class="username">Grace Wanderer</h6>
                                    <p class="job">Travel Blogger</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="card-testimonial">
                            <img src="../assets/images/icons/quote-testimonial.svg" alt="Quote Icon" class="img-fluid" width="30">
                            <p class="paragraph">“As a music enthusiast, ArtistryIndo has broadened my horizons to the enchanting world of Indonesian music and performing arts.”</p>
                            <div class="profile-wrapper d-flex align-items-center gap-2">
                                <img src="../assets/images/testimonials/testimonial-6.svg" alt="Testimonial Image Profile" class="img-fluid" width="38">
                                <div class="wrapper">
                                    <h6 class="username">Jazz Harmony</h6>
                                    <p class="job">Music Enthusiast</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="card-testimonial">
                            <img src="../assets/images/icons/quote-testimonial.svg" alt="Quote Icon" class="img-fluid" width="30">
                            <p class="paragraph">“ArtistryIndo's seamless integration of technology with cultural exploration is truly commendable. The user-friendly interface and immersive content.”</p>
                            <div class="profile-wrapper d-flex align-items-center gap-2">
                                <img src="../assets/images/testimonials/testimonial-7.svg" alt="Testimonial Image Profile" class="img-fluid" width="38">
                                <div class="wrapper">
                                    <h6 class="username">Tech Explorer</h6>
                                    <p class="job">Technology Analyst</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>

    <section class="cta gap-section position-relative" id="cta">
        <div class="style-1"></div>
        <div class="style-2"></div>
        <div class="row justify-content-center position-relative">
            <div class="col-lg-8 d-flex flex-column align-items-md-center text-md-center">
                <h1 class="headline">Get Involved with ArtistryIndo Today!</h1>
                <p class="paragraph">Ready to experience the magic of Indonesian arts up close? ArtistryIndo invites you to get involved and be part of our vibrant community. From engaging with artists to participating in cultural events</p>
                <div class="button-group d-flex gap-2 m-0">
                    <a href="/categories-artistry" class="button-primary">Explore Artistic Now</a>
                    <a href="/about" class="button-reverse">About ArtistryIndo</a>
                </div>
            </div>
        </div>
    </section>

    <!-- MODAL -->
    <div class="modal fade" id="modalAward1" tabindex="-1" aria-labelledby="modalAward1Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Cultural Heritage Preservation</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/awards/award-1.svg" alt="Thumbnail Award" class="img-fluid w-100 img-award">
                    <p class="paragraph">ArtistryIndo receives the prestigious Cultural Heritage Preservation Award for its outstanding efforts in promoting and preserving the diverse cultural heritage of Indonesian arts. This accolade recognizes ArtistryIndo's commitment to safeguarding and promoting traditional and contemporary artistic expressions.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalAward2" tabindex="-1" aria-labelledby="modalAward2Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Innovation in Arts Platform</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/awards/award-2.svg" alt="Thumbnail Award" class="img-fluid w-100 img-award">
                    <p class="paragraph">ArtistryIndo is honored with the Innovation in Arts Platform award, celebrating its groundbreaking approach to showcasing Indonesian arts. This recognition highlights the platform's use of innovative technologies, interactive features, and engaging content that captivates audiences and contributes to the evolution of digital arts platforms.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalAward3" tabindex="-1" aria-labelledby="modalAward3Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Community Impact Award</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/awards/award-3.svg" alt="Thumbnail Award" class="img-fluid w-100 img-award">
                    <p class="paragraph">Recognizing ArtistryIndo's positive impact on communities, the Community Impact Award is bestowed upon the platform for fostering cultural exchange, supporting local artists, and creating a space that unites individuals passionate about Indonesian arts. This award emphasizes ArtistryIndo's role in building a vibrant and connected artistic community.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalAward4" tabindex="-1" aria-labelledby="modalAward4Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Global Arts Ambassador</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/awards/award-4.svg" alt="Thumbnail Award" class="img-fluid w-100 img-award">
                    <p class="paragraph">ArtistryIndo is named a Global Arts Ambassador in acknowledgment of its efforts to represent and promote Indonesian arts on the international stage. This award recognizes the platform's role in bridging cultures, fostering global appreciation for Indonesian arts, and creating a platform where diverse communities come together through a shared love for creativity.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalTeam1" tabindex="-1" aria-labelledby="modalTeam1Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Isha Suryawan</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/teams/team-1.svg" alt="Thumbnail Team" class="img-fluid w-100 img-award">
                    <p class="paragraph">Background: A seasoned curator with a passion for preserving traditional Indonesian arts, Isha brings her expertise to ArtistryIndo, ensuring that each showcased piece reflects the depth and authenticity of Indonesia's cultural heritage.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalTeam2" tabindex="-1" aria-labelledby="modalTeam2Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Maya Wijaya</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/teams/team-3.svg" alt="Thumbnail Team" class="img-fluid w-100 img-award">
                    <p class="paragraph">Background: With a background in cultural studies and a passion for community building, Maya spearheads ArtistryIndo's community engagement initiatives. She fosters connections, organizes events, and ensures that ArtistryIndo becomes a thriving hub for art enthusiasts.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalTeam3" tabindex="-1" aria-labelledby="modalTeam3Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Nia Damayanti</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/teams/team-3.svg" alt="Thumbnail Team" class="img-fluid w-100 img-award">
                    <p class="paragraph">Background: Nia, with her deep understanding of diverse cultural practices, takes on the role of Cultural Outreach Coordinator. She ensures that ArtistryIndo collaborates with artists and communities across Indonesia, promoting inclusivity and representation.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalTeam4" tabindex="-1" aria-labelledby="modalTeam4Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Ayu Desita</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/teams/team-4.svg" alt="Thumbnail Team" class="img-fluid w-100 img-award">
                    <p class="paragraph">Background: Ayu is the creative force behind ArtistryIndo's multimedia content. As a talented artist, he brings Indonesian arts to life through captivating visuals, videos, and interactive experiences that resonate with a global audience.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalTeam5" tabindex="-1" aria-labelledby="modalTeam5Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Adi Santoso</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/teams/team-5.svg" alt="Thumbnail Team" class="img-fluid w-100 img-award">
                    <p class="paragraph">Background: Adi is the driving force behind ArtistryIndo's outreach and visibility. With a keen understanding of marketing strategies, he amplifies the platform's presence, ensuring that the beauty of Indonesian arts reaches a global audience.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalTeam6" tabindex="-1" aria-labelledby="modalTeam6Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Rizal Hakim</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <img src="../assets/images/teams/team-6.svg" alt="Thumbnail Team" class="img-fluid w-100 img-award">
                    <p class="paragraph">Background: As ArtistryIndo's Tech Innovator, Rizal combines his technological prowess with a deep appreciation for the arts. He's instrumental in creating an engaging online platform that seamlessly connects users with the richness of Indonesian artistic expressions.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- END MODAL -->
    </main>
  </div>
</template>