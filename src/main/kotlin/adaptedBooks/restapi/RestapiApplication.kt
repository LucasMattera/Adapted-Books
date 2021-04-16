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
		val formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy")
		val libro1 = Libro("la piedra filosofal","jk rowling","inglaterra", LocalDate.parse("30-02-1990",formatter))

		libroRepository!!.save(libro1)
	}
}

fun main(args: Array<String>) {
	runApplication<RestapiApplication>(*args)
}
