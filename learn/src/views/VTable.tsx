import { useEffect, useRef } from 'react';
import './VTable.css';
import { Gantt, tools } from '@visactor/vtable-gantt';

const records = [
  {
    id: 1,
    title: 'Software Development',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-15',
    progress: 31,
    priority: 'P0',
    children: [
      {
        id: 2,
        title: 'Project Feature Review',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-07-24',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024/07/25',
        end: '2024/07/26',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 3,
        title: 'Project Create',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024/07/27',
        end: '2024/07/26',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 3,
        title: 'Develop feature 1',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024/08/01',
        end: '2024/08/15',
        progress: 0,
        priority: 'P1'
      }
    ]
  },
  {
    id: 2,
    title: 'Scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '07/24/2024',
    end: '08/04/2024',
    progress: 60,
    priority: 'P0'
  },
  {
    id: 3,
    title: 'Determine project scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-04',
    progress: 100,
    priority: 'P1',
    children: [
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-01',
        end: '2024-08-01',
        progress: 90,
        priority: 'P0'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-30',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024.07.26',
        end: '2024.07.08',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '07.24.2024',
        end: '08.04.2024',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-16',
        end: '2024-07-18',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-09',
        end: '2024-09-11',
        progress: 100,
        priority: 'P1'
      }
    ]
  },

  {
    id: 1,
    title: 'Software Development',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-04',
    progress: 31,
    priority: 'P0'
  },
  {
    id: 2,
    title: 'Scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-26',
    end: '2024-07-28',
    progress: 60,
    priority: 'P0',
    children: [
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1',
        children: [
          {
            id: 1,
            title: 'Software Development',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-24',
            end: '2024-08-04',
            progress: 31,
            priority: 'P0'
          },
          {
            id: 2,
            title: 'Scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-26',
            end: '2024-07-28',
            progress: 60,
            priority: 'P0'
          },
          {
            id: 3,
            title: 'Determine project scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-29',
            end: '2024-07-31',
            progress: 100,
            priority: 'P1'
          }
        ]
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0',
        children: [
          {
            id: 1,
            title: 'Software Development',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-24',
            end: '2024-08-04',
            progress: 31,
            priority: 'P0'
          },
          {
            id: 2,
            title: 'Scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-06',
            end: '2024-07-08',
            progress: 60,
            priority: 'P0'
          },
          {
            id: 3,
            title: 'Determine project scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-29',
            end: '2024-07-31',
            progress: 100,
            priority: 'P1'
          }
        ]
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1',
        children: [
          {
            id: 1,
            title: 'Software Development',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-24',
            end: '2024-08-04',
            progress: 31,
            priority: 'P0'
          },
          {
            id: 2,
            title: 'Scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-06',
            end: '2024-07-08',
            progress: 60,
            priority: 'P0'
          }
        ]
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      }
    ]
  },

  {
    id: 3,
    title: 'Determine project scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-29',
    end: '2024-07-31',
    progress: 100,
    priority: 'P1',
    children: [
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-23',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-30',
        end: '2024-08-14',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 60,
        priority: 'P0'
      }
    ]
  },
  {
    id: 1,
    title: 'Software Development',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-04',
    progress: 31,
    priority: 'P0',
    children: [
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024/07/24',
        end: '2024/08/04',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-04',
        end: '2024-08-04',
        progress: 90,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '07/24/2024',
        end: '08/04/2024',
        progress: 60,
        priority: 'P0'
      }
    ]
  },
  {
    id: 2,
    title: 'Scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-27',
    end: '2024-07-28',
    progress: 60,
    priority: 'P0'
  },
  {
    id: 3,
    title: 'Determine project scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-29',
    end: '2024-07-31',
    progress: 100,
    priority: 'P1',
    children: [
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '07.24.2024',
        end: '08.04.2024',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-09',
        end: '2024-09-11',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      }
    ]
  },
  {
    id: 1,
    title: 'Software Development',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-04',
    progress: 31,
    priority: 'P0',
    children: [
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024.07.06',
        end: '2024.07.08',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      }
    ]
  }
];

