class validator {
    constructor(){
      this.validations = [

      ]

    }


    validate(form){

        let inputs = form.getElementByTagName('input');
        let inputsArray = [...inputs];
        
    }

}


let form = document.getElementById ("register-form");
let submit = document.getElementById("btn-submit");
    
let validator  = new validator();
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);

});  
 