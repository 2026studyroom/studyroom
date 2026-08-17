const RESOURCE_CATALOG = {
  // ── 직접 연결: 한국은행 ─────────────────────────────────────────
  bokStockWealth26: {
    org: "한국은행", date: "2026.05.07", kind: "BOK 이슈노트",
    title: "우리나라 주식 자산효과에 대한 평가",
    url: "https://www.bok.or.kr/portal/bbs/P0002353/view.do?depth=200433&menuNo=200433&nttId=10097868&programType=newsData&relate=Y",
    desc: "주가 상승에 따른 자본이득이 소비와 가계 자산배분에 얼마나 연결되는지 실증 분석합니다."
  },
  bokTokenization26: {
    org: "한국은행", date: "2026.05.14", kind: "BOK 이슈노트",
    title: "국내외 자산 토큰화 현황 및 향후 정책 과제",
    url: "https://www.bok.or.kr/portal/bbs/P0002353/view.do?menuNo=200433&nttId=10097981",
    desc: "RWA·국채·MMF·대체자산 토큰화의 글로벌 확산과 국내 제도 과제를 다룹니다."
  },
  bokStablecoin25: {
    org: "한국은행", date: "2025.10.27", kind: "지급결제 조사연구",
    title: "원화 스테이블코인의 주요 이슈와 대응방안",
    url: "https://www.bok.or.kr/portal/bbs/B0000232/view.do?menuNo=200706&nttId=10094188",
    desc: "원화 스테이블코인의 통화·금융안정·지급결제 측면 주요 쟁점과 정책 대응을 종합합니다."
  },
  bokFsr26: {
    org: "한국은행", date: "2026.06", kind: "금융안정보고서",
    title: "금융안정보고서 2026년 6월",
    url: "https://www.bok.or.kr/portal/bbs/P0000593/view.do?menuNo=200068&nttId=11062197",
    desc: "가계·기업신용, 부동산, 금융기관, 자본유출입, 거시건전성정책을 한 번에 점검할 수 있습니다."
  },
  bokHousehold26: {
    org: "한국은행", date: "2026.05.22", kind: "가계부채 통계",
    title: "2026년 1/4분기 차주별 가계부채",
    url: "https://www.bok.or.kr/portal/bbs/B0000501/view.do?depth=201264&menuNo=201264&nttId=10098089&programType=newsData&relate=Y",
    desc: "차주별 가계부채의 최신 통계와 취약성 점검에 활용할 수 있는 원자료입니다."
  },
  bokAI26: {
    org: "한국은행", date: "2026.06", kind: "BOK 이슈노트",
    title: "AI 도입은 생산성을 높이는가? 초기 3년의 경험과 시사점",
    url: "https://www.bok.or.kr/portal/bbs/P0002353/view.do?depth=200433&menuNo=200433&nttId=10098322&programType=newsData&relate=Y",
    desc: "AI 도입의 생산성 효과와 조직 재설계·직무 재배치·청년 숙련 형성 문제를 분석합니다."
  },
  bokAI25: {
    org: "한국은행", date: "2025.02.10", kind: "BOK 이슈노트",
    title: "AI와 한국경제",
    url: "https://www.bok.or.kr/portal/bbs/P0002353/view.do?menuNo=200433&nttId=10089704",
    desc: "AI 확산이 생산성·노동시장·한국경제에 미치는 영향을 폭넓게 다룹니다."
  },
  bokOverseasFx: {
    org: "한국은행", date: "금요강좌", kind: "강의·분석자료",
    title: "우리나라 해외투자와 환율",
    url: "https://www.bok.or.kr/portal/bbs/B0000217/view.do?menuNo=200144&nttId=10089699",
    desc: "해외증권투자 확대가 외환수요와 원/달러 환율에 연결되는 경로를 설명합니다."
  },
  bokFxExplain26: {
    org: "한국은행", date: "2026.01.19", kind: "BOK 경제자료",
    title: "외화자금시장에 달러는 많은데 환율은 왜 오르는 것일까?",
    url: "https://www.bok.or.kr/portal/bbs/B0000347/view.do?menuNo=201106&nttId=10095828",
    desc: "해외증권투자, 외화자금 수급과 환율 상승을 구분해서 이해하는 데 유용합니다."
  },
  bokMonetary26: {
    org: "한국은행", date: "2026.03", kind: "통화신용정책보고서",
    title: "통화신용정책보고서 2026년 3월",
    url: "https://www.bok.or.kr/portal/bbs/B0000156/view.do?depth=200067&menuNo=200067&nttId=10096935",
    desc: "물가·성장·금융불균형·자산가격을 고려한 통화정책 판단의 최신 틀을 확인할 수 있습니다."
  },
  bokRegion23: {
    org: "한국은행", date: "2023.11.02", kind: "BOK 이슈노트",
    title: "지역간 인구이동과 지역경제",
    url: "https://www.bok.or.kr/portal/bbs/P0002353/view.do?menuNo=200433&nttId=10080338",
    desc: "청년층 유출이 출산·고용·인적자본과 지역 성장에 미치는 영향을 분석합니다."
  },
  bokRegion26: {
    org: "한국은행", date: "2026.01.28", kind: "지역경제보고서",
    title: "지역경제보고서 2025년 하반기",
    url: "https://www.bok.or.kr/portal/bbs/P0002507/view.do?menuNo=200069&nttId=10096149",
    desc: "권역별 생산·서비스·건설업 등 최신 지역경제 흐름을 비교할 수 있습니다."
  },
  bokPopulationConsumption25: {
    org: "한국은행", date: "2025.05", kind: "경제전망 핵심이슈",
    title: "인구구조 변화가 소비 둔화에 미치는 영향",
    url: "https://www.bok.or.kr/portal/bbs/B0000368/view.do?menuNo=201140&nttId=10091752",
    desc: "인구감소와 고령화가 소비성향·소비여력·내수에 미치는 영향을 분석합니다."
  },
  bokEmployment25: {
    org: "한국은행", date: "2025.06.17", kind: "BOK 이슈노트",
    title: "인구 및 노동시장 구조를 고려한 취업자수 추세 전망 및 시사점",
    url: "https://www.bok.or.kr/portal/bbs/P0002353/view.do?depth=200433&menuNo=200433&nttId=10091953&programType=newsData&relate=Y",
    desc: "고령화·인구구조 변화와 고용 추세를 함께 이해할 수 있는 자료입니다."
  },
  bokClimate21: {
    org: "한국은행", date: "2021.12", kind: "조사통계월보 논고",
    title: "기후변화 이행리스크와 금융안정",
    url: "https://www.bok.or.kr/portal/bbs/P0000551/view.do?menuNo=200438&nttId=10068224",
    desc: "탄소중립 전환 과정의 좌초자산·신용위험이 금융시스템 안정에 미치는 영향을 다룹니다."
  },
  bokCBDC24: {
    org: "한국은행", date: "2024.11.06", kind: "CBDC·예금토큰",
    title: "CBDC 및 예금 토큰 기반 국민 체감형 디지털 금융서비스 실증",
    url: "https://www.bok.or.kr/portal/bbs/B0000502/view.do?menuNo=201265&nttId=10087852",
    desc: "CBDC와 예금토큰의 실제 유통 구조 및 민간은행과 중앙은행의 역할을 이해하기 좋습니다."
  },

  // ── 직접 연결: 자본시장연구원·금융위 ──────────────────────────
  kcmiValueup26: {
    org: "자본시장연구원", date: "2026.06.01", kind: "자본시장포커스",
    title: "밸류업 공시 참여에 따른 상장기업 성과 비교 및 향후 과제",
    url: "https://www.kcmi.re.kr/publications/pub_detail_view?cno=6774&syear=2026&zcd=002001016&zno=1917",
    desc: "밸류업 공시 기업의 주가수익률·ROE·PBR·주주환원 성과를 비교합니다."
  },
  kcmiValueup24: {
    org: "자본시장연구원", date: "2024.08.19", kind: "자본시장포커스",
    title: "한국 자본시장 밸류업 정책의 방향성",
    url: "https://www.kcmi.re.kr/publications/pub_detail_view?cno=6388&syear=2024&zcd=002001016&zno=1802",
    desc: "코리아 디스카운트와 기업 수익성·성장성·거버넌스·주주환원의 관계를 설명합니다."
  },
  kcmiGovernance24: {
    org: "자본시장연구원", date: "2024.04.15", kind: "자본시장포커스",
    title: "국내외 기업지배구조 모범규준 운영 현황과 과제",
    url: "https://www.kcmi.re.kr/publications/pub_detail_view?cno=6319&syear=2024&zcd=002001016&zno=1780",
    desc: "이사회·감사·주주환원·지배구조 공시와 밸류업의 연결을 살펴봅니다."
  },
  kcmiFxHours26: {
    org: "자본시장연구원", date: "2026.05.13", kind: "이슈보고서 26-11",
    title: "외환시장 거래시간 연장이 환율 변동성에 미친 영향",
    url: "https://www.kcmi.re.kr/report/report_view?report_no=2295&s_report_subject=&s_report_type=&tabIdx=4&thispage=1",
    desc: "거래시간 연장이 원/달러 변동성·갭 리스크·가격발견 기능에 미친 효과를 실증 분석합니다."
  },
  kcmiSmallIB26: {
    org: "자본시장연구원", date: "2026.05.21", kind: "조사보고서",
    title: "미국 중소형 투자은행(IB)의 사업모델과 경쟁 전략",
    url: "https://www.kcmi.re.kr/report/report_view?report_no=2294",
    desc: "국내 중소 성장기업이 은행·정책자금에 의존하는 구조와 자본시장 기업금융의 역할을 비교합니다."
  },
  kcmiUnicorn24: {
    org: "자본시장연구원", date: "2024.01.04", kind: "조사보고서",
    title: "유니콘 기업 자금조달의 특징과 국내 모험자본시장 시사점",
    url: "https://www.kcmi.re.kr/report/report_view?report_no=1772",
    desc: "고성장 혁신기업의 성장단계별 자금조달과 모험자본시장 발전 방향을 분석합니다."
  },
  kcmiCrossCrypto26: {
    org: "자본시장연구원", date: "2026.02.26", kind: "이슈보고서",
    title: "국경간 암호화 자산 거래 현황 및 시사점",
    url: "https://www.kcmi.re.kr/report/report_view?report_no=2263",
    desc: "스테이블코인을 중심으로 확대되는 국경간 암호화자산 거래와 국제자본이동 문제를 다룹니다."
  },
  kcmiStableFx25: {
    org: "자본시장연구원", date: "2025.09.01", kind: "자본시장포커스",
    title: "원화 스테이블코인의 외환부문 영향과 정합성 제고 방향",
    url: "https://www.kcmi.re.kr/publications/pub_detail_view?cno=6603&syear=2025&zcd=002001016&zno=1867",
    desc: "원화 스테이블코인의 자본유출·외환안정·원화 국제화 쟁점을 집중적으로 다룹니다."
  },
  kcmiStableTreasury25: {
    org: "자본시장연구원", date: "2025.08.11", kind: "이슈보고서 25-13",
    title: "스테이블코인과 단기 국고채",
    url: "https://www.kcmi.re.kr/report/report_view?report_no=2149",
    desc: "스테이블코인 준비자산 요건과 국내 단기 안전자산 공급 문제를 분석합니다."
  },
  kcmiCorpFinance23: {
    org: "자본시장연구원", date: "2023.03.20", kind: "자본시장포커스",
    title: "최근 기업 자금조달 여건 및 불안요인",
    url: "https://www.kcmi.re.kr/publications/pub_detail_view?cno=6084&syear=2023&zcd=002001016&zno=1712",
    desc: "회사채·은행대출·저신용기업·P-CBO를 연결해 기업 자금조달 리스크를 설명합니다."
  },
  fscShort25: {
    org: "금융위원회", date: "2025.03.21", kind: "보도자료",
    title: "공매도 제도개선 및 2025년 3월 전면 재개",
    url: "https://www.fsc.go.kr/no010101/84216",
    desc: "공매도 전면 재개와 전산시스템·과열종목 제도 등 최신 제도개선 내용을 확인할 수 있습니다."
  },
  fscShortImprove24: {
    org: "금융위원회", date: "2024.06.13", kind: "정책방안",
    title: "시장질서 확립을 위한 공매도 제도개선 방안",
    url: "https://www.fsc.go.kr/no010101/82450",
    desc: "무차입 공매도 방지 전산시스템, 대차 상환기간, 처벌 강화 등 제도 설계의 핵심 자료입니다."
  },
  fscAI24: {
    org: "금융위원회", date: "2024.12.12", kind: "정책방안",
    title: "금융권의 AI 활용을 적극 지원하겠습니다",
    url: "https://www.fsc.go.kr/no010101/83594?curPage=&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=&srchText=",
    desc: "상용·오픈소스 생성형 AI 활용체계와 금융회사 내부망·모델 안전성 지원방안을 다룹니다."
  },
  fscAirgap24: {
    org: "금융위원회", date: "2024.08.13", kind: "로드맵",
    title: "금융분야 망분리 개선 로드맵",
    url: "https://www.fsc.go.kr/no010101/82885?curPage=&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=&srchText=",
    desc: "SaaS·생성형 AI 활용 확대와 보안·제3자 리스크 관리의 균형을 다룹니다."
  },

  // ── 직접 연결: KDI·KIEP·수출입은행 ────────────────────────────
  kdiOutlook26: {
    org: "KDI", date: "2026 상반기", kind: "경제전망",
    title: "KDI 경제전망, 2026 상반기",
    url: "https://www.kdi.re.kr/research/economy",
    desc: "성장·물가·소비·투자·수출과 주요 대외 리스크를 종합적으로 점검합니다."
  },
  kdiPension24: {
    org: "KDI", date: "2024", kind: "연구보고서",
    title: "공적연금제도 지속가능성 제고를 위한 개혁방안",
    url: "https://www.kdi.re.kr/research/reportView?pub_no=18461",
    desc: "국민연금 재정지속성·세대간 형평성·기초연금 재구조화·사회적 합의를 함께 다룹니다."
  },
  kdiHouseholdDemo25: {
    org: "KDI", date: "2025.08.05", kind: "KDI FOCUS",
    title: "인구구조 변화가 가계부채에 미치는 영향",
    url: "https://www.kdi.re.kr/research/focusView?pub_no=18853",
    desc: "기대수명·연령구조 변화가 가계의 자산축적과 부채 추세에 미치는 영향을 분석합니다."
  },
  kdiCarbon24: {
    org: "KDI", date: "연구보고서", kind: "기후·통상",
    title: "탄소중립정책의 영향: 무역과 환경을 중심으로",
    url: "https://www.kdi.re.kr/research/reportView?pub_no=18444",
    desc: "EU CBAM과 국내 탄소중립정책이 한국 경제·무역·탄소배출에 미치는 효과를 분석합니다."
  },
  kiepTariff25: {
    org: "대외경제정책연구원", date: "2025.04.10", kind: "오늘의 세계경제",
    title: "트럼프 2기 상호관세 조치의 주요 내용과 시사점",
    url: "https://www.kiep.go.kr/gallery.es?act=view&bid=0003&list_no=11790&mid=a10102020000",
    desc: "미국 상호관세의 국가별 적용과 한국 수출·통상환경에 미치는 영향을 정리합니다."
  },
  kiepWorld26: {
    org: "대외경제정책연구원", date: "2025.11.11", kind: "세계경제 전망",
    title: "2026년 세계경제 전망",
    url: "https://www.kiep.go.kr/gallery.es?act=view&bid=0003&list_no=12086&mid=a10101010000",
    desc: "신관세·무역질서·AI 투자·주요국 성장 경로를 종합적으로 전망합니다."
  },
  kiepCbam26: {
    org: "대외경제정책연구원", date: "2026.03.09", kind: "세계경제 포커스",
    title: "EU CBAM 확정기간 이행 동향과 시사점",
    url: "https://www.kiep.go.kr/gallery.es?act=view&bid=0004&list_no=12272&mid=a10102030000",
    desc: "2026년 본격 시행된 CBAM의 비용·검증·경쟁력 영향을 최신 기준으로 정리합니다."
  },
  kiepCbamSme: {
    org: "대외경제정책연구원", date: "연구보고서", kind: "중소기업·통상",
    title: "탄소국경조정제도(CBAM)에 대한 중소기업 대응방안 연구",
    url: "https://www.kiep.go.kr/gallery.es?act=view&bid=0001&list_no=10000&mid=a10101010000",
    desc: "CBAM의 중소기업 영향·산업별 취약성·정책금융 및 기업 대응방안을 분석합니다."
  },
  keximSemi26: {
    org: "한국수출입은행", date: "2025.12.30", kind: "산업전망",
    title: "2026년 반도체 수출 전망",
    url: "https://eiec.kdi.re.kr/policy/domesticView.do?ac=0000202187",
    desc: "메모리·시스템반도체·파운드리 시장과 미국 관세정책을 반영한 2026년 수출 전망입니다."
  },
  keximIndustry26: {
    org: "한국수출입은행", date: "2026.01.22", kind: "경제·산업 전망",
    title: "2026년 경제·산업 전망",
    url: "https://eiec.kdi.re.kr/policy/domesticView.do?ac=0000202190",
    desc: "국내외 경제와 반도체·미래차·바이오·조선 등 주요 산업의 수출 리스크를 정리합니다."
  },

  // ── 직접 연결: 신보·예보 ───────────────────────────────────────
  koditRateRisk: {
    org: "신용보증기금", date: "연구논문", kind: "중소기업금융연구",
    title: "금리와 금리변동성이 중소기업 부실에 미치는 영향",
    url: "https://www.kodit.co.kr/common/nttFileDownload.do?fileKey=ea495b15c6ffda6a9d1d9362f60948d2",
    desc: "금리 수준과 변동성이 중소기업 부실률에 미치는 영향을 분석한 신보 연구자료입니다."
  },
  koditPcbo: {
    org: "신용보증기금", date: "연구자료", kind: "P-CBO",
    title: "P-CBO 보증 성과분석과 발전방향",
    url: "https://www.kodit.co.kr/common/nttFileDownload.do?fileKey=ee49acc5dacc6e4b07b30153835d94e8",
    desc: "P-CBO 보증 구조·정책효과·기업 자금조달 지원 기능을 이해하는 기초자료입니다."
  },
  koditPlan26: {
    org: "신용보증기금", date: "2026", kind: "업무계획",
    title: "2026년도 업무계획",
    url: "https://www.kodit.co.kr/common/nttFileDownload.do?fileKey=e2eb9bc371e07d8d3061a74aa357e10e",
    desc: "P-CBO 직접발행 등 신보의 2026년 정책금융 추진방향을 확인할 수 있습니다."
  },
  koditCreditModel: {
    org: "신용보증기금", date: "연구자료", kind: "신용위험",
    title: "스코어 얼라인먼트 기반 중소기업 부도예측모형의 운영 효율화",
    url: "https://www.kodit.co.kr/common/fileDownload.do?fileKey=f319066ee2a41a80500c2ef84d4ca89f",
    desc: "기업 신용평가·부도예측모형이 실제 보증·대출 판단에 어떻게 활용되는지 살펴볼 수 있습니다."
  },
  kdicLimit25: {
    org: "예금보험공사", date: "2025.07.22", kind: "보도자료",
    title: "2025년 9월 1일부터 예금을 1억원까지 보호합니다",
    url: "https://www.kdic.or.kr/di/medi/selectPbcrBbsDtl.do?bbsSeCd=bodo&cdVl=bodo&pstNo=59448",
    desc: "예금보호한도 1억원 상향의 시행일·적용범위·제도 변경사항을 공식적으로 정리합니다."
  },
  kdicBankResolution24: {
    org: "예금보험공사", date: "2024.12.23", kind: "Weekly KDIC",
    title: "부실 은행 정리의 세가지 원칙",
    url: "https://www.kdic.or.kr/ra/rschanls/selectKraiFncStblRptpDtl.do?contsSn=3481",
    desc: "은행 실패 허용·최소비용·비보호예금 손실부담 등 정리제도의 핵심 원칙을 설명합니다."
  },
  kdicBankrun24: {
    org: "예금보험공사", date: "2024.12.26", kind: "연구논문집",
    title: "금융의 디지털화와 뱅크런 위험·특별정리제도",
    url: "https://www.kdic.or.kr/ra/rschanls/selectKraiDpsmInsrncRptpDtl.do?contsSn=3482",
    desc: "디지털 금융이 뱅크런 위험에 미치는 영향과 금융기관 부실 시 특별정리제도를 함께 다룹니다."
  },
  kdicMoney25: {
    org: "예금보험공사", date: "2025.05.20", kind: "거시경제·금융일반",
    title: "공공화폐와 민간화폐의 역할 및 디지털화에 따른 구조 변화",
    url: "https://www.kdic.or.kr/ra/rschanls/selectKraiEcnmFncGnrlRptpDtl.do?contsSn=34536",
    desc: "중앙은행화폐·은행예금·민간 디지털 지급수단이 공존하는 화폐 시스템의 구조를 설명합니다."
  }
};

