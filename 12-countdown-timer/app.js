const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate  = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 8, 12, 11, 20, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate()

let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway edns on ${day}, ${date} ${month} ${year} ${hours}: ${minutes}am`;

// future date

const FutureTime = futureDate.getTime();

function getRemainingDays(){
  const today = new Date().getTime();

  const t = FutureTime - today;

// 1s = 1000ms
// 1m = 60s
// 1h = 60m
// 1d = 24h

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = t/oneDay;
days = Math.floor(days);

let hours = Math.floor((t%oneDay)/oneHour);

let minutes = Math.floor((t%oneHour ) / oneMinute)

let seconds = Math.floor((t % oneMinute)/ 1000)

// set values array

const values = [days, hours, minutes, seconds];

function format(item){
  if (item <10 ){
    return (item = `0${item}`)
  }
      return item
  
}

items.forEach(function(item, index){
  item.innerHTML = format( values[index])
})

if(t<0) {
  deadline.innerHTML = `<h4> Sorry, this giveaway expired </h4>`
}
};

// countdown

let countdown = setInterval(getRemainingDays, 1000);
getRemainingDays()

