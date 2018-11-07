function rectArea(input){
   let x1 = (input[0]);
   let y1 = (input[1]);
   let x2 = (input[2]);
   let y2 = (input[3]);

   let area = Math.abs(x1-x2)*Math.abs(y1-y2);
   let perimeter = 2*(Math.abs(x1-x2)+Math.abs(y1-y2))
   console.log(area);
   console.log(perimeter);
   
}
rectArea([600.25,500.75,100.50,-200.5]);