"use client";
import StaggeredMenu from "@/components/homepage/StaggeredMenu";
import Hero from "./homepage/Hero";

// Definisi komponen HomePage dan ekspor sebagai default
export default function HomePage() {
    // Definisi data menu di dalam komponen
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
        { label: 'Services', ariaLabel: 'View our services', link: '/services' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];

    // Komponen harus mengembalikan (return) elemen JSX
    return (
        <div className="md:mx-10 sm:mx-4">
            <div style={{ height: '100vh', background: '#FFFFFF' }}>
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    menuButtonColor="#000000"
                    openMenuButtonColor="#000000"
                    changeMenuColorOnOpen={true}
                    colors={['#B19EEF', '#5227FF']}
                    logoUrl="/images/logos/logo-icon(black-blue).png"
                    accentColor="#4E71FF"
                    onMenuOpen={() => console.log('Menu opened')}
                    onMenuClose={() => console.log('Menu closed')}
                />
                

                <Hero />
            </div>
        </div>
    );
}