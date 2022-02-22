alert('Bienvenido al sistema de asistencia. El programa registrara la asistencia de los alumnos durante 10 dias. El Programa dira si el alumno aprueba si tiene el 50% de asistencia')
let cantidad = prompt("cuantos alumnos son? ");
let alumnosTotales =[];

for(i=0;i<cantidad;i++){
    alumnosTotales[i] = [prompt("Nombre del alumno "+ (i+1)),0];
}
const tomarAsistencia = (nombre, p )=>{
    let presente = prompt(`para tomar asistencia escribe P para presente y A para ausencia
    esta ${nombre} Presente?`);
    if(presente == "p"|| presente =="P"){
        alumnosTotales[p][1]++;
    }
}

for (i=0;i<10;i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
        alert(`actualmente los alumnos llevan ${alumnosTotales}`)
    }
}

for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    Presentes: ${alumnosTotales [alumno][1]} <br>
    Ausencias: ${10-parseInt(alumnosTotales [alumno][1])}`;
    if(10 - alumnosTotales [alumno][1] >=5){
        resultado += "<b style= 'color:red'> Repobado por inasistencias </b> <br> <br>"
    }
    else{
        resultado += "<br><br>"
    }
    document.write(resultado);
};