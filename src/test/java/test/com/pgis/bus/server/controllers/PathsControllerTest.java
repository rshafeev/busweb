package test.com.pgis.bus.server.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.data.orm.type.Path_t;
import com.pgis.bus.data.params.FindPathsParams;
import com.pgis.bus.data.repositories.orm.IPathsRepository;
import com.pgis.bus.data.repositories.orm.IRoutesRepository;
import com.pgis.bus.data.service.IDataBaseService;
import com.pgis.bus.data.service.IDataModelsService;
import com.pgis.bus.net.request.FindPathsRequest;
import com.pgis.bus.server.controllers.HomeController;
import com.pgis.bus.server.controllers.PathsController;
import com.pgis.bus.server.models.request.LoadPathOptions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.SQLException;
import java.util.ArrayList;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.server.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.server.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.server.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.server.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.server.setup.MockMvcBuilders.standaloneSetup;


@RunWith(SpringJUnit4ClassRunner.class)
public class PathsControllerTest extends ControllerTestConf {
    private static final Logger log = LoggerFactory.getLogger(PathsControllerTest.class);
    private PathsController controller = null;

    @Before
    public void before() throws SQLException {

        controller = new PathsController();
        this.mockMvc = standaloneSetup(controller).build();

    }

    @Test
    public void testGet() throws Exception {
        log.info("testGet() ");

        String jsonInputModel = "{\"p1\":{\"lat\":50.03575315324751,\"lon\":36.22020721435547},\"p2\":{\"lat\":50.02604931687993,\"lon\":36.33625030517578},\"routeParts\":[{\"id\":514,\"startInd\":11,\"finishInd\":26}]}";
        ObjectMapper json = new ObjectMapper();
        LoadPathOptions requestModel = json.readValue(jsonInputModel, LoadPathOptions.class);
        assertEquals(1, requestModel.getRouteParts().length);

        // Mocking
        IDataModelsService dbModelsService = Mockito.mock(IDataModelsService.class);
        IDataBaseService dbService = Mockito.mock(IDataBaseService.class);
        IPathsRepository pathsRepository = Mockito.mock(IPathsRepository.class);
        doReturn(pathsRepository).when(dbService).Paths();
        doReturn(new ArrayList<Path_t>()).when(pathsRepository).getGeoDataByRoutePart(Mockito.any(RoutePart.class), Mockito.anyString());
        controller.setDbService(dbService);
        controller.setModelsService(dbModelsService);

        // Testing
        MockHttpServletResponse response = this.mockMvc
                .perform(
                        post("/paths/get.json").contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
                                .body(jsonInputModel.getBytes())).andDo(print()).andReturn()
                .getResponse();

    }

    @Test
    public void testFind() throws Exception {
        log.info("testFind() ");

        String jsonInputModel = "{\"cityID\":1,\"p1\":{\"lat\":50.05030523150393,\"lon\":36.20613098144531}," +
                "\"p2\":{\"lat\":50.02560818681963,\"lon\":36.33659362792969},\"outTime\":{\"dayID\":\"Sunday\",\"timeStartSecs\":36600}," +
                "\"algStrategy\":\"opt\",\"routeTypes\":[{\"id\":\"metro\",\"discount\":1},{\"id\":\"bus\",\"discount\":1}],\"transitions\":true}";
        ObjectMapper json = new ObjectMapper();
        FindPathsRequest responeModel = json.readValue(jsonInputModel, FindPathsRequest.class);
        assertEquals(1, responeModel.getCityID());

        // Mocking
        IDataModelsService dbModelsService = Mockito.mock(IDataModelsService.class);
        IDataBaseService dbService = Mockito.mock(IDataBaseService.class);
        IPathsRepository pathsRepository = Mockito.mock(IPathsRepository.class);
        doReturn(pathsRepository).when(dbService).Paths();
        doReturn(new ArrayList<Path_t>()).when(pathsRepository).findShortestPaths(Mockito.any(FindPathsParams.class));
        controller.setDbService(dbService);
        controller.setModelsService(dbModelsService);

        // Testing
        MockHttpServletResponse response = this.mockMvc
                .perform(
                        post("/paths/find.json").contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
                                .body(jsonInputModel.getBytes())).andDo(print()).andReturn()
                .getResponse();

    }
}
