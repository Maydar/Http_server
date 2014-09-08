package ru.mail.projects.response;

enum MimeTypes{
	imageJPEG,
	imagePNG,
	textHTML,
	textHTM,
	textPLAIN
}

/*
 * Класс, реализующий заголовок
 */
public class Header {
	
	public Header(String name, String value){
		this.name = name;
		this.value = value;
	}
	
	private	String name;
	private String value;
	
	public String getName(){
		return name;
	}
	
	public Object getValue(){
		return value;
	}
	
	public String toString(){
		String result = name + ": " + value.toString() + "\r\n";
		return result;
		
	}
}
