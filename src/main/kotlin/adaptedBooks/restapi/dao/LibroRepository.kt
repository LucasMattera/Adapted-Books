package adaptedBooks.restapi.dao

import adaptedBooks.restapi.model.Libro
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LibroRepository:JpaRepository<Libro,Long>