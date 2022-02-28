// ************************
// * SPREAD OPERATOR
// ************************

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

  
/* 
  let newHotel = hotel;

  newHotel.brand = "Hotel California";
  console.log(hotel.brand); // Hotel California
 */
 /*  let hotelNew = { ...hotel };

  hotelNew.brand = "Hotel California";
  console.log(hotel.brand); // Hotel Clarusway
   */

  const { sat, ...weekdays} = hotel.receptionHours;

  console.log(sat);
  console.log(weekdays);

  const arr1 = [1,2,3];
  const arr2 = [4,5,6];
  const arr3 = [ ...arr1,11,...arr2, 7,8,9];
  console.log(arr3);
  const arr4 = [33];
  arr4.push(...arr1);
  console.log(arr4); // [33,1,2,3]
 


  let arrry = "My Name is Jack".split("");
  console.log(arrry.join(""));

// ************************
// * REST OPERATOR
// ************************

function sum(...numbers){
    let total = 0;
   numbers.forEach(i => {
    total = !isNaN(i) ? total + i : total;
    });
    return total;
}

console.log(sum(1,2,6, "Mesut",7,9));

// ************************
// * NULLISH OPERATOR
// ************************

let temperature = null; // =0 // =4
console.log(`${temperature ?? "ERROR" }`); // ERROR