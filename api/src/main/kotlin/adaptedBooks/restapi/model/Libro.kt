package adaptedBooks.restapi.model
import java.time.LocalDate
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
                @Column(length = 3000)
                val description:String= "Descripcion de $title"
            ){

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id:Long = 0
}