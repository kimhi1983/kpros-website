import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Category } from './types';

export type Lang = 'ko' | 'en' | 'zh';
export const LANGS: { code: Lang; label: string; html: string }[] = [
  { code: 'ko', label: 'KO', html: 'ko' },
  { code: 'en', label: 'EN', html: 'en' },
  { code: 'zh', label: '中文', html: 'zh-CN' },
];

type Dict = {
  nav: { business: string; products: string; finished: string; lab: string; infra: string; coching: string; contact: string; cta: string };
  hero: { badge: string; title: string[]; body: string; cta1: string; cta2: string; imgAlt1: string; imgAlt2: string; imgAlt3: string };
  strip: { label: string };
  business: {
    eyebrow: string; title: string; body: string;
    items: { title: string; body: string; bullets: string[] }[];
  };
  products: {
    eyebrow: string; title: string; body: string; search: string; all: string; viewAll: string; showLess: string; empty: string;
    categories: Record<Exclude<Category, 'All'>, string>; packing: string;
  };
  finished: { eyebrow: string; title: string; body: string; cta: string; steps: { title: string; body: string }[]; imgAlt: string };
  partners: { eyebrow: string; title: string };
  support: { eyebrow: string; title: string; body: string; items: { title: string; body: string }[] };
  lab: { eyebrow: string; title: string; body: string; imgAlt: string; items: { title: string; body: string }[]; cta: string };
  coching: {
    eyebrow: string; title: string; body: string; cta: string; ctaCn: string; imgAlt1: string; imgAlt2: string;
    features: { title: string; body: string }[]; note: string;
  };
  contact: {
    eyebrow: string; title: string; body: string; company: string; name: string; email: string; type: string;
    types: string[]; message: string; send: string; noEmail: string;
  };
  footer: { privacy: string; rights: string };
};

