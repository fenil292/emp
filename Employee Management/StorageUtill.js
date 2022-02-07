function Add_Employee(Emp)
{
    localStorage.setItem("employees",JSON.stringify(Emp));
}
function Get_All_Employees()
{
    if(localStorage.getItem("employees")==null)
    {
        localStorage.setItem("employees","[]");
    }
    return JSON.parse(localStorage.getItem("employees"));
}