export class User {
    constructor(username,password){
        this.username = username,
        this.password = password,
        this.favourites = [],
        this.history = [],
        this.cart = []
    }
}