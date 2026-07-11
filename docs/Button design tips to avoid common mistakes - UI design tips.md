# Button design tips to avoid common mistakes

Practical button design tips to avoid common usability and accessibility problems.

![UI design button styles](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-styles-3-680x400.jpg)

I’ve been a designer for nearly 2 decades now ([here’s how I became a product designer](https://www.adhamdannaway.com/blog/how-i-became-a-designer)) and I’ve used buttons in many website design projects, but I haven’t ever taken the time to think about button design in great detail. It wasn’t until recently that I realised I’d been making some common button design mistakes (and I’m not the only one).

If you pull out your phone, open a few apps and browse a some websites, I’ll bet you come across quite a few buttons. I’ll also bet that many of those buttons have issues that pose a potential risk to usability and accessibility. There are a lot of problematic buttons out there, even from large companies and experienced designers, so I put together some quick and practical button design tips to avoid these problems and design better buttons.

Firstly, I’ll go through some popular button designs and highlight their problems using objective UI design principles. I’ll avoid any subjective thoughts based on aesthetics, “gut feeling”, or what looks pretty. I also won’t go into code here, as there’s a lot we can do on the design side of things first. I’ll finish up with some button design tips and suggestions for best practice button design.

---

## The purpose of buttons in UI design

In UI design, buttons serve as interactive elements that allow users to perform actions or make choices within a website or application. They are fundamental components that guide user interactions and help achieve various tasks.

For most projects, your [design system](https://www.practical-ui.com/design-system/) will need 3 button weights to indicate the relative importance of actions:

*   **Primary buttons** are the most prominent button used to highlight the most important action.
*   **Secondary buttons** are usually the alternative to the primary action. Use secondary buttons for less important actions or for multiple actions that have equal importance.
*   **Tertiary buttons** are especially good for displaying multiple actions or destructive actions that you want to make less prominent.

In this article, we’ll compare groups of these 3 button weights.

---

## Common button design mistakes

I’ve highlighted the issues with some popular button designs below. These issues pose a potential risk to usability, so it’s safest to avoid them if possible. We’re aiming to at least meet [WCAG 2.0 level AA accessibility requirements](https://www.w3.org/WAI/standards-guidelines/wcag/) as this is the most common standard and a good place to start.

### Button group 1

![Buttons styles in which primary button has a high contrast fill, secondary button has a low contrast fill, and tertiary button is underlined text.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-1-1.jpg)

User interface components like form fields, buttons, and tabs, need to have a colour contrast ratio of at least 3:1. Contrast is a measure of the difference in perceived brightness between two colours. It’s expressed as a ratio ranging from 1:1 to 21:1. High contrast helps people with vision impairment tell the difference between different interface components. Decorative styles that aren’t required to distinguish interface components don’t need high contrast. There are lots of tools and [Figma plugins](https://www.adhamdannaway.com/blog/web-design/10-best-figma-plugins-for-web-design-in-2024) to help you measure colour contrast, my favourites are the [Web AIM online contrast check tool](https://webaim.org/resources/contrastchecker/) and the [Contrast Figma plugin](https://www.figma.com/community/plugin/748533339900865323/contrast).

In this example, the secondary button fill contrast ratio against the background is less than 3:1, which is too low to clearly indicate the button shape to the vision impaired.

Some may argue that the secondary button fill is decorative and doesn’t need to have a contrast ratio of 3:1 to be accessible. The fill is needed to identify the secondary button as a button. Without the fill, it’s just plain blue text with no indicator of interactivity but colour. You could add a high contrast border to the secondary button to fix this issue.

---

### Button group 2

![Buttons styles in which primary button has a high contrast fill, secondary button has a grey outline with no fill, and tertiary button is underlined text.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-2-1.jpg)

The button styles in group 2 have the following issues:

*   The secondary button could be mistaken as being unavailable or in a disabled state due to its light grey colour. It’s safest to avoid light grey buttons to reduce potential confusion.
*   The secondary button text contrast ratio is less than the required 4.5:1 WCAG guideline, making it difficult to read for some.
*   The secondary button border is also less than the required 3:1 ratio.

---

### Button group 3

![Buttons styles in which primary button has a high contrast fill, secondary button has a high contrast fill of a different colour, and tertiary button is underlined text.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-3-1.jpg)

To ensure that a wider audience can read small text (18px and under), it should have a colour contrast ratio of at least 4.5:1. The button styles in this example have the following issues:

*   The primary and secondary buttons conflict due to their similarity. This confuses the visual hierarchy, making it unclear which is more important.
*   Since both buttons have the same style, the only way to tell the difference between them is via their colour. This means people who are colour blind may not be able to differentiate between them.
*   The contrast ratio between the buttons is also less than the required 3:1. This means that people who are vision impaired may not be able to clearly distinguish between them.

---

### Button group 4

![Buttons styles in which primary button has a high contrast fill, secondary button has a low contrast grey fill, and tertiary button is underlined text.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-4-1.jpg)

These button styles have similar issues to the previous example:

*   The primary and secondary buttons conflict due to their similar style and lack of contrast.
*   The secondary button text contrast ratio is too low and should be at least 4.5:1 to ensure it’s accessible.

---

### Button group 5

![Buttons styles in which primary button has a high contrast fill, secondary button has a low contrast grey fill, and tertiary button has an even lower contrast grey fill.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-5-1.jpg)

These button styles are too similar for the vision impaired to distinguish between them. The contrast ratio between buttons is the only way to tell the difference between them and it’s too low (contrast needs to be at least 3:1). Buttons should have a clear visual hierarchy that doesn’t rely on colour alone.

---

### Button group 6

![Buttons styles in which all buttons are outlined in slightly different colours with no fill.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-6-1.jpg)

These button styles have similar issues to the example above:

*   Button styles are too similar in contrast and style for the vision impaired to tell the difference between them.
*   The contrast ratio of the tertiary button border must be at least 3:1 to be accessible and clearly identify it as an interactive element.

---

### Button group 7

![Buttons styles in which primary button has a high contrast fill, secondary button has a stroke with no fill, and tertiary button is coloured text.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-7-1.jpg)

When it comes to accessibility, it’s important that we don’t rely on colour alone to distinguish interface elements. Those who are colour blind won’t be able to tell the difference between elements.

In this example, the tertiary button isn’t accessible because colour is the only indicator that it’s interactive. This means that those who are colour blind may not be able to distinguish it from plain text.

The context, position and close proximity of the tertiary button to other buttons may help distinguish it from plain text in some cases, but there’s still a risk that it may cause confusion.

---

### Button group 8

![Buttons styles in which primary button has a round shape that’s different to the rectangular shape of other buttons.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-8-1.jpg)

Every detail of an interface design should have a logical purpose. Why are the primary and secondary button shapes different in example 8? Do they function differently? Elements that function the same should look the same. Avoid inconsistent button shapes as they can cause confusion.

---

### Button group 9

![Buttons styles in which primary button has a high contrast outline, secondary button has a low contrast fill, and tertiary button is underlined text.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-9-1.jpg)

Visual hierarchy is how we communicate the relative importance of interface elements. The purpose of the 3 button styles is to indicate the importance of actions. This helps people make decisions. The button styles in this example have the following issues:

*   The visual hierarchy is unclear as the primary and secondary buttons have similar visual weight or prominence.
*   The secondary button background contrast ratio is below 3:1, which is too low to clearly indicate the button shape to the vision impaired.

---

## Button design tips

Based on the previous button design mistakes, here are some quick and practical tips to keep in mind to design user-friendly and accessible buttons:

*   Buttons should have a clear visual hierarchy that doesn’t depend on colour alone.
*   The contrast ratio of the button shape must be at least 3:1 to ensure people who are vision impaired can identify it as an interactive element.
*   Button text contrast ratio must be at least 4.5:1 to meet WCAG 2.1 level AA accessibility requirements.
*   If buttons have identical styles, the contrast ratio between them must be at least 3:1 to ensure they’re distinguishable to the vision impaired.
*   Use a large target area (at least 48pt by 48pt) to ensure people can easily select buttons.
*   Make sure there’s sufficient space between buttons so people don’t mistakenly select the wrong one. I usually use 16pt to be safe.

These button design tips are from my [UI design book](https://www.practical-ui.com/).

---

## A safe option for better buttons

The following button styles are familiar, accessible, and have a clear visual hierarchy that isn’t dependent on colour alone. I’ve used them in many projects including my [Figma design system UI kit](https://www.practical-ui.com/design-system/).

![Buttons styles in which primary button has a high contrast fill, secondary button has a high contrast outline with no fill, and tertiary button is underlined text.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/ui-design-button-style-correct-1.jpg)

You might have noticed that the tertiary button looks identical to a text link, but is that really an issue? Traditionally text links were designed to _go somewhere_ and buttons were designed to _perform an action._ These days, many are unaware of this interaction pattern and certainly wouldn’t expect it, so I don’t think we need to stick to it. 

In the following hero banner example, links are used to take people to another page. The problem is that links aren’t prominent enough to indicate that they’re the most important actions on the page.

![Hero banner example with 2 underlined text links highlighting the main calls to action.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/hero-banner-links-1.jpg)

Changing the links to look like buttons helps make them more prominent and create a clearer visual hierarchy. The fact that they’re _taking you somewhere_, rather than _performing an action_ doesn’t matter.

![Hero banner example with 2 buttons highlighting the main calls to action.](https://www.adhamdannaway.com/wp-content/uploads/2024/01/hero-banner-buttons.jpg)

In the below message dialog box example, we can see our 3 button styles in action. Even though the tertiary button looks like a link, it’s clear in this context that clicking it will perform an action rather than take you to another page. Again, the line between links and buttons is blurred.

![Example of a message dialog box with primary, secondary and tertiary buttons.](https://www.adhamdannaway.com/wp-content/uploads/2022/02/buttons-message-dialog-1.jpg)

Just ensure buttons are coded as buttons and links are coded as links, regardless of what they look like. This will help you avoid accessibility issues with screen readers.

These button styles aren’t the only way to design buttons, but they’re free of the many usability and accessibility risks mentioned above, so they’re a pretty safe option. I hope you found these button design tips helpful and I’d love to hear your feedback via [Twitter](https://twitter.com/AdhamDannaway/status/1483223637763452928).

---

### Learn more practical UI design tips

These are just a few of over 100 logic-driven design guidelines from my [UI design book](https://www.practical-ui.com/). If you found this article helpful, check out the book and follow me on [Twitter](https://www.twitter.com/AdhamDannaway) and [LinkedIn](https://au.linkedin.com/in/adhamdannaway) for daily design tips.

To get a better idea of what to expect in the book, check out this UI design case study to [redesign an example user interface using logical rules](https://www.adhamdannaway.com/blog/ui-design/16-ui-design-rules).

[![ui design book](https://www.adhamdannaway.com/wp-content/uploads/2022/05/ui-design-book-pages-adham-dannaway-2000x993.jpg)](https://www.practical-ui.com/)