
import { Product } from "@/contexts/CartContext";

// Define 60+ superbike products with all details
export const products: Product[] = [
  // Japanese Sports Bikes
  {
    id: 1,
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    price: 1599990,
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years.",
    specs: {
      engine: "998cc Liquid-Cooled Inline-Four",
      power: "200 HP @ 13,500 rpm",
      torque: "114.9 Nm @ 11,200 rpm",
      weight: "207 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black", "blue"],
    category: "sport"
  },
  {
    id: 2,
    name: "GSX-R1000R",
    brand: "Suzuki",
    price: 1949000,
    description: "The Suzuki GSX-R1000 is a sport bike from Suzuki's GSX-R series of motorcycles. It was introduced in 2001 to replace the GSX-R1100 and is powered by a liquid-cooled 999.8 cc inline four-cylinder, four-stroke engine.",
    specs: {
      engine: "999.8cc Liquid-Cooled Inline-Four",
      power: "202 HP @ 13,200 rpm",
      torque: "117.6 Nm @ 10,800 rpm",
      weight: "203 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "white"],
    category: "sport"
  },
  {
    id: 3,
    name: "YZF-R1",
    brand: "Yamaha",
    price: 2099000,
    description: "The Yamaha YZF-R1 is a 1,000 cc class sports motorcycle made by Yamaha. It was first released in 1998, and was updated significantly in 2000, 2002, 2004, 2006, 2007, 2009 and 2015.",
    specs: {
      engine: "998cc Liquid-Cooled Crossplane Inline-Four",
      power: "200 HP @ 13,500 rpm",
      torque: "112.4 Nm @ 11,500 rpm",
      weight: "201 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "red"],
    category: "sport"
  },
  {
    id: 4,
    name: "CBR1000RR-R Fireblade SP",
    brand: "Honda",
    price: 2399000,
    description: "The Honda CBR1000RR-R Fireblade SP is a sport bike manufactured by Honda since 2020. It is the successor to the CBR1000RR Fireblade, and features a 999.9 cc inline-four engine.",
    specs: {
      engine: "999.9cc Liquid-Cooled Inline-Four",
      power: "214 HP @ 14,500 rpm",
      torque: "113 Nm @ 12,500 rpm",
      weight: "201 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "16.1 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black", "tricolor"],
    category: "sport"
  },
  // European Sports Bikes
  {
    id: 5,
    name: "Panigale V4",
    brand: "Ducati",
    price: 2635000,
    description: "The Ducati Panigale V4 is a sport bike with a 1,103 cc desmodromic 90° V4 engine introduced by Ducati in 2018 as the successor to the V-twin engined 1299.",
    specs: {
      engine: "1103cc Desmosedici Stradale V4",
      power: "214 HP @ 13,000 rpm",
      torque: "124 Nm @ 10,000 rpm",
      weight: "195 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571646750134-7e3f70963a4e?q=80&w=2068&auto=format&fit=crop"
    ],
    colors: ["red", "black", "white"],
    category: "sport"
  },
  {
    id: 6,
    name: "S1000RR",
    brand: "BMW",
    price: 2065000,
    description: "The BMW S1000RR is a race oriented sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship, that is now in commercial production.",
    specs: {
      engine: "999cc Liquid-Cooled Inline-Four",
      power: "207 HP @ 13,500 rpm",
      torque: "113 Nm @ 11,000 rpm",
      weight: "197 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "16.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580974852861-c583087432cc?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red/blue/white", "black", "white"],
    category: "sport"
  },
  {
    id: 7,
    name: "RSV4 Factory",
    brand: "Aprilia",
    price: 2399000,
    description: "The Aprilia RSV4 is a super bike manufactured by Aprilia. The RSV4 is Aprilia's flagship model. It was introduced in 2009 and is still in production.",
    specs: {
      engine: "1099cc V4 Engine",
      power: "217 HP @ 13,000 rpm",
      torque: "125 Nm @ 10,500 rpm",
      weight: "204 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "18.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1656260501335-61fce1ae4cfb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581044698505-9e93083c8955?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "red", "factory"],
    category: "sport"
  },
  {
    id: 8,
    name: "1290 Super Duke R",
    brand: "KTM",
    price: 1845000,
    description: "The KTM 1290 Super Duke R is a 1301cc v-twin naked bike made by KTM. The Super Duke R features a LC8 v-twin from the RC8 superbike, but has been tuned to deliver 180 hp.",
    specs: {
      engine: "1301cc LC8 V-Twin",
      power: "180 HP @ 9,500 rpm",
      torque: "140 Nm @ 8,000 rpm",
      weight: "195 kg",
      topSpeed: "290 km/h",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635073908681-644d438514a1?q=80&w=2069&auto=format&fit=crop"
    ],
    colors: ["orange", "black", "white"],
    category: "naked"
  },
  // Adventure Bikes
  {
    id: 9,
    name: "R 1250 GS Adventure",
    brand: "BMW",
    price: 2199000,
    description: "The BMW R1250GS Adventure is an adventure touring motorcycle manufactured in Berlin, Germany by BMW Motorrad, part of the BMW group. It is one of the most popular models in BMW's GS family of dual-sport motorcycles.",
    specs: {
      engine: "1254cc Boxer Twin",
      power: "136 HP @ 7,750 rpm",
      torque: "143 Nm @ 6,250 rpm",
      weight: "268 kg",
      topSpeed: "219 km/h",
      fuelCapacity: "30 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "white/blue/red"],
    category: "adventure"
  },
  {
    id: 10,
    name: "Multistrada V4",
    brand: "Ducati",
    price: 1825000,
    description: "The Ducati Multistrada V4 is a dual-sport motorcycle manufactured by Ducati since 2021. It is powered by Ducati's 1,158 cc Granturismo V4 engine, derived from the Desmosedici Stradale used in the Panigale V4.",
    specs: {
      engine: "1158cc V4 Granturismo",
      power: "170 HP @ 10,500 rpm",
      torque: "125 Nm @ 8,750 rpm",
      weight: "240 kg",
      topSpeed: "250 km/h",
      fuelCapacity: "22 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2071&auto=format&fit=crop"
    ],
    colors: ["red", "black", "gray"],
    category: "adventure"
  },
  // Additional 50+ products to reach 60+ total
  {
    id: 11,
    name: "Street Triple RS",
    brand: "Triumph",
    price: 1150000,
    description: "The Triumph Street Triple RS is a naked sports motorcycle made by Triumph Motorcycles. It features a 765cc inline-three engine derived from the Daytona 675.",
    specs: {
      engine: "765cc Liquid-Cooled Inline-Three",
      power: "123 HP @ 11,750 rpm",
      torque: "79 Nm @ 9,350 rpm",
      weight: "166 kg",
      topSpeed: "240 km/h",
      fuelCapacity: "17.4 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["silver", "black", "white"],
    category: "naked"
  },
  {
    id: 12,
    name: "Hayabusa",
    brand: "Suzuki",
    price: 1645000,
    description: "The Suzuki Hayabusa is a sport bike motorcycle made by Suzuki since 1999. It immediately won acclaim as the world's fastest production motorcycle, with a top speed of 303 to 312 km/h.",
    specs: {
      engine: "1340cc Liquid-Cooled Inline-Four",
      power: "190 HP @ 9,700 rpm",
      torque: "150 Nm @ 7,000 rpm",
      weight: "264 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "20 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980394-dbb977039a2e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black/gray", "white/silver", "orange/black"],
    category: "sport"
  },
  {
    id: 13,
    name: "Diavel V4",
    brand: "Ducati",
    price: 2250000,
    description: "The Ducati Diavel is a cruiser-style motorcycle with sporty performance. The second generation Diavel V4 features a powerful V4 engine in a muscular design.",
    specs: {
      engine: "1158cc V4 Granturismo",
      power: "168 HP @ 10,750 rpm",
      torque: "126 Nm @ 7,500 rpm",
      weight: "236 kg",
      topSpeed: "270 km/h",
      fuelCapacity: "20 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2071&auto=format&fit=crop"
    ],
    colors: ["red", "black", "stealth"],
    category: "cruiser"
  },
  {
    id: 14,
    name: "Z H2",
    brand: "Kawasaki",
    price: 1990000,
    description: "The Kawasaki Z H2 is a hypernaked motorcycle powered by a supercharged 998cc inline-four engine, bringing supercharged performance to the streets.",
    specs: {
      engine: "998cc Supercharged Liquid-Cooled Inline-Four",
      power: "200 HP @ 11,000 rpm",
      torque: "137 Nm @ 8,500 rpm",
      weight: "239 kg",
      topSpeed: "290 km/h",
      fuelCapacity: "19 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green/black", "black/gray", "white/green"],
    category: "naked"
  },
  {
    id: 15,
    name: "V-Strom 1050XT",
    brand: "Suzuki",
    price: 1450000,
    description: "The Suzuki V-Strom 1050XT is an adventure touring motorcycle with a powerful V-twin engine, designed for long-distance comfort both on and off-road.",
    specs: {
      engine: "1037cc Liquid-Cooled V-Twin",
      power: "107 HP @ 8,500 rpm",
      torque: "100 Nm @ 6,000 rpm",
      weight: "247 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "20 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2071&auto=format&fit=crop"
    ],
    colors: ["yellow", "orange", "black"],
    category: "adventure"
  },
  // Adding 55 more products to reach 70 products
  {
    id: 16,
    name: "MT-09",
    brand: "Yamaha",
    price: 975000,
    description: "The Yamaha MT-09 is a naked sports motorcycle powered by an 890cc inline-three engine, known for its aggressive styling and torquey performance.",
    specs: {
      engine: "890cc Liquid-Cooled Inline-Three",
      power: "119 HP @ 10,000 rpm",
      torque: "93 Nm @ 7,000 rpm",
      weight: "189 kg",
      topSpeed: "230 km/h",
      fuelCapacity: "14 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "gray"],
    category: "naked"
  },
  {
    id: 17,
    name: "Z900",
    brand: "Kawasaki",
    price: 825000,
    description: "The Kawasaki Z900 is a middleweight naked bike with a 948cc inline-four engine, offering a balanced mix of performance and everyday usability.",
    specs: {
      engine: "948cc Liquid-Cooled Inline-Four",
      power: "125 HP @ 9,500 rpm",
      torque: "98.6 Nm @ 7,700 rpm",
      weight: "210 kg",
      topSpeed: "240 km/h",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black", "gray"],
    category: "naked"
  },
  {
    id: 18,
    name: "Speed Triple 1200 RS",
    brand: "Triumph",
    price: 1675000,
    description: "The Triumph Speed Triple 1200 RS is a high-performance naked bike with a 1160cc triple engine, featuring premium components and aggressive styling.",
    specs: {
      engine: "1160cc Liquid-Cooled Inline-Three",
      power: "177.5 HP @ 10,750 rpm",
      torque: "125 Nm @ 9,000 rpm",
      weight: "198 kg",
      topSpeed: "260 km/h",
      fuelCapacity: "15.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["silver", "black", "red"],
    category: "naked"
  },
  {
    id: 19,
    name: "CB650R",
    brand: "Honda",
    price: 865000,
    description: "The Honda CB650R is a middleweight naked bike with a 649cc inline-four engine, featuring Neo Sports Café styling and excellent handling.",
    specs: {
      engine: "649cc Liquid-Cooled Inline-Four",
      power: "94 HP @ 12,000 rpm",
      torque: "64 Nm @ 8,500 rpm",
      weight: "202 kg",
      topSpeed: "225 km/h",
      fuelCapacity: "15.4 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black", "blue"],
    category: "naked"
  },
  {
    id: 20,
    name: "Monster",
    brand: "Ducati",
    price: 1095000,
    description: "The Ducati Monster is an iconic naked bike with a 937cc L-twin engine, known for its distinctive styling and sporty handling.",
    specs: {
      engine: "937cc Testastretta 11° L-Twin",
      power: "111 HP @ 9,250 rpm",
      torque: "93 Nm @ 6,500 rpm",
      weight: "188 kg",
      topSpeed: "230 km/h",
      fuelCapacity: "14 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571646750134-7e3f70963a4e?q=80&w=2068&auto=format&fit=crop"
    ],
    colors: ["red", "black", "gray"],
    category: "naked"
  },
  {
    id: 21,
    name: "Ninja 650",
    brand: "Kawasaki",
    price: 679000,
    description: "The Kawasaki Ninja 650 is a middleweight sport bike with a 649cc parallel-twin engine, offering a blend of sportiness and everyday usability.",
    specs: {
      engine: "649cc Liquid-Cooled Parallel-Twin",
      power: "67 HP @ 8,000 rpm",
      torque: "64 Nm @ 6,700 rpm",
      weight: "196 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "15 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black", "white"],
    category: "sport"
  },
  {
    id: 22,
    name: "CBR650R",
    brand: "Honda",
    price: 825000,
    description: "The Honda CBR650R is a middleweight sport bike with a 649cc inline-four engine, featuring sporty styling and comfortable ergonomics.",
    specs: {
      engine: "649cc Liquid-Cooled Inline-Four",
      power: "94 HP @ 12,000 rpm",
      torque: "64 Nm @ 8,500 rpm",
      weight: "208 kg",
      topSpeed: "225 km/h",
      fuelCapacity: "15.4 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black", "blue"],
    category: "sport"
  },
  {
    id: 23,
    name: "GSX-S750",
    brand: "Suzuki",
    price: 785000,
    description: "The Suzuki GSX-S750 is a naked streetfighter with a 749cc inline-four engine derived from the GSX-R sports bike series.",
    specs: {
      engine: "749cc Liquid-Cooled Inline-Four",
      power: "114 HP @ 10,500 rpm",
      torque: "81 Nm @ 9,000 rpm",
      weight: "213 kg",
      topSpeed: "230 km/h",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "red"],
    category: "naked"
  },
  {
    id: 24,
    name: "YZF-R7",
    brand: "Yamaha",
    price: 999000,
    description: "The Yamaha YZF-R7 is a middleweight sport bike with a 689cc parallel-twin engine, designed to bridge the gap between the R3 and R1 models.",
    specs: {
      engine: "689cc Liquid-Cooled Parallel-Twin",
      power: "73.4 HP @ 8,750 rpm",
      torque: "67 Nm @ 6,500 rpm",
      weight: "188 kg",
      topSpeed: "220 km/h",
      fuelCapacity: "13 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "white"],
    category: "sport"
  },
  {
    id: 25,
    name: "Tiger 900 Rally Pro",
    brand: "Triumph",
    price: 1550000,
    description: "The Triumph Tiger 900 Rally Pro is an adventure motorcycle with an 888cc triple engine, designed for serious off-road capability and long-distance touring.",
    specs: {
      engine: "888cc Liquid-Cooled Inline-Three",
      power: "94 HP @ 8,750 rpm",
      torque: "87 Nm @ 7,250 rpm",
      weight: "222 kg",
      topSpeed: "200 km/h",
      fuelCapacity: "20 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["white/blue", "black", "green"],
    category: "adventure"
  },
  {
    id: 26,
    name: "Africa Twin",
    brand: "Honda",
    price: 1599000,
    description: "The Honda Africa Twin is an adventure motorcycle with a 1084cc parallel-twin engine, known for its off-road capability and long-distance touring comfort.",
    specs: {
      engine: "1084cc Liquid-Cooled Parallel-Twin",
      power: "101 HP @ 7,500 rpm",
      torque: "105 Nm @ 6,250 rpm",
      weight: "229 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "24.8 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red/blue/white", "black", "white"],
    category: "adventure"
  },
  {
    id: 27,
    name: "Versys 1000",
    brand: "Kawasaki",
    price: 1149000,
    description: "The Kawasaki Versys 1000 is a sport-touring motorcycle with a 1043cc inline-four engine, designed for comfortable long-distance riding with sporty handling.",
    specs: {
      engine: "1043cc Liquid-Cooled Inline-Four",
      power: "118 HP @ 9,000 rpm",
      torque: "102 Nm @ 7,500 rpm",
      weight: "255 kg",
      topSpeed: "220 km/h",
      fuelCapacity: "21 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black", "gray"],
    category: "adventure"
  },
  {
    id: 28,
    name: "Scrambler 1200 XE",
    brand: "Triumph",
    price: 1199000,
    description: "The Triumph Scrambler 1200 XE is a modern classic with a 1200cc parallel-twin engine, combining retro styling with serious off-road capability.",
    specs: {
      engine: "1200cc Liquid-Cooled Parallel-Twin",
      power: "89 HP @ 7,400 rpm",
      torque: "110 Nm @ 3,950 rpm",
      weight: "207 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black/silver", "white/gold"],
    category: "classic"
  },
  {
    id: 29,
    name: "Rebel 1100",
    brand: "Honda",
    price: 995000,
    description: "The Honda Rebel 1100 is a cruiser motorcycle with a 1084cc parallel-twin engine from the Africa Twin, offering a blend of cruiser style with sporty performance.",
    specs: {
      engine: "1084cc Liquid-Cooled Parallel-Twin",
      power: "87 HP @ 7,000 rpm",
      torque: "98 Nm @ 4,750 rpm",
      weight: "223 kg",
      topSpeed: "200 km/h",
      fuelCapacity: "13.6 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "bordeaux red", "gray"],
    category: "cruiser"
  },
  {
    id: 30,
    name: "Vulcan S",
    brand: "Kawasaki",
    price: 699000,
    description: "The Kawasaki Vulcan S is a cruiser motorcycle with a 649cc parallel-twin engine, offering customizable ergonomics and sporty handling in a cruiser package.",
    specs: {
      engine: "649cc Liquid-Cooled Parallel-Twin",
      power: "61 HP @ 7,500 rpm",
      torque: "63 Nm @ 6,600 rpm",
      weight: "229 kg",
      topSpeed: "185 km/h",
      fuelCapacity: "14 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "gray", "green"],
    category: "cruiser"
  },
  {
    id: 31,
    name: "Bonneville T120",
    brand: "Triumph",
    price: 1199000,
    description: "The Triumph Bonneville T120 is a modern classic motorcycle with a 1200cc parallel-twin engine, capturing the essence of the iconic 1959 model with modern technology.",
    specs: {
      engine: "1200cc Liquid-Cooled Parallel-Twin",
      power: "80 HP @ 6,550 rpm",
      torque: "105 Nm @ 3,500 rpm",
      weight: "224 kg",
      topSpeed: "190 km/h",
      fuelCapacity: "14.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black/white", "red", "blue/white"],
    category: "classic"
  },
  {
    id: 32,
    name: "Interceptor 650",
    brand: "Royal Enfield",
    price: 299000,
    description: "The Royal Enfield Interceptor 650 is a retro-styled motorcycle with a 648cc parallel-twin engine, offering accessible performance in a classic package.",
    specs: {
      engine: "648cc Air/Oil-Cooled Parallel-Twin",
      power: "47 HP @ 7,250 rpm",
      torque: "52 Nm @ 5,250 rpm",
      weight: "202 kg",
      topSpeed: "170 km/h",
      fuelCapacity: "13.7 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["orange", "black", "silver"],
    category: "classic"
  },
  {
    id: 33,
    name: "XSR900",
    brand: "Yamaha",
    price: 989000,
    description: "The Yamaha XSR900 is a neo-retro motorcycle with an 890cc triple engine, combining vintage styling with modern performance.",
    specs: {
      engine: "890cc Liquid-Cooled Inline-Three",
      power: "119 HP @ 10,000 rpm",
      torque: "93 Nm @ 7,000 rpm",
      weight: "193 kg",
      topSpeed: "230 km/h",
      fuelCapacity: "14 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black/silver", "blue", "green"],
    category: "classic"
  },
  {
    id: 34,
    name: "CB1000R",
    brand: "Honda",
    price: 1425000,
    description: "The Honda CB1000R is a premium naked bike with a 998cc inline-four engine, featuring Neo Sports Café styling and high-end components.",
    specs: {
      engine: "998cc Liquid-Cooled Inline-Four",
      power: "143 HP @ 10,500 rpm",
      torque: "104 Nm @ 8,250 rpm",
      weight: "212 kg",
      topSpeed: "250 km/h",
      fuelCapacity: "16.2 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "silver", "red"],
    category: "naked"
  },
  {
    id: 35,
    name: "GSX-S1000GT",
    brand: "Suzuki",
    price: 1349000,
    description: "The Suzuki GSX-S1000GT is a sport touring motorcycle with a 999cc inline-four engine, offering a blend of sportbike performance and touring comfort.",
    specs: {
      engine: "999cc Liquid-Cooled Inline-Four",
      power: "152 HP @ 11,000 rpm",
      torque: "106 Nm @ 9,250 rpm",
      weight: "226 kg",
      topSpeed: "260 km/h",
      fuelCapacity: "19 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "silver"],
    category: "touring"
  },
  {
    id: 36,
    name: "Ninja 1000SX",
    brand: "Kawasaki",
    price: 1219000,
    description: "The Kawasaki Ninja 1000SX is a sport touring motorcycle with a 1043cc inline-four engine, offering a balance of sportbike performance and touring comfort.",
    specs: {
      engine: "1043cc Liquid-Cooled Inline-Four",
      power: "142 HP @ 10,000 rpm",
      torque: "111 Nm @ 8,000 rpm",
      weight: "235 kg",
      topSpeed: "250 km/h",
      fuelCapacity: "19 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black", "gray"],
    category: "touring"
  },
  {
    id: 37,
    name: "Tracer 9 GT",
    brand: "Yamaha",
    price: 1399000,
    description: "The Yamaha Tracer 9 GT is a sport touring motorcycle with an 890cc triple engine, offering versatile performance for both spirited riding and long-distance touring.",
    specs: {
      engine: "890cc Liquid-Cooled Inline-Three",
      power: "119 HP @ 10,000 rpm",
      torque: "93 Nm @ 7,000 rpm",
      weight: "220 kg",
      topSpeed: "230 km/h",
      fuelCapacity: "18 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "gray", "red"],
    category: "touring"
  },
  {
    id: 38,
    name: "FJR1300AE",
    brand: "Yamaha",
    price: 1699000,
    description: "The Yamaha FJR1300AE is a premium touring motorcycle with a 1298cc inline-four engine, featuring electronic suspension and shaft drive for long-distance comfort.",
    specs: {
      engine: "1298cc Liquid-Cooled Inline-Four",
      power: "146 HP @ 8,000 rpm",
      torque: "138 Nm @ 7,000 rpm",
      weight: "292 kg",
      topSpeed: "250 km/h",
      fuelCapacity: "25 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "silver", "black"],
    category: "touring"
  },
  {
    id: 39,
    name: "Gold Wing Tour",
    brand: "Honda",
    price: 2899000,
    description: "The Honda Gold Wing Tour is a luxury touring motorcycle with a 1833cc flat-six engine, featuring premium comfort for both rider and passenger on long journeys.",
    specs: {
      engine: "1833cc Liquid-Cooled Flat-Six",
      power: "126 HP @ 5,500 rpm",
      torque: "170 Nm @ 4,500 rpm",
      weight: "383 kg",
      topSpeed: "225 km/h",
      fuelCapacity: "21.1 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "red", "blue"],
    category: "touring"
  },
  {
    id: 40,
    name: "Rocket 3 GT",
    brand: "Triumph",
    price: 2199000,
    description: "The Triumph Rocket 3 GT is a power cruiser with a massive 2458cc triple engine, the largest production motorcycle engine, offering incredible torque and comfort.",
    specs: {
      engine: "2458cc Liquid-Cooled Inline-Three",
      power: "167 HP @ 6,000 rpm",
      torque: "221 Nm @ 4,000 rpm",
      weight: "320 kg",
      topSpeed: "240 km/h",
      fuelCapacity: "18 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["silver", "black", "red"],
    category: "cruiser"
  },
  {
    id: 41,
    name: "Panigale V2",
    brand: "Ducati",
    price: 1999000,
    description: "The Ducati Panigale V2 is a super mid-weight sports bike with a 955cc V2 engine, the entry point to Ducati's superbike range.",
    specs: {
      engine: "955cc Superquadro V2",
      power: "155 HP @ 10,750 rpm",
      torque: "104 Nm @ 9,000 rpm",
      weight: "200 kg",
      topSpeed: "270 km/h",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571646750134-7e3f70963a4e?q=80&w=2068&auto=format&fit=crop"
    ],
    colors: ["red", "white", "black"],
    category: "sport"
  },
  {
    id: 42,
    name: "GSX-R750",
    brand: "Suzuki",
    price: 1349000,
    description: "The Suzuki GSX-R750 is a sports bike with a 750cc inline-four engine, offering a middle ground between the handling of a 600cc and the power of a 1000cc.",
    specs: {
      engine: "750cc Liquid-Cooled Inline-Four",
      power: "148 HP @ 13,200 rpm",
      torque: "86 Nm @ 11,200 rpm",
      weight: "190 kg",
      topSpeed: "270 km/h",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue/white", "black", "red/black"],
    category: "sport"
  },
  {
    id: 43,
    name: "CBR600RR",
    brand: "Honda",
    price: 1299000,
    description: "The Honda CBR600RR is a 600cc class sports bike, known for its sharp handling and race-derived technology.",
    specs: {
      engine: "599cc Liquid-Cooled Inline-Four",
      power: "118 HP @ 14,000 rpm",
      torque: "66 Nm @ 11,500 rpm",
      weight: "186 kg",
      topSpeed: "260 km/h",
      fuelCapacity: "18.1 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red/white/blue", "black", "white/blue"],
    category: "sport"
  },
  {
    id: 44,
    name: "ZX-6R",
    brand: "Kawasaki",
    price: 1089000,
    description: "The Kawasaki Ninja ZX-6R is a 636cc sports bike, offering more mid-range power than traditional 600cc bikes while maintaining agile handling.",
    specs: {
      engine: "636cc Liquid-Cooled Inline-Four",
      power: "127 HP @ 13,500 rpm",
      torque: "70.8 Nm @ 11,000 rpm",
      weight: "196 kg",
      topSpeed: "260 km/h",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green/black", "black", "white/red"],
    category: "sport"
  },
  {
    id: 45,
    name: "YZF-R3",
    brand: "Yamaha",
    price: 399000,
    description: "The Yamaha YZF-R3 is an entry-level sports bike with a 321cc parallel-twin engine, designed for beginners while offering spirited performance.",
    specs: {
      engine: "321cc Liquid-Cooled Parallel-Twin",
      power: "42 HP @ 10,750 rpm",
      torque: "29.6 Nm @ 9,000 rpm",
      weight: "170 kg",
      topSpeed: "180 km/h",
      fuelCapacity: "14 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "red"],
    category: "sport"
  },
  {
    id: 46,
    name: "RC 390",
    brand: "KTM",
    price: 299000,
    description: "The KTM RC 390 is a lightweight sports bike with a 373cc single-cylinder engine, offering sharp handling and aggressive styling.",
    specs: {
      engine: "373cc Liquid-Cooled Single-Cylinder",
      power: "43 HP @ 9,000 rpm",
      torque: "37 Nm @ 7,000 rpm",
      weight: "163 kg",
      topSpeed: "170 km/h",
      fuelCapacity: "13.7 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635073908681-644d438514a1?q=80&w=2069&auto=format&fit=crop"
    ],
    colors: ["orange/white", "black", "blue/orange"],
    category: "sport"
  },
  {
    id: 47,
    name: "CBR500R",
    brand: "Honda",
    price: 489000,
    description: "The Honda CBR500R is a middleweight sports bike with a 471cc parallel-twin engine, designed for accessible performance with full-size ergonomics.",
    specs: {
      engine: "471cc Liquid-Cooled Parallel-Twin",
      power: "47 HP @ 8,600 rpm",
      torque: "43 Nm @ 6,500 rpm",
      weight: "192 kg",
      topSpeed: "185 km/h",
      fuelCapacity: "17.1 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black", "blue"],
    category: "sport"
  },
  {
    id: 48,
    name: "Duke 390",
    brand: "KTM",
    price: 279000,
    description: "The KTM Duke 390 is a naked street bike with a 373cc single-cylinder engine, known for its lightweight agility and punchy performance.",
    specs: {
      engine: "373cc Liquid-Cooled Single-Cylinder",
      power: "43 HP @ 9,000 rpm",
      torque: "37 Nm @ 7,000 rpm",
      weight: "163 kg",
      topSpeed: "170 km/h",
      fuelCapacity: "13.4 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635073908681-644d438514a1?q=80&w=2069&auto=format&fit=crop"
    ],
    colors: ["orange", "white", "black"],
    category: "naked"
  },
  {
    id: 49,
    name: "Z400",
    brand: "Kawasaki",
    price: 425000,
    description: "The Kawasaki Z400 is a naked street bike with a 399cc parallel-twin engine, offering aggressive styling and accessible performance.",
    specs: {
      engine: "399cc Liquid-Cooled Parallel-Twin",
      power: "45 HP @ 10,000 rpm",
      torque: "38 Nm @ 8,000 rpm",
      weight: "167 kg",
      topSpeed: "175 km/h",
      fuelCapacity: "14 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green/black", "black", "gray"],
    category: "naked"
  },
  {
    id: 50,
    name: "MT-03",
    brand: "Yamaha",
    price: 349000,
    description: "The Yamaha MT-03 is a naked street bike with a 321cc parallel-twin engine, offering the same engine as the R3 in a more upright, street-focused package.",
    specs: {
      engine: "321cc Liquid-Cooled Parallel-Twin",
      power: "42 HP @ 10,750 rpm",
      torque: "29.6 Nm @ 9,000 rpm",
      weight: "168 kg",
      topSpeed: "175 km/h",
      fuelCapacity: "14 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["ice fluo", "black", "blue"],
    category: "naked"
  },
  {
    id: 51,
    name: "CB300R",
    brand: "Honda",
    price: 299000,
    description: "The Honda CB300R is a lightweight naked bike with a 286cc single-cylinder engine, featuring Neo Sports Café styling in a compact package.",
    specs: {
      engine: "286cc Liquid-Cooled Single-Cylinder",
      power: "31 HP @ 8,500 rpm",
      torque: "27.5 Nm @ 7,500 rpm",
      weight: "144 kg",
      topSpeed: "155 km/h",
      fuelCapacity: "10 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black", "silver"],
    category: "naked"
  },
  {
    id: 52,
    name: "SV650",
    brand: "Suzuki",
    price: 599000,
    description: "The Suzuki SV650 is a middleweight naked bike with a 645cc V-twin engine, known for its versatility and accessible performance.",
    specs: {
      engine: "645cc Liquid-Cooled V-Twin",
      power: "75 HP @ 8,500 rpm",
      torque: "64 Nm @ 8,100 rpm",
      weight: "198 kg",
      topSpeed: "200 km/h",
      fuelCapacity: "13.8 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "silver"],
    category: "naked"
  },
  {
    id: 53,
    name: "V-Strom 650XT",
    brand: "Suzuki",
    price: 899000,
    description: "The Suzuki V-Strom 650XT is an adventure touring motorcycle with a 645cc V-twin engine, offering a balance of on-road comfort and off-road capability.",
    specs: {
      engine: "645cc Liquid-Cooled V-Twin",
      power: "71 HP @ 8,800 rpm",
      torque: "62 Nm @ 6,500 rpm",
      weight: "216 kg",
      topSpeed: "195 km/h",
      fuelCapacity: "20 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2071&auto=format&fit=crop"
    ],
    colors: ["yellow", "white", "black"],
    category: "adventure"
  },
  {
    id: 54,
    name: "Versys-X 300",
    brand: "Kawasaki",
    price: 489000,
    description: "The Kawasaki Versys-X 300 is a lightweight adventure motorcycle with a 296cc parallel-twin engine, designed for versatile use on both paved and unpaved roads.",
    specs: {
      engine: "296cc Liquid-Cooled Parallel-Twin",
      power: "40 HP @ 11,500 rpm",
      torque: "26 Nm @ 10,000 rpm",
      weight: "175 kg",
      topSpeed: "160 km/h",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black", "gray"],
    category: "adventure"
  },
  {
    id: 55,
    name: "CB500X",
    brand: "Honda",
    price: 549000,
    description: "The Honda CB500X is a versatile adventure motorcycle with a 471cc parallel-twin engine, offering accessible performance for both daily commuting and light off-road adventures.",
    specs: {
      engine: "471cc Liquid-Cooled Parallel-Twin",
      power: "47 HP @ 8,600 rpm",
      torque: "43 Nm @ 6,500 rpm",
      weight: "199 kg",
      topSpeed: "180 km/h",
      fuelCapacity: "17.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black", "silver"],
    category: "adventure"
  },
  {
    id: 56,
    name: "Tenere 700",
    brand: "Yamaha",
    price: 999000,
    description: "The Yamaha Tenere 700 is an adventure motorcycle with a 689cc parallel-twin engine, designed for serious off-road performance while maintaining on-road capability.",
    specs: {
      engine: "689cc Liquid-Cooled Parallel-Twin",
      power: "73 HP @ 9,000 rpm",
      torque: "68 Nm @ 6,500 rpm",
      weight: "205 kg",
      topSpeed: "190 km/h",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "white"],
    category: "adventure"
  },
  {
    id: 57,
    name: "790 Adventure R",
    brand: "KTM",
    price: 1299000,
    description: "The KTM 790 Adventure R is a high-performance adventure motorcycle with a 799cc parallel-twin engine, designed for aggressive off-road riding.",
    specs: {
      engine: "799cc Liquid-Cooled Parallel-Twin",
      power: "95 HP @ 8,000 rpm",
      torque: "88 Nm @ 6,600 rpm",
      weight: "209 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "20 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635073908681-644d438514a1?q=80&w=2069&auto=format&fit=crop"
    ],
    colors: ["orange", "white/orange", "black"],
    category: "adventure"
  },
  {
    id: 58,
    name: "Bobber",
    brand: "Triumph",
    price: 1299000,
    description: "The Triumph Bobber is a custom-inspired cruiser with a 1200cc parallel-twin engine, featuring vintage styling with modern technology.",
    specs: {
      engine: "1200cc Liquid-Cooled Parallel-Twin",
      power: "77 HP @ 6,100 rpm",
      torque: "106 Nm @ 4,000 rpm",
      weight: "228 kg",
      topSpeed: "185 km/h",
      fuelCapacity: "9.1 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "red", "gray"],
    category: "cruiser"
  },
  {
    id: 59,
    name: "Scout",
    brand: "Indian",
    price: 1399000,
    description: "The Indian Scout is a middleweight cruiser with a 1133cc V-twin engine, combining classic American styling with modern performance.",
    specs: {
      engine: "1133cc Liquid-Cooled V-Twin",
      power: "94 HP @ 8,000 rpm",
      torque: "97 Nm @ 5,600 rpm",
      weight: "256 kg",
      topSpeed: "200 km/h",
      fuelCapacity: "12.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "red", "blue"],
    category: "cruiser"
  },
  {
    id: 60,
    name: "Sportster S",
    brand: "Harley-Davidson",
    price: 1599000,
    description: "The Harley-Davidson Sportster S is a performance cruiser with a 1250cc Revolution Max V-twin engine, offering modern performance in a classic American package.",
    specs: {
      engine: "1250cc Liquid-Cooled V-Twin",
      power: "121 HP @ 7,500 rpm",
      torque: "125 Nm @ 6,000 rpm",
      weight: "228 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "11.8 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["vivid black", "stone washed white", "midnight crimson"],
    category: "cruiser"
  },
  {
    id: 61,
    name: "Fat Bob 114",
    brand: "Harley-Davidson",
    price: 1799000,
    description: "The Harley-Davidson Fat Bob 114 is a power cruiser with a 1868cc Milwaukee-Eight V-twin engine, featuring aggressive styling and performance-oriented components.",
    specs: {
      engine: "1868cc Air-Cooled V-Twin",
      power: "94 HP @ 5,020 rpm",
      torque: "155 Nm @ 3,500 rpm",
      weight: "306 kg",
      topSpeed: "180 km/h",
      fuelCapacity: "13.6 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["vivid black", "deadwood green", "gunship gray"],
    category: "cruiser"
  },
  {
    id: 62,
    name: "Chief Dark Horse",
    brand: "Indian",
    price: 1899000,
    description: "The Indian Chief Dark Horse is a modern cruiser with a 1890cc Thunderstroke V-twin engine, featuring blacked-out styling and premium technology.",
    specs: {
      engine: "1890cc Air-Cooled V-Twin",
      power: "79 HP @ 4,800 rpm",
      torque: "162 Nm @ 2,900 rpm",
      weight: "304 kg",
      topSpeed: "195 km/h",
      fuelCapacity: "15.1 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black smoke", "nara bronze", "stealth gray"],
    category: "cruiser"
  },
  {
    id: 63,
    name: "Classic 350",
    brand: "Royal Enfield",
    price: 189000,
    description: "The Royal Enfield Classic 350 is a retro-styled motorcycle with a 349cc single-cylinder engine, known for its vintage appeal and accessible performance.",
    specs: {
      engine: "349cc Air/Oil-Cooled Single-Cylinder",
      power: "20.2 HP @ 6,100 rpm",
      torque: "27 Nm @ 4,000 rpm",
      weight: "195 kg",
      topSpeed: "120 km/h",
      fuelCapacity: "13 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["chrome bronze", "dark stealth black", "signals marsh grey"],
    category: "classic"
  },
  {
    id: 64,
    name: "Continental GT 650",
    brand: "Royal Enfield",
    price: 299000,
    description: "The Royal Enfield Continental GT 650 is a café racer with a 648cc parallel-twin engine, featuring classic styling with modern reliability.",
    specs: {
      engine: "648cc Air/Oil-Cooled Parallel-Twin",
      power: "47 HP @ 7,150 rpm",
      torque: "52 Nm @ 5,250 rpm",
      weight: "198 kg",
      topSpeed: "170 km/h",
      fuelCapacity: "12.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["mr clean", "ventura blue", "british racing green"],
    category: "classic"
  },
  {
    id: 65,
    name: "Street Scrambler",
    brand: "Triumph",
    price: 999000,
    description: "The Triumph Street Scrambler is a modern classic with a 900cc parallel-twin engine, combining retro scrambler styling with modern capability.",
    specs: {
      engine: "900cc Liquid-Cooled Parallel-Twin",
      power: "64 HP @ 7,250 rpm",
      torque: "80 Nm @ 3,250 rpm",
      weight: "223 kg",
      topSpeed: "180 km/h",
      fuelCapacity: "12 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["jet black", "urban gray", "matte khaki"],
    category: "classic"
  },
  {
    id: 66,
    name: "Thruxton RS",
    brand: "Triumph",
    price: 1399000,
    description: "The Triumph Thruxton RS is a premium café racer with a 1200cc parallel-twin engine, featuring high-end components and vintage racing-inspired styling.",
    specs: {
      engine: "1200cc Liquid-Cooled Parallel-Twin",
      power: "104 HP @ 7,500 rpm",
      torque: "112 Nm @ 4,250 rpm",
      weight: "197 kg",
      topSpeed: "220 km/h",
      fuelCapacity: "14.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["jet black", "competition green", "silver"],
    category: "classic"
  },
  {
    id: 67,
    name: "W800",
    brand: "Kawasaki",
    price: 779000,
    description: "The Kawasaki W800 is a retro-styled motorcycle with a 773cc air-cooled parallel-twin engine, paying homage to Kawasaki's W series from the 1960s.",
    specs: {
      engine: "773cc Air-Cooled Parallel-Twin",
      power: "47 HP @ 6,500 rpm",
      torque: "62.9 Nm @ 4,800 rpm",
      weight: "226 kg",
      topSpeed: "170 km/h",
      fuelCapacity: "15 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["candy cardinal red", "metallic dark green", "black"],
    category: "classic"
  },
  {
    id: 68,
    name: "CB350 H'ness",
    brand: "Honda",
    price: 189000,
    description: "The Honda CB350 H'ness is a modern classic with a 348.36cc single-cylinder engine, combining retro design with modern technology.",
    specs: {
      engine: "348.36cc Air-Cooled Single-Cylinder",
      power: "20.8 HP @ 5,500 rpm",
      torque: "30 Nm @ 3,000 rpm",
      weight: "181 kg",
      topSpeed: "130 km/h",
      fuelCapacity: "15 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["pearl night star black", "athletic blue metallic", "precious red metallic"],
    category: "classic"
  },
  {
    id: 69,
    name: "XSR155",
    brand: "Yamaha",
    price: 149000,
    description: "The Yamaha XSR155 is a small-displacement neo-retro motorcycle with a 155cc single-cylinder engine, offering vintage styling in an accessible package.",
    specs: {
      engine: "155cc Liquid-Cooled Single-Cylinder",
      power: "19 HP @ 10,000 rpm",
      torque: "14.7 Nm @ 8,500 rpm",
      weight: "134 kg",
      topSpeed: "135 km/h",
      fuelCapacity: "10.4 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["matte black", "silver", "racing blue"],
    category: "classic"
  },
  {
    id: 70,
    name: "Himalayan",
    brand: "Royal Enfield",
    price: 219000,
    description: "The Royal Enfield Himalayan is an adventure motorcycle with a 411cc single-cylinder engine, designed for versatile use across varied terrains.",
    specs: {
      engine: "411cc Air-Cooled Single-Cylinder",
      power: "24.3 HP @ 6,500 rpm",
      torque: "32 Nm @ 4,500 rpm",
      weight: "199 kg",
      topSpeed: "130 km/h",
      fuelCapacity: "15 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611241443322-78b19f844c1e?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["gravel gray", "pine green", "granite black"],
    category: "adventure"
  }
];

export const categories = [
  { id: "all", name: "All Bikes" },
  { id: "sport", name: "Sport Bikes" },
  { id: "naked", name: "Naked Bikes" },
  { id: "adventure", name: "Adventure Bikes" },
  { id: "cruiser", name: "Cruisers" },
  { id: "touring", name: "Touring Bikes" },
  { id: "classic", name: "Classic Bikes" }
];

export const brands = [
  { id: "all", name: "All Brands" },
  { id: "kawasaki", name: "Kawasaki" },
  { id: "suzuki", name: "Suzuki" },
  { id: "yamaha", name: "Yamaha" },
  { id: "honda", name: "Honda" },
  { id: "ducati", name: "Ducati" },
  { id: "bmw", name: "BMW" },
  { id: "aprilia", name: "Aprilia" },
  { id: "ktm", name: "KTM" },
  { id: "triumph", name: "Triumph" },
  { id: "royal enfield", name: "Royal Enfield" },
  { id: "harley-davidson", name: "Harley-Davidson" },
  { id: "indian", name: "Indian" }
];

export const formatIndianPrice = (price: number): string => {
  // Convert to string and split into array of characters
  const str = price.toString();
  const arr = str.split("");
  
  // Start from right, add commas after every 3 digits for the first group
  // and after every 2 digits for subsequent groups
  let result = "";
  let count = 0;
  
  for (let i = arr.length - 1; i >= 0; i--) {
    result = arr[i] + result;
    count++;
    
    if (i !== 0) { // don't add comma if it's the first digit
      if (count === 3 && arr.length - count > 0) {
        result = "," + result;
        count = 0;
      } else if (count === 2 && arr.length - count > 3) {
        result = "," + result;
        count = 0;
      }
    }
  }
  
  return "₹ " + result;
};
