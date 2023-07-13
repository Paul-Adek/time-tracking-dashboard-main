const trackers = document.querySelectorAll(".track");
const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

fetch("./data.json")
    .then(res => res.json())
    .then(data => {dataValue(data)})

function dataValue(data) {
    for (let i = 0; i < data.length; i++) {

        // D A I L Y
        dailyBtn.addEventListener("click", () => {
            dailyBtn.style.color = "hsl(0, 0% ,100%)";
            weeklyBtn.style.color = "hsl(235, 45%, 61%)";
            monthlyBtn.style.color = "hsl(235, 45%, 61%)";


            // TRACK ONE
            trackers.item(0).innerHTML =
                `<div>
                <span>${data[0].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[0].timeframes.daily.current}hrs</h2>
               <span>Last Week - ${data[0].timeframes.daily.previous}hrs</span>
            </div>
            `

            // TRACK TWO
            trackers.item(1).innerHTML =
                `<div>
                <span>${data[1].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[1].timeframes.daily.current}hrs</h2>
               <span>Last Week - ${data[1].timeframes.daily.previous}hrs</span>
            </div>
            `

            // TRACK THREE
            trackers.item(2).innerHTML =
                `<div>
                <span>${data[2].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[2].timeframes.daily.current}hrs</h2>
               <span>Last Week - ${data[2].timeframes.daily.previous}hrs</span>
            </div>
            `

            // TRACK FOUR
            trackers.item(3).innerHTML =
                `<div>
                <span>${data[3].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[3].timeframes.daily.current}hrs</h2>
               <span>Last Week - ${data[3].timeframes.daily.previous}hrs</span>
            </div>
            `

            // TRACK FIVE
            trackers.item(4).innerHTML =
                `<div>
                <span>${data[4].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[4].timeframes.daily.current}hrs</h2>
               <span>Last Week - ${data[4].timeframes.daily.previous}hrs</span>
            </div>
            `

            // TRACK SIX
            trackers.item(5).innerHTML =
                `<div>
                <span>${data[5].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[5].timeframes.daily.current}hrs</h2>
               <span>Last Week - ${data[5].timeframes.daily.previous}hrs</span>
            </div>
            `
        });

        // D A I L Y   E N D 

        // W E E K L Y
        weeklyBtn.addEventListener("click", () => {
            dailyBtn.style.color = "hsl(235, 45%, 61%)";
            weeklyBtn.style.color = "hsl(0, 0% ,100%)";
            monthlyBtn.style.color = "hsl(235, 45%, 61%)";


            // TRACK ONE
            trackers.item(0).innerHTML =
                `<div>
                <span>${data[0].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[0].timeframes.weekly.current}hrs</h2>
               <span>Last Week - ${data[0].timeframes.weekly.previous}hrs</span>
            </div>
            `

            // TRACK TWO
            trackers.item(1).innerHTML =
                `<div>
                <span>${data[1].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[1].timeframes.weekly.current}hrs</h2>
               <span>Last Week - ${data[1].timeframes.weekly.previous}hrs</span>
            </div>
            `

            // TRACK THREE
            trackers.item(2).innerHTML =
                `<div>
                <span>${data[2].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[2].timeframes.weekly.current}hrs</h2>
               <span>Last Week - ${data[2].timeframes.weekly.previous}hrs</span>
            </div>
            `

            // TRACK FOUR
            trackers.item(3).innerHTML =
                `<div>
                <span>${data[3].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[3].timeframes.weekly.current}hrs</h2>
               <span>Last Week - ${data[3].timeframes.weekly.previous}hrs</span>
            </div>
            `

            // TRACK FIVE
            trackers.item(4).innerHTML =
                `<div>
                <span>${data[4].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[4].timeframes.weekly.current}hrs</h2>
               <span>Last Week - ${data[4].timeframes.weekly.previous}hrs</span>
            </div>
            `

            // TRACK SIX
            trackers.item(5).innerHTML =
                `<div>
                <span>${data[5].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[5].timeframes.weekly.current}hrs</h2>
               <span>Last Week - ${data[5].timeframes.weekly.previous}hrs</span>
            </div>
            `
        });

        // W E E K L Y  E N D

        // M O N T H L Y
        monthlyBtn.addEventListener("click", () => {
            dailyBtn.style.color = "hsl(235, 45%, 61%)";
            weeklyBtn.style.color = "hsl(235, 45%, 61%)";
            monthlyBtn.style.color = "hsl(0, 0% ,100%)";


            // TRACK ONE
            trackers.item(0).innerHTML =
                `<div>
                <span>${data[0].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[0].timeframes.monthly.current}hrs</h2>
               <span>Last Week - ${data[0].timeframes.monthly.previous}hrs</span>
            </div>
            `

            // TRACK TWO
            trackers.item(1).innerHTML =
                `<div>
                <span>${data[1].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[1].timeframes.monthly.current}hrs</h2>
               <span>Last Week - ${data[1].timeframes.monthly.previous}hrs</span>
            </div>
            `

            // TRACK THREE
            trackers.item(2).innerHTML =
                `<div>
                <span>${data[2].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[2].timeframes.monthly.current}hrs</h2>
               <span>Last Week - ${data[2].timeframes.monthly.previous}hrs</span>
            </div>
            `

            // TRACK FOUR
            trackers.item(3).innerHTML =
                `<div>
                <span>${data[3].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[3].timeframes.monthly.current}hrs</h2>
               <span>Last Week - ${data[3].timeframes.monthly.previous}hrs</span>
            </div>
            `

            // TRACK FIVE
            trackers.item(4).innerHTML =
                `<div>
                <span>${data[4].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[4].timeframes.monthly.current}hrs</h2>
               <span>Last Week - ${data[4].timeframes.monthly.previous}hrs</span>
            </div>
            `

            // TRACK SIX
            trackers.item(5).innerHTML =
                `<div>
                <span>${data[5].title}</span>
                <span><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></span>
            </div> 
            <div>
               <h2>${data[5].timeframes.monthly.current}hrs</h2>
               <span>Last Week - ${data[5].timeframes.monthly.previous}hrs</span>
            </div>
            `
        });

        // M O N T H L Y  E N D

    }
}