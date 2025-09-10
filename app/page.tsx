"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [showHearts, setShowHearts] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-card flex items-center justify-center">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-3xl animate-float">🎈</div>
        <div className="absolute top-20 right-20 text-2xl animate-bounce-gentle">✨</div>
        <div className="absolute bottom-20 left-20 text-2xl animate-wiggle">🐱</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-float">🎁</div>
        <div className="absolute top-1/2 left-5 text-xl animate-bounce-gentle">🌸</div>
        <div className="absolute top-1/3 right-5 text-xl animate-float">💕</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-border shadow-2xl">
          <CardContent className="p-12 text-center">
            {/* Main Content */}
            <div className="mb-8">
              <div className="text-6xl mb-6 animate-bounce-gentle">🎂</div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Wessss ada something ni yeeee untuk yang disana
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Seseorang yang spesial sedang berulang tahun hari ini anjay....
                <br />
                <span className="text-primary font-medium">and that is YOUUU! 🎉</span>
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="mb-8">
              <div className="flex justify-center gap-4 mb-6">
                <div className="text-3xl animate-wiggle">😸</div>
                <div className="text-3xl animate-bounce-gentle">📚</div>
                <div className="text-3xl animate-float">🍵</div>
                <div className="text-3xl animate-wiggle">🎵</div>
              </div>
              <p className="text-sm text-muted-foreground">
                tentang semua kegemaranmu....
                <br />
                Sesuatu yang kamu suka mungkin wkkwkw 
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Link href="/birthday">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onMouseEnter={() => setShowHearts(true)}
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Buka Surprise Birthday!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground">Klik tombol di atas untuk melihat surprise spesial! 🎁</p>
            </div>

            {/* Hearts Animation */}
            {showHearts && (
              <div className="fixed inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float text-2xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  >
                    💕
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">Dibuat dengan 💝 khusus buat hari spesialmu</p>
        </div>
      </div>
    </div>
  )
}
