const data = require("./zoho-response-raw.json");

const names = [];
let sizes = [];

const getKidSKU = (size) => {
  size = size.toLowerCase();
  let skuName = "";
  for (let i = 0; i < size.length; i++) {
    if (size[i] >= "0" && size[i] <= "9") skuName += size[i];
    else break;
  }
  return skuName;
};
// Sizes
data.items.map(item => {
    const tokens = item.item_name.split('-');
    const last = tokens[tokens.length - 1].split(",");
    const name = last[last.length - 1].trim();
    const size = {
      size: name,
      sizeSku: name.match(`YRS$`)
        ? getKidSKU(name)
        : name,
    };
    if(size.size.length > 5) return;
    if(sizes.filter(value => value.size === size.size).length === 0){
        sizes.push(size);
    }
});

data.items.map(item => {
    if(names.filter(elem => elem === item.manufacturer).length === 0){
        names.push(item.manufacturer);
    }
})

console.log(data.items.length);
console.log(names);