const menu = (() => {
  function createDishObj(dish, title, description, options = null) {
    return {
      type: 'div', attributes: { class: `${dish}-container` },
      children: [
        { type: 'h3', text: title, attributes: { class: 'dish-title' } },
        { type: 'p', text: description },
        ...(options ? [options] : [])
      ]
    }
  }

  const appetizers = [
    createDishObj('bit-sliders',
      'Bit Sliders',
      'Miniature burgers packed with bite-sized flavor. Customize with toppings from our Boolean Burgers.',
      {
        type: 'ul',
        children: [
          { type: 'li', text: 'Quarter Byte:  2 sliders  (4oz - 1/4 lb)' },
          { type: 'li', text: 'Half Byte:     4 sliders  (8oz - 1/2 lb)' },
          { type: 'li', text: 'Full Byte:     8 sliders  (16oz - 1 lb)' }
        ]
      }
    ),
    createDishObj('lambda-lamb-kebabs',
      'Lambda Lamb Kebabs',
      'Expertly marinated lamb skewers that keep their flavor under wraps. Taste the mystery of this anonymous recipe.'
    ),
    createDishObj('recursive-rolls',
      'Recursive Rolls',
      'A seemingly infinite journey of taste. Each bite leads deeper into a loop of delightful flavors, until your palate base case is fully satisfied.'
    ),
  ]

  const entrees = [
    createDishObj('sides',
      'All Entrees come with two sides of your choice',
      null,
      {
        type: 'ul',
        attributes: { class: 'sides-list'},
        children: [
          {
            type: 'li',
            children: [
              { type: 'span', text: `Potato: `, attributes: { class: 'highlight-green' } },
              { type: 'div', text: `(fries/mashed/baked)`, attributes: { class: 'highlight-yellow' } },
              { type: 'span', text: 'Regular, Sweet Potato, Garlic-Parm' }
            ]
          },
          {
            type: 'li',
            children: [
              { type: 'span', text: `Salad: `, attributes: { class: 'highlight-green' } },
              { type: 'div', text: 'Caesar, Garden, Kitchen Special' }
            ]
          },
          {
            type: 'li',
            children: [
              { type: 'span', text: `Vegetable: `, attributes: { class: 'highlight-green' } },
              { type: 'div', text: 'Broccoli, Asparagus, Corn, Squash, Carrot' }
            ]
          }
        ]
      }
    ),
    createDishObj('encapsulated-beef-wellington',
      'Encapsulated Beef Wellington',
      'A tender filet secured within a crispy layer of puff-pastry. A sophisticated merge of flavors that ensures integrity from start to finish.'
    ),
    createDishObj('boolean-burger',
      'Boolean Burger',
      'Declare your burger preference and build the ultimate stack. Choose True for a prime-rib based patty and False for a vegetarian based patty.',
      {
        type: 'ul',
        attributes: { class: 'burger-list'},
        children: [
          {
            type: 'li',
            children: [
              { type: 'span', text: `Cheese: `, attributes: { class: 'highlight-green' } },
              { type: 'span', text: 'C-Sharp Cheddar, Git Gouda, Python Pepper-Jack' }
            ]
          },
          {
            type: 'li',
            children: [
              { type: 'span', text: `Vegetables: `, attributes: { class: 'highlight-green' } },
              { type: 'span', text: 'Lettuce, Tomato, Onion' }
            ]
          },
          {
            type: 'li',
            children: [
              { type: 'span', text: `Sauce: `, attributes: { class: 'highlight-green' } },
              { type: 'span', text: 'Ketchup, Mustard, House BBQ' }
            ]
          }
        ]
      }
    ),
    createDishObj('cloud-served-salmon',
      'Cloud Served Salmon',
      'Freshly sourced from the digital ocean served atop fluffy white rice.'
      )
  ]

  const desserts = [
    createDishObj('binary-brownies',
      'Binary Brownies',
      'Choose 0 for plain, 1 for chocolate chip.'
      ),
      createDishObj('java-chip-mocha-cake',
        'Java Chip Mocha Cake',
        'A rich coffee-flavored cake with chocolate chips.'  
      )
  ]

  const beverages = [
    createDishObj('beverages',
    null,
    null,
    {type: 'ul', attributes: {class: 'beverage-list'},
     children: [
      {type: 'li', text: 'Ask your server about our menus for artisan and alcoholic beverages', attributes: {class: 'highlight-yellow'}},
      {type: 'li', text: 'Sparkling/Plain Spring Water'},
      {type: 'li', text: 'Pepsi Products'}
      ]})
  ]
  return { appetizers, entrees, desserts, beverages }
})();

export { menu }