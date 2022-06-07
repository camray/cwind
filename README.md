# CWind

The goal of this project is to be "`clsx` for tailwind". 

clsx is great. It's tiny, no dependencies, and easy to work with. 

Tailwind is great, it makes UI libraries easier. 

Problem comes up when you start allowing your UI library to accept custom classes. Then what happens when the user adds `className="bg-blue"` when you specified `className="bg-red"`? They're both classes and have the same specificity. 

CWind attempts to work with your tailwind config and resolve such conflicts. Overriding the default class with the custom class. 
