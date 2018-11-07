function figures(input) {
   let figure = (input[0]);

   if(figure === "square") {
      let length = Number(input[1]);
      console.log((length*length).toFixed(3));
   } else if(figure === "rectangle") {
      let lengthSide1 = Number(input[1])
      let lengthSide2 = Number(input[2])
      console.log((lengthSide1*lengthSide2).toFixed(3));
   } else if(figure === "circle") {
      let radius = (input[1]);
      console.log(((radius*radius)*Math.PI).toFixed(3));
   } else if(figure === "triangle") {
      let lengthSide = (input[1]);
      let height = (input[2]);
      console.log((0.5*height*lengthSide).toFixed(3));
   }

}
figures(["triangle", 4.5, 20])