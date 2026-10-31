const fs = require('fs');

const filePath = 'components/eracex/GftTechnologyAndJourneySection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove useState and unused lucide icons
content = content.replace(
  "import React, { useState } from 'react';",
  "import React from 'react';"
);

content = content.replace(
  "import { ArrowRight, MonitorPlay, Sparkles } from 'lucide-react';",
  "import { ArrowRight } from 'lucide-react';"
);

// 2. Remove techView state
content = content.replace(
  "  const [techView, setTechView] = useState<'illustration' | 'liveChart'>('illustration');\n",
  ""
);

// 3. Replace the view switcher tabs and conditional video with the direct illustration container
const oldBlock = `            <div className="flex flex-col items-center reveal-right">
              {/* VIEW SWITCHER TABS */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setTechView('illustration')}
                  className={\`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all \${
                    techView === 'illustration'
                      ? 'btn-gold text-[#0a0a0a] shadow-md scale-105'
                      : 'app-surface border app-border app-text-secondary hover:app-text hover:border-[#f6bf4a]/50'
                  }\`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{gft.technology.tabArch}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTechView('liveChart')}
                  className={\`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all \${
                    techView === 'liveChart'
                      ? 'btn-gold text-[#0a0a0a] shadow-md scale-105'
                      : 'app-surface border app-border app-text-secondary hover:app-text hover:border-[#f6bf4a]/50'
                  }\`}
                >
                  <MonitorPlay className="w-3.5 h-3.5 text-[#f6bf4a] animate-pulse" />
                  <span>{gft.technology.tabVideo}</span>
                </button>
              </div>

              <div className="w-full relative rounded-3xl overflow-hidden border app-border app-surface p-4 sm:p-8 flex items-center justify-center shadow-2xl">
                {techView === 'illustration' ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/images/gft/Own Technology Illustration New.webp"
                    alt="Own Technology Illustration"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-[#f6bf4a]/40 bg-black shadow-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-auto object-contain"
                    >
                      <source src="/videos/trading-chart-mobile.mp4" type="video/mp4" />
                    </video>
                    {/* LIVE STATUS */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#f6bf4a]/40 text-[11px] font-mono text-white pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-[#f6bf4a] animate-pulse" />
                      <span className="font-bold text-[#f6bf4a]">MT5 TICK FEED</span>
                    </div>
                  </div>
                )}
              </div>
            </div>`;

const newBlock = `            <div className="flex flex-col items-center reveal-right">
              <div className="w-full relative rounded-3xl overflow-hidden border app-border app-surface p-4 sm:p-8 flex items-center justify-center shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gft/Own Technology Illustration New.webp"
                  alt="Own Technology Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>`;

content = content.replace(oldBlock, newBlock);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully removed video switcher from GftTechnologyAndJourneySection.tsx');
