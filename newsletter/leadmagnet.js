// =========================================================================
// SHARED LEAD MAGNET AD COMPONENT
// Edit this file to update the blurb, cover, or form across the whole site!
// =========================================================================

const LEAD_MAGNET_CONFIG = {
  badge: "Complimentary Sci-Fi Romance Novella",
  titlePrefix: "Claim Your Free Copy of ",
  bookTitle: "Taliah’s Poem",
  blurb: "Stranded across enemy lines in the deepest reaches of uncharted space. An alliance formed in secrecy—and a dangerous attraction that could destroy both their worlds. Enter the saga now.",
  coverImage: "https://placehold.co/600x900/161129/C084FC?text=Taliah's+Poem\\nCover", // Replace with /images/your-cover.jpg
  formId: "5e996bde-a4c1-11f1-8de1-71ba425265d3"
};

function renderLeadMagnet() {
  const container = document.getElementById('newsletter-ad-slot');
  if (!container) return;

  container.innerHTML = `
    <section id="newsletter" class="py-20 px-6 border-t border-brand-border/60 bg-brand-card/30 relative overflow-hidden">
      <!-- Ambient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        <!-- Book Cover -->
        <div class="md:col-span-5 flex justify-center">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <img src="${LEAD_MAGNET_CONFIG.coverImage}" alt="${LEAD_MAGNET_CONFIG.bookTitle}" class="relative rounded-xl w-64 md:w-80 shadow-2xl border border-brand-border/80">
          </div>
        </div>

        <!-- Pitch Copy & Email Form -->
        <div class="md:col-span-7 text-center md:text-left">
          <span class="text-xs font-bold tracking-widest uppercase text-brand-neon bg-brand-purple/10 border border-brand-purple/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            ${LEAD_MAGNET_CONFIG.badge}
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            ${LEAD_MAGNET_CONFIG.titlePrefix}<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-accent">${LEAD_MAGNET_CONFIG.bookTitle}</span>
          </h2>
          <p class="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
            ${LEAD_MAGNET_CONFIG.blurb}
          </p>

          <!-- EmailOctopus Container -->
          <div id="eo-embed-container" class="max-w-md mx-auto md:mx-0"></div>
        </div>

      </div>
    </section>
  `;

  // Dynamically load EmailOctopus form
  const eoScript = document.createElement('script');
  eoScript.async = true;
  eoScript.src = `https://eocampaign1.com/form/${LEAD_MAGNET_CONFIG.formId}.js`;
  eoScript.setAttribute('data-form', LEAD_MAGNET_CONFIG.formId);
  document.getElementById('eo-embed-container').appendChild(eoScript);
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderLeadMagnet);
} else {
  renderLeadMagnet();
}
