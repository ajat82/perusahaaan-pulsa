import Image from 'next/image';

const businessName = "PulsaKilat";
const tagline = "Isi Pulsa, Langsung Ngacir! Cepat, Aman, Terpercaya.";

const heroHeadline = "Isi Pulsa & Paket Data Tanpa Ribet, Kapan Saja, Di Mana Saja!";
const heroDescription = "Nikmati kemudahan mengisi pulsa dan paket data semua operator dengan harga terbaik. Proses cepat, transaksi aman, dan layanan 24/7.";

const servicesList = [
  {
    name: "Telkomsel Data 10GB",
    provider: "Telkomsel",
    denomination: "10GB",
    price: "55.000",
    description: "Internet super cepat untuk streaming dan gaming."
  },
  {
    name: "Indosat Pulsa 50rb",
    provider: "Indosat Ooredoo",
    denomination: "50.000",
    price: "52.000",
    description: "Pulsa reguler untuk telepon dan SMS."
  },
  {
    name: "XL Axiata Combo Lite 7GB",
    provider: "XL Axiata",
    denomination: "7GB",
    price: "48.000",
    description: "Paket komplit internet, telepon, dan SMS."
  },
  {
    name: "Tri Data 30GB",
    provider: "Tri",
    denomination: "30GB",
    price: "75.000",
    description: "Kuota besar untuk kebutuhan digital harianmu."
  },
  {
    name: "Smartfren Unlimited",
    provider: "Smartfren",
    denomination: "Unlimited FUP 1GB/day",
    price: "80.000",
    description: "Internet tanpa batas untuk kebebasan berselancar."
  },
  {
    name: "Axis Bronet 5GB",
    provider: "Axis",
    denomination: "5GB",
    price: "32.000",
    description: "Paket hemat untuk anak muda yang aktif."
  }
];

const howItWorksSteps = [
  {
    step: 1,
    title: "Pilih Produk",
    description: "Pilih operator dan nominal pulsa atau paket data yang kamu inginkan."
  },
  {
    step: 2,
    title: "Bayar Instan",
    description: "Lakukan pembayaran melalui berbagai metode yang tersedia (bank transfer, e-wallet).
  },
  {
    step: 3,
    title: "Pulsa Masuk",
    description: "Pulsa atau paket data akan langsung masuk ke nomor tujuanmu dalam hitungan detik."
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[#0056b3] text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-heading">
              {heroHeadline}
            </h1>
            <p className="text-lg md:text-xl mb-8 font-body">
              {heroDescription}
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-accent hover:bg-[#218838] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Beli Sekarang
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-semibold transition-all duration-300">
                Lihat Daftar Harga
              </button>
            </div>
          </div>
        </div>
        {/* Background abstract shapes for modern feel */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -top-16 -left-16 transform rotate-45"></div>
          <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -bottom-32 -right-32 transform -rotate-30"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-12 font-heading">
            Pilihan Paket Terbaik Untukmu
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((item, index) => (
              <div key={index} className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">{item.name}</h3>
                  <p className="text-secondary text-sm mb-3">Provider: {item.provider}</p>
                  <p className="text-text mb-4 font-body">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">Rp {item.price}</span>
                    <button className="bg-primary hover:bg-[#0056b3] text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-300">
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-12 font-heading">
            Mudahnya Isi Pulsa di {businessName}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {howItWorksSteps.map((item, index) => (
              <div key={index} className="p-8 bg-background rounded-md shadow-sm border border-gray-200">
                <div className="text-5xl text-primary mb-4 font-heading">{item.step}</div>
                <h3 className="text-xl font-bold text-text mb-3 font-heading">{item.title}</h3>
                <p className="text-secondary font-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-heading mb-2">{businessName}</p>
          <p className="text-sm font-body">{tagline}</p>
          <p className="text-xs mt-4 font-body">&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
