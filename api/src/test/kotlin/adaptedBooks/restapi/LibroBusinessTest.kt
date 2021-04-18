package adaptedBooks.restapi

import adaptedBooks.restapi.business.ILibroBusiness
import adaptedBooks.restapi.business.LibroBusiness
import adaptedBooks.restapi.model.Libro
import org.junit.Assert
import org.junit.Before
import org.junit.Test
import java.time.LocalDate


class LibroBusinessTest {

	lateinit var piedraFilosofal: Libro
	lateinit var calizDeFuego:Libro
	lateinit var crepusculo:Libro
	lateinit var amanecer:Libro
	lateinit var libroBusiness:ILibroBusiness

	@Before
	 fun setUp(){
		piedraFilosofal = Libro("la piedra filosofal","jk rowling","inglaterra", LocalDate.now())
		calizDeFuego = Libro("el caliz de fuego","jk rowling","inglaterra", LocalDate.now())
		crepusculo = Libro("crepusculo","no se","EEUU", LocalDate.now())
		amanecer = Libro("amanecer","no se","EEUU", LocalDate.now())

		libroBusiness = LibroBusiness()
	}
	@Test
	fun libroPersistent() {

		Assert.assertEquals(piedraFilosofal,libroBusiness.save(piedraFilosofal))
	}

}
