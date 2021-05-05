import BookDescription from "./BookDescription"
import BookImagen from "./BookImage"
import Message from "../AuxComponents/Message";
import BookSearch from "./BookSearch";

const BookDetails = ({ search, bookImage, bio }) => {
    if (!bookImage || !bio) return null;

    return (
        <>
            {bookImage.err || bookImage.name === "AbortError" ? (
                <Message
                    msg={`Error: no existe el Libro ${search.title}`}
                    bgColor="#dc3545"
                />
            ) : (
                <BookImagen />
            )}
            {bio ? (
                <BookDescription />
            ) : (
                <Message
                    msg={`Error: no existe el Libro ${search.title}`}
                    bgColor="#dc3545"
                />
            )}
        </>
    );
};

export default BookDetails;