/* Ejercicio (6)
Media aritmética (y otros estadísticos)
. 
Realizamos una función que admita n parámetros y calcule su media 
aritmética …..
Objetivo: Familiarizarnos con el uso de 
arguments
para determinar 
el número de parámetros.
Nota: la media aritmética es la suma de los datos dividido 
por el número de valores
 */

 function media (){
    let notas = [3, 5,7,9]
    let total=0

    notas.forEach(element => {
        total += element
    });
    total = total/notas.length
console.log (total)


 }
 
 media ()