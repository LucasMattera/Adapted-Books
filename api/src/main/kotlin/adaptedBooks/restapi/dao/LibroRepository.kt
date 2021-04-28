package adaptedBooks.restapi.dao

import adaptedBooks.restapi.model.Libro
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.*

@Repository
interface LibroRepository:JpaRepository<Libro,Long>{

     fun findByTituloContaining(titulo : String) : Optional<List<Libro>>

     fun findByAutorContaining(autor : String) : Optional<List<Libro>>
}

