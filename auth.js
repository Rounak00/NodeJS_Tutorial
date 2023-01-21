const reg=function(name){
    console.log(`${name} has been registered`);
}

const login=function(name){
    console.log(`${name} has been Logged in`);
}
// module.exports=reg; when there is only one
module.exports={
    reg:reg,
    login:login
}