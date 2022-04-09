 (function decodeMorse(morseCode) {

         let morseCode = '.... . -.--   .--- ..- -.. .';
         let result = morseCode.split("").map(function(type) {
                 let char;
                 switch (type) {
                     case ".-":
                         char = "A";
                         break;
                     case "-...":
                         char = "B";
                         break;
                     case "C":
                         char = "-.-.";
                         break;
                     case "-..":
                         char = "D";
                         break;
                     case ".":
                         char = "E";
                         break;
                     case "..-.":
                         char = "F";
                         break;
                     case "--.":
                         char = "G";
                         break;
                     case "....":
                         char = "H";
                         break;
                     case "..":
                         char = "I";
                         break;
                     case ".---":
                         char = "J";
                         break;
                     case "-.-":
                         char = "K";
                         break;
                     case ".-..":
                         char = "L";
                         break;
                     case "--":
                         char = "M";
                         break;
                     case "-.":
                         char = "N";
                         break;
                     case "---":
                         char = "O";
                         break;
                     case ".--.":
                         char = "P";
                         break;
                     case "--.-":
                         char = "Q";
                         break;
                     case ".-.":
                         char = "R";
                         break;
                     case "...":
                         char = "S";
                         break;
                     case "-":
                         char = "T";
                         break;
                     case "..-":
                         char = "U";
                         break;
                     case ".--":
                         char = "W";
                         break;
                     case "-..-":
                         char = "X";
                         break;
                     case "-.--":
                         char = "Y";
                         break;
                     case "--..":
                         char = "Z";
                         break;

                     default:
                         char = " ";
                         break;
                 }



                 return char;
             }
             console.log(decodeMorse())
         })('.... . -.--   .--- ..- -.. .')