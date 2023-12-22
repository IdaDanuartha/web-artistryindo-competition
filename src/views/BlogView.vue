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
    <main class="container blog">
        <section class="hero">
            <div class="row justify-content-md-center">
                <div class="col-lg-10 col-xxl-8 d-flex flex-column align-items-md-center text-md-center">
                    <p class="subtitle">Unveiling Indonesia's Mythical Narratives</p>
                    <h1 class="headline">Exploring Blog the Heartbeat of Indonesian Arts</h1>
                    <form class="form position-relative">
                        <input type="text" class="input position-relative" placeholder="Search blogs...">
                        <button type="button" class="button-submit-search d-flex justify-content-center align-items-center">
                            <img src="../assets/images/icons/search.svg" alt="Search Icon" class="img-fluid" width="15" height="15">
                        </button>
                    </form>
                    <p class="caption">Result 64 Blog Founds.</p>
                </div>
            </div>
        </section>

        <section class="blog" id="blog">
            <div class="row">
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