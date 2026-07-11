Banner

[

Geist Design System

](/geist)

Search GeistCtrlK

Select a display theme:systemlightdark

# Banner

A prominent message that spans the full width of its container to announce important information.

[

## 

Default

](#default)

[**Big News** – New components finally available](#)

**Big News** – New components finally available

[Read more](#)

Hide code

```
1import { Banner } from '@vercel/geistcn/components';2import type { JSX } from 'react';3
4export function Component(): JSX.Element {5  return (6    <Banner button={{ href: '#', content: 'Read more' }} className="p-4">7      <b>Big News</b> – New components finally available8    </Banner>9  );10}
```

Was this helpful?