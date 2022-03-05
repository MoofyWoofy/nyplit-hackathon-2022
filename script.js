'use strict';

// https://www.shapedivider.app/ for curves


function init() {
    // console.log('hello')
}
init();

async function GetImage() {
    const url = document.getElementsByName('animal')[0].checked ? 'https://api.thedogapi.com/v1/images/search' : 'https://api.thecatapi.com/v1/images/search';
    const count = document.getElementById('a_count').value;
    const images = [];
    const displayBox = document.querySelector('.display-image');
    displayBox.innerHTML = '<div class="loader"></div>';
    
    const getRequest = async () => {
        
        /**
         * API Attempts
         * https://waifu.pics/  
         * https://shibe.online/
         * https://nekos.best/
         */
        
        const response = await fetch(url);
        const animal = await response.json();
        return animal;
    }

    for (let i = 0; i < count; i++) {
        const animal = await getRequest()
        images.push(
            {
                'url': animal[0].url,
                // 'name': (animal[0].breeds[0].name || 'generic')
            });
    }
    displayBox.innerHTML = images.map(element => `<img src="${element.url}" alt="Image of an animal" srcset="">`).join('');
}


// Well, I blame myself for not checking if CORS was available
// function findAnime() {
//     const animeTagToSearch = []

//     document.getElementsByName('animeTag').forEach(ele => {
//         if (ele.checked) {
//             animeTagToSearch.push(ele);            
//         }
//     })

//     // Get file type
//     const filetype = "gif=" + document.getElementsByName('gif_file')[0].checked || false
    

//     // Fetch JSON from API: https://waifu.pics/docs    |---- https://waifu.im/docs/
//     const getRequest = async () => {
//         const response = await fetch('https://waifu.pics/docs/sfw/waifu');
//         const waifu = await response.json();
//         return waifu;
//     }
//     const waifu = getRequest()
//     console.log(waifu)

//     // console.log(animeTagCheckedbox)
//     /**
//      * document.getElementsByName('animeTag')[2].getAttribute('data-value')
//      */
// }
