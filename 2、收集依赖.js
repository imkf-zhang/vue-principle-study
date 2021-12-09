var obj = {
    name: "zkf",
    sex: "man",
    age: "28"
}
function defineR (data,key,val) {
    let yilai = []
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get: function() {
            return val
        },
        set: function(newval) {
            if(val === val) {
                return
            }
            val = newval
        }
    })
}