import React, { useEffect, useState } from 'react'

const WordFlip = (props) => {

  let { content, animation, animationDuration, delay, shift } = props
  animationDuration = animationDuration ? animationDuration : 500
  delay = delay ? delay : 2000
  animation = animation ? animation : 'rotateX'
  shift = shift ? shift : {x:0, y:0, z:0}

  const [currentPosition, setCurrentPosition] = useState(0)
  const [runAnimation, setRunAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      flipNextText()
    }, delay)
  }, [currentPosition])

  const flipNextText = () => {

    setRunAnimation(true)

    setTimeout(() => {
      setRunAnimation(false)
    }, animationDuration)
    // }, (animation.slice(0,6) === 'rotate' && animation !== 'rotateAll') ? animationDuration : delay)

    if (currentPosition === content.length - 1) {
      setCurrentPosition(0)
    } else {
      setCurrentPosition(currentPosition+1)
    }
  };
    
  const flipping = () => {

    let flippingStyle = {}, frontStyle = {} , backStyle = {}

    if (animation.slice(0,6) === 'rotate') {
      flippingStyle = {
        transform: `${animation === 'rotateAll' ? 'rotateX(180deg) rotateY(180deg)': animation + '(180deg)'}`,
        transition: `all ${animationDuration}ms ease 0s`,
        display: 'inline-block'
      }

      frontStyle = {
        transform: `translate3d(${shift.x}px, ${shift.y}px, ${shift.x}px) ${animation === 'rotateAll' && runAnimation ? 'rotateX(180deg) rotateY(180deg)' : ''}`,
        display: animation === 'rotateAll' ? 'none': ''
      }

      backStyle = {
        transform: `translate3d(${shift.x}px, ${shift.y}px, ${shift.x}px) ${animation === 'rotateAll'  && runAnimation ? 'rotateX(180deg) rotateY(180deg)': animation + '(180deg)'}`
      }
    }

    if (animation.slice(0,5) === "scale") {
      flippingStyle = {
        transform: `${animation === "scaleAll" ? 'scaleY(10) scaleX(10)' : animation + '(10)'}`,
        transition: `all ${animationDuration}ms ease 0s`,
        display: 'inline-block'
      }
      backStyle = {
        transform: `translate3d(${shift.x}px, ${shift.y}px, ${shift.x}px) ${animation === "scaleAll" ? 'scaleY(0.1) scaleX(0.1)' : animation + '(0.1)' }`
      }
    }

    if (animation === "clockwise" || animation === "anticlockwise") {
      const animationKind = animation === "clockwise" ? 'rotate3d(40,100,80,180deg)' : 'rotate3d(100,40,-80,180deg)'

      flippingStyle = {
        transform: animationKind,
        transition: `all ${animationDuration}ms ease 0s`,
        display: 'inline-block'
      }
      backStyle = {
        transform: `translate3d(${shift.x}px, ${shift.y}px, ${shift.x}px) ${animationKind}`
      }
    }

    const idx = currentPosition
    const length = content.length - 1
    let backPosition = idx
    let frontPosition = idx === 0 ? length : idx - 1

    if (!runAnimation && animation.slice(0,6) === 'rotate' && animation !== 'rotateAll') {
      backPosition = frontPosition
      frontPosition = idx
    }
    return (
      <span className={`wodry-flipping`} style={runAnimation ? flippingStyle : {}}>
        {
          animation.slice(0,6) === 'rotate' &&
          <div>
            <span className="front-face" style={frontStyle}>{content[frontPosition]}</span>
            <span className="back-face" style={animation !== 'rotateAll' || runAnimation ? backStyle : {}}>{content[backPosition]}</span>
          </div>
        }
        {
          animation.slice(0,5) === "scale" &&
          <span className="back-face" style={runAnimation ? backStyle : {}}>{content[backPosition]}</span>
        }
        {
          (animation === "clockwise" || animation === "anticlockwise") &&
          <span className="back-face" style={runAnimation ? backStyle : {}}>{content[backPosition]}</span>
        }
      </span>
    )
  }

  return (
    <span className='wodry'>
      {flipping()}
    </span>
  )

}

export default WordFlip