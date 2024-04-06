'use client'

import {Dropdown, 
        DropdownTrigger,
        DropdownMenu, 
        DropdownItem, 
        Button
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function DropdownRotas() {

  const [selectedKeys, setSelectedKeys] = useState("");

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
          className="capitalize"
        >
          {selectedValue}
          <ChevronDown/>
        </Button>
        
      </DropdownTrigger>
      <DropdownMenu 
       aria-label="Action event example"               
       selectionMode="single"
       selectedKeys={selectedKeys}
       onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="top">Top</DropdownItem>
        <DropdownItem key="jungle">Jungle</DropdownItem>
        <DropdownItem key="mid">Mid</DropdownItem>
        <DropdownItem key="adCarry">Ad Carry</DropdownItem>
        <DropdownItem key="support">Support</DropdownItem>                
      </DropdownMenu>
    </Dropdown>
  );
}
