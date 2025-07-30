"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GradientText } from "@/components/ui/gradient-text";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How quickly can I start creating content with ADmyBRAND AI Suite?",
    answer: "You can start creating AI-powered content immediately with our 14-day free trial. The setup takes less than 5 minutes, and our brand voice training wizard will have you generating on-brand content within 30 minutes."
  },
  {
    question: "What marketing platforms does ADmyBRAND integrate with?",
    answer: "We integrate with 200+ marketing platforms including Facebook, Instagram, LinkedIn, Twitter, TikTok, Google Ads, HubSpot, Mailchimp, Canva, and many more. Our API also supports custom integrations with your existing marketing stack."
  },
  {
    question: "How does the AI learn my brand voice?",
    answer: "Our AI analyzes your existing content, brand guidelines, and tone preferences to create a unique brand voice profile. You can also train it with examples of your best content, and it continuously learns from your feedback and approvals."
  },
  {
    question: "Can I collaborate with my team on content creation?",
    answer: "Absolutely! ADmyBRAND includes advanced collaboration features like real-time editing, approval workflows, comment systems, and role-based permissions. Your entire marketing team can work together seamlessly."
  },
  {
    question: "What types of content can the AI create?",
    answer: "Our AI can create blog posts, social media content, email campaigns, ad copy, product descriptions, press releases, video scripts, and more. It adapts to any content format while maintaining your brand voice and style."
  },
  {
    question: "How accurate is the AI-generated content?",
    answer: "Our AI achieves 95%+ accuracy in brand voice matching and content quality. It's trained on millions of high-performing marketing pieces and continuously improves based on your feedback and performance data."
  },
  {
    question: "Can I use my own images and design assets?",
    answer: "Yes! Upload your brand assets, logos, color palettes, and images to create a comprehensive brand library. The AI will incorporate these elements into all generated content to maintain visual consistency."
  },
  {
    question: "What analytics and reporting features are included?",
    answer: "Get detailed insights on content performance, engagement rates, conversion metrics, and ROI tracking. Our AI also provides recommendations for optimizing future campaigns based on what's working best for your brand."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently asked{" "}
              <GradientText>questions</GradientText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our platform, features, and policies. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:bg-white/90 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={cn(
                        "w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </div>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                  )}>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}