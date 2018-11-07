function spacecraft(args) {
let width = Number(args[0]);
let length = Number(args[1]);
let height = Number(args[2]);
let heightAstronauts = Number(args[3]);

let volumeCraft = width*length*height;
let volumeRoom = (heightAstronauts+0.40)*2*2;
let numerAstronauts = Math.floor(volumeCraft/volumeRoom);

if(numerAstronauts < 3) {
   console.log(`The spacecraft is too small.`);
} else if(numerAstronauts > 10) {
   console.log(`The spacecraft is too big.`);
} else {
   console.log(`The spacecraft holds ${numerAstronauts} astronauts.`);
}

}
spacecraft([3,
   3,
   4,
   1.68
   ])