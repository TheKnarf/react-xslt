const React = require('react'),
		xpath = require('xpath.js'),
		DOMParser = require('xmldom'),
		dom = React.createElement;

const ApplyTemplate = ({ xml, select, Component }) => 
	(xml !== null && typeof xml !== 'undefined') ?
		((xpath(xml, select)||[])
			.map(xml => <Component xml={xml} />)
		|| []) : [];

const ValueOf = ({ xml, select }) => {
	if(xml == null || typeof xml == 'undefined')
		return <span />;
	
	const query = xpath(xml, select)[0],
			output = query.nodeValue || query.firstChild.data || [];

	return output;
}

module.exports = { xpath, dom: DOMParser, ApplyTemplate, ValueOf };