const PAST_TOPICS = [
  {id:"bok-2020-fomo", institution:"한국은행", year:2020, types:["논술"], category:"사회·행동", title:"20·30대 자산시장 FOMO와 군중심리", subtitle:"영끌 현상을 군중심리 관점에서 분석", keywords:["영끌","FOMO","군중심리","자산시장"], resources:["bokIssue","kdiHub"]},
  {id:"bok-2021-money", institution:"한국은행", year:2021, types:["논술"], category:"통화·화폐", title:"조선시대 저화와 동전 주조 실패", subtitle:"화폐의 기능과 통화정책 관점에서 분석", keywords:["저화","화폐기능","통화정책","사주"], resources:["bokIssue","bokMonetary"]},
  {id:"bok-2022-pension", institution:"한국은행", year:2022, types:["논술"], category:"인구·사회", title:"연금개혁의 원인과 집단지성 기반 해결방안", subtitle:"원인 → 문제점 → 해결방안 구조", keywords:["연금개혁","집단지성","고령화"], resources:["kdiHub","bokIssue"]},
  {id:"bok-2022-housing", institution:"한국은행", year:2022, types:["논술"], category:"주거·가계", title:"주거안정 문제의 원인과 해결방안", subtitle:"집단지성을 통한 해결방안 제시", keywords:["주거안정","주택시장","가계"], resources:["bokIssue","bokStability","kdiHub"]},
  {id:"bok-2022-polarization", institution:"한국은행", year:2022, types:["논술"], category:"인구·사회", title:"양극화의 원인과 해결방안", subtitle:"집단지성을 통한 문제해결", keywords:["양극화","소득분배","불평등"], resources:["bokIssue","kdiHub"]},
  {id:"bok-2023-region", institution:"한국은행", year:2023, types:["논술"], category:"인구·사회", title:"지역 불균형의 원인·문제점·해결방안", subtitle:"국가 전체의 관점에서 지역 불균형 분석", keywords:["지역불균형","지역경제","인구감소"], resources:["bokIssue","kdiHub"]},
  {id:"bok-2024-ai-democracy", institution:"한국은행", year:2024, types:["논술"], category:"디지털·AI", title:"생성형 AI가 대의민주주의에 미치는 영향", subtitle:"긍정·위협 요인과 부정적 측면의 해결책", keywords:["생성형AI","대의민주주의","알고크라시"], resources:["bokIssue","kdiHub"]},
  {id:"bok-2022-inflation", institution:"한국은행", year:2022, types:["논술"], category:"통화·거시", title:"글로벌 인플레이션의 수요·공급 요인과 통화정책", subtitle:"중앙은행 신뢰·금리인상·실업의 관계까지 확장", keywords:["인플레이션","기준금리","수요","공급","실업"], resources:["bokIssue","bokMonetary","kdiOutlook"]},
  {id:"bok-2023-household-debt", institution:"한국은행", year:2023, types:["논술"], category:"금융안정", title:"가계부채와 민간신용 레버리지", subtitle:"미분양 누증과 보증기관 잠재리스크 포함", keywords:["가계부채","민간신용","레버리지","미분양"], resources:["bokStability","bokIssue","fsc"]},
  {id:"bok-2023-bankrun", institution:"한국은행", year:2023, types:["논술"], category:"금융안정", title:"뱅크런의 사회적 파급효과와 해결방안", subtitle:"금융안정 관점의 대응수단 비교", keywords:["뱅크런","예금보험","금융안정"], resources:["bokStability","kdic","fsc"]},
  {id:"bok-2024-aging-business", institution:"한국은행", year:2024, types:["논술"], category:"인구·사회", title:"저출산·고령화가 기업에 미치는 영향", subtitle:"HR·마케팅 등 경영학과 결부한 대응책", keywords:["저출산","고령화","기업","노동시장"], resources:["bokIssue","kdiHub"]},
  {id:"bok-2024-climate", institution:"한국은행", year:2024, types:["논술"], category:"기후·ESG", title:"기후변화의 물리적·이행 리스크", subtitle:"실물경제와 금융시스템에 미치는 영향", keywords:["기후변화","물리적리스크","이행리스크","금융시스템"], resources:["bokStability","bokIssue","fsc"]},

  {id:"fss-2025-carbon-tax", institution:"금융감독원", year:2025, types:["논술"], category:"기후·ESG", title:"탄소세의 긍정적·부정적 영향", subtitle:"감독기관 관점에서 진단과 정책적 대안 제시", keywords:["탄소세","탄소가격","ESG","금융감독"], resources:["fsc","bokIssue","kdiHub"]},
  {id:"fss-basel3", institution:"금융감독원", year:"과거", types:["PT","토론"], category:"금융감독", title:"바젤Ⅲ 규제와 금융회사 건전성", subtitle:"자본규제의 필요성과 실물경제 파급효과", keywords:["바젤3","건전성","BIS","자본규제"], resources:["fsc","bokStability"]},

  {id:"krx-2019-ev", institution:"한국거래소", year:2019, types:["논술"], category:"통상·산업", title:"전기자동차 배터리 시장", subtitle:"산업 경쟁력과 수출 구조 관점", keywords:["전기차","배터리","수출"], resources:["kdiHub","kdiOutlook"]},
  {id:"krx-2019-export", institution:"한국거래소", year:2019, types:["논술"], category:"통상·산업", title:"한국 수출의 문제와 대응방안", subtitle:"대외 리스크와 수출 경쟁력", keywords:["수출","무역","경쟁력"], resources:["kdiOutlook","kdiTrend"]},
  {id:"krx-2020-trade-war", institution:"한국거래소", year:2020, types:["논술"], category:"통상·산업", title:"미·중 무역전쟁의 영향과 해결방안", subtitle:"대외경제 충격과 한국의 대응", keywords:["미중무역전쟁","관세","공급망"], resources:["kdiOutlook","kdiHub"]},
  {id:"krx-2020-selfemployed", institution:"한국거래소", year:2020, types:["논술"], category:"인구·사회", title:"자영업자 구제 방안", subtitle:"취약부문 지원의 효과와 부작용", keywords:["자영업","소상공인","정책지원"], resources:["kdiHub","fsc"]},
  {id:"krx-2021-women", institution:"한국거래소", year:2021, types:["논술"], category:"인구·사회", title:"여성 고용률이 낮은 이유와 견해", subtitle:"노동시장 구조와 정책 대응", keywords:["여성고용","노동시장","경력단절"], resources:["kdiHub"]},
  {id:"krx-2022-industry4", institution:"한국거래소", year:2022, types:["논술"], category:"디지털·AI", title:"4차 산업혁명의 장단점과 발전 방향", subtitle:"기술변화의 순기능과 역기능", keywords:["4차산업혁명","기술혁신","생산성"], resources:["kdiHub","kdiOutlook"]},
  {id:"krx-2022-fakenews", institution:"한국거래소", year:2022, types:["논술"], category:"디지털·AI", title:"가짜뉴스와 SNS 신뢰도", subtitle:"플랫폼·정보 신뢰 문제", keywords:["가짜뉴스","SNS","정보신뢰"], resources:["kdiHub"]},
  {id:"krx-2023-crypto", institution:"한국거래소", year:2023, types:["논술"], category:"디지털·AI", title:"가상자산 이용자 보호 방안", subtitle:"혁신과 규제의 균형", keywords:["가상자산","이용자보호","디지털자산"], resources:["fsc","kcmi"]},
  {id:"krx-2023-virtualhuman", institution:"한국거래소", year:2023, types:["논술"], category:"디지털·AI", title:"가상인간 활용의 찬반과 인식 개선", subtitle:"기술 활용과 윤리적 위험", keywords:["가상인간","AI","디지털윤리"], resources:["kdiHub"]},
  {id:"krx-2024-shortselling", institution:"한국거래소", year:2024, types:["논술","PT","토론"], category:"자본시장", title:"공매도의 순기능·역기능과 제도 개선", subtitle:"시장 기능과 투자자 신뢰를 함께 평가", keywords:["공매도","시장조성","투자자보호"], resources:["krx","fsc","kcmi"]},
  {id:"krx-2024-valueup", institution:"한국거래소", year:2024, types:["논술","PT","토론"], category:"자본시장", title:"밸류업 프로그램과 ESG 공시", subtitle:"기업가치 제고와 공시제도", keywords:["밸류업","ESG공시","기업가치"], resources:["krx","fsc","kcmi"]},
  {id:"krx-2025-discount", institution:"한국거래소", year:2025, types:["논술","PT","토론"], category:"자본시장", title:"코리아 디스카운트의 원인과 해결방안", subtitle:"지배구조·주주환원·시장 신뢰", keywords:["코리아디스카운트","지배구조","주주환원"], resources:["krx","kcmi","fsc"]},
  {id:"krx-2025-treasury", institution:"한국거래소", year:2025, types:["논술","PT","토론"], category:"자본시장", title:"자사주 소각에 소극적인 이유와 해결방안", subtitle:"자기주식과 주주가치의 관계", keywords:["자사주","자기주식","소각","상법"], resources:["kcmi","fsc","krx"]},

  {id:"kodit-2025-project", institution:"신용보증기금", year:2025, types:["논술"], category:"정책금융", title:"설비투자 프로젝트 대출·보증 승인 판단", subtitle:"심사역 관점에서 재무적 근거와 판단기준 제시", keywords:["설비투자","보증심사","재무분석","신용위험"], resources:["kodit","fsc"]},
  {id:"kodit-2025-tariff", institution:"신용보증기금", year:2025, types:["논술"], category:"통상·산업", title:"비교우위와 미국 보편·상호관세", subtitle:"제조 중소기업의 경쟁력 강화 대응책", keywords:["비교우위","보편관세","상호관세","중소기업"], resources:["kodit","kdiOutlook","kdiHub"]},
  {id:"kodit-2025-intrapreneur", institution:"신용보증기금", year:2025, types:["논술"], category:"조직·경영", title:"공공부문 사내 기업가정신 도입", subtitle:"조직구조·리더십 관점의 성공요소", keywords:["사내기업가정신","공공부문","리더십"], resources:["kdiHub"]},
  {id:"kodit-rates-sme", institution:"신용보증기금", year:"빈출", types:["논술"], category:"정책금융", title:"고금리 장기화와 중소기업·소상공인", subtitle:"정책금융기관의 대응방안", keywords:["고금리","중소기업","소상공인","정책금융"], resources:["kodit","fsc","kdiTrend"]},
  {id:"kodit-insolvency", institution:"신용보증기금", year:"빈출", types:["논술"], category:"정책금융", title:"기업 부실의 원인과 부실예측기법", subtitle:"현실적으로 사용 가능한 신용위험 판단", keywords:["기업부실","부실예측","신용위험"], resources:["kodit","bokStability"]},

  {id:"kdic-systemic", institution:"예금보험공사", year:"과거", types:["PT"], category:"금융안정", title:"금리 인상과 가계대출 대손의 시스템리스크 전이", subtitle:"개별 신용위험이 시스템 리스크로 번지는 경로", keywords:["가계대출","대손","시스템리스크","금리"], resources:["kdic","bokStability"]},
  {id:"kdic-safeasset", institution:"예금보험공사", year:"과거", types:["PT"], category:"금융안정", title:"안전자산 회귀현상", subtitle:"위기 시 자금 이동과 금융시장 파급효과", keywords:["안전자산","위험회피","금융시장"], resources:["kdic","bokStability","bokIssue"]},
  {id:"kdic-social", institution:"예금보험공사", year:"과거", types:["토론"], category:"조직·경영", title:"예금보험공사의 사회공헌 방안", subtitle:"공공기관의 역할과 실행가능성", keywords:["사회공헌","공공기관","예금보험"], resources:["kdic"]},

  {id:"ksure-fs", institution:"한국무역보험공사", year:"과거", types:["PT"], category:"정책금융", title:"재무제표를 통한 단기수출보험 제공 여부 판단", subtitle:"실무형 재무·리스크 케이스", keywords:["수출보험","재무제표","신용위험","무역금융"], resources:["kdiHub","fsc"]},

  {id:"kdb-2020-neuralink", institution:"한국산업은행", year:2020, types:["논술"], category:"디지털·AI", title:"뉴럴링크에 대한 찬반 견해", subtitle:"기술혁신의 편익과 사회적 위험", keywords:["뉴럴링크","BCI","기술윤리"], resources:["kdiHub"]},
  {id:"kdb-2020-pandemic", institution:"한국산업은행", year:2020, types:["논술"], category:"통상·산업", title:"팬데믹과 급격한 사회변화", subtitle:"산업·경제구조의 변화와 대응", keywords:["팬데믹","산업구조","사회변화"], resources:["kdiHub","kdiOutlook"]},
  {id:"kdb-ai-jobs", institution:"한국산업은행", year:"과거", types:["PT","토론"], category:"디지털·AI", title:"AI 도입의 생산성 향상과 일자리 감소", subtitle:"생산성과 고용의 상충관계", keywords:["AI","생산성","일자리","노동시장"], resources:["kdiHub","kdiOutlook"]}
];

