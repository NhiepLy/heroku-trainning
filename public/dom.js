var arr = [{

    name: 'Loc',
    
    car: [{
    
    name: 'Mer',
    
    price: 30000
    
    }, {
    
    name: 'RR',
    
    price: 100000
    
    }]
    
    }, {
    
    name: 'Tien',
    
    car: [{
    
    name: 'Mer C200',
    
    price: 30000
    
    }, {
    
    name: 'RR 2020',
    
    price: 120000
    
    }]
    
    }, {
    
    name: 'Hiep',
    
    car: [{
    
    name: 'Mer E250',
    
    price: 30000
    
    }, {
    
    name: 'RR 2001',
    
    price: 100000
    
    },
    
    {
    
    name: 'RR 2001',
    
    price: 899999
    
    }]
    
    }]
    console.log(arr);
 //[{…}, {…}, {…}] = arr= Array1
 for( i=0 ; i < arr.length ; i++){
     var item = arr[i]
 //{name: "Loc", car: Array(2)}= item = object(1)
 // item.name = name = Loc ok
 
 var p= ('<p>'+item.name+'</p>') 
 // item.car = Array2 =[{…}, {…}, {…}]=arr2
 var ul = $('<ul></ul>')
 var arr2 = item.car;
    for( var car of arr2){
      //{name: "Mer", price: 30000} = object2
        var li = $(`<li> ${car.name}==== ${car.price}</li   >`)
        ul.append(li)
    }
    $('body').append(p)
    $('body').append(ul)

 }

    
