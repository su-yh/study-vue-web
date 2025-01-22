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




interface Tree {
  id: number
  label: string
  children?: Tree[]
}

const treeRef = ref<InstanceType<typeof ElTree>>()

const getCheckedNodes = () => {
  console.log(treeRef.value!.getCheckedNodes(false, false))
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
  //background-color: #64967E;
  //border-radius: 10px;
  border: 1px solid #000;
  margin: 8px;
}
</style>
