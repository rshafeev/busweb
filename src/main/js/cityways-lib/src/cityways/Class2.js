/**
 * @overview Class {@link cityways.Class}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 *
 * @requires cityways.js
 *
 */


/**
 * @class cityways.Class
 * @classdesc Осовной класс, с помощью которого можно сконструировать другой класс. Имеет поддержку 
 * множественного наследования.
 * @description Ограничения:
 * 1) В создаваемом классе должна быть быть объйвлена функция initialize(args), которая будет выступать в роли конструктора
 * 2) В классе не должно быть инициализированных свойств. Инициализацию необходимо производить в конструкторе.
 * @example // Чтобы создать новый класс, необходимо использовать следующий синтаксис:
 *     var MyClass = cityways.Class(prototype);
 * @example // Чтобы создать класс с несколькими родителями, используйте следующий синтаксис:
 *     var MyClass = cityways.Class(Class1, Class2, prototype);
 * @example // Пример правильной инициализации свойств класса:
 *     var MyClass = cityways.Class(function(){
 *
 *         member1 : null, // оставляем свойство неинициализированным
 *
 *         initialize : function(args){
 *             this.member1 = []; // инициализация свойства member1
 *         }
 *     });
 */ 
   cityways.Class = function() {
    var len = arguments.length;
    var P = arguments[0];
    var F = arguments[len-1];

    var C = typeof F.initialize == "function" ?
    F.initialize :
    function(){ P.prototype.initialize.apply(this, arguments); };

    if (len > 1) {
        var newArgs = [C, P].concat(
            Array.prototype.slice.call(arguments).slice(1, len-1), F);
        cityways.inherit.apply(null, newArgs);
    } else {
        C.prototype = F;
    }
  
    return C;
};

