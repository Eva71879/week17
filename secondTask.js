// Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:
// - создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;

class Transport {
    constructor (type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return {
            type: this.type,
            brand: this.brand,
        }
    }

    getPrice () {
        return this.price
    }
}

console.log(Transport);

// - создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;

class Car extends Transport {
    constructor (type, price, brand, doors, image) {
        super(type, price, brand);
        this.doors = doors;
        this.image = image;
    }
    getDoorsCount() {
        return this.doors;
    }
}

const car1 = new Car ('car', 4300000, 'Audi', 4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg" width="130px" alt="Audi');
const car2 = new Car ('car', 2800000, 'Mercedes-Benz', 4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg" alt="Mers');
console.log(car1, car2);

const carsSection = document.querySelector('.vehicals__container_cars');
carsSection.innerHTML += 
`<div class="border">
<img class="img" src="${car1.image}">
<div>
<p>тип: ${car1.type}</p>
<p>цена: ${car1.price}</p>
<p>марка: ${car1.brand}</p>
<p>количество дверей: ${car1.getDoorsCount()}</p>
</div>
</div>
<div class="border">
<img class="img" src="${car2.image}">
<div>
<p>тип: ${car2.type}</p>
<p>цена: ${car2.price}</p>
<p>марка: ${car2.brand}</p>
<p>количество дверей: ${car2.doors}</p>
</div>
</div>`

// - создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.

class Bike extends Transport {
    constructor (type, price, brand, maxSpeed, image) {
        super (type, price, brand);
        this.maxSpeed = maxSpeed;
        this.image = image;
    }

    getMaxSpeed() {
        return this.maxSpeed
    }
}

const bike1 = new Bike ('bike', 1300000, 'Harley-Davidson', 210, "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg");
const bike2 = new Bike ('bike', 1400000, 'Harley-Davidson', 220, 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png');

const bikesSection = document.querySelector('.vehicals__container_bikes');
bikesSection.innerHTML += 
`<div class="border">
<img class="img" src="${bike1.image}">
<div>
<p>тип: ${bike1.type}</p>
<p>цена: ${bike1.price}</p>
<p>марка: ${bike1.brand}</p>
<p>максимальная скорость: ${bike1.getMaxSpeed()}</p>
</div>
</div>
<div class="border">
<img class="img" src="${bike2.image}">
<div>
<p>тип: ${bike2.type}</p>
<p>цена: ${bike2.price}</p>
<p>марка: ${bike2.brand}</p>
<p>максимальная скорость: ${bike2.getMaxSpeed()}</p>
</div>
</div>`

// Объект, с которым вам предстоит работать:

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];
