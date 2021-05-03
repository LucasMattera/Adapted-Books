package adaptedBooks.restapi.business

import adaptedBooks.restapi.model.Libro

interface ILibroBusiness {

    fun getAll(): List<Libro>
    fun get (idLibro: Long):Libro
    fun save(libro:Libro):Libro
    fun remove(idLibro:Long)
    fun findByTituloContaining(titulo: String): List<Libro>
    fun findByAutorContaining(autor: String): List<Libro>
    fun findByPaisContaining(autor: String): List<Libro>
    fun findByGeneroContaining(autor: String): List<Libro>
    fun busquedaPor(palabra: String): List<Libro>
}