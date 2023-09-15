const zohoData = require("./zoho-response-raw.json");

function mapZohoToProduct(items) {
  let productsMap = {};

  items.forEach((item) => {
    let tokens = item.item_name.split(" ");
    let sizeToken = tokens[tokens.length - 1].split("-");
    let size = sizeToken[sizeToken.length - 1];
    let gender = item.sku.includes("-W")
      ? "WOMENS"
      : item.sku.includes("-M")
      ? "MENS"
      : "";

    let SKU = item.sku.split("-")[0];

    if (!productsMap[SKU]) {
      productsMap[SKU] = {
        SKU: SKU,
        name: tokens.slice(0, -1).join(" "),
        category: tokens[tokens.length - 2],
        gender: gender,
        description: "",
        productImage: {
          front: item.image_document_id || "",
          back: item.image_document_id || "",
        },
        colors: [],
        price: {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0,
        },
        canvas: {
          front: {
            startX: 0,
            startY: 0,
            width: 0,
            height: 0,
          },
          back: {
            startX: 0,
            startY: 0,
            width: 0,
            height: 0,
          },
        },
      };
    }

    if (size.toLowerCase() in productsMap[SKU].price) {
      productsMap[SKU].price[size.toLowerCase()] = item.rate;
    }

    let color = {
      colorName: "",
      colorSKU: "",
      productId: item.item_id,
      colorImage: {
        front: item.image_document_id || "",
        back: item.image_document_id || "",
      },
      sizes: [
        {
          sizeSku: size,
          size: size,
          stock: item.actual_available_stock,
        },
      ],
    };

    productsMap[SKU].colors.push(color);
  });

  return Object.values(productsMap);
}

const mappedData = mapZohoToProduct(zohoData.items);
console.log(mappedData);