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
          <Tab tabName="Canvas">
            <CanvasPounces></CanvasPounces>
          </Tab>
          <Tab tabName="Audio">
              Under Construction
          </Tab>
        </Tabs>
    );
};