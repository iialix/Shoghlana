var errorusername=document.getElementById('Errorusername');
var errorpassword=document.getElementById('Errorpassword');
var textusername=document.getElementById('textusername');
var textpassword=document.getElementById('textpassword');
var form=document.getElementById('form');
form.addEventListener('submit',function(event){
    let erroruser=[];
    let error2=[];
    if(textusername==null||textusername.value==='')
    {
        erroruser.push("The username is requird");
    }
    let k=true;
    let numbers=0;
    for(let i=0;i<textpassword.value.length;i++)
    {
        if(textpassword.value[i]=='!'||textpassword.value[i]=='@'||textpassword.value[i]=='#'||textpassword.value[i]=='$'||textpassword.value[i]=='%'||textpassword.value[i]=='^'||textpassword.value[i]=='&'||textpassword.value[i]=='*'||textpassword.value[i]=='('||textpassword.value[i]==')'||textpassword.value[i]=='_')
        {
            k=false;
        }
        if(textpassword.value[i]>='0'&&textpassword.value[i]<="9")
        {
            numbers++;
        }
    }
    if(textpassword==null||textpassword.value==='')
    {
        error2.push('The password is requird');
    }
    else if(textpassword.value.length<6)
    {
        error2.push('The length must greater than 6 letters');
    }
    else if(k==false&&numbers<3)
    {
        error2.push('The password must have special letter and have 3 numbers');
    }
    else if(k==true&&numbers>3)
    {
        error2.push('The password must have special letter');
    }
    else
    {
        error2.push('The password must have at least 3 numbers');
    }
    if(erroruser.length>0)
    {
        event.preventDefault();
        errorusername.innerHTML=erroruser.join('<br>');
    }
    if(error2.length>0)
    {
        event.preventDefault();
        errorpassword.innerHTML=error2.join('<br>');
    }
    event.preventDefault();

})
