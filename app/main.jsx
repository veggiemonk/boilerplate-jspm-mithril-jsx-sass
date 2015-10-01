import m from 'mithril';
import CompTest from './comptest';

function controller(attrs, children) {
	var c = {};
	return c;
}

function view(ctrl) {
	return (
		<div>
			<span>This is a test</span>
			<CompTest></CompTest>
		</div>
	)
}

var MainComp = { controller, view };

m.mount(document.getElementById('app'), MainComp );
