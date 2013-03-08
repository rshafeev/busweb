package com.pgis.bus.server.models.response;

import com.pgis.bus.data.repositories.RepositoryException;
import com.pgis.bus.server.err.ControllerException;
import com.pgis.bus.server.err.ControllerException.err_enum;

public class ErrorModel {

	private err_enum error;

	public ErrorModel(Exception e) {
		if (e instanceof RepositoryException) {
			this.error = (new ControllerException((RepositoryException) e))
					.getErrorCode();
		} else if (e instanceof ControllerException) {
			this.error = ((ControllerException) e).getErrorCode();
		} else {
			this.error = err_enum.c_error_unknown;
		}

	}

	public err_enum getError() {
		return error;
	}

	public void setError(err_enum error) {
		this.error = error;
	}
}
