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
