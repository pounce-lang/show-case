import React from 'react';
import Tabs, { Tab } from 'react-ui-tabs';
import { CorePounces } from './coreExamples/CorePounces';
import CanvasPounces from './basicCanvas/CanvasPounces';

export const Examples = () => {
    return(
        <Tabs>
          <Tab tabName="Core Words"> 
            <CorePounces></CorePounces>
          </Tab>
          <Tab tabName="Canvas Dabbling">
            <CanvasPounces></CanvasPounces>
          </Tab>
          <Tab tabName="Games and Animation">
              Content 3
          </Tab>
        </Tabs>
    );
};