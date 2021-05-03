import BookDescription from "./BookDescription"
import BookImagen from "./BookImage"

const BookDetails = () => {
    return (
        <div>
            <h2>Detalles</h2>
            <BookImagen/>
            <BookDescription/>
        </div>
    );
};

export default BookDetails;