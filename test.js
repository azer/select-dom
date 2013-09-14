var select = require("./");
var qs = document.querySelector;
var qsAll = document.querySelectorAll;

before(function(done){
  document.body.innerHTML = '<ul><li>Foo</li><li>Bar</li><li>Qux</li></ul>';
  done();
});

it('selects one element', function(){
  var li = document.querySelector('ul li');
  expect(select('ul li')).to.equal(li);

  document.querySelector = undefined;

  expect(select('ul li')).to.equal(li);

  document.querySelector = qs;
});

it('selects all elements', function(){
  var li = document.querySelectorAll('ul li');
  expect(select.all('ul li')).to.deep.equal(li);

  document.querySelectorAll = undefined;

  expect(select.all('ul li')).to.deep.equal(Array.prototype.slice.call(li));

  document.querySelectorAll = qsAll;
});
