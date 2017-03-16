$(function () {
    console.log('hh');
    // $.post('/data',{"getData": true},function (result) {
    //     console.log(result);
    //     $('#data').html(result);
    // });
    $.ajax({
        type: "post",
        url: "/data",
        data: {"getData": true},
        success: function (result) {
            console.log(result);
            $('#data1').html(result);
        }
    });
    $('#form1').submit(function () {
        $.ajax({
            type: "post",
            url: "/search",
            data: {},
            success: function (result) {
                console.log(result);
                // var jsonObject = JSON.parse(result);
                // console.log(jsonObject);
                $('#data2').html(result);
            }
        });
        return false;
    })


    // $.ajax({
    //     type: "post",
    //     url: "/dbTest",
    //     data: {"name": 'SAP','age':'one year'},
    //     success: function (result) {
    //         console.log('result', result);
    //         $('#data2').html(result[1]);
    //     }
    // });
})
