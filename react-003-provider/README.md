# Hook 함수

- React 가 시작될 때는 모든 컴포넌트가 class 기반이었다.
- JS 에서 class 는 다른 언어에 비해 사용법이 다소 까다롭다.  
  그래서 React 가 버전 업이 되면서 class 기반에서 함수 기반으로 변환되어간다.
- 현재도 class 기반의 코드를 사용할 수 있고 reactjs.org 의 공식문서에서도  
  class 기반을 제거하거나, 포기하지 않는다고 한다.
- 하지만 거의 공식적인 입장으로 class 기반 보다는 함수 기반으로 사용하는 것을 권장하고 있다.
- 클래스 기반이 시작될 때 React 에는 컴포넌트 생명주기 라는 개념이 있었다.
- 컴포넌트 생명주기는 컴포넌트가 만들어지고, 연결되고, rendering 되는 과정에서  
  개발자가 개입하여 뭔가 코드를 추가하고 싶을 때 주로 많이 사용했다.
- 문제는 생명주기가 초반에는 클래스 기반에서만 사용이 가능했다.
- 그러다보니 생명주기 문제 때문에 함수 기반으로 이전하는 데 걸림돌이 된다.
- React 에서는 16.8 에서 클래스의 생명주기 코드를 사용할 수 있도록 Hook 함수라는 개념을 도입한다.
- React 에서는 'use\*\*\*()' 으로 시작되는 이름으로 명명하고, Hook 함수를 계속해서 추가해나가고 있다.
- 또한 기능적인 측면에서 클래스 방식에서 구현하던 거의 모든 기능이 구현되어가고 있다.

# 사용자정의 Hook 함수

- 기본적으로 제공되는 hook 함수에 개발자가 나름대로 코드를 추가하여  
  프로젝트에서 사용할 수 있도록 하는 기능

## 사용자정의 Hook 함수 만들기

- hook 함수는 반드시 `use` prefix 로 시작해야 한다.
- 기본 hook 함수를 재정의 했다는 명명 규칙이 surffix 에 나타나야 한다.
- 예를 들어 `useContext` 함수를 재정의 할 때는 `use사용자Context()` 와 같은 이름으로 정의해야 한다.

## 실제 컴포넌트에서 사용자 정의 Hook 함수를 호출할 때

- 기본 hook 와 마찬가지로 컴포넌트 함수가 시작되는 곳에서 호출해야 한다.
