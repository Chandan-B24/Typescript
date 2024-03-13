const sum: number = 5 + 3;  // 8
const difference: number = 8 - 5;  // 3
const product: number = 4 * 7;  // 28
const quotient: number = 20 / 4;  // 5
const remainder: number = 11 % 3;  // 2
//AND (&&): Returns true if both conditions are true.
// OR (||): Returns true if at least one of the conditions is true.
// NOT (!): Reverses the truthiness of the condition.
const isHome:boolean = true;
const inPajamas:boolean = false;
const wantsToEat:boolean = false;
const isBored:boolean = false;

// I should go outside if I am home, not in my pajamas, and 
// either I want to eat or I am bored
const shouldGoOutside:boolean = isHome && !inPajamas && (wantsToEat || isBored); //false
// Equal to (==): Checks if two values are equal.
// Not equal to (!=): Checks if two values are not equal.
// Strictly equal to (===): Checks if two values are equal in value and type.
// Strictly not equal to (!==): Checks if two values are not equal in value and type.
// Greater than (>): Checks if the value on the left is greater than the value on the right.
// Less than (<): Checks if the value on the left is less than the value on the right.
// Greater than or equal to (>=): Checks if the value on the left is greater than or equal to the value on the right.
// Less than or equal to (<=): Checks if the value on the left is less than or equal to the value on the right.
