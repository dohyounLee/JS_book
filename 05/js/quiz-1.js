const bttn = document.querySelector("#view");
const detail = document.querySelector("#detail");

//contains 함수 이용
// bttn.onclick = () => {
//     if(detail.classList.contains("hidden")){
//         detail.classList.remove("hidden");
//     } else{
//         detail.classList.add("hidden");
//     }
// }

//toggle 함수 이용
bttn.onclick = () => {
    detail.classList.toggle("hidden");
}