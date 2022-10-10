function radioCrystals(array) {

    let targetThickness = array.shift();

    for (let currentTickness of array) {
        console.log(`Processing chunk ${currentTickness} microns`);


        while (targetThickness !== currentTickness) {
            let cuts = 0;

            while (currentTickness / 4 >= targetThickness) {
                currentTickness /= 4;
                cuts++;
            }

            if (cuts > 0) {
                console.log(`Cut x${cuts}`);
                console.log('Transporting and washing');
                currentTickness = Math.floor(currentTickness);
            }

            if (currentTickness === targetThickness) {
                break;
            }

            let laps = 0;

            while (currentTickness * 0.8 >= targetThickness) {
                currentTickness *= 0.8;
                laps++;
            }

            if (laps > 0) {
                console.log(`Lap x${laps}`);
                console.log('Transporting and washing');
                currentTickness = Math.floor(currentTickness);
            }

            if (currentTickness === targetThickness) {
                break;
            }

            let grinds = 0;

            while (currentTickness - 20 >= targetThickness) {
                currentTickness -= 20;
                grinds++;
            }

            if (grinds > 0) {
                console.log(`Grind x${grinds}`);
                console.log('Transporting and washing');
                currentTickness = Math.floor(currentTickness);
            }

            if (currentTickness === targetThickness) {
                break;
            }

            let etchs = 0;

            while (currentTickness - 2 >= targetThickness || currentTickness - 2 >= targetThickness - 1) {
                currentTickness -= 2;
                etchs++;
            }

            if (etchs > 0) {
                console.log(`Etch x${etchs}`);
                console.log('Transporting and washing');
                currentTickness = Math.floor(currentTickness);
            }

            while (currentTickness === targetThickness - 1) {
                currentTickness += 1;
                console.log(`X-ray x1`);
            }

            if (currentTickness === targetThickness) {
                break;
            }

            currentTickness = Math.floor(currentTickness);

        }

        console.log(`Finished crystal ${targetThickness} microns`);

    }
}

radioCrystals([1375, 50000]);