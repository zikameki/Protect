document.getElementById('pinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit default

    const correctPin = "king051206petot0821"; // PIN yang benar
    const enteredPin = document.getElementById('pin').value;
    const errorMessage = document.getElementById('error-message');

    if (enteredPin === correctPin) {
        // Redirect ke halaman eksternal jika PIN benar
        window.location.href = "https://zikameki.github.io/gotri/"; // Ganti dengan URL tujuan
    } else {
        // Tampilkan pesan kesalahan jika PIN salah
        errorMessage.style.display = "block";
        
        // Setelah 3 detik, sembunyikan pesan kesalahan
        setTimeout(function() {
            errorMessage.style.display = "none";
            // Reset input field setelah beberapa detik
            document.getElementById('pin').value = "";
        }, 3000); // 3000 milidetik = 3 detik
    }
});
