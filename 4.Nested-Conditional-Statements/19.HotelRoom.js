function hotelRoom(input) {
   let month = (input[0]);
   let days = (input[1]);
   let apartment = 0;
   let studio = 0;

   if (month === 'May' || month === 'October') {
      if (days > 14) {
         apartment = ((65 - (65 * 0.10)) * days).toFixed(2);
      } else {
         apartment = (65 * days).toFixed(2);
      }
      if (days > 14) {
         studio = ((50 - (50 * 0.30)) * days).toFixed(2);
      } else if (days > 7) {
         studio = ((50 - (50 * 0.05)) * days).toFixed(2);
      } else {
         apartment = (50 * days).toFixed(2);
      }
   } else if (month === 'June' || month === 'September') {
      if (days > 14) {
         apartment = ((68.70 - (68.70 * 0.10)) * days).toFixed(2);
      } else {
         apartment = (68.70 * days).toFixed(2);
      }
      if (days > 14) {
         studio = ((75.20 - (75.20 * 0.20)) * days).toFixed(2);
      } else {
         studio = (75.20 * days).toFixed(2);
      }
   } else if (month === 'July' || month === 'August') {
      if (days > 14) {
         apartment = ((77 - (77 * 0.10)) * days).toFixed(2);
      } else {
         apartment = (77 * days).toFixed(2);
      }
      studio = (76 * days).toFixed(2);
   
}


console.log(`Apartment: ${apartment} lv.”`);
console.log(`Studio: ${studio} lv.“`)

}
hotelRoom(['August', 20])