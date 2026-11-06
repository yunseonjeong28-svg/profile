import React from 'react';
import { Lightbulb, Wand2, PlayCircle, Share2, Cpu, Wrench, Sparkles, Layers } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Imagine — 상상하기',
      englishLabel: 'Conception & Narrative',
      description: '일상의 사소한 감정과 머릿속 상상을 글과 키워드로 정리하고, 이야기의 따뜻한 세계관과 캐릭터 설정을 기획합니다.',
      icon: <Lightbulb className="w-5 h-5 text-[#343137]" />,
      accentBg: 'bg-[#D8CBE8]/40',
    },
    {
      number: '02',
      title: 'Create — 이미지와 캐릭터 제작',
      englishLabel: 'Visual Generation',
      description: '정교한 프롬프트 엔지니어링과 AI 이미지 도구를 활용하여 화풍과 질감, 캐릭터의 감정선이 살아있는 비주얼을 시각화합니다.',
      icon: <Wand2 className="w-5 h-5 text-[#343137]" />,
      accentBg: 'bg-[#EBCFD0]/40',
    },
    {
      number: '03',
      title: 'Animate — 영상과 움직임 구현',
      englishLabel: 'Motion & Directing',
      description: '정지된 프레임에 카메라 워크와 자연스러운 움직임을 불어넣고, 프레임 일관성을 유지하며 영화적 리듬감을 연출합니다.',
      icon: <PlayCircle className="w-5 h-5 text-[#343137]" />,
      accentBg: 'bg-[#C8B792]/30',
    },
    {
      number: '04',
      title: 'Share — 완성된 작품 공유',
      englishLabel: 'Storytelling & Resonance',
      description: '사운드 디자인과 섬세한 컬러 그레이딩을 더해 최종 작품을 완성하고, 관객들에게 따뜻한 영감과 공감을 선물합니다.',
      icon: <Share2 className="w-5 h-5 text-[#343137]" />,
      accentBg: 'bg-[#D8CBE8]/30',
    },
  ];

  const tools = [
    {
      name: 'Google Flow',
      category: 'AI Workflow & Orchestration',
      desc: '창작 파이프라인과 아이디어 확장을 위한 지능형 플로우 도구',
      tag: 'Workflow',
    },
    {
      name: 'Google AI Studio',
      category: 'Gemini Multimodal Reasoning',
      desc: '스토리텔링 구체화, 스크립트 작성 및 비주얼 프롬프트 정밀 튜닝',
      tag: 'Intelligence',
    },
    {
      name: 'AI 이미지 생성 도구',
      category: 'Visual & Character Synthesis',
      desc: '미드저니, Imagen 등 감성적인 일러스트 및 포토 비주얼 제작',
      tag: 'Generative Art',
    },
    {
      name: '영상 편집 & 사운드 도구',
      category: 'Cinematic Post-Production',
      desc: '런웨이, 다빈치 리졸브, 프리미어 프로를 통한 모션 및 색보정',
      tag: 'Editing',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 border-t border-[#343137]/10 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C8B792] mb-3">
            <span>SECTION 04</span>
            <span>·</span>
            <span>WORKFLOW</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#343137] tracking-tight mb-4">
            My Creative Process
          </h2>
          <p className="text-sm sm:text-base text-[#343137]/75">
            어렴풋한 영감이 하나의 생명력 있는 작품으로 태어나는 4단계 창작 여정입니다.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 rounded-3xl bg-white border border-[#343137]/10 hover:border-[#343137]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-display text-2xl font-bold text-[#C8B792]">
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl ${step.accentBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans-kr text-base sm:text-lg font-bold text-[#343137] mb-1.5">
                  {step.title}
                </h3>
                <p className="font-serif-display italic text-xs text-[#343137]/50 mb-3">
                  {step.englishLabel}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#343137]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 border-t border-[#343137]/10 flex items-center gap-2 text-[11px] text-[#343137]/50 font-medium">
                <Sparkles className="w-3 h-3 text-[#C8B792]" />
                <span>Phase {step.number}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Major Creative Tools Showcase */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F8F5EF] border border-[#343137]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#343137]/10">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C8B792] block mb-1">
                Studio Technology
              </span>
              <h3 className="font-serif-display text-2xl font-bold text-[#343137]">
                주요 제작 도구
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#343137]/70 max-w-md">
              최신 생성형 AI 모델과 전문 영상/디자인 소프트웨어를 융합하여 독창적인 비주얼 언어를 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-5 rounded-2xl bg-white/80 border border-[#343137]/10 hover:bg-white transition-colors"
              >
                <div className="text-[11px] font-mono text-[#343137]/50 uppercase mb-2">
                  {tool.tag}
                </div>
                <h4 className="text-base font-bold text-[#343137] mb-1">
                  {tool.name}
                </h4>
                <div className="text-xs font-medium text-[#C8B792] mb-2">
                  {tool.category}
                </div>
                <p className="text-xs text-[#343137]/70 leading-normal">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
