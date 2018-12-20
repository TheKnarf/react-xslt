const React = require('react'),
		xpath = require('xpath.js'),
		DOMParser = require('xmldom').DOMParser,
		dom = React.createElement;

const ApplyTemplate = ({ xml, select, Component }) => 
	(xml !== null && typeof xml !== 'undefined') ?
		((xpath(xml, select)||[])
			.map(xml => <Component xml={xml} />)
		|| []) : [];

const ValueOf = ({ xml, select }) => {
	if(xml == null || typeof xml == 'undefined')
		return [];
	
	const query = xpath(xml, select)[0],

	return query.nodeValue || (query.firstChild || {data: [] }).data || [];
}

module.exports = { xpath, DOMParser, ApplyTemplate, ValueOf };
