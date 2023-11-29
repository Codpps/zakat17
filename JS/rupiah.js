function formatRupiah(input) {
    let nilai = input.value.replace(/[^\d,]/g, '');
    nilai = nilai.replace(/,/g, '.');
    const formattedValue = new Intl.NumberFormat('id-ID', 
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).
    format(nilai);
    input.value = formattedValue.replace('IDR', 'Rp ');
}
