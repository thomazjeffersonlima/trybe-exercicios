let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}
 
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + 'anos de idade.')
console.log ('A jogadora ' + player.name +' ' + player.lastName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes')
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata. ')


//praticando com for in.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  // 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
  for (let nome in names) {
      console.log('Olá ' + names[nome])
  }

  //2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
      console.log(key, car[key])
  }

