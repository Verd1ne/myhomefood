const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const filter = document.querySelector('.filter');
const title = document.querySelector('.title');
const popup = document.querySelector('.popup');
const login = document.querySelector('.login');

const tl = new TimelineMax();

tl.fromTo(
  hero,
  1,
  {height:"0%"},
  {height:"80%", ease: Power2.easeInOut}
)
.fromTo(
  hero,
  1.2, 
  {width:"100%"}, 
  {width:"80%", ease: Power2.easeInOut});

tl.fromTo(
  slider,
  1.5,
  {x: "-100%"},
  {x: "0%", ease: Power2.easeInOut},
  "-=1.2"
)
.fromTo(
  logo,
  0.5, 
  {opacity: 0, x: 30}, 
  {opacity: 1, x: 0, ease: Power2.easeInOut}, 
  "-=0.5")
.fromTo(
  hamburger, 
  0.5, 
  {opacity: 0, x: 30}, 
  {opacity: 1, x: 0, ease: Power2.easeInOut}, 
  "-=0.5")
.fromTo(
  title,
  1,
  {opacity: 0, y: -40},
  {opacity: 1, y: 0, ease: Power2.easeInOut},)
.fromTo(
  filter,
  0.9,
  {opacity: 0, y: -40},
  {opacity: 1, y: 0, ease: Power2.easeInOut},);



var myArray = [
  {'dish':'Grilled Cheese Sandwhich', 'category':'Breakfast', 'ingredients':'Bread Cheese'},
  {'dish':'Homemade Wonton', 'category':'Appetizer', 'ingredients':'Beef, Egg, Flour'},
  {'dish':'Chocolate Pancake', 'category':'Breakfast', 'ingredients':'Chocolate, Flour'},
  {'dish':'French Fries', 'category':'Sides', 'ingredients':'Butter, Potato'},
  {'dish':'Omelet Egg Roll', 'category':'Breakfast', 'ingredients':'Eggs, Milk'},
  {'dish':'Souffle', 'category':'Dessert', 'ingredients':'Butter, Cream, Egg'},
  {'dish':'Mac & Cheese', 'category':'Main Dish', 'ingredients':'Cheese, Macaroni, Milk'},
  {'dish':'Cloud Bread', 'category':'Appetizer', 'ingredients':'Eggs, Tartar, Yogurt'},
  {'dish':'Pigs In A Blanket', 'category':'Sides', 'ingredients':'Cheese, Hot Dog, Puff Pastry'},
  {'dish':'Banana Oat Smoothie', 'category':'Drinks', 'ingredients':'Banana, Milk, Oats'},
  {'dish':'BBQ Chicken Tenders', 'category':'Main Dish', 'ingredients':'BBQ Sauce, Bread Crumbs, Chicken Tenders'},
  {'dish':'Teriyaki Chicken', 'category':'Main Dish', 'ingredients':'Brown Sugar, Chicken Thighs, Soy Sauce'},
  {'dish':'Peanut Butter Cookies', 'category':'Snacks', 'ingredients':'Egg, Peanut Butter, Sugar'},
  {'dish':'Creme Brulee', 'category':'Desert', 'ingredients':'Egg Yolk, Sugar, Vanilla Ice Cream '},
]

$('#search-input').on('keyup', function(){
  var value = $(this).val()
  console.log('Value:', value)
  var data = searchTable(value, myArray)
  buildTable(data)
})

buildTable(myArray)

function searchTable(value, data){
  var filteredData = []

  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase()
    var dish = data[i].dish.toLowerCase()
    var category = data[i].category.toLowerCase()
    var ingredients = data[i].ingredients.toLowerCase()
    

    if (ingredients.includes(value)||dish.includes(value)||category.includes(value)){
      filteredData.push(data[i])
    }
  }

  return filteredData
}
$('th').on('click', function(){
   var column = $(this).data('colname')
   var order = $(this).data('order')
   var text = $(this).html()
   text = text.substring(0, text.length - 1);
   
   if (order == 'desc'){
      myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
      $(this).data("order","asc");
      text += '&#9660'
   }else{
      myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
      $(this).data("order","desc");
      text += '&#9650'
   }

  $(this).html(text)
  buildTable(myArray)
  })

  
function buildTable(data){
  var table = document.getElementById('myTable')
  table.innerHTML = ''
  for (var i = 0; i < data.length; i++){
      var coldish = `dish-${i}`
      var colcategory = `category-${i}`
      var colingredients = `ingredients-${i}`

      var row = `<tr>
                      <td>${data[i].dish}</td>
                      <td>${data[i].category}</td>
                      <td>${data[i].ingredients}</td>
                 </tr>`
      table.innerHTML += row
  }
}