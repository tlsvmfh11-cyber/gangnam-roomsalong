# gangnam-roomsalong v2 (멀티페이지 SEO 개편판)

기존 원페이지 사이트를 키워드별 8개 페이지로 분리한 버전입니다.
이 폴더 전체가 사이트 루트이며, 그대로 배포하면 됩니다.

## 페이지 구조

| URL | 타깃 키워드 | 파일 |
|---|---|---|
| `/` | 강남 룸싸롱 (허브) | `index.html` |
| `/tenpro/` | 강남 텐프로, 텐카페 | `tenpro/index.html` |
| `/jjeomo/` | 강남 쩜오 | `jjeomo/index.html` |
| `/hyperpublic/` | 강남 하이퍼블릭, 퍼블릭 | `hyperpublic/index.html` |
| `/price/` | 룸싸롱 가격, 정찰제 | `price/index.html` |
| `/choice/` | 초이스 시스템 | `choice/index.html` |
| `/location/` | 역삼/선릉/청담/강남역 룸싸롱 | `location/index.html` |
| `/guide/` | 룸싸롱 예약, 이용 방법, FAQ | `guide/index.html` |

## 적용된 SEO

- 페이지별 고유 title / meta description / canonical / OG·Twitter 태그
- 페이지별 JSON-LD: Article + BreadcrumbList + FAQPage (홈은 WebSite + LocalBusiness)
- 전 페이지 공통 내비게이션 + 푸터 링크 + 본문 컨텍스트 내부링크 (크롤링 경로 확보)
- 눈에 보이는 브레드크럼 + 구조화 데이터 일치
- sitemap.xml 8개 URL 등록, robots.txt 유지
- 스팸 신호가 되는 meta keywords / revisit-after / rating / distribution 태그 제거
- 이미지 width/height 지정, 히어로는 eager+fetchpriority, 나머지 lazy 로딩
- CSS/JS 외부 파일 분리 (`assets/style.css`, `assets/protect.js`) — 캐싱 개선

## 배포 방법 (기존 레포 교체)

1. 기존 레포(gangnam-roomsalong)의 `index.html`, `sitemap.xml`, `robots.txt` 삭제
2. 이 폴더의 **모든 파일/폴더**를 레포 루트에 복사 (이미지·파비콘·인증파일 포함되어 있음)
3. commit & push → Vercel 자동 배포
4. 배포 후 확인: `/tenpro/`, `/price/` 등이 정상적으로 열리는지 확인

## 배포 후 필수 작업 (Search Console)

1. Google Search Console → Sitemaps → `sitemap.xml` 재제출
2. URL 검사 도구로 8개 URL 각각 "색인 생성 요청"
3. 네이버 서치어드바이저 → 사이트맵 재제출
4. 2~4주 후 실적 보고서에서 페이지별 노출/순위 확인

## 참고 (현실적인 기대치)

색인은 되어 있으나 노출이 0인 상태는 구글이 콘텐츠를 성인 카테고리로
분류해 세이프서치(기본값)에서 필터링하고 있을 가능성이 큽니다.
페이지 분리 + 구조 개선은 키워드 타깃팅과 크롤링 효율을 높여주지만,
카테고리 필터 자체를 우회하지는 못합니다. 신규 페이지 색인 후에도
노출이 0이라면 검색 외 유입 채널을 병행하는 것이 현실적입니다.
