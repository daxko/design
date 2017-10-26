## Wysiwyg

Use the wysiwyg as a simple rich text editor. 

{{#example 'html'}}
<script>
  var toolbarOptions = [
    [{ 'size': ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline'],
    [{ 'color': [] }],
    [{ 'list': 'bullet' }, { 'list': 'ordered' }]
  ]

  var quill = new Quill('.wysiwyg-editor', {
    modules: {
      toolbar: toolbarOptions,
      history: {
        delay: 2000,
        maxStack: 5000,
        userOnly: true
      }
    },
    theme: 'snow'
  });
</script>

<div class="wysiwyg">
  <div class="wysiwyg-editor"></div>
</div>
{{/example}}
