import Image from 'next/image';

export default function Home() {
  const businessName = "Pulsa Kilat Nusantara";
  const tagline = "Isi Ulang Pulsa dan Paket Data Cepat, Aman, Terpercaya!";
  const heroImage = "/images/hero-pulsa.png"; // Ensure this image exists in your public/images folder

  return (
    <main>
      <section className="hero-pulsa bg-gradient-to-br from-blue-50 to-background min-h-screen flex items-center py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-heading font-bold text-primary leading-tight">
                {businessName}
              </h1>
              <p className="text-xl text-text font-body">{tagline}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Isi Pulsa Sekarang
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md">
                  Hubungi Kami
                </button>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <Image
                src={heroImage}
                alt={businessName}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-bold animate-pulse text-sm md:text-base">
                Promo Spesial!
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Additional sections for services, benefits, or how it works can be added here */}
    </main>
  );
}
