"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechStart Inc",
    company: "TechStart Inc", 
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "ADmyBRAND AI Suite has revolutionized our content creation process. We're producing 5x more high-quality content while maintaining perfect brand consistency across all channels.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Creative Director, InnovateNow",
    company: "InnovateNow",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "The AI understands our brand voice better than some of our human writers. Campaign automation has freed up our team to focus on strategy while the platform handles execution flawlessly.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Marketing, ScaleUp",
    company: "ScaleUp",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "Our marketing ROI increased by 340% in just 3 months. The AI-powered insights help us create content that truly resonates with our audience and drives conversions.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Marketing Manager, GrowthHacker",
    company: "GrowthHacker",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "As a startup, we needed to punch above our weight in marketing. ADmyBRAND AI Suite gives us enterprise-level capabilities at a fraction of the cost and complexity.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Brand Manager, FutureCore",
    company: "FutureCore",
    image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "Brand consistency was our biggest challenge across multiple markets. Now our AI ensures every piece of content perfectly reflects our brand, no matter who creates it.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              What our customers{" "}
              <GradientText>are saying</GradientText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their 
              businesses with our platform.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="relative">
              <GlassCard className="p-12 text-center">
                <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-50" />
                
                <div className="mb-8">
                  <p className="text-2xl font-medium text-gray-800 leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full p-3"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-blue-500 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full p-3"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Customer logos */}
          <AnimatedSection delay={400}>
            <div className="mt-20">
              <p className="text-center text-gray-500 mb-8">
                Trusted by leading companies worldwide
              </p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div key={index} className="text-2xl font-bold text-gray-400">
                    {testimonial.company}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}