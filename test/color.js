function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  console.log(convertToInteger("111"));
  convertToInteger("10011");
  
  
    let hh = "23";
    let mm = "59";
    let ss = "02";
    let r = 255 - (parseInt(hh, 10) * 4);
    let g = 255 - (parseInt(mm, 10) * 4);
    let b = 255 - (parseInt(ss, 10) * 4);
  
  
  function rgb2hex(r,g,b) {
  
      if (g !== undefined)
          return Number(0x1000000 + r*0x10000 + g*0x100 + b).toString(16).substring(1);
      else
          return Number(0x1000000 + r[0]*0x10000 + r[1]*0x100 + r[2]).toString(16).substring(1);
  }
  
  let num = 59 * 4;
  console.log(num.toString(16))
  console.log(rgb2hex(r, g, b))