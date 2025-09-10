"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Music, BookOpen, Coffee, Sparkles, Cat, Gift, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [catMood, setCatMood] = useState("happy")
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [currentCatIndex, setCurrentCatIndex] = useState(0)

  const catCarousel = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5CKOFRMgQ8niTBV2p2oGClYRIBoLrQ.png",
      title: "Golden Hour Vibes",
      description:
        "Sunset yang aesthetic banget kayak feed Instagram kamu! Vibesnya warm dan cozy, cocok buat dengerin lagu indie sambil baca buku ✨",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VMvIDd4EhdWQunr40dTD2t7ZKvYCVx.png",
      title: "Baby You Dulu",
      description:
        "Aliyek kecil yang imut banget! Mata besar dan pipi chubby, udah keliatan dari kecil bakal jadi orang aesthetic 📚",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Iay2DRa3QesaZCvYNQx3qyHb180cqm.png",
      title: "Nostalgia TV Jadul",
      description:
        "Vibes retro yang bikin kangen masa lalu! Kayak lagi nonton film indie di TV tabung sambil minum matcha latte 🎵",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W6SVROXcH3H5TYGQ2CmtKOG8ibsFcN.png",
      title: "Matcha Latte Goals",
      description:
        "Minuman favorit aliyek yang selalu bikin mood naik! Warna hijau yang aesthetic dan rasa yang perfect buat menemani baca buku 🍵",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pjrNAQdgODWDiokosrlo2Z0tQn2n5g.png",
      title: "Squad Goals Moment",
      description:
        "Foto bareng teman kandung Aliyek",
    },
  ]

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 100)
    const timer = setTimeout(() => setShowConfetti(true), 1000)
    const audioElement = new Audio("/placeholder.mp3?query=happy birthday indonesian pop music")
    audioElement.loop = true
    setAudio(audioElement)

    const carouselTimer = setInterval(() => {
      setCurrentCatIndex((prev) => (prev + 1) % catCarousel.length)
    }, 4000)

    return () => {
      clearTimeout(loadTimer)
      clearTimeout(timer)
      clearInterval(carouselTimer)
      audioElement.pause()
    }
  }, [])

  const toggleCatMood = () => {
    setCatMood(catMood === "happy" ? "sleepy" : "happy")
  }

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play()
        setIsPlaying(true)
      }
    }
  }

  const handleCelebration = () => {
    setShowConfetti(!showConfetti)
    setShowParticles(true)
    setTimeout(() => setShowParticles(false), 3000)
  }

  const nextCat = () => {
    setCurrentCatIndex((prev) => (prev + 1) % catCarousel.length)
  }

  const prevCat = () => {
    setCurrentCatIndex((prev) => (prev - 1 + catCarousel.length) % catCarousel.length)
  }

  const currentCat = catCarousel[currentCatIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-card">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 text-2xl md:text-4xl animate-float">🎈</div>
        <div className="absolute top-8 right-4 md:top-20 md:right-20 text-xl md:text-3xl animate-bounce-gentle">🎂</div>
        <div className="absolute bottom-16 left-4 md:bottom-20 md:left-20 text-lg md:text-2xl animate-wiggle">🐱</div>
        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 text-xl md:text-3xl animate-float">🎁</div>
        <div className="absolute top-1/2 left-2 md:left-5 text-lg md:text-2xl animate-bounce-gentle">🌸</div>
        <div className="absolute top-1/3 right-2 md:right-5 text-lg md:text-2xl animate-float">✨</div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8 relative z-10">
        <div
          className={`mb-4 md:mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <Link href="/">
            <Button variant="outline" size="sm" className="rounded-full bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <div
            className={`mb-4 md:mb-6 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 px-2">
              Selamat Ulang Tahun! 🎉
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 px-2">
              Alya Jesyca Anastasya
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 md:mb-6 px-4">
              Untuk calon bu dosen yang sangat gacor🙏! 
            </div>
          </div>

          {/* Interactive Cat */}
          <div
            className={`mb-6 md:mb-8 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <button
              onClick={toggleCatMood}
              className="text-6xl md:text-8xl hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {catMood === "happy" ? "😸" : "😴"}
            </button>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 px-4">
              Klik kucingnya! {catMood === "happy" ? "Dia lagi happy nih!" : "Shhh... dia lagi tidur"}
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 md:mb-6 transition-all duration-1000 delay-700 px-4 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full relative overflow-hidden w-full sm:w-auto"
              onClick={handleCelebration}
            >
              <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Lets Gooo diks!
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* First Spotify Embed with Lyrical Image */}
          <Card
            className={`bg-card border-border hover:shadow-lg transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-card-foreground text-base md:text-lg">
                <Music className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Romantic Echoes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wJXi277VbUIH09VknfeCVBqqgXVlDV.png"
                  alt="Tentang bunga - Selalu mekar mewangi"
                  className="w-full h-24 md:h-32 object-cover"
                />
              </div>
              <iframe
                src="https://open.spotify.com/embed/track/3MkXhH7pCUMtlRMVlfCxfH?utm_source=generator"
                width="100%"
                height="300"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg md:h-[352px]"
              ></iframe>
            </CardContent>
          </Card>

          {/* Second Spotify Embed with Lyrical Image */}
          <Card
            className={`bg-card border-border hover:shadow-lg transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-card-foreground text-base md:text-lg">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Bruno Major
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6od3lNps9Mt6MDboZxvkUCZVaWPpqP.png"
                  alt="So here's to you - The most beautiful thing that I have never seen"
                  className="w-full h-24 md:h-32 object-cover"
                />
              </div>
              <iframe
                src="https://open.spotify.com/embed/track/07koEqsKHZTlGVMC9eoEjO?utm_source=generator"
                width="100%"
                height="300"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg md:h-[352px]"
              ></iframe>
            </CardContent>
          </Card>

          {/* Third Spotify Embed with Lyrical Image */}
          <Card
            className={`bg-card border-border hover:shadow-lg transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-card-foreground text-base md:text-lg">
                <Coffee className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Maliq & D'Essential
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R9i3WWY5j8OauXsTmdnuwZ0tF04Vxk.png"
                  alt="Oh lihat kita bertaburan bunga-bunga"
                  className="w-full h-24 md:h-32 object-cover"
                />
              </div>
              <iframe
                src="https://open.spotify.com/embed/track/2Ed6kWWpqHImcfDNPIYi5C?utm_source=generator"
                width="100%"
                height="300"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg md:h-[352px]"
              ></iframe>
            </CardContent>
          </Card>
        </div>

        <Card
          className={`bg-card border-border mb-8 md:mb-12 transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-card-foreground text-base md:text-lg">
              <Cat className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              Memory Lane Aliyek
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="text-center p-4 md:p-8 bg-gradient-to-br from-muted/50 to-accent/10 rounded-lg">
                <div className="mb-3 md:mb-4 overflow-hidden rounded-lg max-w-md mx-auto">
                  <img
                    src={currentCat.image || "/placeholder.svg"}
                    alt={currentCat.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain bg-muted/20 rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">{currentCat.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto px-2">
                  {currentCat.description}
                </p>
              </div>

              {/* Carousel Navigation */}
              <div className="flex justify-between items-center mt-3 md:mt-4">
                <Button variant="outline" size="sm" onClick={prevCat} className="rounded-full bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex gap-1 md:gap-2">
                  {catCarousel.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCatIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentCatIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="sm" onClick={nextCat} className="rounded-full bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Birthday Message */}
        <Card
          className={`bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 transition-all duration-1000 delay-1300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <CardContent className="p-4 md:p-8 text-center">
            <Gift className="h-8 w-8 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Pesan Spesial Buat Kamu! 💝
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
              Semoga di tahun yang baru ini, kamu selalu dikelilingi hal-hal yang kamu suka dan senangi, semoga kuliah nya lancar, di berikan teman-teman yang baik hati dan tidak sombong, semoga menjadi cita-cita nya tercapai, dan tetap rendah hati, baik hati, dan cantik selalu hehehehe ☺, pokonya wish all the best for youu diks, sehat sehat calon bu dosen🙏.
            </p>
            <div className="mt-4 md:mt-6 flex justify-center gap-2">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-500 animate-pulse" />
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div
          className={`text-center mt-8 md:mt-12 text-muted-foreground transition-all duration-1000 delay-1400 px-4 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm md:text-base">Dibuat dengan 💕 oleh seorang yang tampan, rendah hati, dan tidak sombong😎!</p>
          <p className="text-xs md:text-sm mt-2">Semoga harimu seindah dan secantik dirimu! ✨</p>
          <p className="text-xs md:text-sm mt-2">Sebelumnya izin ya ambil foto di ig 😂🙏</p>
        </div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce-gentle text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {["🎉", "🎊", "✨", "🎈", "🎂", "💕"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {/* Particle Explosion Animation */}
      {showParticles && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute text-lg animate-ping"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${(Math.random() - 0.5) * 800}px, ${(Math.random() - 0.5) * 600}px)`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              {["✨", "🌟", "💫", "⭐", "🎊", "🎉", "💕", "💖"][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
