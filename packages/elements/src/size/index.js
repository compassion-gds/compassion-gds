const multiplier = 1;
const sizes = {
  minus4: 0.125,
  minus3: 0.25,
  minus2: 0.5,
  minus1: 0.75,
  base: 1,
  plus1: 1.5,
  plus2: 2,
  plus3: 2.5,
  plus4: 3,
  plus5: 4,
  plus6: 5,
  plus7: 6,
  plus8: 7,
  plus9: 8,
  plus10: 9,
  plus11: 10,
};

const size = (step) => {
  return `${sizes[step] * multiplier}rem`;
};

export default {
  touchable: '44px',
  minus4: `${sizes.minus4}rem`,
  minus3: `${sizes.minus3}rem`,
  minus2: `${sizes.minus2}rem`,
  minus1: `${sizes.minus1}rem`,
  base: `${sizes.base}rem`,
  plus1: `${sizes.plus1}rem`,
  plus2: `${sizes.plus2}rem`,
  plus3: `${sizes.plus3}rem`,
  plus4: `${sizes.plus4}rem`,
  plus5: `${sizes.plus5}rem`,
  plus6: `${sizes.plus6}rem`,
  plus7: `${sizes.plus7}rem`,
  plus8: `${sizes.plus8}rem`,
  plus9: `${sizes.plus9}rem`,
  plus10: `${sizes.plus10}rem`,
  plus11: `${sizes.plus11}rem`,
};
