package com.tcc.api;

import java.util.Random;

public class teste {
	public static final int ARRAY_LENGTH = 100;

	public static void main(String args[]) {
		byte[] byteArray = new byte[ARRAY_LENGTH];
		new Random(System.currentTimeMillis()).nextBytes(byteArray);
		// get fisrt element
		System.out.println("Random byte: " + byteArray);
	}
}
