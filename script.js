
function clickHandler(){
    var el = $(this).siblings("textarea").val()
    var id = $(this).siblings("textarea").attr("id")
    console.log (id)
    localStorage.setItem(id,el)
}
$("textarea").each(function(){
    var id = $(this).attr("id").split("-")[1]
    var hour = moment().format("HH")
    console.log (hour)
    if (id<hour){
        $(this).addClass("past")    
    }else if (id==hour){
        $(this).addClass("present")
    }else {
        $(this).addClass("future")
    }
})








$("#hour-09").val(localStorage.getItem("hour-09"))
$("#hour-10").val(localStorage.getItem("hour-10"))
$("#hour-11").val(localStorage.getItem("hour-11"))
$("#hour-12").val(localStorage.getItem("hour-12"))
$("#hour-13").val(localStorage.getItem("hour-13"))
$("#hour-14").val(localStorage.getItem("hour-14"))
$("#hour-15").val(localStorage.getItem("hour-15"))
$("#hour-16").val(localStorage.getItem("hour-16"))
$("#hour-17").val(localStorage.getItem("hour-17"))





$(".btn").click(clickHandler)