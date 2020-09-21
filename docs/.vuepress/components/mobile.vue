<template>
  <div class="mobile">
    <div class="container">
      <div class="item" v-for="n in 9">
        <tg-aspect-ratio w="1" h="1">{{n}}</tg-aspect-ratio>
      </div>
    </div>
  </div>
</template>
<style>
.mobile {
  width: 375px;
  height: 667px;
  border: 1px solid black;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 33.3333%;
}
.item:nth-child(odd) .tg-aspect-ratio {
  color: black;
  background-color: white;
}
</style>