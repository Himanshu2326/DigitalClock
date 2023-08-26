

/*
-----------------------------
 ? Main JavaScript Part:-
-----------------------------
*/

let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')


//* Updating Time In Every Second:--

setInterval(() => {

    let d = new Date();

    let currHour = d.getHours();
    let currMin = d.getMinutes();
    let currSec = d.getSeconds();

    hour.innerHTML = `${(currHour) <= 10 ? "0" + currHour : currHour} :`;
    min.innerHTML = `${(currMin) <= 10 ? "0" + currMin : currMin} :`;
    sec.innerHTML = `${(currSec) <= 10 ? "0" + currSec : currSec}`;

}, 1000)



/*
-----------------------------
 ? API Fetching Part:-
-----------------------------
*/



try {
    const getData = async () => {
        // let url = `https://api.api-ninjas.com/v1/worldtime?city=?london`
        let url2 = `https://worldtimeapi.org/api/timezone/Asia/Kabul`
        let response = await fetch(url2);
        let data = await response.json();
        console.log(data);

        console.log(data.timezone)
        console.log(data.utc_datetime)
        console.log(data.dst_until)
        console.log(data.datetime)
        console.log(data.dst_from)
    }
    getData()
} catch (error) {
    console.log(`Error Occoured:${error}`);
}