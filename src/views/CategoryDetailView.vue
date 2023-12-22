<script>
  import 'swiper/css';
  import 'swiper/css/pagination';
</script>

<template>
  <div>
    <main class="container category">
    <section class="hero">
        <div class="row justify-content-md-center">
            <div class="col-lg-10 col-xxl-8 d-flex flex-column align-items-md-center text-md-center">
                <p class="subtitle">Unveiling Indonesia's Cultural Spectacle</p>
                <h1 class="headline">Performing Arts Heritage at ArtistryIndo</h1>
                <form class="form position-relative">
                    <input type="text" class="input position-relative" placeholder="Search performing arts...">
                    <button type="button" class="button-submit-search d-flex justify-content-center align-items-center">
                        <img src="../assets/images/icons/search.svg" alt="Search Icon" class="img-fluid" width="15" height="15">
                    </button>
                </form>
                <div class="row fact-wrapper justify-content-md-center w-100">
                    <div class="col-6 col-md-3 d-flex flex-column align-items-md-center text-md-center">
                        <h1 class="title">34+</h1>
                        <p class="caption">Total Art Registered</p>
                    </div>
                    <div class="col-6 col-md-3 d-flex flex-column align-items-md-center text-md-center">
                        <h1 class="title">08+</h1>
                        <p class="caption">Total City Area</p>
                    </div>
                    <div class="col-6 col-md-3 mt-3 mt-md-0 d-flex flex-column align-items-md-center text-md-center">
                        <h1 class="title">230+</h1>
                        <p class="caption">Total Discussion</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="category" id="category">
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-1.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Kecak Dance, Bali</h6>
                    <p class="card-caption">Mesmerizing cultural spectacle known for its rhythmic chanting and intricate choreography.</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-2.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Barong Dance, Gianyar, Bali</h6>
                    <p class="card-caption">Performed in Gianyar, Bali, is a captivating portrayal of the eternal battle.</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-3.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Ramayana Performance, Prambanan</h6>
                    <p class="card-caption">Mesmerizing cultural spectacle set against the backdrop of the majestic Prambanan Temple ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4 mt-lg-0">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-4.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Martial arts</h6>
                    <p class="card-caption">Martial arts, an ancient practice with roots in various cultures, is a disciplined and dynamic ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-5.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Reog Ponorogo, East Java</h6>
                    <p class="card-caption">Reog Ponorogo, originating from East Java, is a vibrant and captivating traditional Indonesian ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-6.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Saman Dance, Aceh</h6>
                    <p class="card-caption">The Saman Dance from Aceh, Indonesia, is a remarkable cultural expression characterized ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-7.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Plate Dance, West Sumatra</h6>
                    <p class="card-caption">Tari Piring, originating from Sumatra Barat (West Sumatra), is a traditional Indonesian da ...</p>
                </a>
            </div>
            <div class="col-md-6 col-lg-3 mt-4">
                <a href="/categories-artistry/performing-arts-heritage" class="card-category">
                    <img src="../assets/images/thumbnail-performings/thumbnail-performing-8.svg" alt="Thumbnail Image" class="img-fluid w-100">
                    <h6 class="card-title">Wayang Orang, Java</h6>
                    <p class="card-caption">Explore the classical Javanese dance drama of Wayang Orang, where performers bring to lif ...</p>
                </a>
            </div>
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
    </main>
  </div>
</template>