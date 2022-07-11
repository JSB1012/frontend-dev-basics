module.exports = {
    PI : 3.14,
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;

        Array.prototype.forEach.call(arguments, function(val){

        });

        Array.from(arguments).forEach(function(e){
            if(e < min) {
                min = e;
            }

        })
        return min;
    }
}