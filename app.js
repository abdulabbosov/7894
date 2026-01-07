fetch("https://json-api.uz/api/project/fn44-amaliyot/cars").then((res)=> {
   return res.json();
}).then((res)=> {
    ui(res.data);
    
}) 
.catch(()=> {

})
.finally(()=> {

});

function ui(data) {
    const elTemp = document.getElementById("templateCard");
    const elContainer = document.getElementById("container");

    data.forEach(element => {

        const clone = elTemp.cloneNode(true).content;

        clone.querySelector("h2").innerText = element.name ? element.name : "No title";
        clone.querySelector("p").innerText = element.equipment.comfort.join(" ");
        clone.querySelector("img").src = element.image ;



        elContainer.appendChild(clone)
    });
}