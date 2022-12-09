memberList = `
人員1
人員2
人員3
人員4
人員5
人員6
人員7
人員8
人員9
人員10
人員11
人員12
人員13
人員14
人員16
人員15
人員17
人員18
人員19
人員20
人員21
`

var member = memberList.split('\n').filter(Boolean).map(x=>({name:x}))