var obj = {
    name: "zkf",
    sex: "man",
    age: "28"
}
function defineR (data,key,val) {
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get: function() {
            return val
        },
        set: function(newval) {
            // console.log("调用了set函数");
            if(val === val) {
                return
            }
            val = newval
        }
    })
}

defineR(obj,'name','yyy')

console.log(obj)
console.log(obj.name) // yyy

defineR(obj,'age','yyy99')  // yyy99
console.log(obj.age)

