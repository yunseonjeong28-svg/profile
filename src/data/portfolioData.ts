export type ProjectCategory = 'ALL' | 'AI ANIMATION' | 'AI FILM' | 'TRAVEL' | 'DESIGN';
export type ProjectStatus = '기획 중' | '제작 중' | '공개 완료';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI ANIMATION' | 'AI FILM' | 'TRAVEL' | 'DESIGN';
  genre: string;
  description: string;
  fullStory: string;
  status: ProjectStatus;
  tools: string[];
  imageUrl?: string;
  videoUrl?: string;
  accentColor: string;
  releaseDate?: string;
}

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'hana-moonlight',
    title: '하나와 달빛 꽃씨',
    category: 'AI ANIMATION',
    genre: 'AI Animation',
    description: '따뜻한 동화적 상상력으로 만든 감성 애니메이션',
    fullStory: '달빛이 유난히 밝은 밤, 작은 정원에서 피어나는 신비로운 꽃씨와 어린 소녀 하나의 교감을 담은 감성 숏폼 애니메이션입니다. 서정적인 음악과 파스텔톤 AI 비주얼이 어우러져 마음에 은은한 위로를 전합니다.',
    status: '제작 중',
    tools: ['Google AI Studio', 'Midjourney', 'Runway Gen-3', 'DaVinci Resolve'],
    accentColor: '#D8CBE8',
    releaseDate: '2026 예정',
    videoUrl: '',
  },
  {
    id: 'mongsil-diary',
    title: '몽실이의 자취일기',
    category: 'AI ANIMATION',
    genre: 'AI Animation',
    description: '사랑스러운 캐릭터의 일상과 반전을 담은 애니메이션',
    fullStory: '서툴지만 씩씩한 자취 초보 강아지 캐릭터 몽실이의 좌충우돌 원룸 라이프를 그린 일상 코믹 힐링 애니메이션입니다. 작고 사소한 일상 속 뜻밖의 반전과 소소한 행복을 유쾌하게 풀어냅니다.',
    status: '기획 중',
    tools: ['Google Flow', 'AI 이미지 생성', 'CapCut', 'Procreate'],
    accentColor: '#EBCFD0',
    releaseDate: '2026 예정',
    videoUrl: '',
  },
  {
    id: 'star-planter',
    title: '별을 심는 아이',
    category: 'DESIGN',
    genre: 'Storybook',
    description: '감성적인 일러스트로 표현하는 창작 동화',
    fullStory: '빛을 잃어가는 밤하늘에 작은 별씨를 심어 은하수를 되살리는 아이의 여정을 담은 감성 동화책입니다. 한 장 한 장 수채화 질감의 AI 아트워크와 따뜻한 텍스트가 조화를 이루는 비주얼 북 프로젝트입니다.',
    status: '기획 중',
    tools: ['Google AI Studio', 'Midjourney', 'Figma', 'Photoshop'],
    accentColor: '#C8B792',
    releaseDate: '2026 예정',
    videoUrl: '',
  },
  {
    id: 'our-youth-again',
    title: '다시, 우리의 청춘',
    category: 'AI FILM',
    genre: 'AI Film / Music Video',
    description: '인생의 새로운 시작을 영화적으로 표현하는 감성 뮤직비디오',
    fullStory: '지나간 계절의 아쉬움을 뒤로하고 새로운 첫 발을 내딛는 이들을 향한 응원의 메시지입니다. 필름 카메라 감성의 질감과 서정적인 멜로디 라인을 결합하여 영화 같은 한 편의 시네마틱 뮤직비디오로 제작 중입니다.',
    status: '제작 중',
    tools: ['Google Flow', 'Kling AI', 'Premiere Pro', 'Logic Pro'],
    accentColor: '#D8CBE8',
    releaseDate: '2026 공개 예정',
    videoUrl: '',
  },
  {
    id: 'beautiful-world-travel',
    title: '아름다운 세계 여행',
    category: 'TRAVEL',
    genre: 'Travel',
    description: '스위스, 뉴질랜드, 호주의 풍경을 담은 AI 여행 영상',
    fullStory: '웅장한 알프스의 설경, 뉴질랜드의 드넓은 초원과 호수, 호주의 황금빛 해안선을 AI 시네마틱 연출 기법으로 재현한 감성 여행 다큐멘터리입니다. 스크린 너머로 바람과 자연의 숨결을 선사합니다.',
    status: '기획 중',
    tools: ['Google AI Studio', 'Luma Dream Machine', 'After Effects'],
    accentColor: '#C8B792',
    releaseDate: '2026 예정',
    videoUrl: '',
  },
  {
    id: 'gourmet-walk',
    title: '맛집산책',
    category: 'TRAVEL',
    genre: 'Lifestyle',
    description: '맛있는 공간과 일상의 즐거움을 소개하는 콘텐츠',
    fullStory: '정갈한 식사와 골목길 속 아담한 카페, 온기를 나누는 사람들의 표정을 큐레이션한 라이프스타일 비디오 시리즈입니다. 소박한 식탁 위에서 피어나는 작은 행복들을 기록합니다.',
    status: '기획 중',
    tools: ['Google Flow', 'AI 이미지 생성', 'Vrew', 'Premiere Pro'],
    accentColor: '#EBCFD0',
    releaseDate: '2026 예정',
    videoUrl: '',
  },
  {
    id: 'monster-night-store',
    title: '괴물전용 심야 편의점',
    category: 'DESIGN',
    genre: 'Branding',
    description: '독창적인 캐릭터와 상품을 활용한 판타지 브랜드 디자인',
    fullStory: '자정이 지나면 불이 켜지는 미지의 이계(異界) 편의점. 상상 속 괴물 손님들을 위한 이색적인 스낵, 음료 패키지 디자인과 위트 넘치는 캐릭터 브랜딩 세계관을 구축한 비주얼 디자인 프로젝트입니다.',
    status: '제작 중',
    tools: ['Google AI Studio', 'Midjourney', 'Illustrator', 'Photoshop'],
    accentColor: '#D8CBE8',
    releaseDate: '2026 예정',
    videoUrl: '',
  },
  {
    id: 'cheongsong-apple-poster',
    title: '청송사과축제 포스터 리디자인',
    category: 'DESIGN',
    genre: 'Graphic Design',
    description: '지역 축제의 매력을 현대적으로 표현한 포스터 디자인',
    fullStory: '청송의 맑은 공기와 햇살을 머금은 붉은 사과의 싱그러움을 미니멀하고 세련된 그래픽 타이포그래피로 재해석한 축제 비주얼 아이덴티티입니다. 전통적인 농산물 축제 이미지를 현대적인 감성으로 탈바꿈시켰습니다.',
    status: '공개 완료',
    tools: ['Google AI Studio', 'Figma', 'Illustrator'],
    accentColor: '#C8B792',
    releaseDate: '2025.10',
    videoUrl: '',
  },
];
