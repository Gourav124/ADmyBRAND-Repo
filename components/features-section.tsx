"use client";

import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GradientText } from "@/components/ui/gradient-text";
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Workflow, 
  Rocket,
  Users,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms that adapt and learn from your data to provide intelligent insights and recommendations."
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized infrastructure delivering sub-second response times with 99.9% uptime guarantee for uninterrupted operations."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and multi-layer security protocols to protect your sensitive business data."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards and reporting tools that transform raw data into actionable business intelligence."
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description: "Connect with 500+ popular tools and services through our robust API and pre-built integrations marketplace."
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Get up and running in minutes with our streamlined setup process and guided onboarding experience."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools that enable teams to work together efficiently with real-time updates and notifications."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock expert support with dedicated account managers and comprehensive documentation library."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Everything you need for{" "}
              <GradientText>marketing success</GradientText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered content creation to automated campaign management, 
              ADmyBRAND AI Suite provides all the tools modern marketers need to succeed.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <GlassCard className="p-8 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}