document.addEventListener('DOMContentLoaded', () => {
    const totalSocks = document.getElementById('totalSocks');
    const socksString = document.getElementById('socksArray');
    const form = document.getElementById('form');
    const output = document.getElementById('output');
    const outputContainer = document.querySelector('.output-container');
    const resetBtn = document.getElementById('reset-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // console.log('totalSocks: ' + totalSocks.value);
        // console.log('socksString: ' + socksString.value);

        const socksArray = socksString.value.replace(/^\s+|\s+$/gm,'').split(" ");
        // console.log('socksArray: ' + socksArray);

        const socksArrayInt = [];
        socksArray.forEach(sock => {
            if (sock !== '') {
                socksArrayInt.push(parseInt(sock));
            }
        })
        // console.log('socksArrayInt: ' + socksArrayInt);

        const sortedArray = socksArrayInt.sort(function(a, b){return a-b});
        // console.log('sortedArray: ' + sortedArray);

        let totalNumberOfPairs = 0;
        let count = 0;
        output.innerHTML = '';
        for(let i = 0; i < sortedArray.length-1; i++) {
                if (sortedArray[i] === sortedArray[i+1]) {
                    count++;
                    if (i === sortedArray.length-2) {
                        if (count > 0) {
                            // console.log('Number of pairs of ' + sortedArray[i] + ' : ' + Math.floor(((count+1)/2)));
                            output.innerHTML += 'Number of pairs of ' + sortedArray[i] + ' = ' + Math.floor(((count+1)/2)) + '<br/>';
                        }
                        totalNumberOfPairs += Math.floor(((count+1)/2));
                        count = 0;
                    }
                } else {
                    if (count > 0) {
                        // console.log('Number of pairs of ' + sortedArray[i] + ' : ' + Math.floor(((count+1)/2)));
                        output.innerHTML += 'Number of pairs of ' + sortedArray[i] + ' = ' + Math.floor(((count+1)/2)) + '<br/>';
                    }
                    totalNumberOfPairs += Math.floor(((count+1)/2));
                    count = 0;
                }
        }
        // console.log('Total number of pairs ' + totalNumberOfPairs);
        output.innerHTML += '<b>Total number of pairs = ' + totalNumberOfPairs + '</b><br/>';
        outputContainer.style.display = "block";
    });
    
    resetBtn.addEventListener('click', (e) => {
       e.preventDefault();
       
       totalSocks.value = '';
       socksString.value = '';
       outputContainer.style.display = "none";
       output.innerHTML = '';
    });

    
});