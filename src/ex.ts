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
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
