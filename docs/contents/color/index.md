---
title: "Color"
theme: "key-lime"
---

## Color palette

This color palette is composed of primary colors to be used for accent, highlighting and gray scale colors to be used to shade text and to convey hierarchical information.

### Brand Colors

This color palette consists of daxko's four primary brand colors.

<ul class="colors">
  <li class="swatch">
    <div class="details red-velvet">
      <h3>Red Velvet</h3>
      <dl class="hex">
        <dt>Hex</dt>
        <dd>#ee264e</dd>
      </dl>
      <dl class="rgb">
        <dt>RGB</dt>
        <dd>rgb(203, 0, 68)</dd>
      </dl>
    </div>
  </li>
  <li class="swatch">
    <div class="details banana-pudding">
      <h3>Banana Pudding</h3>
      <dl class="hex">
        <dt>Hex</dt>
        <dd>#efad1c</dd>
      </dl>
      <dl class="rgb">
        <dt>RGB</dt>
        <dd>rgb(234, 171, 0)</dd>
      </dl>
    </div>
  </li>
  <li class="swatch">
    <div class="details key-lime">
      <h3>Key Lime</h3>
      <dl class="hex">
        <dt>Hex</dt>
        <dd>#b3ba5a</dd>
      </dl>
      <dl class="rgb">
        <dt>RGB</dt>
        <dd>rgb(162, 173, 0)</dd>
      </dl>
    </div>
  </li>
  <li class="swatch">
    <div class="details cotton-candy">
      <h3>Cotton Candy</h3>
      <dl class="hex">
        <dt>Hex</dt>
        <dd>#a5dbd8</dd>
      </dl>
      <dl class="rgb">
        <dt>RGB</dt>
        <dd>rgb(156, 220, 217)</dd>
      </dl>
    </div>
  </li>
</ul>

### Gray Scale Colors

<div class="grid">
  <div class="col-7">
    <p>There are various shades of gray that can be used for application chrome colors or to make distinctions between different kinds of information. Anything with an background alpha value greater than 50% should have white <code>#fff</code> text and anything less should have black <code>#000</code> text to maintain good visual contrast.</p>
    <p></p>
  </div>
  <div class="col-5">
    <ul class="swatch-list">
      <li class="gray-50">
        50
        <span class="pull-right">
          <em>Hex</em> #f6f6f6
        </span>
      </li>
      <li class="gray-100">
        100
        <span class="pull-right">
          <em>Hex</em> #e6e6e6
        </span>
      </li>
      <li class="gray-300">
        300
        <span class="pull-right">
          <em>Hex</em> #a6a6a6
        </span>
      </li>
      <li class="gray-500">
        500
        <span class="pull-right">
          <em>Hex</em> #6d6d6d
        </span>
      </li>
      <li class="gray-700">
        700
        <span class="pull-right">
          <em>Hex</em> #545454
        </span>
      </li>
      <li class="gray-900">
        900
        <span class="pull-right">
          <em>Hex</em> #2d2d2d
        </span>
      </li>
    </ul>
  </div>
</div>

### Variables

Every color is available as a variable as part of our [sass mixins](https://github.com/daxko/design/blob/master/scss/_colors.scss).

```scss
{{readfile "/scss/_colors.scss"}}
```

## Primary & Secondary Colors

Try not to have more than 2 primary colors on the screen - we don't want to overwhelm the user. It's okay to have one color for primary elements, and a secondary color for accents.

## Color Blindness

Approximately 8% of males and 0.5% of females have some sort of color blindness. Most people with color blindness have issues differentiating between red-green colors. Here are some tips on how you should take color blindness into consideration when using colors.

### Don't use color alone for feedback ###

<div class="section">
  <div class="col">
    <p>It's okay to use colors to indicate feedback (such as in success or error messages). However, without any additional information a color blind person may not be able to determine what the feedback is for.</p>
    <p>*This is also a very important rule for blind people, since they can't see any color!*</p>
  </div>
  <div class="col">
    <div style="float: left; width: 50%; text-align: center;">
      <h4>Normal Vision</h4>
      <img src="/images/colors1.png"/>
    </div>
    <div style="float: right; width: 50%; text-align: center;">
      <h4>Color Blind Vision</h4>
      <img src="/images/colors2.png"/>
    </div>
  </div>
</div>

### Use contrasting colors for comparisons

If you pair 2 or more colors together, be sure to use contrasting colors that aren't common in color blindness. It's okay to use different shades of the same color.

Try to avoid red-green color combinations when possible. If you can't, always provide context as to what the different colors mean.
