import React from 'react'

function Home() {

    async function submit(){
        try{
            var amazonLink = document.getElementById("amazon").value
            var snapdealLink = document.getElementById("snapdeal").value

        console.log(amazonLink,snapdealLink)

        let data = await fetch("http://localhost:5000/",{
            method: 'post',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({amazonLink,snapdealLink})
          })
          let val = await data.json();
          console.log(val)
        }catch(err){
            console.error(err)
        }
    }


    return (
        <div>
            <h3>Enter a custom Link</h3>
            <label htmlFor="amazon">Amazon</label>
            <input type="text" id="amazon"></input>
            <label htmlFor="snapdeal">Snap Deal</label>
            <input type="text" id="snapdeal"></input>
            <button type="button" onClick={submit}>Submit Link</button>


            <h3>Navigate to snapdeal in nav above and open console and click load data</h3>
        </div>
    )
}

export default Home
