package adaptedBooks.restapi.business

import adaptedBooks.restapi.dao.LibroRepository
import adaptedBooks.restapi.exception.BusinessException
import adaptedBooks.restapi.exception.NotFoundException
import adaptedBooks.restapi.model.Libro
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*
import kotlin.jvm.Throws

@Service
class LibroBusiness:ILibroBusiness{

    @Autowired
    val libroRepository: LibroRepository? = null

    @Throws(BusinessException::class)
    override fun getAll(): List<Libro> {
        try {
            return libroRepository!!.findAll()
        }catch (e:Exception){
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun get(idBook: Long): Libro {
        val optional: Optional<Libro>
        try {
            optional = libroRepository!!.findById(idBook)
        }catch (e:Exception){
            throw BusinessException(e.message)
        }

        if (!optional.isPresent){
            throw NotFoundException("No se encontro el libro con id: $idBook")
        }
        return optional.get()
    }

    @Throws(BusinessException::class)
    override fun save(book: Libro): Libro {
        try {
            return libroRepository!!.save(book)
        }catch (e:Exception){
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun remove(idBook: Long) {
        val optional:Optional<Libro>
        try {
            optional = libroRepository!!.findById(idBook)
        }catch (e:Exception){
            throw BusinessException(e.message)
        }
        removeIfIsPresent(optional, idBook)
    }

    @Throws(BusinessException::class,NotFoundException::class)
    private fun removeIfIsPresent(optional: Optional<Libro>, idBook: Long) {
        if (!optional.isPresent) {
            throw NotFoundException("No se encontro el libro con id: $idBook")
        } else {
            removePresent(idBook)
        }
    }

    @Throws(BusinessException::class)
    private fun removePresent(idBook: Long) {
        try {
            libroRepository!!.deleteById(idBook)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun findByTitleContaining(title: String): List<Libro> {
        val optional: Optional<List<Libro>>
        try{
            optional = libroRepository!!.findByTitleContaining(title)
        }catch (e:Exception){
            throw NotFoundException("No se encontro el libro con titulo: $title")
        }
        return optional.get()
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun findByAuthorContaining(author: String): List<Libro> {
        val optional: Optional<List<Libro>>
        try{
            optional = libroRepository!!.findByAuthorContaining(author)
        }catch (e:Exception){
            throw NotFoundException("No se encontro el libro con Autor: $author")
        }
        return optional.get()
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun findByCountryContaining(country: String): List<Libro> {
        val optional: Optional<List<Libro>>
        try{
            optional = libroRepository!!.findByCountryContaining(country)
        }catch (e:Exception){
            throw NotFoundException("No se encontro ningun libro del pais: $country")
        }
        return optional.get()
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun findByGenreContaining(genre: String): List<Libro> {
        val optional: Optional<List<Libro>>
        try{
            optional = libroRepository!!.findByGenresContaining(genre)
        }catch (e:Exception){
            throw NotFoundException("No se encontro ningun libro con genero: $genre")
        }
        return optional.get()
    }

    override fun findBy(word: String): List<Libro> {
        val optional1: Optional<List<Libro>>
        val optional2: Optional<List<Libro>>
        val optional3: Optional<List<Libro>>
        val optional4: Optional<List<Libro>>
        try{
            optional1 = libroRepository!!.findByAuthorContaining(word)
            optional2 = libroRepository!!.findByTitleContaining(word)
            optional3 = libroRepository!!.findByCountryContaining(word)
            optional4 = libroRepository!!.findByGenresContaining(word)
        }catch (e:Exception){
            throw NotFoundException("No se encontro coincidencia con: $word")
        }
        var list1 = optional1.get()
        var list2 = optional2.get()
        var list3 = optional3.get()
        var list4 = optional4.get()
        var results: MutableSet<Libro> = mutableSetOf<Libro>()
        results.addAll(list1)
        results.addAll(list2)
        results.addAll(list3)
        results.addAll(list4)
        return results.toList()
    }


}