module.exports = BasicCard;

function BasicCard(front, back){
   if(this instanceof BasicCard) {
  this.front = front;
  this.back = back;
  this.printInfo = function(){
    console.log(this.front);
    console.log(this.back);
  }
}
  else {
    return new BasicCard(front, back);
  }
}