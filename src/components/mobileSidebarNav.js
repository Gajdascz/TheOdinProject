import { buildElementTree, createElement } from '../utility/domHelpers.js';
import {
  doubleChevronLeftObj,
  homeIconObj,
  profileIconObj,
  cogIconObj,
  newspaperIconOneObj,
  deltaIconObj,
  chemicalWeaponIconObj,
  forumIconObj,
  messageIconObj
} from '../utility/svgIconObjs.js';

import { renderMobilePage } from '../renderMobile.js';

const buildNavButton = (navSelector) => {
  return buildElementTree({
    type: 'button',
    attributes: { class: 'mobile-sidebar-nav-button' },
    children: [doubleChevronLeftObj('nav-menu-button')],
    listeners: {
      click: function (e) {
        const nav = document.querySelector(`.${navSelector}`);
        this.classList.toggle('menu-button-expand');
        if (nav.classList.contains('hide-menu')) {
          nav.classList.remove('disappear');
          setTimeout(() => {
            nav.classList.remove('hide-menu');
            nav.classList.add('show-menu');
          }, 10);
        } else {
          nav.classList.remove('show-menu');
          nav.classList.add('hide-menu');
          setTimeout(() => {
            nav.classList.add('disappear');
          }, 500);
        }
      }
    }
  });
};
const buildPrimaryNavButtons = () => {
  return buildElementTree({
    type: 'div',
    attributes: { class: 'mobile-primary-nav-buttons' },
    children: [homeIconObj(), profileIconObj(), cogIconObj()]
  });
};
const buildSecondaryNavButtons = () => {
  return buildElementTree({
    type: 'div',
    attributes: { class: 'mobile-secondary-nav-buttons' },
    children: [newspaperIconOneObj('science news'), deltaIconObj('updates and changes'), chemicalWeaponIconObj()]
  });
};

const buildSocialNavButtons = () => {
  return buildElementTree({
    type: 'div',
    attributes: { class: 'mobile-social-nav-buttons' },
    children: [forumIconObj(), messageIconObj('direct messages')]
  });
};

const linkIconsToPages = (nav) => {
  nav
    .querySelector('.home-icon')
    .addEventListener('click', () => renderMobilePage('Home', 'Is where the JavaScript is.'));
  nav
    .querySelector('.profile-icon')
    .addEventListener('click', () =>
      renderMobilePage('Profile', 'Mid-twenties, light hair, blue eyes, and fair skin.')
    );
  nav
    .querySelector('.cog-icon')
    .addEventListener('click', () =>
      renderMobilePage('Settings', 'We have platinum along with gold in yellow, rose, and white for your stone or gem.')
    );
  nav.querySelector('.newspaper-icon').addEventListener('click', () => renderMobilePage('News', 'theonion.com'));
  nav.querySelector('.newspaper-icon').addEventListener('click', () => renderMobilePage('News', 'theonion.com'));
  nav
    .querySelector('.delta-icon')
    .addEventListener('click', () => renderMobilePage('Changes', 'Delta icon for website changes. Get it? haha.'));
  nav
    .querySelector('.chemical-weapon-icon')
    .addEventListener('click', () => renderMobilePage('Chemical Weapon', "I couldn't resist."));
  nav
    .querySelector('.forum-icon')
    .addEventListener('click', () => renderMobilePage('Forum', "But judge, I swear I didn't mean to!"));
  nav
    .querySelector('.message-icon')
    .addEventListener('click', () => renderMobilePage('Messages', 'You have no messages...... as usual.'));
};

const mobileSidebarNav = (navSelector) => {
  const nav = createElement('div', [navSelector, 'show-menu']);
  const navContainer = document.querySelector('.mobile-webpage-sidebar-nav-container');
  const navBtn = buildNavButton(navSelector);
  nav.append(buildPrimaryNavButtons(), buildSecondaryNavButtons(), buildSocialNavButtons());
  navContainer.append(nav, navBtn);
  linkIconsToPages(nav);
  renderMobilePage('Home', 'Is where the JavaScript is.');
};

export { mobileSidebarNav };
