package test.com.pgis.bus.server.models.response;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Locale;

import org.junit.Test;

import com.pgis.bus.data.orm.DirectRoute;
import com.pgis.bus.data.orm.Route;
import com.pgis.bus.data.orm.RouteRelation;
import com.pgis.bus.server.models.response.RouteModel;

public class RouteModelTest {

	@Test
	public void test() {
		DirectRoute directWay = new DirectRoute();
		directWay.setRoute_relations(new ArrayList<RouteRelation>());
		
		DirectRoute reverseWay = new DirectRoute();
		reverseWay.setRoute_relations(new ArrayList<RouteRelation>());
		Route r = new Route();
		r.setCost(2.0);
		r.setCity_id(1);
		r.setName_key(10);
		r.setId(1);
		r.setDirectRouteWay(directWay);
		r.setReverseRouteWay(reverseWay);
		Locale locale = new Locale("ru");
		
		RouteModel route = new RouteModel(r,locale);
		assertNotNull(route);
	}

}
