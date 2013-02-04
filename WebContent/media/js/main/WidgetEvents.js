/*
 * WidgetEvents.js : event functions of the widgets
 */
function on_selectWay(way_ind, routeParts_arr) {
    var mainPage = getMainPage();
    mainPage.getMainPageData().setCurrentWay(way_ind);
    var markerA = mainPage.getGoogleMap().getMarkers().getMarkerA();
    var markerB = mainPage.getGoogleMap().getMarkers().getMarkerB();

    var routeParts = [];
    for (var i = 0; i < routeParts_arr.length; i++) {
        routeParts.push({
            directRouteID : routeParts_arr[i][0],
            indexStart : routeParts_arr[i][1],
            indexFinish : routeParts_arr[i][2]
        });
    }
    var options = {
        routeParts : routeParts,
        pointA : {
            x : markerA.getPosition().lat(),
            y : markerA.getPosition().lng()
        },
        pointB : {
            x : markerB.getPosition().lat(),
            y : markerB.getPosition().lng()
        }
    };
    // console.log(options);
    $('#ajax_js').load(contextPath + "ways/load_way.json", {
        data : $.toJSON(options)
    });

    for (var i = 0; i < mainPage.getMainPageData().getWaysCount(); i++) {
        var name = "#" + "res_text_" + i;
        var num = "#" + "numb_" + i;
        var head = "#" + "result_numb_" + i;
        var b = $.browser;
        var v = parseFloat(b.version);
        var cssResNumbActiveNewBr = {
            'background-color' : '#5cb1ea',
            'height' : '70px',
            'width' : '354px',
            'border-radius' : '10px',
            'margin-left' : '6px',
            'margin-top' : '0px',
            'margin-bottom' : '10px',
            'cursor' : 'pointer',
            'padding-top' : '5px',
            'box-shadow' : 'inset 0 0 10px rgba(0, 0, 0, 0.6)'
        };
        var cssResNumbDesActiveNewBr = {
            'background-color' : '#7fd0fc',
            'height' : '70px',
            'width' : '354px',
            'border-radius' : '10px',
            'margin-left' : '6px',
            'margin-top' : '5px',
            'margin-bottom' : '10px',
            'cursor' : 'pointer',
            'padding-top' : '5px',
            'box-shadow' : 'inset 0 0 10px rgba(0, 0, 0, 0.6)'
        };

        var cssResNumbActiveOldBr = {
            'background-image' : 'url("' + getContextPath() + 'media/css/images/ways.png' + '")',
            'height' : '70px',
            'width' : '354px',
            'margin-left' : '6px',
            'margin-top' : '5px',
            'margin-bottom' : '10px',
            'cursor' : 'pointer',
            'padding-top' : '5px'
        };
        var cssResNumbDesActiveOldBr = {
            'background-image' : 'url("' + getContextPath() + 'media/css/images/waysdisact.png' + '")',
            'height' : '70px',
            'width' : '354px',
            'margin-left' : '6px',
            'margin-top' : '5px',
            'margin-bottom' : '10px',
            'cursor' : 'pointer',
            'padding-top' : '5px'
        };

        var cssNumbActiveNewBr = {
            'background-color' : '#3a6fb0',
            'height' : '38px',
            'width' : '38px',
            'border-radius' : '20px',
            'box-shadow' : 'inset 0 0 30px rgba(0, 0, 0, 0.6)',
            'margin-left' : '5px',
            'text-align' : 'center',
            'vertical-align' : 'baseline',
            'line-height' : '35px',
            'display' : 'inline-block'
        };
        var cssNumbDesActiveNewBr = {
            'background-color' : '#4093ce',
            'height' : '38px',
            'width' : '38px',
            'border-radius' : '20px',
            'box-shadow' : 'inset 0 0 20px #2b5cb0',
            'margin-left' : '5px',
            'text-align' : 'center',
            'vertical-align' : 'baseline',
            'line-height' : '35px',
            'display' : 'inline-block'
        };

        var cssNumbActiveOldBr = {
            'background-image' : 'url("' + getContextPath() + 'media/css/images/num1.png' + '")',
            'height' : '38px',
            'width' : '38px',
            'border-radius' : '20px',
            'margin-left' : '5px',
            'text-align' : 'center',
            'vertical-align' : 'baseline',
            'line-height' : '35px',
            'display' : 'inline-block'
        };
        var cssNumbDesActiveOldBr = {
            'background-image' : 'url("' + getContextPath() + 'media/css/images/num2.png' + '")',
            'height' : '38px',
            'width' : '38px',
            'border-radius' : '20px',
            'margin-left' : '5px',
            'text-align' : 'center',
            'vertical-align' : 'baseline',
            'line-height' : '35px',
            'display' : 'inline-block'
        };
        if (i == way_ind) {
            if (b.mozilla && v < "10") {
                $(head).css(cssResNumbActiveOldBr);
                $(num).css(cssNumbActiveOldBr);
                $(name).show();
            } else {
                $(head).css(cssResNumbActiveNewBr);
                $(num).css(cssNumbActiveNewBr);
                $(name).show();
            }

        } else {
            $(name).hide();
            if (b.mozilla && v < "10") {
                $(head).css(cssResNumbDesActiveOldBr);
                $(num).css(cssNumbDesActiveOldBr);
            } else {
                $(head).css(cssResNumbDesActiveNewBr);
                $(num).css(cssNumbDesActiveNewBr);
            }
        }
    }
    $('#panel_scrollbar').tinyscrollbar_update(85 * way_ind);
    //$('#panel_scrollbar').setTop(100);

};

function on_btn_calculate_click() {
    if (getMainPage().rightPanelVisible == false)
        on_right_panel_show();
    var el = document.getElementById('ways_panel');
    var findWaysOptions = getMainPage().createFindWaysOptionsModel();
    if (findWaysOptions == null)
        return;
    el.style.display = 'block';
    var loadGif = contextPath + "media/css/images/load.gif";
    $('#panel_data').html("<div class='loader_text'><img src='" + loadGif + "'/></div>");
    $('#panel_scrollbar').tinyscrollbar_update();
    $('#panel_data').load(getContextPath() + "ways/find.json", {
        data : $.toJSON(findWaysOptions)
    });
    
   


}

function on_change_selectbox_city() {
    var nameFromCombo = $("#selectbox_city").val();
    document.location.href = getContextPath() + 'home/' + nameFromCombo;
}

function on_right_panel_show() {

    if (getMainPage().rightPanelVisible == false) {
        $("#map_canvas").width('68%').css({
            cursor : "auto",
            backgroundColor : "rgb(226, 226, 226)"
        });
        document.img.src = getContextPath() + 'media/css/images/arrow_right.png';
        getMainPage().rightPanelVisible = true;
    } else {
        $("#map_canvas").width('98.5%').css({
            cursor : "auto",
            backgroundColor : "rgb(226, 226, 226)"
        });
        document.img.src = getContextPath() + 'media/css/images/arrow_left.png';

        var map = getMainPage().getGoogleMap();
        if (map != null) {
            google.maps.event.trigger(map.getMapObj(), 'resize');
        }

        getMainPage().rightPanelVisible = false;
    }
}
