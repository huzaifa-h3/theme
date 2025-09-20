const vowels = new Set(["a","e","i","o","u"]);

function countVow(srt){
    let count = 0;
    for(srt of char){
        if(vowels.has(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVow("JavaScript"));