package com.tcc.api.response;

import java.util.ArrayList;
import java.util.List;

public class Response<T> {
	
	private T data;
	
	private List<String> errors;
	
	private List<T> datas;

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public List<String> getErrors() {
		if(this.errors == null) {
			this.errors = new ArrayList<String>();
		}
		return errors;
	}

	public void setErrors(List<String> errors) {
		this.errors = errors;
	}
	
	public List<T> getDatas() {
		if(this.datas == null) {
			this.datas = new ArrayList<T>();
		}
		return datas;
	}

	public void setDatas(List<T> datas) {
		this.datas = datas;
	}
}
