let mail=document.querySelector('.mail').value;
    console.log(mail);
function MailValidate()
{
    let AtSign=false;
    let DotSign=false;
    let mail=document.querySelector('.mail').value;
    console.log(mail);
    if (mail!="")
    {
      let mailarr = Array.from(mail);
      console.log(mail);
      console.log(mailarr);
      let AtSignPresent=0;
          for(i=0; i<mailarr.length; i++)
            {
                if(mailarr[i]=="@")
                 {
                AtSignPresent+=1;    
                AtSign = true;
                   if(AtSignPresent>1)
                   {
                    AtSign=false;
                    break;
                   }
                 }
                if(mailarr[i]==" ")
                 {
                 AtSign = false; 
                 break;  
                 } 
                if (AtSignPresent==1)
                 {
                    if(mailarr[i]==".")
                      {
                       if(DotSign != true)
                        DotSign = true
                        else
                        {
                         DotSign=false
                         break;
                        }  
                      }
                  }


            }
     if (AtSign!=true || DotSign!=true)
        {
        alert("Not a Valid mail id")
        }
    }    
      else 
      {
      alert("Mail Id can't be blanks");
      console.log(`error${mail}`);  
      }
}
