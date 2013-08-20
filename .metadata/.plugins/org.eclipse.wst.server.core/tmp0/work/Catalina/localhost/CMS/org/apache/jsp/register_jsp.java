package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;
import com.haolei.dao.CompanyNameListDAO;
import com.haolei.dao.DepNameListDAO;
import com.haolei.dao.PostNameListDAO;

public final class register_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\r');
      out.write('\n');

String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\r\n");
      out.write("<html>\r\n");
      out.write("  <head>\r\n");
      out.write("    <base href=\"");
      out.print(basePath);
      out.write("\">\r\n");
      out.write("    \r\n");
      out.write("    <title>用户注册</title>\r\n");
      out.write("    \r\n");
      out.write("\t<meta http-equiv=\"pragma\" content=\"no-cache\">\r\n");
      out.write("\t<meta http-equiv=\"cache-control\" content=\"no-cache\">\r\n");
      out.write("\t<meta http-equiv=\"expires\" content=\"0\">    \r\n");
      out.write("\t<meta http-equiv=\"keywords\" content=\"keyword1,keyword2,keyword3\">\r\n");
      out.write("\t<meta http-equiv=\"description\" content=\"This is my page\">\r\n");
      out.write("\r\n");
      out.write("\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/register.css\">\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"js/jquery-1.8.0.js\"></script>\r\n");
      out.write(" </head>\r\n");
      out.write("<body>\r\n");
      out.write("\r\n");
      out.write("<table border=\"0\" ellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; height: 670px\">\r\n");
      out.write("\t<tr>\r\n");
      out.write("\t\t<td style=\"width: 379px; height: 99px\"></td>\r\n");
      out.write("\t\t<td style=\"width: 660px; height: 99px\"></td>\r\n");
      out.write("\t\t<td style=\"height: 99px; width: 379px;\"></td>\r\n");
      out.write("\t</tr>\r\n");
      out.write("\t<tr>\r\n");
      out.write("\r\n");
      out.write("\t\t<td style=\"height: 238px; width: 379px\">\r\n");
      out.write("\t\t&nbsp;</td>\r\n");
      out.write("\t\t<td style=\"height: 238px; width: 660px\" align=\"left\" valign=\"top\">\r\n");
      out.write("\t\t<form id=\"formregister\" method=\"post\">\r\n");
      out.write("\t\t<table border=\"0\" ellspacing=\"0\" class=\"main-table-style\" style=\"width: 100%; height: 100%\">\r\n");
      out.write("\t\t\t<tr bgcolor=\"#808080\">\r\n");
      out.write("\t\t\t\t<td colspan=\"3\" style=\"height: 54px; text-align: center\" class=\"table-head-style\">\r\n");
      out.write("\t\t\t\t<strong>用 户 注 册</strong></td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td style=\"text-align: center; width: 138px; height: 45px;\" class=\"username-style\">\r\n");
      out.write("\t\t\t\t<strong>用户名：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"username\" id=\"username\" type=\"text\" style=\"width: 159px; height: 25px\"  />\r\n");
      out.write("\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"usernametip\">输入中文姓名</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>密&nbsp;&nbsp; 码：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"password\" id=\"password\" type=\"password\" style=\"width: 159px; height: 25px\"  /></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"passwordtip\">8-16位密码</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>重复输入密码：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"repeatpassword\" id=\"repeatpassword\" type=\"password\" style=\"width: 159px; height: 25px\" /></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"repeatpasswordtip\">&nbsp;</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\">\r\n");
      out.write("\t\t\t\t<strong>性 别：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<strong>\r\n");
      out.write("\t\t\t\t<input class=\"radio-text\" name=\"sex\" value=\"男\" type=\"radio\" /></strong><span class=\"radio-text\"><strong>男&nbsp;&nbsp; \r\n");
      out.write("\t\t\t\t</strong></span><strong>\r\n");
      out.write("\t\t\t\t<input class=\"radio-text\" name=\"sex\" value=\"女\" type=\"radio\" /><span class=\"radio-text\">女</span></strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"sextip\">\r\n");
      out.write("\t\t\t\t&nbsp;</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>联系电话：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"tel\" id=\"tel\" type=\"text\" style=\"width: 159px; height: 25px\"  /></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"teltip\">最多12个字符</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>QQ:</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"qq\" id=\"qq\" type=\"text\" style=\"width: 159px; height: 25px\"  /></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"qqtip\">&nbsp;</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>生日日期：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"brithday\" id=\"brithday\" type=\"text\" style=\"width: 159px; height: 25px\" /></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"brithdaytip\">4位农历日期,如:农历九月六日 为 0906</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>年&nbsp; 龄：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"age\" id=\"age\" type=\"text\" style=\"width: 159px; height: 25px\"  /></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"agetip\">1-100</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>身份证：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t<input name=\"card\" id=\"card\" type=\"text\" style=\"width: 159px; height: 25px\"  /></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"cardtip\">最多19个字符</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>所&nbsp; \r\n");
      out.write("\t\t\t\t属：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t<select name=\"comp\" id=\"comp\" style=\"width: 109px; height: 25px\"  >\r\n");
      out.write("\t\t\t\t\t<option value=\"=请选择=\">=请选择=</option>\r\n");
      out.write("\t\t\t\t\t");

					CompanyNameListDAO companynamelistdao = new CompanyNameListDAO();
					List companynamelist = companynamelistdao.returnCompanyNameList();
					
      out.write("\r\n");
      out.write("\t\t\t\t\t");

						for(int i=0;i<companynamelist.size();i++){
					
      out.write("\r\n");
      out.write("\t\t\t\t\t<option>");
      out.print(companynamelist.get(i) );
      out.write("</option>\r\n");
      out.write("\t\t\t\t\t");
}
      out.write("\r\n");
      out.write("\t\t\t\t\t</select></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"comptip\">选择所属公司</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>部&nbsp; 门：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\" align=\"left\" valign=\"middle\">\r\n");
      out.write("\t\t\t\t\t<select name=\"dep\" id=\"dep\" style=\"width: 109px; height: 25px\" >\r\n");
      out.write("\t\t\t\t\t<option value=\"=请选择=\">=请选择=</option>\r\n");
      out.write("\t\t\t\t\t");

					DepNameListDAO depnamelistdao = new DepNameListDAO();
					List depnamelist = depnamelistdao.returnDepNameList();
					
      out.write("\r\n");
      out.write("\t\t\t\t\t");

						for(int x=0;x<depnamelist.size();x++){
					
      out.write("\r\n");
      out.write("\t\t\t\t\t<option>");
      out.print(depnamelist.get(x) );
      out.write("</option>\r\n");
      out.write("\t\t\t\t\t");
}
      out.write("\r\n");
      out.write("\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"deptip\">选择所在部门</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"tagname-style\" style=\"width: 138px; height: 45px;\"><strong>职&nbsp; 位：</strong></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px; width: 196px\">\r\n");
      out.write("\t\t\t\t<select name=\"post\" id=\"post\" style=\"width: 109px; height: 25px\" onblur=\"postonblur()\">\r\n");
      out.write("\t\t\t\t<option value=\"=请选择=\">=请选择=</option>\r\n");
      out.write("\t\t\t\t");

					PostNameListDAO postnamelistdao = new PostNameListDAO();
					List postNameList = postnamelistdao.returnPostNameList();
					int postNameListLength = postNameList.size();
				
      out.write("\r\n");
      out.write("\t\t\t\t");

					for(int o = 0;o<postNameListLength;o++){
				
      out.write("\r\n");
      out.write("\t\t\t\t<option>");
      out.print(postNameList.get(o));
      out.write("</option>\r\n");
      out.write("\t\t\t\t");
}
      out.write("\r\n");
      out.write("\t\t\t\t</select></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 45px\" class=\"tagtip-style\" id=\"posttip\">选择职位</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"td-font-style\" style=\"width: 138px; height: 88px;\"></td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 88px; width: 196px\"><span>&nbsp;<input name=\"xieyi\" id=\"xieyi\" type=\"checkbox\" />\t\t\t\t\r\n");
      out.write("\t\t\t\t<span class=\"style9\">同意</span><a href=\"xieyi.html\" target=\"_blank\"><span class=\"style9\">用户协议</span></a><span class=\"style9\">&nbsp;\r\n");
      out.write("\t\t\t\t</span>\t\t\t\t</span><br/><br/>\r\n");
      out.write("\t\t\t\t\t<input name=\"regist\" id=\"regbut\" type=\"button\" value=\"注  册\" style=\"width: 103px; height: 45px\"/>\t</td>\r\n");
      out.write("\t\t\t\t<td style=\"height: 88px\" valign=\"bottom\">&nbsp;</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"td-font-style\" style=\"height: 37px;\" colspan=\"3\" bgcolor=\"#C0C0C0\">\r\n");
      out.write("\t\t<span style=\"color: rgb(81, 81, 81); font-family: Arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; display: inline !important; float: none;\">\r\n");
      out.write("\t\tCopyright ©&nbsp; 2013 zyeeda. All Rights Reserved</span></td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t</table>\r\n");
      out.write("\t\t</form>\r\n");
      out.write("\t\t</td>\r\n");
      out.write("\t\t<td style=\"height: 238px; width: 379px;\"></td>\r\n");
      out.write("\t</tr>\r\n");
      out.write("\t<tr>\r\n");
      out.write("\t\t<td style=\"width: 379px; height: 84px;\"></td>\r\n");
      out.write("\t\t<td style=\"width: 660px; height: 84px;\"></td>\r\n");
      out.write("\t\t<td style=\"height: 84px; width: 379px;\"></td>\r\n");
      out.write("\t</tr>\r\n");
      out.write("</table>\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\" src=\"js/register.js\"></script>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else log(t.getMessage(), t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
