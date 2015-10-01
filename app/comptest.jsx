import m from 'mithril';

function controller(a, children) {
	console.log('controller works OK.');
	var c = {};
	c.prop1 = m.prop('');
	return c;
}
function view() {
	return(
		<div class='toto'>
			<span>Comp Test Is Here</span>
			<input type="text" placeholder='write here'/>
		</div>
	);

}

var CompTest = {controller, view};

export default CompTest;
