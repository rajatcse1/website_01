$(function () {
    $.ajax({
        type:'GET',
        dataType:'json',
        url:'JSON/carousel-data.json',
        success:function (data) {
            var theTemplateScript = $("#carousel-template").html();
            var theTemplate = Handlebars.compile(theTemplateScript);
            $("#carousel").append(theTemplate(data));
            $("#carousel").customCarousel({
            });
        }
    });

    //validation
    //Custom validation
    $.validator.addMethod("notSapient", function (value, element) {
        return !value.contains("sapient.com");
    }, "email of sapient.com not accepted");


    //form validation rules
    $("#contact_form").validate({
        rules:{
            fname_lname:"required",
            password:{
                required:true,
                minlength:6
            },
            password_com:{
                equalTo:'#password',
                required:true
            },
            email:{
                required:true,
                email:true,
                notSapient:true
            },
            website:{
                required:true,
                url:true
            }
        },
        messages:{
            fname_lname:"Please enter your first name and last name",
            password:{
                required:"Please provide a password",
                minlength:"Your password must be at least 6 characters long"
            },
            password_com:{
                required:"Please reenter password",
                equalTo:"Enter correct password"
            },
            email:"Please enter a valid email address",
            website:"Please enter correct website"
        },
        submitHandler:function (form) {
            form.submit();
        }
    });

    //checkbox click event
    $("#business-unit input:checkbox:first").click(function () {
        var isChecked = this.checked;
        $("#business-unit input:checkbox").each(function () {
            this.checked = isChecked;
        });
    });

    //add carousel function
    $("#carousel").customCarousel();
});
