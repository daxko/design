## Toasts

Customized toast notifications built on top of [toastify.js](https://github.com/apvarun/toastify-js).
Make sure to inlcude Toastify JS and the toast.js script to allow for easy use of toast messages.

```
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
<script src="path/to/toast.js"></script>
```
### Default

These are all of the different kind of toasts that can be used. They are linked to the buttons  using the ID for the toast message and the data-toast-id attribute on the corresponding button that should launch this toast message.

{{#example 'html'}}
<button class="btn" onClick="createToast('#success-toast')">Success</button>
<button class="btn" onClick="createToast('#info-toast')">Info</button>
<button class="btn" onClick="createToast('#warning-toast')">Warning</button>
<button class="btn" onClick="createToast('#danger-toast')">Danger</button>
<button class="btn" onClick="createToast('#secondary-toast')">Secondary</button>

<div class="dax-toast dax-toast-success" id="success-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-check"></i>
    <div class="dax-toast-title">Save Successful</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="info-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Heads Up</div>
  </div>
</div>
<div class="dax-toast dax-toast-warning" id="warning-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-triangle-exclamation"></i>
    <div class="dax-toast-title">Warning</div>
  </div>
</div>
<div class="dax-toast dax-toast-danger" id="danger-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-xmark"></i>
    <div class="dax-toast-title">Danger</div>
  </div>
</div>
<div class="dax-toast dax-toast-secondary" id="secondary-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Deleted</div>
  </div>
</div>
{{/example}}

### Positions

A toast message's location on the screen can be modified by using the data attributes on the toast message. `data-gravity` can be set to `"top"` or `"bottom"` to change if it appears at the top or bottom of the screen. `data-position` can be set to `"left"`, `"center"`, or `"right"` to chnage where it appears horizontally on the screen. If not specified this will default to `gravity = "top"` and `position = "right"`.

{{#example 'html'}}
<button class="btn" onClick="createToast('#top-left-toast')">Top Left</button>
<button class="btn" onClick="createToast('#top-center-toast')">Top Center</button>
<button class="btn" onClick="createToast('#top-right-toast')">Top Right</button>
<button class="btn" onClick="createToast('#bottom-left-toast')">Bottom Left</button>
<button class="btn" onClick="createToast('#bottom-center-toast')">Bottom Center</button>
<button class="btn" onClick="createToast('#bottom-right-toast')">Bottom Right</button>

<div class="dax-toast dax-toast-info" id="top-left-toast" data-gravity="top" data-position="left">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Top Left</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="top-center-toast" data-gravity="top" data-position="center">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Top Center</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="top-right-toast" data-gravity="top" data-position="right">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Top Right</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="bottom-left-toast" data-gravity="bottom" data-position="left">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Bottom Left</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="bottom-center-toast" data-gravity="bottom" data-position="center">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Bottom Center</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="bottom-right-toast" data-gravity="bottom" data-position="right">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Bottom Right</div>
  </div>
</div>
{{/example}}

### Timeout

The display duration of the toast message defaults to 5 seconds but can be changed using the `data-duration` option. Duration should be a number of milliseconds to display the toast message.

{{#example 'html'}}
<button class="btn" onClick="createToast('#ten-duration-toast')">10 seconds</button>
<button class="btn" onClick="createToast('#thirty-duration-toast')">30 seconds</button>
<button class="btn" onClick="createToast('#sixty-duration-toast')">60 seconds</button>

<div class="dax-toast dax-toast-info" id="ten-duration-toast" data-duration="10000">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">10 seconds</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="thirty-duration-toast" data-duration="30000">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">30 seconds</div>
  </div>
</div>
<div class="dax-toast dax-toast-info" id="sixty-duration-toast" data-duration="60000">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">60 seconds</div>
  </div>
</div>
{{/example}}

### Buttons

Buttons can also be added to a toast message as part of the title. 

{{#example 'html'}}
<button class="btn" onClick="createToast('#with-button-toast')">Toast With Undo</button> 

<div class="dax-toast dax-toast-secondary" id="with-button-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Note Deleted</div>
    <div class="dax-toast-btn btn btn-link">UNDO</div>
  </div> 
</div>
{{/example}}

### Body

Body text for more explanation can also be added to a toast message. 

{{#example 'html'}}
<button class="btn" onClick="createToast('#with-body-toast')">Toast With Body</button> 
<button class="btn" onClick="createToast('#with-body-undo-toast')">Toast With Body and Undo</button> 

<div class="dax-toast dax-toast-secondary" id="with-body-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Note Deleted</div>
    <div class="dax-toast-body">Text description would go here and could span multiple lines</div>
  </div> 
</div>
<div class="dax-toast dax-toast-secondary" id="with-body-undo-toast">
  <div class="dax-toast-inner">
    <i class="dax-toast-icon fa-regular fa-circle-info"></i>
    <div class="dax-toast-title">Note Deleted</div>
    <div class="dax-toast-btn btn btn-link">UNDO</div>
    <div class="dax-toast-body">Text description would go here and could span multiple lines</div>
  </div> 
</div>
{{/example}}



