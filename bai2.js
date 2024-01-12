let a = prompt('Nhập vào 1 số:');
if(!isNaN(a)){
    if(a%2==0){
        document.write('a là số chẵn');
    
    }else{
        document.write('a là số lẻ');
    }
}else{
    document.write("Không hợp lệ")
}