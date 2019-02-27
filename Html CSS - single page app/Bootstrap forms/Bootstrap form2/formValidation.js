function validate() {
    let username=$('#username');
    let email=$('#email');
    let password=$('#password');
    let confirmPassword=$('#confirm-password');
    let companyCheckbox=$('#company');
    let companyNumber=$('#companyNumber');
    let companyInfo=$('#companyInfo');
    let submitBtn=$('#submit');
    let validationDiv=$('#valid');
    let allIsValid=true;

    companyCheckbox.on('change', function(){
        if (companyCheckbox.is(':checked')){
            companyInfo.css('display','block');

        }else {
            companyInfo.css('display','none');
        }
    });
    submitBtn.on('click', function(ev){
        ev.preventDefault();
        vaidateForm()
        validationDiv.css('display', allIsValid?"block" :"none")
        allIsValid=true;
    })
    function vaidateForm() {
        validaateInputWithRegex(username, /^[A-Za-z\d]{3,20}$/g);
        validaateInputWithRegex(email, /^.*?@.*?\..*$/g);
        if(confirmPassword.val()===password.val()){
            validaateInputWithRegex(password, /^\w{5,15}$/g);
            validaateInputWithRegex(confirmPassword, /^\w{5,15}$/g);
        }else {
            password.css('border','1px solid red');
            confirmPassword.css('border', '1px solid red');
            allIsValid=false;
        }
        if(companyCheckbox.is(':checked')){
            validateCompanyInfo()
        }

    }
    function validaateInputWithRegex(input, pattern){
        if(pattern.test(input.val())){
            input.css('border', 'none');
        }else {
            input.css('border', '1px solid red');
            allIsValid=false
        }
    }
    function validateCompanyInfo() {
        let numValue=Number(companyNumber.val());
        if(numValue>=1000 && numValue<=9999){
            companyNumber.css('border', 'none');
        }else {
            companyNumber.css('border', '1px solid red');
            allIsValid=false;
        }
    }
    
}
