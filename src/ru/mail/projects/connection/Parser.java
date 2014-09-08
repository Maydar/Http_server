package ru.mail.projects.connection;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Scanner;

/*
 * парсер урла
 */
public class Parser {
	
	Parser(InputStream stream){
		scan = new Scanner(stream);
	}
	
	private Scanner scan;
	private String url = "";
	private String method= "";
	private String version = "";
	

	public void parseURL(){
		while(scan.hasNextLine()){		
			String line;
			System.out.println(line = scan.nextLine());
			if(line.matches("^POST .* HTTP/1.1$")
					| line.matches("^POST .* HTTP/1.0$")){
				String[] array = line.split(" +");
				setMethod(array[0]);
				setVersion(array[2]);
				setUrl("");
				break;
			}
			if (line.matches("^GET .* HTTP/1.1$")
					| line.matches("^GET .* HTTP/1.0$") 
					| line.matches("^HEAD .* HTTP/1.1$")
					| line.matches("^HEAD .* HTTP/1.0$")){
				String[] array = line.split(" +");
				setMethod(array[0]);
				
				
				if (array.length == 3 && !array[1].equals(" ")){
					setVersion(array[2]);
					try {
						if(array[1].contains("?")){
							String [] aString = array[1].split("\\?");
							System.out.println(aString[0]);
							setUrl(URLDecoder.decode(aString[0],"utf8"));
						}
						else {
							setUrl(URLDecoder.decode(array[1],"utf8"));
						}
						
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}	
				if(array.length > 3) {
					StringBuilder urlString = new StringBuilder();
					setVersion(array[array.length - 1]);
					for(int i = 1; i < array.length - 2; i++) {
						urlString.append(array[i]).append(" ");
					}
					urlString.append(array[array.length - 2]);
					try {
						System.out.println(URLDecoder.decode(urlString.toString(),"utf8"));
					}
					catch (UnsupportedEncodingException e1) {
						e1.printStackTrace();
					}
					try {
						setUrl(URLDecoder.decode(urlString.toString(),"utf8"));
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
			}
			
			
			if (line.matches("^$"))
				break;
		}
		
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getMethod() {
		return method;
	}
	
	public void setMethod(String method) {
		this.method = method;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

}
