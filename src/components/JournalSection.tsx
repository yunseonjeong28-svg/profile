import React, { useState } from 'react';
import { JOURNAL_POSTS, JournalPost } from '../data/journalData';
import { ArrowUpRight, BookOpen, AlertCircle } from 'lucide-react';
import { JournalModal } from './JournalModal';

export const JournalSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);

  return (
    <section id="journal" className="py-24 sm:py-32 border-t border-[#343137]/10 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C8B792] mb-3">
              <span>SECTION 05</span>
              <span>·</span>
              <span>CREATIVE JOURNAL</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#343137] tracking-tight">
              Creative Journal
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#343137]/75 max-w-xl">
              새로운 작품, AI 도구를 배우는 과정, 영상 제작 이야기, 여행과 일상에서 발견한 아이디어를 기록하는 공간
            </p>
          </div>

          {/* Sample Content Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-600/20 text-xs text-amber-900 self-start md:self-auto">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>초기 예시 콘텐츠입니다 (실제 작성한 글로 오인하지 않도록 안내)</span>
          </div>
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="p-7 sm:p-8 rounded-3xl bg-[#FAF8F3] border border-[#343137]/10 hover:border-[#343137]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
                <div className="flex items-center gap-2 text-xs text-[#343137]/65 mb-3">
                  <span className="font-semibold text-[#343137]">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[11px]">{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Post Title */}
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#343137] mb-3 group-hover:text-[#343137] leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt Summary */}
                <p className="text-xs sm:text-sm text-[#343137]/75 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Bottom footer with tags & Read More */}
              <div className="mt-6 pt-5 border-t border-[#343137]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#343137]/50 font-mono text-[11px]">
                  <span>#{post.tags[0]}</span>
                  {post.tags[1] && <span>#{post.tags[1]}</span>}
                </div>

                <div className="font-semibold text-[#343137] group-hover:underline underline-offset-4 flex items-center gap-1">
                  <span>읽기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <JournalModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};
