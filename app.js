let friends = ["Jabril", "Sajid", "Ashley", "Diaymond", "Asia"];

for (let i = 0; i < friends.length; i++) {
    let myFriend = friends[i]
    
    for (let num = 99; num > 0; num--) {
      if (num > 2) {
        console.log(`${num} lines of code in the file, ${num} lines of code; ${myFriend} strikes one out, clears it all out, ${num - 1} lines of code in the file.`);
      } else if (num == 2) {
        console.log(`${num} more lines of code in the file, ${num} more lines of code; ${myFriend} strikes one out, clears it all out, ${num - 1} more line of code in the file.`);
    } else if (num == 1) {
      console.log(`${num} more line of code in the file, ${num} more line of code; ${myFriend} strikes it out, clears it out, finally no more lines of code in the file!`);
    }
  }
}
