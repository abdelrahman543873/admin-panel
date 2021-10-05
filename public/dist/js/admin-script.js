

$('document').ready(function(){
   
$.ajaxSetup({
    headers:{
        'Authorization': 'Bearer '+Cookies.get('token')
    },
    statusCode: {
        401: function(data) {
            window.location.replace(DEV_URL+'/login');
        }
    } 
});

 });