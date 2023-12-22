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
    <main class="container detail-blog">
        <section class="hero">
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-9 d-flex flex-column align-items-center">
                    <h3 class="title">Unraveling the Threads of Indonesia's Cultural Fabric</h3>
                    <div class="wrapper d-flex justify-content-between align-items-center w-100">
                        <p class="date">Published on February 5, 2023</p>
                        <div class="link-wrapper d-flex">
                            <a href="https://www.instagram.com/" target="_blank" class="link-sosmed">Instagram</a>
                            <a href="https://www.facebook.com/" target="_blank" class="link-sosmed">Facebook</a>
                        </div>
                    </div>
                    <img src="../assets/images/blogs/blog-1.svg" alt="Blog Image" class="img-fluid w-100">
                    <p class="paragraph">
                        Indonesia, a sprawling archipelago of over 17,000 islands, is a tapestry of diverse cultures, traditions, and artistic expressions. In this blog, we embark on a journey to unravel the intricate threads that weave together the rich and vibrant cultural fabric of this enchanting nation.

                        At the heart of Indonesia's cultural expression lies its Musical Arts, a harmonious blend of traditional instruments, rhythms, and melodies. From the mesmerizing tones of the Gamelan orchestras to the soulful tunes of stringed instruments, each note carries the weight of centuries-old stories and cultural significance. Join us as we explore the rhythmic symphony that echoes through the archipelago, bridging the past and present.

                        The Performing Arts Heritage of Indonesia is a living testament to the nation's captivating narratives. Traditional dances, shadow puppetry (Wayang Kulit), and theatrical performances breathe life into ancient stories, myths, and legends. Step into the enchanting world of these performances as we delve into the artistry and cultural resonance that has been passed down through generations.

                        Indonesia's cultural diversity is perhaps most delectably expressed through its Traditional Culinary offerings. From the bold and spicy flavors of Mie Aceh to the sweet and tangy delights of Bika Ambon, each dish tells a tale of local ingredients, regional influences, and culinary artistry. Join us on a gastronomic voyage as we savor the unique flavors that define Indonesia's culinary landscape.

                        The written word, in the form of various scripts such as Aksara Jawa, Aksara Bali, and Aksara Lontara, unveils the linguistic heritage of Indonesia. These scripts are not just characters on paper but living symbols of cultural identity and historical depth. Explore with us the art and significance of these scripts as we decipher the linguistic richness they encapsulate.

                        Our exploration wouldn't be complete without paying homage to the cultural heroes who have left an indelible mark on Indonesia's heritage. From mythical figures like Sangkuriang to modern-day heroes, these individuals embody the values and spirit that define Indonesia's cultural legacy. Join us in unraveling their stories and understanding the profound impact they've had on shaping the nation.

                        As we unravel the threads of Indonesia's cultural fabric, it becomes evident that each element contributes to the rich tapestry that is uniquely Indonesian. From the enchanting melodies of its music to the savory notes of its cuisine, Indonesia's cultural heritage is a testament to the resilience, creativity, and diversity of its people. Join us on this exploration of ArtistryIndo, where we celebrate the beauty of Indonesia's cultural mosaic.
                    </p>
                </div>
            </div>
        </section>

        <section class="blog gap-section" id="blog">
            <div class="row align-items-end justify-content-between">
                <div class="col-lg-6">
                    <h3 class="title">Exploring Other Blog the Heartbeat of Indonesian Arts</h3>
                </div>
                <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                    <p class="paragraph">Our blog is a curated space where we unfold stories, share insights, and provide a deeper understanding of the diverse artistic tapestry of Indonesia.</p>
                </div>
            </div>
            <div class="row gap-row">
                <div class="col-12 position-relative">
                        <swiper 
                        class="position-relative"
                        :slides-per-view="1"
                        :space-between="20"
                        :loop=true
                        :autoplay="{
                            delay: 5000,
                            disableOnInteraction: false,
                        }"
                        :modules="modules"
                        :pagination="{
                            clickable:true
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
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-1.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">Unraveling the Threads of Indonesia's Cultural Fabric</h6>
                                <p class="card-caption">Explore the rich history, intricate patterns, and modern interpretations of Indonesian batik.</p>
                                <p class="card-date">Published on February 5, 2023</p>
                            </a>
                        </swiper-slide>                  
                        <swiper-slide class="swiper-slide">
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-2.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">Sculpting Tradition, Wood Carving Across Indonesian Regions</h6>
                                <p class="card-caption">Delve into the world of traditional wood carving in Indonesia. From the symbolic motifs of Bali ...</p>
                                <p class="card-date">Published on March 12, 2023</p>
                            </a>
                        </swiper-slide>                  
                        <swiper-slide class="swiper-slide">
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-3.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">Dance of Legends, Exploring Indonesia's Traditional Dance Forms</h6>
                                <p class="card-caption">Immerse yourself in the elegance and storytelling of Indonesian traditional dance.</p>
                                <p class="card-date">Published on April 20, 2023</p>
                            </a>
                        </swiper-slide>                  
                        <swiper-slide class="swiper-slide">
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-4.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">Modern Mosaics, Contemporary Art Trends in Indonesia</h6>
                                <p class="card-caption">Step into the dynamic world of contemporary Indonesian art. This post highlights emerging ...</p>
                                <p class="card-date">Published on May 8, 2023</p>
                            </a>
                        </swiper-slide>                  
                        <swiper-slide class="swiper-slide">
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-5.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">Culinary Canvas, The Art of Indonesian Cuisine</h6>
                                <p class="card-caption">Explore the artistry of Indonesian cuisine, where flavors, colors, and traditions come together ...</p>
                                <p class="card-date">Published on June 15, 2023</p>
                            </a>
                        </swiper-slide>                  
                        <swiper-slide class="swiper-slide">
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-6.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">A Brush with Tradition: Exploring Indonesian Painting Styles</h6>
                                <p class="card-caption">Uncover the strokes and stories behind Indonesian painting styles. This post delves int ...</p>
                                <p class="card-date">Published on July 7, 2023</p>
                            </a>
                        </swiper-slide>                  
                        <swiper-slide class="swiper-slide">
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-7.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">Crafting Heritage, Indonesian Textile Traditions</h6>
                                <p class="card-caption">Immerse yourself in the intricate world of Indonesian textiles. From the handwoven bea ...</p>
                                <p class="card-date">Published on August 22, 2023</p>
                            </a>
                        </swiper-slide>                  
                        <swiper-slide class="swiper-slide">
                            <a href="/blogs/unraveling-the-threads-of-indonesias-cultural-fabric" class="card-blog">
                                <img src="../assets/images/blogs/blog-8.svg" alt="Blog Image" class="img-fluid w-100">
                                <h6 class="card-title">Beyond Borders, Indonesian Arts and Global Influences</h6>
                                <p class="card-caption">From international collaborations to the fusion of cultural elements, join us in exploring how ...</p>
                                <p class="card-date">Published on September 10, 2023</p>
                            </a>
                        </swiper-slide>                  
                    </swiper>                
                </div>
            </div>
        </section>
    </main>
  </div>
</template>