var gemBoss = {
  calculatePay: function() {
    var payment = Math.floor(crystalValues.currentScore * (Math.random() * 3));
    return payment;
  },
  payEmployee: function() {
    var payment = gemBoss.calculatePay();
    $('.alert').append('<p>Your take home pay for the day is $' + payment + '.</p>');
    crystalValues.takeHomePay = crystalValues.takeHomePay + payment;
    $('.take_home_pay').html(crystalValues.takeHomePay);
  },
  dockingPay: function() {
    crystalValues.currentScore = crystalValues.currentScore - crystalFunctions.getCrystalValue();
    $('.current_score').html(crystalValues.currentScore);
  },
  dockPay: function() {
    $('.alert').html("I guess this is enough...but I'm docking your pay!");
    gemBoss.dockingPay();
    gemBoss.payEmployee();
    crystalValues.nextDay();
  },
  satisfied: function() {
    $('.alert').html("While I'm not thrilled...this works for me.");
    gemBoss.payEmployee();
    crystalValues.nextDay();
  },
  fireYou: function() {
    if (crystalValues.targetScore - crystalValues.currentScore < 3) {
      gemBoss.satisfied();
    } else {
      crystalValues['crystalOne'] = crystalValues['crystalTwo'] = crystalValues['crystalThree'] = crystalValues['crystalFour'] = 0;
      $('.alert').html("You didn't bring me enough crystals. You're Fired!");
      $('.alert').append('<p>Game over!</p>');
    }
  },
  backToWork: function() {
    $('.alert').html("You can't leave the mine yet! Get back to work!");
  },
  randomArrayChoice: function(arr) {
    var randomChoice = Math.floor(Math.random() * arr.length);
    return arr[randomChoice];
  },
  getBossReaction: function() {
    var reaction = gemBoss.randomArrayChoice(reactions);
    if (reaction == 'dockPay') {
      gemBoss.dockPay();
    } else if (reaction == 'satisfied') {
      gemBoss.satisfied();
    } else if (reaction == 'fireYou') {
      gemBoss.fireYou();
    } else {
      gemBoss.backToWork();
    }
  }
};

var reactions = ['dockPay', 'dockPay', 'satisfied', 'satisfied', 'fireYou', 'backToWork'];
