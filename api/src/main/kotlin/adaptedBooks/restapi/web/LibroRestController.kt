package adaptedBooks.restapi.web

import adaptedBooks.restapi.business.ILibroBusiness
import adaptedBooks.restapi.exception.BusinessException
import adaptedBooks.restapi.exception.NotFoundException
import adaptedBooks.restapi.model.Libro
import adaptedBooks.restapi.utils.Constants
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(Constants.URL_BASE_LIBROS)
class LibroRestController {

    @Autowired
    val libroBusiness:ILibroBusiness? = null

    @GetMapping("")
    fun getAll(): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.getAll(), HttpStatus.OK)
        }catch (e:Exception){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @GetMapping("/{id}")
    fun get(@PathVariable("id") idLibro:Long): ResponseEntity<Any>{
        return try {
            ResponseEntity(libroBusiness!!.get(idLibro),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @PostMapping("")
    fun insert(@RequestBody libro:Libro): ResponseEntity<Any>{
        return try {
            libroBusiness!!.save(libro)
            val responseHeader = HttpHeaders()
            responseHeader.set("location",Constants.URL_BASE_LIBROS + "/" + libro.id)
            ResponseEntity(responseHeader,HttpStatus.CREATED)
        }catch (e:Exception){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @PutMapping("")
    fun update(@RequestBody libro: Libro): ResponseEntity<Any>{
        return try {
            libroBusiness!!.save(libro)
            ResponseEntity(HttpStatus.OK)
        }catch (e:Exception){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") idLibro: Long):ResponseEntity<Any>{
        return try {
            libroBusiness!!.remove(idLibro)
            ResponseEntity(HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }
}