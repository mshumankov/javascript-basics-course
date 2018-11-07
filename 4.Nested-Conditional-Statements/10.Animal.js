function animal(input) {
   let animalType = (input);

   switch(animalType) {
      case 'dog': console.log('mammal'); break;
      case 'snake':
      case 'tortoise':
      case 'crocodile': console.log('reptile'); break;
      default: console.log('unknown');
   }
}
animal('dog');