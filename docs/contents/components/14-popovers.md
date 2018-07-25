## Popovers

Highly customizable vanilla JS tooltip/popover based on Tippy.js. https://atomiks.github.io/tippyjs/  
Make sure to include the popover.js file and initialize

```
<script src="path/to/popover.js"></script>
<script>
  popover('.popover')
</script>
```

### Default
{{#example 'html'}}
<button class="popover btn" title="I'm a popover!" data-popover-arrow="true">Hover on me!</button>
{{/example}}

### Placement
{{#example 'html'}}
<button class="popover btn" title="I'm a Popover!" data-popover-arrow="true" data-popover-placement="top">Top</button>
<button class="popover btn" title="I'm a Popover!" data-popover-arrow="true" data-popover-placement="bottom">Bottom</button>
<button class="popover btn" title="I'm a Popover!" data-popover-arrow="true" data-popover-placement="left">Left</button>
<button class="popover btn" title="I'm a Popover!" data-popover-arrow="true" data-popover-placement="right">Right</button>
<button class="popover btn" title="I'm a Popover!" data-popover-arrow="true" data-popover-placement="top-start">Top-Start</button>
<button class="popover btn" title="I'm a Popover!" data-popover-arrow="true" data-popover-placement="top-end">Top-End</button>
{{/example}}

HTML Template
{{#example 'html'}}
<a class="popover-with-html">HTML Templates</a>
<div id="myHtml" class="panel hide">
  <div class="panel-header">
    <h3>Panel Header Area</h3>
    <button class="close" aria-label="Close" data-dismiss="modal"></button>
  </div>
  <div class="panel-body">
    <h2>Maecenas Faucibus</h2>
    <p>Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  </div>
</div>
{{/example}}
