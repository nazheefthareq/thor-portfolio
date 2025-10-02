"use client";

import Hero from "@/components/homepage/Hero";
import StaggeredMenu from "@/components/homepage/StaggeredMenu";

export default function HomePage() {
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

  return (
    <div className="relative md:mx-10 sm:mx-4">
      {/* StaggeredMenu with sticky prop enabled so it overlays the page like a navbar */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000000"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={["#2E4CC5", "#4E71FF"]}
        logoUrl="/images/logos/logo-icon(black-blue).png"
        accentColor="#4E71FF"
        sticky={true}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      <Hero />
    </div>
  );
}
