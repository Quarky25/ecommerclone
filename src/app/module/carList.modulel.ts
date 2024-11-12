export interface ICarsList{
    model: string,
    brand: string,
    price: number,
    img: string,
    desc?: string
};

export let carList: ICarsList[] =
[
    {
        model: "Classic",
        brand: "Bobby Car",
        price: 750000,
        img: "./images/img-cars/bobbycar.jpg",
        desc: "Our greatest offer for big and small!"
      },
    {
        model: "Model S",
        brand: "Tesla",
        price: 85000,
        img: "./images/img-cars/tesla.jpg",
        desc: "A luxury electric car"
      },
      {
        model: "3 Series",
        brand: "BMW",
        price: 30000,
        img: "./images/img-cars/bmw3.jpg",
        desc: "A compact executive car"
      },
      {
        model: "Yaris",
        brand: "Toyota",
        price: 18000,
        img: "/images/img-cars/toyota.jpg",
        desc: "A reliable car"
      },
    {
        model: "Camry",
        brand: "Toyota",
        price: 15000,
        img: "./images/img-cars/toyota_camry.jpg",
        desc: ""
      },
    {
        model: "Accord",
        brand: "Honda",
        price: 17500,
        img: "./images/img-cars/2021-honda-accord.jpg",
        desc: ""
      },
      {
        model: "Evo",
        brand: "Mitsubishi",
        price: 45000,
        img: "/images/img-cars/mitsubishi.jpg",
        desc: ""
      },
      {
        model: "Multipla",
        brand: "Fiat",
        price: 500000,
        img: "/images/img-cars/Multipla.jpg",
        desc: ""
      },
    {
      model: "GT-R",
      brand: "Nissan",
      price: 122000,
      img: "/images/img-cars/nissanGTR.jpg",
      desc: ""
    },
    {
      model: "LC",
      brand: "Lexus",
      price: 99800,
      img: "/images/img-cars/lexusLC.jpg",
      desc: ""
  
    }, {
      model: "G90",
      brand: "Genesis",
      price: 90400,
      img: "/images/img-cars/genesisG90.jpg",
      desc: ""
  
    }, {
      model: "Corvette",
      brand: "Chevrolet",
      price: 106500,
      img: "/images/img-cars/corvette.jpg",
      desc: ""
  
    }, {
      model: "RS 6 Avant",
      brand: "Audi",
      price: 126900,
      img: "/images/img-cars/audiRS6.jpg",
      desc: ""
  
    }, {
      model: "Ghibli",
      brand: "Maserati",
      price: 110900,
      img: "/images/img-cars/MaseratiGhibli.jpg",
      desc: ""

    },
  ];