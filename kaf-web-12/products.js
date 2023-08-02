let products = [
    {
        "id": "56104-020",
        "medicineName": "Miconazole Nitrate",
        "medicineBrand": "Premier Brands of America Inc.",
        "expiryDate": "14-Aug-2012",
        "unitPrice": 993.01,
        "prescriptionRequired": false,
        "stock": 5
    },
    {
        "id": "0268-1239",
        "medicineName": "CHENOPODIUM ALBUM POLLEN",
        "medicineBrand": "ALK-Abello, Inc.",
        "expiryDate": "24-Jul-2029",
        "unitPrice": 632.22,
        "prescriptionRequired": false,
        "stock": 16
    },
    {
        "id": "17478-741",
        "medicineName": "Vancomycin Hydrochloride",
        "medicineBrand": "Akorn, Inc.",
        "expiryDate": "23-Feb-2015",
        "unitPrice": 814.3,
        "prescriptionRequired": true,
        "stock": 667
    },
    {
        "id": "58118-9931",
        "medicineName": "Neomycin and Polymyxin B Sulfates and Hydrocortisone",
        "medicineBrand": "Clinical Solutions Wholesale",
        "expiryDate": "05-Jun-2027",
        "unitPrice": 717.73,
        "prescriptionRequired": true,
        "stock": 961
    },
    {
        "id": "51345-119",
        "medicineName": "Pretty in Paris Kit",
        "medicineBrand": "Advanced Beauty Systems, Inc.",
        "expiryDate": "16-Jun-2025",
        "unitPrice": 140.15,
        "prescriptionRequired": true,
        "stock": 679
    },
    {
        "id": "43419-714",
        "medicineName": "Sulwhasoo Lumitouch Multi-Base",
        "medicineBrand": "AMOREPACIFIC",
        "expiryDate": "19-Nov-2016",
        "unitPrice": 559.2,
        "prescriptionRequired": false,
        "stock": 11
    },
    {
        "id": "48951-2044",
        "medicineName": "Berberis Oxalis",
        "medicineBrand": "Uriel Pharmacy Inc.",
        "expiryDate": "28-Jul-2013",
        "unitPrice": 299.93,
        "prescriptionRequired": true,
        "stock": 276
    },
    {
        "id": "29500-9077",
        "medicineName": "Personal Care Antibacterial Hand - Raspberry",
        "medicineBrand": "Personal Care Products, LLC",
        "expiryDate": "27-Jun-2027",
        "unitPrice": 233.95,
        "prescriptionRequired": false,
        "stock": 94
    },
    {
        "id": "51655-391",
        "medicineName": "Isoniazid",
        "medicineBrand": "Northwind Pharmaceuticals, LLC",
        "expiryDate": "26-Jul-2017",
        "unitPrice": 222.87,
        "prescriptionRequired": false,
        "stock": 35
    },
    {
        "id": "37000-394",
        "medicineName": "Old Spice High Endurance",
        "medicineBrand": "Procter & Gamble Manufacturing Company",
        "expiryDate": "09-May-2022",
        "unitPrice": 515.53,
        "prescriptionRequired": false,
        "stock": 68
    },
    {
        "id": "50419-252",
        "medicineName": "Adempas",
        "medicineBrand": "Bayer HealthCare Pharmaceuticals Inc.",
        "expiryDate": "31-Aug-2027",
        "unitPrice": 911.3,
        "prescriptionRequired": false,
        "stock": 75
    },
    {
        "id": "0024-0335",
        "medicineName": "Demerol",
        "medicineBrand": "sanofi-aventis U.S. LLC",
        "expiryDate": "12-Sep-2026",
        "unitPrice": 316.76,
        "prescriptionRequired": false,
        "stock": 86
    },
    {
        "id": "50436-4841",
        "medicineName": "CYCLOBENZAPRINE HYROCHLORIDE",
        "medicineBrand": "Unit Dose Services",
        "expiryDate": "23-Aug-2015",
        "unitPrice": 440.16,
        "prescriptionRequired": false,
        "stock": 16
    },
    {
        "id": "51345-055",
        "medicineName": "Bodycology",
        "medicineBrand": "Advanced Beauty Systems, Inc.",
        "expiryDate": "05-Apr-2023",
        "unitPrice": 809.08,
        "prescriptionRequired": false,
        "stock": 47
    },
    {
        "id": "37012-069",
        "medicineName": "Petroleum Skin Protectant",
        "medicineBrand": "Shopko",
        "expiryDate": "13-Jan-2024",
        "unitPrice": 496.31,
        "prescriptionRequired": false,
        "stock": 12
    },
    {
        "id": "61016-0002",
        "medicineName": "Antioxidant Day SPF 15",
        "medicineBrand": "Columbia Cosmetics Manufacturing, Inc.",
        "expiryDate": "03-Aug-2028",
        "unitPrice": 825.55,
        "prescriptionRequired": false,
        "stock": 68
    },
    {
        "id": "50730-4301",
        "medicineName": "Isopropyl alcohol Swabstick Sterile",
        "medicineBrand": "H and P Industries, Inc. dba Triad Group",
        "expiryDate": "09-Jul-2027",
        "unitPrice": 968.25,
        "prescriptionRequired": false,
        "stock": 25
    },
    {
        "id": "49348-788",
        "medicineName": "Sunmark Nicotine",
        "medicineBrand": "McKesson",
        "expiryDate": "14-Jul-2029",
        "unitPrice": 570.67,
        "prescriptionRequired": true,
        "stock": 803
    },
    {
        "id": "48951-3051",
        "medicineName": "Cerebellum Thalamus A Aurum",
        "medicineBrand": "Uriel Pharmacy Inc.",
        "expiryDate": "23-Jan-2013",
        "unitPrice": 79.27,
        "prescriptionRequired": false,
        "stock": 55
    },
    {
        "id": "49999-449",
        "medicineName": "Actos",
        "medicineBrand": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
        "expiryDate": "03-Jun-2028",
        "unitPrice": 853.26,
        "prescriptionRequired": false,
        "stock": 81
    },
    {
        "id": "57520-1032",
        "medicineName": "Hepatatox",
        "medicineBrand": "Apotheca Company",
        "expiryDate": "02-Jul-2016",
        "unitPrice": 961.08,
        "prescriptionRequired": false,
        "stock": 35
    },
    {
        "id": "0113-0437",
        "medicineName": "good sense pain relief pm",
        "medicineBrand": "L Perrigo Company",
        "expiryDate": "19-Nov-2012",
        "unitPrice": 219.57,
        "prescriptionRequired": true,
        "stock": 388
    },
    {
        "id": "64942-0810",
        "medicineName": "Axe",
        "medicineBrand": "Conopco Inc. d/b/a Unilever",
        "expiryDate": "12-Jul-2026",
        "unitPrice": 764.95,
        "prescriptionRequired": false,
        "stock": 20
    },
    {
        "id": "35356-512",
        "medicineName": "Carvedilol",
        "medicineBrand": "Lake Erie Medical DBA Quality Care Products LLC",
        "expiryDate": "25-Jun-2014",
        "unitPrice": 31.82,
        "prescriptionRequired": true,
        "stock": 799
    },
    {
        "id": "61671-004",
        "medicineName": "Face Moisturiser",
        "medicineBrand": "Milk & Co Pty Ltd",
        "expiryDate": "19-Sep-2017",
        "unitPrice": 871.64,
        "prescriptionRequired": true,
        "stock": 535
    },
    {
        "id": "49884-678",
        "medicineName": "Nifedipine",
        "medicineBrand": "Par Pharmaceutical, Inc.",
        "expiryDate": "29-Jun-2021",
        "unitPrice": 7.66,
        "prescriptionRequired": false,
        "stock": 87
    },
    {
        "id": "68084-593",
        "medicineName": "Sucralfate",
        "medicineBrand": "American Health Packaging",
        "expiryDate": "01-Nov-2023",
        "unitPrice": 939.65,
        "prescriptionRequired": true,
        "stock": 670
    },
    {
        "id": "57955-0126",
        "medicineName": "Bio Reset/Jet Lag",
        "medicineBrand": "King Bio Inc.",
        "expiryDate": "14-Dec-2024",
        "unitPrice": 916.97,
        "prescriptionRequired": true,
        "stock": 867
    },
    {
        "id": "42507-083",
        "medicineName": "ibu profen cold and sinus",
        "medicineBrand": "HyVee Inc",
        "expiryDate": "10-Sep-2012",
        "unitPrice": 955.91,
        "prescriptionRequired": false,
        "stock": 105
    },
];

