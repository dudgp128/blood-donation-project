import React, { useReducer, useContext, createContext, Dispatch } from "react";

// 필요한 타입들을 미리 선언

// 상태를 위한 타입
type State = {
  topic: string;
};

// 모든 액션들을 위한 타입
type Action = { type: "ChangeTopic"; topic: string };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type ContextDispatch = Dispatch<Action>;

// Context 만들기
const ContextStateContext = createContext<State | null>(null);
const ContextDispatchContext = createContext<ContextDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ChangeTopic":
      return {
        ...state,
        topic: action.topic, // count가 자동완성되며, number 타입인걸 알 수 있습니다.
      };
    default:
      throw new Error("Unhandled action");
  }
}

// ContextProvider 에서 useReduer를 사용하고
// ContextStateContext.Provider 와 ContextDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    topic: "Q12",
  });

  return (
    <ContextStateContext.Provider value={state}>
      <ContextDispatchContext.Provider value={dispatch}>
        {children}
      </ContextDispatchContext.Provider>
    </ContextStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useContextState() {
  const state = useContext(ContextStateContext);
  if (!state) throw new Error("Cannot find ContextProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useContextDispatch() {
  const dispatch = useContext(ContextDispatchContext);
  if (!dispatch) throw new Error("Cannot find ContextProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
