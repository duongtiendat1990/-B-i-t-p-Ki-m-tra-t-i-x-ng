str = document.getElementById('word').value;
let result;
function isPalindrome(str) {
    if (str.substr(0,1) !==str.substr(str.length-1,1) && str.length>1) {
        result= 'Your word is not Palindrome';
    } else {
        str = str.substring(1,str.length-1);
        if (str.length>=1){
            return isPalindrome(str);
        } else {
            result = 'Your word is Palindrome'
        }
    }
    document.getElementById('result').innerText = result;
}