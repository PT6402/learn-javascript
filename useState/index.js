/**
 * 1.ban đầu sẽ chạy từ trên xuống và lấy giá trị khởi tạo
 * 2.khi hàm setState() được gọi thì nó sẽ render lại component và lấy gia trị được set state
 * 
 */

const handleIncrease1 = () =>{
     setCounter(counter+1)
     setCounter(counter+1)
     setCounter(counter+1)
     //sau counter đầu tiên nó sẽ không render vội và tổng nó vẫn render 1 lần 
}
//with callback in setCounter
const handleIncrease2 = () =>{
     setCounter(prevState=>prevState+1)
     //sau khi chạy xong dòng trên lúc này biến couter là state+1 nhưng nó chưa render vội và sẽ chạy tiếp những hàm phía dưới 
     setCounter(prevState=>prevState+1)
     setCounter(prevState=>prevState+1)
    // hàm setCounter sẽ truyền giá trị hiện tại vào biến prevState 
}

//with callback in initialState 
const [counter, setCounter]=useState(()=>{
    return a
})// initialState sẽ không nhận hàm mà nó sẽ nhận giá trị trả về của hàm và chỉ chạy lại 1 lần 


