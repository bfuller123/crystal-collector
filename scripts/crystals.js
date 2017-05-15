var crystalFunctions = {
  getCrystalValue: function(){
    return (Math.floor(Math.random() * 12)) + 1;
  },

  getTargetScore: function(){
    return (Math.floor(Math.random()*101))+19;
  }
};

var crystalValues = {
  'crystalOne': crystalFunctions.getCrystalValue(),
  'crystalTwo': crystalFunctions.getCrystalValue(),
  'crystalThree': crystalFunctions.getCrystalValue(),
  'crystalFour': crystalFunctions.getCrystalValue(),
  targetScore: crystalFunctions.getTargetScore(),
  currentScore: 0,
  takeHomePay: 0
}


$(document).ready(function(){
  $('.target_score').html(crystalValues.targetScore);

  $('.crystal').on('click', function(){
    var name = $(this).attr('name');

    crystalValues.currentScore = crystalValues.currentScore + crystalValues[name];
    $('.current_score').html(crystalValues.currentScore);

    if (crystalValues.currentScore == crystalValues.targetScore) {
      $('.alert').html('Great work for the day! I am giving you a bonus.');
      crystalValues.currentScore = crystalValues.currentScore * 1.5;
      crystalValues.takeHomePay = crystalValues.takeHomePay + crystalValues.currentScore;
      $('.take_home_pay').html(crystalValues.takeHomePay);
    }
    else if (crystalValues.currentScore > crystalValues.targetScore) {
      crystalValues['crystalOne'] = crystalValues['crystalTwo'] = crystalValues['crystalThree'] = crystalValues['crystalFour'] = 0;
      $('.alert').html('Cave in! You lose');
    }
  });

});
