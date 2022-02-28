const hotel = {
    brand: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: { open: 8, close: 22,},
      fri: {open: 9, close: 21,},
      sat: { open: 10, close: 20,},
    },
  
    // book: function (obj) {
    // console.log(obj)
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  }
// *****************************************************

// ! Destruction
/* 
const {brand, options} = hotel;
console.log(brand);

const {brand:hotelName, rooms} = hotel;
console.log(hotelName, rooms);

const {
    fri: {
        open: openingFri, close:closingFri},
    } = hotel.receptionHours;

const {
    receptionHours:{
        fri: {
            open: openingFri, close:closingFri},
        }
    } = hotel;

console.log("Opening Hour:", openingFri,"\nClosing Hour:", closingFri);
 */

hotel.book({
  roomIndex: 0,
  departure: "22:30",
  arrival: "11:00",
  optionIndex:1, 
});

// *******************************************************

// ! Array Destructring

const date = [1970, 4, 20, "12:30", "23:00"];

const [year, month, day] = date;
console.log(`Year: ${year}, Day: ${day}, Month:${month}`);

const [year2,,,,day2] = date; // 1970 "23:00"

console.log(year2, day2); // 1970 20

const nestedArray =[1,2,3, [4,5,6],7];
const [first, , third,[fourth, fifth],seventh] = nestedArray 
console.log(fifth); // 5
console.log(seventh); // 7

console.log(nestedArray[3][2]); //6

const note = {
  id:1,
  title:"My first note",
  date: "25/04/1977",
};

for (const [key,value] of Object.entries(note)) {
  console.log(key,"::->", value);  
}

Object.entries(note).forEach(([key,value])=>{
  console.log(key,"::->", value); 
});

//! default parameter

function greet(user= "Guest"){
  console.log("Hello",user);
}

greet("Munir"); // Hello Münir
greet();        // Hello Guest