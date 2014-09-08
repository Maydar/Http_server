package ru.mail.projects.connection;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;
import org.apache.commons.io.FileUtils;
import ru.mail.projects.response.Response;
import ru.mail.projects.response.ResponseCodeInfo;

/*
 * обработчик соединения
 */
public class Handler implements Runnable {

	public static String DOCUMENT_ROOT = "/home/maydar/Javaprojects/Http_Server";
	private Socket socket_;
	private Parser parser_;
	private Response response_;
	
	public Handler(Socket socket_){
		this.socket_ = socket_;
	}
	
	
	@Override
	public void run() {
			try {
				parser_ = new Parser(socket_.getInputStream());
				response_ = buildResponse(parser_);
			
				OutputStream oStream;
				oStream = socket_.getOutputStream();
				OutputStream out = new BufferedOutputStream(oStream);
					
				out.write(response_.getResponse());
				out.write(response_.getContent());
				out.close();
				oStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
	
	}
	
	
	
	
/*
 * подготовка данных к отправке ответа клиенту
 */
	public Response buildResponse(Parser parser_){
		Response response = new Response();
		String url;
		byte[] content;
		parser_.parseURL();
		url = parser_.getUrl();
		
		try{
			if(url.length() == 1){	
				content = "It Works!!".getBytes();
				response.setContent(content, parser_.getMethod());
				response.setContentType(url);
				response.setResponseCode(ResponseCodeInfo.Ok, parser_.getVersion());
							
			}
			else
				if(url.length() == 0){
					content = "not Allowed".getBytes();
					response.setContent(content, parser_.getMethod());
					response.setContentType(url);
					response.setResponseCode(ResponseCodeInfo.NotAllowed, parser_.getVersion());		
				}
				else
					if(url.contains("../")){
						content = "Forbidden".getBytes();
						response.setContent(content, parser_.getMethod());
						response.setContentType(url);
						response.setResponseCode(ResponseCodeInfo.Forbidden, parser_.getVersion());
							
					} 
					else
						if(new File(DOCUMENT_ROOT
											+ url).isDirectory())
						{
							if(new File(DOCUMENT_ROOT
									+ url + "index.html").exists()){
								content = FileUtils.readFileToByteArray(new File(DOCUMENT_ROOT
											+ url + "index.html"));
								response.setContent(content, parser_.getMethod());
								response.setContentType(url);
								response.setResponseCode(ResponseCodeInfo.Ok, parser_.getVersion());	
							}
							else {
								content = "Forbidden".getBytes();
								response.setContent(content, parser_.getMethod());
								response.setContentType(url);
								response.setResponseCode(ResponseCodeInfo.Forbidden, parser_.getVersion());
								
							}
										
						}
						else {
							content = FileUtils.readFileToByteArray(new File(DOCUMENT_ROOT
									+ url));
							response.setContent(content, parser_.getMethod());
							response.setContentType(url);
							response.setResponseCode(ResponseCodeInfo.Ok, parser_.getVersion());	
						}
			}
			catch(IOException f){
				content = "404 Not Found".getBytes();
				response.setContent(content, parser_.getMethod());
				response.setContentType(url);
				response.setResponseCode(ResponseCodeInfo.NotFound, parser_.getVersion());
			}
		
		
		
		return response;
	}
	


}
