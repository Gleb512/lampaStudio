export function count(array) {
    let total = 0;
    array.forEach(a => {
        if(a.count){
            total = total+a.price*a.count
        }else{
            total = total+a.price
        }
    })
    return total
}

export function changeItemsQuantity(items, id, value) {
    function getNum(val) {
        val = +val || 1
        return val;
    }
    if( items[items.findIndex(el => el._id === id)].count <= 1 && value < 0
        || items[items.findIndex(el => el._id === id)].count === undefined
        && value < 0){
        items.splice(items.indexOf(items[items.findIndex(el => el._id === id)]), 1)
    }else {
        items[items.findIndex(el => el._id === id)].count
            =  getNum(items[items.findIndex(el => el._id === id)].count) + value
    }
    return items
}