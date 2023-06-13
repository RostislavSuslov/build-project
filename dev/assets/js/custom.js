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