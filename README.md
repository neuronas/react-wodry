# react-wodry
a plugin for a text flipping/rotating build in react function component


## react-wodry

An React component implementation of the [**jquery wodry plugin**](https://github.com/daynin/wodry)


https://github.com/neuronas/react-wodry


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
  ```sh