import React, { useState } from 'react';
import { Mail, Youtube, Instagram, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactEmail = 'yunseonjeong28@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-[#343137]/10 bg-[#FAF8F3] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C8B792] mb-3">
            <span>SECTION 06</span>
            <span>·</span>
            <span>CONTACT</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#343137] tracking-tight mb-4">
            Let's Create Something Beautiful.
          </h2>
          <p className="text-base sm:text-lg text-[#343137]/80">
            새로운 이야기와 창의적인 아이디어는 언제나 환영합니다.
          </p>
        </div>

        {/* 3 Channels Grid (Email active, YouTube/Instagram marked as disabled & '연결 예정') */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Channel */}
          <div className="p-6 rounded-3xl bg-white border border-[#343137]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D8CBE8]/40 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#343137]" />
              </div>
              <h3 className="text-base font-bold text-[#343137] mb-1">E-mail</h3>
              <p className="text-xs text-[#343137]/70 mb-4">
                작업 의뢰, 협업 제안 및 이야기 나누기
              </p>
              <div className="font-mono text-xs text-[#343137] select-all break-all bg-[#FAF8F3] p-2 rounded-lg border border-[#343137]/10 mb-4">
                {contactEmail}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={`mailto:${contactEmail}`}
                className="flex-1 py-2 text-center text-xs font-semibold text-white bg-[#343137] hover:bg-black rounded-xl transition-colors cursor-pointer"
              >
                메일 보내기
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 text-xs font-medium border border-[#343137]/20 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {copiedEmail ? '복사됨!' : '주소 복사'}
              </button>
            </div>
          </div>

          {/* YouTube Channel (Disabled & '연결 예정' per prompt instructions) */}
          <div className="p-6 rounded-3xl bg-white/70 border border-dashed border-[#343137]/20 shadow-none flex flex-col justify-between opacity-85">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#343137]/5 flex items-center justify-center mb-4 text-[#343137]/50">
                <Youtube className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-[#343137]/80">YouTube</h3>
                <span className="text-[11px] font-medium text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                  연결 예정
                </span>
              </div>
              <p className="text-xs text-[#343137]/60 mb-4">
                AI 애니메이션 및 숏폼 영상 채널 개설 준비 중입니다.
              </p>
            </div>

            <button
              disabled
              className="w-full py-2 text-center text-xs font-medium text-[#343137]/40 bg-[#343137]/5 rounded-xl cursor-not-allowed border border-[#343137]/10"
            >
              채널 개설 준비 중
            </button>
          </div>

          {/* Instagram Channel (Disabled & '연결 예정' per prompt instructions) */}
          <div className="p-6 rounded-3xl bg-white/70 border border-dashed border-[#343137]/20 shadow-none flex flex-col justify-between opacity-85">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#343137]/5 flex items-center justify-center mb-4 text-[#343137]/50">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-[#343137]/80">Instagram</h3>
                <span className="text-[11px] font-medium text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                  연결 예정
                </span>
              </div>
              <p className="text-xs text-[#343137]/60 mb-4">
                아트워크 피드 및 일상 비하인드 아카이브 준비 중입니다.
              </p>
            </div>

            <button
              disabled
              className="w-full py-2 text-center text-xs font-medium text-[#343137]/40 bg-[#343137]/5 rounded-xl cursor-not-allowed border border-[#343137]/10"
            >
              계정 연동 준비 중
            </button>
          </div>
        </div>

        {/* Message Send Box */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-[#343137]/10 shadow-sm">
          <h3 className="font-serif-display text-xl font-bold text-[#343137] mb-2">
            윤선에게 메시지 남기기
          </h3>
          <p className="text-xs text-[#343137]/65 mb-6">
            프로젝트 제안이나 응원의 한마디를 남겨주세요. 남겨주신 연락처로 답장드립니다.
          </p>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mb-2" />
              <h4 className="font-bold text-sm">메시지가 준비되었습니다!</h4>
              <p className="text-xs text-emerald-700 mt-1">
                작성하신 내용이 윤선의 이메일 클라이언트로 전달될 수 있도록 준비했습니다. 감사합니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#343137] font-medium mb-1">성함 / 닉네임</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#343137]/20 focus:outline-hidden focus:border-[#C8B792] bg-[#FAF8F3]"
                  />
                </div>
                <div>
                  <label className="block text-[#343137] font-medium mb-1">회신받으실 이메일</label>
                  <input
                    type="email"
                    required
                    placeholder="your-email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#343137]/20 focus:outline-hidden focus:border-[#C8B792] bg-[#FAF8F3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#343137] font-medium mb-1">내용</label>
                <textarea
                  required
                  rows={4}
                  placeholder="함께하고 싶은 프로젝트나 아이디어에 대해 자유롭게 들려주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#343137]/20 focus:outline-hidden focus:border-[#C8B792] bg-[#FAF8F3] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#343137]/50">
                  ※ 개인정보는 연락 목적 이외에는 사용되지 않습니다.
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#343137] text-white hover:bg-black font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>전송하기</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
