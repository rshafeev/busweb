package test;

import static org.junit.Assert.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.postgresql.util.PGInterval;

import com.pgis.bus.data.orm.WayElem;
import com.pgis.bus.net.models.path.PathModel;
import com.pgis.bus.server.helpers.PathsModelConverter;

public class PathsModelConverterTest {

	WayElem[] data = new WayElem[8];
	
	@Before
	public void init() throws SQLException {
		// Приготовим данные

		WayElem e1 = new WayElem();
		e1.path_id = 0;
		e1.index = 2;
		e1.direct_route_id = 504;
		e1.route_type = "c_route_metro";
		e1.relation_index = 0;
		e1.route_name = "Салтовская линия";
		e1.station_name = "Исторический музей";
		e1.move_time = new PGInterval(0, 0, 0, 0, 0, 57);
		e1.wait_time = new PGInterval(0, 0, 0, 0, 3, 0);
		e1.cost = 2.5;
		e1.distance = 80.159975;
		data[0] = e1;
		WayElem e2 = new WayElem();
		e2.path_id = 0;
		e2.index = 9;
		e2.direct_route_id = 504;
		e2.route_type = "c_route_metro";
		e2.relation_index = 7;
		e2.route_name = "Салтовская линия";
		e2.station_name = "Героев труда";
		e2.move_time = new PGInterval(0, 0, 0, 0, 18, 47);
		e2.wait_time = new PGInterval(0, 0, 0, 0, 3, 0);
		e2.cost = 0;
		e2.distance = 13091.701327;
		data[1] = e2;

		WayElem e3 = new WayElem();
		e3.path_id = 0;
		e3.index = 10000;
		e3.direct_route_id = null;
		e3.route_type = null;
		e3.relation_index = null;
		e3.route_name = null;
		e3.station_name = null;
		e3.move_time = new PGInterval(0, 0, 0, 0, 0, 24);
		e3.wait_time = null;
		e3.cost = 0;
		e3.distance = 34.053239;
		data[2] = e3;

		WayElem e4 = new WayElem();
		e4.path_id = 1;
		e4.index = 12;
		e4.direct_route_id = 511;
		e4.route_type = "c_route_bus";
		e4.relation_index = 0;
		e4.route_name = "88э";
		e4.station_name = "пл. Конституции";
		e4.move_time = new PGInterval(0, 0, 0, 0, 1, 48);
		e4.wait_time = new PGInterval(0, 0, 0, 0, 5, 0);
		e4.cost = 3;
		e4.distance = 150.382558;
		data[3] = e4;

		WayElem e5 = new WayElem();
		e5.path_id = 1;
		e5.index = 14;
		e5.direct_route_id = 511;
		e5.route_type = "c_route_bus";
		e5.relation_index = 2;
		e5.route_name = "88э";
		e5.station_name = "ст. м. Университет";
		e5.move_time = new PGInterval(0, 0, 0, 0, 2, 15);
		e5.wait_time = new PGInterval(0, 0, 0, 0, 5, 0);
		e5.cost = 0;
		e5.distance = 1658.252911;
		data[4] = e5;

		WayElem e6 = new WayElem();
		e6.path_id = 1;
		e6.index = 15;
		e6.direct_route_id = 504;
		e6.route_type = "c_route_metro";
		e6.relation_index = 1;
		e6.route_name = "Салтовская линия";
		e6.station_name = "Университет";
		e6.move_time = new PGInterval(0, 0, 0, 0, 2, 17);
		e6.wait_time = new PGInterval(0, 0, 0, 0, 3, 0);
		e6.cost = 2.5;
		e6.distance = 191.398702;
		data[5] = e6;

		WayElem e7 = new WayElem();
		e7.path_id = 1;
		e7.index = 21;
		e7.direct_route_id = 504;
		e7.route_type = "c_route_metro";
		e7.relation_index = 7;
		e7.route_name = "Салтовская линия";
		e7.station_name = "Героев труда";
		e7.move_time = new PGInterval(0, 0, 0, 0, 17, 10);
		e7.wait_time = new PGInterval(0, 0, 0, 0, 3, 0);
		e7.cost = 0;
		e7.distance = 12007.459707;
		data[6] = e7;

		WayElem e8 = new WayElem();
		e8.path_id = 1;
		e8.index = 10000;
		e8.direct_route_id = null;
		e8.route_type = null;
		e8.relation_index = null;
		e8.route_name = null;
		e8.station_name = null;
		e8.move_time = new PGInterval(0, 0, 0, 0, 0, 24);
		e8.wait_time = null;
		e8.cost = 0;
		e8.distance = 34.053239;
		data[7] = e8;

	}
	
	
	@Test
	public void makePathModel(){
		List<WayElem> elems = Arrays.asList(this.data);
		
		PathModel path = PathsModelConverter.makePathModel(elems);
		
		
	}
	
	
	
}
