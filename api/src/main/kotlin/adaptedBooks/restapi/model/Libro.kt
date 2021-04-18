package adaptedBooks.restapi.model

import java.time.LocalDate
import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "libro")
data class Libro(val titulo:String = "",val autor:String = "",val pais:String = "", val fechaDePublicacion: LocalDate? = null) {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id:Long = 0
}