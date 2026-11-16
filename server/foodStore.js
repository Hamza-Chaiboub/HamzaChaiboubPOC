// store food data in memory while the server is running
class FoodStore {
  constructor() {
    this.foods = [
      { id: 1, name: "Pizza", price: 12.99 },
      { id: 2, name: "Burger", price: 8.99 },
      { id: 3, name: "Salad", price: 6.49 },
      { id: 4, name: "Pasta", price: 10.99 },
      { id: 5, name: "Soup", price: 4.99 }
    ];
  }

  // return all food items
  getAll() {
    return this.foods;
  }
}

// export one shared instance for the application to use
module.exports = new FoodStore();