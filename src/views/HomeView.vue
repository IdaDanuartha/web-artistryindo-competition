<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  // import required modules
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
<main class="container mainpage">
    <section class="hero d-flex align-items-center">
        <div class="row align-items-center">
            <div class="col">
                <p class="subtitle">Celebrating Indonesia's Rich Artistic Heritage</p>
                <h1 class="headline">Discovering Indonesia Through Art: Welcome to ArtistryIndo</h1>
                <p class="paragraph">Explore the diverse and vibrant world of Indonesian art at ArtistryIndo. From traditional dance to modern installations, we showcase the soulful creativity that defines our nation. Join us on a visual and cultural journey that spans generations.</p>
                <div class="button-group d-flex gap-2">
                    <a href="#category" class="button-primary">Explore Artistic Now</a>
                    <a href="/about" class="button-reverse">About ArtistryIndo</a>
                </div>
            </div>
            <div class="col-lg-5 col-xxl-6 d-none d-lg-flex justify-content-end">
                <img src="../assets/images/banners/banner-hero.svg" alt="Banner Hero" class="img-fluid banner-image">
            </div>
        </div>
    </section>

    <section class="category gap-section" id="category">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Arts from Various Regions on ArtistryIndo</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Welcome to the Regional Arts section of ArtistryIndo, where every corner of the archipelago radiates its unique artistry. Let's collectively savor.</p>
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
                    <a href="#" class="category-item">
                        <img src="../assets/images/thumbnail-categories/thumbnail-category-1.svg" alt="Thumbnail Category" class="img-fluid w-100">
                        <h6>Performing Arts Heritage</h6>
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <a href="#" class="category-item">
                        <img src="../assets/images/thumbnail-categories/thumbnail-category-2.svg" alt="Thumbnail Category" class="img-fluid w-100">
                        <h6>Musical Arts Heritage</h6>
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <a href="#" class="category-item">
                        <img src="../assets/images/thumbnail-categories/thumbnail-category-3.svg" alt="Thumbnail Category" class="img-fluid w-100">
                        <h6>Traditional Fine Arts</h6>
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <a href="#" class="category-item">
                        <img src="../assets/images/thumbnail-categories/thumbnail-category-4.svg" alt="Thumbnail Category" class="img-fluid w-100">
                        <h6>Indonesian Literature and Folklore</h6>
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <a href="#" class="category-item">
                        <img src="../assets/images/thumbnail-categories/thumbnail-category-5.svg" alt="Thumbnail Category" class="img-fluid w-100">
                        <h6>Traditional Culinary Delights</h6>
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-slide p-1">
                    <a href="#" class="category-item">
                        <img src="../assets/images/thumbnail-categories/thumbnail-category-6.svg" alt="Thumbnail Category" class="img-fluid w-100">
                        <h6>Aksara and Literature</h6>
                    </a>
                </swiper-slide>                    
                </swiper>              
            </div>
        </div>
    </section>

    <section class="service gap-section pt-4" id="service">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">ArtistryIndo Services, Elevating Indonesian Arts Experience</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">At ArtistryIndo, our commitment to showcasing the best of Indonesian arts goes beyond the ordinary. Explore our range of services designed to bring you closer.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <div class="card-service">
                    <div class="image-wrapper d-flex justify-content-center align-items-center">
                        <img src="../assets/images/services/service-1.svg" alt="Service Icon" class="img-fluid" width="24">
                    </div>
                    <h6 class="card-title">Custom Cultural Tours</h6>
                    <p class="card-caption">Explore the hidden gems of Indonesia's cultural landscape and gain a deeper understanding of the diverse art forms.</p>
                    <button type="button" class="card-link p-0 d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modalService1">
                        More Detail
                        <div class="arrow-right-icon"></div>
                    </button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <div class="card-service">
                    <div class="image-wrapper d-flex justify-content-center align-items-center">
                        <img src="../assets/images/services/service-2.svg" alt="Service Icon" class="img-fluid" width="24">
                    </div>
                    <h6 class="card-title">Workshop Experiences</h6>
                    <p class="card-caption">Immerse yourself in the artistic process and create your own masterpiece under the guidance of seasoned mentors.</p>
                    <button type="button" class="card-link p-0 d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modalService2">
                        More Detail
                        <div class="arrow-right-icon"></div>
                    </button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <div class="card-service">
                    <div class="image-wrapper d-flex justify-content-center align-items-center">
                        <img src="../assets/images/services/service-3.svg" alt="Service Icon" class="img-fluid" width="24">
                    </div>
                    <h6 class="card-title">Art Consultations</h6>
                    <p class="card-caption">Our art consultations offer a unique opportunity to discover and acquire exceptional Indonesian artworks tailored</p>
                    <button type="button" class="card-link p-0 d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modalService3">
                        More Detail
                        <div class="arrow-right-icon"></div>
                    </button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <div class="card-service">
                    <div class="image-wrapper d-flex justify-content-center align-items-center">
                        <img src="../assets/images/services/service-4.svg" alt="Service Icon" class="img-fluid" width="24">
                    </div>
                    <h6 class="card-title">Virtual Art Experiences</h6>
                    <p class="card-caption">Experience the beauty of Indonesian arts from the comfort of your home with our virtual art experiences.</p>
                    <button type="button" class="card-link p-0 d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modalService4">
                        More Detail
                        <div class="arrow-right-icon"></div>
                    </button>                      
                </div>
            </div>
        </div>
    </section>

    <section class="showcase gap-section" id="showcase">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">ArtistryIndo's Showcase of Indonesian Arts</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Welcome to the Artistry Highlights section, where we bring you the crème de la crème of Indonesian arts. Immerse yourself in a curated collection of masterpieces.</p>
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
                        1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                    }"
                    >                    
                    <swiper-slide class="swiper-slide">
                        <iframe height="360" class="w-100" src="https://www.youtube.com/embed/ymIwxGhFP3k?si=RC6gHnKvgdMep6Go" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <iframe height="360" class="w-100" src="https://www.youtube.com/embed/4dh25ciA8Xo?si=Codb8_uxLRkYHOo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <iframe height="360" class="w-100" src="https://www.youtube.com/embed/ORni1WW8T7E?si=AV9srRVAIyDSwzcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <iframe height="360" class="w-100" src="https://www.youtube.com/embed/KBjc5Aa0IYE?si=6PTF3ldW1cbQmElj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </swiper-slide>                    
                </swiper>                
            </div>
        </div>
    </section>

    <section class="about d-flex align-items-center gap-section pt-4" id="about">
        <div class="row align-items-center">
            <div class="col-lg-5 col-xxl-6 d-none d-lg-flex">
                <img src="../assets/images/banners/banner-about.svg" alt="Banner About" class="img-fluid banner-image">
            </div>
            <div class="col offset-lg-1 offset-xxl-0">
                <h3 class="title">Discover ArtistryIndo Unveiling the Heartbeat of Indonesian Creativity</h3>
                <ul class="nav button-wrapper d-flex gap-2">
                    <li class="nav-item" role="presentation">
                    <button data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" class="button-reverse-extrasmall button-definition active">Definition</button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="true" class="button-reverse-extrasmall button-vission">Vission & Mission</button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="true" class="button-reverse-extrasmall button-history">Histories</button>
                    </li>
                </ul>
                <div class="tab-content my-4" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">                    
                    <p class="paragraph paragraph-1">At ArtistryIndo, we define ourselves as more than a platform; we are custodians of Indonesia's artistic legacy. Our mission goes beyond mere representation; we strive to be a dynamic force that showcases, preserves, and innovates the diverse tapestry of Indonesian arts.</p>
                    <p class="paragraph paragraph-2">Join us in exploring the vibrant stories, traditions, and contemporary expressions that form the very essence of ArtistryIndo.</p>                
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <p class="paragraph paragraph-1">Our vision at ArtistryIndo is to stand as the foremost destination for the global celebration of Indonesian arts. Rooted in this vision, our mission is to preserve and showcase the rich cultural diversity of Indonesia through dynamic, immersive experiences.</p>
                    <p class="paragraph paragraph-2">We are committed to fostering a deeper appreciation for Indonesian arts, connecting cultures, and providing a platform for artists to thrive.</p>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <p class="paragraph paragraph-1">ArtistryIndo has a story that unfolds through the years, starting with our establishment in [year]. From humble beginnings, we have evolved into a cultural hub that bridges tradition and innovation. Our history is a testament to the dedication of our team, the vibrant artists we collaborate with, and the growing community of art enthusiasts who contribute to the flourishing landscape of Indonesian arts.</p>
                    <p class="paragraph paragraph-2">Explore the milestones that shape ArtistryIndo's journey, as we continue to weave the threads of Indonesia's artistic heritage into the global cultural narrative.</p>
                    </div>                  
                </div>
                <div class="row fact-wrapper">
                    <div class="col-6 col-md-3 d-flex flex-column align-items-center text-center">
                        <h1 class="title">240+</h1>
                        <p class="caption">Total Art Registered</p>
                    </div>
                    <div class="col-6 col-md-3 d-flex flex-column align-items-center text-center">
                        <h1 class="title">28+</h1>
                        <p class="caption">Communities</p>
                    </div>
                    <div class="col-6 mt-3 mt-md-0 col-md-3 d-flex flex-column align-items-center text-center">
                        <h1 class="title">05+</h1>
                        <p class="caption">Award Received</p>
                    </div>
                    <div class="col-6 mt-3 mt-md-0 col-md-3 d-flex flex-column align-items-center text-center">
                        <h1 class="title">645+</h1>
                        <p class="caption">User involved</p>
                    </div>
                </div>
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
            <a href="../assets/images/galleries/gallery-1.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-1.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="../assets/images/galleries/gallery-3.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-3.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="../assets/images/galleries/gallery-6.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-6.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="../assets/images/galleries/gallery-9.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-9.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

                <a href="../assets/images/galleries/gallery-2.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-2.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

                <a href="../assets/images/galleries/gallery-4.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-4.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

                <a href="../assets/images/galleries/gallery-5.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-5.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

                <a href="../assets/images/galleries/gallery-7.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-7.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

                <a href="../assets/images/galleries/gallery-8.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-8.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
            </a>

            <a href="../assets/images/galleries/gallery-10.svg" class="w-100">
                <img src="../assets/images/galleries/gallery-10.svg" alt="Image Gallery" class="img-fluid w-100 image-gallery">
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

    <section class="blog gap-section pt-4" id="blog">
        <div class="row align-items-end justify-content-between">
            <div class="col-lg-6">
                <h3 class="title">Exploring Blog the Heartbeat of Indonesian Arts</h3>
            </div>
            <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <p class="paragraph">Our blog is a curated space where we unfold stories, share insights, and provide a deeper understanding of the diverse artistic tapestry of Indonesia.</p>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-md-6 col-lg-3">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-1.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">Unraveling the Threads of Indonesia's Cultural Fabric</h6>
                    <p class="card-caption">Explore the rich history, intricate patterns, and modern interpretations of Indonesian batik.</p>
                    <p class="card-date">Published on February 5, 2023</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-2.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">Sculpting Tradition, Wood Carving Across Indonesian Regions</h6>
                    <p class="card-caption">Delve into the world of traditional wood carving in Indonesia. From the symbolic motifs of Bali ...</p>
                    <p class="card-date">Published on March 12, 2023</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-3.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">Dance of Legends, Exploring Indonesia's Traditional Dance Forms</h6>
                    <p class="card-caption">Immerse yourself in the elegance and storytelling of Indonesian traditional dance.</p>
                    <p class="card-date">Published on April 20, 2023</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-4.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">Modern Mosaics, Contemporary Art Trends in Indonesia</h6>
                    <p class="card-caption">Step into the dynamic world of contemporary Indonesian art. This post highlights emerging ...</p>
                    <p class="card-date">Published on May 8, 2023</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-5.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">Culinary Canvas, The Art of Indonesian Cuisine</h6>
                    <p class="card-caption">Explore the artistry of Indonesian cuisine, where flavors, colors, and traditions come together ...</p>
                    <p class="card-date">Published on June 15, 2023</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-6.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">A Brush with Tradition: Exploring Indonesian Painting Styles</h6>
                    <p class="card-caption">Uncover the strokes and stories behind Indonesian painting styles. This post delves int ...</p>
                    <p class="card-date">Published on July 7, 2023</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-7.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">Crafting Heritage, Indonesian Textile Traditions</h6>
                    <p class="card-caption">Immerse yourself in the intricate world of Indonesian textiles. From the handwoven bea ...</p>
                    <p class="card-date">Published on August 22, 2023</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                    <img src="../assets/images/blogs/blog-8.svg" alt="Blog Image" class="img-fluid w-100">
                    <h6 class="card-title">Beyond Borders, Indonesian Arts and Global Influences</h6>
                    <p class="card-caption">From international collaborations to the fusion of cultural elements, join us in exploring how ...</p>
                    <p class="card-date">Published on September 10, 2023</p>
                </a>
            </div>
        </div>
        <div class="row gap-row">
            <div class="col-12 d-flex justify-content-center">
                <a href="/blogs" class="button-reverse">More Blog Artistry</a>
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
    <div class="modal fade" id="modalService1" tabindex="-1" aria-labelledby="modalService1Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Custom Cultural Tours</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <p class="paragraph">Immerse yourself in the heart of Indonesian arts with our custom cultural tours. Whether you're interested in traditional dance, contemporary galleries, or artisan workshops, our expert guides will curate a unique itinerary tailored to your artistic preferences. Explore the hidden gems of Indonesia's cultural landscape and gain a deeper understanding of the diverse art forms that define our nation.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalService2" tabindex="-1" aria-labelledby="modalService2Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Workshop Experiences</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <p class="paragraph">Unleash your creativity with our exclusive artisan workshop experiences. Join skilled craftsmen and artists in hands-on sessions, where you can learn traditional techniques such as batik, wood carving, or traditional dance. Immerse yourself in the artistic process and create your own masterpiece under the guidance of seasoned mentors, connecting with the rich heritage of Indonesian arts.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalService3" tabindex="-1" aria-labelledby="modalService3Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Art Consultations</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <p class="paragraph">Elevate your art collection with personalized guidance from our expert curators. Our art consultations offer a unique opportunity to discover and acquire exceptional Indonesian artworks tailored to your taste and preferences. Whether you're a seasoned collector or a first-time buyer, our team is dedicated to helping you build a collection that resonates with your aesthetic vision.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalService4" tabindex="-1" aria-labelledby="modalService4Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Virtual Art Experiences</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="content-body">
                    <p class="paragraph">Experience the beauty of Indonesian arts from the comfort of your home with our virtual art experiences. Engage in live-streamed performances, virtual gallery tours, and interactive workshops led by renowned artists and experts. No matter where you are in the world, ArtistryIndo brings the captivating world of Indonesian arts to your fingertips, fostering a global appreciation for our cultural heritage.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- END MODAL -->
</main>
</template>