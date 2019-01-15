let arr= [
    {
       channel : 'A',
       name : 'shoe'
    },
    {
      channel: 'A',
      name : 'electronics'
    },
    {
      channel : 'B',
      name: 'apparel'
    },
    {
      channel: 'C',
      name: 'electronics'
    }
]
let a = [];
let b = [];
let c = [];
let j=0,k=0,l=0;
function groupObjectsBy(arr,channel){
    for(let i=0;i<arr.length;i++){
        if(arr[i].channel==='A'){
            a[j]=arr[i];
            j++;
        }
        else if(arr[i].channel==='B'){
            b[k]=arr[i];
            k++;
        }
        else {
            c[l]=arr[i];
            l++;
        }
    }
    
    console.log('"A" :');
    sqBracOpen();
    for(let aa=0;aa<j;aa++){
        console.log(a[aa]);
    }
    sqBracClose();

    console.log('"B" :');
    sqBracOpen();
    for(let bb=0;bb<k;bb++){
        console.log( b[bb]);
    }
    sqBracClose();

    console.log('"C" :');
    sqBracOpen();
    for(let cc=0;cc<l;cc++){
        console.log(c[cc]);
    }
    sqBracClose();
    
    function sqBracOpen(){
        console.log('[');
    }
    function sqBracClose(){
        console.log(']');
    }
    

}
groupObjectsBy(arr,'channel');
  