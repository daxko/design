## Tooltips

Add tooltips to almost any element. Just add a `.tooltip` class along with an `aria-label` attribute containing the tooltip text.

> Tooltips can not be added to elements that have `:before` or `:after` psuedo elements. If you need a tooltip on an element with psuedo-elements, you will need to add the tooltip to the parent instead.

{{#example 'html'}}
<button class="btn tooltip" aria-label="This is a tooltip for the button">Button with Tooltip</button>
{{/example}}

You can also specify the direction of the tooltip:

* `tooltip-n` -- tooltip on top
* `tooltip-e` -- tooltip on right
* `tooltip-s` -- tooltip on bottom
* `tooltip-w` -- tooltip on left

<p></p>

{{#example 'html'}}
<!-- hide -->
<p>
<!-- /hide -->
<span class="tooltip tooltip-n" aria-label="I'm on the top!">Tooltip on top</span>
<!-- hide -->
</p><p>
<!-- /hide -->
<span class="tooltip tooltip-e" aria-label="I'm on the right!">Tooltip on right</span>
<!-- hide -->
</p><p>
<!-- /hide -->
<span class="tooltip tooltip-s" aria-label="I'm on the bottom!">Tooltip on bottom</span>
<!-- hide -->
</p><p>
<!-- /hide -->
<span class="tooltip tooltip-w" aria-label="I'm on the left!">Tooltip on left</span>
<!-- hide -->
</p><p>
<!-- /hide -->
{{/example}}
