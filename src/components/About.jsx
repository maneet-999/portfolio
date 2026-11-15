import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            About Me 😊
                        </Highlighter>
                    </h2>
        </div>  
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-12"
          textClassName="font-sans text-base sm:text-lg md:text-xl"
        >
         I'm a Statistics (Hons.) student with a Minor in Data Science at Ram Lal Anand College, University of Delhi. I build machine learning systems end to end: retrieval-augmented generation for code, NLP pipelines on messy real-world text, and tooling that checks whether an A/B test result can be trusted. I care about evaluation as much as modelling, so my projects ship with metrics, tracking and clear write-ups. I'm currently looking for ML Engineer and Data Scientist internships.
        </ScrollReveal>
      </div>
    </section>
  );
}