const ko: Dict = {
  nav: { business: '사업영역', products: '화장품 원료', finished: '화장품 완제품', lab: '연구소', infra: '규제·품질 지원', coching: 'COCHING CLUB', contact: '문의', cta: '견적·샘플 문의' },
  strip: { label: '취급 화장품 원료 카테고리' },
  lab: {
    eyebrow: 'R&D LAB', title: '자체 연구소',
    body: '화장품 원료 공급과 완제품 제작을 뒷받침하는 자체 연구소를 운영합니다. 원료 평가부터 처방, 샘플, 안정성 확인까지 한곳에서 진행합니다.',
    imgAlt: '연구소 처방 작업대',
    items: [
      { title: '원료 평가', body: '신규 원료의 물성·용해성·배합 적합성을 직접 확인하고 용도별 적용 가이드를 제공합니다.' },
      { title: '처방 개발', body: '색조·기초·선케어·바디·헤어·홈케어까지 제형별 처방을 개발하고 고객 요구에 맞춰 수정합니다.' },
      { title: '샘플 제작', body: '검토용 샘플을 제작해 제공하고, 피드백을 반영해 반복 보완합니다.' },
      { title: '안정성 확인', body: '온도·시간 조건에 따른 안정성과 상용성을 확인해 생산 전 리스크를 줄입니다.' },
      { title: '맞춤 추출물 · 추출수', body: '고객이 원하는 원물과 컨셉으로 식물 추출물과 추출수를 소량부터 제조합니다.' },
      { title: '규제 검토', body: '처방에 들어가는 성분의 국가별 사용 제한을 확인해 등록 단계의 문제를 미리 줄입니다.' },
    ],
    cta: '연구소 상담 문의',
  },
  support: {
    eyebrow: 'REGULATORY & QUALITY', title: '규제·품질 서류까지 함께 지원합니다',
    body: '화장품 원료 공급에서 끝나지 않습니다. 등록·심사·수출에 필요한 서류와 검토 과정을 같이 챙깁니다.',
    items: [
      { title: '규제 서류 제공', body: 'MSDS · COA · TDS · 원료 조성 정보 등 제품 등록과 심사에 필요한 서류를 제조사로부터 확보해 제공합니다.' },
      { title: '샘플 · 소량 테스트', body: '처방 검토용 샘플과 소량 구매를 지원해 본 주문 전에 적합성을 확인할 수 있습니다.' },
      { title: '국가별 규제 확인', body: 'INCI 기준으로 한국·EU·미국·중국 등 주요 시장의 사용 제한 여부를 coching.club에서 조회할 수 있습니다.' },
      { title: 'RSPO 인증 원료', body: 'RSPO 회원사로서 Distributor License를 보유하고 있어, 팜 유래 원료를 지속가능 인증 기준으로 공급합니다.' },
    ],
  },
  hero: {
    badge: 'COSMETIC INGREDIENTS & FINISHED GOODS · SINCE 2022',
    title: ['화장품 원료부터', '화장품 완제품까지,', '공급의 모든 단계를 함께합니다'],
    body: '케이프로스는 화장품 원료를 직접 제조·수입·유통하고, 완제품 제작생산까지 한 번에 지원하는 B2B 파트너입니다. 글로벌 공급사 네트워크로 안정적인 공급을 보장합니다.',
    cta1: '화장품 원료 카탈로그 보기', cta2: '화장품 완제품 제작 상담',     imgAlt1: '실험용 플라스크 속 식물 원료', imgAlt2: '화이트 드로퍼 보틀 완제품', imgAlt3: '스포이드에서 떨어지는 오일 원료',
  },
  business: {
    eyebrow: 'BUSINESS', title: '세 가지 축으로 완성하는 공급 체계',
    body: '화장품 원료 제조·수입과 화장품 완제품 생산이 한 회사 안에서 연결되어, 원료 선정부터 제품 출시까지 중간 단계 없이 진행됩니다.',
    items: [
      { title: '화장품 원료 제조', body: '고객 처방에 맞춘 식물 추출수·발효수를 직접 생산합니다. 알로에, 라벤더, 캐모마일, 장미 등 원하는 원물로 소량부터 대량까지.', bullets: ['Custom Plant Water', 'Ferment Water (Galactomyces 등)', '저자극·보습 특화 원료 개발'] },
      { title: '화장품 원료 수입·유통', body: 'Acid Chem, Nouryon, LANXESS, KAO, DAICEL 등 글로벌 제조사의 원료를 수입·유통합니다. 규제 서류와 샘플을 함께 지원합니다.', bullets: ['글리세린·지방산·에몰리언트', '계면활성제·방부제·기능성 첨가제', '규제 서류(MSDS·COA·NMPA) 지원'] },
      { title: '화장품 완제품 제작생산', body: '화장품 원료를 가장 잘 아는 공급사가 처방부터 생산까지 맡습니다. 기획 단계에서 원료 원가를 함께 설계해 합리적인 제품을 만듭니다.', bullets: ['처방 개발 · 샘플 · 안정성 테스트', '색조 · 기초 · 선케어 · 바디 · 헤어 · 홈케어까지 다양한 제형', '인허가·수출 서류 대응'] },
    ],
  },
  products: {
    eyebrow: 'INGREDIENTS', title: '화장품 원료 카탈로그',
    body: '품명 · INCI · 브랜드로 검색하고 카테고리별로 확인할 수 있습니다.',
    search: '품명 · INCI · 제조사 검색', all: '전체', viewAll: '품목 전체 보기', showLess: '접기', empty: '검색 결과가 없습니다.',
    categories: { 'Custom Base': '맞춤 베이스', 'Active Ingredients': '기능성 원료', 'Emollients & Oils': '에몰리언트·오일·보습제', 'Surfactants': '계면활성제', 'Preservatives': '방부제', 'UV Filters': '자외선 차단제', 'Specialty Poly': '폴리머·점증제', 'Pigments & Powders': '색소·파우더', 'Beads & Capsules': '비드·캡슐', 'Functional Additives': '기능성 첨가제' }, packing: '포장단위',
  },
  finished: {
    eyebrow: 'FINISHED GOODS', title: '화장품 완제품 제작생산',
    body: '색조부터 기초·선케어·바디·헤어·홈케어까지, 화장품 원료 공급사가 직접 처방하고 생산합니다. 원료 원가·수급 리스크를 기획 단계에서 반영합니다.',
    cta: '제작 상담 신청',
    steps: [
      { title: '기획 · 원료 설계', body: '컨셉과 목표 원가에 맞춰 원료 구성 제안' },
      { title: '처방 · 샘플', body: '처방 개발 후 샘플 제공, 수정 반복' },
      { title: '테스트 · 인허가', body: '안정성·안전성 시험, 국내외 등록 서류' },
      { title: '생산 · 출하', body: '벌크·완제품 생산, 수출 서류까지 대응' },
    ],
    imgAlt: '완제품 충전 라인',
  },
  partners: { eyebrow: 'BRANDS', title: '취급 브랜드' },
  coching: {
    eyebrow: 'COCHING CLUB', title: '원료 검색부터 처방 설계까지, 화장품 원료 실무를 위한 B2B 플랫폼',
    body: '화장품 원료를 다루는 실무자가 매일 쓰는 도구를 하나로 모았습니다. 원료 검색, 국가별 규제 확인, 처방 설계, 시세 확인까지 coching.club에서 처리합니다.',
    cta: 'coching.club 바로가기', ctaCn: '中文版 cn.coching.club',
    imgAlt1: 'COCHING 원료 시세·시장 동향 화면', imgAlt2: 'COCHING 원료 검색 화면',
    features: [
      { title: '원료 마스터 검색', body: '원료명·한글명·INCI·제조사·공급사로 1만 2천 건 이상의 원료를 검색하고, 성분 DB와 완제품 검색으로 바로 이어집니다.' },
      { title: '국가별 규제 데이터베이스', body: '한국·EU·미국·일본·중국·ASEAN·러시아·대만 8개 권역의 사용 제한을 INCI 기준으로 확인합니다. 근거 출처가 있는 항목만 표시합니다.' },
      { title: 'MyLab Studio 처방 설계', body: '빈 처방, 제형 템플릿, 기존 처방 복제에서 시작해 성분을 직접 골라 처방을 설계합니다. 성분을 고르면 규제·배합 합계·EWG 등급이 실시간으로 검증됩니다.' },
      { title: '시세 · 시장 동향 · 공급사 연결', body: '팜오일·지방산·석유화학 원료 시세와 환율, 주간 시장 리포트를 제공하고 공급사에 샘플·자료를 요청할 수 있습니다.' },
    ],
    note: '한국어 · English · 中文 지원. 중국 사용자는 cn.coching.club에서 동일한 계정으로 이용할 수 있습니다.',
  },
  contact: {
    eyebrow: 'CONTACT', title: '견적·샘플·제작 문의',
    body: '화장품 원료 견적, 샘플 요청, 화장품 완제품 제작 상담 모두 한 창구에서 받습니다. 영업일 기준 1일 내 회신합니다.',
    company: '회사명', name: '담당자', email: '이메일', type: '문의 유형', types: ['화장품 원료 견적', '샘플 요청', '화장품 완제품 제작 상담', '기타'], message: '내용', send: '문의 보내기',
    noEmail: '문의 수신 이메일이 아직 설정되지 않았습니다 (site.config.ts).',
  },
  footer: { privacy: '개인정보처리방침', rights: 'All rights reserved.' },
};

