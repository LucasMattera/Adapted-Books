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
    override fun get(idLibro: Long): Libro {
        val optional: Optional<Libro>
        try {
            optional = libroRepository!!.findById(idLibro)
        }catch (e:Exception){
            throw BusinessException(e.message)
        }

        if (!optional.isPresent){
            throw NotFoundException("No se encontro el libro con id: $idLibro")
        }
        return optional.get()
    }

    @Throws(BusinessException::class)
    override fun save(libro: Libro): Libro {
        try {
            return libroRepository!!.save(libro)
        }catch (e:Exception){
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun remove(idLibro: Long) {
        val optional:Optional<Libro>
        try {
            optional = libroRepository!!.findById(idLibro)
        }catch (e:Exception){
            throw BusinessException(e.message)
        }
        removeIfIsPresent(optional, idLibro)
    }

    @Throws(BusinessException::class,NotFoundException::class)
    private fun removeIfIsPresent(optional: Optional<Libro>, idLibro: Long) {
        if (!optional.isPresent) {
            throw NotFoundException("No se encontro el libro con id: $idLibro")
        } else {
            removePresent(idLibro)
        }
    }

    @Throws(BusinessException::class)
    private fun removePresent(idLibro: Long) {
        try {
            libroRepository!!.deleteById(idLibro)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun findByTituloContaining(titulo: String): List<Libro> {
        val optional: Optional<List<Libro>>
        try{
            optional = libroRepository!!.findByTituloContaining(titulo)
        }catch (e:Exception){
            throw NotFoundException("No se encontro el libro con titulo: $titulo")
        }
        return optional.get()
    }

    @Throws(BusinessException::class,NotFoundException::class)
    override fun findByAutorContaining(autor: String): List<Libro> {
        val optional: Optional<List<Libro>>
        try{
            optional = libroRepository!!.findByAutorContaining(autor)
        }catch (e:Exception){
            throw NotFoundException("No se encontro el libro con Autor: $autor")
        }
        return optional.get()
    }
}