import React from 'react';
import isFun from '../utils/isFun';
import log from '../utils/log';

type RTProps = {
  __map__: Object,
  __ele__: HTMLElement,
  events: Object,
};

class RangingTool extends React.Component {

  constructor(props: RTProps) {
    super(props);
    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        log.warning('MAP_INSTANCE_REQUIRED');
      } else {
        this.map = props.__map__;
        this.loadToolInstance(props);
      }
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  loadToolInstance(props: RTProps) {
    this.map.plugin(['AMap.RangingTool'], () => {
      this.createToolInstance(props);
    });
  }

  createToolInstance(props: MTProps) {
    this.tool = new window.AMap.RangingTool(this.map);

    const events = props.events || {};
    if (isFun(events.created)) {
      events.created(this.tool);
    }
    if (isFun(events.addnode)) {
      this.tool.on('addnode', (e) => {
        events.addnode(e);
      });
    }
    if (isFun(events.removenode)) {
      this.tool.on('removenode', (e) => {
        events.removenode(e);
      });
    }
    if (isFun(events.end)) {
      this.tool.on('end', (e) => {
        events.end(e);
      });
    }

    return this.tool;
  }

  render() {
    return (null);
  }
}

export default RangingTool;
