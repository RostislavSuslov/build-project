const buildItem = document.querySelectorAll('.build')
const buildValue = document.querySelector('#build-value')
const stagesValue = document.querySelector('#stages-value')
const flatsValue = document.querySelector('#flats-value')
const buildDescriptions = document.querySelector('.build-info__descriptions')




buildItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        
        const dataBuildNumber = item.getAttribute('data-build-number');
        const dataStagesNumber = item.getAttribute('data-stages-number');
        const dataFlatsValue = item.getAttribute('data-flats-number');
        const dataBuildDescriptions = item.getAttribute('data-descriptions');
       
        buildValue.innerHTML = dataBuildNumber;
        stagesValue.innerHTML = dataStagesNumber;
        flatsValue.innerHTML = dataFlatsValue;
        buildDescriptions.innerHTML = dataBuildDescriptions; 
    })
})




/*ref*/
const buildLink = document.querySelectorAll('.build-link')

buildLink.forEach(link => {
    console.log(link);

    link.addEventListener('click', function(event){
       
        if (link.classList.contains('sold')) {
            event.preventDefault();
            alert('Дом продано')
        } else {
            null
        }

    })

})



const flat = document.querySelectorAll('.flat');
 

flat.forEach(item => {
    
    if(item.classList.contains('booking')){
        item.querySelector('.status-text').innerHTML =  "Бронь";
    } else if (item.classList.contains('sold')){
        item.querySelector('.status-text').innerHTML =  "Продано";
    } else if (item.classList.contains('action')){
        item.querySelector('.status-text').innerHTML =  "Акция";
    } else {
        item.querySelector('.status-text').innerHTML =  "Свободна";
    }

})




const flatArray = [
    {
        id: 1,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "82.3 м.кв.",
        price: "700$",
        priceTotal: "52500$",  
        title: "Номер квартиры №33",
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
        title: "Номер квартиры №34",
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
        id: 3,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "60,7 м.кв.",
        price: "700$",
        priceTotal: "42000$",  
        title: "Номер квартиры №35",
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
        title: "Номер квартиры №36",
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
        title: "Номер квартиры №37",
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
        title: "Номер квартиры №37",
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
]

flatArray.forEach(object=> {
    console.log(object.title);
})