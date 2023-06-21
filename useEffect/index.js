/**
 * 1.useEffect(callback)
 * - gọi callback mỗi khi component re-render
 * - gọi callback mỗi khi component thêm element vao DOM
 * 2.useEffect(callback,[])
 * -chỉ gọi callback 1 lần sau khi component mounted 
 * 3.useEffect(callback,[deps])
 * -callback sẽ được gọi lại mỗi khi deps thay đổi 
 */

//----------
//1.callback luôn được gọi sau khi component mounted 
//2.cleanup function luôn được gọi trước khi component unmounted
//3.cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

useEffect(()=>{
    //logic

    //cleanup 
    return ()=>{

    }
},[])