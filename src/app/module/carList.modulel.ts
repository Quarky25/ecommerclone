export interface ICarsList{
  id: number,
    model: string,
    brand: string,
    price: number,
    img: string,
    desc?: string
};

export let carList: ICarsList[] =
[
    {
      id: 1,  
      model: "Classic",
        brand: "Bobby Car",
        price: 750000,
        img: "./images/img-cars/bobbycar.jpg",
        desc: "Our greatest offer for big and small!"
      },
    {
      id:2,
        model: "Model S",
        brand: "Tesla",
        price: 85000,
        img: "./images/img-cars/tesla.jpg",
        desc: "A luxury electric car"
      },
      {
        id: 3,
        model: "3 Series",
        brand: "BMW",
        price: 30000,
        img: "./images/img-cars/bmw3.jpg",
        desc: "A compact executive car"
      },
      {
        id:4,
        model: "Yaris",
        brand: "Toyota",
        price: 18000,
        img: "/images/img-cars/toyota.jpg",
        desc: "A reliable car"
      },
    {
      id:5,  
      model: "Camry",
        brand: "Toyota",
        price: 15000,
        img: "./images/img-cars/toyota_camry.jpg",
        desc: ""
      },
    {
      id:6,  
      model: "Accord",
        brand: "Honda",
        price: 17500,
        img: "./images/img-cars/2021-honda-accord.jpg",
        desc: ""
      },
      {
        id:7,
        model: "Evo",
        brand: "Mitsubishi",
        price: 45000,
        img: "/images/img-cars/mitsubishi.jpg",
        desc: ""
      },
      {
        id:8,
        model: "Multipla",
        brand: "Fiat",
        price: 500000,
        img: "/images/img-cars/Multipla.jpg",
        desc: ""
      },
    {
      id:9,
      model: "GT-R",
      brand: "Nissan",
      price: 122000,
      img: "/images/img-cars/nissanGTR.jpg",
      desc: ""
    },
    {
      id:10,
      model: "LC",
      brand: "Lexus",
      price: 99800,
      img: "/images/img-cars/lexusLC.jpg",
      desc: ""
  
    }, {
      id:11,
      model: "G90",
      brand: "Genesis",
      price: 90400,
      img: "/images/img-cars/genesisG90.jpg",
      desc: ""
  
    }, {
      id:12,
      model: "Corvette",
      brand: "Chevrolet",
      price: 106500,
      img: "/images/img-cars/corvette.jpg",
      desc: ""
  
    }, {
      id: 13,
      model: "RS 6 Avant",
      brand: "Audi",
      price: 126900,
      img: "/images/img-cars/audiRS6.jpg",
      desc: ""
  
    }, {
      id:14,
      model: "Ghibli",
      brand: "Maserati",
      price: 110900,
      img: "/images/img-cars/MaseratiGhibli.jpg",
      desc: ""

    },
  ];