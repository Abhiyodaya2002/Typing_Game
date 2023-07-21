let planeWordList = "";
var word="";
  const generateRandom= ()=>{
    for(let i=0;i<80;i++)
    {
      let x= Math.ceil(Math.random()*5)+1;
      var str="";
      for(let j=0;j<x;j++)
      {
        let y= Math.ceil(Math.random()*25);
        const charCode = 97; // Get the ASCII code of the character
        const newCharCode = charCode + y; // Increment the ASCII code by the specified amount
        let newCharacter = String.fromCharCode(newCharCode);
        str+=newCharacter;
      }
      word+=str;
      word+=" ";
    }
  }
  generateRandom();
const WordList = word.split(" ");
planeWordList=word;
export { planeWordList, WordList };
