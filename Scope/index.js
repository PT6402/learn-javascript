function makeCounter(){
    let counter = 0
    function increase(){
        return ++counter
    }
    return increase
}
const increase1 = makeCounter()
console.log(increase1())
console.log(increase1())
console.log(increase1())
console.log(increase1())


/**
 * 
 * Biến global sẽ bị xóa khi tắt chương trình và khi biến đó có giá trị là null
 * => nên tránh việc khai báo biến global để không lãng phí tài nguyên 
 * 
 * 
 * biến trong khối block và trong hàm : sẽ bị xóa khi thực thi xong  
 * 
 * vì bên ngoài không thể truy cập được biến bên trong hàm nên sau khi thực thi hàm xong sẽ xóa biến 
 * 
 * 
 * nhưng đối với ví dụ trên thì khác: (biến trong hàm được tham chiêú bởi 1 hàm)
 * 
 * vì hàm đã trả về 1 giá trị và lưu ở biến increase1 , 
 * biến này đã nhận được biến nhờ vào hàm và bên ngoài có thể lấy được giá trị bên trong hàm 
 * nên sẽ không xóa biến trong khối block đó 
 * 
 * 
 * tham chiếu là đưa bản gốc 
 * tham trị là đưa bản sao 
 *
 */