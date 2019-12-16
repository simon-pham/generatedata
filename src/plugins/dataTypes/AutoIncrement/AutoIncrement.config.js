export default {
	"name": "AutoIncrement",
	"fieldGroup": "numeric",
	"fieldGroupOrder": 20,
	"schema": {
		"title": "AutoIncrement",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"type": "object",
		"properties": {
			"incrementStart": {
				"type": "number"
			},
			"incrementValue": {
				"type": "number"
			},
			"incrementPlaceholder": {
				"type": "string"
			}
		},
		"required": [
			"incrementStart",
			"incrementValue"
		]
	}
}
