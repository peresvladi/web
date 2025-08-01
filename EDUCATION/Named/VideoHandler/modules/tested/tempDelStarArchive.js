starDelTemp = (withAstar) => {
try{
withAstar.trim(); 
withAstar.slice(1);   
}catch{
withAstar.slice(1);
}finally{
if (withAstar.charAt(1) === "\s"){
withAstar.slice(1);
}
}
return withAstar;
}