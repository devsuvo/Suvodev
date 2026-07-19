// Header Component
function createHeader() {
  return `
    <header class="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a href="index.html" class="text-2xl font-bold">
            <span class="text-white">SUVO</span>
            <span class="text-indigo-500 ml-1">DEV</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <a href="index.html" class="text-gray-300 hover:text-indigo-500 transition duration-300">Home</a>
            <a href="about.html" class="text-gray-300 hover:text-indigo-500 transition duration-300">About</a>
            <a href="services.html" class="text-gray-300 hover:text-indigo-500 transition duration-300">Services</a>
            <a href="skills.html" class="text-gray-300 hover:text-indigo-500 transition duration-300">Skills</a>
            <a href="work.html" class="text-gray-300 hover:text-indigo-500 transition duration-300">Work</a>
            <a href="contact.html" class="text-gray-300 hover:text-indigo-500 transition duration-300">Contact</a>
            <a href="contact.html" class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
              Hire Me
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-indigo-500 text-2xl mobile-menu-btn">☰</button>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden mt-4 pb-4 flex-col gap-4 mobile-menu hidden">
          <a href="index.html" class="block text-gray-300 hover:text-indigo-500 transition duration-300 py-2">Home</a>
          <a href="about.html" class="block text-gray-300 hover:text-indigo-500 transition duration-300 py-2">About</a>
          <a href="services.html" class="block text-gray-300 hover:text-indigo-500 transition duration-300 py-2">Services</a>
          <a href="skills.html" class="block text-gray-300 hover:text-indigo-500 transition duration-300 py-2">Skills</a>
          <a href="work.html" class="block text-gray-300 hover:text-indigo-500 transition duration-300 py-2">Work</a>
          <a href="contact.html" class="block text-gray-300 hover:text-indigo-500 transition duration-300 py-2">Contact</a>
          <a href="contact.html" class="block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300 inline-block mt-2">
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  `;
}

// Footer Component
function createFooter() {
  return `
    <footer class="bg-slate-900 border-t border-slate-800 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <!-- Brand Section -->
          <div>
            <a href="index.html" class="text-2xl font-bold mb-4 inline-block">
              <span class="text-white">SUVO</span>
              <span class="text-indigo-500 ml-1">DEV</span>
            </a>
            <p class="text-gray-400 mb-4 leading-relaxed">
              Designing and Developing Interactive Web Platforms That Reflect Your Brand's Identity and Achieve Your Goals!
            </p>
            <!-- Social Links -->
            <div class="flex gap-4">
              <a href="#" class="text-indigo-500 hover:text-indigo-400 text-xl transition duration-300">f</a>
              <a href="#" class="text-indigo-500 hover:text-indigo-400 text-xl transition duration-300">in</a>
              <a href="#" class="text-indigo-500 hover:text-indigo-400 text-xl transition duration-300">gh</a>
              <a href="#" class="text-indigo-500 hover:text-indigo-400 text-xl transition duration-300">ig</a>
              <a href="#" class="text-indigo-500 hover:text-indigo-400 text-xl transition duration-300">𝕏</a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-gray-400 hover:text-indigo-500 transition duration-300">Home</a></li>
              <li><a href="about.html" class="text-gray-400 hover:text-indigo-500 transition duration-300">About</a></li>
              <li><a href="services.html" class="text-gray-400 hover:text-indigo-500 transition duration-300">Services</a></li>
              <li><a href="work.html" class="text-gray-400 hover:text-indigo-500 transition duration-300">Work</a></li>
              <li><a href="skills.html" class="text-gray-400 hover:text-indigo-500 transition duration-300">Skills</a></li>
              <li><a href="contact.html" class="text-gray-400 hover:text-indigo-500 transition duration-300">Contact</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-gray-400">
                <span>✉️</span>
                <span>sddev960@gmail.com</span>
              </li>
              <li class="flex items-center gap-3 text-gray-400">
                <span>📞</span>
                <span>+880160172103</span>
              </li>
              <li class="flex items-center gap-3 text-gray-400">
                <span>📍</span>
                <span>Sylhet, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-slate-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 SUVO DEV. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// Initialize components on page load
function initializeComponents() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (header) {
    header.innerHTML = createHeader();
  }
  if (footer) {
    footer.innerHTML = createFooter();
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
  }
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initializeComponents);
