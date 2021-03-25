//Array

//const listNilai = ['A' , 'B' , 'C']
//console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'muhammad reza aditama',
        npm: '19421032',
        prodi: 'Informatika'
    },
    {
        nama: 'fikri ',
        npm: ' 19421020',
        prodi: 'informatika'
    }
    
]
//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
}