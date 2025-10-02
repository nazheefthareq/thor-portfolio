import React from 'react';
import GradientText from '@/components/ui/GradientText';
import TextType from '@/components/ui/TextType';
import GradientButton from '@/components/ui/GradientButton';

type HeroProps = {
  className?: string;
};

export default function Hero({ className = '' }: HeroProps) {
  return (
    <section className={`min-h-screen flex items-center justify-start px-8 sm:px-16 lg:px-24 ${className}`}>
      {/* Div pembungkus untuk semua konten hero */}
      <div className="flex flex-col items-start">
        <span className="text-2xl md:text-3xl">Hi! I&apos;m</span>

        <GradientText
          colors={["#4e71ff", "#8dd8ff", "#4079ff", "#8DD8FF", "#4e71ff"]}
          animationSpeed={10}
          showBorder={false}
          className="m-0"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-semibold mb-5">nazheef thareq</h1>
        </GradientText>

        <div className="text-2xl md:3xl">
          <span>-&nbsp;</span>
          <TextType
            text={["Fullstack Developer", "UI/UX Designer", "Motion Designer", "Video Editor"]}
            typingSpeed={75}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className=" flex flex-row gap-4 mt-8">
          <GradientButton href="#work">My Work</GradientButton>
        </div>
      </div>
    </section>
  );
}
