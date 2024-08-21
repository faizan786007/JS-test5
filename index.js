// 1. Two Sum
// ● Problem: Given an array of integers and a target sum, return the indices of the two
// numbers that add up to the target.
// ● Input 1: [2, 7, 11, 15], 9
// ● Output 1: [0, 1]
// ● Input 2: [3, 2, 4], 6
// ● Output 2: [1, 2]

// function sum(input, target) {
// 	let newInput = input.map((ele, index) => ({ ele, index }));
// 	newInput = newInput.sort((a, b) => a.ele - b.ele);
// 	// console.log(sortInput);
// 	// console.log(newInput);
// 	let s = 0;
// 	let e = input.length - 1;
// 	let output = [];
// 	while (s < e) {
// 		if (newInput[s].ele + newInput[e].ele > target) e--;
// 		else if (newInput[s].ele + newInput[e].ele < target) s++;
// 		else {
// 			output.push(newInput[s].index);
// 			output.push(newInput[e].index);
// 			e--;
// 		}
// 	}
// 	return output;
// }
// let input1 = [2, 7, 11, 15];
// let target1 = 9;
// console.log(sum(input1, target1));
// let input2 = [3, 2, 4];
// let target2 = 6;
// console.log(sum(input2, target2));
/************************************************************************************************* */
// 2. Valid Parentheses
// ● Problem: Given a string containing just the characters (, ), {, }, [ and ], determine if
// the input string is valid.
// ● Input 1: "()[]{}"
// ● Output 1: true
// ● Input 2: "(]"
// ● Output 2: false
// function validParentheses(s) {
// 	let stack = [];
// 	const library = {
// 		"(": ")",
// 		"{": "}",
// 		"[": "]",
// 	};

// 	for (let char of s) {
// 		if (library[char]) {
// 			// console.log(library[char]);
// 			stack.push(library[char]);
// 		} else {
// 			if (stack.pop() !== char) return false;
// 		}
// 	}

// 	return stack.length === 0;
// }
// console.log(validParentheses("()[]{}"));

// console.log(validParentheses("(]"));
/*************************************************************************************************** */
// 3. Merge Two Sorted Arrays
// ● Problem: Given two sorted arrays, merge them into one sorted array.
// ● Input 1: [1, 3, 5], [2, 4, 6]
// ● Output 1: [1, 2, 3, 4, 5, 6]
// ● Input 2: [1, 2, 3], [2, 5, 6]
// ● Output 2: [1, 2, 2, 3, 5, 6]
// function mergeArray(arr1, arr2) {
// 	let mergeArray = [];
// 	let i = 0;
// 	let j = 0;
// 	while (i < arr1.length && j < arr2.length) {
// 		if (arr1[i] < arr2[j]) {
// 			mergeArray.push(arr1[i]);
// 			i++;
// 		} else {
// 			mergeArray.push(arr2[j]);
// 			j++;
// 		}
// 	}
// 	while (i < arr1.length) {
// 		mergeArray.push(arr1[i]);
// 		i++;
// 	}
// 	while (j < arr2.length) {
// 		mergeArray.push(arr2[j]);
// 		j++;
// 	}
// 	return mergeArray;
// }
// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// console.log(mergeArray(arr1, arr2));
/********************************************************************************************* */
// 4. Longest Substring Without Repeating Characters
// ● Problem: Given a string, find the length of the longest substring without repeating
// characters.
// ● Input 1: "abcabcbb"
// ● Output 1: 3 (substring "abc")
// ● Input 2: "bbbbb"
// ● Output 2: 1 (substring "b")
// function lengthOfLongestSubSstring(s) {
// 	let charSet = new Set();
// 	let maxLength = 0;
// 	let start = 0;
// 	for (let end = 0; end < s.length; end++) {
// 		while (charSet.has(s[end])) {
// 			charSet.delete(s[start]);
// 			start++;
// 		}
// 		charSet.add(s[end]);
// 		maxLength = Math.max(maxLength, end - start + 1);
// 	}
// 	return maxLength;
// }
// let s = "abcabcbb";
// console.log(lengthOfLongestSubSstring(s));
// let s1 = "bbbbb";
// console.log(lengthOfLongestSubSstring(s1));
/************************************************************************************************************* */
// 5. Product of Array Except Self
// ● Problem: Given an array nums of n integers, return an array output such that
// output[i] is equal to the product of all the elements of nums except nums[i].
// ● Input 1: [1, 2, 3, 4]
//output :[24,12,8,6]
// function product(input) {
// 	let output = [];

// 	for (let i = 0; i < input.length; i++) {
// 		let prod = 1;
// 		for (let j = 0; j < input.length; j++) {
// 			if (i !== j) {
// 				prod *= input[j];
// 			}
// 		}
// 		output.push(prod);
// 	}
// 	return output;
// }
// let arr1 = [1, 2, 3, 4];
// console.log(product(arr1));
