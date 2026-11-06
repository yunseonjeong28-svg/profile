import React, { useEffect } from 'react';
import { X, Calendar, Clock, Bookmark, Share2 } from 'lucide-react';
import { JournalPost } from '../data/journalData';

interface JournalModalProps {
  post: JournalPost | null;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#343137]/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF8F3] rounded-3xl border border-[#343137]/15 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#343137]/10">
          <div className="flex items-center gap-2 text-xs text-[#343137]/60">
            <span>Creative Journal</span>
            <span>·</span>
            <span className="text-amber-800 font-medium">예시 게시물 (Draft)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#343137]/10 text-[#343137] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-6">
          {/* Metadata header */}
          <div className="flex items-center gap-2 text-xs text-[#343137]/65">
            <span className="font-semibold text-[#343137]">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#343137] leading-snug">
            {post.title}
          </h2>

          {/* Lead Summary */}
          <p className="text-sm sm:text-base text-[#343137]/80 font-medium p-4 rounded-2xl bg-white/70 border border-[#343137]/10 italic">
            &ldquo;{post.summary}&rdquo;
          </p>

          {/* Content Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#343137]/85 leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#343137]/10 flex flex-wrap items-center gap-2 text-xs text-[#343137]/60">
            <span className="font-medium text-[#343137]">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white px-2.5 py-1 rounded-md border border-[#343137]/10">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F8F5EF] border-t border-[#343137]/10 flex items-center justify-between text-xs text-[#343137]/60">
          <span>※ 본 글은 저널 레이아웃 확인용 예시 텍스트입니다.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#343137] text-white hover:bg-black font-medium cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
