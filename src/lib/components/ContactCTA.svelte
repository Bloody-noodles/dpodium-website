<script lang="ts">
  let name = '';
  let phone = '';
  let email = '';
  let eventType = 'Wedding';
  let guests = '50 - 100';
  let eventDate = '';
  let message = '';

  function sendToWhatsApp() {
    const text = `
Hello D'Podium, I'd like to make an enquiry about an upcoming event.

Name: ${name}
Phone: ${phone}
Email: ${email}
Event Type: ${eventType}
Expected Guests: ${guests}
Event Date: ${eventDate || 'Not specified'}

Additional Details:
${message || 'No additional details provided.'}
    `.trim();

    const whatsappNumber = '2347081994108';
    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');
  }
</script>

<section
  id="contact"
  class="relative overflow-hidden bg-dpodium-ink px-6 py-24 lg:px-10 lg:py-32"
>
  <!-- Brand accent -->
  <div class="absolute right-0 top-0 flex h-2 w-full">
    <div class="w-1/4 bg-dpodium-red"></div>
    <div class="w-1/4 bg-dpodium-yellow"></div>
    <div class="w-1/4 bg-dpodium-green"></div>
    <div class="w-1/4 bg-dpodium-blue"></div>
  </div>

  <div class="relative mx-auto max-w-7xl">
    <div class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      <!-- LEFT SIDE -->
      <div class="flex flex-col justify-center">
        <p
          class="text-sm font-bold uppercase tracking-[0.25em] text-dpodium-yellow"
        >
          Plan your event
        </p>

        <h2
          class="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Let's make your
          <span class="text-dpodium-yellow">next event happen.</span>
        </h2>

        <p class="mt-7 max-w-xl text-base leading-8 text-white/60">
          Tell us a little about your event and our team can help you explore
          the right space and services for your occasion.
        </p>

        <!-- Steps -->
        <div class="mt-10 space-y-5">

          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-dpodium-yellow"
            >
              01
            </div>

            <div>
              <p class="font-bold text-white">
                Tell us about your event
              </p>

              <p class="mt-1 text-sm text-white/45">
                Date, occasion and expected number of guests.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-dpodium-yellow"
            >
              02
            </div>

            <div>
              <p class="font-bold text-white">
                Discuss your requirements
              </p>

              <p class="mt-1 text-sm text-white/45">
                Venue, planning, decoration and hospitality needs.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-dpodium-yellow"
            >
              03
            </div>

            <div>
              <p class="font-bold text-white">
                Bring the occasion to life
              </p>

              <p class="mt-1 text-sm text-white/45">
                Turn your plans into an experience your guests remember.
              </p>
            </div>
          </div>

        </div>

        <!-- Direct contact -->
        <div class="mt-10 border-t border-white/10 pt-7">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
            Prefer to contact us directly?
          </p>

          <div class="mt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/2347081994108"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-3 text-sm font-semibold text-white/70 transition hover:text-dpodium-yellow"
            >
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                W
              </span>

              WhatsApp: +234 708 199 4108
            </a>

            <a
              href="tel:08106871983"
              class="flex items-center gap-3 text-sm font-semibold text-white/70 transition hover:text-dpodium-yellow"
            >
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                T
              </span>

              Call: 0810 687 1983
            </a>

            <a
              href="mailto:baloloyjosephine6@gmail.com"
              class="flex items-center gap-3 text-sm font-semibold text-white/70 transition hover:text-dpodium-yellow"
            >
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                @
              </span>

              baloloyjosephine6@gmail.com
            </a>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE / FORM -->
      <div class="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8 lg:p-10">

        <div class="mb-8">
          <p
            class="text-xs font-bold uppercase tracking-[0.2em] text-dpodium-red"
          >
            Enquiry form
          </p>

          <h3
            class="mt-3 font-display text-2xl font-extrabold text-dpodium-ink sm:text-3xl"
          >
            Start a conversation
          </h3>

          <p class="mt-2 text-sm leading-6 text-black/45">
            Give us a few details about your event and we'll help you take
            the next step.
          </p>
        </div>

        <form
          class="space-y-5"
          onsubmit={(event) => {
            event.preventDefault();
            sendToWhatsApp();
          }}
        >

          <!-- Name + Phone -->
          <div class="grid gap-5 sm:grid-cols-2">

            <label class="block">
              <span class="mb-2 block text-sm font-semibold text-dpodium-ink">
                Full name
              </span>

              <input
                type="text"
                bind:value={name}
                placeholder="Your name"
                required
                class="w-full rounded-xl border border-black/10 bg-dpodium-cream px-4 py-3.5 text-sm outline-none transition focus:border-dpodium-red focus:ring-2 focus:ring-dpodium-red/10"
              />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-semibold text-dpodium-ink">
                Phone number
              </span>

              <input
                type="tel"
                bind:value={phone}
                placeholder="+234..."
                required
                class="w-full rounded-xl border border-black/10 bg-dpodium-cream px-4 py-3.5 text-sm outline-none transition focus:border-dpodium-red focus:ring-2 focus:ring-dpodium-red/10"
              />
            </label>

          </div>

          <!-- Email -->
          <label class="block">
            <span class="mb-2 block text-sm font-semibold text-dpodium-ink">
              Email address
            </span>

            <input
              type="email"
              bind:value={email}
              placeholder="you@example.com"
              required
              class="w-full rounded-xl border border-black/10 bg-dpodium-cream px-4 py-3.5 text-sm outline-none transition focus:border-dpodium-red focus:ring-2 focus:ring-dpodium-red/10"
            />
          </label>

          <!-- Event type + Guests -->
          <div class="grid gap-5 sm:grid-cols-2">

            <label class="block">
              <span class="mb-2 block text-sm font-semibold text-dpodium-ink">
                Event type
              </span>

              <select
                bind:value={eventType}
                class="w-full rounded-xl border border-black/10 bg-dpodium-cream px-4 py-3.5 text-sm outline-none transition focus:border-dpodium-red focus:ring-2 focus:ring-dpodium-red/10"
              >
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Conference</option>
                <option>Concert / Show</option>
                <option>Birthday / Celebration</option>
                <option>Other</option>
              </select>
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-semibold text-dpodium-ink">
                Expected guests
              </span>

              <select
                bind:value={guests}
                class="w-full rounded-xl border border-black/10 bg-dpodium-cream px-4 py-3.5 text-sm outline-none transition focus:border-dpodium-red focus:ring-2 focus:ring-dpodium-red/10"
              >
                <option>Under 50</option>
                <option>50 - 100</option>
                <option>100 - 300</option>
                <option>300 - 500</option>
                <option>500+</option>
              </select>
            </label>

          </div>

          <!-- Date -->
          <label class="block">
            <span class="mb-2 block text-sm font-semibold text-dpodium-ink">
              Event date
            </span>

            <input
              type="date"
              bind:value={eventDate}
              class="w-full rounded-xl border border-black/10 bg-dpodium-cream px-4 py-3.5 text-sm outline-none transition focus:border-dpodium-red focus:ring-2 focus:ring-dpodium-red/10"
            />
          </label>

          <!-- Message -->
          <label class="block">
            <span class="mb-2 block text-sm font-semibold text-dpodium-ink">
              Tell us more
            </span>

            <textarea
              bind:value={message}
              rows="4"
              placeholder="Tell us about your event..."
              class="w-full resize-none rounded-xl border border-black/10 bg-dpodium-cream px-4 py-3.5 text-sm outline-none transition focus:border-dpodium-red focus:ring-2 focus:ring-dpodium-red/10"
            ></textarea>
          </label>

          <!-- WhatsApp button -->
          <button
            type="submit"
            class="w-full rounded-xl bg-dpodium-red px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-dpodium-ink"
          >
            Send Enquiry on WhatsApp
          </button>

          <p class="text-center text-xs leading-5 text-black/40">
            Your enquiry will open directly in WhatsApp with the details
            you've provided.
          </p>

        </form>

        <!-- Alternative contact -->
        <div class="mt-6 grid gap-3 sm:grid-cols-2">

          <a
            href="tel:08106871983"
            class="rounded-xl border border-black/10 px-5 py-4 text-center text-sm font-bold text-dpodium-ink transition hover:border-dpodium-red hover:text-dpodium-red"
          >
            Call the Team
          </a>

        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=baloloyjosephine6@gmail.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl border border-black/10 px-5 py-4 text-center text-sm font-bold text-dpodium-ink transition hover:border-dpodium-blue hover:text-dpodium-blue"
            >
            Send an Email
        </a>

        </div>

      </div>
    </div>
  </div>
</section>