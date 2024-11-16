import React, { useContext } from "react";
import { CountContext } from "../../../contexts/CountContext";
import { AuthContext } from "../../../contexts/AuthContext";

export default function UseState() {
  const { count, setCount } = useContext(CountContext);
  const { firstName, setFirstName } = useContext(AuthContext);
  const increment = () => {
    setFirstName("Muhammad");
    setCount(count + 1);
  };
  const decrement = () => {
    setFirstName("Muneeeb");
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1 className="text-center">Use Context</h1>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">
            <hr className="mb-5" />
            <h1>{firstName}</h1>
            <input
              type="text"
              className="form-control my-3"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <button className="btn btn-success" onClick={increment}>
              Increment
            </button>

            <h1>{count}</h1>
            <button className="btn btn-danger" onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
