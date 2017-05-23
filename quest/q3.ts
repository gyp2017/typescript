// function solution(s)
// {
//   var answer = 0;
//     var arr = s.split('');
//     answer = check();

//     function check() {
//         var final = arr.length - 1;
//         for (var i = 0; i < final; i++) {
//             if (arr[i] == arr[i + 1]) {
//                 arr.splice(i, 2);
//                 if (arr.length == 0) {
//                     return 1;
//                 }
//                 else {
//                     check(arr);
//                 }
//             }
//         }
//         return 0;
//     }
    
//   return answer;
// }

function solution(s: string): number {

  let answer = 0;
  let arr: string[] = s.split('');

  answer = check();
  function check(): number {
    let final: number = arr.length - 1;
    for(let i = 0; i < final; i++) {
      if (arr[i] == arr[i + 1]) {
        arr.splice(i, 2);
        console.log(arr);
        console.log(arr.length);
        if (arr.length == 0) {
          return 1;
        }
        else {
          return check();
        }
      }
    }
    return 0;
  }

  return answer;
}

solution('baabaa');
let str: string = '';
for (let i = 0; i < 1000000; i++) {
  str += 'a';
}
solution(str);

