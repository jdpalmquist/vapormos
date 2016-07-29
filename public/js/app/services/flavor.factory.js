angular.module('vapormos')
.factory('flavorFactory', function(){
    function candy_flavors(){
        return [
            'Blue Moon',
            'Butterscotch',
            'Caramel',
            'Caramel Candy',
            'Chocolate',
            'Cinnamon Red Hot',
            'Cotton Candy',
            'Grape',
            'Johnny Apple',
            'Marshmallow',
            'Red Ropes',
            'Skittles',
            'Sweet Tart',
            'Tutti Frutti',
            'White Chocolate'
        ];
    }
    
    function dessert_flavors(){
        return [
            '50/50 Bar',
            'American Pie',
            'Banana Nut Bread',
            'Cheesecake',
            'Cinnamon Danish',
            'Dulce de Leche',
            'Fudge Brownie',
            'Graham Craker',
            'Oatmeal Cookie',
            'Sherbert',
            'Vanilla Soft Serve',
            'Whipped Cream'
        ];
    }
    
    function drink_flavors(){
        return [
            'Amaretto',
            'Caramel Mocha',
            'Champagne',
            'Coffee',
            'Grape Drink',
            'Hillbilly Lightning',
            'Irish Cream',
            'Jamaican Rum',
            'Lemonade',
            'Hawaiian Drink',
            'Raging Bull',
            'Vanilla Bourbon'
        ];
    }
    
    function fruit_flavors(){
        return [
            'Acai Berry',
            'Apricot',
            'Banana',
            'Black Cherry',
            'Blackberry',
            'Blueberry',
            'Blueberry Wild',
            'Cantaloupe',
            'Cherry',
            'Coconut',
            'Cranberry',
            'Dragonfruit',
            'Fruit Basket',
            'Fruit Cocktail',
            'Grape',
            'Green Apple',
            'Guava',
            'Honey Dew',
            'Key Lime',
            'Kiwi',
            'Lemon',
            'Lychee',
            'Mandarin Orange',
            'Mango',
            'Mixed Melon',
            'Nectarine',
            'Orange',
            'Papaya',
            'Passion Fruit',
            'Peach',
            'Pear',
            'Phillipine Mango',
            'Pina Colada',
            'Pineapple',
            'Pomegranate',
            'Raspberry',
            'Strawberry',
            'Watermelon'
        ];
    }
    
    function savory_flavors(){
        return [
            'Bavarian Cream',
            'Banana Cream',
            'Buttered Popcorn',
            'French Vanilla',
            'Kettle Corn',
            'Maple',
            'Peanut Butter',
            'Pecan',
            'Pistachio',
            'Popcorn',
            'Pot O&apos; Gold',
            'Snickerdoodle',
            'Strawberry Cream',
            'Sweet Cream',
            'Toasted Almond',
            'Toasted Marshmallow',
            'Vanilla',
            'Vanilla Bean',
            'Vanilla Cupcake',
            'Vanilla Custard'
        ];
    }
    
    function tobacco_flavors(){
        return [
            '555',
            'Black Cigar',
            'Blended Tobacco',
            'Cherry Cigar',
            'Clove',
            'Cowboy',
            'Cohiba',
            'Cubana',
            'Desert Ship',
            'Djarum',
            'French Pope',
            'Honey Flu Cured',
            'Max Blend',
            'Real Cig',
            'Red Type',
            'Ry4',
            'Tobacco Light',
            'Tropical Tobacco',
            'Wensten'
        ];
    }
    
    function mint_flavors(){
        return [
            'Peppermint',
            'Spearamint',
            'Wintergreen'
        ];
    }

    function all_flavors(){
        var all = [];
        all = all.concat(candy_flavors());
        all = all.concat(dessert_flavors());
        all = all.concat(drink_flavors());
        all = all.concat(fruit_flavors());
        all = all.concat(savory_flavors());
        all = all.concat(tobacco_flavors());
        all = all.concat(mint_flavors());
        //all = all.sort();
        return all;
    }

    function make_dropdown(){
        var candy = candy_flavors(),
            dessert = dessert_flavors(),
            drink = drink_flavors(),
            fruit = fruit_flavors(),
            savory = savory_flavors(),
            tobacco = tobacco_flavors(),
            mint = mint_flavors(),
            h = '',
            temp = null;

            //candy flavors
            temp = candy;
            h += '<optgroup label="Candy Flavors">';
            for(var i = 0; i < temp.length; i++){
                h += '<option value="'+temp[i]+'">'+temp[i]+'</option>';
            }
            h += '</optgroup>';

            //dessert flavors
            temp = dessert;
            h += '<optgroup label="Dessert Flavors">';
            for(var i = 0; i < temp.length; i++){
                h += '<option value="'+temp[i]+'">'+temp[i]+'</option>';
            }
            h += '</optgroup>';

            //drink flavors
            temp = drink;
            h += '<optgroup label="Drink Flavors">';
            for(var i = 0; i < temp.length; i++){
                h += '<option value="'+temp[i]+'">'+temp[i]+'</option>';
            }
            h += '</optgroup>';

            //fruit flavors
            temp = fruit;
            h += '<optgroup label="Fruit Flavors">';
            for(var i = 0; i < temp.length; i++){
                h += '<option value="'+temp[i]+'">'+temp[i]+'</option>';
            }
            h += '</optgroup>';

            //savory flavors
            temp = savory;
            h += '<optgroup label="Savory Flavors">';
            for(var i = 0; i < temp.length; i++){
                h += '<option value="'+temp[i]+'">'+temp[i]+'</option>';
            }
            h += '</optgroup>';

            //tobacco flavors
            temp = tobacco;
            h += '<optgroup label="Tobacco Flavors">';
            for(var i = 0; i < temp.length; i++){
                h += '<option value="'+temp[i]+'">'+temp[i]+'</option>';
            }
            h += '</optgroup>';

            //mint flavors
            temp = mint;
            h += '<optgroup label="Mint Flavors">';
            for(var i = 0; i < temp.length; i++){
                h += '<option value="'+temp[i]+'">'+temp[i]+'</option>';
            }
            h += '</optgroup>';

            return h;
    }
    
    return {
        candy_flavors: candy_flavors,
        dessert_flavors: dessert_flavors,
        drink_flavors: drink_flavors,
        fruit_flavors: fruit_flavors,
        savory_flavors: savory_flavors,
        tobacco_flavors: tobacco_flavors,
        mint_flavors: mint_flavors,
        all_flavors: all_flavors,
        make_dropdown: make_dropdown
    };
});