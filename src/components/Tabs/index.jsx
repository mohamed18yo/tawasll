// import * as React from 'react';
import React from 'react';
function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function useTabs(tabs, defaultTab) {
  const state = React.useState();
  const [selectedTab, setSelectedTab] = state;

  const activeIndex = React.useMemo(() => {
    if (selectedTab) {
      return tabs.indexOf(selectedTab);
    }

    return -1;
  }, [selectedTab, tabs]);

  const previousActiveIndex = usePrevious(activeIndex);

  React.useEffect(() => {
    if (tabs.length === 0) {
      setSelectedTab(undefined);

      return;
    }

    if (selectedTab === null || (selectedTab && tabs.includes(selectedTab))) {
      return;
    }

    if (
      typeof previousActiveIndex === 'number' &&
      previousActiveIndex >= 0 &&
      (tabs[previousActiveIndex] || tabs[previousActiveIndex - 1])
    ) {
      setSelectedTab(tabs[previousActiveIndex] || tabs[previousActiveIndex - 1]);

      return;
    }

    if (defaultTab === null) {
      return;
    }

    setSelectedTab(defaultTab && tabs.includes(defaultTab) ? defaultTab : tabs[0]);
  }, [selectedTab, defaultTab, tabs]);

  return state;
}

export function TabPanel({ children, render = 'lazy', ...props }) {
  const [shouldRender, setShouldRender] = React.useState(render === 'always');

  React.useEffect(() => {
    if (props.hidden) {
      return;
    }

    setShouldRender(true);
  }, [props.hidden]);

  return (
    <div style={{ width: '100%', borderRadius: '6px' }} {...props}>
      {shouldRender ? children : null}
    </div>
  );
}
