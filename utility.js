function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}
  
function sendDiscordMessage(message) {
  httpPost('https://discord.com/api/webhooks/971592413036568597/jG4ly6cLV2x0vLgmltugVaWURDKZg85c6rG-Rfrl_HJlKr-r2y-n0kEPjg7Z-LnEgFE6', 'json', {"content": message,"embeds": null,"attachments": []})
}

function nextLevelButton(allowSkip) {
  let button;
  let isAnswered = false;

  this.create = function() {
    button = createButton(" ", 450, 550);
    if (allowSkip) {
      button.label = "Skip"
    }
    else {
      button.visible = false
      print(button.visible)
    }
  }

  this.clicked = function(dataToSend = null) {
    if (button.isPressed && (isAnswered || allowSkip)) {
      output.push(sm.currentScene + ": " + this.getDataToSend(dataToSend));
      print(output);
      sm.showNextScene();
    }
  }

  this.isAnswered = function() {
    isAnswered = true;
    button.label = "Next";
    button.visible = true;
  }

  this.getDataToSend = function(dataToSend) {
    if (dataToSend == null) {
      if (isAnswered) {return 1}
      else {return 0}
    }
    else {return dataToSend}
  }
}