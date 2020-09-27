import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside the Nav', async function(assert) {
    await render(hbs`<NavBar />`);

    assert.dom('.menu .menu-index').exists();
    assert.dom('.menu .menu-about').exists();
    assert.dom('.menu .menu-contact').exists();

    assert.dom('.menu .menu-about').hasText('About');
    assert.dom('.menu .menu-contact').hasText('Contact');
    assert.dom('h1').hasText('SuperRentals');
  });
});
