let chain = {
  key: false,
};
let out = !chain?.key?.[0] ? !!false : !!true;
console.log(out);
