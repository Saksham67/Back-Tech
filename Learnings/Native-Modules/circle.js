const PI = 3.14;

function area(radius){
    return PI * radius * radius; 
}
function circumference(radius){
    return 2 * PI * radius;
}
module.exports = {
    area, circumference
};