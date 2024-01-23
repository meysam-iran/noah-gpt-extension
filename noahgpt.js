
// Made with PenguinBuilder 2.6
// use PenguinBuilder at "https://chickencuber.github.io/PenguinBuilder/"
(function(Scratch) {
  const blocks = [];
  const vars = {};
  const menus = {};

  

  class Extension {
    getInfo() {
      return {
        "id": "noahgpt",
        "name": "noahgpt",
        "color1": "#383838",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
blocks.push({
  opcode: "noahgpt_Block_prompt-noahgpt",
  blockType: Scratch.BlockType.REPORTER,
  text: "prompt [input] to noahgpt",
  arguments: {
      "input": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: `how are you?`
    },

  },
  disableMonitor: false
});
Extension.prototype["noahgpt_Block_prompt-noahgpt"] = function(args, util) {
  const localVars = {};
    return Scratch.fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
	  'Origin': 'https://gptcall.net/chat#id=&contactName=noah-gpt&chatID=%222024-01-22T15%3A48%3A10.329Z%22',
	  'Referer': 'https://gptcall.net/'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: [input] }];
};



  Scratch.extensions.register(new Extension());
})(Scratch)}
