// 회원가입
// 이름
// 생년월일
// 국적
// 자기소개

import { useState, useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name : "",
        birth:"",
        country:"",
        bio:""
    })

    const countRef = useRef(0)
    const inputRef = useRef()
    console.log(input)
    let count = 0;

    const onChange = (e) => {
        // countRef.current++;
        count++; // 1만 나옴 이유는 리렌더링 될 때 count 변수도 같이 리렌더링 되면서 0으로 초기화가 되기 때문
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = () =>{
        if(input.name ===""){
            //이름을 입력하는 DOM요소 포커스
            inputRef.current.focus()
        }
    }

    return (
        <div>
            
            <div>
                <input
                ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"} />
            </div>
            <div>
                <input 
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date"/>
            </div>
            <div>
                <select 
                    name="country"
                    value={input.country} 
                    onChange={onChange}>
                    <option value="kr" >한국</option>
                    <option value="us">미국</option>
                    <option value="uk" >영국</option>
                </select>
            </div>
            <div>
                <textarea 
                    name="bio"
                    value={input.bio} 
                    onChange={onChange}>
                    
                </textarea>
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    )
}
export default Register;