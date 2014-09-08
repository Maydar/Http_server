package ru.mail.projects.main;



import ru.mail.projects.server.Server;

public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Server server = new Server(8080);
		server.start();
	}

}
