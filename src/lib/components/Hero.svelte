<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="relative min-h-screen overflow-hidden bg-dpodium-ink">
	<!-- Venue image -->
	<div class="absolute inset-0">
		<img
			src="{base}/images/venue/exterior.jpg"
			alt="D'Podium International Event Centre"
			class="h-full w-full object-cover"
		/>

		<div class="absolute inset-0 bg-black/45"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
	</div>

	<div class="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
		<div class="max-w-4xl">
			<div class="mb-7 flex items-center gap-3">
				<span class="h-px w-10 bg-dpodium-yellow"></span>

				<p class="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
					Ikeja, Lagos
				</p>
			</div>

			<h1
				class="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
			>
				Your event deserves
				<span class="text-dpodium-yellow">the right stage.</span>
			</h1>

			<p class="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
				A versatile event destination for weddings, corporate gatherings, conferences,
				concerts, celebrations and unforgettable moments.
			</p>

			<div class="mt-9 flex flex-col gap-3 sm:flex-row">
				<a
					href="#contact"
					class="rounded-full bg-dpodium-red px-7 py-4 text-center text-sm font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-dpodium-yellow hover:text-dpodium-ink"
				>
					Make an Enquiry
				</a>

				<a
					href="#gallery"
					class="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-dpodium-ink"
				>
					Explore the Venue
				</a>
			</div>
		</div>
	</div>

	<!-- Brand accent -->
	<div class="absolute bottom-0 left-0 right-0 flex h-1">
		<div class="w-1/4 bg-dpodium-red"></div>
		<div class="w-1/4 bg-dpodium-yellow"></div>
		<div class="w-1/4 bg-dpodium-green"></div>
		<div class="w-1/4 bg-dpodium-blue"></div>
	</div>
</section>