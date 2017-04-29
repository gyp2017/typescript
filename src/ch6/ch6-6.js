var idolComments = {
    123: ["Still need to clean the Bat computer"],
    456: ["Waiting to hear back from Alfred."]
};
var idol = {
    id: 123,
    name: '나나'
};
var comments = idolComments[idol.id];
idolComments[idol.id] = ["Wow, what a great example!"];
var comments2 = {
    123: ["Still need to clean the Bat computer"],
    456: ["Waiting to hear back from Alfred."]
};
var comment = comments2[idol.id];
