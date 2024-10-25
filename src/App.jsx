import { useEffect, useState } from 'react'
import './App.css'
import Box from './Box'
import './Box.css'



export default function App() {

  // Load boxes once when the page has loaded
  const [boxes, setBoxes] = useState(Array(9).fill('box'));
  useEffect(()=> {
  }, [])
  
  function handleBoxClick(i) {
    let newBoxes = [...boxes];
    newBoxes[i] = toggleClass(newBoxes[i]);

    let up = i-3;
    let left = i-1;
    let right = i+1;
    let down = i+3;
    const colNum = 3;

    // If the clicked box is not in the rightmost column and the right index is valid, 
    // change the color of the box to the right
    if (i%colNum<2 && validateIdx(right)){
      newBoxes[right] = toggleClass(newBoxes[right]);
    }

    // If the clicked box is not in the leftmost column and the left index is valid, 
    // change the color of the box to the left
    if (i%colNum>0 && validateIdx(left)){
      newBoxes[left] = toggleClass(newBoxes[left]);
    }

    // If index of the box above is valid, change the color of the box above 
    if(validateIdx(up)){
      newBoxes[up] = toggleClass(newBoxes[up]);
    }

    // If index of the box below is valid, change the color of the box below 
    if(validateIdx(down)){
      newBoxes[down] = toggleClass(newBoxes[down]);
    }

    setBoxes(newBoxes)

  }
  
  // validate if an index is valid, within the range of 0-8
  function validateIdx(index) {
    if(index>=0 && index<=8) {
      return true;
    } else{
      return false;
    }
  }

  function toggleClass(className){
    return className.includes('selected') ? 'box' : 'box selected';
  }

  return (
    <div className="container">
      {boxes.map((className, i) => (
        <Box 
          key={i}
          className={className}
          onClick={() => handleBoxClick(i)}
        />
      ))}
    </div>
  )
}
