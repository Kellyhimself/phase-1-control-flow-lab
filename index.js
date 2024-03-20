function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400){
    return("This one is on me!")
  }else if(ride > 400 && ride < 2000){
    return ('That will be twenty bucks.')
  }
  else if(ride > 2000 && ride < 2500){
    return ('I will gladly take your thirty bucks.')
  }
  else{
    return('No can do.')
  }

}


function ternaryCheckCity(City){
    return City ===  'NYC' ? "Ok, sounds good." : 'No go.';
}
ternaryCheckCity(NYC)

/* describe('switchOnCharmFromTip()', function () {
  it('should return "Thank you so much." if the tip is generous', function () {
    expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
  });

  it('should return "Thank you." if the tip is not as generous', function () {
    expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
  });

  it('should return "Bye." if anything else', function () {
    expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
  });
});
}); */


function switchOnCharmFromTip(tip){
  

  switch(tip){
    case "generous": return ("Thank you so much." )
    break;
    case "not as generous":
      return ('Thank you.')
    break;
    default:
      return ('Bye.')
  }
}