const search =()=>{
    const productsearch= document.getElementById("product-search").value .toUpperCase()
    const storeitems=document.getElementById("storeitems")
    const product=document.querySelectorAll(".trclass")
    const pname=storeitems.getElementsByTagName("p")

    for (let i = 0; i < pname.length; i++) {
        const match=product[i].getElementsByTagName("p")[0]

        if (match) {
            let textsearch=match.textContent || match.innerHTML

            if (textsearch.toUpperCase().indexOf(productsearch)>-1) {
                product[i].style .display=""
            } else {
                product[i].style .display="none"
            }
        }
        
    }
}

function reset(){
    document.getElementById('product-search').value='';
}