Badge

[

Geist Design System

](/geist)

Search GeistCtrlK

Select a display theme:systemlightdark

# Badge

A label that emphasizes an element that requires attention, or helps categorize with other similar elements.

[

## 

Variants

](#variants)

gray

gray-subtle

blue

blue-subtle

purple

purple-subtle

amber

amber-subtle

red

red-subtle

pink

pink-subtle

green

green-subtle

teal

teal-subtle

inverted

Trial

Turborepo

Show code

[

## 

Sizes

](#sizes)

Small

Medium

Large

Show code

[

## 

With icons

](#with-icons)

gray

gray

gray

gray

gray

gray

blue

blue

blue

blue

blue

blue

purple

purple

purple

purple

purple

purple

amber

amber

amber

amber

amber

amber

red

red

red

red

red

red

pink

pink

pink

pink

pink

pink

green

green

green

green

green

green

teal

teal

teal

teal

teal

teal

inverted

inverted

inverted

Show code

[

## 

Pill

](#pill)

A special link, not quite as prominent as a button, based on `<Badge />` styling.

[Label](#badge#pill)[Label](#badge#pill)[Label](#badge#pill)

[![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-slack-color-light.0dx7eo_y9q60b.svg)![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-slack-color-dark.0dx7eo_y9q60b.svg)Label](#badge#pill)[![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-slack-color-light.0dx7eo_y9q60b.svg)![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-slack-color-dark.0dx7eo_y9q60b.svg)Label](#badge#pill)[![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-slack-color-light.0dx7eo_y9q60b.svg)![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-slack-color-dark.0dx7eo_y9q60b.svg)Label](#badge#pill)

Show code

[

## 

Best Practices

](#best-practices)

*   Use Badge for short, scannable metadata that sits next to the thing it describes: status, plan tier, environment, or role. One badge per row; two side by side is a sign the row needs a second column.
*   For a colored dot without text, use ![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-react-color-light.10u6bjwutdk6d.svg)![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-react-color-dark.0essn2pwe_ukw.svg)Status Dot. For clickable filter chips that toggle a query, use the `pill` variant or a small ![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-react-color-light.10u6bjwutdk6d.svg)![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-react-color-dark.0essn2pwe_ukw.svg)Button.
*   Badges are static labels. Don’t wire `onClick` onto them; promote to a Button or link if the user can act on the value.
*   Keep badge content to text or `icon` + text. Never stack two icons or a child Badge inside a Badge.
*   Pair lifecycle badges (`Alpha`, `Beta`, `Early Access`) with a ![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-react-color-light.10u6bjwutdk6d.svg)![](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/vc-ap-b3331f/_next/static/immutable/media/logo-react-color-dark.0essn2pwe_ukw.svg)Tooltip that names the limit, like `Alpha: API may change before GA`.
*   Title Case, one word when possible, two max: `Active`, `Pending`, `Pro`, `Enterprise Trial`. Match the canonical API or log term: `Production` not `Prod`, `Deployed` not `Live`, `Canceled` not `Cancelled` (the Vercel API uses one L).
*   Don’t add a checkmark icon for success states or an X for errors; the variant carries that signal. Map meaning to color: `green` for healthy, `red` for error, `amber` for warning, `blue` for informational or production, `gray` for neutral. The `-subtle` suffix tones any of them down on dense surfaces.
*   Skip stuffing sentences inside (`Currently Active`, `You are on Pro`); the surrounding row supplies the context.
*   Set `title` for icon-only or ambiguous badges so screen readers announce the meaning. Don’t rely on color alone; the text has to be readable without it.

Was this helpful?