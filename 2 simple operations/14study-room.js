function studyRoom(input){
   let width = (input[0])*100;
   let height = ((input[1])*100)-100;
   let workPlaceWidth = (120);
   let workPlaceHeight = (70);
   let widthResult = Math.trunc(width/workPlaceWidth);
   let heightResult = Math.trunc((height/workPlaceHeight));
   let studyRoomResult = (widthResult*heightResult)-3;
   console.log(studyRoomResult);
   
}
studyRoom([8.4, 5.2]);