import assert from 'assert';
import { dom as iso } from 'isomorphic-jsx';
import React from 'React';
import { xpath, DOMParser, ValueOf, ApplyTemplate } from 'react-xslt';

describe('react-xslt', () => {

	it('simple test', () => {
		var dom = iso;
		const xmlString = <root>
			<test name="test1" />
			<test name="test2" />
			<test name="test3" />
			<test name="test4" />
		</root>;

		dom = React.createElement;
		const inquiry = ({xml}) =>
			<div className="inquiry">
				<ValueOf xml={xml} select="." />
			</div>;

		const Section = ({xml}) => {
			return <section>
				<h1>
					<ValueOf xml={xml} select="@title" />
				</h1>
				<p> <ValueOf xml={xml} select="description" /> </p>
				<h2> Kontrollpunk </h2>
				<ApplyTemplate xml={xml} select="inquiry" Component={inquiry} />
			</section>;
		}

		// TODO: simplify examples over to 1 or 2 simple React components
		// TODO: setup JSDOM for testing: https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

		assert.equal(true, true);
	})

})
