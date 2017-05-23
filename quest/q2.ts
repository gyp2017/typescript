function solution(n,a,b)
{
    var answer = 1;
    var final = Math.log2(n);
    
    for (var i = 0; i < final; i++) {
        if (isFight(a, b)) {
            break;
        }
        a = nextNumber(a);
        b = nextNumber(b);
        answer += 1;
    }
    
    return answer;
}

function nextNumber(n) {
    if (n == 1) {
        return 1;
    }
    else if (n % 2 != 0) {
        return (n + 1) / 2;
    }
    else {
        return n / 2;
    }
    return 
}

function isFight(a, b) {
    if (a % 2 != 0) {
        return a + 1 == b; 
    }
    else {
        return a == b + 1;
    }
}
