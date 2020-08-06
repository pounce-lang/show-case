import React from 'react';
import Tabs, { Tab } from 'react-ui-tabs';
import { IntroPounces } from './introduction/IntroPounces';
import { CorePounces } from './coreWords/CorePounces';
import CanvasPounces from './basicCanvas/CanvasPounces';

export const Examples = () => {
    return(
        <Tabs>
          <Tab tabName="Intro"> 
            <IntroPounces></IntroPounces>
          </Tab>
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