# How to build a design system

A step by step guide to build a design system with predefined styles, a component library, and usage guidelines.

![Figma design system](https://www.adhamdannaway.com/wp-content/uploads/2024/07/figma-design-system-680x400.webp)

Having endless design possibilities sounds great in theory, but in practice, it can be frustrating and time consuming. When designing an interface, there are so many options to choose from regarding layout, spacing, typography, and colour, it can quickly get overwhelming. That’s why having a system of predefined options and guidelines to help you efficiently make design decisions is crucial. This is known as a design system and in this guide you’ll learn how to build a design system in 3 steps. 

---

## What is a design system?

A [design system](https://www.practical-ui.com/design-system/) is like a box of LEGO bricks for digital products. Just as LEGO bricks come in different shapes, sizes, and colours that you can snap together to build anything you can imagine, a design system provides a set of pre-made components, like buttons, icons, and form inputs, that you can combine to create consistent and cohesive user interfaces.

Just like with LEGO, where you have instructions to guide you in building a specific model, a design system comes with guidelines that show you how to use the components. This ensures that the website or application you’re building looks and works consistently.

A design system serves as a single source of truth that ensures that all design and development teams are aligned, enabling them to build unified products more efficiently.

---

## Benefits of a design system

Whether you’re working on a small website or a complex web application, a design system is a must-have for many reasons:

*   **Consistency:** Ensures a uniform look and feel across all products, enhancing the user experience.
*   **Efficiency:** Speeds up the design and development process by providing ready-to-use components and design guidelines.
*   **Scalability:** Makes it easier to scale products by providing a foundation that can grow with the brand or product.
*   **Collaboration:** Enhances collaboration between design and development teams by providing a common language and set of tools.
*   **Quality Control:** Helps maintain high-quality standards across all designs, reducing the risk of errors and inconsistencies.

---

## How to create a design system

Now that we know what a design system is and what the benefits are, let’s build a design system in 3 steps:

1.  Set predefined style options for colour, typography, and spacing.
2.  Create reusable modules known as a component library.
3.  Define usage guidelines.

### 1\. Set predefined style options

Rather than choosing from unlimited options for things like colour, typography, and spacing, create a small set of predefined options to choose from. Limiting your options in this way helps improve consistency and speeds up decision making. These predefined reusable options are often referred to as “tokens”.

#### Design system colour options

Create a small set of predefined colour options called a colour palette. The following colour palette is made up of variations of the brand colour. Each colour has a purpose to help you quickly decide how and where to use it.

For example, actions like buttons and text links are often assigned the brand colour from the colour palette. Using a consistent colour for interactive elements helps teach people what’s interactive and what’s not.

Similarly, there’s no need to spend countless hours searching for different shades of grey for form input borders, checkbox borders, and radio button borders. Simply assign a colour variation from the colour palette to use for all interface element borders.

Here’s a simple yet powerful colour palette that works for most websites and apps. It’s made up of 5 variations of the brand colour. Use the main brand colour hue as a base and change the saturation and brightness to create the other variations. You’ll need to use the HSB (Hue, Saturation, Brightness) colour system to do this. 

![Design system colour palette](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-colour-palette.webp)

Each colour has a purpose to help you quickly decide how and where to use it:

*   **Brand** – used to indicate interactive elements like text links and buttons.
*   **Text strong** – used for primary text, like headings, body content, and form labels to ensure they’re prominent and legible.
*   **Text weak** – used for supporting text to make it less prominent.
*   **Stroke strong** – used for non-decorative borders on interface elements like form input fields. Also used for icons.
*   **Stroke weak** – used for decorative borders, like dividing lines, that aren’t critical to identifying interface elements. 
*   **Fill** – used as a secondary background to help differentiate elements, like tags or badges, that sit on the main white background.

![Design system colour palette example](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-colour-palette-example-1.webp)

In order to help ensure that people with low vision can clearly see interface details, aim to at least meet Web Content Accessibility Guidelines (WCAG) 2.1 level AA colour contrast requirements. Make sure that colours used for text (“Brand”, “Text strong”, and “Text weak”) have a 4.5:1 contrast ratio. 

Colours used for interface elements, like “Stroke strong”, need at least a 3:1 contrast ratio. There are lots of tools to help you measure colour contrast, my favourites are the [Contrast Figma plugin](https://www.figma.com/community/plugin/748533339900865323/contrast) and the [Web AIM online contrast check tool](https://webaim.org/resources/contrastchecker/).

To learn more about using colour in UI design, check out my [UI design book](https://www.practical-ui.com/). It contains everything I wish I knew when I started out as a designer 2 decades ago.

[![ui design book](https://www.adhamdannaway.com/wp-content/uploads/2022/05/ui-design-book-pages-adham-dannaway.jpg)](https://www.practical-ui.com/)

#### Design system typography options

Create a small set of predefined typography options for different text types. Define the font sizes, line-heights and weights once and reuse them throughout an interface. This helps speed up decision making and improve consistency across your product.

Using a type scale is a simple and logical way to create a set of balanced font sizes that work well together. To create your set of font sizes, start with a base font size for body text, then keep multiplying it by a certain scale to create larger font sizes. 

Here are some popular type scales, ordered from smallest to largest:

*   1.067 – Minor Second
*   1.125 – Major Second
*   1.200 – Minor Third
*   1.250 – Major Third
*   1.333 – Perfect Fourth
*   1.414 – Augmented Fourth
*   1.500 – Perfect Fifth
*   1.618 – Golden Ratio

For example, start with a base font size of 16px and use a “1.200 – Minor Third” scale. Multiply 16px by 1.2 to get the next font size of 19.2px. Round it to 20px for simplicity. Then take 20px and multiply it by 1.2 to get the next font size, and so on. The following is an example set of font sizes using a slightly modified Minor Third type scale.

![Design system typography type scale](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-typography-type-scale.webp)

With most type scales, you’ll notice that the resulting font sizes have messy decimal values. Round font sizes to the nearest whole number for simplicity. It’s not crucial that font sizes are divisible by 4, but try to ensure that their line height is. This will align your text neatly to a 4pt vertical layout grid.

You don’t need to stick strictly to a scale. Once you get more confident with font sizes, you can adjust them to better suit the interface you’re designing.

#### Design system spacing options

Deciding on the ideal spacing between interface elements can be a frustrating and time consuming process, as there are so many options to choose from. In my early days as a designer, I remember painstakingly pushing interface elements back and forth, a pixel at a time, until they looked perfect. 

Creating a limited set of predefined spacing options (as seen below) can speed up your design process significantly, making you a much more efficient designer. Using consistent spacing options will also result in a neater, simpler interface design that’s faster to build.

![Design system spacing tokens](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-spacing-tokens.webp)

Create simple t-shirt sized spacing options based on increments of 8 points. Why 8? Many popular screen sizes are divisible by 8 and it provides a bit more spacing flexibility than using 10 points.

This is also known as using an 8 point grid, as all interface elements will end up aligning to a series of vertical and horizontal guidelines separated by 8 points. For more detailed interfaces, you could use 4 point increments for a bit more control.

Much like a typography scale, your spacing options should grow by larger amounts as they get bigger. This ensures that spacing is proportional for larger interface elements. 

#### Predefine other style options

Try to create sets of predefined options for any other styles you use too. You’ll generally need 2 shadow options (raised and overlay) to indicate the depth of interface elements. 

![Design system shadows](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-shadows.webp)

Create 3 border radius options (8pt, 16pt, and 32pt) to use on small, medium, and large interface elements respectively.

![Design system border radius](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-border-radius-1.webp)

---

### 2\. Create reusable modules

Another key part of building a design system is creating reusable parts or modules. Modular design involves breaking things down into smaller, reusable, and replaceable parts called modules or components. Modular design has been used to create cars, machines, buildings, and computers for many years. It’s a great way to improve productivity, efficiency and consistency. 

Always aim to design interfaces in a modular way by doing the following:

*   Start by creating the smallest components such as [buttons](https://www.adhamdannaway.com/blog/ui-design/button-design-tips), avatars, and form input fields. These will be your building blocks.
*   Combine small components to create larger, more complex ones.
*   Arrange components in specific layouts to create reusable page templates.

![Components being combined into templates](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-components-and-templates.webp)

The goal is to create a collection of all components, known as a component library or UI kit. This makes it easy to view, manage, and reuse components.

In the following example, an avatar component is used to create larger components. Firstly, the avatar is paired with text, then placed in a card, which is placed in a list of cards on a landing page template.

![Design system components](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-components.webp)

In the following examples, the same button component is reused inside multiple larger components. In a similar way, each of the larger components can be reused across multiple interfaces or templates.

![Button component being used in different larger components](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-button-component.webp)

---

### 3\. Define usage guidelines

When you build a design system, don’t forget to include instructions on how to use the components and visual styles in the design system. Without clear usage guidelines, there’s little chance that a team of designers and developers will be able to design a consistent product experience. 

Keep guidance concise so that it’s easy to consume and remember. Concise guidelines keep things flexible enough to allow for creative freedom while also maintaining an acceptable level of consistency.

Create specific usage guidelines for the following:

*   **Colours** – define how and where colours should be used e.g. indicate interactive elements using the brand colour.
*   **Text** – define overarching guidelines for using text e.g. use sentence case, left align text.
*   **Components** – define best practices for each component including dos and don’ts e.g. for the button component, ensure buttons are left aligned and avoid disabled buttons.
*   **Templates** – define how components should be used in different templates and any limitations.
*   **Copywriting** – define guidelines for grammar, punctuation, and writing style e.g. front-load text, be concise, and use plain and simple language.

Include any specific rules, do’s and don’ts, live examples, and code snippets. It’s also helpful to include a change log to record updates as well as a future roadmap.

---

## Design, code, or both?

A design system can exist in a design tool like Figma, where it helps to speed up a design team’s workflow. It can also exist in code, where it helps to speed up development. Ideally, a design system will help both designers and developers build websites and apps faster.

For example, a common approach to build a design system is to create a [Figma design system](https://www.practical-ui.com/design-system/) as a [library](https://help.figma.com/hc/en-us/articles/360041051154-Guide-to-libraries-in-Figma) for designers to work from along with a coded version of the design system built in [React](https://react.dev/) and documented in [Storybook](https://storybook.js.org/).

![Storybook screenshot](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-storybook-1.webp)

Depending on your skillset and resources, you can start off with design or code and gradually build the design system as you go.

---

## Design systems for existing websites and apps

What if you have an existing website or app but don’t yet have a design system? The basic process is the same, but you’ll need to do an initial audit to see what you’ve got, what you need, and what you can get rid of. 

*   **Initial audit** – identify and document all components and styles present in your website or app. Simply taking screenshots is a quick and easy approach.  
    
*   **Group items into categories** – group similar items together into categories including: text styles, colours, icons, buttons, navigation, headers, footers, cards, lists, and forms.  
    
*   **Merge similar items** – try to cut down the number of different components and styles in your system. For example, if you have 2 different button styles that are very similar, consider using 1 of them and removing the other. Map unneeded styles or components to new ones. 

It can be a large and difficult process to move an existing website or app to a new design system. I find it best to take an iterative approach, where you do it bit by bit. Start with the most impactful items like colours and typography, then move onto components one at a time. The following example of a [button audit](https://www.adhamdannaway.com/portfolio/creating-a-lean-design-system) demonstrates how having too many similar options can greatly increase complexity. If you’re currently working on buttons, here are some [common button mistakes](https://www.adhamdannaway.com/blog/ui-design/button-design-tips) you should avoid.

![Button audit](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-button-audit.webp)

If you’re updating a page or feature that touches certain components, update those components as part of the feature release. Incorporating the cleanup into your general business will take more time initially, but it will save a lot more time in the long run.

Before you know it, you’ll be well on your way to replacing your old website or app with newly built design system components. During the interim period, both the old and new website or app will exist, before the old one is eventually decommissioned.

---

## Design system team structure

The many advantages of a design system are only realised if it’s used and contributed to by everyone working on the website or app. If you’re a solo creator, it’s easy to ensure a design system is used and updated regularly. If you’re part of a team in a larger organisation, it can be more complicated. 

An approach that generally works well is to have a dedicated centralised design system team. This team serves other product teams by maintaining and managing the design system on a day to day basis. A centralised design system team doesn’t work well unless there’s collaboration with the product teams that are building product features for customers. 

Each product team should have at least one design system ambassador that’s responsible for collaborating with the centralised design system team. Their job is to ensure their team is aligned to the design system guidelines and to contribute customer feedback, insights, and even new components to the design system team. This collaborative approach helps to ensure the design system better services both the team’s and customer’s needs.

![Design system centralised team structure](https://www.adhamdannaway.com/wp-content/uploads/2024/07/design-system-team-structure.webp)

If you don’t have the budget for a dedicated centralised team, the ambassadors from each product team could form a team to build and manage the design system on a part time basis. Where there’s a will, there’s a way.

---

## Practical UI Figma Design System

If you’re strapped for time and need a Figma design system that’s ready to go, you should definitely check out my Practical UI [Figma Design System](https://www.practical-ui.com/design-system/). I’ve been pushing pixels since 2005 and have studied hundreds of design systems over the years, even before they were called design systems.

I wanted to share what I’ve learned by building a lean and powerful design system that’s intuitive, accessible, and beautiful. Creating this design system has been a labour of love and I’ve spent thousands of hours crafting it. I’m confident it will help you design better products faster.

[![Practical UI Figma design system](https://www.adhamdannaway.com/wp-content/uploads/2024/07/figma-design-system-practical-ui.webp)](https://www.practical-ui.com/design-system/)

I hope this step by step guide has helped you understand how to build a design system for your website or app. Setting predefined styles, creating a component library, and defining usage guidelines is a necessary way to speed up your design and development process and maintain consistency throughout your product. All the best on your journey to create your design system.

PS If you found this article helpful, share it with others and follow me on [Twitter](https://www.twitter.com/AdhamDannaway) and [LinkedIn](https://au.linkedin.com/in/adhamdannaway) for daily design tips, tools, resources, and inspiration.