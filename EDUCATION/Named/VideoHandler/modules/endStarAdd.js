const addStarEnd = (separValue, incomingArrEnd) => {
let result = "";
let element = "";
for (let index = 3; index < incomingArrEnd.length; index++) {
     element =  element + separValue + incomingArrEnd[index];
}
result = element;
return result;
}