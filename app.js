const RESOURCE_CATALOG = {
  bokIssue: {
    org: "한국은행",
    title: "BOK 이슈노트",
    url: "https://www.bok.or.kr/portal/singl/newsData/list.do?menuNo=200433",
    desc: "거시경제·금융시장·구조변화 현안을 짧고 밀도 있게 분석하는 자료입니다."
  },
  bokStability: {
    org: "한국은행",
    title: "금융안정보고서",
    url: "https://www.bok.or.kr/portal/main/contents.do?menuNo=200068",
    desc: "가계부채, 금융기관 건전성, 자산시장, 시스템리스크를 종합적으로 볼 때 유용합니다."
  },
  bokMonetary: {
    org: "한국은행",
    title: "통화정책방향 결정회의",
    url: "https://www.bok.or.kr/portal/singl/crncyPolicyDrcMtg/listYear.do?menuNo=200755&mtgSe=A",
    desc: "기준금리 판단, 물가·성장·환율에 대한 중앙은행의 최신 시각을 확인할 수 있습니다."
  },
  fsc: {
    org: "금융위원회",
    title: "금융위원회 보도자료",
    url: "https://www.fsc.go.kr/no010101",
    desc: "자본시장·가계부채·디지털금융·정책금융 등 제도 변화의 공식 원문을 확인할 수 있습니다."
  },
  kcmi: {
    org: "자본시장연구원",
    title: "최신 연구보고서",
    url: "https://www.kcmi.re.kr/report/report_list",
    desc: "주주가치, 지배구조, 공시, 외환·채권·증권산업 등 자본시장 논제를 깊게 공부하기 좋습니다."
  },
  kdiOutlook: {
    org: "KDI",
    title: "KDI 경제전망",
    url: "https://www.kdi.re.kr/research/economy",
    desc: "성장률·물가·소비·투자·수출입과 대외여건을 한 번에 정리할 수 있습니다."
  },
  kdiTrend: {
    org: "KDI",
    title: "KDI 경제동향",
    url: "https://www.kdi.re.kr/research/monTrends",
    desc: "월별 국내외 거시 흐름과 주요 지표를 짧게 업데이트할 때 유용합니다."
  },
  kdiHub: {
    org: "KDI 경제교육·정보센터",
    title: "국내연구자료",
    url: "https://eiec.kdi.re.kr/policy/domesticList.do",
    desc: "여러 국책·연구기관의 최신 정책 보고서를 한 곳에서 탐색할 수 있습니다."
  },
  krx: {
    org: "한국거래소",
    title: "한국거래소",
    url: "https://www.krx.co.kr/",
    desc: "시장제도, 밸류업, 공매도, 상장·공시 등 거래소 고유 이슈의 공식 자료를 확인합니다."
  },
  kdic: {
    org: "예금보험공사",
    title: "예금보험공사 연구·제도 자료",
    url: "https://www.kdic.or.kr/",
    desc: "예금자보호, 금융회사 정리, 금융안정, 리스크리뷰 등 예보 관점의 자료를 볼 수 있습니다."
  },
  kodit: {
    org: "신용보증기금",
    title: "중소기업금융연구",
    url: "https://www.kodit.co.kr/kodit/cm/cntnts/cntntsView.do?cntntsId=11273&mi=2649",
    desc: "중소기업 금융, 신용보증, 정책금융과 기업 신용위험을 공부하기 좋은 신보 발간자료입니다."
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
  el.resourceList.innerHTML = topic.resources.map(key => {
    const r = RESOURCE_CATALOG[key];
    if (!r) return "";
    const query = topic.keywords.slice(0, 3).join(" ");
    return `
      <article class="resource-item">
        <div class="resource-head">
          <div>
            <strong>${escapeHtml(r.title)}</strong>
            <div class="resource-org">${escapeHtml(r.org)}</div>
          </div>
        </div>
        <p>${escapeHtml(r.desc)}</p>
        <div class="query-text">검색어 · ${escapeHtml(query)}</div>
        <div class="resource-actions">
          <a class="resource-link" href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">자료실 열기 ↗</a>
          <button class="copy-query" type="button" data-query="${escapeHtml(query)}">검색어 복사</button>
        </div>
      </article>
    `;
  }).join("");
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

el.resourceList.addEventListener("click", async e => {
  const btn = e.target.closest(".copy-query");
  if (!btn) return;
  try {
    await navigator.clipboard.writeText(btn.dataset.query);
    toast("검색어를 복사했습니다.");
  } catch {
    toast("복사하지 못했습니다. 검색어를 직접 선택해 주세요.");
  }
});

el.exportNotesBtn.addEventListener("click", exportNotes);
el.importNotesInput.addEventListener("change", e => importNotes(e.target.files?.[0]));

el.themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

initTheme();
updateStats();
renderSecondaryFilters();
renderTopics();
