export const User = (username) => { 
    return { username: username,
             name:'',
             phone: '0800000000', 
             address: {
                contry: 'България',
                manipulacity: '',
                city: '',
                address1: '',
                address2: ''
             },
             favourites: [],
             orderHistory: [],
             cart: []
            }
}
     
