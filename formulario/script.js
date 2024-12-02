document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    alert(`O nome é ${nome}, o email é ${email} e a mensagem é ${mensagem}`);
});
