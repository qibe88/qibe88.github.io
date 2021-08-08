var links = document.getElementsByClassName('nav-link');

// aksi saat nav-link di-klik
function onClick(event) {
    var target = event.target;
    // looping ke setiap nav-link
    // untuk menghapus class 'active'
    Array.from(links).forEach(function(element) {
        // jika element sama dengan target
        if (element.innerHTML !== target.innerHTML) {
            // jika element mempunyai class 'active'
            if (element.classList.contains('active')) {
                // hapus class 'active' dari element
                element.classList.remove('active');
            }
        }
    });
    // tambahkan kelas 'active' ke target
    target.classList.add('active');
}

// mendaftarkan event listener untuk semua nav-link
Array.from(links).forEach(function(element) {
    element.addEventListener('click', onClick);
});