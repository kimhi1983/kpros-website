import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Category } from './types';

export type Lang = 'ko' | 'en' | 'zh';
export const LANGS: { code: Lang; label: string; html: string }[] = [
  { code: 'ko', label: 'KO', html: 'ko' },
  { code: 'en', label: 'EN', html: 'en' },
  { code: 'zh', label: '中文', html: 'zh-CN' },
];

type Dict = {
  nav: { business: string; products: string; finished: string; infra: string; contact: string; cta: string };
  hero: { badge: string; title: string[]; body: string; cta1: string; cta2: string; statLabel: string; imgAlt1: string; imgAlt2: string };
  stats: { founded: string; items: string; partners: string; rspo: string };
  business: {
    eyebrow: string; title: string; body: string;
    items: { title: string; body: string; bullets: string[] }[];
  };
  products: {
    eyebrow: string; title: string; body: string; search: string; all: string; viewAll: string; showLess: string; empty: string;
    categories: Record<Exclude<Category, 'All'>, string>;
  };
  finished: { eyebrow: string; title: string; body: string; cta: string; steps: { title: string; body: string }[]; imgAlt: string };
  partners: { eyebrow: string; title: string; more: string };
  infra: { eyebrow: string; title: string; body: string; hazardous: string; hazardousAddr: string; general: string; generalAddr: string; imgAlt: string };
  coching: { eyebrow: string; title: string; body: string; cta: string };
  contact: {
    eyebrow: string; title: string; body: string; company: string; name: string; email: string; type: string;
    types: string[]; message: string; send: string; noEmail: string;
  };
  footer: { privacy: string; rights: string };
};

