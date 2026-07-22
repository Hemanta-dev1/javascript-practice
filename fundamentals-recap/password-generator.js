function generatePassword(passLength){
   let result = ""
    const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  for(let i = 0; i < passLength; i++){
     const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex); 
  }
 return result;

};

let password = generatePassword(8);
console.log(`Generated password: ${password}`);