import React, { useState } from "react";


function Snapdeal() {
  const [state, setState] = useState({ result: [""] });

  async function submit() {
    try {
      let output = await fetch("https://webscrapbackend.herokuapp.com/snapdeal")
        .then((res) => res.json())
        .then((data) => {
          setState({ result: data });
          console.log(data)
        });
    } catch (err) {
      console.log(err);
    }
  }

  console.log("state:", state);

  return (
    <div>
      <button type="button" onClick={submit}>
        Load Data
      </button>
        {state.result.map((item, i) => {
          // return <div>{item[0]}</div>;
          return (
              <div className="card" style={{ width: "300px" }}>
                <img style={{ width: "100px",height:"100px" }} src={item[4]}  alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Item : {item[0]}</h5>
                  <p className="card-text">Price: {item[1]}</p>
                  <p className="card-text">No of People Bought : {item[2]}</p>
                  <p className="card-text">Discount: {item[3]}</p>

                </div>
              </div>
          )
        })}
    </div >
  );
}

export default Snapdeal;
