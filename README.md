# react-wodry
Plugin for a text flipping/rotating build in react function component


## about

Based (replicate) on the [**jquery wodry plugin**](https://github.com/daynin/wodry) to make easy the same implementation in react templates


** refer to the original plugin demo page to know animation and params suported **
[**http://daynin.github.io/wodry/#examples**](http://daynin.github.io/wodry/#examples)

## install

npm i react-wodry

## use

  ```jsx
  import ReactWodry from 'react-wodry'

  <div className="myContainer">
    We Can Help You
    {` `}
    <ReactWodry 
      content={["Create", "Design", "Profit"]}
      animation={'rotateX'}
      delay={2000}
      animationDuration={500}
    />
  </div>
  ```



** Not sure but since I used react hooks, react 16.8 + may be required **