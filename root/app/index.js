const bmi = require("../packages/bmi/bmi");

const cal = () => {return bmi(100,120)}

const condition = () => {  
  if(cal()<=0) return "put right numbers"
  if(cal()<18.5) return "You are under weight";
  if(18.5<=cal() && cal()<=24.9) return "Normal";
  if(25<=cal() && cal()<=29.9) return "over weight";
  if(30<=cal() && cal()<=34.9) return "obesity(class1)";
  if(35<=cal() && cal()<=39.9) return "obesity(class2)";
  else return "extreme obesity";
}

console.log (`Your BMI = ${cal()} your condition is ${condition()}`);
