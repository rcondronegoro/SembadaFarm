// Navbar bersama Sembada Farm.
// Menu cukup diubah di sini, semua halaman ikut berubah.
(function () {
  const MENU = [
    { label: "Beranda", href: "index.html" },
    { label: "Petani Sembada Farm", href: "Petani.html" },
    { label: "Penanaman Saat ini", href: "Penanaman.html" },
    { label: "Produk", href: "index.html#produk" },
    { label: "Kontak", href: "index.html#kontak" },
  ];

  // Halaman yang sedang dibuka (kosong = index.html)
  const sekarang = location.pathname.split("/").pop() || "index.html";
  const aktif = (href) => href === sekarang;

  const desktop = MENU.map((m) =>
    aktif(m.href)
      ? `<li><a href="${m.href}" class="text-sembada-green border-b-2 border-sembada-green pb-1">${m.label}</a></li>`
      : `<li><a href="${m.href}" class="hover:text-sembada-green transition-colors">${m.label}</a></li>`,
  ).join("");

  const mobile = MENU.map((m) =>
    aktif(m.href)
      ? `<a href="${m.href}" class="py-3 px-3 rounded-lg bg-[#F0F7F2] text-sembada-green font-bold">${m.label}</a>`
      : `<a href="${m.href}" class="py-3 px-3 rounded-lg hover:bg-zinc-50 text-zinc-700 font-medium">${m.label}</a>`,
  ).join("");

  const html = `
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-100">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-2 font-extrabold text-[18px] text-sembada-green">
          <img src="image/LogoSembada.jpg" alt="Logo Sembada" class="w-12 h-12 object-contain" />
          Sembada Farm
        </a>
        <ul class="hidden md:flex gap-8 text-[14px] font-medium text-zinc-700">${desktop}</ul>
        <button id="menu-toggle" class="md:hidden text-2xl" aria-label="Buka menu">☰</button>
      </div>
      <div id="mobile-menu" class="hidden md:hidden border-t bg-white absolute w-full top-[68px] shadow-lg">
        <div class="px-6 py-5 flex flex-col gap-1">${mobile}</div>
      </div>
    </nav>`;

  // Ganti penanda <div id="navbar"> dengan navbar-nya (bukan dimasukkan ke dalamnya),
  // supaya efek sticky tetap bekerja.
  const tempat = document.getElementById("navbar");
  if (!tempat) return;
  tempat.outerHTML = html;

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  toggle.addEventListener("click", () => menu.classList.toggle("hidden"));
})();
