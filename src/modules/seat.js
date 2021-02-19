/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const INCREASE_ADULT = "seat/INCREASE_ADULT";
const INCREASE_CHILDREN = "seat/INCREASE_CHILDREN";
const INCREASE_INFANT = "seat/INCREASE_INFANT";
const DECREASE_ADULT = "seat/DECREASE_ADULT";
const DECREASE_CHILDREN = "seat/DECREASE_CHILDREN";
const DECREASE_INFANT = "seat/DECREASE_INFANT";

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
export const increaseAdult = () => ({ type: INCREASE_ADULT });
export const increaseChildren = () => ({ type: INCREASE_CHILDREN });
export const increaseInfant = () => ({ type: INCREASE_INFANT });
export const decreaseAdult = () => ({ type: DECREASE_ADULT });
export const decreaseChildren = () => ({ type: DECREASE_CHILDREN });
export const decreaseInfant = () => ({ type: DECREASE_INFANT });

/* 초기 상태 선언 */
const initialState = {
  adultNum: 1,
  childrenNum: 0,
  infantNum: 0,
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function seat(state = initialState, action) {
  switch (action.type) {
    case INCREASE_ADULT:
      return {
        ...state,
        adultNum:
          state.adultNum + state.childrenNum + state.infantNum < 8
            ? state.adultNum + 1
            : state.adultNum,
      };
    case INCREASE_CHILDREN:
      return {
        ...state,
        childrenNum:
          state.adultNum + state.childrenNum + state.infantNum < 8
            ? state.childrenNum + 1
            : state.childrenNum,
      };
    case INCREASE_INFANT:
      return {
        ...state,
        infantNum:
          state.adultNum + state.childrenNum + state.infantNum < 8
            ? state.infantNum + 1
            : state.infantNum,
      };
    case DECREASE_ADULT:
      return {
        ...state,
        adultNum: state.adultNum > 1 ? state.adultNum - 1 : state.adultNum,
      };
    case DECREASE_CHILDREN:
      return {
        ...state,
        childrenNum:
          state.childrenNum > 0 ? state.childrenNum - 1 : state.childrenNum,
      };
    case DECREASE_INFANT:
      return {
        ...state,
        infantNum: state.infantNum > 0 ? state.infantNum - 1 : state.infantNum,
      };
    default:
      return state;
  }
}
