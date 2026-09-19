<script lang="ts">
	import { base } from '$app/paths';
</script>

<section id="about" class="overflow-hidden bg-dpodium-cream px-6 py-24 lg:px-10 lg:py-32">
	<div class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
		<div class="relative">
			<div class="overflow-hidden rounded-[2rem]">
				<img
					src="{base}/images/venue/main-hall.jpg"
					alt="D'Podium event space"
					class="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
				/>
			</div>

			<div
				class="absolute -bottom-7 -right-4 rounded-2xl bg-dpodium-red px-6 py-5 text-white shadow-2xl sm:-right-7"
			>
				<p class="font-display text-3xl font-extrabold">01</p>
				<p class="mt-1 text-xs font-bold uppercase tracking-[0.2em]">Your Event</p>
			</div>
		</div>

		<div>
			<p class="text-sm font-bold uppercase tracking-[0.25em] text-dpodium-red">
				The D'Podium Experience
			</p>

			<h2
				class="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-dpodium-ink sm:text-5xl lg:text-6xl"
			>
				More than a venue.
				<span class="text-dpodium-blue">A place for moments that matter.</span>
			</h2>

			<p class="mt-7 max-w-xl text-base leading-8 text-black/60">
				From the first guest arrival to the final photograph, D'Podium provides an event
				environment built around memorable experiences.
			</p>

			<p class="mt-5 max-w-xl text-base leading-8 text-black/60">
				Whether you're planning a wedding, corporate gathering, conference, concert,
				birthday or celebration, the space can be adapted around the occasion.
			</p>

			<div class="mt-9 flex flex-wrap gap-3">
				<span class="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm">
					Venue Hire
				</span>

				<span class="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm">
					Event Planning
				</span>

				<span class="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm">
					Decoration
				</span>

				<span class="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm">
					Guest Hospitality
				</span>
			</div>

			<a
				href="#contact"
				class="mt-10 inline-flex items-center gap-3 font-bold text-dpodium-ink transition hover:text-dpodium-red"
			>
				Discover what we offer
				<span class="text-xl">→</span>
			</a>
		</div>
	</div>
</section>