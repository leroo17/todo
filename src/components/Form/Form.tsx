import { useState } from 'react';
import './Form.scss';

export default function Form(props: {createNewToDo: Function}) {
    const [text, setText] = useState<string>('');
    // let createText = '';
    const formSubmit = () => {
        // if (createText) {
        if (text) {
            // props.createNewToDo(createText);
            props.createNewToDo(text);
            // createText = '';
            setText('');
        }
    }
    // const ChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     createText = event.target.value;
    // }


    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    {/* <input type="text" onInput={ChangeText}/> */}
                    <input value={text} type="text" onChange={(e) => setText(e.target.value)}/>
                    <button></button>
                </label>
            </form>
        </div>
    )
}