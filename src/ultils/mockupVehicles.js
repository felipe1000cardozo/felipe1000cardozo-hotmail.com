const vehicles = [
  {
    id: 1,
    model: "YBR",
    brand: "Yamaha",
    price: 3000,
    year: 2015,
    km: 40000,
    power: 125,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://www.moto.com.br/img/2020/03/30/yamaha_ybr_125_ed-2018-1-1585615463-v1.jpg",
      "https://www.moto.com.br/img/2020/03/30/yamaha_ybr_125_ed-2018-3-1585615469-v1.jpg",
      "https://www.moto.com.br/img/2020/03/30/yamaha_ybr_125_ed-2018-2-1585615466-v1.jpg"
    ]
  },
  {
    id: 2,
    model: "XRE 300",
    brand: "Honda",
    price: 12900,
    year: 2015,
    km: 53000,
    power: 300,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-xre-300-wmimagem16093681385.jpg?s=fill&w=1920&h=1440&q=75",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-xre-300-wmimagem16093592237.jpg?s=fill&w=1920&h=1440&q=75",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-xre-300-wmimagem16093636167.jpg?s=fill&w=1920&h=1440&q=75"
    ]
  },
  {
    id: 3,
    model: "Biz 125 ES",
    brand: "Honda",
    price: 7200,
    year: 2011,
    km: 40000,
    power: 125,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-biz-125-es-wmimagem16284668566.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-biz-125-es-wmimagem16284751123.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-biz-125-es-wmimagem1628477933.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 4,
    model: "MT-03 ABS",
    brand: "Yamaha",
    price: 19000,
    year: 2018,
    km: 10000,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-mt03-abs-wmimagem16410697057.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-mt03-abs-wmimagem16410728356.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-mt03-abs-wmimagem16410754953.jpg?s=fill&w=1920&h=1440&q=75"
    ]
  },
  {
    id: 5,
    model: "Fazer 600",
    brand: "Yamaha",
    price: 24900,
    year: 2009,
    km: 50000,
    power: 600,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-fazer-600-wmimagem16184930169.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-fazer-600-wmimagem16184986330.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-fazer-600-wmimagem16185019165.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 6,
    model: "NX4 Falcon",
    brand: "Honda",
    price: 10900,
    year: 2008,
    km: 50000,
    power: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-nx4-falcon-wmimagem16261231927.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-nx4-falcon-wmimagem16261272437.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-nx4-falcon-wmimagem1626130689.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 7,
    model: "YS 250 Fazer",
    brand: "Yamaha",
    price: 6900,
    year: 2006,
    km: 40000,
    power: 250,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-ys-250-fazer-wmimagem16365973126.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-ys-250-fazer-wmimagem16365940389.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/yamaha-ys-250-fazer-wmimagem16370002842.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 8,
    model: "CG 150 Fan ESI",
    brand: "Honda",
    price: 7900,
    year: 2011,
    km: 50000,
    power: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-cg-150-fan-esi-wmimagem16230041755.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-cg-150-fan-esi-wmimagem16230074490.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/honda-cg-150-fan-esi-wmimagem16230154128.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 9,
    model: "Ninja 400",
    brand: "Kawasaki",
    price: 22900,
    year: 2019,
    km: 4000,
    power: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202002/20200220/kawasaki-ninja-400-wmimagem09073700956.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202002/20200220/kawasaki-ninja-400-wmimagem09073735328.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202002/20200220/kawasaki-ninja-400-wmimagem09073783813.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 10,
    model: "Ninja 1000",
    brand: "Kawasaki",
    price: 32900,
    year: 2012,
    km: 32000,
    power: 1000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/kawasaki-ninja-1000-wmimagem16334610195.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/kawasaki-ninja-1000-wmimagem16334646050.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/kawasaki-ninja-1000-wmimagem16334679622.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 11,
    model: "XT 660 Z Ténéré",
    brand: "Yamaha",
    price: 24900,
    year: 2013,
    km: 49000,
    power: 650,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200311/yamaha-xt-660-z-tenere-wmimagem09344736596.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200311/yamaha-xt-660-z-tenere-wmimagem09344770968.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200311/yamaha-xt-660-z-tenere-wmimagem09344810094.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 12,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 13,
    model: "Versys 1000 ABS",
    brand: "Kawasaki",
    price: 44800,
    year: 2016,
    km: 41000,
    power: 1000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202001/20200124/kawasaki-versys-1000-abs-wmimagem11394564985.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202001/20200124/kawasaki-versys-1000-abs-wmimagem11394604012.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202001/20200124/kawasaki-versys-1000-abs-wmimagem11394647742.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 14,
    model: "CB 1000R ABS",
    brand: "Honda",
    price: 36900,
    year: 2015,
    km: 33600,
    power: 1000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/honda-cb-1000r-abs-wmimagem15314435630.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/honda-cb-1000r-abs-wmimagem15314488623.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/honda-cb-1000r-abs-wmimagem15314533288.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 15,
    model: "Shadow 750",
    brand: "Honda",
    price: 26900,
    year: 2012,
    km: 18000,
    power: 750,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200326/honda-shadow-750-wmimagem17252171894.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200326/honda-shadow-750-wmimagem17251909358.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200326/honda-shadow-750-wmimagem17252015539.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 16,
    model: "DL 650 V Strom",
    brand: "Suzuki",
    price: 26900,
    year: 2014,
    km: 62265,
    power: 650,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200311/suzuki-dl-650-v-strom-wmimagem09332827634.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200311/suzuki-dl-650-v-strom-wmimagem09332874583.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200311/suzuki-dl-650-v-strom-wmimagem09332921485.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 17,
    model: "Ninja ZX-10R",
    brand: "Kawasaki",
    price: 39800,
    year: 2012,
    km: 33000,
    power: 998,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202001/20200113/kawasaki-ninja-zx10r-wmimagem16270611922.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202001/20200113/kawasaki-ninja-zx10r-wmimagem16270663479.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202001/20200113/kawasaki-ninja-zx10r-wmimagem16270729150.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 18,
    model: "Versys",
    brand: "Kawasaki",
    price: 26900,
    year: 2016,
    km: 31900,
    power: 650,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/kawasaki-versys-wmimagem14092023629.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/kawasaki-versys-wmimagem14092056417.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/kawasaki-versys-wmimagem14092092371.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 19,
    model: "Z650 ABS",
    brand: "Kawasaki",
    price: 26900,
    year: 2018,
    km: 8700,
    power: 650,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200306/kawasaki-z650-abs-wmimagem17345569634.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200306/kawasaki-z650-abs-wmimagem17345618072.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200306/kawasaki-z650-abs-wmimagem1734566182.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 20,
    model: "GSX-S750A",
    brand: "Suzuki",
    price: 40900,
    year: 2020,
    km: 2000,
    power: 750,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/suzuki-gsxs750a-wmimagem1612411383.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/suzuki-gsxs750a-wmimagem16124147138.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202004/20200402/suzuki-gsxs750a-wmimagem1612411383.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 21,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 22,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 23,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 24,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 25,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 26,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 27,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 28,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 29,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 30,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 31,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  },
  {
    id: 32,
    model: "YZF R3 ABS",
    brand: "Yamaha",
    price: 17900,
    year: 2016,
    km: 32450,
    power: 320,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime mollitia deleniti. Fugit autem non, explicabo facilis error architecto ducimus consequuntur soluta nobis harum libero debitis unde dignissimos ex hic!",
    imgs: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113311729.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem1611337730.jpg?s=fill&w=552&h=414&q=60",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2019/201908/20190808/yamaha-yzf-r3-abs-wmimagem16113455553.jpg?s=fill&w=552&h=414&q=60"
    ]
  }
];

export default vehicles;
