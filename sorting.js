function sortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const originalArray = [5, 2, 9, 1, 5, 6];
const sortedArray = [...originalArray];
sortDescending(sortedArray);

document.getElementById("originalArray").textContent = originalArray.join(", ");
document.getElementById("sortedArray").textContent = sortedArray.join(", ");

console.log(sortedArray); 
