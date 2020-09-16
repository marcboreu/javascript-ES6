// Exercici 6
// Reemplaça en el següent bloc de codi la promesa per aync/await:


// function b() {
//    // ...
// }
// funtion a() {
//    b().then() = > {
//    doMoreWork();
//    }
// }

async function a() {
        try {
            const b = await b();
            const bb = await doMoreWork(b);
            // throw new Error('Some problem: test mode');  Crear error a mode de test
            console.log("Completed");
        }
        catch(error) {
            console.log(error);
        }
}