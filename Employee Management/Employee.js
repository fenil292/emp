$(document).ready(function() {
    let employees=Get_All_Employees();
    employees.forEach((emp) => {
        $("#employee-list").append("<tr><td>"+ emp.emp_id + "</td><td>"+ emp.first_name + "</td><td>"+ emp.email + "</td><td>"+ emp.designation +"</td><td>" + emp.gender +"</td><td><button type='button' class='btn btn-warning'  data-toggle='modal' data-target='#exampleModal' name='btn_edit'>Edit</button></td></tr>");
    });
    $( "#btn_submit" ).click(function() {
        var fname=$('#txtfname').val();
        var lname=$('#txtlname').val();
        var designation=$('#drpdesig').val();
        var gender=$("input[name=rdgender]:checked").val();
        var hobby = [],i=0;
        $("input[name=chkhob]:checked").each(function() {
            hobby[i++]=$(this).val();
        });
        var dob=$("#txtdob").val();
        var email=$("#txtemail").val();
        var phno=$("#txtphno").val();
        var emp_count=employees.length;
        var emp_id=1;
        if(emp_count>0){
            var emp_ids=[];
            for(let i=0;i<employees.length;i++) emp_ids[i]=parseInt(employees[i].emp_id);
            emp_id=Math.max(...emp_ids)+1;
        } 
        var emp={"emp_id":emp_id,"first_name":fname,"last_name":lname,"designation":designation,"gender":gender,"hobby":hobby.toString(),"dob":dob,"email":email,"phno":phno};
        employees.push(emp);
        Add_Employee(employees);
        swal("Success", "Employee Successfully Added...", "success");
        $("#employee-list").append("<tr><td>"+ emp.emp_id + "</td><td>"+ emp.first_name + "</td><td>"+ emp.email + "</td><td>"+ emp.designation +"</td><td>" + emp.gender +"</td></tr>");
        $("#emp_form").trigger('reset');
        $('#exampleModal').modal('toggle');
    });
    $('button[name="btn_edit"]').click(function(){
        alert($(this).parents('tr').eq(1).html());
        
    });
});