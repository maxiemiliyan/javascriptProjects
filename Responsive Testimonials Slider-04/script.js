
    const customerImage=document.querySelector('#customer-img')
    const customerName=document.querySelector('#customer-name')
    const customerText=document.querySelector('#customer-text')
    const btn=document.querySelectorAll('.btn')
    let index=0
    const customers=[]


    function Customer(img,name,text) {
        this.img=img
        this.name=name
        this.text=text
    }

    function createCustomer(img,name,text) {
        let Img= `./images/${img}.jpg`
        let customer= new Customer(Img,name,text)

        customers.push(customer)
    }

    createCustomer(0,'Elon Musk',' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat officia id velit ratione quos rem dignissimos corporis alias deleniti laborum.')
    createCustomer(1,'MSD',' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat officia id velit ratione quos rem dignissimos corporis alias deleniti laborum.')
    createCustomer(2,'Kohli',' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat officia id velit ratione quos rem dignissimos corporis alias deleniti laborum.')
    createCustomer(3,'Yuvraj',' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat officia id velit ratione quos rem dignissimos corporis alias deleniti laborum.')
    createCustomer(4,'Tata',' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat officia id velit ratione quos rem dignissimos corporis alias deleniti laborum.')


    btn.forEach(function (button) {
        button.addEventListener('click',function (e) {
                
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index===0) {
                    index=customers.length
                }
                index--
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                
                if (index===customers.length) {
                    index=0
                }
                index++
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
            }
        })
    })