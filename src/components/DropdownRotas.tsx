'use client'

import {Dropdown, 
        DropdownTrigger,
        DropdownMenu, 
        DropdownItem, 
        Button
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

export default function DropdownRotas() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >
          <ChevronDown/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Top</DropdownItem>
        <DropdownItem key="new">Jungle</DropdownItem>
        <DropdownItem key="new">Mid</DropdownItem>
        <DropdownItem key="new">Bottom</DropdownItem>
        <DropdownItem key="new">Support</DropdownItem>                
      </DropdownMenu>
    </Dropdown>
  );
}
