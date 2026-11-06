import React, { useState, useEffect } from 'react';
import { X, Play, ExternalLink, Edit2, Check, Sparkles, Film, Palette, BookOpen, MapPin } from 'lucide-react';
import { ProjectItem, ProjectStatus } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onUpdateProject: (updated: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onUpdateProject,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editImg, setEditImg] = useState('');
  const [editVideo, setEditVideo] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('기획 중');

  useEffect(() => {
    if (project) {
      setEditImg(project.imageUrl || '');
      setEditVideo(project.videoUrl || '');
      setStatus(project.status);
      setIsEditing(false);
    }
  }, [project]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleSave = () => {
    onUpdateProject({
      ...project,
      status,
      imageUrl: editImg.trim() || undefined,
      videoUrl: editVideo.trim() || undefined,
    });
    setIsEditing(false);
  };

  const getStatusColor = (s: ProjectStatus) => {
    switch (s) {
      case '공개 완료':
        return 'text-emerald-700 font-medium';
      case '제작 중':
        return 'text-amber-700 font-medium';
      case '기획 중':
      default:
        return 'text-[#343137]/70 font-medium';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI ANIMATION':
        return <Sparkles className="w-4 h-4 text-[#C8B792]" />;
      case 'AI FILM':
        return <Film className="w-4 h-4 text-[#C8B792]" />;
      case 'TRAVEL':
        return <MapPin className="w-4 h-4 text-[#C8B792]" />;
      case 'DESIGN':
      default:
        return <Palette className="w-4 h-4 text-[#C8B792]" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#343137]/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F3] rounded-3xl border border-[#343137]/15 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#343137]/10">
          <div className="flex items-center gap-2 text-xs text-[#343137]/70">
            {getCategoryIcon(project.category)}
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.genre}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#343137]/10 text-[#343137] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Display or Stylized Concept Placeholder */}
          <div className="relative aspect-16/9 rounded-2xl bg-gradient-to-tr from-[#EBCFD0]/30 via-[#FAF8F3] to-[#D8CBE8]/40 border border-[#343137]/10 overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-inner">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="flex flex-col items-center max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-white/80 border border-[#343137]/15 flex items-center justify-center mb-4 shadow-xs">
                  {getCategoryIcon(project.category)}
                </div>
                <h4 className="font-serif-display text-2xl text-[#343137] font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-[#343137]/60 leading-relaxed mb-4">
                  컨셉 비주얼 & 영상 플레이스홀더
                </p>
                <div className="text-[11px] text-[#343137]/60 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#343137]/10">
                  실제 완성본 및 영상 링크는 직접 교체하거나 아래에서 수정할 수 있습니다
                </div>
              </div>
            )}

            {/* Video Play link if available */}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#343137] text-[#F8F5EF] text-xs font-medium hover:bg-black transition-colors shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>영상 감상하기</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>
            )}
          </div>

          {/* Title & Metadata Row */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#343137]">
                {project.title}
              </h3>

              {/* Status Selector & State */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#343137]/60">진행 상태:</span>
                <select
                  value={status}
                  onChange={(e) => {
                    const newStatus = e.target.value as ProjectStatus;
                    setStatus(newStatus);
                    onUpdateProject({ ...project, status: newStatus });
                  }}
                  className={`text-xs px-3 py-1 rounded-md border border-[#343137]/20 bg-white cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-[#C8B792] ${getStatusColor(
                    status
                  )}`}
                >
                  <option value="기획 중">기획 중 (Planning)</option>
                  <option value="제작 중">제작 중 (In Progress)</option>
                  <option value="공개 완료">공개 완료 (Released)</option>
                </select>
              </div>
            </div>

            <p className="text-sm font-medium text-[#343137]/80">
              {project.description}
            </p>
          </div>

          {/* Full Story Section */}
          <div className="space-y-3 pt-4 border-t border-[#343137]/10">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C8B792]">
              Project Overview & Concept
            </h4>
            <p className="text-sm sm:text-base text-[#343137]/85 leading-relaxed whitespace-pre-line bg-white/60 p-5 rounded-2xl border border-[#343137]/10">
              {project.fullStory}
            </p>
          </div>

          {/* Creative Tools Used */}
          <div className="pt-2 border-t border-[#343137]/10">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C8B792] mb-3">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#343137]/80">
              {project.tools.map((tool, index) => (
                <React.Fragment key={tool}>
                  {index > 0 && <span className="text-[#343137]/30">·</span>}
                  <span className="font-medium bg-white px-3 py-1 rounded-lg border border-[#343137]/10 shadow-2xs">
                    {tool}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Media Customization Panel (Direct User Link Replacement) */}
          <div className="pt-4 border-t border-[#343137]/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#343137]/70">
                미디어 링크 관리 (실제 URL 교체)
              </span>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs text-[#343137] hover:text-[#C8B792] inline-flex items-center gap-1 font-medium underline underline-offset-2 cursor-pointer"
              >
                <Edit2 className="w-3 h-3" />
                <span>{isEditing ? '입력창 닫기' : '미디어 링크 수정'}</span>
              </button>
            </div>

            {isEditing && (
              <div className="p-4 bg-white rounded-2xl border border-[#343137]/15 space-y-3 text-xs">
                <div>
                  <label className="block text-[#343137] font-medium mb-1">
                    대표 이미지 URL (온라인 이미지 주소)
                  </label>
                  <input
                    type="url"
                    placeholder="https://... / image.jpg"
                    value={editImg}
                    onChange={(e) => setEditImg(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#343137]/20 focus:outline-hidden focus:border-[#C8B792]"
                  />
                </div>
                <div>
                  <label className="block text-[#343137] font-medium mb-1">
                    동영상 링크 (YouTube, Vimeo, 또는 호스팅 영상 URL)
                  </label>
                  <input
                    type="url"
                    placeholder="https://youtube.com/watch?v=..."
                    value={editVideo}
                    onChange={(e) => setEditVideo(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#343137]/20 focus:outline-hidden focus:border-[#C8B792]"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1.5 rounded-lg border border-[#343137]/20 text-[#343137] hover:bg-slate-50 cursor-pointer"
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-1.5 rounded-lg bg-[#343137] text-white hover:bg-black font-medium inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>저장하기</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F8F5EF] border-t border-[#343137]/10 flex items-center justify-between text-xs text-[#343137]/60">
          <span>※ 이 창은 ESC 키 또는 바깥 영역 클릭으로 닫을 수 있습니다.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#343137] text-white hover:bg-black text-xs font-medium cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
