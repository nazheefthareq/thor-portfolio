import GradientText from '@/components/ui/GradientText'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-start px-8 sm:px-16 lg:px-24">
            {/* 1. Div pembungkus untuk semua konten hero */}
            <div className="flex flex-col items-start">
                <span className='text-2xl md:text-4xl'>Hi! I&apos;m</span>
                
                <GradientText
                    colors={["#4e71ff", "#8dd8ff", "#4079ff", "#8DD8FF", "#4e71ff"]}
                    animationSpeed={10}
                    showBorder={false}
                    // Menimpa margin auto (mx-auto) agar tidak ke tengah
                    className="m-0"
                >
                    <h1 className='text-7xl md:text-8xl lg:text-9xl font-semibold'>nazheef thareq</h1>
                </GradientText>
                
                <p className="text-xl md:text-3xl mt-4 text-gray-700">- Fullstack Developer |</p>

                {/* 3. Container untuk tombol-tombol */}
                <div className="flex flex-row gap-4 mt-8">
                    <button className="px-6 py-2 rounded-full font-medium text-sm md:text-base text-[#4e71ff] border border-[#8dd8ff] bg-gradient-to-r from-white to-gray-100 hover:shadow-lg transition-shadow duration-300">
                        My Work
                    </button>
                    <button className="px-6 py-2 rounded-full font-medium text-sm md:text-base text-[#4e71ff] border border-[#8dd8ff] bg-gradient-to-r from-white to-gray-100 hover:shadow-lg transition-shadow duration-300">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
}