const en: Dict = {
  nav: { business: 'Business', products: 'Cosmetic Ingredients', finished: 'Cosmetic Finished Goods', lab: 'R&D Lab', infra: 'Regulatory & Quality', coching: 'COCHING CLUB', contact: 'Contact', cta: 'Request a quote' },
  strip: { label: 'Cosmetic ingredient categories' },
  lab: {
    eyebrow: 'R&D LAB', title: 'In-house laboratory',
    body: 'Our in-house lab supports ingredient supply and finished goods, from ingredient evaluation to formulation, sampling and stability checks.',
    imgAlt: 'Formulation bench in the laboratory',
    items: [
      { title: 'Ingredient evaluation', body: 'Properties, solubility and compatibility of new ingredients are checked in-house, with application guidance by use.' },
      { title: 'Formulation', body: 'Formulas for color cosmetics, skincare, sun care, body, hair and home care, adjusted to each customer’s brief.' },
      { title: 'Sampling', body: 'Review samples are prepared and refined through feedback rounds.' },
      { title: 'Stability checks', body: 'Stability and compatibility under temperature and time conditions, to reduce risk before production.' },
      { title: 'Custom extracts and plant waters', body: 'Botanical extracts and plant waters made to the customer’s material and concept, from small lots.' },
      { title: 'Regulatory review', body: 'Usage limits of each ingredient are checked by market to avoid issues at registration.' },
    ],
    cta: 'Contact the lab',
  },
  support: {
    eyebrow: 'REGULATORY & QUALITY', title: 'Documentation and compliance, handled with you',
    body: 'Supply does not stop at delivery. We help with the documents and checks needed for registration, review and export.',
    items: [
      { title: 'Regulatory documents', body: 'MSDS, COA, TDS and composition data obtained from manufacturers for product registration and review.' },
      { title: 'Samples and small lots', body: 'Formulation samples and small-quantity purchases so you can confirm fit before a full order.' },
      { title: 'Market-by-market checks', body: 'Check usage restrictions by INCI name for Korea, the EU, the US, China and more on coching.club.' },
      { title: 'RSPO-certified supply', body: 'As an RSPO member holding a Distributor License, we supply palm-derived ingredients under sustainable certification.' },
    ],
  },
  hero: {
    badge: 'COSMETIC INGREDIENTS & FINISHED GOODS · SINCE 2022',
    title: ['From cosmetic ingredients', 'to cosmetic finished goods,', 'one partner for every stage'],
    body: 'KPROS manufactures, imports and distributes cosmetic ingredients and produces finished goods under one roof. A global supplier network keeps your supply stable.',
    cta1: 'Browse cosmetic ingredients', cta2: 'Cosmetic finished goods inquiry',     imgAlt1: 'Botanical ingredient in a lab flask', imgAlt2: 'White dropper bottle finished product', imgAlt3: 'Oil ingredient dripping from a pipette',
  },
  business: {
    eyebrow: 'BUSINESS', title: 'Three pillars, one supply system',
    body: 'Manufacturing, importing and finished goods under one roof, from ingredient selection to launch with no intermediaries.',
    items: [
      { title: 'Cosmetic ingredient manufacturing', body: 'We produce custom plant waters and ferment waters to your formula — aloe, lavender, chamomile, rose and more, from small lots to bulk.', bullets: ['Custom Plant Water', 'Ferment Water (Galactomyces etc.)', 'Low-irritation, moisturising ingredient development'] },
      { title: 'Cosmetic ingredient import & distribution', body: 'We import and distribute ingredients from Acid Chem, Nouryon, LANXESS, KAO, DAICEL and more. Regulatory documents and samples are supported alongside.', bullets: ['Glycerine, fatty acids, emollients', 'Surfactants, preservatives, functional additives', 'Regulatory documents (MSDS, COA, NMPA)'] },
      { title: 'Cosmetic finished goods production', body: 'The cosmetic ingredient supplier that knows the ingredients best handles formulation through production. Ingredient costs are designed in at the planning stage.', bullets: ['Formulation · sampling · stability testing', 'Color cosmetics, skincare, sun care, body, hair and home care formats', 'Registration and export documentation'] },
    ],
  },
  products: {
    eyebrow: 'INGREDIENTS', title: 'Cosmetic ingredient catalogue',
    body: 'Search by trade name, INCI or brand, or browse by category.',
    search: 'Search by name, INCI or manufacturer', all: 'All', viewAll: 'View all items', showLess: 'Show less', empty: 'No results.',
    categories: { 'Custom Base': 'Custom Base', 'Active Ingredients': 'Actives', 'Emollients & Oils': 'Emollients & Oils', 'Surfactants': 'Surfactants', 'Preservatives': 'Preservatives', 'UV Filters': 'UV Filters', 'Specialty Poly': 'Polymers', 'Pigments & Powders': 'Pigments & Powders', 'Beads & Capsules': 'Beads', 'Functional Additives': 'Additives' }, packing: 'Packing',
  },
  finished: {
    eyebrow: 'FINISHED GOODS', title: 'Cosmetic finished goods production',
    body: 'From color cosmetics to skincare, sun care, body, hair and home care, formulated and produced by the cosmetic ingredient supplier.',
    cta: 'Request a consultation',
    steps: [
      { title: 'Planning · ingredient design', body: 'Ingredient mix proposed to concept and target cost' },
      { title: 'Formulation · samples', body: 'Samples after formulation, iterated with you' },
      { title: 'Testing · registration', body: 'Stability and safety tests, domestic and export filings' },
      { title: 'Production · shipping', body: 'Bulk and finished goods, export paperwork included' },
    ],
    imgAlt: 'Filling line for finished goods',
  },
  partners: { eyebrow: 'BRANDS', title: 'Brands we carry' },
  coching: {
    eyebrow: 'COCHING CLUB', title: 'From ingredient search to formulation, the B2B platform for cosmetic ingredient work',
    body: 'Ingredient search, regulatory checks by market, formulation design and price tracking, all in one place on coching.club.',
    cta: 'Open coching.club', ctaCn: '中文版 cn.coching.club',
    imgAlt1: 'COCHING market price and trend dashboard', imgAlt2: 'COCHING ingredient search screen',
    features: [
      { title: 'Ingredient master search', body: 'Search more than 12,000 ingredients by trade name, INCI, manufacturer or supplier, then move straight to the ingredient DB and finished-product search.' },
      { title: 'Regulatory database by market', body: 'Usage restrictions for Korea, the EU, the US, Japan, China, ASEAN, Russia and Taiwan, keyed by INCI name. Only entries with a cited source are shown.' },
      { title: 'MyLab Studio formulation', body: 'Start from a blank formula, a format template or an existing formula and build it ingredient by ingredient. Regulatory limits, totals and EWG grades are validated in real time.' },
      { title: 'Prices, market reports, supplier requests', body: 'Palm oil, fatty acid and petrochemical price tracking with FX, weekly market reports, and sample or document requests to suppliers.' },
    ],
    note: 'Korean, English and Chinese supported. Chinese users can sign in with the same account at cn.coching.club.',
  },
  contact: {
    eyebrow: 'CONTACT', title: 'Quotes, samples and production',
    body: 'One channel for cosmetic ingredient quotes, sample requests and cosmetic finished goods consultations. We reply within one business day.',
    company: 'Company', name: 'Contact name', email: 'Email', type: 'Inquiry type', types: ['Cosmetic ingredient quote', 'Sample request', 'Cosmetic finished goods consultation', 'Other'], message: 'Message', send: 'Send inquiry',
    noEmail: 'Inquiry email is not configured yet (site.config.ts).',
  },
  footer: { privacy: 'Privacy policy', rights: 'All rights reserved.' },
};

