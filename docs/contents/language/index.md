---
title: "Language"
theme: "cotton-candy"
template: toc.hbs
---

Our users are people, and they have emotions and feelings. You should talk to our users informally -- but be concise and to the point. Use language that encourages and empowers them to get their work done without patronizing or insulting them.

When you're writing, consider what the user's state of mind currently is. Did they just complete a task successfully? Did the system encounter some sort of error? Think about how the user would feel in that situation and that will help you determine how best to craft your language.

It's okay to have fun with messaging, after all we want to show some personality in our products. However we want to speak in terms that our users will understand. **Don't** use leetspeak, memes, or language that our users are not familiar with.

## Success Messages

<div class="section">
  <div class="grid">
    <div class="col-6">
      <p>
        Success messages should be **positive** and **encouraging**.
      </p>
      <p>
        Show excitement, or congratulate the user on completing their task. It's okay to have a little fun here since the user should be in a good mood.
      </p>
    </div>
    <div class="col-6">
      <strong class="bad">
        <span class="icon-x" title="icon name" aria-hidden="true"></span> Bad
      </strong>
      <div class="alert alert-success">The member has been saved.</div>
      <strong class="good">
        <span class="icon-check" title="icon name" aria-hidden="true"></span> Good
      </strong>
      <div class="alert alert-success"><strong>Good job!</strong> You're all done with this member.</div>
    </div>
  </div>
</div>

## Info Messages

<div class="section">
  <div class="grid">
    <div class="col-6">
      <p>When writing informational messages, we're doing so to provide context. You should try to answer the *why* so as to not leave the user confused.</p>
      <p>If it's an informational message about something that's missing or that there are zero of, consider including a link or button to add or create one.</p>
    </div>
    <div class="col-6">
      <strong class="bad">
        <span class="icon-x" title="icon name" aria-hidden="true"></span> Bad
      </strong>
      <div class="alert alert-info">There are no notes.</div>
      <strong class="good">
        <span class="icon-check" title="icon name" aria-hidden="true"></span> Good
      </strong>
      <div class="alert alert-info"><strong>FYI.</strong> This person doesn't have any notes.</div>
    </div>
  </div>
</div>

## Error Messages

<div class="section">
  <div class="grid">
    <div class="col-6">

      <p>Error messages are critically the most important thing you want to get right. The user may be frustrated, or you might need to let them know they missed something. You don't want to make the situation worse, or try to blame the user for the problem.</p>

      **Do**

      <ul>
        <li>Try to provide actionable steps to fix the problem.</li>
        <li>Explain the problem. Don't be vague.</li>
        <li>Be serious, don't make light of errors.</li>
      </ul>

    </div>
    <div class="col-6">
      <strong class="bad">
        <span class="icon-x" title="icon name" aria-hidden="true"></span> Bad
      </strong>
      <div class="alert alert-error">This field is invalid.</div>
      <strong class="good">
        <span class="icon-check" title="icon name" aria-hidden="true"></span> Ok
      </strong>
      <div class="alert alert-error"><strong>Oops!</strong> Zip code is invalid.</div>
      <strong class="good">
        <span class="icon-check" title="icon name" aria-hidden="true"></span> Better
      </strong>
      <div class="alert alert-error"><strong>Oops!</strong> Zip code requires at least 5 numbers.</div>
    </div>
  </div>
</div>

## Search Results

<div class="section">
  <div class="grid">
    <div class="col-6">
      <p>When we're listing out things to display, talk to our users like people - not like an engineer.</p>
      <p>Treat it more like a conversation. Try to talk about the thing that is being returned.</p>
    </div>
    <div class="col-6">
      <strong class="bad">
        <span class="icon-x" title="icon name" aria-hidden="true"></span> Bad
      </strong>
      <p>100 search results returned</p>
      <strong class="good">
        <span class="icon-check" title="icon name" aria-hidden="true"></span> Good
      </strong>
      <p>100 members found</p>
    </div>
  </div>
</div>