const ko: Dict = {
  nav: { business: '사업영역', products: '원료 카탈로그', finished: '완제품 제작', infra: '인프라', contact: '문의', cta: '견적·샘플 문의' },
  hero: {
    badge: 'COSMETIC INGREDIENTS & FINISHED GOODS · SINCE 2022',
    title: ['원료부터 완제품까지,', '화장품 공급의 모든 단계를 함께합니다'],
    body: '케이프로스는 화장품 원료를 직접 제조·수입·유통하고, 완제품 제작생산까지 한 번에 지원하는 B2B 파트너입니다. 글로벌 공급사 네트워크와 자체 창고 운영으로 안정적인 공급을 보장합니다.',
    cta1: '원료 카탈로그 보기', cta2: '완제품 제작 상담', statLabel: '원료 제조 · 수입 · 완제품',
    imgAlt1: '실험용 플라스크 속 식물 원료', imgAlt2: '화이트 드로퍼 보틀 완제품',
  },
  stats: { founded: '설립 · 경기 평택/화성', items: '취급 원료 품목', partners: '글로벌 공급 파트너 브랜드', rspo: '지속가능 팜오일 유통 라이선스' },
  business: {
    eyebrow: 'BUSINESS', title: '세 가지 축으로 완성하는 공급 체계',
    body: '제조·수입·완제품이 한 회사 안에서 연결되어, 원료 선정부터 제품 출시까지 중간 단계 없이 진행됩니다.',
    items: [
      { title: '원료 제조', body: '고객 처방에 맞춘 식물 추출수·발효수를 직접 생산합니다. 알로에, 라벤더, 캐모마일, 장미 등 원하는 원물로 소량부터 대량까지.', bullets: ['Custom Plant Water', 'Ferment Water (Galactomyces 등)', '저자극·보습 특화 원료 개발'] },
      { title: '원료 수입·유통', body: 'Acid Chem, Nouryon, LANXESS, KAO, DAICEL 등 글로벌 제조사의 원료를 국내 공식 공급합니다. 위험물 창고를 포함한 자체 물류로 리드타임을 줄입니다.', bullets: ['글리세린·지방산·에몰리언트', '계면활성제·방부제·기능성 첨가제', '규제 서류(MSDS·COA·NMPA) 지원'] },
      { title: '완제품 제작생산', body: '원료를 가장 잘 아는 공급사가 처방부터 생산까지 맡습니다. 기획 단계에서 원료 원가를 함께 설계해 합리적인 제품을 만듭니다.', bullets: ['처방 개발 · 샘플 · 안정성 테스트', '스킨케어 · 바디 · 헤어 제형', '인허가·수출 서류 대응'] },
    ],
  },
  products: {
    eyebrow: 'INGREDIENTS', title: '원료 카탈로그',
    body: '54개 품목, 7개 카테고리. INCI명과 제조사를 함께 표기합니다. 전체 사양은 coching.club에서 검색할 수 있습니다.',
    search: '품명 · INCI · 제조사 검색', all: '전체', viewAll: '품목 전체 보기', showLess: '접기', empty: '검색 결과가 없습니다.',
    categories: { 'Custom Base': '맞춤 베이스', 'Active Ingredients': '기능성 원료', 'Emollients & Oils': '에몰리언트·오일', 'Surfactants': '계면활성제', 'Preservatives': '방부제', 'Specialty Poly': '특수 폴리머', 'Functional Additives': '기능성 첨가제' },
  },
  finished: {
    eyebrow: 'FINISHED GOODS', title: '완제품 제작생산',
    body: '원료 공급사가 직접 처방하고 생산합니다. 원료 원가·수급 리스크를 기획 단계에서 반영해 출시 후에도 안정적으로 공급되는 제품을 만듭니다.',
    cta: '제작 상담 신청',
    steps: [
      { title: '기획 · 원료 설계', body: '컨셉과 목표 원가에 맞춰 원료 구성 제안' },
      { title: '처방 · 샘플', body: '처방 개발 후 샘플 제공, 수정 반복' },
      { title: '테스트 · 인허가', body: '안정성·안전성 시험, 국내외 등록 서류' },
      { title: '생산 · 출하', body: '벌크·완제품 생산, 수출 서류까지 대응' },
    ],
    imgAlt: '완제품 충전 라인',
  },
  partners: { eyebrow: 'PARTNERS', title: '공급 파트너', more: '외 다수' },
  infra: {
    eyebrow: 'INFRASTRUCTURE', title: '자체 창고 2개소 직접 운영',
    body: '위험물 창고와 일반 창고를 직접 운영해 안전한 보관과 빠른 출하를 보장합니다.',
    hazardous: '위험물 창고', hazardousAddr: '경기 평택시 청북읍 161-23', general: '일반 창고', generalAddr: '경기 화성시 석포리 655-34', imgAlt: '창고 랙',
  },
  coching: { eyebrow: 'COCHING CLUB', title: '원료 검색부터 처방 설계까지, 케이프로스가 만든 B2B 플랫폼', body: 'INCI·규제·공급사 정보를 한 곳에서 검색하고, MyLab Studio로 처방을 설계하세요.', cta: 'coching.club 바로가기' },
  contact: {
    eyebrow: 'CONTACT', title: '견적·샘플·제작 문의',
    body: '원료 견적, 샘플 요청, 완제품 제작 상담 모두 한 창구에서 받습니다. 영업일 기준 1일 내 회신합니다.',
    company: '회사명', name: '담당자', email: '이메일', type: '문의 유형', types: ['원료 견적', '샘플 요청', '완제품 제작 상담', '기타'], message: '내용', send: '문의 보내기',
    noEmail: '문의 수신 이메일이 아직 설정되지 않았습니다 (site.config.ts).',
  },
  footer: { privacy: '개인정보처리방침', rights: 'All rights reserved.' },
};

