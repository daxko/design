## Status Flag

Status flags are used to indicate *active* or *inactive* status for anything that may have a status. For accessibility purposes, it's recommended to include the status text as along with the flag, or include it as an aria label tooltip.

{{#example 'html'}}
<p><span class="status-flag tooltip" aria-label="Inactive"></span> Inactive User</p>
<p><span class="status-flag status-flag--active tooltip" aria-label="Active"></span> Active User</p>
{{/example}}
