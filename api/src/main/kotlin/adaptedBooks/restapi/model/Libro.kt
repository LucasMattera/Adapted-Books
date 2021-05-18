package adaptedBooks.restapi.model

import ch.qos.logback.classic.db.names.TableName
import java.time.LocalDate
import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "libro")
data class Libro(
                val title:String = "",
                val author:String = "",
                val country:String = "",
                val image:String ="",
                
                @ElementCollection()
                val links:List<String> = listOf(),
                
                val publicationDate: LocalDate? = null,
                
                @ElementCollection()
                val genres:List<String> = listOf(),
                
                val description:String= "Descripcion de $title"
            ){

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id:Long = 0
}