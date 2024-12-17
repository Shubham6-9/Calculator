let ans = ""
document.querySelectorAll(".btn").forEach((e) => {
    e.addEventListener('click', ()=>{
        ans += e.innerText;
        document.getElementById("ans").innerText = ans
    })
})
document.querySelectorAll(".opr").forEach((e) => {
    e.addEventListener('click', () => {
        if(ans[ans.length - 1] == '+' || ans[ans.length - 1] == '-' || ans[ans.length - 1] == '*' || ans[ans.length - 1] == '/'){

        }else{
            ans += e.innerText
            document.getElementById("ans").innerText = ans
        }
    })
})
document.getElementById("backspace").addEventListener('click', () => {
    let ans2 = ans.split("")
    ans2[ans2.length - 1] = ""
    ans = ans2.join("")
    document.getElementById("ans").innerText = ans
})
document.getElementById("clear").addEventListener('click', () => {
    ans = ""
    document.getElementById("ans").innerText = ans
})
document.getElementById("eql").addEventListener('click', () => {
    let ans2 = ans.match(/\d+|[+\-*/]/g);       //This sepreates numbers and operators eg. '12+4-6' => '12','+','4','-','6'
    // Above Line is Taken From ChatGPT
    let answer = Number(ans2[0])
    for(i=1 ; i<ans2.length ; i+=2){
        switch(ans2[i]){
            case '+': answer += Number(ans2[i+1])
                break;
            case '-': answer -= Number(ans2[i+1])
                break;
            case '*': answer *= Number(ans2[i+1])
                break;
            case '/': answer /= Number(ans2[i+1])
                break;
        }
    }
    document.getElementById("ans").innerText = answer
})