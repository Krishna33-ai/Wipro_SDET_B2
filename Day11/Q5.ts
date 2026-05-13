type CSSUnit =
  | 'px'
  | 'rem'
  | 'vh';

type MarginValue =
  `${number}${CSSUnit}`;

type BoxProps = {
  margin?: MarginValue;
  paddingTop?: MarginValue;
  paddingBottom?: MarginValue;
};

const a: MarginValue = "10px";
const b: MarginValue = "2.5rem";
const c: MarginValue = "100vh";

console.log(a);
console.log(b);
console.log(c);