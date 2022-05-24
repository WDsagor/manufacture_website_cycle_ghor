import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardItem from './DashboardItem';

const DasshBoard = () => {
    return (
            <DashboardItem>
              <Outlet />
            </DashboardItem>
    );
};

export default DasshBoard;