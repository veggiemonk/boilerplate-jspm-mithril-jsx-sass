import m from 'mithril';

function controller(a, children) {
	console.log('controller works OK.');
	var c = {};
	c.prop1 = m.prop('');
	return c;
}

function view() {
	return(
		<div class='coucou'>
			<span>Competition is bad for you</span>
			<input type="text" placeholder='write here'/>
		</div>
	);

}

var Competition = {controller, view};

export default Competition;
