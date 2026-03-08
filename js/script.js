

const from = document.getElementById("signUpFrom")

from.addEventListener("submit" , async function(e){

    e.preventDefault();


    const firstName = document.getElementById("firstName").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    try {
        
      const response = await fetch("https://coffeupdate-production.up.railway.app/api/user/create-user" , {

            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                firstName,
                password,
                email 
            })

            


            
        })

        const data = await response.json();

        if(response.ok){
         document.getElementById("message").innerText = "User created successfully";   
        }else{
            document.getElementById("message").innerText = data.message;   
        }





    } catch (error) {
        console.log(error);
        
        
    }

})