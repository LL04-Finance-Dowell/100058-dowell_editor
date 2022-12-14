import React, {useRef} from 'react'
import ReactDOM from 'react-dom';
import "./LeftMenu.css";
import { editSecOptions } from "../../data/data";

import { useStateContext } from '../../contexts/contextProvider';

import MidSection from '../midSection/MidSection';
import TextFill from './comp/TextFill';
import TextBox from './comp/TextBox'; 
// import { EditorContent } from '@tiptap/react';




const NavButton = ({ customFunc, icon, dragStartFunc }) => (
  <button type='button'
    draggable='true'
    onDragStart={dragStartFunc}
    // onDragEnd={customFunc}

  >
    <img src={icon} alt="icon" />
  </button>
)


const dragStartAlign = e => {

  e.dataTransfer.setData("text/plain", "TEXT_INPUT");
  console.log("drag start");
}

const dragStartTextF = e => {
  e.dataTransfer.setData("text/plain", "TEXT_FILL");
}

const dragStartImage = e => {
  e.dataTransfer.setData("text/plain", "IMAGE_INPUT");
}

const dragStartTable = e => {
  e.dataTransfer.setData("text/plain", "TABLE_INPUT");
}

const dragStartSigns = e => {
  e.dataTransfer.setData("text/plain", "SIGN_INPUT");
}

const dragStartCalendar = e => {
  e.dataTransfer.setData("text/plain", "DATE_INPUT");
}

const dragStartDropdown = e => {
  e.dataTransfer.setData("text/plain", "DROPDOWN_INPUT");
}




export const onDrop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  if(data === "TEXT_INPUT") {
    console.log("text inputtt")

    // const textInput = document.createElement("textarea");
    // textInput.className = "dropped7";
    // textInput.placeholder = "Enter text here";
    // textInput.style.width = "20%";
    // textInput.style.height = "10%";
    // textInput.onclick = handleClick('align2')


    // document.getElementsByClassName("midSection_container").item(0).appendChild(textInput);
  }
  // const data = event.dataTransfer.getData("text/plain");
  // console.log(data);
  // if (data === "TEXT_INPUT") {
  //   console.log("text input");
  // } return TextBox();
  
}

export const dragOver = (event) => {
  const isLink = event.dataTransfer.types.includes("text/plain");
  if (isLink) {
    event.preventDefault();
    console.log("drag over");
  }
}
const LeftMenu = ({ showSidebar }) => {

  const alignRef = useRef(null);
const textfillRef = useRef(null);
const imageRef = useRef(null);
const tableRef = useRef(null);
const signsRef = useRef(null);
const calendarRef = useRef(null);
const dropdownRef = useRef(null);




  const { handleDrop } = useStateContext()
  return (
    <div className="leftMenu">

      <NavButton dragStartFunc={dragStartAlign} customFunc={() => handleDrop('align')} icon={editSecOptions[0].icon} />
      <NavButton dragStartFunc={dragStartTextF} customFunc={() => handleDrop('textfill')} icon={editSecOptions[1].icon} />
      <NavButton dragStartFunc={dragStartImage} customFunc={() => handleDrop('image')} icon={editSecOptions[2].icon} />
      <NavButton dragStartFunc={dragStartTable} customFunc={() => handleDrop('table')} icon={editSecOptions[3].icon} />
      <NavButton dragStartFunc={dragStartSigns} customFunc={() => handleDrop('signs')} icon={editSecOptions[4].icon} />
      <NavButton dragStartFunc={dragStartCalendar} customFunc={() => handleDrop('calendar')} icon={editSecOptions[5].icon} />
      <NavButton dragStartFunc={dragStartDropdown} customFunc={() => handleDrop('dropdown')} icon={editSecOptions[6].icon} />


    </div>
  );
};

export default LeftMenu;
