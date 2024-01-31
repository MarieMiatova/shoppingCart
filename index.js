// шаг 1. создаем корзину
let shoppingCart = {
    items: [],
    total: 0,
  
    // шаг 2. добавляем товар
    addItem: function(name, price, quantity) {
      this.items.push({name, price, quantity});
      this.calculateTotal();
    },
  
    // шаг 3. удаляем товар
    removeItem: function(name) {
      this.items = this.items.filter(item => item.name !== name);
      this.calculateTotal();
    },
  
    // шаг 4. обновляем кол-во товаров
    updateQuantity: function(name, newQuantity) {
      this.items.forEach(item => {
        if (item.name === name) {
          item.quantity = newQuantity;
        }
      });
      this.calculateTotal();
    },
  
    // шаг 5. считаем общую стоимость
    calculateTotal: function() {
      this.total = 0;
      for (let item of this.items) {
        this.total += item.price * item.quantity;
      }
    },
  
    // шаг 6. удаленяем все товары из корзины
    clearCart: function() {
      this.items = [];
      this.total = 0;
    },
  };