const RECOMMENDED_TOPICS = [
  {id:"rec-fx-overseas", priority:1, types:["논술","PT","토론"], category:"통화·거시", title:"해외투자 급증과 원/달러 환율", subtitle:"자본유출입·투자소득·환율 구조를 함께 보기", reason:"해외 증권투자 확대와 환율의 구조적 관계가 중앙은행·자본시장 모두의 핵심 현안입니다.", keywords:["해외투자","증권투자","환율","투자소득"], resources:["bokIssue","bokMonetary","kcmi"]},
  {id:"rec-tokenization", priority:1, types:["논술","PT"], category:"디지털·AI", title:"자산 토큰화(RWA)와 금융시장 인프라", subtitle:"토큰증권을 넘어 국채·MMF·대체자산으로", reason:"자산 토큰화는 지급결제·자본시장·규제의 경계를 동시에 건드리는 주제입니다.", keywords:["자산토큰화","RWA","분산원장","토큰증권"], resources:["bokIssue","fsc","kcmi"]},
  {id:"rec-stablecoin", priority:1, types:["논술","PT","토론"], category:"디지털·AI", title:"원화 스테이블코인과 통화주권", subtitle:"혁신·이용자보호·통화정책 파급효과", reason:"스테이블코인은 지급결제 혁신과 중앙은행 통화, 은행 예금 기반을 함께 논할 수 있어 확장성이 큽니다.", keywords:["스테이블코인","원화","통화주권","지급결제"], resources:["bokIssue","fsc","kcmi"]},
  {id:"rec-household-debt", priority:1, types:["논술","PT"], category:"금융안정", title:"가계부채 관리와 통화정책의 딜레마", subtitle:"성장·주택시장·금융안정을 동시에 고려", reason:"기준금리와 거시건전성 규제가 서로 다른 목표를 가질 때 정책조합을 설명하기 좋은 주제입니다.", keywords:["가계부채","DSR","기준금리","거시건전성"], resources:["bokStability","bokMonetary","fsc"]},
  {id:"rec-stock-wealth", priority:2, types:["논술"], category:"자본시장", title:"주가 상승의 자산효과와 내수", subtitle:"주식 자본이득이 소비·자산배분에 미치는 영향", reason:"자본시장 활황을 단순 주가가 아니라 실물경제와 가계 행동으로 연결하는 논제입니다.", keywords:["주식","자산효과","소비","자산배분"], resources:["bokIssue","kcmi"]},
  {id:"rec-governance", priority:1, types:["논술","PT","토론"], category:"자본시장", title:"기업지배구조 개선과 코리아 디스카운트", subtitle:"이사 책임·주주권·기업가치 제고의 균형", reason:"밸류업 이후 논의가 지배구조와 정보공시의 실질적 개선으로 이동하고 있습니다.", keywords:["기업지배구조","코리아디스카운트","주주권","이사"], resources:["kcmi","fsc","krx"]},
  {id:"rec-guidance", priority:2, types:["논술","PT"], category:"자본시장", title:"전망공시 활성화와 정보비대칭", subtitle:"기업의 자발적 공시를 늘릴 수 있는 조건", reason:"기업가치 제고를 공시의 질·정보비대칭과 연결할 수 있는 자본시장형 주제입니다.", keywords:["전망공시","정보비대칭","기업공시","자본비용"], resources:["kcmi","krx"]},
  {id:"rec-shortselling-2026", priority:2, types:["논술","토론"], category:"자본시장", title:"공매도 제도와 시장 신뢰의 균형", subtitle:"가격발견 기능과 불공정거래 우려", reason:"제도 정상화 이후에는 찬반보다 시장 신뢰·감시체계·형평성의 설계가 핵심 쟁점이 됩니다.", keywords:["공매도","가격발견","시장신뢰","불공정거래"], resources:["fsc","krx","kcmi"]},
  {id:"rec-ai-labor", priority:1, types:["논술","토론"], category:"디지털·AI", title:"생성형 AI의 생산성 효과와 노동시장 재편", subtitle:"대체·보완 효과와 직무전환 정책", reason:"AI 논의가 기술 윤리를 넘어 실제 생산성·임금·고용 구조 변화로 이동하고 있습니다.", keywords:["생성형AI","생산성","노동시장","직무전환"], resources:["kdiHub","kdiOutlook","bokIssue"]},
  {id:"rec-ai-finance", priority:2, types:["논술","PT"], category:"디지털·AI", title:"금융권 생성형 AI와 데이터 규제", subtitle:"망분리·개인정보·모델리스크 관리", reason:"금융사의 AI 도입은 효율성뿐 아니라 데이터 이동, 설명가능성, 책임소재를 함께 묻습니다.", keywords:["금융AI","망분리","개인정보","모델리스크"], resources:["fsc","kdiHub"]},
  {id:"rec-data-scraping", priority:2, types:["논술","PT"], category:"디지털·AI", title:"금융 데이터 이동권과 스크래핑·마이데이터", subtitle:"보안과 데이터 활용 사이의 균형", reason:"금융 데이터 접근 방식과 소비자 편의·보안의 충돌은 감독·디지털금융 관점에서 다루기 좋습니다.", keywords:["스크래핑","마이데이터","데이터이동권","보안"], resources:["fsc","kdiHub"]},
  {id:"rec-tariffs", priority:1, types:["논술","PT","토론"], category:"통상·산업", title:"미국 관세정책과 글로벌 공급망 재편", subtitle:"수출·물가·기업투자·정책금융의 연쇄효과", reason:"관세 충격을 무역이론에만 두지 않고 환율·물가·기업 신용위험까지 확장할 수 있습니다.", keywords:["관세","공급망","수출","보편관세"], resources:["kdiOutlook","kdiTrend","kodit"]},
  {id:"rec-semiconductor", priority:2, types:["논술","PT"], category:"통상·산업", title:"반도체 수출 호조와 경제 성장의 편중", subtitle:"주력산업 의존의 장점과 구조적 위험", reason:"수출 회복이 특정 산업에 집중될 때 내수·고용·세수에 미치는 차별적 효과를 묻기 좋습니다.", keywords:["반도체","수출","성장","산업편중"], resources:["kdiOutlook","bokIssue"]},
  {id:"rec-fx-hours", priority:2, types:["논술","PT"], category:"통화·거시", title:"외환시장 거래시간 연장과 환율 변동성", subtitle:"시장 접근성 확대가 가격발견에 미치는 영향", reason:"외환시장 구조개선의 효과를 데이터와 시장미시구조 관점에서 평가할 수 있습니다.", keywords:["외환시장","거래시간","환율변동성","MSCI"], resources:["kcmi","bokIssue"]},
  {id:"rec-deposit-limit", priority:1, types:["논술","PT","토론"], category:"금융안정", title:"예금보호한도 상향의 효과와 도덕적 해이", subtitle:"예금자 신뢰와 금융회사 규율의 균형", reason:"2025년 9월부터 예금 보호한도가 1억원으로 상향된 뒤 효과를 평가하는 후속 논제가 가능합니다.", keywords:["예금보호한도","1억원","도덕적해이","예금보험"], resources:["kdic","bokStability","fsc"]},
  {id:"rec-bank-resolution", priority:2, types:["논술","PT"], category:"금융안정", title:"은행 부실과 정리제도·예금보험", subtitle:"뱅크런 차단과 손실분담 원칙", reason:"금융안정 논술에서 위기 예방뿐 아니라 실제 부실 발생 후 정리 메커니즘까지 연결할 수 있습니다.", keywords:["은행부실","정리제도","예금보험","뱅크런"], resources:["kdic","bokStability"]},
  {id:"rec-sme-credit", priority:1, types:["논술","PT"], category:"정책금융", title:"고금리·저성장 환경의 중소기업 신용위험", subtitle:"보증 확대와 부실관리의 균형", reason:"정책금융기관은 지원 규모만 아니라 선별·리스크 분담·도덕적 해이를 함께 설명해야 합니다.", keywords:["중소기업","신용위험","신용보증","고금리"], resources:["kodit","kdiTrend","fsc"]},
  {id:"rec-pcbo", priority:2, types:["논술","PT"], category:"정책금융", title:"P-CBO와 중소·중견기업 직접금융", subtitle:"시장성 조달을 보완하는 정책금융 수단", reason:"은행대출 의존을 줄이고 채권시장 접근성을 높이는 정책금융 수단으로 비교하기 좋습니다.", keywords:["P-CBO","정책금융","회사채","중소기업"], resources:["kodit","fsc","kcmi"]},
  {id:"rec-climate", priority:2, types:["논술","PT"], category:"기후·ESG", title:"기후 이행리스크와 금융기관 건전성", subtitle:"탄소가격·좌초자산·신용위험 연결", reason:"기후문제를 환경정책이 아니라 자산가격과 금융기관 익스포저로 설명하는 것이 핵심입니다.", keywords:["기후리스크","이행리스크","좌초자산","신용위험"], resources:["bokStability","bokIssue","fsc"]},
  {id:"rec-carbon-border", priority:2, types:["논술","PT"], category:"기후·ESG", title:"탄소국경조정과 수출 중소기업", subtitle:"무역규제·탄소비용·정책금융의 연결", reason:"기후와 통상, 중소기업 지원이 한 문제 안에서 만나는 주제입니다.", keywords:["탄소국경조정","CBAM","수출기업","탄소비용"], resources:["kodit","kdiHub","fsc"]},
  {id:"rec-lowbirth-region", priority:1, types:["논술","토론"], category:"인구·사회", title:"인구감소와 지역경제의 지속가능성", subtitle:"노동·주거·재정·금융서비스 접근성", reason:"저출산을 출생률 하나로 보지 않고 지역 산업·금융 인프라까지 확장할 수 있습니다.", keywords:["인구감소","지역경제","저출산","지역불균형"], resources:["bokIssue","kdiHub"]},
  {id:"rec-pension", priority:2, types:["논술","토론"], category:"인구·사회", title:"연금개혁과 세대 간 부담 배분", subtitle:"재정지속성·노후소득·세대형평성", reason:"연금은 재정 문제와 가계 자산형성, 노동시장, 세대 갈등을 동시에 묻는 대표 구조개혁 주제입니다.", keywords:["연금개혁","세대형평성","재정지속성","노후소득"], resources:["kdiHub","kdiOutlook"]},
  {id:"rec-cbdc", priority:2, types:["논술","PT"], category:"디지털·AI", title:"CBDC·예금토큰과 은행 중개기능", subtitle:"지급결제 혁신이 예금·대출에 미치는 영향", reason:"디지털 화폐가 은행 예금 기반과 신용창출에 어떤 변화를 주는지 분석할 수 있습니다.", keywords:["CBDC","예금토큰","은행대출","지급결제"], resources:["bokIssue","kdiHub","fsc"]},
  {id:"rec-capitalmarket-growth", priority:2, types:["논술","PT"], category:"자본시장", title:"중소 성장기업의 자본시장 자금조달", subtitle:"은행·정책금융 의존에서 자본시장으로", reason:"생산적 금융과 모험자본, 중소형 IB의 역할을 함께 논할 수 있습니다.", keywords:["성장기업","자본시장","IB","기업금융"], resources:["kcmi","fsc","kodit"]}
];


