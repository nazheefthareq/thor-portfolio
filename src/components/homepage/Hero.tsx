import GradientText from '@/components/ui/GradientText'

export default function Hero() {
    // Komponen harus mengembalikan sebuah elemen JSX
    return (
        <section className="min-h-screen">
            <span className='text-2xl'>Hi! I&apos;m</span>
            <GradientText
                colors={["#4e71ff, #8dd8ff, #4079ff, #8DD8FF, #4e71ff"]}
                animationSpeed={10}
                showBorder={false}
                className=""
                >
                <h1 className='text-8xl font-semibold'>nazheef thareq</h1>
            </GradientText>
        </section>
    );
}