function ateZero(num1){
    var primeira = []
    var zero=0
    if (num1>zero){
    while (num1>=zero){
        primeira.push(zero)
       zero++
    }
    return primeira;
    } else{
        while (num1<=zero){
            primeira.push(num1)
            num1++
        }
        return primeira;
    }
}
