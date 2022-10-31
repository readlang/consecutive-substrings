function consecutiveSubstrings(string) {

  let output = []

  if (string.length === 0) {
    return output
  }

  for (i=0; i<string.length; i++) {
    let substr = ""
    
    for (j=i; j<string.length; j++) {
      substr = substr + string[j]
      output.push(substr)
    }
  }

  return output
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
