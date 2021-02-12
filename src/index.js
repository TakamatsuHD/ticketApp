import axios from 'axios';


const signInBtn = document.querySelector('#signIn')
const signUpBtn = document.querySelector('#signUp')
const alert = document.querySelector('#centerTextSignIn')

signInBtn.addEventListener('click', e =>{
    alert.innerHTML = "oops the sign in function is not a feature right now"
})

signUpBtn.addEventListener('click', e =>{
    alert.innerHTML = "oops the sign up function is not a feature right now"
})