//onload function
const myContent = document.querySelector(".viewclass");

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = products.map((project, index) => {
    console.log("productsproductsproducts",project)
    return `

        <tr class="store-items delivered">
                 <td class="clr-gr">${project.id}</td>
                 <td>${project.medicineName}</td>
                 <td> ${project.medicineBrand}</td>
                <td> ${project.expiryDate}</td>
                <td>${project.unitPrice}</td>
               <td>${project.stock}</td>
            </tr>
    
            `;
  });

  myContent.innerHTML = showInHtml;
  document.getElementById("count").innerHTML=showInHtml.length
});

//onload function


lowstock=(availablestock)=>
{
const myContent = document.querySelector(".viewclass");
const show = products.filter(obj => obj.stock<=availablestock).map((project, index) => {
    return `

        <tr class="store-items delivered">
         <td class="clr-gr">${project.id}</td>
         <td>${project.medicineName}</td>
         <td> ${project.medicineBrand}</td>
        <td> ${project.expiryDate}</td>
        <td>${project.unitPrice}</td>
       <td>${project.stock}</td>
    </tr>

    `;
  });
 myContent.innerHTML = show;

 document.getElementById("count").innerHTML=show.length

}

Expired=()=>
{
const myContent = document.querySelector(".viewclass");
const d = new Date();
let year = d.getFullYear();

const show = products.filter(obj => obj.expiryDate.split('-')[2]<year).map((project, index) => {
    return `

        <tr class="store-items delivered">
         <td class="clr-gr">${project.id}</td>
         <td>${project.medicineName}</td>
         <td> ${project.medicineBrand}</td>
        <td> ${project.expiryDate}</td>
        <td>${project.unitPrice}</td>
       <td>${project.stock}</td>
    </tr>

    `;
  });
 myContent.innerHTML = show;

 document.getElementById("count").innerHTML=show.length

}

AllProduct=()=>
{
  const myContent = document.querySelector(".viewclass");
  const showInHtml = products.map((project, index) => {
    return `

<tr class="store-items delivered">
         <td class="clr-gr">${project.id}</td>
         <td>${project.medicineName}</td>
         <td> ${project.medicineBrand}</td>
        <td> ${project.expiryDate}</td>
        <td>${project.unitPrice}</td>
       <td>${project.stock}</td>
    </tr>

    `;
  });

  myContent.innerHTML = showInHtml;
  document.getElementById("count").innerHTML=showInHtml.length

}
