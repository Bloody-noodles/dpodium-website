<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Highlights from '$lib/components/Highlights.svelte';
  import About from '$lib/components/About.svelte';
  import Occasions from '$lib/components/Occasions.svelte';
  import Services from '$lib/components/Services.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import ContactCTA from '$lib/components/ContactCTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
</script>

<svelte:head>
  <title>D'Podium International Event Centre | Ikeja, Lagos</title>

  <meta
    name="description"
    content="D'Podium International Event Centre — a versatile destination for weddings, corporate events, conferences, concerts and celebrations in Ikeja, Lagos."
  />
</svelte:head>

<div class="min-h-screen bg-dpodium-cream">
  <Navbar />

  <main>
    <Hero />
    <Highlights />
    <About />
    <Occasions />
    <Services />
    <Gallery />
    <ContactCTA />
  </main>

  <Footer />
  <WhatsAppButton />
</div>