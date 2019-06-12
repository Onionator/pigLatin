$(document).ready(function(){
  //this function will translate the user input to into pig latin and output it to the screen
  $("#form").submit(function(event){
    event.preventDefault();
    console.log("submitted")
    //userInput stores the input from the user
    var userInput = $("input:text[name=input]").val();
    //this array store all our vowels
    var vowels = ["a","e","i","o","u","y"];
    //this splits the userInput into an array with each element being a single character
    var input = userInput.split(" ");
    console.log(input);
    var result;
    var sentence = [];
    //this loop compares all elements in the input array to all elements in the vowels array to determine if the is a vowel
    for (var d = 0; d < input.length; d++) {
      console.log("first");
      var characters = input[d].split("");
      for (var i = 0; i < characters.length; i++) {
        console.log("second");
        // when the first vowel is found ...
        if (vowels.includes(characters[i])) {
          //if the word begins with a y
          if (characters[i] === "y" && i === 0) {
            console.log("in the y")
            //remove beginning letter or letters
            characters.splice(0,i+1);
            //add ay to the end of the word
            characters.push("yay ");
            result = characters.join("");
            sentence.push(result);
            //exit out of the loop
            break;
            //if the first letter is a vowel
          } else if(i === 0){
            characters.push("way ");
            result = characters.join("");
            sentence.push(result);
            break;
            //if the word starts with qu
          } else if (characters[i - 1] === "q" && characters[i] === "u") {
            // move everything before the first vowel the the end
            for (var n = 0; n < i; n++) {
              console.log("third");
              //add the first letters to the end
              characters.push(characters[n]);
            }
            //remove beginning letter or letters
            characters.splice(0,i+1);
            //add ay to the end of the word
            characters.push("uay ");
            result = characters.join("");
            sentence.push(result);
            //exit out of the loop
            break;
            //this gets all letters in front of the first vowel
          } else {
            console.log("vowel found at " + i);
            // move everything before the first vowel the the end
            for (var n = 0; n < i; n++) {
              console.log("third");
              //rather than push we want to find a space and insert the letters before the space so we can do multiple words
              characters.push(characters[n]);
            }
            //remove beginning letter or letters
            characters.splice(0,i);
            //add ay to the end of the word
            characters.push("ay ");
            result = characters.join("");
            sentence.push(result);
            //exit out of the loop
            break;
          }
        }
      }
    }
    var total = sentence.join("")
    $("p").text(total);
  });
});

//use strings of each word in the array to do this with multiple words
//replace the space with (first letter + "ay ")
