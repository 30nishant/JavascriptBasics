let meta=function(version,channel,keyField){
        this.version= version;
        this.channel= channel;
        this.keyField= keyField;
    
    Object.defineProperty(meta , 'version', {
        get function() {
            return this.version;
        },
        set function(value) {
            return this.version = value;
        }
    })
    
    Object.defineProperty(meta , 'channel', {
        get function() {
            return this.channel;
        },
        set function(value) {
            return this.channel = value;
        }
    })

    Object.defineProperty(meta , 'keyField', {
        get function() {
            return this.keyField;
        },
        set function(value) {
            return this.keyField = value;
        }
    })
}

let arr=[
    { version:111, channel:'A', keyField:1},
    { version:112, channel:'B', keyField:2},
    { version:113, channel:'C', keyField:3}
];

class getKeyFields{
    getKeyFieldsMethod(JSON)
    {
        let arr11=[];
        for(let i=0;i<JSON.length;i++){
            arr11[i]=arr[i].keyField;
        }
        return arr11;
    }
    
}
let obj=new getKeyFields();
let obj11 =obj.getKeyFieldsMethod(arr);
console.log(obj11);


// meta.version = '111'
// meta.channel= 'A'
// meta.keyField= '1'
// console.log(meta.version)
// console.log(meta.channel)
// console.log(meta.keyField)


