import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from "react-router-dom";

import CharacterList from "./CharacterList";

import "./styles.scss";
import URL from "./endpoint";

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const fetchReducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      result: null,
      loading: true,
      error: null,
    };
  }

  if (action.type === "RESPONSE_COMPLETE") {
    return {
      result: action.payload.response,
      loading: false,
      error: null,
    };
  }

  if (action.type === "ERROR") {
    return {
      result: null,
      loading: false,
      error: action.payload.error,
    };
  }

  return state;
};

const useFetch = (url) => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  React.useEffect(() => {
    dispatch({ type: "LOADING" });

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: "RESPONSE_COMPLETE", payload: { response: data } });
      } catch (error) {
        dispatch({ type: "ERROR", payload: { error } });
      }
    };

    fetchUrl();
  }, [url]);

  return [state.result, state.loading, state.error];
};

const Application = () => {
  const [response, loading, error] = useFetch(URL + "/characters");
  const characters = (response && response.characters) || [];

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? (
            <p>Loading…</p>
          ) : (
            <CharacterList characters={characters} />
          )}
          {error && <p className="error">{error.message}</p>}
        </section>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Application />
  </Router>
);