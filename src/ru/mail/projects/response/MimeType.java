package ru.mail.projects.response;

/*
 * перевод MimeTypes в корректный вид
 */
public enum MimeType {
	html("text/html"), css("text/css"), js("application/x-javascript"), jpeg(
			"image/jpeg"), jpg("image/jpeg"), png("image/png"), gif("image/gif"), swf(
			"application/x-shockwave-flash"), def("text/plain");

	
	String contentType;

	private MimeType(String contentType) {
		this.contentType = contentType;
	}

	@Override
	public String toString() {
		return contentType;
	}

}
