document.getElementById('pinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit

    const correctPin = "051206"; // PIN yang benar
    const enteredPin = document.getElementById('pin').value;

    if (enteredPin === correctPin) {
        // Redirect ke halaman eksternal jika PIN benar
        window.location.href = "https://zikameki.github.io/gotri/"; // Ganti dengan URL tujuan
    } else {
        // Tampilkan pesan kesalahan jika PIN salah
        document.getElementById('error-message').style.display = "block";
    }
});


