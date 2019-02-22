import { useMemo, useState, useEffect, useDebugValue } from "react";
import { createStore, Reducer, Action, Dispatch, StoreEnhancer } from "redux";

const useRedux = <S, A extends Action<any>>(
  reducer: Reducer<S, A>,
  enhancer?: StoreEnhancer<S, A>
): [S, Dispatch<A>] => {
  // store を一度だけ作る
  const store = useMemo(() => createStore(reducer, enhancer), [reducer]);
  const [state, setState] = useState(store.getState());
  // store の変更を state へ
  useEffect(() => store.subscribe(() => setState(store.getState())), [store]);
  return [state, store.dispatch];
};
export default useRedux;
