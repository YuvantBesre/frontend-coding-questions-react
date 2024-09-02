import React, { createRef, useEffect, useRef, useState } from 'react'
import Note from './Note';


const INITIAL_DATA = [
  {
    id : 1,
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consectetur nemo illum eaque unde nobis neque maxime laudantium similique sint pariatur corrupti qui temporibus minus, eum, ex quam? Omnis laboriosam consequuntur fugiat consequatur molestiae aspernatur",
  },
  {
    id : 2,
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]
const DragAndDropBoard = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const noteRefs = useRef([]);

  useEffect(() => {
    // Check if the data is in localstorage or not. 
    const stringyfiedData = localStorage.getItem('notes__data')
    const parsedData = JSON.parse(stringyfiedData) || INITIAL_DATA;

    const savedNotes = parsedData.map(data => {
      if(data['position']) return {...data}
      else {
        const newPosition = determineNewPosition();
        return {...data, position : newPosition}
      }
    });

    setData(savedNotes);
    localStorage.setItem('notes__data', JSON.stringify(savedNotes));

  }, [])

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x : Math.floor(Math.random() * (maxX + 1)),
      y : Math.floor(Math.random() * (maxY + 1)),
    }
  }

  const handleDragAndDrop = (event, note, index) => {
    console.log(event);
    console.log(note);
    
    const dimensions = noteRefs.current[index].current.getBoundingClientRect()
    console.log(dimensions);
    
    const offsetX = event.clientX - dimensions.left;
    const offsetY = event.clientY - dimensions.top;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRefs.current[index].current.style.left = newX;
      noteRefs.current[index].current.style.top = newY;
    }

    const handleMouseUp = (e) => {
      document.removeEventListener('onmousemove', handleMouseMove);
      document.removeEventListener('onmouseout', handleMouseUp);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  return (
    <div className='dd-board'>
      {
        data.map((note, index) => (
          <div key={index} onMouseDown={(e) => handleDragAndDrop(e, note, index)}>
            <Note 
              ref = {noteRefs.current[index] ? noteRefs.current[index] : (noteRefs.current[index] = createRef())}
              data = {note.content}
              position = {note?.position || {}}
            />
          </div>
        ))
      }
    </div>
  )
}

export default DragAndDropBoard