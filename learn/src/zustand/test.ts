import { useCounterStore }  from './store.ts';

// 方法1: 每次操作后重新获取状态
console.log('初始状态:', useCounterStore.getState().count);

useCounterStore.getState().increment();
console.log('增加后:', useCounterStore.getState().count);

useCounterStore.getState().decrement();
console.log('减少后:', useCounterStore.getState().count);

// 方法2: 使用subscribe监听状态变化
console.log('\n--- 使用订阅方式 ---');

const unsubscribe = useCounterStore.subscribe((state) => {
  console.log('状态变化:', state.count);
});

const { increment, decrement } = useCounterStore.getState();

increment();
increment();
decrement();

// 清理订阅
unsubscribe();
