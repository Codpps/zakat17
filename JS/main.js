
function hitungZakat() {
    let input = document.getElementById("gaji");
    let value = input.value.replace(/[^\d]/g, '');
    let gaji = parseFloat(value);
    let jumlah = gaji * 0.025;
    let infoJS = document.getElementById("info");
    let ketJS = document.getElementById("ket");
    let totalJS = document.getElementById("total");
    let niatJS = document.getElementById("niat");

    if (gaji < 7000000) {
        infoJS.innerText = "ZAKAT YANG HARUS DIBAYAR :";
        ketJS.innerText = "Anda Belum Wajib Membayar Zakat";
        totalJS.innerText = "Anda Bisa INFAQ / Bersedekah";
        niatJS.innerText = "";
    } else {
        infoJS.innerText = "ZAKAT YANG HARUS DIBAYAR :";
        ketJS.innerText = "Anda Wajib Membayar Zakat";
        totalJS.innerText = "Rp " + jumlah.toLocaleString('id-ID');
        niatJS.innerText = `\nﻧَﻮَﻳْﺖُ أَﻥْ أُﺧْﺮِﺝَ ﺯَﻛَﺎﺓَ ﺍﻟْﻔِﻄْﺮِ ﻋَﻦْ ﻧَﻔْسيْ ﻓَﺮْﺿًﺎ ِﻟﻠﻪِ ﺗَﻌَﺎﻟَﻰ\nAku niat mengeluarkan zakat fitrah untuk diriku sendiri fardu karena Allah Ta‘âlâ`;
    }
}