let date = function prinDdate(){
    console.log(new Date().getDate());
    
}
let  month =function printMonth(){
    console.log(new Date().getMonth() + 1);
}
let batch=function getBatchInfo(){

    console.log('uranium,w3d3.the topic for today is note js module system');
}
    module.exports.date=date;
    module.exports.month=month;
    module.exports.batch=batch;
