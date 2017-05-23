function solution(n)
{
    var answer = 0;
    var list = n.toString().split('');
 
    for (var i in list) {
        answer += parseInt(list[i]);
    }

	return answer;
}
