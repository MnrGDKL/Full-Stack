const obj = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  }
  
  function setWord(word) {
    let arr = []
    let str = ''
    for (const i in String(word)) {
      for (const [key, value] of Object.entries(obj)) {
        if (value == +String(word)[i]) arr.push(key)
      }
    }
    str = arr.join('')
    arr = []
    let first = String(word).slice(0, 1)
    let second = String(word).slice(1, 3)
    for (const [key, value] of Object.entries(obj)) {
      if (value == +first || value == +second) arr.push(key)
    }
    str += ' ' + arr.join('')
    arr = []
    let sfirst = String(word).slice(0, 2)
    let ssecond = String(word).slice(2, 3)
    for (const [key, value] of Object.entries(obj)) {
      if (value == +sfirst || value == +ssecond) arr.push(key)
    }
    str += ' ' + arr.join('')
    console.log(str)
  }
  
  setWord(123)