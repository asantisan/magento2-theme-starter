# magento2-theme-starter
Magento 2 Theme Starter

CSS/LESS Architecture

01-globals This area contains all boilerplate for the main theme such variables, grid systems, typography, resets, libraries, etc.

02-elements This area contains all the simple UI components such as buttons, price box, breadcrumbs, dropdowns, forms, lists, etc. Elements will not contain any layout, they should be styled to fit anywhere in any module.

03-modules This area contains styles for Complex UI components such as header, footer, filters, search bar, catalog grid items, newsletter, etc. Modules contain multiple elements where we add layout and refine them to fit together.

04-views This area is for page-specific styles such as home page, cart, etc. The main goal here is to take elements or modules and combine them adding final layout and refinements.
