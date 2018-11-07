function metricConverter(input) {
   let size = (input[0]);
   let sourceMetric = (input[1]);
   let endMetric = (input[2]);

   if(sourceMetric === "mm") {
      size = size / 1000;
   } else if(sourceMetric === "cm") {
      size = size / 100;
   } else if(sourceMetric === "mi") {
      size = size / 0.000621371192;
   } else if(sourceMetric === "in") {
      size = size / 39.3700787;
   } else if(sourceMetric === "km") {
      size = size / 0.001;
   } else if(sourceMetric === "ft") {
      size = size / 3.2808399;
   } else if(sourceMetric === "yd") {
      size = size / 1.0936133;
   } else {
      console.log("no valid sorce metric")
   }
   
   if(endMetric === "mm") {
      size = size*1000;
   } else if(endMetric === "cm") {
      size = size * 100;
   } else if(endMetric === "mi") {
      size = size * 0.000621371192;
   } else if(endMetric === "in") {
      size = size * 39.3700787;
   } else if(endMetric === "km") {
      size = size * 0.001;
   } else if(endMetric === "ft") {
      size = size * 3.2808399;
   } else if(endMetric === "yd") {
      size = size * 1.0936133;
   } else {
      console.log("no valid end metric")
   }

   console.log((size).toFixed(8));
}
metricConverter([450, "yd", "km"]);