package adaptedBooks.restapi.dao

import adaptedBooks.restapi.model.Libro
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.*

@Repository
interface LibroRepository:JpaRepository<Libro,Long>{

     fun findByTitleContaining(title : String) : Optional<List<Libro>>

     fun findByAuthorContaining(author : String) : Optional<List<Libro>>

     fun findByCountryContaining(country: String) : Optional<List<Libro>>

     @Query("SELECT * FROM libro r JOIN (SELECT * FROM libro_generos l WHERE l.generos LIKE %?1%) j ON r.id = j.libro_id",nativeQuery = true)
     fun findByGenresContaining(genre : String) : Optional<List<Libro>>

}

