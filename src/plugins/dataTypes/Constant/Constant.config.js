export default {
	"name": "Constant",
	"fieldGroup": "other",
	"fieldGroupOrder": 10,
	"schema": {
		"title": "Constant",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"type": "object",
		"properties": {
			"loopCount": {
				"type": "number"
			},
			"values": {
				"type": "string"
			}
		},
		"required": [
			"loopCount",
			"values"
		]
	}
}