const TOPIC_REPORTS = {
  // 한국은행
  "bok-2020-fomo": ["bokStockWealth26", "bokMonetary26"],
  "bok-2021-money": ["kdicMoney25", "bokCBDC24"],
  "bok-2022-pension": ["kdiPension24", "bokPopulationConsumption25"],
  "bok-2022-housing": ["bokFsr26", "kdiHouseholdDemo25"],
  "bok-2022-polarization": ["bokPopulationConsumption25", "kdiOutlook26"],
  "bok-2023-region": ["bokRegion23", "bokRegion26"],
  "bok-2024-ai-democracy": ["bokAI25", "bokAI26"],
  "bok-2022-inflation": ["bokMonetary26", "kdiOutlook26"],
  "bok-2023-household-debt": ["bokFsr26", "bokHousehold26", "kdiHouseholdDemo25"],
  "bok-2023-bankrun": ["kdicBankrun24", "kdicBankResolution24", "bokFsr26"],
  "bok-2024-aging-business": ["bokPopulationConsumption25", "bokEmployment25"],
  "bok-2024-climate": ["bokClimate21", "kdiCarbon24"],

  // 금융감독원
  "fss-2025-carbon-tax": ["bokClimate21", "kdiCarbon24"],
  "fss-basel3": ["bokFsr26", "kdicBankResolution24"],

  // 한국거래소
  "krx-2019-ev": ["keximIndustry26", "kiepWorld26"],
  "krx-2019-export": ["kdiOutlook26", "keximIndustry26"],
  "krx-2020-trade-war": ["kiepTariff25", "kiepWorld26"],
  "krx-2020-selfemployed": ["kdiOutlook26", "bokMonetary26"],
  "krx-2021-women": ["bokEmployment25", "bokPopulationConsumption25"],
  "krx-2022-industry4": ["bokAI25", "bokAI26"],
  "krx-2022-fakenews": ["bokAI25"],
  "krx-2023-crypto": ["bokStablecoin25", "kcmiCrossCrypto26"],
  "krx-2023-virtualhuman": ["bokAI25", "bokAI26"],
  "krx-2024-shortselling": ["fscShortImprove24", "fscShort25"],
  "krx-2024-valueup": ["kcmiValueup24", "kcmiValueup26"],
  "krx-2025-discount": ["kcmiValueup24", "kcmiGovernance24", "kcmiValueup26"],
  "krx-2025-treasury": ["kcmiValueup26", "kcmiValueup24"],

  // 신용보증기금
  "kodit-2025-project": ["koditCreditModel", "kcmiCorpFinance23"],
  "kodit-2025-tariff": ["kiepTariff25", "keximIndustry26"],
  "kodit-2025-intrapreneur": ["koditPlan26"],
  "kodit-rates-sme": ["koditRateRisk", "kcmiCorpFinance23", "koditPlan26"],
  "kodit-insolvency": ["koditCreditModel", "koditRateRisk"],

  // 예금보험공사·무보·산은
  "kdic-systemic": ["bokFsr26", "kdicBankrun24", "kdicBankResolution24"],
  "kdic-safeasset": ["bokFsr26", "bokMonetary26"],
  "kdic-social": ["kdicLimit25"],
  "ksure-fs": ["koditCreditModel", "keximIndustry26"],
  "kdb-2020-neuralink": ["bokAI25", "bokAI26"],
  "kdb-2020-pandemic": ["kdiOutlook26", "kiepWorld26"],
  "kdb-ai-jobs": ["bokAI26", "bokAI25"],

  // 추천 주제
  "rec-fx-overseas": ["bokOverseasFx", "bokFxExplain26", "bokFsr26"],
  "rec-tokenization": ["bokTokenization26", "kcmiCrossCrypto26"],
  "rec-stablecoin": ["bokStablecoin25", "kcmiStableFx25", "kcmiStableTreasury25"],
  "rec-household-debt": ["bokFsr26", "bokHousehold26", "kdiHouseholdDemo25"],
  "rec-stock-wealth": ["bokStockWealth26", "bokMonetary26"],
  "rec-governance": ["kcmiGovernance24", "kcmiValueup24", "kcmiValueup26"],
  "rec-guidance": ["kcmiValueup26", "kcmiGovernance24"],
  "rec-shortselling-2026": ["fscShort25", "fscShortImprove24"],
  "rec-ai-labor": ["bokAI26", "bokAI25", "bokEmployment25"],
  "rec-ai-finance": ["fscAI24", "fscAirgap24", "bokAI26"],
  "rec-data-scraping": ["fscAirgap24", "fscAI24"],
  "rec-tariffs": ["kiepTariff25", "kiepWorld26", "keximIndustry26"],
  "rec-semiconductor": ["keximSemi26", "keximIndustry26", "kiepWorld26"],
  "rec-fx-hours": ["kcmiFxHours26", "bokFxExplain26"],
  "rec-deposit-limit": ["kdicLimit25", "kdicBankResolution24", "kdicBankrun24"],
  "rec-bank-resolution": ["kdicBankResolution24", "kdicBankrun24", "bokFsr26"],
  "rec-sme-credit": ["koditRateRisk", "koditCreditModel", "kcmiCorpFinance23"],
  "rec-pcbo": ["koditPcbo", "koditPlan26", "kcmiCorpFinance23"],
  "rec-climate": ["bokClimate21", "kdiCarbon24"],
  "rec-carbon-border": ["kiepCbam26", "kiepCbamSme", "kdiCarbon24"],
  "rec-lowbirth-region": ["bokRegion23", "bokRegion26", "bokPopulationConsumption25"],
  "rec-pension": ["kdiPension24", "bokPopulationConsumption25"],
  "rec-cbdc": ["bokCBDC24", "bokStablecoin25", "kcmiStableTreasury25"],
  "rec-capitalmarket-growth": ["kcmiSmallIB26", "kcmiUnicorn24", "kcmiCorpFinance23"]
};

