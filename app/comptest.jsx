import m from 'mithril';
import Competition from './Competition/competition';

function controller(a, children) {
	console.log('controller works OK for CompTest.' + JSON.stringify(children));
	var c = {};
	c.prop1 = m.prop('test props');
	return c;
}
function view(c) {
	return(
		<div class='toto'>
			<span>Comp Test Is Here</span>
			<input type="text" placeholder={ c.prop1() }/>
			<Competition />
		</div>
	);

}

var CompTest = {controller, view};

export default CompTest;
