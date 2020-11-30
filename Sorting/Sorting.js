/*
Buatlah sebuah program untuk menampilkan dan menghitung jumlah 
swap yang diperlukan agar sebuah deret angka menjadi berurutan.
Contoh input
4 9 7 5 8 9 3
Contoh output. Jika program dijalankan, output harus sama persis seperti dibawah ini
1. [7,9] -> 4 7 9 5 8 9 3
2. [5,9] -> 4 7 5 9 8 9 3
3. [5,7] -> 4 5 7 9 8 9 3
4. [8,9] -> 4 5 7 8 9 9 3
5. [3,9] -> 4 5 7 8 9 3 9
6. [3,9] -> 4 5 7 8 3 9 9
7. [3,8] -> 4 5 7 3 8 9 9
8. [3,7] -> 4 5 3 7 8 9 9 
9. [3,5] -> 4 3 5 7 8 9 9
10. [3,4] -> 3 4 5 7 8 9 9 

Jumlah swap: 10

*/

const sort = (arr) => {
    let find = [0, 0]
    let jumlah = []
    for(i=0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]) {
            find = [arr[i + 1], arr[i]]
            jumlah.push(find)
            arr[i] = find[0]
            arr[i+1] = find[1]
            i = -1
            console.log(`${jumlah.length}. [${find}] -> ${arr.join().replace(/,/g, ' ')}`)
        }
    }
    console.log(`Jumlah swap: ${jumlah.length}`)
}

const array = [4, 9, 7, 5, 8, 9, 3]

sort(array)