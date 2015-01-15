package com.pgis.bus.server.controllers;

import java.util.Collection;
import java.util.Locale;

import com.pgis.bus.data.models.RouteGeoData;
import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.server.models.request.LoadPathOptions;
import com.pgis.bus.server.models.response.GeomRouteModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pgis.bus.data.helpers.LocaleHelper;
import com.pgis.bus.data.orm.type.Path_t;
import com.pgis.bus.data.params.FindPathsParams;
import com.pgis.bus.data.service.IDataBaseService;
import com.pgis.bus.data.service.IDataModelsService;
import com.pgis.bus.net.models.LangEnumModel;
import com.pgis.bus.net.models.path.PathsModel;
import com.pgis.bus.net.request.FindPathsRequest;
import com.pgis.bus.net.request.data.RouteTypeDiscount;
import com.pgis.bus.server.helpers.PathsModelConverter;
import com.pgis.bus.server.models.response.ErrorModel;
import com.pgis.bus.server.models.response.GeomPathModel;

@Controller
@RequestMapping(value = "paths/")
public class PathsController extends BaseController {
    private static final Logger log = LoggerFactory.getLogger(PathsController.class);

    public PathsController() {
        super();
    }

    public PathsController(IDataBaseService dbService, IDataModelsService modelsService) {
        super(dbService, modelsService);
    }

    private PathsModel findShortestPaths(FindPathsRequest request) throws Exception {
        if (request == null)
            throw new Exception("Options error");
        // get ways
        long findTime = System.currentTimeMillis();
        FindPathsParams params = new FindPathsParams(request);
        Collection<Path_t> ways = super.getDbService().Paths().findShortestPaths(params);
        log.debug("Ways elems: " + ways.size());
        findTime = System.currentTimeMillis() - findTime;
        PathsModel model = PathsModelConverter.makePathsModel(ways);
        model.setFindTime(findTime);
        return model;
    }

    @RequestMapping(value = "get.json", method = RequestMethod.POST)
    @ResponseBody
    public Object get(@RequestBody LoadPathOptions options) {
        try {
            log.debug("get.json");
            Locale locale = LocaleContextHolder.getLocale();
            String lang_id = LocaleHelper.getDataBaseLanguage(locale);
            GeomPathModel model = new GeomPathModel();
            RoutePart[] parts = options.getRouteParts();
            for (int i = 0; i < parts.length; i++) {
                Collection<RouteGeoData> routeData = super.getDbService().Paths().getGeoDataByRoutePart(parts[i],lang_id);
                GeomRouteModel routeModel = new GeomRouteModel(parts[i], routeData);
                model.addRouteGeoDataModel(routeModel);
            }
            super.getDbService().commit();
            return model;
        } catch (Exception e) {
            return new ErrorModel(e);
        }
    }

    @RequestMapping(value = "find.json", method = RequestMethod.POST)
    @ResponseBody
    public Object find(@RequestBody FindPathsRequest options) {
        try {
            log.debug("find.json");
            if (options == null)
                throw new Exception("Options error");
            for (RouteTypeDiscount routeType : options.getRouteTypes()) {
                //routeType.setId("c_route_" + routeType.getId());
            }

            // Получим объект с информацией о текущей локали
            Locale locale = LocaleContextHolder.getLocale();
            options.setMaxDistance(500);
            options.setLangID(LangEnumModel.valueOf(LocaleHelper.getLangID(locale)));
            log.debug(options.toString());
            // get paths
            PathsModel model = findShortestPaths(options);
            super.getDbService().commit();
            return model;

        } catch (Exception e) {
            super.getDbService().rollback();
            return new ErrorModel(e);
        }
    }

}
