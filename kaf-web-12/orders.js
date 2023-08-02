    

const orders = [

    {
        "id": "714-69-5617",
        "customerName": "Sally Whebell",
        "order": "07-Aug-2020 2:29 AM",
        "amount": 634.2,
        "Status": "Delivered"
    },
    {
        "id": "752-42-3160",
        "customerName": "Emmery Grizard",
        "order": "11-Mar-2020 3:14 PM",
        "amount": 518.23,
        "Status": "New"
    },
    {
        "id": "671-99-4274",
        "customerName": "Alano Carnaman",
        "order": "09-Oct-2020 11:41 AM",
        "amount": 400.34,
        "Status": "New"
    },
    {
        "id": "359-13-4724",
        "customerName": "Huey Coombes",
        "order": "16-Nov-2020 6:35 PM",
        "amount": 559.06,
        "Status": "Delivered"
    },
    {
        "id": "302-50-0415",
        "customerName": "Rex Pilsworth",
        "order": "26-Feb-2020 2:02 PM",
        "amount": 347.03,
        "Status": "Delivered"
    },
    {
        "id": "332-24-5988",
        "customerName": "Lou Udale",
        "order": "25-Jun-2020 11:41 PM",
        "amount": 645.82,
        "Status": "InTransit"
    },
    {
        "id": "239-32-6080",
        "customerName": "Penni Blight",
        "order": "30-May-2020 8:15 PM",
        "amount": 472.53,
        "Status": "Packed"
    },
    {
        "id": "579-80-0751",
        "customerName": "Elberta Farress",
        "order": "25-Jun-2020 4:42 PM",
        "amount": 774.63,
        "Status": "InTransit"
    },
    {
        "id": "494-62-5297",
        "customerName": "Danya Regan",
        "order": "27-May-2020 6:33 AM",
        "amount": 785.02,
        "Status": "New"
    },
    {
        "id": "373-65-1146",
        "customerName": "Alexandros Fiddyment",
        "order": "15-Mar-2020 12:42 AM",
        "amount": 461.99,
        "Status": "Packed"
    },
    {
        "id": "649-95-4216",
        "customerName": "Nissy Dalglish",
        "order": "22-Dec-2019 5:08 AM",
        "amount": 252.63,
        "Status": "InTransit"
    },
    ];
    
    //onload function
    const myContent = document.querySelector(".viewclass");
    
    window.addEventListener("DOMContentLoaded", function () {
      const showInHtml = orders.map((project, index) => {
        return `
          <tr class="store-items delivered">
                     <td class="clr-gr">${project.id}</td>
                     <td>${project.customerName}</td>
                     <td> ${project.order.split(' ')[0]}<br><p class="time">${project.order.split(' ')[1]} ${project.order.split(' ')[2]}</p></td>
                     <td class="clr-gr"> ${project.amount}</td>
                     <td> ${project.Status}</td>
                  </tr>
            `;
      });
    
      myContent.innerHTML = showInHtml;
      document.getElementById("count").innerHTML=showInHtml.length
    });
    //onload function
    
    allnewfunction=()=>
    {
      const myContent = document.querySelector(".viewclass");
      const showInHtml = orders.map((project, index) => {
        return `
          <tr class="store-items delivered">
                     <td class="clr-gr">${project.id}</td>
                     <td>${project.customerName}</td>
                     <td> ${project.order.split(' ')[0]}<br><p class="time">${project.order.split(' ')[1]} ${project.order.split(' ')[2]}</p></td>
                     <td class="clr-gr"> ${project.amount}</td>
                     <td> ${project.Status}</td>
                  </tr>
            `;
      });
    
      myContent.innerHTML = showInHtml;
      document.getElementById("count").innerHTML=showInHtml.length
    
    }
    
    myFunction=(status)=>
    {
    const myContent = document.querySelector(".viewclass");
    const show = orders.filter(obj => obj.Status.includes(status.toString())).map((project, index) => {
        return `
          <tr class="store-items delivered">
                     <td class="clr-gr">${project.id}</td>
                     <td>${project.customerName}</td>
                     <td> ${project.order.split(' ')[0]}<br><p class="time">${project.order.split(' ')[1]} ${project.order.split(' ')[2]}</p></td>
                     <td class="clr-gr"> ${project.amount}</td>
                     <td> ${project.Status}</td>
                  </tr>
            `;
      });
     myContent.innerHTML = show;
    
     document.getElementById("count").innerHTML=show.length
    
    }