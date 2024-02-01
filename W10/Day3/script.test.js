// Test case 1: S does not contain 'a' or 'b'
console.log(solution("defg")); // Expected output: true

// Test case 2: S contains 'a' but not 'b'
console.log(solution("abcdefg")); // Expected output: true

// Test case 3: S contains 'b' but not 'a'
console.log(solution("bcdefg")); // Expected output: true

// Test case 4: S contains both 'a' and 'b', but 'a' appears after 'b'
console.log(solution("bcdaefg")); // Expected output: false

// Test case 5: S contains both 'a' and 'b', and 'a' appears before 'b'
console.log(solution("abdefg")); // Expected output: true