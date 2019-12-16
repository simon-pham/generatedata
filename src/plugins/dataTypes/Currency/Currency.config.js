export default {
	"name": "Currency",
	"fieldGroup": "numeric",
	"fieldGroupOrder": 60,
	"schema": {
		"title": "Currency",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"type": "object",
		"properties": {
			"format": {
				"type": "string"
			},
			"rangeFrom": {
				"type": "string"
			},
			"rangeTo": {
				"type": "string"
			},
			"symbol": {
				"type": "string"
			},
			"symbolLocation": {
				"enum": [
					"prefix",
					"suffix"
				]
			}
		},
		"required": [
			"format",
			"rangeFrom",
			"rangeTo"
		]
	}
}
