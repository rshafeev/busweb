package com.pgis.bus.server.models;

import java.util.ArrayList;

public class LinkModel {
    private String url;
    private String label;
    private int code;
    private boolean isSelected;
    ArrayList<LinkModel> childLinks;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public boolean isSelected() {
        return isSelected;
    }

    public void setSelected(boolean isSelected) {
        this.isSelected = isSelected;
    }

}