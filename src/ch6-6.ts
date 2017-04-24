interface Idol {
  id: number,
  name: string
}

let idolComments = {
  123: [ "Still need to clean the Bat computer" ],
  456: [ "Waiting to hear back from Alfred." ]
}

let idol: Idol = {
  id: 123,
  name: '나나'
}

let comments = idolComments[idol.id];
idolComments[idol.id] = [ "Wow, what a great example!" ];

interface IIdolCommentsLookup {
  [idolId: number]: string[];
}

let comments2: IIdolCommentsLookup = {
  123: [ "Still need to clean the Bat computer" ],
  456: [ "Waiting to hear back from Alfred." ]
}

let comment = comments2[idol.id];
