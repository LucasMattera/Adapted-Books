package adaptedBooks.restapi.business

import adaptedBooks.restapi.model.Libro

interface ILibroBusiness {

    fun getAll(): List<Libro>
    fun get (idBook: Long):Libro
    fun save(book:Libro):Libro
    fun remove(idBook:Long)
    fun findByTitleContaining(title: String): List<Libro>
    fun findByAuthorContaining(author: String): List<Libro>
    fun findByCountryContaining(author: String): List<Libro>
    fun findByGenreContaining(author: String): List<Libro>
    fun findBy(word: String): List<Libro>
}