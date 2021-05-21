// runtime 84%, memory 47%

var addStrings = function(num1, num2) {
    let total = '';
    let carry = 0;
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    
    while (p1 >= 0 || p2 >= 0 || carry > 0) {
        const sum = carry + (+num1[p1--] || 0) + (+num2[p2--] || 0);
        total = (sum % 10) + total;
        
        carry = Math.trunc(sum / 10);
    }
    
    return total;
};
