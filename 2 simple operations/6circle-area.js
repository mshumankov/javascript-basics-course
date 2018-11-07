function circleAreaPerimeter(circleradius) {
   let radius = (circleradius);
   let area = Math.PI*radius*radius;
   let resultArea = `Area = ${area}`;
   let perimeter = 2*Math.PI*radius;
   let resultperimeter = `Perimeter = ${perimeter}`;
   console.log(resultArea, resultperimeter);

}
circleAreaPerimeter([4.5]);