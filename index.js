function scuberGreetingForFeet(feetDistance){
  if (feetDistance <= 400){
    return "This one is on me!";
  }
  else if (feetDistance > 400 && feetDistance < 2000){
    return "That will be twenty bucks.";

  }
  else if (feetDistance > 2000 && feetDistance < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else (feetDistance > 2500);{
    return "No can do.";
  }
}

function ternaryCheckCity(cityName){
  return cityName === "NYC" ? "Ok, sounds good." : "No go.";

}

const cashTip = "2"
//let repsonse;

function switchOnCharmFromTip(cashTip){
  switch(cashTip){
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}

