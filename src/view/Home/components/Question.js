import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    
    <Fragment>
    <div className="max-w-[1200px] mx-auto p-3 mt-5 ">
    <h1 className="font-bold text-2xl flex justify-center">Frequently Asked Question</h1>
    <h1 className="text-sm flex justify-center text-[#808080]">Waana Something ask?</h1>
    <div className=" flex flex-wrap justify-between ">
    <div className="flex-1 max-w-[500px] ">
   
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        <h1 className="text-base text-[#808080]">Lorem ipsum?</h1>
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        <h1 className="text-base text-[#808080]">Lorem ipsum?</h1>
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        <h1 className="text-base text-[#808080]">Lorem ipsum?</h1>
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      </div>
      <div className="flex-1 max-w-[500px] text-[#808080]">
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        <h1 className="text-base text-[#808080]">Lorem ipsum?</h1>
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        <h1 className="text-base text-[#808080]">Lorem ipsum?</h1>
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)}>
        <h1 className="text-base text-[#808080]">Lorem ipsum?</h1>
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      </div>
      </div>
      </div>
    </Fragment>
    
  );
}