const zh: Dict = {
  nav: { business: '业务领域', products: '化妆品原料', finished: '化妆品成品', lab: '研究所', infra: '法规·品质支持', coching: 'COCHING CLUB', contact: '联系我们', cta: '询价·索样' },
  strip: { label: '经营化妆品原料类别' },
  lab: {
    eyebrow: 'R&D LAB', title: '自有研究所',
    body: '自有研究所支撑化妆品原料供应与成品生产，从原料评估到配方、打样与稳定性确认，均在内部完成。',
    imgAlt: '研究所配方工作台',
    items: [
      { title: '原料评估', body: '内部确认新原料的物性、溶解性与配伍适配性，并按用途提供应用指引。' },
      { title: '配方开发', body: '覆盖彩妆、护肤、防晒、身体、头发与家居护理等剂型，按客户需求调整。' },
      { title: '打样', body: '制作评估样品，并根据反馈反复完善。' },
      { title: '稳定性确认', body: '在温度与时间条件下确认稳定性与相容性，降低量产前风险。' },
      { title: '定制提取物与提取水', body: '按客户指定原料与概念，自小批量起制造植物提取物与提取水。' },
      { title: '法规审查', body: '按市场核查配方成分的使用限制，提前减少注册阶段问题。' },
    ],
    cta: '联系研究所',
  },
  support: {
    eyebrow: 'REGULATORY & QUALITY', title: '法规与品质文件，一并支持',
    body: '供应不止于交货。注册、审核、出口所需的文件与审查流程，我们一起跟进。',
    items: [
      { title: '法规文件提供', body: '从生产商获取 MSDS、COA、TDS 及原料组成信息等产品注册与审核所需文件。' },
      { title: '样品与小批量测试', body: '提供配方评估样品与小批量采购，正式下单前即可确认适配性。' },
      { title: '各国法规查询', body: '按 INCI 名称在 coching.club 查询韩国、欧盟、美国、中国等主要市场的使用限制。' },
      { title: 'RSPO 认证原料', body: '作为 RSPO 会员并持有 Distributor License，以可持续认证标准供应棕榈来源原料。' },
    ],
  },
  hero: {
    badge: '化妆品原料与成品 · 创立于 2022',
    title: ['从化妆品原料', '到化妆品成品，', '覆盖供应的每一个环节'],
    body: 'KPROS 自主生产、进口并分销化妆品原料，并提供成品生产服务。依托全球供应商网络，保障稳定供应。',
    cta1: '查看化妆品原料目录', cta2: '化妆品成品生产咨询',     imgAlt1: '实验烧瓶中的植物原料', imgAlt2: '白色滴管瓶成品', imgAlt3: '滴管中滴落的油类原料',
  },
  business: {
    eyebrow: 'BUSINESS', title: '三大支柱构建完整供应体系',
    body: '生产、进口与成品在同一家公司内打通，从原料选型到产品上市无需中间环节。',
    items: [
      { title: '化妆品原料生产', body: '按客户配方定制生产植物提取水与发酵水。芦荟、薰衣草、洋甘菊、玫瑰等原料，小批量至大批量均可。', bullets: ['Custom Plant Water', 'Ferment Water（Galactomyces 等）', '低刺激·保湿功能原料开发'] },
      { title: '化妆品原料进口与分销', body: '进口并分销 Acid Chem、Nouryon、LANXESS、KAO、DAICEL 等全球厂商原料。同时提供法规文件与样品支持。', bullets: ['甘油·脂肪酸·润肤剂', '表面活性剂·防腐剂·功能添加剂', '法规文件支持（MSDS·COA·NMPA）'] },
      { title: '化妆品成品生产', body: '最了解化妆品原料的供应商负责从配方到生产。在企划阶段即规划原料成本，打造性价比合理的产品。', bullets: ['配方开发 · 打样 · 稳定性测试', '彩妆、护肤、防晒、身体、头发到家居护理等多种剂型', '注册备案与出口文件'] },
    ],
  },
  products: {
    eyebrow: 'INGREDIENTS', title: '化妆品原料目录',
    body: '可按品名、INCI、品牌搜索，或按类别浏览。',
    search: '按品名 · INCI · 生产商搜索', all: '全部', viewAll: '查看全部品项', showLess: '收起', empty: '没有匹配结果。',
    categories: { 'Custom Base': '定制基础原料', 'Active Ingredients': '活性成分', 'Emollients & Oils': '润肤剂·油脂·保湿剂', 'Surfactants': '表面活性剂', 'Preservatives': '防腐剂', 'UV Filters': '防晒剂', 'Specialty Poly': '聚合物·增稠剂', 'Pigments & Powders': '色素·粉体', 'Beads & Capsules': '微珠·胶囊', 'Functional Additives': '功能添加剂' }, packing: '包装规格',
  },
  finished: {
    eyebrow: 'FINISHED GOODS', title: '化妆品成品生产',
    body: '从彩妆到护肤、防晒、身体、头发与家居护理，由化妆品原料供应商直接配方与生产。',
    cta: '申请生产咨询',
    steps: [
      { title: '企划 · 原料设计', body: '按概念与目标成本提出原料组合方案' },
      { title: '配方 · 打样', body: '配方开发后提供样品，反复调整' },
      { title: '测试 · 注册', body: '稳定性与安全性试验，国内外注册文件' },
      { title: '生产 · 出货', body: '料体与成品生产，含出口文件' },
    ],
    imgAlt: '成品灌装线',
  },
  partners: { eyebrow: 'BRANDS', title: '经营品牌' },
  coching: {
    eyebrow: 'COCHING CLUB', title: '从原料检索到配方设计，面向化妆品原料实务的 B2B 平台',
    body: '把原料从业者每天使用的工具集中在一起：原料检索、各国法规查询、配方设计、行情查询，均在 coching.club 一站完成。',
    cta: '前往 coching.club', ctaCn: '中文版 cn.coching.club',
    imgAlt1: 'COCHING 原料行情与市场动态页面', imgAlt2: 'COCHING 原料检索页面',
    features: [
      { title: '原料主数据检索', body: '按原料名、INCI、生产商、供应商检索 12,000 余条原料，并可直接跳转成分数据库与成品检索。' },
      { title: '各国法规数据库', body: '按 INCI 查询韩国、欧盟、美国、日本、中国、东盟、俄罗斯、台湾 8 个市场的使用限制，仅显示有出处依据的条目。' },
      { title: 'MyLab Studio 配方设计', body: '从空白配方、剂型模板或现有配方出发，逐个选择成分完成配方设计。法规限量、配比合计与 EWG 等级实时校验。' },
      { title: '行情 · 市场报告 · 供应商对接', body: '提供棕榈油、脂肪酸、石化原料行情与汇率、每周市场报告，并可向供应商申请样品与资料。' },
    ],
    note: '支持韩文、英文、中文。中国用户可在 cn.coching.club 使用同一账号登录。',
  },
  contact: {
    eyebrow: 'CONTACT', title: '询价 · 索样 · 生产咨询',
    body: '化妆品原料询价、索样、化妆品成品生产咨询统一受理，1 个工作日内回复。',
    company: '公司名称', name: '联系人', email: '邮箱', type: '咨询类型', types: ['化妆品原料询价', '索样', '化妆品成品生产咨询', '其他'], message: '内容', send: '发送咨询',
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
