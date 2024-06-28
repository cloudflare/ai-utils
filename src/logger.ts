class Logger {
	private static enabled = false;

	static enableLogging() {
		Logger.enabled = true;
	}

	static disableLogging() {
		Logger.enabled = false;
	}

	static info(message: string, data?: any) {
		if (Logger.enabled) {
			console.log(`INFO: ${message}`, data || "");
		}
	}

	static error(message: string, data?: any) {
		if (Logger.enabled) {
			console.error(`ERROR: ${message}`, data || "");
		}
	}

	static warn(message: string, data?: any) {
		if (Logger.enabled) {
			console.warn(`WARN: ${message}`, data || "");
		}
	}
}

export { Logger };
