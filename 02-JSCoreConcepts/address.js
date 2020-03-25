title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

// nie stosując formatowania 
console.log(title + " " + name + " " +surname + "\n"
+ "ul. " + street + "\n"
+ zip + " " + city + "\n"
+ country.toUpperCase());


// stosując formatowanie
let stringFormatting = `${title} ${name} ${surname} 
ul. ${street}
${zip} ${city}
${country.toUpperCase()}`;
console.log(stringFormatting);

