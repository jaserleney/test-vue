<template>
  <div class="box-search flex-row-center">
    <input class="search" type="text" name="search" placeholder="Search here" />
    <span><img src="/search.png" alt="search-icon" /></span>
  </div>
  <div class="setting flex-row-center pointer">
    <img src="/setting.png" alt="setting" />
  </div>
</template>

<style scoped>
input {
  caret-color: var(--secondary-color);
  color: var(--secondary-color);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
}
input::placeholder {
  color: #b9b9b9;
}

input:focus,
input:active {
  outline: 1px solid var(--secondary-color);
}
.box-search {
  position: relative;
}

.box-search span {
  position: absolute;
  right: 4%;
}
.search {
  background-color: #2f363d;
  border: 1px solid #2f363d;
  position: relative;
  width: 47rem;
  height: 3.5rem;
  box-shadow: 0px 11px 23px rgba(0, 0, 0, 0.02);
  border-radius: 0.75rem;
  padding: 1rem;
}

.setting {
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--secondary-color);
  border-radius: 0.75rem;
  margin-right: 17.5rem;
  transition: 0.3s ease-in-out;
  animation: pulse 1.25s ease 1 1s;
}

.setting:hover {
  filter: contrast(120%);
  transform: scale(1.1);
}

@media (width <= 1919px) {
  .box-search {
    margin: 0 1rem;
  }
  .search {
    width: 100%;
  }

  .setting {
    margin-right: auto;
  }
}

@media (width <= 1024px) {
  .setting {
    display: none;
  }

  .box-search {
    margin: 0 1rem;
  }
}

@media (width <= 600px) {
  .box-search {
    display: none;
  }
}
</style>
