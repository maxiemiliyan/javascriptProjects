const search=() =>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("storeitems")
    const product=document.querySelectorAll(".product")
    const pname=storeitems.getElementsByTagName("h2")

    for (var i = 0; i < pname.length; i++) {
        let match=product[i].getElementsByTagName('h2')[0];


        if (match) {
            let textvalue=match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox)> -1) {
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }
}


/*const  search= () =>{
    const searchbox=document.getElementById("product-search").value.toUpperCase()
    const storeitems=document.getElementById("storeitems")
    const product=document.querySelectorAll(".product")
    const pname=storeitems.getElementsByTagName("h2")

    for (let i = 0; i < pname.length; i++) {
        let match=product[i].getElementsByTagName("h2")[0]


        if (match) {
            let textsearch= match.textContent || match.innerHTML

            if (textsearch.toUpperCase().indexOf(searchbox)> -1) {
                product[i].style.display=""
            } else {
                product[i].style.display="none"
            }
        }
        
    }
}*/

