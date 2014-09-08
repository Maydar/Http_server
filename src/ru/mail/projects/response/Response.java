package ru.mail.projects.response;

import java.sql.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/*
 * Класс представляющий заголовки ответа
 */
public class Response {
	private String responseCode = new String();
	private byte[] content;

	Header date = new Header("Date",
			new Date(System.currentTimeMillis()).toString());
	Header server = new Header("Server", "myServer");
	Header connection = new Header("Connection", "close");
	Header contentLength;
	Header contentType;

	public Response() {

	}

	public void setContent(byte[] content, String method) {
		if (method.equals("HEAD")) {
			this.content = "".getBytes();
		}
		else {
			this.content = content;
		}
		
		contentLength = new Header("Content-Length", String.valueOf(content.length));
	}

	public byte[] getContent() {
		return content;
	}

	public void setContentType(String url) {

		Pattern p = Pattern.compile(".*\\.(?<mime>[a-zA-Z]{2,4})");
		Matcher m = p.matcher(url);

		if (m.find()) {
			MimeType mime;
			try {
				mime = MimeType.valueOf(m.group("mime").toLowerCase());
			} catch (IllegalArgumentException e) {
				mime = MimeType.def;
			}
			contentType = new Header("Content-Type", mime.toString());

		}
		else
		{
			MimeType mime;
			mime = MimeType.def;
			contentType = new Header("Content-Type", mime.toString());
		}

	}
	
	public void setResponseCode(ResponseCodeInfo respCodeInfo, String version) {
		switch (respCodeInfo) {
		case Ok:
			responseCode = version + " 200 OK\r\n";
			break;
		case NotFound:
			responseCode = version + " 404 Not Found\r\n";
			break;
		case Forbidden:
			responseCode = version + " 403 Forbidden\r\n";
			break;
		default:
			responseCode = version + " 405 Not Allowed\r\n";
			break;
		}

	}


/*
 * создание списка заголовков (List of headers) и использование метода toString для
 * перевода списка в строку привело к запятой и дублированию заголовков
 * => прямой перевод заголовка по отдельности в строку
 */
	public byte[] getResponse() {
	
		System.out.println(responseCode 
				+ date.toString()
				+ server.toString()
				+ contentType.toString()
				+ contentLength.toString()
				+ connection.toString()
				+ "\r\n");
		byte[] response = (responseCode 
				+ date.toString()
				+ server.toString()
				+ contentType.toString()
				+ contentLength.toString()
				+ connection.toString()
				+ "\r\n").getBytes();
		
		return response;

	}
}
