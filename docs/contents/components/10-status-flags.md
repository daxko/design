## Status Flag

Status flags are used to indicate *active* or *inactive* status for anything that may have a status. For accessibility purposes, it's recommended to include the status text along with the flag, or include it as an `aria-label` tooltip.

{{#example 'html'}}
<!-- hide -->
<p>
<!-- /hide -->
  <span class="status-flag tooltip" aria-label="Inactive"></span> Inactive
<!-- hide -->
</p>
<p>
<!-- /hide -->
  <span class="status-flag status-flag--active tooltip" aria-label="Active"></span> Active
<!-- hide -->
</p>
<p>
<!-- /hide -->
  <span class="status-flag status-flag--on-hold tooltip" aria-label="On Hold"></span> On Hold
<!-- hide -->
</p>
<p>
<!-- /hide -->
  <span class="status-flag status-flag--prospect tooltip" aria-label="Prospect"></span> Prospect
<!-- hide -->
</p>
<!-- /hide -->
{{/example}}
