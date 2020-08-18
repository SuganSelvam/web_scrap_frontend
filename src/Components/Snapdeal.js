import React, { useState } from "react";

function Snapdeal() {
    const [state, setState] = useState([])
  async function submit() {
    try {
      let output = await fetch("http://localhost:5000/snapdeal")
        .then((res) => res.json())
        .then((data) => {
          let array = [];
          let value = data.map((el) => {
            if (el.title) {
              var a = el.title;
              var b = el.price;
              var c = el.rating;
              var d = el.discount;
              var e = el.image;
              for (var i = 0; i < a.length; i++) {
                array.push([a[i], b[i], c[i], d[i], e[i]]);                
              }
            }
            return array
          });
          value[0].forEach(element => {
            // console.log("items :",element)
            setState(...state,element)
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

  console.log("state:",state)

  return (
    <div>
      <button type="button" onClick={submit}>
        Load Data
      </button>
    </div>
  );
}

export default Snapdeal;
