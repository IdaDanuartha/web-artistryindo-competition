const ButtonDefinition = document.querySelector('.button-definition');
const ButtonVission = document.querySelector('.button-vission');
const ButtonHistory = document.querySelector('.button-history');
const Paragraph1 = document.querySelector('.paragraph-1');
const Paragraph2 = document.querySelector('.paragraph-2');

ButtonDefinition.addEventListener('click', function() {
    ButtonVission.classList.remove('active');
    ButtonHistory.classList.remove('active');

    ButtonDefinition.classList.add('active');
    
    Paragraph1.innerHTML = "At ArtistryIndo, we define ourselves as more than a platform; we are custodians of Indonesia's artistic legacy. Our mission goes beyond mere representation; we strive to be a dynamic force that showcases, preserves, and innovates the diverse tapestry of Indonesian arts.";

    Paragraph2.innerHTML = "Join us in exploring the vibrant stories, traditions, and contemporary expressions that form the very essence of ArtistryIndo.";
});

ButtonVission.addEventListener('click', function() {
    ButtonDefinition.classList.remove('active');
    ButtonHistory.classList.remove('active');
    
    ButtonVission.classList.add('active');
    
    Paragraph1.innerHTML = "Our vision at ArtistryIndo is to stand as the foremost destination for the global celebration of Indonesian arts. Rooted in this vision, our mission is to preserve and showcase the rich cultural diversity of Indonesia through dynamic, immersive experiences.";

    Paragraph2.innerHTML = "We are committed to fostering a deeper appreciation for Indonesian arts, connecting cultures, and providing a platform for artists to thrive.";
});

ButtonHistory.addEventListener('click', function() {
    ButtonDefinition.classList.remove('active');
    ButtonVission.classList.remove('active');
    
    ButtonHistory.classList.add('active');
    
    Paragraph1.innerHTML = "ArtistryIndo has a story that unfolds through the years, starting with our establishment in [year]. From humble beginnings, we have evolved into a cultural hub that bridges tradition and innovation. Our history is a testament to the dedication of our team, the vibrant artists we collaborate with, and the growing community of art enthusiasts who contribute to the flourishing landscape of Indonesian arts.";

    Paragraph2.innerHTML = "Explore the milestones that shape ArtistryIndo's journey, as we continue to weave the threads of Indonesia's artistic heritage into the global cultural narrative.";
});