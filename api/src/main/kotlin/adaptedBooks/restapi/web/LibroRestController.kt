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
@RequestMapping(Constants.URL_BASE_BOOKS)
class LibroRestController {

    @Autowired
    val libroBusiness:ILibroBusiness? = null

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("")
    fun getAll(): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.getAll(), HttpStatus.OK)
        }catch (e:Exception){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
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

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/add")
    fun insert(@RequestBody libro:Libro): ResponseEntity<Any>{
        return try {
            libroBusiness!!.save(libro)
            val responseHeader = HttpHeaders()
            responseHeader.set("location",Constants.URL_BASE_BOOKS + "/" + libro.id)
            ResponseEntity(responseHeader,HttpStatus.CREATED)
        }catch (e:Exception){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PutMapping("")
    fun update(@RequestBody libro: Libro): ResponseEntity<Any>{
        return try {
            libroBusiness!!.save(libro)
            ResponseEntity(HttpStatus.OK)
        }catch (e:Exception){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") idBook: Long):ResponseEntity<Any>{
        return try {
            libroBusiness!!.remove(idBook)
            ResponseEntity(HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/titulo={titulo}")
    fun getByTitulo(@PathVariable("titulo") title:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByTitleContaining(title.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/autor={autor}")
    fun getByAutor(@PathVariable("autor") author:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByAuthorContaining(author.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/pais={pais}")
    fun getByPais(@PathVariable("pais") country:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByCountryContaining(country.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/genero={genero}")
    fun getByGenero(@PathVariable("genero") genre:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByGenreContaining(genre.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/coincidentesCon={palabra}")
    fun getByCoincidence(@PathVariable("palabra") word:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findBy(word.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

}