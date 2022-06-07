# CWind

The goal of this project is to be "`clsx` for tailwind". 

clsx is great. It's tiny, no dependencies, and easy to work with. 

Tailwind is great, it makes UI libraries easier. 

Problem comes up when you start allowing your UI library to accept custom classes. Then what happens when the user adds `className="bg-blue"` when you specified `className="bg-red"`? They're both classes and have the same specificity. 

CWind attempts to work with your tailwind config and resolve such conflicts. Overriding the default class with the custom class. 


## Usage

```tsx
export const MyCustomComponent = ({className}: MyCustomComponentProps) => {
  return <div className={cwind("bg-red m-3 rounded", className)}>This is my custom component</div>
};
```

implementation:
```tsx
<MyCustomComponent className="bg-blue" />
```

## Status

It doesn't work yet. I'm running into issues getting the tailwind config and rules loaded client side. I don't want to grow the bundle of projects that use this to crazy extents. Currently I'm using preval to get tailwind values, but I'll need to move away from that somehow 
