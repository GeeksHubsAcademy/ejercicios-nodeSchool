var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        var that = this;
        setImmediate( ()=>console.log(that.yelp));
    }
};
foot.kick();