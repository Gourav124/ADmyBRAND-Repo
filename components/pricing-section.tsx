"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GradientText } from "@/components/ui/gradient-text";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Creator",
    price: "$29",
    period: "/month",
    description: "Perfect for solo marketers and small businesses",
    features: [
      "AI content generation (50 pieces/month)",
      "3 brand voice profiles",
      "Basic campaign automation",
      "Email support",
      "Social media scheduling",
      "Performance analytics"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional", 
    price: "$99",
    period: "/month",
    description: "Best for growing marketing teams",
    features: [
      "Unlimited AI content generation",
      "10 brand voice profiles",
      "Advanced campaign automation",
      "Priority support",
      "Multi-channel publishing",
      "Team collaboration tools",
      "A/B testing & optimization",
      "Custom templates & assets"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large marketing organizations",
    features: [
      "Unlimited everything",
      "Custom brand voice training",
      "White-label solutions",
      "24/7 dedicated support",
      "Custom integrations",
      "API access & webhooks",
      "Advanced workflow automation",
      "Enterprise security",
      "SLA guarantee",
      "Dedicated account manager"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Simple, transparent{" "}
              <GradientText>pricing</GradientText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features 
              with a 14-day free trial and no setup fees.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <GlassCard className={`p-8 h-full relative ${
                plan.popular 
                  ? 'border-2 border-blue-500/50 bg-gradient-to-br from-blue-50/50 to-purple-50/50' 
                  : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'bg-white border-2 border-gray-200 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Button>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <span>✓ Cancel anytime</span>
              <span>✓ 99.9% uptime SLA</span>
              <span>✓ 24/7 support</span>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}