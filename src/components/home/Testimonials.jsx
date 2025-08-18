import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Sarah Thompson",
    role: "Director of Operations, Elite Realty Partners",
    content: "MERGE AI completely transformed how we manage leads. We're now able to respond to every inquiry instantly, qualify prospects automatically, and focus our team's energy where it matters most - closing deals. The system pays for itself many times over.",
    results: ["2x Lead Conversion", "50% Less Admin Work", "100% Response Rate"],
    accent: "#00839C"
  },
  {
    name: "Dr. Michael Chen",
    role: "Medical Director, Wellness Medical Center",
    content: "Our patient scheduling and follow-up processes have been revolutionized by MERGE AI. The platform handles appointment reminders and inquiries 24/7, freeing our staff to focus on direct patient care. The reduction in no-shows alone made this investment worthwhile within the first month.",
    results: ["30% Fewer No-Shows", "75% Better Response Rate", "92% Patient Satisfaction"],
    accent: "#DB07b5"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-r from-[#02012d] via-[#00839C]/5 to-[#02012d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Businesses, <span className="bg-gradient-to-r from-[#00839C] to-[#E501E4] bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-xl text-gray-300">
            See how MERGE AI is delivering measurable ROI for businesses just like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="dark-card gradient-hover h-full flex flex-col group transition-all duration-300 hover:border-white/30">
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed flex-grow">"{testimonial.content}"</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {testimonial.results.map((result, idx) => (
                    <Badge 
                      key={idx} 
                      className="border transition-all duration-300"
                      style={{ 
                        backgroundColor: `${testimonial.accent}20`, 
                        color: testimonial.accent,
                        borderColor: `${testimonial.accent}30`
                      }}
                    >
                      {result}
                    </Badge>
                  ))}
                </div>
                
                <div>
                  <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}