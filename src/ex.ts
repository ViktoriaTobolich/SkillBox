console.log("ex.ts!!!!!");


function concatStrings(str1: string, str2: string): string{
  return str1 + str2;
}

interface myHometask {
  howIDoIt: string;
  simeArray: (string|number)[];
  withData?: myHometask[];
}

const MyHometask: myHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
}

//3
interface MyArray<T> {
	[N: number]: T

 reduce<T>( fn:(el: T[], num: T) => T): T
 //map<U>(fn: (el: T) => U): U[]
}

const testArray: MyArray<number> = [1,2,3];
const initialValue = 0;

testArray.reduce((accumulator, value) => accumulator + value, initialValue);
