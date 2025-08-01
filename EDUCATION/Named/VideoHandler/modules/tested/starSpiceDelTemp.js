function starSpiceDel(withAstarSp){
let result = withAstarSp;

if (result.charAt(1) === " " || result.charAt(1) === "*"){
    result = result.slice(1);
}

return result;
}
