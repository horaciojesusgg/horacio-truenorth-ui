import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 9999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 10px 0;
`;

const SideMenu: React.FC = () => {

    return (
        <MenuList>
            <div className="flex justify-around items-center w-full mb-8">
                <MenuItem>
                    <Link href="/calculator">Calculator</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/randomstring">Random String</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/sqrt">Square Root</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/transactions">Transactions</Link>
                </MenuItem>
            </div>
        </MenuList>
    );
};

export default SideMenu;
