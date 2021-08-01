# react-wodry
Plugin for a text flipping/rotating build in react function component


## about

Based (replicate) on the [**jquery wodry plugin**](https://github.com/daynin/wodry) to make easy the same implementation in react templates


~~** refer to the original plugin demo page to know animation and params suported **
[http://daynin.github.io/wodry/#examples](http://daynin.github.io/wodry/#examples)~~

it seems that the original repo is no longer available, refer to the **bower repo**[https://libraries.io/bower/wodry] for same informaton
or **here**[https://www.jq22.com/demo/wodry-master/#get_it]


## install

`npm i react-wodry`

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

