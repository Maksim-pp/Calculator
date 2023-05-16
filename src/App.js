import { store } from "./store";
import "./App.css";
import { useState } from "react";

function App() {

  let [state, setState] = useState("");

  let Handler = (e) => {
    setState(state + e.target.value)
  }

  return (
    <div className="App">
      <div>
        <input className="value" type="text" value={state} placeholder="0" />
      </div>
      
        <div>
          <button className="buttons-delete" onClick={() => setState(state.substring(0, state.length - 1))}>CE</button>
          <button className="buttons-delete" onClick={() => setState('')}>C</button>
        </div>
        <div className="block-button">
          {store.buttons.map((item) => (
          <button
            className="button"
            key={item.id}
            onClick={(e) => {
              setState((prev) => (prev += item.button));
            }}
          >
            {item.button}
          </button>
        ))}
        </div>
        <div>
          <button className="buttons-operations" onClick={Handler} value="+">+</button>
          <button className="buttons-operations" onClick={Handler} value="-">-</button>
          <button className="buttons-operations" onClick={Handler} value="*">*</button>
          <button className="buttons-operations" onClick={Handler} value="/">/</button>
          
        </div>
        
        <button className="operator_equals" onClick={e => {
            try{
              setState(
                String(eval(state)).length > 3  &&
                  String(eval(state)).includes('.')
                    ? String(eval(state).toFixed(4))
                      : String(eval(state))
              )
            }
            catch(err) {
              console.log(err)
            }
          }} value = '='>=</button>
    </div>
  );
}

export default App;
