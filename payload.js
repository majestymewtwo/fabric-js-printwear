// Product details
const Product = {
  SKU: "",
  name: "",
  category: "",
  gender: "",
  description: "",
  productImage: {
    front: "",
    back: "",
  },
  colors: [
    {
      colorName: "",
      colorSKU: "",
      productId: "",
      colorImage: {
        front: "",
        back: "",
      },
      sizes: [
        {
          sizeSku: "",
          size: "",
          stock: 0,
        },
      ],
    },
  ],
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