import pkg from 'vm2';
import { 
  vuaSinglyLinkedListHead, 
  vuaSinglyLinkedListNode,
} from '../visualuralgo/src/data_structures/singly_linked_list.js';
import { 
  vuaMAryTreeHead,
  vuaMAryTreeNode
} from '../visualuralgo/src/data_structures/m_ary_tree.js';
import { 
  vuaVector
} from '../visualuralgo/src/data_structures/vector.js';
import { 
  vuaSet
} from '../visualuralgo/src/data_structures/set.js';
import { 
  vuaBinaryTreeHead, vuaBinaryTreeNode
} from '../visualuralgo/src/data_structures/binary_tree.js';
import { 
  vuaMap
} from '../visualuralgo/src/data_structures/map.js';
import { 
  vuaMatrix
} from '../visualuralgo/src/data_structures/matrix.js';
import { 
  addListener
} from '../visualuralgo/src/data_structures/recursion.js';
// import { 
//   snapshots
// } from '../visualuralgo/src/data_structures/snapshot/snapshot.js';
import { getRandomIntegerArray, getRandomInteger } from '../visualuralgo/src/data_structures/test/random.js';

import { fromArrayToLinkedList } from './utils/index.js';

const {NodeVM} = pkg;

function run(code) {
  const vm = new NodeVM({
    sandbox: {
      fromArrayToLinkedList,
      vuaSinglyLinkedListNode,
      vuaSinglyLinkedListHead,
      vuaMAryTreeNode,
      vuaMAryTreeHead,
      vuaVector,
      vuaSet,
      vuaMap,
      vuaMatrix,
      vuaBinaryTreeNode,
      vuaBinaryTreeHead,
      addListener,
      getRandomInteger,
      getRandomIntegerArray
    }
  });
  vm.run(code);
  // vm.runFile('./recursion.js');
}

export default run;