const state = {
  view: "past",
  type: "all",
  secondary: "all",
  query: "",
  noteOnly: false,
  activeTopicId: null
};

const NOTE_KEY = "financeTopicArchive.notes.v1";
const THEME_KEY = "financeTopicArchive.theme.v1";

const el = {
  pastTab: document.getElementById("pastTab"),
  recommendedTab: document.getElementById("recommendedTab"),
  searchInput: document.getElementById("searchInput"),
  typeFilters: document.getElementById("typeFilters"),
  secondaryFilters: document.getElementById("secondaryFilters"),
  noteOnlyCheckbox: document.getElementById("noteOnlyCheckbox"),
  clearFiltersBtn: document.getElementById("clearFiltersBtn"),
  topicGrid: document.getElementById("topicGrid"),
  emptyState: document.getElementById("emptyState"),
  resultSummary: document.getElementById("resultSummary"),
  pastCount: document.getElementById("pastCount"),
  recommendedCount: document.getElementById("recommendedCount"),
  noteCount: document.getElementById("noteCount"),
  backdrop: document.getElementById("backdrop"),
  drawer: document.getElementById("topicDrawer"),
  drawerCloseBtn: document.getElementById("drawerCloseBtn"),
  drawerMeta: document.getElementById("drawerMeta"),
  drawerTitle: document.getElementById("drawerTitle"),
  drawerDescription: document.getElementById("drawerDescription"),
  whyHeading: document.getElementById("whyHeading"),
  resourceList: document.getElementById("resourceList"),
  topicNote: document.getElementById("topicNote"),
  saveStatus: document.getElementById("saveStatus"),
  clearCurrentNoteBtn: document.getElementById("clearCurrentNoteBtn"),
  exportNotesBtn: document.getElementById("exportNotesBtn"),
  importNotesInput: document.getElementById("importNotesInput"),
  themeToggle: document.getElementById("themeToggle"),
  toast: document.getElementById("toast")
};

