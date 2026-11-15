import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white text-black pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Qualifications
              </Highlighter>
            </h2>
          </div>
          <div className="relative flex max-w-lg mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
              className="w-full bg-background overflow-hidden rounded-md"
              initialExpandedItems={["Education", "DU", "Experience", "FlyRank"]}
            >
              <Folder element="My Education" value="Education">
                <Folder element="University of Delhi" value="DU">
                  <File value="DU-BSC">
                    <p>B.Sc. (Hons.) Statistics, Minor in Data Science (2025 – 2028)</p>
                  </File>
                  <File value="DU-CGPA">
                    <p>Ram Lal Anand College, CGPA 8.1</p>
                  </File>
                </Folder>
              </Folder>
              <Folder element="My Experience" value="Experience">
                <Folder element="FlyRank AI" value="FlyRank">
                  <File value="FlyRank-ML">
                    <p>ML Intern, remote: search intent and opportunity scoring</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}