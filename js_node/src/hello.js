const hello = () => ({
    show: true,
    message: "",
    toggle: function(){
        this.show = !this.show
    },
    clearMessage(){
        this.message=''
    },
    friends:["Aaa"],
    friendName:"",
    addFriend(){
        // this.friends.push(this.friendName)
        this.friends.unshift(this.friendName)
        this.friendName =""
    },

})



export default hello