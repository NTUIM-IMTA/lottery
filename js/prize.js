//level;name;amount
const prizeList = `
系友獎;手機支架;5
系友獎;磁鐵;3
系友獎;鍵盤清潔刷;2
系友獎;中世紀鐘樓機械模型;1
三等獎;全家壹仟元禮物卡;3
二等獎;小米掃拖機器人;2
一等獎;現金壹萬元;1
`

var prize = {};
prizeList.split('\n').filter(Boolean).map(x=>{
  var [level, name, amount] = x.split(';');
  amount = parseInt(amount);
  if (!(level in prize)){
    prize[level] = [];
  }
  prize[level].push({name: name, amount: amount});
})