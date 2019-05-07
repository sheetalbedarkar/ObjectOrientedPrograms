/***********************************************************************************************************/
//  * @Purpose - To create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
//  *            name, weight, price per kg. Get JSON Object in Java or NSDictionary in iOS. Create Inventory 
//  *            Object from JSON. Calculate the value for every Inventory. 
//  * @file    - InventoryManagement.js
//  * @author  - Sheetal Shamkant Bedarkar
//  * @version - 1.0
//  * @since   - 03/05/2019
/*******************************************************************************************************/
//const readline = require("readline-sync");
const utility = require("../ObjectOrientedProgram/Utility/OOPUtil");
const fileStream = require('fs');
try 
{
    var input = fileStream.readFileSync("/home/bridgeit/ObjectOrientedProgram/InventoryManagement.json");
} 
catch (e) 
{
    console.log("File is empty!!!!");
}

/**
* @description :Parse a string as JSON, optionally transform the produced value and its properties,
                and return the value 
*/

const object = JSON.parse(input);
var sum = 0;
var rice = object.Rice;
var wheat = object.Wheat;
var pulses = object.Pulses;
try 
{
    for (var i in rice) 
    {
        var name = rice[i].name;
        var weight = rice[i].weight;
        var price = rice[i].price;
        var total = rice[i].weight * rice[i].price;
        console.log(`The Total of ${rice[i].name} is ${total}`);
        sum = sum + total;
        i = new utility.Rice(name, weight, price);
        console.log(i);
    }
} 
catch (e) 
{
    console.log(e.message);
}
console.log(sum);
console.log();
try 
{
    for (let j in wheat) 
    {
        let name = wheat[j].name;
        let weight = wheat[j].weight;
        let price = wheat[j].price;
        let total = wheat[j].weight * wheat[j].price;
        console.log(`The Total of ${wheat[j].name} is ${total}`);
        sum = sum + total;
        j = new utility.Wheat(name, weight, price);
        console.log(j);
    }
} 
catch (e) 
{
    console.log(e.message);
}
console.log(sum);
console.log();
try 
{
    for (let k in pulses) 
    {
        let name = pulses[k].name;
        let weight = pulses[k].weight;
        let price = pulses[k].weight;
        let total = pulses[k].weight * pulses[k].price;
        console.log(`The Total of ${pulses[k].name} is ${total}`);
        sum = sum + total;
        k = new utility.Pulses(name, weight, price);
        console.log(k);
    }
} 
catch (e) 
{
    console.log(e.message);
}
console.log(sum);
console.log();