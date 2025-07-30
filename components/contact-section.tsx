"use client";

import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GradientText } from "@/components/ui/gradient-text";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email us",
    description: "Our team is here to help",
    value: "hello@admybrand.com"
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Mon-Fri from 8am to 6pm",
    value: "+1 (555) 123-4567"
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "Come say hello at our office",
    value: "456 Marketing Ave, New York, NY 10001"
  },
  {
    icon: Clock,
    title: "Response time",
    description: "We typically respond within",
    value: "2-4 hours"
  }
];

export function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Get in{" "}
              <GradientText>touch</GradientText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your marketing? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        {info.description}
                      </p>
                      <p className="text-gray-800 font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <AnimatedSection delay={400} className="lg:col-span-2">
            <ContactForm />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}