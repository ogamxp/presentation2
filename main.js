function get1(a) {
    return functio(b) {
        return ()=>{
            return a + b;
        }
    }
}

let get2 = get1(1)
let get3 = get2(2)

console.log(get3());