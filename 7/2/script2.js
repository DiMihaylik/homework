const test1 = document.getElementById('test1')
const test2 = document.createElement('div');
const test3 = document.createElement('div');

test1.append(test2)
test1.append(test3)

test1.style.background = 'rgb(254,136,136)';
test1.style.height = '100px';
test1.style.width = '100px';

test2.style.background = 'rgb(125,139,235)';
test2.style.height = '100px';
test2.style.width = '100px';
test2.style.position = 'absolute';
test2.style.left = '70px';
test2.style.top = '70px';
test2.style.zIndex = '1';

test3.style.background = 'rgb(78,239,152)';
test3.style.height = '100px';
test3.style.width = '100px';
test3.style.position = 'absolute';
test3.style.left = '130px';
test3.style.top = '130px';

