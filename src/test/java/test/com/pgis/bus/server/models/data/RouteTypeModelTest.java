package test.com.pgis.bus.server.models.data;

import static org.junit.Assert.*;

import org.junit.Test;

import com.pgis.bus.server.models.data.RouteTypeModel;

public class RouteTypeModelTest {

	@Test
	public void getNameTest() {
		RouteTypeModel model1 = new RouteTypeModel("c_route_metro");
		assertEquals("metro", model1.getName());
		RouteTypeModel model2 = new RouteTypeModel("c_route_tram");
		assertEquals("tram", model2.getName());
		
	}

}
