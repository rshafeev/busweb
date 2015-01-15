package test.com.pgis.bus.server.controllers;

import static org.springframework.test.web.server.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.server.result.MockMvcResultMatchers.redirectedUrl;

import javax.servlet.http.HttpSession;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.server.MockMvc;
import org.springframework.test.web.server.MvcResult;
import org.springframework.test.web.server.ResultMatcher;

@ContextConfiguration(value = { "file:WebContent/WEB-INF/springapp-servlet.xml" })
public class ControllerTestConf {

	protected MockMvc mockMvc = null;

}
