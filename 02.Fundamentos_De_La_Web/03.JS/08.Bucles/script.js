// Impares 1-20

for(i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}

//  Múltiplos de 3

for (i=100;i>=0;i--){
    if(i%3==0){
        console.log(i)
    }
}

//  Secuencia

for(i=4;i>-4;i--){
    console.log(i)    
    i = i- 0.5;
}

// Sigma
var sum = 0;
for(i=1;i<=100;i++){
    sum +=i;
}
console.log(sum);

// Factorial
var fac = 1
for(i=1;i<=12;i++){
    fac *=i;
}
console.log(fac)