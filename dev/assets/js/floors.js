const flatArray = [{
        id: 1,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "82.3 м.кв.",
        price: "700$",
        priceTotal: "52500$",
        flatNumber:  1,
        status: "booking",
        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },

    {
        id: 2,
        house: "2",
        floor: "1",
        rooms: "2",
        square: "60,7 м.кв.",
        price: "700$",
        priceTotal: "42000$",
        flatNumber: 2,
        status: "sold",

        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },
    {
        id: 3,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "60,7 м.кв.",
        price: "700$",
        priceTotal: "42000$",
        flatNumber: 3,
        status: "action",
        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },
    {
        id: 4,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "82 м.кв.",
        price: "700$",
        priceTotal: "52500$",
        flatNumber: 4,
        status: "booking",

        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },

    {
        id: 5,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "79.7 м.кв.",
        price: "700$",
        priceTotal: "55790$",
        flatNumber: 5,
        status: "booking",

        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },
    {
        id: 6,
        house: "2",
        floor: "1",
        rooms: "1",
        square: "39.2 м.кв.",
        price: "700$",
        priceTotal: "27440$",
        flatNumber: 6,
        status: "free",

        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },
    {
        id: 7,
        house: "2",
        floor: "1",
        rooms: "1",
        square: "40.0 м.кв.",
        price: "700$",
        priceTotal: "29400$",
        flatNumber: 7,
        status: "booking",

        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },
    {
        id: 8,
        house: "2",
        floor: "1",
        rooms: "1",
        square: "39.2 м.кв.",
        price: "700$",
        priceTotal: "27440$",
        flatNumber: 8,
        status: "booking",

        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },
    {
        id: 9,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "79.3 м.кв.",
        price: "700$",
        priceTotal: "55510$",
        flatNumber: 9,
        status: "action",

        description: [{
                text: "Бутишів провулок, 17, Київ, 01001",
            },
            {
                text: "By using modal, you can overlay the top layer inside",
            },
            {
                text: "Error: Unexpected identifier 'title'",
            },
            {
                text: 'Приложению "Zoom" нужны',
            },
        ]
    },
]




window.addEventListener('load', function() {

    document.querySelector('.floor-plan-page') ? installFloorPlan() : null;

    function installFloorPlan() {
        const flatInfo = document.querySelector("#flat-info")
        const flatGroup = document.querySelectorAll('.flat')

        function deletteActiveClass() {
            flatGroup.forEach(active => {
                active.classList.remove('active')
            })
        }
        
        const flatObj = [{
            id: 1,
            house: "22",
            floor: "1",
            rooms: "3",
            square: "82.3 м.кв.",
            price: "700$",
            priceTotal: "52500$",
            flatNumber:  1,
            status: "booking",
            description: [{
                    text: "Бутишів провулок, 17, Київ, 01001",
                },
                {
                    text: "By using modal, you can overlay the top layer inside",
                },
                {
                    text: "Error: Unexpected identifier 'title'",
                },
                {
                    text: 'Приложению "Zoom" нужны',
                },
            ]
        },]

     
        const renderInfo = (flatInfoTemplate) => {
            const flatInformation = flatInfoTemplate.map(item =>{
                 return (`
                    <div class="flat-item flat-info__house">
                        Номер дома : <b id="house-number">${item.house}</b>
                    </div>
                    <div class="flat-item flat-item--floor">
                       Этаж: <b id="floor-number">${item.floor}</b>  
                    </div>
                    <div class="flat-item flat-item--rooms">
                       Кол-во комнат: <b id="rooms-quantity">${item.rooms}</b>
                    </div>
                    <div class="flat-item flat-item--square">
                      Площадб квартиры: <b id="flat-square">${item.square}</b> 
                    </div>
                    <div class="flat-item flat-item--price">
                        Цена за м²: <b id="price-meter">${item.price}</b>
                    </div>
                    <div class="flat-item flat-item--price-total">
                        Цена за квартиру: <b id="price-total">${item.priceTotal}</b>
                    </div>
                    <div class="flat-item flat-item--number">
                        Номер квартиры: <b id="flat-number">${item.flatNumber}</b>
                    </div>
                    <div class="flat-item flat-item--status">
                        Статус квартиры: <b id="flat-status">${item.status}</b>
                    </div> 
                `)
            }).join("")

            flatInfo.innerHTML = flatInformation
        }
        renderInfo(flatObj)


        flatGroup.forEach(flat => {
            flat.addEventListener("click", () => {

                deletteActiveClass()
                flat.classList.add('active')

                let thisFlat = flat.getAttribute('data-number');
                
                let flatNumber = flatArray.filter(obj => obj.flatNumber.toString() === thisFlat);
    
 
                renderInfo(flatNumber)
            })
        })




    }
})