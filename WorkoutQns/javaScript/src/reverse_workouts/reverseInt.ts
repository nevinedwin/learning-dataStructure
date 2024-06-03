


function reverseInt(int: number): number {

    const limit: number = 2 ** 32;

    let reverse: number = 0;

    while (int != 0) {

        const lastPlace: number = int % 10;
        int = Math.floor(int / 10);

        if (reverse > (limit - lastPlace) / 10) {
            console.log(`Limit is reached`);
            return 0;
        };

        reverse = lastPlace + reverse * 10;

    }
    console.log(`reverse: ${reverse}`);
    return reverse;
}

reverseInt(234);
reverseInt(234444444444444444444444444444444444444444444444444444444);
reverseInt(1234567890);