import React, { useState } from 'react';
import { ProjectCategory, ProjectItem, ProjectStatus } from '../data/portfolioData';
import { Sparkles, Film, Palette, MapPin, ArrowUpRight, Info } from 'lucide-react';

interface PortfolioSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onUpdateStatus: (projectId: string, newStatus: ProjectStatus) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  onSelectProject,
  onUpdateStatus,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const categories: ProjectCategory[] = [
    'ALL',
    'AI ANIMATION',
    'AI FILM',
    'TRAVEL',
    'DESIGN',
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'ALL') return true;
    return project.category === activeCategory;
  });

  const getStatusLabel = (status: ProjectStatus) => {
    switch (status) {
      case '공개 완료':
        return { text: '공개 완료', color: 'text-emerald-700' };
      case '제작 중':
        return { text: '제작 중', color: 'text-amber-700' };
      case '기획 중':
      default:
        return { text: '기획 중', color: 'text-[#343137]/60' };
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'AI ANIMATION':
        return {
          icon: <Sparkles className="w-5 h-5 text-[#343137]/70" />,
          gradient: 'from-[#D8CBE8]/40 via-[#FAF8F3] to-[#EBCFD0]/30',
        };
      case 'AI FILM':
        return {
          icon: <Film className="w-5 h-5 text-[#343137]/70" />,
          gradient: 'from-[#EBCFD0]/40 via-[#FAF8F3] to-[#C8B792]/30',
        };
      case 'TRAVEL':
        return {
          icon: <MapPin className="w-5 h-5 text-[#343137]/70" />,
          gradient: 'from-[#C8B792]/30 via-[#FAF8F3] to-[#D8CBE8]/30',
        };
      case 'DESIGN':
      default:
        return {
          icon: <Palette className="w-5 h-5 text-[#343137]/70" />,
          gradient: 'from-[#FAF8F3] via-[#D8CBE8]/30 to-[#EBCFD0]/40',
        };
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 border-t border-[#343137]/10 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C8B792] mb-3">
              <span>SECTION 03</span>
              <span>·</span>
              <span>PORTFOLIO</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#343137] tracking-tight">
              Selected Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#343137]/75 max-w-xl">
              동화적 상상력과 AI 기술이 빚어내는 애니메이션, 영상, 감성 디자인 컬렉션
            </p>
          </div>

          {/* Guide notice regarding placeholders */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/70 border border-[#343137]/10 text-xs text-[#343137]/70 self-start md:self-auto">
            <Info className="w-3.5 h-3.5 text-[#C8B792] shrink-0" />
            <span>카드 클릭 시 상세 모달에서 상태 및 미디어 링크를 수정할 수 있습니다</span>
          </div>
        </div>

        {/* Functional Category Filter (Segmented control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white/80 border border-[#343137]/10 rounded-2xl w-fit max-w-full overflow-x-auto mb-12 shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#343137] text-[#F8F5EF] shadow-xs'
                  : 'text-[#343137]/70 hover:text-[#343137] hover:bg-black/5'
              }`}
            >
              {cat === 'ALL' ? '전체 (ALL)' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid (Responsive 1/2/3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const theme = getCategoryTheme(project.category);
            const statusInfo = getStatusLabel(project.status);

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative bg-[#FAF8F3] rounded-3xl border border-[#343137]/10 overflow-hidden hover:border-[#343137]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Area (Artwork Placeholder / Image) */}
                <div className={`relative aspect-16/10 w-full overflow-hidden bg-gradient-to-br ${theme.gradient} border-b border-[#343137]/10 flex flex-col items-center justify-center p-6 text-center`}>
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/90 border border-[#343137]/10 flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                        {theme.icon}
                      </div>
                      <span className="font-serif-display text-lg font-semibold text-[#343137]">
                        {project.title}
                      </span>
                      <span className="text-[11px] text-[#343137]/50 mt-1">
                        Concept Placeholder
                      </span>
                    </div>
                  )}

                  {/* Corner inspect icon */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#343137]/10 text-[#343137] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill Compliance) */}
                    <div className="flex items-center gap-2 text-xs text-[#343137]/70 mb-2.5">
                      <span className="font-semibold text-[#343137]">{project.genre}</span>
                      <span aria-hidden="true">·</span>
                      <span className={statusInfo.color}>{statusInfo.text}</span>
                      {project.releaseDate && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-[11px] text-[#343137]/50">{project.releaseDate}</span>
                        </>
                      )}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif-display text-xl font-bold text-[#343137] mb-2 group-hover:text-[#343137] transition-colors">
                      {project.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-[#343137]/75 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Bottom: Quick tools preview & View details */}
                  <div className="mt-5 pt-4 border-t border-[#343137]/10 flex items-center justify-between text-xs text-[#343137]/60">
                    <span className="truncate max-w-[180px]">
                      {project.tools.slice(0, 2).join(', ')}
                    </span>
                    <span className="font-medium text-[#343137] group-hover:underline underline-offset-4 flex items-center gap-0.5">
                      상세 보기
                      <ArrowUpRight className="w-3 h-3 inline" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