function getNotes() {
  try { return JSON.parse(localStorage.getItem(NOTE_KEY) || "{}"); }
  catch { return {}; }
}
function saveNotes(notes) {
  localStorage.setItem(NOTE_KEY, JSON.stringify(notes));
  updateStats();
}
function allTopics() { return [...PAST_TOPICS, ...RECOMMENDED_TOPICS]; }
function currentTopics() { return state.view === "past" ? PAST_TOPICS : RECOMMENDED_TOPICS; }
function topicById(id) { return allTopics().find(t => t.id === id); }
function hasNote(id) { return Boolean((getNotes()[id] || "").trim()); }

function escapeHtml(value="") {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function setView(view) {
  state.view = view;
  state.secondary = "all";
  [el.pastTab, el.recommendedTab].forEach(btn => {
    const active = btn.dataset.view === view;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  renderSecondaryFilters();
  renderTopics();
}

function secondaryValues() {
  const topics = currentTopics();
  const key = state.view === "past" ? "institution" : "category";
  return [...new Set(topics.map(t => t[key]))].sort((a,b) => String(a).localeCompare(String(b), "ko"));
}

function renderSecondaryFilters() {
  const label = state.view === "past" ? "기관 전체" : "분야 전체";
  el.secondaryFilters.innerHTML = [
    `<button class="chip ${state.secondary==="all"?"active":""}" data-secondary="all">${label}</button>`,
    ...secondaryValues().map(v => `<button class="chip ${state.secondary===v?"active":""}" data-secondary="${escapeHtml(v)}">${escapeHtml(v)}</button>`)
  ].join("");
}

function normalize(text) {
  return String(text ?? "").toLowerCase().replace(/\s+/g, "");
}

function filteredTopics() {
  const notes = getNotes();
  return currentTopics()
    .filter(t => state.type === "all" || t.types.includes(state.type))
    .filter(t => {
      if (state.secondary === "all") return true;
      return (state.view === "past" ? t.institution : t.category) === state.secondary;
    })
    .filter(t => !state.noteOnly || Boolean((notes[t.id] || "").trim()))
    .filter(t => {
      if (!state.query.trim()) return true;
      const haystack = [
        t.title, t.subtitle, t.institution, t.category, t.year,
        ...(t.types || []), ...(t.keywords || []), t.reason || ""
      ].join(" ");
      return normalize(haystack).includes(normalize(state.query));
    })
    .sort((a,b) => {
      if (state.view === "recommended") {
        return (a.priority ?? 9) - (b.priority ?? 9) || a.title.localeCompare(b.title, "ko");
      }
      const ay = typeof a.year === "number" ? a.year : -1;
      const by = typeof b.year === "number" ? b.year : -1;
      return by - ay || a.institution.localeCompare(b.institution, "ko");
    });
}

function topicCard(t) {
  const noteMark = hasNote(t.id) ? `<span class="note-dot" title="메모 있음" aria-label="메모 있음"></span>` : "";
  const typeBadges = t.types.map(type => `<span class="badge type">${escapeHtml(type)}</span>`).join("");
  const context = state.view === "past"
    ? `${escapeHtml(t.institution)} · ${escapeHtml(t.year)}`
    : `${escapeHtml(t.category)} · 우선순위 ${escapeHtml(t.priority)}`;
  const priority = state.view === "recommended" ? `<span class="priority">P${t.priority}</span>` : noteMark;
  return `
    <article class="topic-card" tabindex="0" role="button" data-id="${escapeHtml(t.id)}" aria-label="${escapeHtml(t.title)} 자세히 보기">
      <div class="card-top">
        <div class="meta-pills">
          ${typeBadges}
          <span class="badge">${escapeHtml(t.category)}</span>
        </div>
        ${priority}
      </div>
      <h2>${escapeHtml(t.title)}</h2>
      <p class="card-subtitle">${escapeHtml(t.subtitle)}</p>
      <div class="card-bottom">
        <span>${context}${state.view==="recommended" && hasNote(t.id) ? " · 메모 있음" : ""}</span>
        <span class="card-arrow">↗</span>
      </div>
    </article>
  `;
}

function renderTopics() {
  const topics = filteredTopics();
  el.topicGrid.innerHTML = topics.map(topicCard).join("");
  el.emptyState.hidden = topics.length !== 0;
  const unit = state.view === "past" ? "기출" : "추천";
  el.resultSummary.textContent = `${topics.length}개의 ${unit} 주제`;
}

function updateStats() {
  el.pastCount.textContent = PAST_TOPICS.length;
  el.recommendedCount.textContent = RECOMMENDED_TOPICS.length;
  el.noteCount.textContent = Object.values(getNotes()).filter(v => String(v).trim()).length;
}

function renderResources(topic) {
  const keys = TOPIC_REPORTS[topic.id] || topic.resources || [];
  const resources = keys.map(key => RESOURCE_CATALOG[key]).filter(Boolean);

  if (!resources.length) {
    el.resourceList.innerHTML = `<p class="card-subtitle">아직 직접 연결한 자료가 없습니다.</p>`;
    return;
  }

  el.resourceList.innerHTML = resources.map((r, index) => `
    <article class="resource-item">
      <div class="resource-head">
        <div>
          <div class="resource-kicker">${escapeHtml(r.kind || "공식 자료")} · ${escapeHtml(r.date || "")}</div>
          <strong>${escapeHtml(r.title)}</strong>
          <div class="resource-org">${escapeHtml(r.org)}</div>
        </div>
        <span class="resource-number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <p>${escapeHtml(r.desc)}</p>
      <div class="resource-actions">
        <a class="resource-link primary" href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">이 자료 바로 열기 ↗</a>
      </div>
    </article>
  `).join("");
}

function openDrawer(id) {
  const topic = topicById(id);
  if (!topic) return;
  state.activeTopicId = id;
  const meta = state.view === "past"
    ? `${topic.institution} · ${topic.year} · ${topic.types.join(" / ")} · ${topic.category}`
    : `추천 P${topic.priority} · ${topic.types.join(" / ")} · ${topic.category}`;
  el.drawerMeta.textContent = meta;
  el.drawerTitle.textContent = topic.title;
  el.whyHeading.textContent = state.view === "past" ? "출제 포인트" : "왜 지금 볼 주제인가";
  el.drawerDescription.textContent = state.view === "past" ? topic.subtitle : topic.reason;
  renderResources(topic);
  el.topicNote.value = getNotes()[id] || "";
  el.saveStatus.textContent = el.topicNote.value.trim() ? "저장됨" : "아직 메모 없음";
  el.saveStatus.classList.remove("saving");

  el.backdrop.hidden = false;
  requestAnimationFrame(() => el.drawer.classList.add("open"));
  el.drawer.setAttribute("aria-hidden","false");
  document.body.classList.add("drawer-open");
  setTimeout(() => el.drawerCloseBtn.focus(), 100);
}

function closeDrawer() {
  el.drawer.classList.remove("open");
  el.drawer.setAttribute("aria-hidden","true");
  document.body.classList.remove("drawer-open");
  setTimeout(() => { el.backdrop.hidden = true; }, 280);
  state.activeTopicId = null;
}

let saveTimer;
function handleNoteInput() {
  if (!state.activeTopicId) return;
  el.saveStatus.textContent = "저장 중…";
  el.saveStatus.classList.add("saving");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const notes = getNotes();
    notes[state.activeTopicId] = el.topicNote.value;
    saveNotes(notes);
    el.saveStatus.textContent = el.topicNote.value.trim() ? "저장됨" : "아직 메모 없음";
    el.saveStatus.classList.remove("saving");
    renderTopics();
  }, 350);
}

function clearCurrentNote() {
  if (!state.activeTopicId) return;
  const notes = getNotes();
  delete notes[state.activeTopicId];
  saveNotes(notes);
  el.topicNote.value = "";
  el.saveStatus.textContent = "아직 메모 없음";
  renderTopics();
  toast("메모를 삭제했습니다.");
}

function exportNotes() {
  const payload = {
    app: "Finance Topic Archive",
    version: 1,
    exportedAt: new Date().toISOString(),
    notes: getNotes()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const date = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `finance-topic-notes-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast("노트 백업 파일을 만들었습니다.");
}

async function importNotes(file) {
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const imported = data.notes && typeof data.notes === "object" ? data.notes : data;
    if (!imported || typeof imported !== "object" || Array.isArray(imported)) throw new Error("invalid");
    const merged = {...getNotes(), ...imported};
    saveNotes(merged);
    renderTopics();
    if (state.activeTopicId) el.topicNote.value = merged[state.activeTopicId] || "";
    toast("노트를 가져왔습니다.");
  } catch {
    toast("올바른 노트 JSON 파일이 아닙니다.");
  } finally {
    el.importNotesInput.value = "";
  }
}

function toast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.toast.classList.remove("show"), 1900);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  el.themeToggle.setAttribute("aria-label", theme === "dark" ? "라이트 모드 전환" : "다크 모드 전환");
}
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(theme);
}

function resetFilters() {
  state.type = "all";
  state.secondary = "all";
  state.query = "";
  state.noteOnly = false;
  el.searchInput.value = "";
  el.noteOnlyCheckbox.checked = false;
  [...el.typeFilters.querySelectorAll(".chip")].forEach(btn => btn.classList.toggle("active", btn.dataset.type === "all"));
  renderSecondaryFilters();
  renderTopics();
}

el.pastTab.addEventListener("click", () => setView("past"));
el.recommendedTab.addEventListener("click", () => setView("recommended"));

el.searchInput.addEventListener("input", e => {
  state.query = e.target.value;
  renderTopics();
});

el.typeFilters.addEventListener("click", e => {
  const btn = e.target.closest("[data-type]");
  if (!btn) return;
  state.type = btn.dataset.type;
  [...el.typeFilters.querySelectorAll(".chip")].forEach(b => b.classList.toggle("active", b === btn));
  renderTopics();
});

el.secondaryFilters.addEventListener("click", e => {
  const btn = e.target.closest("[data-secondary]");
  if (!btn) return;
  state.secondary = btn.dataset.secondary;
  renderSecondaryFilters();
  renderTopics();
});

el.noteOnlyCheckbox.addEventListener("change", e => {
  state.noteOnly = e.target.checked;
  renderTopics();
});

el.clearFiltersBtn.addEventListener("click", resetFilters);

el.topicGrid.addEventListener("click", e => {
  const card = e.target.closest(".topic-card");
  if (card) openDrawer(card.dataset.id);
});
el.topicGrid.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("topic-card")) {
    e.preventDefault();
    openDrawer(e.target.dataset.id);
  }
});

el.drawerCloseBtn.addEventListener("click", closeDrawer);
el.backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && el.drawer.classList.contains("open")) closeDrawer();
  if (e.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    e.preventDefault();
    el.searchInput.focus();
  }
});

el.topicNote.addEventListener("input", handleNoteInput);
el.clearCurrentNoteBtn.addEventListener("click", clearCurrentNote);


el.exportNotesBtn.addEventListener("click", exportNotes);
el.importNotesInput.addEventListener("change", e => importNotes(e.target.files?.[0]));

el.themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

initTheme();
updateStats();
renderSecondaryFilters();
renderTopics();
