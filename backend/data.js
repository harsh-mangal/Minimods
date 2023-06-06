import bcrypt from 'bcryptjs';
const data = {
  users:[
    {
      name : 'Harsh',
      email : 'harsh@gmail.com',
      password : bcrypt.hashSync('123456'),
      isAdmin : true
    },
    {
      name : 'abhishek',
      email : 'abhishek@gmail.com',
      password : bcrypt.hashSync('123456'),
      isAdmin : false
    }
  ],
  products: [
    {
      // _id : "1",
      name: "ASROCK X570",
      slug : "asrock-x570-motherboard",
      category: "motherboard",
      image:
        "https://cdn.mdcomputers.in/image/cachewebp/catalog/motherboard/asrock/90-mxbey0-a0iayz/90-mxbey0-a0iayz-image-main-600x600.webp",
      price: 33299,
      countInStock: 10,
      brand: "asrock",
      rating: 3.9,
      numReviews: 89,
      description:
        "The Renowned X570 Taichi Now in a Special Razer Edition Avatar, Featuring 16 Phase Digital VRM, Chroma RGB Lighting Support, Killer 2.5 Gigabit Ethernet and WiFi 6 Connectivity, Also Nahimic Audio.",
    },
    {
      // _id : "2",
        name: "Ant Value A320MAD4-N",
        slug : "ant-value-a320mad4-n",
        category: "motherboard",
        image:
          "https://cdn.mdcomputers.in/image/cachewebp/catalog/motherboard/ant%20value/a320mad4-n/a320mad4-n-image-main-600x600.webp",
        price: 3870,
        countInStock: 10,
        brand: "Ant Esports",
        rating: 4,
        numReviews: 124,
        description:
          "The Ant Value A320MAD4-N is a high performance motherboard to keep up with all your gaming needs. This motherboard is designed specifically for gamers, with support for AM4 socket based AMD Ryzen and Athlon CPUs.",
      },
      {
        // _id : "3",
        name: "MSI MEG Z790 ACE (Wi-Fi)",
        slug : "msi-meg-z790-ace",
        category: "motherboard",
        image:
          "https://cdn.mdcomputers.in/image/cachewebp/catalog/motherboard/msi/meg-z790-ace/meg-z790-ace-image-main-600x600.webp",
        price: 68299,
        countInStock: 10,
        brand: "MSI",
        rating: 5,
        numReviews: 53,
        description:
          "MEG Z790 ACE Supports 12th/13th Gen Intel processor, Dual Channel DDR5 7800+MHz (OC), Dual Thunderbolt 4 ports, Maximum 5 x M.2 Connectors, Dual 2.5G LAN with latest Wi-Fi 6E solution, Audio Boost 5 HD",
      },
      {
        // _id : "4",
        name: "Asus ROG Strix Z790-A",
        slug : "asus-rog-strix-z790",
        category: "motherboard",
        image:
          "https://cdn.mdcomputers.in/image/cachewebp/catalog/motherboard/ASUS/rog-strix-z790-a-gaming-wifi/rog-strix-z790-a-gaming-wifi-image-main000000-600x600.webp",
        price: 38999,
        countInStock: 10,
        brand: "ASUS",
        rating: 3.5,
        numReviews: 48,
        description:
          "Well-versed in style, performance, cooling, and connectivity, the ROG Strix Z790-A exudes well-rounded balance inside and out. A robust VRM topped with stout silver heatsinks comfortably articulates power for the latest Intel® 13th Gen Core processors. PCIe 5.0, WiFi 6E, and high-speed USB flesh out the board's fluency across a variety of disciplines. And a vast collection of tuning options and utilities derived from its ROG heritage are the icing on top.",
      }
  ],
};

export default data;