const columns = [
  {
    field: 'title',
    title: 'title',
    width: 'auto',
    sort: true,
    tree: true,
    editor: 'input'
  },
  {
    field: 'start',
    title: 'start',
    width: 'auto',
    fieldFormat: ({start}) => {
      start = String(start).replace(/\.|\//g, '-');
      const date = new Date(start);
      return date.toISOString().slice(0, 16).replace('T', ' ');
     },
    sort: true,
    editor: 'date-input'
  },
  {
    field: 'end',
    title: 'end',
    width: 'auto',
    fieldFormat: ({end}) => {
      end = String(end).replace(/\.|\//g, '-');
      const date = new Date(end);
      return date.toISOString().slice(0, 16).replace('T', ' ');
     },
    sort: true,
    editor: 'date-input'
  },
  {
    field: 'priority',
    title: 'priority',
    width: 'auto',
    sort: true,
    editor: 'input'
  },
  {
    field: 'progress',
    title: 'progress',
    width: 'auto',
    sort: true,
    headerStyle: {
      borderColor: '#e1e4e8'
    },
    style: {
      borderColor: '#e1e4e8',
      color: 'green'
    },
    editor: 'input'
  }
];
const option = {
  overscrollBehavior: 'none' as const,
  records,
  taskListTable: {
    columns,
    tableWidth: 250,
    minTableWidth: 100,
    maxTableWidth: 600
  },
  grid: {
    verticalLineDependenceOnTimeScale: 'minute',
    verticalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8'
    }
  },
  headerRowHeight: 40,
  rowHeight: 40,
  taskBar: {
    startDateField: 'start',
    endDateField: 'end',
    progressField: 'progress',
    resizable: true,
    moveable: true,
    hoverBarStyle: {
      barOverlayColor: 'rgba(99, 144, 0, 0.4)'
    }
  },
  frame: {
    outerFrameStyle: {
      borderLineWidth: 1,
      borderColor: '#e1e4e8'
    },
    verticalSplitLineMoveable: true
  },
  timelineHeader: {
    colWidth: 80,
    backgroundColor: '#EEF1F5',
    horizontalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8'
    },
    verticalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8'
    },
    scales: [
      {
        unit: 'day' as const,
        step: 1,
        format: (date) => {
          return `${date.dateIndex}`;
        },
        style: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center' as const,
          textBaseline: 'middle' as const,
          backgroundColor: '#EEF1F5'
        }
      },
      {
        unit: 'hour' as const,
        step: 1,
        /* format: (date) => {
          console.log(date.startDate.getHours(), 'start');
          return `${date.startDate.getHours()}`;
        }, */
        style: {
          fontSize: 12,
          color: '#666',
          textAlign: 'center' as const,
          textBaseline: 'middle' as const,
          backgroundColor: '#F8F9FA'
        }
      },
      /* {
        unit: 'minute' as const,
        step: 1,
        format: (date) => {
          return `${date.dateIndex}`;
        },
        style: {
          fontSize: 12,
          display: 'none' as const, // 隐藏分钟级别的刻度
          color: '#20835d',
          textAlign: 'center' as const,
          textBaseline: 'middle' as const,
          backgroundColor: '#F8F9FA'
        }
      } */
    ]
  },
  markLine: [
    {
      date: '2024-07-28T14:00:00',
      style: {
        lineWidth: 1,
        lineColor: 'blue',
        lineDash: [8, 4]
      }
    },
    {
      date: '2024-08-17T16:30:00',
      style: {
        lineWidth: 2,
        lineColor: 'red',
        lineDash: [8, 4]
      }
    }
  ],
  rowSeriesNumber: {
    title: '行号',
    dragOrder: true,
    headerStyle: {
      bgColor: '#EEF1F5',
      borderColor: '#e1e4e8'
    },
    style: {
      borderColor: '#e1e4e8'
    }
  },
  scrollStyle: {
    scrollRailColor: 'RGBA(246,246,246,0.5)',
    visible: 'scrolling' as const,
    width: 6,
    scrollSliderCornerRadius: 2,
    scrollSliderColor: '#5cb85c'
  }
};

function VTable() {
  const domContainerRef = useRef<HTMLDivElement>(null);
  const ganttRef = useRef<Gantt | null>(null);
  const optionRef = useRef(option);

  useEffect(() => {
    if (domContainerRef.current) {
      try {
        if (ganttRef.current) {
          ganttRef.current.release();
          ganttRef.current = null;
        }

        ganttRef.current = new Gantt(domContainerRef.current, optionRef.current);
      } catch (error) {
        console.error('Failed to initialize Gantt chart:', error);
        console.error('Option configuration:', optionRef.current);
      }

      return () => {
        // 清理 Gantt 实例
        if (ganttRef.current) {
          try {
            ganttRef.current.release();
            ganttRef.current = null;
          } catch (error) {
            console.error('Failed to cleanup Gantt chart:', error);
          }
        }
      };
    }
  }, []);

  return (
    <div className="v-table" ref={domContainerRef}>
    </div>
   );
}

export default VTable;