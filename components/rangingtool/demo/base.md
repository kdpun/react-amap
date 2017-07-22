---
title: RangingTool 的基本使用
order: 0
---


```jsx
import { Map, RangingTool } from 'react-amap';

class App extends Component {
  constructor(){
    super();
    this.toolEvents = {
      created: (tool) => {
        this.tool = tool;
      }
    }
    this.mapCenter = {longitude: 120, latitude: 35};
  }

  turnOnRangingTool() {
    if(this.tool){
      this.tool.turnOn();
    }
  }

  turnOffRangingTool() {
    if(this.tool){
      this.tool.turnOff();
    }
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%', position: 'absolute'}}>
        <Map
          center={this.mapCenter}
          events={{click: () => this.turnOnRangingTool(), rightclick: ()=>this.turnOffRangingTool}}
        >
          <RangingTool events={this.toolEvents}/>
        </Map>
      </div>
    );
  }
}

export default App;
```
