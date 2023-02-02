let main=document.getElementById("#main-div");

let someArray=["red","blue","green"];

main.onClick(()=>{
someArray.map((n,ind)=>(
main.styles.backgroundColor=n
))
})
