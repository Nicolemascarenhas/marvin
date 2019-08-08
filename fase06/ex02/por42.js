function por42(n1, n2){
    var min,max;
    var multiplo=0;
    if (n1<n2) {
        min = n1
        max = n2
    }
    else {
        min=n2
        max=n1
}
while(min<=max){
    if (min%42===0){
    multiplo++
    }
    if (multiplo==2){
    return min;
}
min++
}
    console.log("Não encontrado")
    return false;
    }

