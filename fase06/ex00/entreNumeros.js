function entreNumeros(n1,n2){
    var min;
    var max;
    
    if (n1<n2) {
        min = n1
        max = n2
    }
    else {
        min=n2
        max=n1
}
while (min<=max){
    console.log(min)
    min++;
}
}
