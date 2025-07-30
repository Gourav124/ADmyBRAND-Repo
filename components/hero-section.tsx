"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight, Play, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <AnimatedSection delay={100}>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Trusted by 10,000+ customers
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Revolutionize your marketing with{" "}
                <GradientText>ADmyBRAND AI Suite</GradientText>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                The complete AI-powered marketing platform that creates compelling content, 
                manages your brand identity, and automates your marketing campaigns with 
                unprecedented precision and creativity.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Visual */}
          <AnimatedSection delay={600} animation="fade-in">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Dashboard"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-70 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl blur-xl opacity-60 animate-pulse" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}