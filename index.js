// Assignment 1: Loop Mastery

// --- Part 1: Nested For Loops (10x10 Multiplication Table) ---
console.log("=== Multiplication Table (Nested For Loops) ===");

for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    console.log(row + " x " + col + " = " + row * col);
  }
}

// --- Part 2: While Loop (Table of 7) ---
console.log("=== Table of 7 (While Loop) ===");

let i = 1;
while (i <= 10) {
  console.log("7 x " + i + " = " + 7 * i);
  i++;
}

// --- Part 3: Nested While Loops (Tables 1 to 5) ---
console.log("=== Tables 1 to 5 (Nested While Loops) ===");

let outer = 1;
while (outer <= 5) {
  let inner = 1;
  while (inner <= 10) {
    console.log(outer + " x " + inner + " = " + outer * inner);
    inner++;
  }
  outer++;
}

// --- Part 4: Do-While Loop (Countdown) ---
console.log("=== Countdown (Do-While Loop) ===");

let count = 10;
do {
  console.log("Count: " + count);
  count--;
} while (count > 0);
console.log("Liftoff!");