import { forwardRef, useImperativeHandle, useRef, Ref } from 'react';

type Props = {};

const MyInput = forwardRef(function MyInput(props: Props, ref: Ref<HTMLInputElement>) {
  const innerRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focus() {
        innerRef?.current?.focus();
      },
      scrollIntoView() {
        innerRef?.current?.scrollIntoView();
      },
    };
  }, []);
  return (
    <div>
      <p>MyInput</p>
      <input {...props} ref={innerRef} type='text' />
    </div>
  )
});

function TestUseImperativeHandle() {
  const myRef = useRef<HTMLInputElement>();
  const handleClick = () => {
    myRef?.current?.focus()
    console.log('MyInput:', myRef)
  }
  return (
    <div>
      <MyInput ref={myRef} onClick={handleClick}></MyInput>
      <button onClick={handleClick}>focus</button>
    </div>
  )
}

export default TestUseImperativeHandle;