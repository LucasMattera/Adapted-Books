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

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/titulo={titulo}")
    fun getByTitulo(@PathVariable("titulo") titulo:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByTituloContaining(titulo.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/autor={autor}")
    fun getByAutor(@PathVariable("autor") autor:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByAutorContaining(autor.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/pais={pais}")
    fun getByPais(@PathVariable("pais") pais:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByPaisContaining(pais.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/genero={genero}")
    fun getByGenero(@PathVariable("genero") genero:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.findByGeneroContaining(genero.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/coincidentesCon={palabra}")
    fun getByCoincidence(@PathVariable("palabra") palabra:String): ResponseEntity<List<Libro>>{
        return try {
            ResponseEntity(libroBusiness!!.busquedaPor(palabra.replace('-', ' ')),HttpStatus.OK)
        }catch (e:BusinessException){
            ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }catch (e:NotFoundException){
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

}