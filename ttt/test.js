var obj = {
  beep: {
    a: 'poop',
    b: 'boop'
  },
  boop: {
    a: 'noop',
    b: 'boop'
  }
}

for (var key in obj) {

  for (var prop in obj[key]) {
    console.log(obj[key][prop]);
  }

}
