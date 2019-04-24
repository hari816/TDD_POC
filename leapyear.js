module.exports=function leapyear(year){
  // if(typeof(year) === Number)return true;
 // console.log(typeof(year))
   if(Number.isInteger(year)){ 
   if(year %4 ===0)return true;
   if(year%100 === 0)return false;
   if(year%400 === 0)return true;
   return false;
   }
   else
   throw 'Not a number'
}
//const a=leapyear(2000);