(this["webpackJsonpshow-case"]=this["webpackJsonpshow-case"]||[]).push([[0],{10:function(e,a,t){e.exports=t(22)},15:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),o=(t(15),t(9)),s=t.n(o),A=t(2);t(7);var i=function(e){var a=Object(A.a)(e.pounceCode).next();return l.a.createElement("div",null,l.a.createElement("code",{className:"stack"},"[",Object(A.b)(a.value.stack),"]"),l.a.createElement("br",null),"is the result of running ",l.a.createElement("br",null),l.a.createElement("code",{className:"prog"},"[",e.pounceCode,"]"))};var u=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,l.a.createElement("img",{src:s.a,alt:"logo"})," Pounce Sampler"),l.a.createElement("p",null,"A catalog of example Pounce programs.")),l.a.createElement("div",{className:"Feature-parent"},l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,"Post-fix"),l.a.createElement("p",null,"Pounce is a post-fix language. Notice that data (nouns) come first followed by verbs. Adding two and two, the nouns are ",l.a.createElement("code",null,"2 2")," followed by ",l.a.createElement("code",null,"+")),l.a.createElement(i,{pounceCode:"2 2 +"})),l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,"Lists"),l.a.createElement("p",null,"Words can be placed in a lists The list is considered a noun. For example ",l.a.createElement("code",null,"cons")," is used to make the a list of 10 and * "),l.a.createElement(i,{pounceCode:"10 [*] cons"}),l.a.createElement("p",null,"A list of words can be invoked Like this:"),l.a.createElement(i,{pounceCode:"5 [10 *] apply"})),l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,"Fibonacci Numbers"),l.a.createElement("p",null,"To make this sequence, first the stack is seeded with ",l.a.createElement("code",null,"0 1"),", then adding more elements is done with ",l.a.createElement("code",null,"dup2")," which duplicates the top two elements of the stack. Adding them together creates the next Fibonacci number. Repeat this n times."),l.a.createElement(i,{pounceCode:"0 1 [dup2 +] 5 times"})),l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,"Compose a New Word"),l.a.createElement("p",null,"To define a new word, two lists are needed: first the word or composition of words in a list and then the name of the new word in a second list. In post-fix style, ",l.a.createElement("code",null,"def")," comes after and adds this new word. "),l.a.createElement(i,{pounceCode:"[2 *] [twice] def 21 twice"})),l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,"Recursive Words"),l.a.createElement("p",null,"Here is a definition of 'factorial' as a composition of words that calls itself. "),l.a.createElement(i,{pounceCode:"[0 = [drop] [dup 1 - [*] dip fac] if-else] [fac] def  1 5 fac"})),l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,l.a.createElement("code",null,"linrec")," for Linear Recursion"),l.a.createElement("p",null,"Without having to compose and name a recursive word, ",l.a.createElement("code",null,"linrec")," does this with four lists."),l.a.createElement(i,{pounceCode:"5 [dup 0 ==] [1 +] [dup 1 -] [*] linrec"})),l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,"Invoke with Names"),l.a.createElement("p",null,"You can invoke a list with a shallow mapping of stack elements to named list elements. This is more convenient than doing lots of stack shuffling to achieve the same result."),l.a.createElement(i,{pounceCode:"3 2 1 [a b c] [a a * b + c c * -] apply-with"})),l.a.createElement("div",{className:"Feature-child"},l.a.createElement("h3",null,"Quicksort"),l.a.createElement("p",null,"Given a list to sort, binary recursion ",l.a.createElement("code",null,"binrec")," is used to process both sub lists made by ",l.a.createElement("code",null,"split<")),l.a.createElement(i,{pounceCode:"[6 3 8 4 5 7 2 9 1] [size 1 <=] [] [uncons split<] [concat] binrec"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){},9:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAYAAAAYwiAhAAATPUlEQVR4Xu2dZ5BVxdPGe00Y0BVFUAtELAPqYlbMATH7yVTmMlSB5Qf5pKiFOWH2g4FUYgCzYkbArChmRS2zYMCIijm7//r1W7PvZffuPWfmzNx7T9FTRYnsnDlzep7t6el+uqdl4cKF7WLNJJBIAi0GsESStWFVAgYwA0JSCRjAkorXBjeAGQaSSsAAllS8NrgBzDCQVAIGsKTitcENYIaBpBIwgCUVrw1uADMMJJWAASypeG1wA5hhIKkEDGBJxWuDG8AMA0klYABLKl4b3ABmGEgqAQNYUvHa4AawyBhob2+XX3/9Vb777jv54osv5LPPPpMFCxboW3r37i39+/eXNdZYQ1ZZZRVZccUVpaWlJfIM8g339ddfy5w5c+SHH36Q3377TR9afvnlpVevXrLJJptI37598w2U0csAFkWM/zcI4Pr777/l008/lbfffluef/55eeaZZ/TvtI033lh23HFH2XrrrWWjjTaStddeW3r06CFLLrlkxFnUHoo5AqgXX3xRJk2aJB999JF8++23Hb8A6667rhx77LGyzTbbKOCK/gIYwCIu7S+//CJohgceeEBmz54tH374oXzzzTfy008/6VtWWmklWW211VQ7ADDAttlmmynQ6tEcuMaOHSuPPfaYzJs3T5jzn3/+qa8H7D179tT5DBs2TEaMGCErrLBCoakZwAqJb9GH2Q7feOMNmTJlimoItp///vtvkU5ohGWWWUb69esnW265peywww6y+eabK+gA4HLLLRdxRv+vWQHX3Llz5eWXX5bx48fLK6+8UvM922+/vYwaNUoGDRpUaLs0gEVcThbvwQcflGnTpskHH3zQBVzuVYBsiSWWkKWXXlo1GdvRnnvuKRtuuKHaZ7EbIGfrvuGGG+SCCy6Q33//Xf+/VuMXYNttt5XDDz9chg4dGjwlA1iw6Lo+CLAmTpwob775pm6NeRrGPqDC9kGTAbYNNthAVl111TyPZ/YBSJ9//rlMnTpVZs6cqXZhntba2qoHkpEjR8rBBx+c55GqfQxgwaLr+iBb45gxY/QE6U5meYZ32qytrU122mkn2XXXXRVkLDLb6VJLLZVnmEX6sCX++++/euAAVFdccYUa9Hkb78XIP/PMM+W4447L+1iXfgawYNF1fXDC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"}},[[10,1,2]]]);
//# sourceMappingURL=main.58f89da9.chunk.js.map