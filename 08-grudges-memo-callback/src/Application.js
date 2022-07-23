import { useCallback, useReducer } from "react";
import { v4 as id } from "uuid";
import NewGrudge from "./NewGrudge";
import Grudges from "./Grudges";
import initialState from "./initialState";
import "./style.css";

const GRUDGE_ADD = "GRUDGE_ADD";
const GRUDGE_FORGIVE = "GRUDGE_FORGIVE";

const reducer = (state, action) => {
  if (action.type === GRUDGE_ADD) {
    return [action.payload, ...state];
  }

  if (action.type === GRUDGE_FORGIVE) {
    return state.map((grudge) => {
      if (grudge.id !== action.payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
  }
  return state;
};

function Application() {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = useCallback(
    ({ person, reason }) => {
      dispatch({
        type: GRUDGE_ADD,
        payload: {
          person,
          reason,
          forgiven: false,
          id: id(),
        },
      });
    },
    [dispatch]
  );

  const toggleForgiveness = useCallback(
    (id) => {
      dispatch({
        type: GRUDGE_FORGIVE,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  return (
    <div className="app">
      <NewGrudge onSubmit={addGrudge}></NewGrudge>
      <Grudges grudges={grudges} onForgive={toggleForgiveness}></Grudges>
    </div>
  );
}

export default Application;
