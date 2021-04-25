
let initialState = {
    cardsState: {
        cards: [
            { id: 0, pair: 1, name: 'Strawberry', isFlipped: false, isExcluded: false, url: 'https://i.pinimg.com/originals/ed/f9/55/edf9553b8c741b77d30369bf6049b592.jpg', },
            { id: 1, pair: 2, name: 'Simpsons', isFlipped: false, isExcluded: false, url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/4f5c6d43-c629-4b6f-82b2-b3efaef9e0fd/200x300', },
            { id: 2, pair: 3, name: 'Dog', isFlipped: false, isExcluded: false, url: 'https://vetpharma.org/upload/iblock/5fd/5fdb94e26bf4f0209a9e399d9e075bd3.jpg', },
            { id: 3, pair: 4, name: 'Cat', isFlipped: false, isExcluded: false, url: 'https://i.pinimg.com/originals/64/54/ed/6454ed63f5b5887005ffbcd14e58fe21.jpg', },
            { id: 4, pair: 5, name: 'Flowers', isFlipped: false, isExcluded: false, url: 'https://www.plantprod.com/wp-content/uploads/2016/08/crop_bedding-plant-200x300.jpg', },
            { id: 5, pair: 1, name: 'Strawberry', isFlipped: false, isExcluded: false, url: 'https://i.pinimg.com/originals/ed/f9/55/edf9553b8c741b77d30369bf6049b592.jpg', },
            { id: 6, pair: 2, name: 'Simpsons', isFlipped: false, isExcluded: false, url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/4f5c6d43-c629-4b6f-82b2-b3efaef9e0fd/200x300', },
            { id: 7, pair: 3, name: 'Dog', isFlipped: false, isExcluded: false, url: 'https://vetpharma.org/upload/iblock/5fd/5fdb94e26bf4f0209a9e399d9e075bd3.jpg', },
            { id: 8, pair: 4, name: 'Cat', isFlipped: false, isExcluded: false, url: 'https://i.pinimg.com/originals/64/54/ed/6454ed63f5b5887005ffbcd14e58fe21.jpg', },
            { id: 9, pair: 5, name: 'Flowers', isFlipped: false, isExcluded: false, url: 'https://www.plantprod.com/wp-content/uploads/2016/08/crop_bedding-plant-200x300.jpg', },
            // { id: 5, name: 'Girl', isFlipped: false, isExcluded: false, url: 'https://studio.everypixel.com/ru/blog/wp-content/uploads/2021/01/Untitled-Session40158-200x300.jpg', },
            // { id: 6, name: 'Meme', isFlipped: false, isExcluded: false, url: 'https://www.meme-arsenal.com/memes/5c0b92dff640017adda14e6301ab9a3b.jpg', },
            // { id: 7, name: 'Thrones', isFlipped: false, isExcluded: false, url: 'https://mainstagenews.app/wp-content/uploads/2021/02/Internet-Censorship-is-Coming-Meme-200x300-2.jpg', },
            // { id: 8, name: 'Building', isFlipped: false, isExcluded: false, url: 'https://www.turpravda.com/otpimg/3/400x300/00/04/06/13/4061327.jpg', },
            // { id: 9, name: 'Stephen', isFlipped: false, isExcluded: false, url: 'https://s2982.pcdn.co/wp-content/uploads/2016/02/stephen_king-200x300.jpg.optimal.jpg', },
        ],
        count: 0,
    }
}

const shuffle = (arr) => {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

initialState.cardsState.cards = shuffle(initialState.cardsState.cards)

export default initialState;