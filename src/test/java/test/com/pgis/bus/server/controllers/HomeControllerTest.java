package test.com.pgis.bus.server.controllers;

import static org.springframework.test.web.server.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.server.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.server.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.server.setup.MockMvcBuilders.standaloneSetup;

import java.sql.SQLException;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pgis.bus.server.controllers.HomeController;
import com.pgis.bus.server.controllers.InfoController;

@RunWith(SpringJUnit4ClassRunner.class)
public class HomeControllerTest extends ControllerTestConf {
	private static final Logger log = LoggerFactory.getLogger(HomeControllerTest.class);
	private HomeController controller = null;

	@Before
	public void before() throws SQLException {

		controller = new HomeController();
		this.mockMvc = standaloneSetup(controller).build();

	}

	@Test
	public void testHomePage() throws Exception {
		log.info("testHomePage() ");

		MockHttpServletResponse response = this.mockMvc.perform(get("/")).andDo(print())
				.andExpect(status().isOk()).andReturn().getResponse();
		
		/*
		{"cityID":1,"p1":{"lat":50.05030523150393,"lon":36.20613098144531},"p2":{"lat":50.02560818681963,"lon":36.33659362792969},"outTime":{"dayID":"c_Sunday","timeStartSecs":36600},"algStrategy":"c_opt","routeTypes":[{"id":"metro","discount":1},{"id":"bus","discount":1}],"isTransitions":true}
		* * * */
	}
}
