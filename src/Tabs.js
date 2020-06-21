import React from 'react';
import Tabs, { Tab } from 'react-ui-tabs';
import { CorePounces } from './coreExamples/CorePounces';

export const Examples = () => {
    return(
        <Tabs>
          <Tab tabName="Core Words"> 
            <CorePounces></CorePounces>
          </Tab>
          <Tab tabName="Canvas Dabbling">
              Content 2
          </Tab>
          <Tab tabName="Games and Animation">
              Content 3
          </Tab>
        </Tabs>
    );
};