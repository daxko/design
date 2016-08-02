---
title: "Member Experience (MX)"
theme: "cotton-candy"
template: toc.hbs
stylesheet: "/css/mx-styleguide.css"
---

MX is built on top of Daxko's common components, but adds specialized components and colors made specifically to serve members and to match the client's branding.

<link id="theme" rel="stylesheet" href="/css/themes/theme-ymca-green-blue.css">

<div class="dropdown toggle-theme tooltip tooltip-w" id="toggle-theme" aria-label="Change Theme">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    <svg class="icon icon-gear">
      <use xlink:href="/images/icons.svg#icon-gear" />
    </svg>
  </button>
  <ul class="dropdown-menu right">
    {{~#themes}}
      <li class="dropdown-menu-item" data-toggle-theme="{{theme}}" tab-index="0">{{name}}</li>
    {{~/themes}}
  </ul>
</div>

<script>
  var styleTag = document.querySelector('#theme');
  document.querySelector('#toggle-theme').addEventListener('click', function(e) {
    var target = e.target;
    if(target.hasAttribute('data-toggle-theme')) {
      var theme = target.getAttribute('data-toggle-theme');
      styleTag.setAttribute('href', ['/css/themes/', theme].join(''));
    }
  });
</script>