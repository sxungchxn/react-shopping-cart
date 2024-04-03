# react-shopping-cart

# step1 필수 요구사항

##  TanStack Query를 기반으로 상태 분리

- [x] 낙관적 업데이트를 활용하여 UX/UI 증진
  - 장바구니 적용에 사용

- [x] MSW를 활용한 API mocking

- [x] 상태 관리 라이브러리가 필요하다면 추가적으로 선택하고 적용한다.
    - [x] 전략을 세우고 PR 본문에 내용을 작성한다.

## GNB

- [x] 로고를 누르면 상품목록 페이지로 이동한다.
- [x] 장바구니 버튼을 누르면 장바구니 페이지로 이동한다.
- [x] 주문목록 버튼을 누르면 주문목록 페이지로 이동한다.


## 상품목록

- [x] 상품들은 n x 4 레이아웃으로 보여진다.
- [x] 상품들에는 사진, 이름, 금액이 보여진다.
- [x] 장바구니 버튼을 클릭하면 해당되는 상품이 장바구니 목록에 추가되며 낙관적 업데이트가 적용된다


# step2 필수 요구사항


- [x] 낙관적 업데이트를 활용하여 UX/UI 증진
- [x] refetch() 사용 금지 있다면 제거

- [x] MSW를 활용한 API mocking
- [x] Endpoint만 변경하면 언제든 Real API를 바라볼 수 있다고 가정하고 상상한다.
  - [x] Real API 없이 로컬에서만 동작하는 상태로 리뷰 받는 것이 기본 원칙

- [ ] 상태 관리 라이브러리가 필요하다면 추가적으로 선택하고 적용한다.
    - [ ] 전략을 세우고 PR 본문에 내용을 작성한다.
    - [ ] 선택한 상태 관리 라이브러리에 대응되는 테스트 전략을 세우고 PR 본문에 내용을 작성한다.
    - [ ] 없다면 React Testing Library & Jest를 활용해 자유로운 단위의 테스트라도 진행한다.


# 선택 요구사항 (심화)

## 상품상세

- [x] 페이지에는 상품 사진, 이름, 금액 정보가 보여진다.
- [x] 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.
- [x] 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 담긴다.


## 주문 상세

- [x] 주문 정보가 보여진다.
- [ ] 장바구니 버튼을 클릭하면, 해당 상품이 장바구니에 담기고 장바구니 이동 선택 모달이 보여진다.
- [x] 장바구니 이동 버튼을 누르면 장바구니 페이지로 이동한다.


## UX/UI

- [x] 반응형 레이아웃을 구현한다.
- [ ] 사용성 개선
    - [ ] 사용자를 위한 로딩 환경 개선
    - [ ] 상품이 없을 때와 같은 다양한 Edge Case 대응
    - [x] 반응형 레이아웃 구현
    - [ ] 별도의 모바일 레이아웃 추가 제공

- [ ] 매출 증대 및 마케팅을 위해 별도의 기능 구현 (별도의 API 없음)
    - [ ] 브라우저 새로고침시 모든 상태 유지
    - [ ] 흐름을 고려한 맞춤 큐레이팅 상품 추천 기능
    - [ ] 구매 유도를 위한 상품 찜 페이지

- [ ] 매출 증대 및 마케팅을 위한 별도의 도구 추가
    - [ ] Google Analytics
    - [ ] Google Tag Manager

