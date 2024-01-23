const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

const btnClick = () => {
    // alert(input.value);
    // sessionStorage.setItem("key1", input.value);
//    localStorage.setItem("key1", input.value);
   localStorage.setItem("key1", 
     JSON.stringify({ name: "harry", surname: "potter"})
   );

};

btn.addEventListener("click", btnClick);
deleteBtn.addEventListener("click", () => {
    //  sessionStorage.removeItem("key1");
    // sessionStorage.clear();
   localStorage.removeItem("key1");
})

// alert(sessionStorage.getItem("key1"));

// if(sessionStorage.getItem("key1")){
//    alert(sessionStorage.getItem("key1"));
// }

if(localStorage.getItem("key1")){
        // alert(localStorage.getItem("key1"));
        console.log(JSON.parse(localStorage.getItem("key1")));
 }