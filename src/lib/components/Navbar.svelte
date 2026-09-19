<script lang="ts">
  let menuOpen = false;
</script>

<header class="absolute left-0 top-0 z-50 w-full">
  <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
    <a href="/" class="flex items-center gap-3">
      <div
        class="flex h-12 w-32 items-center overflow-hidden rounded-xl bg-white px-3 py-2 shadow-lg"
      >
        <img
          src="/images/brand/logo.png"
          alt="D'Podium International Event Centre"
          class="h-full w-full object-contain"
        />
      </div>
    </a>

    <div class="hidden items-center gap-8 lg:flex">
      <a class="text-sm font-medium text-white/90 transition hover:text-white" href="#about">
        About
      </a>

      <a class="text-sm font-medium text-white/90 transition hover:text-white" href="#occasions">
        Occasions
      </a>

      <a class="text-sm font-medium text-white/90 transition hover:text-white" href="#services">
        Services
      </a>

      <a class="text-sm font-medium text-white/90 transition hover:text-white" href="#gallery">
        Gallery
      </a>

      <a
        href="#contact"
        class="rounded-full bg-white px-6 py-3 text-sm font-bold text-dpodium-ink transition hover:bg-dpodium-yellow"
      >
        Make an Enquiry
      </a>
    </div>

    <button
      class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md lg:hidden"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
    >
      {#if menuOpen}✕{:else}☰{/if}
    </button>
  </nav>

  {#if menuOpen}
    <div class="mx-4 rounded-2xl bg-white p-6 shadow-2xl lg:hidden">
      <div class="flex flex-col gap-5">
        <a href="#about" onclick={() => (menuOpen = false)}>About</a>
        <a href="#occasions" onclick={() => (menuOpen = false)}>Occasions</a>
        <a href="#services" onclick={() => (menuOpen = false)}>Services</a>
        <a href="#gallery" onclick={() => (menuOpen = false)}>Gallery</a>

        <a
          href="#contact"
          onclick={() => (menuOpen = false)}
          class="rounded-full bg-dpodium-red px-5 py-3 text-center font-bold text-white"
        >
          Make an Enquiry
        </a>
      </div>
    </div>
  {/if}
</header>