document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.querySelector('.isi');

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible1'); 
                observer1.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 

    observer1.observe(hiddenDiv);

    const hiddenDiv2 = document.querySelector('.gambar-pasangan');

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible2');
                observer2.unobserve(entry.target)
            }
        })
    }, {threshold: 0.6});

    observer2.observe(hiddenDiv2);

    const hiddennDiv3 = document.querySelector('.akad');

    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible3');
                observer3.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer3.observe(hiddennDiv3);

    const hiddennDiv4 = document.querySelector('.resepsi');

    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible4');
                observer4.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer4.observe(hiddennDiv4);

    const hiddennDiv5 = document.querySelector('.hidden5');

    const observer5 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible5');
                observer5.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer5.observe(hiddennDiv5);

    const hiddennDiv6 = document.querySelector('.hidden6');

    const observer6 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible6');
                observer6.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer6.observe(hiddennDiv6);

    const hiddennDiv7 = document.querySelector('.hidden7');

    const observer7 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible7');
                observer7.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer7.observe(hiddennDiv7);

    const hiddennDiv8 = document.querySelector('.hidden8');

    const observer8 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible8');
                observer8.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer8.observe(hiddennDiv8);

    const hiddennDiv9 = document.querySelector('.hidden9');

    const observer9 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible9');
                observer9.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer9.observe(hiddennDiv9);

    const hiddennDiv10 = document.querySelector('.hidden10');

    const observer10 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible10');
                observer10.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer10.observe(hiddennDiv10);

    const hiddennDiv11 = document.querySelector('.part1');

    const observer11 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible17');
                observer11.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer11.observe(hiddennDiv11);

    const hiddennDiv12 = document.querySelector('.part2');

    const observer12 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible18');
                observer12.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer12.observe(hiddennDiv12);

    const hiddennDiv13 = document.querySelector('.part3');

    const observer13 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible17');
                observer13.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer13.observe(hiddennDiv13);

    const hiddennDiv14 = document.querySelector('.part4');

    const observer14 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible18');
                observer14.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer14.observe(hiddennDiv14);

    const hiddennDiv15 = document.querySelector('.part5');

    const observer15 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible17');
                observer15.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer15.observe(hiddennDiv15);

    const hiddennDiv16 = document.querySelector('.vid');
    const video = document.getElementById('video');

    const observer16 = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                video.play();
                observer16.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

    observer16.observe(hiddennDiv16);

    const akhirDiv = document.querySelector('.akhir');
    const navigasi = document.querySelector('.navigasi');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                navigasi.classList.add('visible19');
                setTimeout(()=>{
                    navigasi.classList.add('none');
                },1000);
            }else{
                navigasi.classList.remove('none');
                setTimeout(()=>{
                    navigasi.classList.remove('visible19');
                },10);
            }
        })
    }, {threshold: 0});

    observer.observe(akhirDiv);

    const perempuanDiv = document.querySelector('.gambar-pasangan');
    const lb2 = document.querySelector('#lb2');
    const rb2 = document.querySelector('#rb2');
    const lt2 = document.querySelector('#lt2');
    const rt2 = document.querySelector('#rt2');
    const lb3 = document.querySelector('#lb3');
    const rb3 = document.querySelector('#rb3');
    const lt3 = document.querySelector('#lt3');
    const rt3 = document.querySelector('#rt3');

    perempuanDiv.addEventListener("animationend",()=>{
        lb2.classList.add('visible11');
    });
    perempuanDiv.addEventListener("animationend",()=>{
        rb2.classList.add('visible12');
    });
    perempuanDiv.addEventListener("animationend",()=>{
        lt2.classList.add('visible13');
    })
    perempuanDiv.addEventListener("animationend",()=>{
        rt2.classList.add('visible14');
    })
    perempuanDiv.addEventListener("animationend",()=>{
        lb3.classList.add('visible11');
    });
    perempuanDiv.addEventListener("animationend",()=>{
        rb3.classList.add('visible12');
    });
    perempuanDiv.addEventListener("animationend",()=>{
        lt3.classList.add('visible13');
    })
    perempuanDiv.addEventListener("animationend",()=>{
        rt3.classList.add('visible14');
    })
});

