document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {

        var media = (nota1 + nota2 + nota3) / 3;

        alert("A média das notas é: " + media.toFixed(2));

        if (media >= 7) {
            alert("Parabéns! Você foi aprovado!");
        } else {
            alert("Infelizmente, você foi reprovado.");
        }
    } else {
        alert("Por favor, insira notas válidas entre 0 e 10.");
    }
});
