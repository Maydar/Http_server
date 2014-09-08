package ru.mail.projects.server;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import ru.mail.projects.connection.Handler;

/*
 * серверная логика
 */
public class Server extends Thread {
	
	private Integer port = new Integer(0);
	private ServerSocket ServerSocket_;
	private Socket socket_;
	
	private ExecutorService threadPool = Executors.newFixedThreadPool(32);
	public Server(int port_){
		this.port = port_;
		try{
			ServerSocket_ = new ServerSocket(port);
			
		}
		catch(IOException e){
			e.printStackTrace();
		}
		System.out.println("server accepted! On port " + port);
		
	}
	
	public void run(){
		while(true){
			try {
				socket_ = ServerSocket_.accept();
				threadPool.submit(new Handler(socket_));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}
