export interface JournalPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'journal-1',
    title: 'AI로 시작하는 스토리텔링: 상상을 프롬프트로 빚어내는 첫걸음',
    category: 'AI Workflow',
    date: '2026. 10. 18',
    readTime: '4 min read',
    summary: '단순한 명령어 입력을 넘어, 머릿속의 감성과 분위기를 시각 언어로 구체화하는 프롬프트 엔지니어링과 스토리보드 설계 과정.',
    content: [
      '처음 AI 이미지 생성 도구를 접했을 때 느꼈던 감정은 놀라움과 동시에 약간의 막막함이었습니다. "어떻게 해야 내가 마음속으로 느끼는 따스함과 아련함을 인공지능에게 오롯이 전달할 수 있을까?"',
      '수많은 시도 끝에 배운 것은, AI와의 대화는 기술적 파라미터뿐만 아니라 "문학적인 묘사"와 "빛과 질감에 대한 감각"이 핵심이라는 점이었습니다.',
      '이제는 머릿속에 떠오른 아이디어를 먼저 짧은 문장으로 적고, 색채와 질감, 카메라 앵글을 단계별로 덧붙이며 저만의 감성 세계를 구축해 나가고 있습니다.'
    ],
    tags: ['Prompt Design', 'Storytelling', 'Google AI Studio']
  },
  {
    id: 'journal-2',
    title: '동화책과 시네마틱 영상의 경계에서: 미드저니와 런웨이 실험 노트',
    category: 'Creative Process',
    date: '2026. 09. 24',
    readTime: '5 min read',
    summary: '정지된 수채화 일러스트에서 생동감 넘치는 숏폼 애니메이션으로 확장하는 과정에서 마주한 프레임 일관성 실험.',
    content: [
      '하나와 달빛 꽃씨 프로젝트를 시작하면서 가장 집중했던 부분은 캐릭터의 표정과 화풍의 일관성이었습니다.',
      '스틸 컷에서 아름다웠던 빛과 그림자가 움직임이 들어가는 순간 흐트러지지 않도록, 각 씬의 기준 프레임을 고정하고 카메라의 이동 궤적을 세밀하게 조율했습니다.',
      '기술은 빠르게 발전하지만, 화면 속에 남는 것은 결국 관객의 마음을 건드리는 작은 감정선이라는 것을 다시금 느낍니다.'
    ],
    tags: ['Animation', 'Runway', 'Visual Consistency']
  },
  {
    id: 'journal-3',
    title: '뉴질랜드의 빛과 스위스의 설경: AI 여행 다큐멘터리 제작기',
    category: 'Travel & Film',
    date: '2026. 08. 12',
    readTime: '3 min read',
    summary: '직접 가보지 못한 곳도, 가보았던 그리운 장소도 새롭게 숨 쉬게 만드는 시네마틱 트래블 영상 제작기.',
    content: [
      '여행이란 공간의 이동이기도 하지만, 그 순간 우리가 느꼈던 공기와 빛의 온도를 기억하는 행위이기도 합니다.',
      '아름다운 세계 여행 프로젝트는 각 나라의 고유한 자연광과 대기의 질감을 화면에 담기 위해 수십 번의 빛 시뮬레이션을 거쳤습니다.',
      '여행을 사랑하는 마음이 AI라는 도구를 만나 어디로든 떠날 수 있는 창작의 날개가 되었습니다.'
    ],
    tags: ['Travel', 'Cinematography', 'Luma AI']
  },
  {
    id: 'journal-4',
    title: '창작의 즐거움: 매일 조금씩 배우고 기록하는 크리에이티브 루틴',
    category: 'Creator Life',
    date: '2026. 07. 05',
    readTime: '3 min read',
    summary: '완벽함보다는 꾸준함을, 결과물보다는 매일 상상하는 과정 그 자체를 사랑하는 윤선의 일상 스케치.',
    content: [
      '어떤 날은 원하는 이미지가 단 한 장도 나오지 않아 지치기도 하고, 어떤 날은 우연히 발견한 색감 하나에 온종일 설레기도 합니다.',
      '중요한 것은 멈추지 않고 매일 작은 호기심을 노트에 적어보는 것입니다. 그 작은 메모들이 모여 내일의 새로운 동화가 되고 영상이 됩니다.',
      '오늘도 제 스튜디오의 불을 밝히며, 또 다른 이야기를 그려나갑니다.'
    ],
    tags: ['Mindset', 'Creative Routine', 'Growth']
  }
];