function bukaUndangan(){
    const button = document.getElementById('bukaUndangan');
    const tampilan1 = document.querySelector('.container-quotes');
    const tampilanMusik =  document.getElementById('kontrolmusik');
    const lagu = document.getElementById('backsound');
    const navigasi =  document.querySelector('.navigasi');
    const quotes = document.querySelector('.container-quotes');
    quotes.classList.remove('none');
    const isi = document.querySelector('.pelapis-isi');
    isi.classList.remove('none');

    navigasi.style.visibility = 'visible';
    navigasi.classList.add('animasinavigasi');
    tampilanMusik.style.display = 'block';
    button.addEventListener("click",()=>{
        tampilan1.scrollIntoView({behavior:"smooth"});
    });
    lagu.play();

}
const button = document.getElementById('bukaUndangan');
const tampilan1 = document.querySelector('.container-quotes');
button.addEventListener("click",()=>{
    tampilan1.scrollIntoView({behavior:"smooth"});
});

function kontrolMusik(){
    const lagu = document.getElementById('backsound');
    const kontrollagu = document.querySelector('.kontrol');
    const animasi = document.getElementById('kontrolmusik');

    if(lagu.paused){
        lagu.play();
        animasi.style.animationPlayState = 'running';
    }else{
        lagu.pause();
        animasi.style.animationPlayState = 'paused';
    }
}

function hadir(input){
    const lblJumlahanggota = querySelector('.label[for="jumlahAnggota"]');
    const jumlahAnggota =  getElementById('jumlahAnggota');
    const menuMakanan = querySelector('.menuMakanan');

    if(input.id === 'hadir'){
        lblJumlahanggota.classList.remove('none');
        jumlahAnggota.classList.remove('none');
        menuMakanan.classList.remove('none');
    }else{
        lblJumlahanggota.classList.add('none');
        jumlahAnggota.classList.add('none');
        menuMakanan.classList.add('none');
    }
}

function copyClipboard(){
    const noRek = document.getElementById("noRek").innerText;
    const tempInput = document.createElement("input");

    tempInput.value = noRek;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    Swal.fire({
        icon: "success",
        title: "Berhasil dicopy!",
        showConfirmButton: false,
        timer: 1500
      });
}

function showDiv() {
    var button = document.getElementById('button3');
    var kehadiranDiv = document.getElementById('kehadiran');
    var hadir = document.getElementById('hadir');
    var tidak = document.getElementById('tidak-hadir');
    var reason = document.getElementById('reason');
    var nama = document.getElementById('name');
    var no = document.getElementById('no');

    if(kehadiranDiv.classList.contains('none')){
        kehadiranDiv.classList.remove('none');
        kehadiranDiv.classList.add('visible15');
        kehadiranDiv.scrollIntoView({behavior:"smooth"});
    }else{
        kehadiranDiv.classList.add('none');
        hadir.checked = false;
        tidak.checked = false;
        reason.value = "";
        nama.value = "";
        no.value = "";
        reason.classList.add('none');
        kehadiranDiv.classList.remove('visible15');

    }
}
/*
function only1(checkbox){
    var checkboxes = document.getElementsByName('pilih');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}
*/
function alasan(input) {
    const reason = document.getElementById('reason');
    const lblJumlahanggota = document.querySelector('label[for="jumlahAnggota"]');
    const jumlahAnggota =  document.getElementById('jumlahAnggota');
    const menuMakanan = document.querySelector('.menuMakanan');

    
    if(input.id === 'hadir') {
        reason.classList.add('none'); 
        lblJumlahanggota.classList.remove('none');
        jumlahAnggota.classList.remove('none');
        menuMakanan.classList.remove('none');
    } else {
        reason.classList.remove('none'); 
        lblJumlahanggota.classList.add('none');
        jumlahAnggota.classList.add('none');
        menuMakanan.classList.add('none');
    }
}


