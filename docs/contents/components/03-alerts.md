## Alerts

Show alerts to a user informing them of successful or pending actions, or state. These should be used sparingly and very rarely more than one at once.

### Info

{{#example 'html'}}

<div class="alert alert-info">
    <i class="alert-icon fa-regular fa-circle-info"></i>
    <strong>FYI. </strong>
    This person doesn't have any notes.
    <a href="#"> Create note</a>
</div>
{{/example}}

### Success

{{#example 'html'}}

<div class="alert alert-success">
    <i class="alert-icon fa-regular fa-circle-check"></i>
    <strong>Good Job! </strong>
    You are all done with this member.
    <a href="#"> Go to member</a>
</div>
{{/example}}

### Error

{{#example 'html'}}

<div class="alert alert-error">
    <i class="alert-icon fa-regular fa-circle-xmark"></i>
    <strong>Oops! </strong>
    Something went terribly wrong.
    <a href="#"> Emergency Meeting!</a>
</div>
{{/example}}

### Warning

{{#example 'html'}}

<div class="alert alert-warning">
    <i class="alert-icon fa-regular fa-triangle-exclamation"></i>
    <strong>Heads Up! </strong>
    Your membership is about to expire pretty soon.
    <a href="#"> Re-Sub!</a>
</div>
{{/example}}
