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
    ans = eval(ans)
    document.getElementById("ans").innerText = ans
})