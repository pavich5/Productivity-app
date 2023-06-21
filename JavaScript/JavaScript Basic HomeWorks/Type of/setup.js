function detect_data_type(value) {
  let dtypes = [Function, RegExp, Number, String, Boolean, Object],
    x,
    len;

  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }

  return typeof value;
}

console.log(detect_data_type(12));
console.log(detect_data_type("w3resource"));
console.log(detect_data_type(false));
console.log(detect_data_type({ type: "Fiat", model: "500", color: "white" }));
console.log(detect_data_type());


//malce pomos od google :D