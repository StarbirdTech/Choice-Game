function endScreen() {
  this.enter = function() {
    background('#424549');
    textSize(75);
    textAlign(CENTER);
    fill('#EF2E72');
    text("End Screen", width / 2, height/2);
    /*httpPost('https://sheet2api.com/v1/OL0isnynQyCu/test/Sheet1', 'json',
    {
      "Level 1": lv1,
      "Level 2": lv2,
      "Level 3": lv3,
      "Level 4": lv4
    });*/
  }
}