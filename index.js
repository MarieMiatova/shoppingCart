// создаем корзину
let shoppingCart = {
    items: [],
    total: 0,
  
    // добавляем товар
    addItem: function(name, price, quantity) {
      this.items.push({name, price, quantity});
      this.calculateTotal();
    },
  
    // удаляем товар
    removeItem: function(name) {
      this.items = this.items.filter(item => item.name !== name);
      this.calculateTotal();
    },
  
    // обновляем кол-во товаров
    updateQuantity: function(name, newQuantity) {
      this.items.forEach(item => {
        if (item.name === name) {
          item.quantity = newQuantity;
        }
      });
      this.calculateTotal();
    },
  
    // общая стоимость
    calculateTotal: function() {
      this.total = 0;
      for (let item of this.items) {
        this.total += item.price * item.quantity;
      }
    },
  
    // удаленяем все товары из корзины
    clearCart: function() {
      this.items = [];
      this.total = 0;
    },
  };