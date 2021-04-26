package adaptedBooks.restapi.model

import ch.qos.logback.classic.db.names.TableName
import java.time.LocalDate
import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "libro")
data class Libro(val titulo:String = "",val autor:String = "",val pais:String = "",val imagen:String ="",
                 @ElementCollection()
                 val links:List<String> = listOf(),
                 val fechaDePublicacion: LocalDate? = null) {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id:Long = 0
}