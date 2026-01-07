fetch("https://json-api.uz/api/project/fn44-amaliyot/cars").then((res)=> {
   return res.json();
}).then((res)=> {
    ui(res.data);
    return res;
})
.finally((res)=> {

});

function ui(data) {
    const elTemp = document.getElementById("templateCard");
    const elContainer = document.getElementById("container");

    data.forEach(element => {

        const clone = elTemp.cloneNode(true).content;

        clone.querySelector("h2").innerText = element.name ? element.name : "No title";
        clone.querySelector("p").innerText = element.year ? element.year : "No data";

        elContainer.appendChild(clone)
    });
}

function loader (bool) {
    const elLoader = document.getElementById("loader");
    const elLoaderTemplate = document.getElementById("templateSkeleton");

    elLoader.innerHTML = null;
   
    if(bool) {
elLoader.innerHTML = null;
        Array.from({length:100}, (_, index) => index).forEach(()=> {

        elLoader.appendChild(elLoaderTemplate.cloneNode(true).content)
        })
    }

    
}
loader(true);   