function required(){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var no = document.getElementById('no').value;
    var errorMessage = document.getElementById('error');

    errorMessage.textContent = "";

    if(name === ""){
        errorMessage.textContent = "Nama harus diisi!";
        return false;
    }

    if(no === ""){
        errorMessage.textContent = "No harus diiisi!";
        return false;
    }

    Swal.fire({
        icon: "success",
        title: "Jawaban berhasil disubmit!",
        showConfirmButton: false,
        timer: 1500
      });

}

function metodeHadiah(input){
    const dana = document.querySelector('.dana');
    const rekening = document.querySelector('.rekening');
    const konfirmasi = document.querySelector('.konfirmasi');
    const button = document.getElementById('submitButton');

    if(input.id === 'qr'){
        dana.classList.remove('none');
        rekening.classList.add('none');
        konfirmasi.classList.add('none');
        button.classList.add('none');
        dana.scrollIntoView({behavior:"smooth"});
        
    }else{
        dana.classList.add('none');
        rekening.classList.remove('none');
        konfirmasi.classList.remove('none');
        button.classList.remove('none');
        rekening.scrollIntoView({behavior:"smooth"});
    }
}

function konfirmasi(){
    event.preventDefault();

    var nama = document.getElementById('namaPengirim').value;
    var nominal = document.getElementById('nominalTransfer').value;
    var noTelp = document.getElementById('noTelp').value;

    if(nama&&nominal&&noTelp){
        document.getElementById("konfirmasiPesan").innerText = `Terima kasih ${nama} atas hadiah, doa, dan pesannya!`;
    }else{
        document.getElementById("konfirmasiPesan").innerText = "Mohon lengkapi semua informasi!";
    }
}

function showDiv2() {
    var button = document.getElementById('button2');
    var kehadiranDiv = document.getElementById('hadiah');
    var nama = document.getElementById('namaPengirim');
    var nominal = document.getElementById('nominalTransfer');
    var noTelp = document.getElementById('noTelp');
    var pesan = document.getElementById('pesan');

    if(kehadiranDiv.classList.contains('none')){
        kehadiranDiv.classList.remove('none');
        kehadiranDiv.classList.add('visible16');
        kehadiranDiv.scrollIntoView({behavior:"smooth"});
    }else{
        kehadiranDiv.classList.add('none');
        nominal.value = "";
        nama.value = "";
        noTelp.value = "";
        pesan.value = "";
        kehadiranDiv.classList.remove('visible16');

    }
}
/*
const cover = document.getElementById('tampilan1');
const pasangan = document.getElementById('tampilan2');
const waktutempat = document.getElementById('tampilan3');
const galeri = document.getElementById('tampilan4');
const akhir = document.getElementById('tampilan5');
const story = document.getElementById('tampilan6');

const tampilan1 = document.querySelector('.header');
const tampilan2 = document.querySelector('.isi');
const tampilan3 = document.querySelector('.waktu-tempat');
const tampilan4 = document.querySelector('.galeri');
const tampilan5 = document.querySelector('.akhir');
const tampilan6 = document.querySelector('.story');

cover.addEventListener("click", function() {
    tampilan1.scrollIntoView({behavior:"smooth"});
});

pasangan.addEventListener("click",function(){
    tampilan2.scrollIntoView({behavior:"smooth"});
});

waktutempat.addEventListener("click", function(){
    tampilan3.scrollIntoView({behavior:"smooth"});
});

galeri.addEventListener("click", function() {
    tampilan4.scrollIntoView({behavior:"smooth"});
});

akhir.addEventListener("click", function(){
    tampilan5.scrollIntoView({behavior:"smooth"});
});
story.addEventListener("click",function(){
    tampilan6.scrollIntoView({behavior:"smooth"});
});

function backtothefirst(){
    var tampilan1 = document.querySelector('.header');
    tampilan1.scrollIntoView({behavior:"smooth"});
}

window.onload = backtothefirst;
*/