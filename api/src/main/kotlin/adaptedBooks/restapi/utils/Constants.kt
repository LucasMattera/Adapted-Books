package adaptedBooks.restapi.utils

class Constants {
    companion object{
        private const val URL_API_BASE = "/api"
        private const val URL_API_VERSION = "/v1"
        private const val URL_BASE = URL_API_BASE + URL_API_VERSION

        //Base API endpoint para libros
        const val URL_BASE_LIBROS = "$URL_BASE/libros"
    }
}