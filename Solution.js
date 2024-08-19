/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] > nums[i]) {
      currentSum += nums[i];
    } else {
      currentSum = nums[i];
    }
    console.log("current: ", currentSum);

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    console.log("max: ", maxSum);
  }
  return maxSum;
};

var reverseWord = function (text) {
  let reversedWord = "";
  for (let i = text.length - 1; i >= 0; i--) {
    console.log(i);
    reversedWord += text[i];
  }
  return reversedWord;
};

var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = nums[i];
      nums[i] = temp;
      lastNonZeroFoundAt++;
    }
  }
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (let char of s) {
    //logical OR operator
    count[char] = (count[char] || 0) + 1;
  }

  console.log(count);
  for (let char of t) {
    console.log(count[char]);
    if (!count[char]) {
      return false;
    }
    count[char]--;
    ``;
  }

  return true;
};

var intersect = function (nums1, nums2) {
  const dictionary = {};
  for (let num of nums1) {
    dictionary[num] = (dictionary[num] || 0) + 1;
  }
  let newArray = [];
  for (let num of nums2) {
    if (dictionary[num]) {
      newArray.push(num);
      dictionary[num]--;
    }
  }
  return newArray;
};

var canConstruct = function (ransomNote, magazine) {
  let collection = {};
  for (let char of magazine) {
    collection[char] = (collection[char] || 0) + 1;
  }
  for (let char of ransomNote) {
    if (!collection[char] || collection[char] == 0) {
      return false;
    }
    collection[char]--;
  }
  return true;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

function printLinkedList(head) {
  let result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  console.log(result.join(" -> "));
}

var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};

function reverseListRec(head) {
  // Base case: if head is null or only one node, return head
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively reverse the rest of the list
  let newHead = reverseListRec(head.next);

  // Fix the pointers
  head.next.next = head;
  head.next = null; //  breaks the original link

  return newHead; // newHead will be the new head of the reversed list
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      6,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    )
  )
);

const head1 = new ListNode(1, new ListNode(3, new ListNode(4)));
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    printLinkedList(current);
    current = current.next;
    printLinkedList(current);
  }

  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
};

var removeElements = function (head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let current = dummy;
  while (current !== null && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};

const temp = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      6,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    )
  )
);

const removelVal = (head, val) => {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let current = dummy;
  while (current !== null && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Function to find the maximum depth of the binary tree.
function maxDepth(root) {
  // If the root is null, return 0 (no depth).
  if (root === null) {
    return 0;
  }

  // Variable to store the depth of the left subtree.
  let leftDepth = 0;
  if (root.left !== null) {
    leftDepth = maxDepth(root.left);
  }

  // Variable to store the depth of the right subtree.
  let rightDepth = 0;
  if (root.right !== null) {
    rightDepth = maxDepth(root.right);
  }

  // The maximum depth is the greater of the two depths plus one for the current nodew.
  let max = 0;
  if (leftDepth > rightDepth) {
    max = leftDepth + 1;
  } else {
    max = rightDepth + 1;
  }

  return max;
}

var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);
var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  let rightNode = root.left;
  let leftNode = root.right;
  root.left = leftNode;
  root.right = rightNode;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Example usage:
// The input is represented as a tree: [3,9,20,null,null,15,7]
let q = new TreeNode(3);
q.left = new TreeNode(2);
q.right = new TreeNode(20);

let p = new TreeNode(3);
p.left = new TreeNode(9);
p.right = new TreeNode(20);

console.log(invertTree(root));
