function primeSumUp(num) {
    count=0;
    sum=0;
 for( let i=1;i<=num;i++)
 {
     
      for( let j=1;j<=i;j++)
 {
     if(i % j == 0)
     {
        count++; 
     }
 }
 if( count == 2)
 {
     sum=sum+i;
 }
 else
 {
     
 }
 count=0;
}
console.log(sum);
}
