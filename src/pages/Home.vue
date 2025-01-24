<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
  <div class="div-tree">
    <el-tree
        ref="treeRef"
        style="max-width: 600px"
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        highlight-current
        :check-strictly="true"
        :props="defaultProps"
        @check-change="handleCheckChange"
        lazy
    />

    <div class="buttons">
      <el-button @click="getCheckedNodes">get by node</el-button>
      <el-button @click="getCheckedKeys">get by key</el-button>
      <el-button @click="setCheckedNodes">set by node</el-button>
      <el-button @click="setCheckedKeys">set by key</el-button>
      <el-button @click="resetChecked">reset</el-button>
    </div>
  </div>

</template>

<script setup lang="ts" name="Home">

import { ref } from 'vue'
import { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'


const handleCheckChange = (data: any, checked: boolean, indeterminate: any) => {
  // console.log("suyh  - 复选框点击了")
  // // if (data.disableChildrenSelect && checked) {
  // if (checked) {
  //   // 这里需要调用 el-tree 的方法来取消子节点的选中状态
  //   // 假设 el-tree 实例可以通过 $refs 获取，且提供了 setChecked 方法
  //   // 首先需要获取该节点的所有子节点，这里假设存在一个递归函数 getChildren 来获取子节点
  //   const children = getChildren(data);
  //   children.forEach((child: any) => {
  //     // 取消子节点的选中状态
  //     // 假设 el-tree 提供了 setChecked 方法，第一个参数是节点的 node-key，第二个参数是是否选中
  //     child.checked = false;
  //     child.disabled = true;
  //     // this.$refs.tree.setChecked(child.id, false);
  //   });
  // }

  let ids: number[] = [];
  const children = getChildren(data);
  children.forEach((child: any) => {
    // 取消子节点的选中状态
    // 假设 el-tree 提供了 setChecked 方法，第一个参数是节点的 node-key，第二个参数是是否选中
    child.disabled = checked;
    // child.checked = false;
    console.log("suyh - child: ", child)

    // child.setCheckedKeys([child.id], false);
    ids.push(child.id)
    // console.log("suyh - disabled: ", child.disabled)
    // console.log("suyh - checked: ", child.checked)
    // this.$refs.tree.setChecked(child.id, false);
  });

  // console.log("suyh - ids: ", ids)
  // console.log("suyh - ", treeRef.value)
  // treeRef.value!.setCheckedKeys(ids, true)
  // treeRef.value!.setCheckedKeys([9, 10], true)
};

// 递归函数，用于获取节点的所有子节点
const getChildren = (node:any) => {
  let result:any = [];
  if (node.children) {
    node.children.forEach((child: any) => {
      result.push(child);
      result = result.concat(getChildren(child));
    });
  }
  return result;
};

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

const treeRef = ref<InstanceType<typeof ElTree>>()

const getCheckedNodes = () => {
  let nodes = treeRef.value!.getCheckedNodes(false, false);

  // suyh - 三种方式进行的for 循环
  let mode = 1;
  switch (mode) {
    case 1:
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        console.log("suyh - node: ", node)
        console.log("suyh - isLeaf: ", node.isLeaf)
      }
      break
    case 2:
      nodes.forEach((node) => {
        console.log("suyh - node: ", node)
      });
      break
    case 3:
      for (const i in nodes) {
        const node = nodes[i];
        console.log("suyh - node: ", node)
      }
      break
    default:
      break
  }

  console.log("suyh - nodes: ", nodes)
}
const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false))
}
const setCheckedNodes = () => {
  treeRef.value!.setCheckedNodes(
      [
        {
          id: 5,
          label: 'Level two 2-1',
        },
        {
          id: 9,
          label: 'Level three 1-1-1',
        },
      ] as Node[],
      false
  )
}
const setCheckedKeys = () => {
  treeRef.value!.setCheckedKeys([3], false)
}
const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false)
}

const defaultProps = {
  children: 'children',
  label: 'label',
}

const data: Tree[] = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.div-tree {
  border: 1px solid #000;
  margin: 8px;
}
</style>
