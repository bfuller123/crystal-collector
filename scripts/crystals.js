//show wins and loses


var crystalFunctions = {
  getCrystalValue: function() {
    return (Math.floor(Math.random() * 12)) + 1;
  },

  getTargetScore: function() {
    return (Math.floor(Math.random() * 101)) + 19;
  }
};

var crystalValues = {
  'crystalOne': crystalFunctions.getCrystalValue(),
  'crystalTwo': crystalFunctions.getCrystalValue(),
  'crystalThree': crystalFunctions.getCrystalValue(),
  'crystalFour': crystalFunctions.getCrystalValue(),
  targetScore: crystalFunctions.getTargetScore(),
  currentScore: 0,
  takeHomePay: 0,
  day: 1,
  wins: 0,
  losses: 0,
  gameOver: false,
  nextDay: function() {
    crystalValues.targetScore = crystalFunctions.getTargetScore();
    crystalValues['crystalOne'] = crystalFunctions.getCrystalValue();
    crystalValues['crystalTwo'] = crystalFunctions.getCrystalValue();
    crystalValues['crystalThree'] = crystalFunctions.getCrystalValue();
    crystalValues['crystalFour'] = crystalFunctions.getCrystalValue();
    crystalValues.currentScore = 0;
    crystalValues.day = crystalValues.day + 1;
    crystalValues.wins = crystalValues.wins + 1;
    $('.wins').html(crystalValues.wins);
    $('.target_score').html(crystalValues.targetScore);
    $('.current_score').html(crystalValues.currentScore);
    $('.day').html(crystalValues.day);
    $('.alert').html('');
  },
  reset: function() {
    //due to the way this is being invoked, must use explicit object names rather than this.
    crystalValues.targetScore = crystalFunctions.getTargetScore();
    crystalValues['crystalOne'] = crystalFunctions.getCrystalValue();
    crystalValues['crystalTwo'] = crystalFunctions.getCrystalValue();
    crystalValues['crystalThree'] = crystalFunctions.getCrystalValue();
    crystalValues['crystalFour'] = crystalFunctions.getCrystalValue();
    crystalValues.currentScore = 0;
    crystalValues.day = 1;
    crystalValues.gameOver = false;
    crystalValues.takeHomePay = 0;
    crystalValues.losses++;
    $('.losses').html(crystalValues.losses);
    $('.target_score').html(crystalValues.targetScore);
    $('.current_score').html(crystalValues.currentScore);
    $('.day').html(crystalValues.day);
    $('.alert').html('');
    $('.btn').prop('disabled', false);
  },
  freezeButtons: function() {
    $('.btn').prop('disabled', true);
    setTimeout(crystalValues.reset, 2000);
  }
}


$(document).ready(function() {
  $('.target_score').html(crystalValues.targetScore);
  $('.day').html(crystalValues.day);
  $('.wins').html(crystalValues.wins);
  $('.losses').html(crystalValues.losses);

  $('.crystal').on('click', function() {
    var name = $(this).attr('name');

    crystalValues.currentScore = crystalValues.currentScore + crystalValues[name];
    $('.current_score').html(crystalValues.currentScore);

    if (crystalValues.currentScore == crystalValues.targetScore) {
      $('.alert').html('Great work for the day! I am giving you a bonus.');
      crystalValues.currentScore = crystalValues.currentScore * 1.5;
      crystalValues.takeHomePay = crystalValues.takeHomePay + crystalValues.currentScore;
      $('.take_home_pay').html(crystalValues.takeHomePay);
      setTimeout(crystalValues.nextDay, 2000);
    } else if (crystalValues.currentScore > crystalValues.targetScore) {
      crystalValues.gameOver = true;
      crystalValues['crystalOne'] = crystalValues['crystalTwo'] = crystalValues['crystalThree'] = crystalValues['crystalFour'] = 0;
      $('.alert').html('Cave in!');
      $('.alert').append('<p>Game over!</p>');
    }
    if(crystalValues.gameOver == true) {
      crystalValues.freezeButtons();
    }
  });


});
