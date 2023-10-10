## Tooltips
### React tooltips
Customized react tooltip based on react-tooltip@4 https://www.npmjs.com/package/react-tooltip
Make sure to include `react-tooltip.js` in your react_entry_point dependency list.

index.cshtml
```
@section scripts {
  <!-- ... -->
  @html.react_entry_point("~/assets/react/path/to/app.jsx",new[] { "react-tooltip.js" })
  <!-- ... -->
}
```

app.jsx
```
import ReactTooltip from "react-tooltip";
<!-- ... -->

export default function app(props){
  <!-- ... -->
  return (
    <!-- ... -->
      <i className="fa-regular fa-info-circle" data-tip="Tooltip Text" />
      <ReactTooltip className="react-tooltip" effect="solid"/>
    <!-- ... -->
  )
}
```

### HTML Template tooltips
app.jsx
```
import ReactTooltip from "react-tooltip";
<!-- ... -->

export default function app(props){
  <!-- ... -->
  return (
    <!-- ... -->
      <i className="fa-regular fa-info-circle" data-tip data-for="popover-info" />
      <ReactTooltip id="popover-info" className="react-tooltip light" effect="solid">
        <div className="tooltip-title">
            <h3>Tooltip Title Area</h3>
        </div>
        <p>Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </ReactTooltip>
    <!-- ... -->
  )
}
```

### Legacy tooltips

Add tooltips to almost any element. Just add a `.tooltip` class along with an `aria-label` attribute containing the tooltip text.

> Tooltips can not be added to elements that have `:before` or `:after` psuedo elements. If you need a tooltip on an element with psuedo-elements, you will need to add the tooltip to the parent instead.
{{#example 'html'}}
<!-- hide -->
<p>
<!-- /hide -->
<button class="btn tooltip" aria-label="This is a tooltip for the button">Button with Tooltip</button>
<!-- hide -->
</p>
<p>
<!-- /hide -->
<span>Icon with tooltip 
    <span class="tooltip" aria-label="This is a tooltip for the icon">
        <i class="fa-regular fa-circle-info"></i>
    </span>
</span>
<!-- hide -->
</p>
<!-- /hide -->
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