const en: Dict = {
  nav: { business: 'Business', products: 'Ingredients', finished: 'Finished Goods', infra: 'Infrastructure', contact: 'Contact', cta: 'Request a quote' },
  hero: {
    badge: 'COSMETIC INGREDIENTS & FINISHED GOODS · SINCE 2022',
    title: ['From raw ingredients to finished products,', 'one partner for every stage of cosmetic supply'],
    body: 'KPROS manufactures, imports and distributes cosmetic ingredients and produces finished goods under one roof. A global supplier network and owned warehousing keep your supply stable.',
    cta1: 'Browse ingredients', cta2: 'Talk about finished goods', statLabel: 'Manufacturing · Import · Finished goods',
    imgAlt1: 'Botanical ingredient in a lab flask', imgAlt2: 'White dropper bottle finished product',
  },
  stats: { founded: 'Founded · Pyeongtaek / Hwaseong, Korea', items: 'ingredients in catalogue', partners: 'global supplier brands', rspo: 'sustainable palm oil distributor licence' },
  business: {
    eyebrow: 'BUSINESS', title: 'Three pillars, one supply system',
    body: 'Manufacturing, importing and finished goods are connected inside one company, so projects move from ingredient selection to launch without intermediaries.',
    items: [
      { title: 'Ingredient manufacturing', body: 'We produce custom plant waters and ferment waters to your formula — aloe, lavender, chamomile, rose and more, from small lots to bulk.', bullets: ['Custom Plant Water', 'Ferment Water (Galactomyces etc.)', 'Low-irritation, moisturising ingredient development'] },
      { title: 'Import & distribution', body: 'Official Korean supply of ingredients from Acid Chem, Nouryon, LANXESS, KAO, DAICEL and more. Owned logistics, including a hazardous-goods warehouse, shorten lead times.', bullets: ['Glycerine, fatty acids, emollients', 'Surfactants, preservatives, functional additives', 'Regulatory documents (MSDS, COA, NMPA)'] },
      { title: 'Finished goods production', body: 'The supplier that knows the ingredients best handles formulation through production. Ingredient costs are designed in at the planning stage.', bullets: ['Formulation · sampling · stability testing', 'Skincare · body · hair formats', 'Registration and export documentation'] },
    ],
  },
  products: {
    eyebrow: 'INGREDIENTS', title: 'Ingredient catalogue',
    body: '54 items in 7 categories, each with INCI name and manufacturer. Full specifications are searchable on coching.club.',
    search: 'Search by name, INCI or manufacturer', all: 'All', viewAll: 'View all items', showLess: 'Show less', empty: 'No results.',
    categories: { 'Custom Base': 'Custom Base', 'Active Ingredients': 'Active Ingredients', 'Emollients & Oils': 'Emollients & Oils', 'Surfactants': 'Surfactants', 'Preservatives': 'Preservatives', 'Specialty Poly': 'Specialty Polymers', 'Functional Additives': 'Functional Additives' },
  },
  finished: {
    eyebrow: 'FINISHED GOODS', title: 'Finished goods production',
    body: 'Formulated and produced by the ingredient supplier itself. Cost and sourcing risk are built into the plan, so products stay supplied after launch.',
    cta: 'Request a consultation',
    steps: [
      { title: 'Planning · ingredient design', body: 'Ingredient mix proposed to concept and target cost' },
      { title: 'Formulation · samples', body: 'Samples after formulation, iterated with you' },
      { title: 'Testing · registration', body: 'Stability and safety tests, domestic and export filings' },
      { title: 'Production · shipping', body: 'Bulk and finished goods, export paperwork included' },
    ],
    imgAlt: 'Filling line for finished goods',
  },
  partners: { eyebrow: 'PARTNERS', title: 'Supply partners', more: 'and more' },
  infra: {
    eyebrow: 'INFRASTRUCTURE', title: 'Two owned warehouses',
    body: 'We run a hazardous-goods warehouse and a general warehouse ourselves for safe storage and fast dispatch.',
    hazardous: 'Hazardous-goods warehouse', hazardousAddr: '161-23 Cheongbuk-eup, Pyeongtaek, Gyeonggi', general: 'General warehouse', generalAddr: '655-34 Seokpo-ri, Hwaseong, Gyeonggi', imgAlt: 'Warehouse racking',
  },
  coching: { eyebrow: 'COCHING CLUB', title: 'From ingredient search to formulation — the B2B platform built by KPROS', body: 'Search INCI, regulatory and supplier data in one place, and design formulas in MyLab Studio.', cta: 'Open coching.club' },
  contact: {
    eyebrow: 'CONTACT', title: 'Quotes, samples and production',
    body: 'One channel for ingredient quotes, sample requests and finished-goods consultations. We reply within one business day.',
    company: 'Company', name: 'Contact name', email: 'Email', type: 'Inquiry type', types: ['Ingredient quote', 'Sample request', 'Finished goods consultation', 'Other'], message: 'Message', send: 'Send inquiry',
    noEmail: 'Inquiry email is not configured yet (site.config.ts).',
  },
  footer: { privacy: 'Privacy policy', rights: 'All rights reserved.' },
};

