import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Heart, Compass, Palette, Edit3, Check, RotateCcw } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [profileImg, setProfileImg] = useState<string>('');
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [tempUrl, setTempUrl] = useState('');

  const handleSavePhoto = () => {
    setProfileImg(tempUrl.trim());
    setIsEditingPhoto(false);
  };

  const handleResetPhoto = () => {
    setProfileImg('');
    setTempUrl('');
    setIsEditingPhoto(false);
  };

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#343137]/10 relative bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C8B792] mb-3">
            <span>SECTION 02</span>
            <span>·</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#343137] tracking-tight">
            The Creator Behind the Stories
          </h2>
        </div>

        {/* 2-Column Responsive Layout: Left Profile Placeholder, Right Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Replaceable Profile Placeholder Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-4/5 rounded-3xl bg-linear-to-b from-[#F8F5EF] via-[#EBCFD0]/20 to-[#D8CBE8]/30 border border-[#343137]/10 p-6 flex flex-col items-center justify-between shadow-xs overflow-hidden group">
              {/* Corner decor */}
              <div className="absolute top-4 left-4 text-xs font-serif-display italic text-[#343137]/40">
                YS. Studio
              </div>
              <div className="absolute top-4 right-4">
                <Sparkles className="w-4 h-4 text-[#C8B792]" />
              </div>

              {profileImg ? (
                <div className="w-full h-full relative rounded-2xl overflow-hidden mt-6 mb-2">
                  <img
                    src={profileImg}
                    alt="윤선 프로필"
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      alert('이미지를 불러오지 못했습니다. 올바른 URL인지 확인해 주세요.');
                      setProfileImg('');
                    }}
                  />
                </div>
              ) : (
                /* Elegant Stylized Placeholder (No fake real human photos) */
                <div className="my-auto flex flex-col items-center text-center p-6">
                  <div className="w-24 h-24 rounded-full bg-[#FFFFFF]/80 border border-[#343137]/15 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <Palette className="w-10 h-10 text-[#C8B792]" />
                  </div>
                  <span className="font-serif-display text-lg text-[#343137] font-semibold mb-1">
                    Creator Profile
                  </span>
                  <span className="text-xs text-[#343137]/60 leading-relaxed mb-4">
                    프로필 사진 등록 예정 영역
                  </span>
                  <div className="text-[11px] text-[#343137]/50 max-w-[200px] leading-tight px-3 py-1.5 rounded-lg bg-[#343137]/5 border border-[#343137]/10">
                    실제 인물 사진 대신 세련된 스튜디오 플레이스홀더를 제공합니다
                  </div>
                </div>
              )}

              {/* Bottom replace affordance */}
              <div className="w-full pt-4 border-t border-[#343137]/10 flex items-center justify-between text-xs text-[#343137]/70">
                <span className="font-mono text-[11px]">STUDIO PORTRAIT</span>
                <button
                  type="button"
                  onClick={() => setIsEditingPhoto(!isEditingPhoto)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white text-[#343137] border border-[#343137]/15 shadow-xs font-medium transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3 h-3 text-[#C8B792]" />
                  <span>{profileImg ? '사진 변경' : '사진 등록'}</span>
                </button>
              </div>
            </div>

            {/* Photo Edit Input Drawer */}
            {isEditingPhoto && (
              <div className="w-full max-w-sm mt-3 p-3.5 bg-white rounded-2xl border border-[#343137]/15 shadow-sm text-xs">
                <div className="font-medium text-[#343137] mb-1.5 flex items-center justify-between">
                  <span>프로필 이미지 URL 직접 입력</span>
                  {profileImg && (
                    <button
                      onClick={handleResetPhoto}
                      className="text-red-600 hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <RotateCcw className="w-3 h-3" /> 초기화
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-[#343137]/20 focus:outline-hidden focus:border-[#C8B792] bg-[#FAF8F3]"
                  />
                  <button
                    onClick={handleSavePhoto}
                    className="px-3 py-1.5 bg-[#343137] text-white rounded-lg hover:bg-black transition-colors flex items-center gap-1 shrink-0 font-medium cursor-pointer"
                  >
                    <Check className="w-3 h-3" /> 적용
                  </button>
                </div>
                <p className="text-[11px] text-[#343137]/50 mt-1.5">
                  나중에 개인 소장 사진 웹 링크를 넣으면 바로 교체됩니다.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343137] mb-8 leading-snug">
              &ldquo;안녕하세요. 저는 윤선입니다.&rdquo;
            </h3>

            {/* Core introduction paragraphs from prompt */}
            <div className="space-y-5 text-base sm:text-lg text-[#343137]/85 font-normal leading-relaxed">
              <p>
                상상을 이야기로 만들고, 이야기를 이미지와 영상으로 표현하는 <span className="font-semibold text-[#343137] underline decoration-[#D8CBE8] decoration-2 underline-offset-4">AI 크리에이터</span>입니다.
              </p>
              <p>
                새로운 것을 배우고 도전하는 시간을 좋아하며, AI를 활용해 따뜻한 동화부터 영화 같은 영상, 독창적인 디자인까지 다양한 창작 활동을 이어가고 있습니다.
              </p>
              <p className="font-medium text-[#343137] pt-1">
                오늘도 배우고, 상상하고, 만들어 갑니다.
              </p>
            </div>

            {/* Creator's 3 Pillars (Core Values) */}
            <div className="mt-12 pt-8 border-t border-[#343137]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-white/60 border border-[#343137]/10">
                <div className="w-8 h-8 rounded-lg bg-[#EBCFD0]/40 flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4 text-[#343137]" />
                </div>
                <h4 className="text-sm font-semibold text-[#343137] mb-1">Curiosity</h4>
                <p className="text-xs text-[#343137]/70 leading-normal">
                  새로운 도구와 기법에 주저 없이 뛰어드는 탐구심
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-[#343137]/10">
                <div className="w-8 h-8 rounded-lg bg-[#D8CBE8]/50 flex items-center justify-center mb-3">
                  <Heart className="w-4 h-4 text-[#343137]" />
                </div>
                <h4 className="text-sm font-semibold text-[#343137] mb-1">Heartful Story</h4>
                <p className="text-xs text-[#343137]/70 leading-normal">
                  기술의 차가움을 넘어 마음을 울리는 온기 있는 서사
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-[#343137]/10">
                <div className="w-8 h-8 rounded-lg bg-[#C8B792]/30 flex items-center justify-center mb-3">
                  <Palette className="w-4 h-4 text-[#343137]" />
                </div>
                <h4 className="text-sm font-semibold text-[#343137] mb-1">Aesthetic</h4>
                <p className="text-xs text-[#343137]/70 leading-normal">
                  정갈한 여백과 감각적인 색채로 빚어내는 비주얼
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
