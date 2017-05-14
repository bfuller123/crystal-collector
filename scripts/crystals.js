var crystalFunctions = {
  getCrystalValue: function(){
    return (Math.floor(Math.random() * 12)) + 1;
  },

  getTargetScore: function(){
    return (Math.floor(Math.random()*101))+19;
  }
};

var crystalValues = {
  crystalOne: crystalFunctions.getCrystalValue(),
  crystalTwo: crystalFunctions.getCrystalValue(),
  crystalThree: crystalFunctions.getCrystalValue(),
  crystalFour: crystalFunctions.getCrystalValue(),
  targetScore: crystalFunctions.getTargetScore()
}
