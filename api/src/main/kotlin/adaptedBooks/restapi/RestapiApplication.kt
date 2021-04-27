package adaptedBooks.restapi

import adaptedBooks.restapi.dao.LibroRepository
import adaptedBooks.restapi.model.Libro
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import java.time.LocalDate
import java.time.format.DateTimeFormatter

@SpringBootApplication
class RestapiApplication: CommandLineRunner {

	@Autowired
	val libroRepository:LibroRepository? = null

	override fun run(vararg args: String?) {
		var libros = mutableListOf<Libro>()
		val formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy")

		val leviatanImagen = "https://m.media-amazon.com/images/I/51K3p2lbJeL.jpg"
		val leviatanLinks = listOf<String>("https://www.primevideo.com/detail/0MW6F85MD8486AE43GONNOR5F1/ref=atv_dp_season_select_s1?language=es_ES")
		val leviatan = Libro("El Despertar del Leviatan","James S. A. Corey", "Estados Unidos", leviatanImagen, leviatanLinks, LocalDate.parse("02-06-2011",formatter))
		libros.add(leviatan)

		val calibanImagen = "https://1.bp.blogspot.com/-iWQam0OWJNI/YBvjzjc-NSI/AAAAAAAAabU/uwHc9-dyZP4Mfayu6bE2aatdQ6UL1ly6ACNcBGAsYHQ/s2048/la%2Bguerra%2Bde%2Bcaliban.jpg"
		val caliban = Libro("La Guerra de Caliban" ,"James S. A. Corey", "Estados Unidos", calibanImagen, leviatanLinks, LocalDate.parse("07-06-2012",formatter))
		libros.add(caliban)

		val abadonImagen = "https://m.media-amazon.com/images/I/519qqD2rVQL.jpg"
		val abadon = Libro("La Puerta de Abadon" ,"James S. A. Corey", "Estados Unidos", abadonImagen, leviatanLinks, LocalDate.parse("04-06-2013",formatter))
		libros.add(abadon)

		val akiraImagen = "https://pics.filmaffinity.com/Akira-557684565-mmed.jpg"
		val akiraLinks = listOf<String>("https://www.netflix.com/ar/title/60021103")
		val akira = Libro("Akira", "Katsuhiro Otomo" , "Japon", akiraImagen, akiraLinks,LocalDate.parse("20-12-1982",formatter))
  		libros.add(akira)

		val cdhyf1Imagen = "https://contentv2.tap-commerce.com/cover/large/9789506442279_1.jpg?id_com=1113"
		val cdhyfLinks = listOf<String>("https://www.hbolatam.com/uy/series/detail/game-of-thrones/13673/ttl603252")
		val cdhyf1 = Libro("Juego de Tronos", "George RR Martin","Estados Unidos", cdhyf1Imagen,cdhyfLinks,LocalDate.parse("06-08-1996",formatter))
		libros.add(cdhyf1)

		val cdhyf2Imagen = "https://images.cdn1.buscalibre.com/fit-in/360x360/6f/30/6f305637f3f8c29af1f523fb302e7745.jpg"
		val cdhyf2 = Libro("Choque de Reyes", "George RR Martin","Estados Unidos", cdhyf2Imagen,cdhyfLinks,LocalDate.parse("16-11-1998",formatter))
		libros.add(cdhyf2)

		val cdhyf3Imagen = "https://www.libreriasinopsis.com/imagenes/9788416/978841603507.JPG"
		val cdhyf3 = Libro("Tormenta de Espadas", "George RR Martin","Estados Unidos", cdhyf3Imagen,cdhyfLinks,LocalDate.parse("08-08-2000",formatter))
		libros.add(cdhyf3)

		val cdhyf4Imagen = "https://contentv2.tap-commerce.com/cover/large/9789506442477_1.jpg?id_com=1113"
		val cdhyf4 = Libro("Festín de Cuervos", "George RR Martin","Estados Unidos", cdhyf4Imagen,cdhyfLinks,LocalDate.parse("26-10-2005",formatter))
		libros.add(cdhyf4)

		val cdhyf5Imagen = "https://i.pinimg.com/originals/c9/a6/97/c9a697ae8ce5d49ce7a9e6aeb3f8d2f7.jpg"
		val cdhyf5 = Libro("Danza de Dragones", "George RR Martin","Estados Unidos", cdhyf5Imagen,cdhyfLinks,LocalDate.parse("12-07-2011",formatter))
		libros.add(cdhyf5)

		val HPPiedraFilosofalImagen = "https://static.wikia.nocookie.net/esharrypotter/images/6/62/HP1_ES_versi%C3%B3n_Pottermore.jpg/revision/latest/scale-to-width-down/719?cb=20170711202411"
		val HPPiedraFilosofalLinks = listOf<String>("https://www.youtube.com/watch?v=2BXHcqtFU8k")
		val HPPiedraFilosofal = Libro("Harry Potter y la piedra filosofal","J. K. Rowling","Reino Unido",HPPiedraFilosofalImagen,HPPiedraFilosofalLinks, LocalDate.parse("30-06-1997",formatter))
		libros.add(HPPiedraFilosofal)

		val HPCamaraSecretaImagen = "https://static.wikia.nocookie.net/esharrypotter/images/a/ab/HP2_ES_versi%C3%B3n_Pottermore.jpg/revision/latest/scale-to-width-down/719?cb=20170711202412"
		val HPCamaraSecretaLinks = listOf<String>("https://www.youtube.com/watch?v=DIPSy8lD1Wc")
		val HPCamaraSecreta = Libro("Harry Potter y la cámara secreta","J. K. Rowling","Reino Unido",HPCamaraSecretaImagen,HPCamaraSecretaLinks, LocalDate.parse("02-07-1998",formatter))
		libros.add(HPCamaraSecreta)

		val HPPrisioneroImagen = "https://static.wikia.nocookie.net/esharrypotter/images/3/39/HP3_ES_versi%C3%B3n_Pottermore.jpg/revision/latest/scale-to-width-down/719?cb=20170711202412"
		val HPPrisioneroLinks = listOf<String>("https://www.youtube.com/watch?v=wUY2XAUigh0")
		val HPPrisionero = Libro("Harry Potter y el prisionero de Azkaban","J. K. Rowling","Reino Unido",HPPrisioneroImagen,HPPrisioneroLinks, LocalDate.parse("08-07-1999",formatter))
		libros.add(HPPrisionero)

		val HPCalizImagen = "https://static.wikia.nocookie.net/esharrypotter/images/6/66/HP4_ES_versi%C3%B3n_Pottermore.jpg/revision/latest/scale-to-width-down/719?cb=20170711202411"
		val HPCalizLinks = listOf<String>("https://www.youtube.com/watch?v=v3MY5oO6Rj8")
		val HPCaliz = Libro("Harry Potter y el cáliz de fuego","J. K. Rowling","Reino Unido",HPCalizImagen,HPCalizLinks, LocalDate.parse("08-07-2000",formatter))
		libros.add(HPCaliz)

		val HPFenixImagen = "https://static.wikia.nocookie.net/esharrypotter/images/9/91/HP5_ES_versi%C3%B3n_Pottermore.jpg/revision/latest/scale-to-width-down/719?cb=20170711202410"
		val HPFenixLinks = listOf<String>("https://www.youtube.com/watch?v=DHLT5fgpa6k")
		val HPFenix = Libro("Harry Potter y la Orden del Fénix","J. K. Rowling","Reino Unido",HPFenixImagen,HPFenixLinks, LocalDate.parse("21-06-2003",formatter))
		libros.add(HPFenix)

		val HPPincipelImagen = "https://static.wikia.nocookie.net/esharrypotter/images/e/eb/HP6_ES_versi%C3%B3n_Pottermore.jpg/revision/latest/scale-to-width-down/719?cb=20170711202408"
		val HPPincipeLinks = listOf<String>("https://www.youtube.com/watch?v=wI0W7ClBLDs")
		val HPPincipe = Libro("Harry Potter y el misterio del príncipe","J. K. Rowling","Reino Unido",HPPincipelImagen,HPPincipeLinks, LocalDate.parse("16-07-2005",formatter))
		libros.add(HPPincipe)

		val HPReliquiasImagen = "https://static.wikia.nocookie.net/esharrypotter/images/d/d4/HP7_ES_versi%C3%B3n_Pottermore.jpg/revision/latest/scale-to-width-down/719?cb=20170711202409"
		val HPReliquiasLinks = listOf<String>("https://www.youtube.com/watch?v=yU1v1JxJfRI","https://www.youtube.com/watch?v=nf3EUJT9pjY")
		val HPReliquias = Libro("Harry Potter y las Reliquias de la Muerte","J. K. Rowling","Reino Unido",HPReliquiasImagen,HPReliquiasLinks, LocalDate.parse("21-07-2007",formatter))
		libros.add(HPReliquias)

		val HPLegadoMalditoImagen = "https://static.wikia.nocookie.net/esharrypotter/images/1/1d/Portada_espa%C3%B1ol_Harry_Potter_y_el_legado_maldito.jpg/revision/latest/scale-to-width-down/600?cb=20160802142540"
		val HPLegadoMalditoLinks = listOf<String>("https://www.youtube.com/watch?v=2BXHcqtFU8k")
		val HPLegadoMaldito = Libro("Harry Potter y la piedra filosofal","J. K. Rowling","Reino Unido",HPLegadoMalditoImagen,HPLegadoMalditoLinks, LocalDate.parse("31-07-2016",formatter))
		libros.add(HPLegadoMaldito)

		libroRepository!!.saveAll(libros)
	}
}

fun main(args: Array<String>) {
	runApplication<RestapiApplication>(*args)
}
