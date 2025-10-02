import React from 'react';

// Tentukan tipe props agar lebih jelas
type GradientButtonProps = {
    href: string; // Tautan tujuan
    children: React.ReactNode; // Teks atau konten di dalam tombol
    };

const GradientButton: React.FC<GradientButtonProps> = ({ href, children }) => {
    return (
        // 1. Elemen Luar (Wadah Gradien)
        // - bg-gradient-to-r: Membuat background gradien dari kiri ke kanan.
        // - from-[#4E71FF] to-[#8DD8FF]: Warna gradien sesuai permintaan Anda.
        // - p-[2px]: Ini adalah "trik" untuk membuat border. Padding ini akan menampilkan gradien di sekeliling elemen dalam.
        // - rounded-full: Membuat sudutnya melingkar penuh.
        // - transition-transform duration-300 ease-in-out: Menambahkan animasi yang mulus.
        // - hover:scale-105: Efek "pop-up" saat di-hover.
        <a
        href={href}
        className="
            relative inline-block p-[2px] rounded-full 
            bg-gradient-to-r from-[#4E71FF] to-[#8DD8FF] 
            transition-transform duration-300 ease-in-out hover:scale-105
            z-100
        "
        >
        {/* 2. Elemen Dalam (Konten Tombol) */}
        {/* - bg-white: Memberi background putih solid di keadaan normal.
            - hover:bg-transparent: Mengubah background menjadi transparan saat di-hover, sehingga gradien di elemen luar terlihat.
            - text-slate-800: Warna teks awal.
            - hover:text-white: Mengubah warna teks menjadi putih agar kontras dengan background gradien saat di-hover.
            - px-6 py-2: Padding untuk konten di dalam tombol.
        */}
        <span 
            className="
            block px-6 py-2 rounded-full font-semibold
            bg-white text-slate-800
            transition-colors duration-300
            hover:bg-transparent hover:text-white
            "
        >
            {children}
        </span>
        </a>
    );
};

export default GradientButton;