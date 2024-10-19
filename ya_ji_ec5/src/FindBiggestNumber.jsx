import { useState } from "react";

function FindBiggestNumber() {
    const [inputStr, setInputStr] = useState('');
    const [biggestNum, setBiggestNum] = useState(null);

    const findBiggestNum = (inputArray) => {
        let maxNum = undefined;
        if (!Array.isArray(inputArray)) return undefined;
        for (let subarray of inputArray) {
            if (!Array.isArray(subarray)) continue;

            for (let num of subarray) {
                if (typeof(num) === "number" && !isNaN(num)) {
                    if (maxNum === undefined || num > maxNum) {
                        maxNum = num;
                    }
                }
            }
        }
        return maxNum;
    }

    const function handleAndUpdate = () => {
        
    }
}