package test;

import static org.junit.Assert.*;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.postgresql.util.PGInterval;

import com.pgis.bus.data.orm.type.Path_t;
import com.pgis.bus.net.models.path.PathModel;
import com.pgis.bus.server.helpers.PathsModelConverter;

public class PathsModelConverterTest {

	Path_t[] data1 = null;
	
	@Before
	public void init() throws SQLException {
		// Приготовим данные
		data1 = new Path_t[5];
		Path_t p = new Path_t();
		p.path_id = 1;
		p.index = 1;
		p.move_time = new PGInterval(0, 0, 0, 0, 0, 57);
		p.distance = 80.159975;
		data1[0] = p;
		
		p = new Path_t();
		p.path_id = 1;
		p.index = 2;
		p.direct_route_id = 504;
		p.route_type = "c_route_metro";
		p.relation_index_a = 0;
		p.relation_index_b = 7;
		p.route_name = "Салтовская линия";
		p.station_name_a = "Исторический музей";
		p.station_name_b = "Героев труда";
		p.move_time = new PGInterval(0, 0, 0, 0, 0, 57);
		p.frequency = new PGInterval(0, 0, 0, 0, 0, 57);
		p.wait_time = new PGInterval(0, 0, 0, 0, 3, 0);
		p.cost = 2.5;
		p.distance = 2000;
		data1[1] = p;
		
		p = new Path_t();
		p.path_id = 1;
		p.index = 3;
		p.move_time = new PGInterval(0, 0, 0, 0, 0, 33);
		p.distance = 50;
		data1[2] = p;
		
		p = new Path_t();
		p.path_id = 1;
		p.index = 4;
		p.direct_route_id = 507;
		p.route_type = "c_route_metro";
		p.relation_index_a = 0;
		p.relation_index_b = 0;
		p.route_name = "41э";
		p.station_name_a = "Героев труда";
		p.station_name_b = "МЖК Интернационалист";
		p.move_time = new PGInterval(0, 0, 0, 0, 0, 57);
		p.frequency = new PGInterval(0, 0, 0, 0, 0, 57);
		p.wait_time = new PGInterval(0, 0, 0, 0, 3, 0);
		p.cost = 2.5;
		p.distance = 480.159975;
		data1[3] = p;

		p = new Path_t();
		p.path_id = 1;
		p.index = 5;
		p.move_time = new PGInterval(0, 0, 0, 0, 0, 57);
		p.distance = 10;
		data1[4] = p;
	}
	
	
	@Test
	public void makePathModelTest(){
		List<Path_t> elems = Arrays.asList(this.data1);
		
		PathModel path = PathsModelConverter.makePathModel(elems);
		
		assertNotNull(path);
		assertEquals(1,path.getTransitions().size());
		assertEquals(2,path.getRoutes().size());
		
	}
	
	
	
}