const zh: Dict = {
  nav: { business: '业务领域', products: '原料目录', finished: '成品代工', infra: '基础设施', contact: '联系我们', cta: '询价·索样' },
  hero: {
    badge: '化妆品原料与成品 · 创立于 2022',
    title: ['从原料到成品，', '覆盖化妆品供应的每一个环节'],
    body: 'KPROS 自主生产、进口并分销化妆品原料，并提供成品生产服务。依托全球供应商网络与自有仓储，保障稳定供应。',
    cta1: '查看原料目录', cta2: '成品生产咨询', statLabel: '原料生产 · 进口 · 成品',
    imgAlt1: '实验烧瓶中的植物原料', imgAlt2: '白色滴管瓶成品',
  },
  stats: { founded: '成立 · 韩国京畿道平泽/华城', items: '原料品项', partners: '全球供应合作品牌', rspo: '可持续棕榈油分销许可' },
  business: {
    eyebrow: 'BUSINESS', title: '三大支柱构建完整供应体系',
    body: '生产、进口与成品在同一家公司内打通，从原料选型到产品上市无需中间环节。',
    items: [
      { title: '原料生产', body: '按客户配方定制生产植物提取水与发酵水。芦荟、薰衣草、洋甘菊、玫瑰等原料，小批量至大批量均可。', bullets: ['Custom Plant Water', 'Ferment Water（Galactomyces 等）', '低刺激·保湿功能原料开发'] },
      { title: '原料进口与分销', body: '官方供应 Acid Chem、Nouryon、LANXESS、KAO、DAICEL 等全球厂商原料。自有物流（含危险品仓库）缩短交付周期。', bullets: ['甘油·脂肪酸·润肤剂', '表面活性剂·防腐剂·功能添加剂', '法规文件支持（MSDS·COA·NMPA）'] },
      { title: '成品生产', body: '最了解原料的供应商负责从配方到生产。在企划阶段即规划原料成本，打造性价比合理的产品。', bullets: ['配方开发 · 打样 · 稳定性测试', '护肤 · 身体 · 头发剂型', '注册备案与出口文件'] },
    ],
  },
  products: {
    eyebrow: 'INGREDIENTS', title: '原料目录',
    body: '54 个品项，7 个类别，均标注 INCI 名称与生产商。完整规格可在 coching.club 检索。',
    search: '按品名 · INCI · 生产商搜索', all: '全部', viewAll: '查看全部品项', showLess: '收起', empty: '没有匹配结果。',
    categories: { 'Custom Base': '定制基础原料', 'Active Ingredients': '活性成分', 'Emollients & Oils': '润肤剂·油脂', 'Surfactants': '表面活性剂', 'Preservatives': '防腐剂', 'Specialty Poly': '特种聚合物', 'Functional Additives': '功能添加剂' },
  },
  finished: {
    eyebrow: 'FINISHED GOODS', title: '成品生产',
    body: '由原料供应商直接配方与生产。在企划阶段即纳入原料成本与供应风险，确保上市后持续稳定供货。',
    cta: '申请生产咨询',
    steps: [
      { title: '企划 · 原料设计', body: '按概念与目标成本提出原料组合方案' },
      { title: '配方 · 打样', body: '配方开发后提供样品，反复调整' },
      { title: '测试 · 注册', body: '稳定性与安全性试验，国内外注册文件' },
      { title: '生产 · 出货', body: '料体与成品生产，含出口文件' },
    ],
    imgAlt: '成品灌装线',
  },
  partners: { eyebrow: 'PARTNERS', title: '供应合作伙伴', more: '等' },
  infra: {
    eyebrow: 'INFRASTRUCTURE', title: '两处自有仓库',
    body: '自主运营危险品仓库与普通仓库，保障安全存储与快速出货。',
    hazardous: '危险品仓库', hazardousAddr: '京畿道平泽市青北邑 161-23', general: '普通仓库', generalAddr: '京畿道华城市石浦里 655-34', imgAlt: '仓库货架',
  },
  coching: { eyebrow: 'COCHING CLUB', title: '从原料检索到配方设计，KPROS 打造的 B2B 平台', body: '一站式检索 INCI、法规与供应商信息，并用 MyLab Studio 设计配方。', cta: '前往 coching.club' },
  contact: {
    eyebrow: 'CONTACT', title: '询价 · 索样 · 生产咨询',
    body: '原料询价、索样、成品生产咨询统一受理，1 个工作日内回复。',
    company: '公司名称', name: '联系人', email: '邮箱', type: '咨询类型', types: ['原料询价', '索样', '成品生产咨询', '其他'], message: '内容', send: '发送咨询',
    noEmail: '尚未配置咨询接收邮箱（site.config.ts）。',
  },
  footer: { privacy: '隐私政策', rights: 'All rights reserved.' },
};

export const DICT: Record<Lang, Dict> = { ko, en, zh };

const STORAGE_KEY = 'kpros-lang';

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && saved in DICT) return saved;
  } catch {
    /* ignore */
  }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'ko').toLowerCase();
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('en')) return 'en';
  return 'ko';
}

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: 'ko', t: ko, setLang: () => {} });

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => detectLang());
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  };
  useEffect(() => {
    document.documentElement.lang = LANGS.find((x) => x.code === lang)?.html ?? 'ko';
  }, [lang]);
  const value = useMemo(() => ({ lang, t: DICT[lang], setLang }), [lang]);
  return React.createElement(LangContext.Provider, { value }, children);
};

export const useLang = () => useContext(LangContext);
