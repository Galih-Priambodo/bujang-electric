/**
 * ========================================
 * BUJANG ELECTRIC - Main JavaScript
 * ========================================
 * 
 * DATA LAYER - Edit data di sini
 * ========================================
 */

/* --- DATA URL GAMBAR --- */
const siteImages = {
    hero: "https://rakhman.net/wp-content/uploads/2023/09/panel-listrik-768x614.jpg",
    about: "https://4.bp.blogspot.com/-DHQMmLc9zN0/XCDhfhdriEI/AAAAAAAAA2U/_pS6nAeRtBoV4FfEmxMfjrjoP7op1soWQCLcBGAs/s1600/WhatsApp%2BImage%2B2018-12-24%2Bat%2B09.46.27.jpeg",
    serviceIcons: {
        motor: "fas fa-cogs",
        manual: "fas fa-project-diagram",
        auto: "fas fa-clock",
        reverse: "fas fa-exchange-alt",
        dol: "fas fa-bolt",
        panel: "fas fa-th-large"
    }
};

/* --- NAVIGASI --- */
const navigationItems = [
    { label: "Beranda", href: "#home" },
    { label: "Layanan", href: "#layanan" },
    { label: "Diagram", href: "#diagram" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Kenapa Kami", href: "#whyus" },
    { label: "Tentang", href: "#tentang" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" }
];

/* --- LAYANAN / SERVICES --- */
const services = [
    {
        title: "Motor 3 Phase",
        description: "Instalasi, pengetesan, dan perawatan motor listrik 3 phase untuk berbagai aplikasi industri.",
        icon: siteImages.serviceIcons.motor,
        color: "text-gold"
    },
    {
        title: "Star-Delta Manual",
        description: "Kontrol start bintang segitiga manual untuk mengurangi arus starting motor.",
        icon: siteImages.serviceIcons.manual,
        color: "text-gold"
    },
    {
        title: "Star-Delta Otomatis",
        description: "Sistem star-delta otomatis dengan timer untuk transisi yang presisi.",
        icon: siteImages.serviceIcons.auto,
        color: "text-gold"
    },
    {
        title: "Forward-Reverse",
        description: "Kontrol untuk membalik arah putaran motor sesuai kebutuhan proses.",
        icon: siteImages.serviceIcons.reverse,
        color: "text-gold"
    },
    {
        title: "DOL (Direct On Line)",
        description: "Starter DOL sederhana untuk aplikasi motor dengan daya kecil hingga menengah.",
        icon: siteImages.serviceIcons.dol,
        color: "text-gold"
    },
    {
        title: "Panel Kontrol Motor",
        description: "Perakitan dan instalasi panel kontrol motor custom sesuai kebutuhan.",
        icon: siteImages.serviceIcons.panel,
        color: "text-gold"
    }
];

/* --- GALERI WIRING DIAGRAM --- */
const diagrams = [
    {
        id: "dol",
        title: "DOL (Direct On Line)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXWiGmYGflnc-1HnjzgS1hvDrEd1yzVQF8hrRBkcXM-SbTSp8bR1c2oPBqLTb6nImjSKdnjADBDJKc6zVN_adQYytLpbDg4puzdNllXhdgr6qK6dUNyW241OQ-NaIYCuazgWE4BpEKLjGFxmKk5Dj-7ukZtzzbnFexNCn0EwBTJG1pIwNmKCKe3gy_095z_mC2OJ8euU6yO4YtDO9yELVFHMMCuK5GclDONmrv5nZ7f1UzuaTiYdzG6zHd8cXuyXXR6NiDiloTefJ",
        description: "<p>Sistem starter motor paling sederhana dengan kontaktor tunggal.</p><ul class='list-disc pl-5 space-y-2'><li><strong>KM:</strong> Kontaktor Utama</li><li><strong>OL:</strong> Overload Relay</li><li><strong>Motor 3~:</strong> Motor Listrik 3 Phase</li><li><strong>S1/S2:</strong> Tombol Start/Stop</li></ul>"
    },
    {
        id: "star-delta-manual",
        title: "Star-Delta Manual",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaPWH7TXfYI6er0Y3i-8p0Cd_iMl-2Z6fwH-YsOULwt4mAB89L9Dg3KDoE5QUcS4KzXUadFfJMJkmoVNlMbKHMSVedaGajoWAJAZAMLWhrMBjH11ARTlimmmGz03J7G3MmtAujM_cMYFN2JmzFvdZVL_cL9Bet-FsEN03KNMmKELoMTxp9S1tbi-1nV5iA6zMgvXwhVM9luRJZrxWqUYdCKvQNqfihSXYatr_Q8-JcM_5YRRmpnepVqpXBEz0KETZixCoMPKV_W7dl",
        description: "<p>Sistem start bintang-segitiga manual untuk mengurangi arus starting.</p><ul class='list-disc pl-5 space-y-2'><li><strong>KM1, KM2, KM3:</strong> Kontaktor Bintang & Segitiga</li><li><strong>TR:</strong> Thermal Relay</li><li><strong>Timer:</strong> Manual switching</li><li><strong>Motor 3~:</strong> Motor Listrik 3 Phase</li></ul>"
    },
    {
        id: "star-delta-auto",
        title: "Star-Delta Otomatis",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8i0vk6Qh_67Zb2UfDPIVoLOhXUS8nb8jcHIsVWGvRgak2camcyaxCqtlesq6EDr0TCjahXJXeUqyKxHhaj2q8WJvuCK8LgiVyBtvh9cBvBPrRXCq9kfNyYzZJIrzL4MrZEVvAAC648-vxt7Jzsuue6w6OsTMOPWRfd96myofX2H1-FGZxHBLYo521CxkSW0qLSndVZybwZp1LU-pYdS3gBxHtG1Ufi6K941Xt1LUVltdlzb3_ROvVsr8IPXn7O4hmTBmBsE4iegIX",
        description: "<p>Sistem star-delta otomatis dengan timer kontrol transisi.</p><ul class='list-disc pl-5 space-y-2'><li><strong>KM1, KM2, KM3:</strong> Kontaktor</li><li><strong>KT:</strong> Timer Star-Delta</li><li><strong>OL:</strong> Overload Protection</li><li><strong>Auto/Manual:</strong> Selector switch</li></ul>"
    },
    {
        id: "forward-reverse",
        title: "Forward-Reverse",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUJE1wwBmtMypwsHDMh66_ogMb8sJtne1bjx7djMUpmBWIV-mYd9gClZSILLn1ULWHfX0gndvcBd58jn6OFGhGoUxoKJz0wnr0ES-bd8_3Rm8-sydyhCkTLU-5W_u9MYlKIvjXM-QP8UGTkaQ1UCnk66ENQaEDsOx2GyGzcisrwduJ94EjDIki7I487WQ_dkDvsHaFn-YiMm8Up-_EF_SKj2OtVcFYke8gxdHTxbpYZEJp0_gC6i7IbV71EtJ-1SvDNVQ1J0ryvNpv",
        description: "<p>Sistem kontrol untuk membalik arah putaran motor.</p><ul class='list-disc pl-5 space-y-2'><li><strong>KM1, KM2:</strong> Kontaktor Forward & Reverse</li><li><strong>OL:</strong> Overload Relay</li><li><strong>Interlock:</strong> Mechanical/Electrical</li><li><strong>Motor 3~:</strong> Motor Listrik 3 Phase</li></ul>"
    }
];

/* --- FILTER PORTOFOLIO --- */
const portfolioItems = [
    { id: "all", name: "Semua", active: true },
    { id: "panel", name: "Panel Kontrol", active: false },
    { id: "motor", name: "Motor", active: false },
    { id: "instalasi", name: "Instalasi", active: false }
];

/* --- PROYEK PORTOFOLIO --- */
const portfolioProjects = [
    {
        id: 1,
        title: "Panel Kontrol Star-Delta",
        category: "panel",
        image: "https://shopcdnpro.grainajz.com/category/78512/2028/235ef32226d19e24ba2033c8232bd01d/motor_control_box_(7).jpg",
        description: "Panel kontrol star-delta otomatis untuk pabrik makanan"
    },
    {
        id: 2,
        title: "Instalasi Motor 3 Phase",
        category: "motor",
        image: "https://biaya.info/wp-content/uploads/2020/10/instalasi-listrik-3-phase.jpg",
        description: "Instalasi motor 3 phase 10HP untuk conveyor"
    },
    {
        id: 3,
        title: "Panel DOL Industri",
        category: "panel",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m1sfhags7eou1a",
        description: "Panel DOL dengan overload protection"
    },
    {
        id: 4,
        title: "Motor Pompa Air",
        category: "motor",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAVh72b_ExuJXnCUKRzcIDdGun540b8gBquwHM8z7kH92ebx10BWCnpXVuTt5t1vudJYa6-bGqrMh_TtXuVOuo9HCNudhiaKVGZXPOFbj-BdGMawFypd1X5kT1gYGT0qk_oWvZmDlLpSxzFn7MB_Hvzqjn7Pkgpv1VaOHP5bK0mV_OUQUieglDlHSEKjowqNkuFE7hv89vFOak4avA5wK32Kc4rczaT3VuVB67WJe1lOCRzzRG8im-2erAP4ex9bRY_EmSyc3krNPDRgI",
        description: "Motor 3 phase untuk sistem pompa air industri"
    },
    {
        id: 5,
        title: "Instalasi Kabel Tray",
        category: "instalasi",
        image: "https://cdn.cableorganizer.com/images/articles/cable-tray-systems/overview-with-cables.gif",
        description: "Instalasi kabel tray dan wiring sistem"
    },
    {
        id: 6,
        title: "Panel Forward-Reverse",
        category: "panel",
        image: "https://2.bp.blogspot.com/_nygddeetxWU/S_4gGDvNTpI/AAAAAAAAAQg/MvHU7KJ8X-k/s1600/fr.bmp",
        description: "Panel kontrol forward-reverse untuk mesin mixing"
    }
];

/* --- NILAI / VALUES --- */
const values = [
    {
        title: "AMAN",
        icon: "fas fa-shield-alt",
        description: "Prioritaskan keselamatan dalam setiap instalasi dengan standar keamanan tertinggi.",
        color: "text-red-400"
    },
    {
        title: "HANDAL",
        icon: "fas fa-cog",
        description: "Sistem yang kokoh dan tahan lama dengan komponen berkualitas premium.",
        color: "text-blue-400"
    },
    {
        title: "CEPAT",
        icon: "fas fa-bolt",
        description: "Responsif dalam pengerjaan dan menjadi solusi kebutuhan Anda.",
        color: "text-yellow-400"
    },
    {
        title: "BERKUALITAS",
        icon: "fas fa-thumbs-up",
        description: "Hasil kerja presisi dengan garansi dan mengutamakan kualitas dalam setiap pekerjaan.",
        color: "text-green-400"
    }
];

/* --- TESTIMONI --- */
const testimonials = [
    {
        name: "Bapak Andi - Pabrik Tekstil",
        text: "Panel star-delta yang dibuat BUJANG ELECTRIC sangat handal. Sudah setengah tahun berjalan tanpa masalah. Recommended!",
        rating: 5
    },
    {
        name: "CV. Maju Jaya - Konveksi",
        text: "Instalasi motor 3 phase untuk mesin jahit kami selesai tepat waktu dan hasilnya rapi. Pelayanan memuaskan.",
        rating: 5
    },
    {
        name: "PT. Sinar Abadi - Food Processing",
        text: "Tim teknisi profesional dan mengerti kebutuhan industri. Troubleshooting gangguan motor cepat ditangani.",
        rating: 5
    }
];

const footerNavItems = [
    { label: "Beranda", href: "#home" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Kontak", href: "#kontak" }
];

/* ========================================
   RENDER FUNCTIONS
   ======================================== */

function renderNavigation(items) {
    return items.map(item =>
        `<li><a href="${item.href}" class="text-gray-300 hover:text-gold transition-colors font-medium">${item.label}</a></li>`
    ).join("");
}

function renderServices(items) {
    return items.map(item => `
        <div class="card-hover bg-navy-light rounded-xl p-6 border border-gray-700 hover:border-gold">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                    <i class="${item.icon} ${item.color} text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white">${item.title}</h3>
            </div>
            <p class="text-gray-400">${item.description}</p>
        </div>
    `).join("");
}

function renderDiagramTabs(items) {
    return items.map((item, index) => `
        <button class="diagram-tab px-6 py-3 rounded border border-gray-700 text-gray-300 hover:border-gold hover:text-gold transition-all ${index === 0 ? 'active' : ''}" 
                data-diagram="${item.id}" 
                data-image="${item.image}" 
                data-title="${item.title}" 
                data-description="${encodeURIComponent(item.description)}">
            ${item.title}
        </button>
    `).join("");
}

function renderPortfolioFilters(items) {
    return items.map(item => `
        <button class="portfolio-filter px-4 py-2 rounded-full ${item.active ? 'bg-gold text-navy-dark' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}" 
                data-filter="${item.id}">
            ${item.name}
        </button>
    `).join("");
}

function renderPortfolioProjects(items) {
    return items.map(item => `
        <div class="portfolio-item group cursor-pointer" data-category="${item.category}">
            <div class="relative overflow-hidden rounded-lg mb-4 border border-gray-800">
                <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-contain bg-navy-dark group-hover:scale-110 transition-transform duration-500" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p class="text-white text-sm">${item.description}</p>
                </div>
            </div>
            <h4 class="text-lg font-semibold text-white group-hover:text-gold transition-colors">${item.title}</h4>
        </div>
    `).join("");
}

function renderValues(items) {
    return items.map(item => `
        <div class="text-center">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-light mb-4 ${item.color} shadow-lg">
                <i class="${item.icon} text-3xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gold mb-3">${item.title}</h3>
            <p class="text-gray-300">${item.description}</p>
        </div>
    `).join("");
}

function renderTestimonials(items) {
    return items.map(item => `
        <div class="testimonial-slide mb-6 last:mb-0">
            <div class="bg-navy-dark rounded-lg p-6 border border-gray-700">
                <div class="flex items-center mb-4">
                    ${Array.from({length: 5}, (_, i) => 
                        `<i class="fas fa-star ${i < item.rating ? 'text-yellow-400' : 'text-gray-600'}"></i>`
                    ).join("")}
                </div>
                <p class="text-gray-300 text-lg mb-4">"${item.text}"</p>
                <p class="text-gold font-semibold">${item.name}</p>
            </div>
        </div>
    `).join("");
}

function renderFooterNav(items) {
    return items.map(item =>
        `<li><a href="${item.href}" class="text-gray-400 hover:text-gold transition-colors">${item.label}</a></li>`
    ).join("");
}

/* ========================================
   INITIALIZE PAGE
   ======================================== */

document.addEventListener("DOMContentLoaded", function() {
    // --- Console Watermark ---
    console.log("%c BUJANG ELECTRIC %c KODE DILINDUNGI %c",
        "background:#ffd23f;color:#0a1628;font-size:20px;padding:10px;border-radius:10px 0 0 10px;",
        "background:#dc2626;color:white;font-size:20px;padding:10px;",
        "background:transparent;"
    );
    console.log("© 2026 BUJANG ELECTRIC - Hak Cipta Dilindungi");

    // --- Render Fixed Images ---
    document.getElementById("heroImage").src = siteImages.hero;
    document.getElementById("aboutImage").src = siteImages.about;

    // --- Render All Sections ---
    document.getElementById("navMenu").innerHTML = renderNavigation(navigationItems);
    document.getElementById("mobileNavList").innerHTML = renderNavigation(navigationItems);
    document.getElementById("servicesGrid").innerHTML = renderServices(services);
    document.getElementById("diagramTabs").innerHTML = renderDiagramTabs(diagrams);
    document.getElementById("portfolioFilters").innerHTML = renderPortfolioFilters(portfolioItems);
    document.getElementById("portfolioGrid").innerHTML = renderPortfolioProjects(portfolioProjects);
    document.getElementById("valuesGrid").innerHTML = renderValues(values);
    document.getElementById("testimonialsSlider").innerHTML = renderTestimonials(testimonials);
    document.getElementById("footerNav").innerHTML = renderFooterNav(footerNavItems);

    // --- Set Initial Diagram ---
    const initialDiagram = diagrams[0];
    if (initialDiagram) {
        document.getElementById("diagramImage").src = initialDiagram.image;
        document.getElementById("diagramTitle").textContent = initialDiagram.title;
        document.getElementById("diagramDescription").innerHTML = initialDiagram.description;
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden");
        mobileMenuBtn.innerHTML = mobileMenu.classList.contains("hidden")
            ? '<i class="fas fa-bars"></i>'
            : '<i class="fas fa-times"></i>';
    });

    // --- Diagram Tabs ---
    document.querySelectorAll(".diagram-tab").forEach(tab => {
        tab.addEventListener("click", function() {
            document.querySelectorAll(".diagram-tab").forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            const image = this.getAttribute("data-image");
            const title = this.getAttribute("data-title");
            const description = decodeURIComponent(this.getAttribute("data-description"));

            document.getElementById("diagramImage").src = image;
            document.getElementById("diagramTitle").textContent = title;
            document.getElementById("diagramDescription").innerHTML = description;
        });
    });

    // --- Portfolio Filtering ---
    document.querySelectorAll(".portfolio-filter").forEach(filter => {
        filter.addEventListener("click", function() {
            const filterId = this.getAttribute("data-filter");
            document.querySelectorAll(".portfolio-filter").forEach(f => {
                f.classList.remove("bg-gold", "text-navy-dark");
                f.classList.add("bg-gray-800", "text-gray-300");
            });
            this.classList.remove("bg-gray-800", "text-gray-300");
            this.classList.add("bg-gold", "text-navy-dark");

            const projects = document.querySelectorAll(".portfolio-item");
            projects.forEach(project => {
                if (filterId === "all" || project.getAttribute("data-category") === filterId) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

    // --- Lightbox ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeLightbox = document.getElementById("closeLightbox");

    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", function() {
            const img = this.querySelector("img");
            const title = this.querySelector("h4").textContent;
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightboxCaption.textContent = title;
            lightbox.classList.add("active");
        });
    });

    closeLightbox.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("active");
    });

    // --- Contact Form ---
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        const whatsappMessage = `Halo BUJANG ELECTRIC,%0A%0ANama: ${name}%0ANomor HP: ${phone}%0APesan: ${message}%0A%0ASaya ingin berkonsultasi tentang instalasi motor listrik 3 phase.`;
        const whatsappUrl = `https://wa.me/6285283935432?text=${whatsappMessage}`;
        window.open(whatsappUrl, "_blank");
        contactForm.reset();
    });

    // --- Sticky Nav ---
    const nav = document.getElementById("mainNav");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    });

    // --- Smooth Scroll ---
    document.addEventListener("click", function(e) {
        const link = e.target.closest("a[href^='#']");
        if (link) {
            const targetId = link.getAttribute("href");
            if (targetId === "#") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                mobileMenu.classList.add("hidden");
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: "smooth" });
            }
        }
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.animation = "fade-in-up 0.6s ease-out forwards";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = "0";
        observer.observe(section);
    });
});
