# Finance Topic Archive

금융공기업 기출 및 시의성 있는 추천 주제를 **기관 1차 자료와 연결해 공부하는 정적 웹**입니다.

## 들어간 기능

- 기출 아카이브 / 추천 주제 탭
- 기관·분야·논술·PT·토론 필터
- 주제·기관·키워드 통합 검색
- 주제 클릭 시 관련 공식 자료실과 추천 검색어 표시
- 주제별 개인 메모 자동 저장
- 메모가 있는 주제만 보기
- 전체 노트 JSON 내보내기 / 가져오기
- 라이트·다크 모드
- 노트북 / 태블릿 / 스마트폰 반응형 레이아웃
- 외부 라이브러리 없는 순수 HTML/CSS/JavaScript

## 메모 저장 방식

현재 버전은 `localStorage`를 사용합니다.

- 같은 기기 + 같은 브라우저 + 같은 GitHub Pages 주소에서는 메모가 유지됩니다.
- 노트북과 아이패드 사이에 **자동 동기화되지는 않습니다.**
- 다른 기기로 옮길 때는 `노트 내보내기` → JSON 파일 → `노트 가져오기`를 사용하세요.
- 이후 Supabase/Firebase 같은 백엔드를 붙이면 로그인 기반 기기간 동기화로 확장할 수 있습니다.

## 로컬에서 확인하기

`index.html`을 바로 열어도 대부분 동작합니다.

조금 더 실제 배포 환경처럼 확인하려면 이 폴더에서:

```bash
python3 -m http.server 8000
```

그 다음 브라우저에서 `http://localhost:8000`을 여세요.

## 새 GitHub 계정으로 GitHub Pages 만들기

1. 새 GitHub 계정을 만듭니다.
2. 새 공개 저장소를 하나 만듭니다. 예: `finance-topic-archive`
3. 이 폴더의 `index.html`, `styles.css`, `app.js`, `README.md`를 저장소 최상단에 업로드합니다.
4. GitHub 저장소에서 **Settings → Pages**로 들어갑니다.
5. 배포 소스를 **Deploy from a branch**로 선택하고 `main` 브랜치의 `/ (root)`를 지정합니다.
6. 저장하면 GitHub Pages 주소가 생성됩니다.

일반적인 프로젝트 저장소라면 주소 형태는 다음과 같습니다.

`https://<GitHub아이디>.github.io/finance-topic-archive/`

저장소 이름을 `<GitHub아이디>.github.io`로 만들면 루트 주소 형태로도 운영할 수 있습니다.

## 주제 추가하는 법

`app.js`의 `PAST_TOPICS` 또는 `RECOMMENDED_TOPICS` 배열에 항목을 추가하면 카드가 자동으로 생성됩니다.

예:

```js
{
  id: "rec-example",
  priority: 1,
  types: ["논술", "PT"],
  category: "통화·거시",
  title: "새로운 주제",
  subtitle: "카드에 보일 짧은 설명",
  reason: "왜 지금 공부할 주제인지",
  keywords: ["검색어1", "검색어2"],
  resources: ["bokIssue", "kdiOutlook"]
}
```

## 공식 자료 링크

현재 연결된 주요 공식 자료실:

- 한국은행 BOK 이슈노트
- 한국은행 금융안정보고서
- 한국은행 통화정책방향 결정회의
- 금융위원회 보도자료
- 자본시장연구원 최신보고서
- KDI 경제전망 / 경제동향
- KDI 경제교육·정보센터 국내연구자료
- 한국거래소
- 예금보험공사
- 신용보증기금 중소기업금융연구

기관 사이트 개편으로 개별 문서 주소가 바뀌는 문제를 줄이기 위해, 기본 구조는 **공식 자료실 + 주제별 추천 검색어** 방식으로 만들었습니다.
