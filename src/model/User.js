export const User = (username) => { 
    return { username: username,
             name:'',
             phone: '0800000000', 
             address: {
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
     
