
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>INVOKU | Post Submit</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<script type="text/javascript" src="http://localhost/dev/js.js"></script>
<script type="text/javascript" src="reCopy.js"></script>
<link href='row.css' rel='stylesheet' type='text/css'/>
<link href='home.css' rel='stylesheet' type='text/css'/>

<script type="text/javascript">
$(function(){
  var removeLink = ' <a class="remove" href="#" onclick="$(this).parent().slideUp(function(){ $(this).remove() }); return false">Hapus</a>';
$('a.tambah_langkah').relCopy({ append: removeLink});	
$('a.tambah_bahan').relCopy({ append: removeLink});	
$('a.tambah_peralatan').relCopy({ append: removeLink});	
$('a.tambah_video').relCopy({ append: removeLink});	
$('a.tambah_tips').relCopy({ append: removeLink});
$('a.tambah_catatan').relCopy({ append: removeLink});
$('a.tambah_referensi').relCopy({ append: removeLink});
});
</script>
</head>



<body>
<div id="container" class="container">
<div class="row">
<center><H1>INVOKU <br>Form Publikasi Artikel</H1></center>
PERHATIAN<br>
Dengan membaca dan mengisi form ini, berarti anda paham dengan semua ketentuan pengisian form publikasi artikel ini.<br>
PERATURAN UMUM<br>
- Anda dapat melewati beberapa form yang tidak ingin anda tulis, seperti URL GAMBAR, BAHAN, PERALATAN, LANGKAH, VIDEO, TIPS, CATATAN, dan REFERENSI.<br>
- Anda minimal harus mencantumkan JUDUL dan Menulis Deskripsi dari artikel anda.<br>
- Anda harus mencamtumkan referensi / Sumber, jika artikel anda menyimak dari media lain.<br>
- Untuk Artikel yang berbau pornografi atau sara, tidak akan kami publikasikan.<br>
- Kami ( invoku.com ) berhak untuk mengedit dan menghapus artikel anda jika terdapat kesalahan pada peraturan kebijakan kami.<br>
- Jika artikel anda terdapat kesalahan pada pihak ketiga, maka kami tidak bertanggung jawab atas semua kesalahan anda.<br>
- Anda harus setuju jika sewaktu waktu peraturan dan kebijakan kami berubah.<br>
- Anda dapat mengajukan pertanyaan maupun Saran ke email ( support.invoku@gmail.com ).
<br><br>
Mohon peraturan dapat di pahami dan dimengerti. Terima kasih. <br>www.invoku.com
</ul>
   <form method="post" action="proses.php">

   <!-- Judul -->
   <div class='judul col-xs-12 col-sm-12 col-md-12 col-lg-12'>
   <input class="judul" type="text" name="judul" maxlength="80" placeholder='"Judul, Bagaimana Cara...."' required/>
	</div>
	<div class='gambar col-xs-12 col-sm-12 col-md-12 col-lg-12'>
   <input class="gambar" type="url" name="URL Gambar" placeholder="url gambar...."/>
   </div>
   <!-- pendahuluan -->
   <div class='pendahuluan col-xs-12 col-sm-12 col-md-12 col-lg-12'>
   <textarea class="pendahuluan" type="text" name="pendahuluan" placeholder="deskripsi singkat...." required></textarea>
   </div>

   <div class='box-bahan col-xs-12 col-sm-12 col-md-12 col-lg-12'>
	<span>BAHAN:</span> 
	 <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
   		<li class="bahan">
			<input type="text" name="nama_bahan[]"/>
		</li> 
	</div>
	<a href="#" class="tambah_bahan" rel=".bahan">Tambah</a>
	</div>

	<div class='box-peralatan col-xs-12 col-sm-12 col-md-12 col-lg-12'>
	<span>PERALATAN :</span> 
   		<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
   			<li class="peralatan">
		   		<input type="text" name="nama_peralatan[]"/>
			</li>
		</div>
	<a href="#" class="tambah_peralatan" rel=".peralatan">Tambah</a>
	</div>

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	<span class='nama-langkah'>LANGKAH : </span>
	<br/> <i>Note : </i><br/>
		anda Dapat melewati JUDUL LANGKAH atau URL GAMBAR jika tidak ingin menampilkannya.<br/>
	</div>
	<div class="langkah col-xs-12 col-sm-12 col-md-12 col-lg-12">
	<li class="dup-langkah">
   			<div class='judul col-xs-12 col-sm-8 col-md-8 col-lg-8'>
		   		<input type="text" name="judul_langkah[]" placeholder="Judul Langkah" maxlength="70"/>
		   </div>
		   <div class='gambar col-xs-12 col-sm-12 col-md-8 col-lg-8'>
		   		<input type="text" name="url_langkah[]" placeholder="URL gambar"/>
		   </div>
		 
		   <div class='isi col-xs-12 col-sm-12 col-md-8 col-lg-8'>
		   		<textarea type="text" name="isi_langkah[]" placeholder="tulis isi langkah disini"></textarea>
			</div>
	</li>
	<a href="#" class="tambah_langkah" rel=".dup-langkah">Tambah</a>
	</div>


	<div class='box-video col-xs-12 col-sm-12 col-md-12 col-lg-12'>
	<span>VIDEO </span>
   	<li class="video">
		<input type="url" name="video_youtube[]" placeholder="Youtube URL Ex : http://youtu.be/watch?=0GWdg6" maxlength="70"/>
		<textarea type="text" name="video_ket[]" placeholder="Deskripsi video"></textarea>

	</li>
	<a href="#" class="tambah_video" rel=".video">+</a>
 	</div>

	<div class='box-tips col-xs-12 col-sm-12 col-md-12 col-lg-12'>
	<span>TIPS !</span>
   	<li class="tips">
		<input type="text" name="tips[]"/>

	</li>
	<a href="#" class="tambah_tips" rel=".tips">+</a>
 	</div>

	<div class='box-catatan col-xs-12 col-sm-12 col-md-12 col-lg-12'>
	<span>Catatan :</span> 
   <li class="catatan">
		<textarea type="text" name="catatan[]"></textarea> 
	</li>
	<a href="#" class="tambah_catatan" rel=".catatan">+</a>
    </div>

   			
	<div class='box-ref col-xs-12 col-sm-12 col-md-12 col-lg-12'>
	<span>Referensi :</span> 
   <li class="referensi">
		<input type="text" name="referensi[]"/>
	</li>
	<a href="#" class="tambah_referensi" rel=".referensi">+</a>
	</div> 
	<div class="publish">
	<input type="submit" value="Submit !" />
	</div>
   </form>
</div>

</body>
</html>
