package com.haolei.servlet.ajaxservlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.haolei.dao.ajaxdao.UpdataPersonInfoQueryCardDAO;
import com.haolei.entity.Person;

public class UpdataPersonInfoQueryCardServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		PrintWriter pr = response.getWriter();
		UpdataPersonInfoQueryCardDAO updatapersoninfoquerycarddao = new UpdataPersonInfoQueryCardDAO();
		Person person = new Person();
		person.setCard(request.getParameter("card"));
		person.setUuid(request.getParameter("uuid"));
		boolean o = updatapersoninfoquerycarddao.queryCard(person);
		if(o){
			JSONObject js = new JSONObject();
			js.put("status", "yes");
			pr.print(js);			
		}else{
			JSONObject js = new JSONObject();
			js.put("status", "no");
			pr.print(js);			
		}
		pr.flush();
		pr.close();
	}
}
