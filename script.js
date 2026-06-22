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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaPWH7TXfYI6er0Y3i-8p0Cd_iMl-2Z6fwH-YsOULwt4mAB89L9Dg3KDoE5QUcS4KzXUadFfJMJkmoVNlMbKHMSVedaGajoWAJAZAMLWhrMBjH11ARTlimmmGz03J7G3MmtAujM_cMYFN2JmzFvdZVL_cL9Bet-FsEN03KNMmKELoMTxp9S1tbi-1nV5iA6zMgvXwhVM9luRJZrxWqUYdCKvQNqfihSXYatr_Q8-JcM_5YRRmpnepVqpXBEz0KETZixCoMPKV_W
