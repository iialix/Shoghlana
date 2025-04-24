var erroruser=document.getElementById('Erroruser');
var errorpassword=document.getElementById('Errorpassword');
var Errorpasswordconfirm=document.getElementById('Errorpasswordconfirm');
var ErrorEmail=document.getElementById('ErrorEmail');
var username=document.getElementById('username');
var password=document.getElementById('password');
var confirmpassword=document.getElementById('confirmpassword');
var email=document.getElementById('email');
var form=document.getElementById('form');

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

form.addEventListener('submit',function(event){
    let erroruserstring=[];
    if(username==null||username.value==='')
    {
        erroruserstring.push('This field is required');
    }
    else if(username.value.length<8)
    {
        erroruserstring.push('The username must be more than 8 letters');
    }
    else if(username.value.includes(' '))
    {
        erroruserstring.push('The username must has no space');
    }
    else if(containsUppercase(username.value))
    {
        erroruserstring.push('All username letters must be lowercase');
    }
    else
    {

    }
    if(erroruserstring.length>0)
    {
        event.preventDefault();
        erroruser.innerHTML=erroruserstring.join('<br>');
    }


})

let hasNumber = /\d/;

form.addEventListener('submit',function(event){
    let hasspecialletter=false;
    if(password.value.includes('!')||password.value.includes('@')||password.value.includes('#')||password.value.includes('$')||password.value.includes('%')||password.value.includes('^')||password.value.includes('&')||password.value.includes('*')||password.value.includes('(')||password.value.includes(')')||password.value.includes('_'))
    {
        hasspecialletter=true;
    }
    let errorpasswordstring=[];
    if(password==null||password.value==='')
    {
        errorpasswordstring.push('This field is required');
    }
    else if(password.value.length<8)
    {
        errorpasswordstring.push('The password must be more than 6 letters');
    }
    else if(containsUppercase(password.value)==false)
    {
        errorpasswordstring.push('The password must has at least one uppercase letter');
    }
    else if(hasspecialletter==false)
    {
        errorpasswordstring.push('The password must has special letter');
    }
    else if(!hasNumber.test(password.value))
    {
        errorpasswordstring.push('The password must has at least number');
    }
    else
    {

    }
    if(errorpasswordstring.length>0)
    {
        event.preventDefault();
        errorpassword.innerHTML=errorpasswordstring.join('<br>');
    }

})
form.addEventListener('submit',function(event){
    Errorpasswordconfirmstring=[];
    if(password.value!=confirmpassword.value)
    {
        Errorpasswordconfirmstring.push('The password does not match');
    }
    if(Errorpasswordconfirmstring.length>0)
    {
        event.preventDefault();
        Errorpasswordconfirm.innerHTML=Errorpasswordconfirmstring.join('<br>');
    }
})

form.addEventListener('submit',function(event){
    Erroremailstring=[];
    if(email.value.includes(' '))
    {
        Erroremailstring.push('The email must have no space');
    }
    else if(email.value.endsWith('@shoghlana.com')==false)
    {
        Erroremailstring.push('The email must end with @shoghlana.com');
    }
    else
    {

    }
    if(Erroremailstring.length>0)
    {
        event.preventDefault();
        ErrorEmail.innerHTML=Erroremailstring.join('<br>');
    }
})

