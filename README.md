# 케어닥 간병인 신청 서비스

간병인을 찾기 위해 돌봄 유형, 스케줄, 주소, 연락처 등의 정보를 입력하여 간병인 신청 정보를 등록하는 서비스입니다.

## 사용한 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> <img src="https://img.shields.io/badge/Styled Components-E6526F.svg?&style=for-the-badge&logo=Emotion&logoColor=000"/>

## 프로젝트 실행 방법

- 배포 사이트 :

- 로컬 
1. `git clone https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-6.git`
2. `npm install`
3. `npm run start`

   
## 프로젝트 구조

```
--📁 src
  ---📁 assets ➡ 아이콘 등의 에셋 폴더
  ---📁 components ➡ 컴포넌트 폴더
  ---📁 constants ➡ 전역 상수 폴더
  ---📁 pages ➡ 페이지 컴포넌트 폴더
  ---📁 hooks - 커스텀 훅을 모아둔 폴더
  ---📁 styles ➡ 스타일 관련 파일 폴더
```

## 팀 멤버

| 이름                                       | 직책 | 역할                                       |
| ------------------------------------------ | ---- | ----------------------------------- |
| [✏️예효은](https://github.com/ye-yo)       | 팀장 | 공통 컴포넌트 및 주소 입력 페이지 구현             |
| [⚡️박진용](https://github.com/jinyongp)   | 팀원 | 전화번호 인증 기능 및 신청완료 페이지 구현         |           
| [✨김정훈](https://github.com/jeonghun10)  | 팀원 | 스케줄 입력 페이지 구현  |
| [🎨문선경](https://github.com/dev-seomoon) | 팀원 | 개발 환경 구축 및 기간 선택 캘린더 구현          |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 시작화면 및 돌봄유형 선택 페이지 구현              |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | 공통 컴포넌트 및 주소 API 통한 주소 검색 기능 구현 |


---

## 구현한 기능 목록

- 시작 화면
- 돌봄 유형 선택
- 스케줄 입력 및 캘린더 통한 기간 선택
- 주소 검색 및 상세 주소 입력
- 신청 정보 확인 및 전화번호 인증
- 신청 완료 화면
---

## 박진용

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 김정훈

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 문선경

https://user-images.githubusercontent.com/52448114/157107918-80640368-8e02-419e-8442-40680fb237f5.mov

- @ye-yo님이 프로젝트 개발환경을 설정한 후에, eslint, prettier lint-staged 등으로 컨벤션 설정을 했습니다.
- 스케줄 입력 페이지에서, 날짜를 선택할 수 있는 Date picker 컴포넌트를 구현했습니다.

### 구현한 방법

#### date picker 구현

- Context API 사용 :
    
    캘린더의 각 날짜 요소들을 컴포넌트로 분리하여 이벤트 처리 등을 하기 위해 아토믹한 패턴으로 구현했는데,  
    그러다보니 depth가 깊어져서 캘린더 뷰 컴포넌트에서 Day 컴포넌트에 도달하기까지  
    props drilling이 발생하는 문제가 있었습니다.  
    이 문제를 해결하기 위해서 DateContext를 생성해서 date picker 관련 상태와 함수들을  
    컨텍스트로 관리했습니다.  
    
    참고) 컴포넌트 구조
    
      {/* ScheduleModal 컴포넌트 */}
      <ScheduleModal>
        <Header />
        <CalendarView>
          <Calender />
          <Devider />
          <Calendar />
        </CalendarView>
      </ScheduleModal>;
      
      {/* Calendar 컴포넌트 */}
      <Calendar>
        <CalendarHeader />
        <CalendarBody>
          <WeekTitle />
          <Week>
            <DayCell><Day /></DayCell>
            <DayCell><Day /></DayCell>
            ...
          </Week>
          <Week />
          <Week />
          ...
        </CalendarBody>
      </Calendar>
    
    
- 케어닥 홈페이지에 실제로 구현되어 있는 Date picker 동작을 분석하여 최대한 동일하게 기능을 구현했습니다.  
    구현한 기능들은 다음과 같습니다.  
    
    - 시작일-종료일 범위 지정 기능
    - 한 화면에 달력 두 개씩 보여주기 (이번 달, 다음 달 달력)
    - prev month, next month 버튼을 눌러서 이전 달, 다음 달로 이동할 수 있음
    - 지난 날짜는 회색으로 표시하고 클릭 이벤트 비활성화
    - 오늘 날짜는 회색 배경으로 강조 


- Date Picker 컴포넌트는 페이지가 아닌 별도의 모달로 만들어 구현했습니다.  
    저희 팀은 page frame 컴포넌트를 만들고, 바뀌는 부분만 children으로 전달해 사용하면서,  
    각 page 간에 차이가 있는 부분들을 props을 사용해 변경을 해주는 방식을 사용했는데요.  
    Date Picker의 경우 다른 page들과 차이가 나는 부분이 많아서  
    props 전달이 많아지는 점이 비효율적이라고 생각해서 모달로 구현했습니다.  
    

### 어려웠던 점 (에러 핸들링)

- week 컴포넌트, day 컴포넌트 등 배열로 사용하는 컴포넌트가 많고,  
    이러한 컴포넌트들은 전부 유니크한 키값이 필요한데,  
    되도록이면 컴포넌트 의미에 맞는 키값을 주고 싶어서 처음에는 날짜를 활용해서 키값을 주었습니다.  
    날짜로 키값을 주려면 컴포넌트 구조 상 반복문에서 iterator를 키에 포함시켜야 했는데,  
    iterator를 사용해 키값을 주다보니 버그가 종종 발생했습니다.  
    
    => react-uuid 패키지를 설치해서 uuid() 메소드로 키값을 생성하여 문제를 해결했습니다.  
    
- Date 객체를 비교할 때, 시간을 제외하고 날짜만 비교해야할 필요가 있었고,  
    두 Date 객체의 일치 여부도 비교해야 했는데  
    일반적인 Date 객체 사용법으로는 구현할 수가 없는 이슈가 있었습니다.  
    Date 객체 자체는 숫자나 문자열로 변환하지 않는 이상  
    비교 연산은 가능하지만 동등/일치 연산을 할 수가 없기 때문입니다.   
    
    => Date 객체를 문자열로 변환하여 동등/일치 비교 연산을 하는 함수를 따로 만들어서 사용했습니다.  
    그리고 이 함수 안에서 toDateString() 메소드를 사용해서,  
    시간을 제외한 날짜만 문자열로 변환해 날짜만 비교할 수 있도록 처리했습니다.  


## 심채윤

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 예효은

공통 컴포넌트인 Step, Footer 및 주소 입력 페이지 구현

### 구현한 방법

#### Step 컴포넌트

step 컴포넌트는 현재 step에 따라 내용이 다르게 렌더링 될 수 있도록 Context API로 `StepContext`를 생성하여 step 내부의 페이지 컴포넌트에서 제목이나 footer 숨김 여부 등을 처리할 수 있게 하였습니다. 또한 전체 스텝 페이지가 모두 동일한 레이아웃은 아니기 때문에 footer 숨김여부, title 숨김여부를 `hideFooter`, `hideTitle` 로 전달할 수 있게 하여 페이지 별로 레이아웃을 다르게 구성할 수 있게 하였습니다.

```js
export const StepContext = createContext({
  currentStep: {
    totalStep: 0,
    number: null,
    stepName: '',
    stepTitle: '',
    hideFooter: false,
    hideTitle: false,
    hideHeader: false,
  },
  setCurrentStep: () => {},
});
```

이번 프로젝트에서는 router를 사용하지 않기로 해서 router 없이도 페이지 전환이 가능하도록 구현이 필요했습니다.
이에 `step`이란 컴포넌트 배열을 만들어서 step 페이지를 순서대로 저장해두고, 렌더링 시에는 `currentStep` state의 number 값에 따라 해당하는 컴포넌트가 렌더링 될 수 있게 하였습니다.

```js
{
  !!currentStep.number ? <FirstPage /> : <Step>{step[currentStep.number - 1]}</Step>;
}
```

#### Footer 컴포넌트

footer 컴포넌트는 이전, 다음 스텝으로의 페이지 전환과 버튼 활성화/비활성화 기능을 구현해야 했습니다. 이를 위해서 footer 컴포넌트 내부에서 button click 이벤트를 구현하였고 버튼을 활성화 시킬지 여부는 각각의 페이지에서 처리할 수 있도록 하기 위해서 `FooterContext`를 생성하였습니다.

```js
export const FooterContext = createContext({
  activeNext: false,
  setActiveNext: () => {},
});
```

#### SearchBox 컴포넌트 및 주소 입력 페이지

`<SearchBox/>` 컴포넌트는 주소 입력 페이지 및 검색 페이지에서 활용되어 컴포넌트로 분리하여 구현했습니다. 다만, 주소 입력 페이지에서는 입력을 막고 클릭시 modal창이 오픈되도록 해야 했기때문에 `readonly` props 및 `handleBoxClick()` 메소드를 전달받아 처리하도록 만들었습니다.
주소 입력 페이지는 주소 및 상세 주소가 모두 작성되었는지 확인하여 footer의 `activeNext` 값을 true/false로 처리하였습니다. 또한 주소 값이 있을 경우에는 재검색 버튼이 나타나도록 만들었습니다.

### 어려웠던 점 (에러 핸들링)

- 공통 state의 대해 논의 부족 문제
  : 공통으로 다루는 state에 대한 논의를 부족한 상태로 개발에 들어가서 개발하면서 회의가 거듭되어서 아쉬운 점이 있었습니다. 이를 통해서 개발도 중요하지만 설계 과정도 매우 중요하다는 것을 다시 느끼게 되었습니다.

- `<SearchBox/>` 구현 방식 문제
  : `<SearchBox/>` 구현 시, 제가 생각하는 구현 방식과 팀원 간의 의견이 상이한 부분이 있었습니다. GitHub PR 기능을 통해서 다양한 의견을 들어볼 수 있었고, 이에 적합한 방식으로 수정을 할 수 있었습니다. 또한 실제 사이트가 존재한다면 최대한 참고하여 기능을 구현하는 것도 좋은 방법이라는 것을 느꼈습니다.


## 이예지

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)
