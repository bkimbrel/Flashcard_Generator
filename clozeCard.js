module.exports = ClozeCard;

function ClozeCard(text, cloze, error){
  if(this instanceof ClozeCard) {
  this.text = text;
  this.cloze = cloze;
  this.partial = text.replace(this.cloze, "____________");
  this.printInfo = function(){
    console.log(this.text);
    console.log(this.cloze);
    console.log(this.partial);
  }
}
  else {
    return new ClozeCard(text, cloze, error);
  }
}