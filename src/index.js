import React from 'react';
import xpath from 'xpath.js';
import { DOMParser as dom } from 'xmldom';

const ApplyTemplate = ({ xml, select, Component }) => 
	(xml !== null && typeof xml !== 'undefined') ?
		((xpath(xml, select)||[])
			.map(xml => <Component xml={xml} />)
		|| <div />) : <div />;

const ValueOf = ({ xml, select }) => {
	if(xml == null || typeof xml == 'undefined')
		return <span />;
	
	const query = xpath(xml, select)[0],
			output = query.nodeValue || query.firstChild.data || <span />;

	return output;
}

module.exports = { xpath, dom, ApplyTemplate, ValueOf };
