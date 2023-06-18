<template>
  <nav class="flex-row-center pointer">
    <ul class="flex-row-center">
      <li class="flex-row-center show">
        <img src="/bell.png" alt="bell-icon" />
        <span class="rounded"></span>
      </li>
      <li class="flex-row-center">
        <img src="/chat.png" alt="chat-icon" />
        <span class="rounded"></span>
      </li>
      <li class="flex-row-center">
        <img src="bonus-1.png" alt="bonus-1-icon" />
        <span class="rounded gris"></span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  justify-content: space-between;
}

li {
  position: relative;
  list-style: none;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #2f363d;
  margin: 0 1.25rem;
  border-radius: 0.75rem;
  transition: 0.3s ease-in-out;
}

ul li:first-child {
  animation: pulse 1.25s ease 1 2s;
}
ul li:nth-child(2) {
  animation: pulse 1.25s ease 1 3s;
}
ul li:nth-child(3) {
  animation: pulse 1.25s ease 1 4s;
}

li:hover {
  filter: contrast(120%);
  transform: scale(1.1);
}

.rounded {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: #d9b75f;
  border-radius: 50%;
  top: -5%;
  right: -5%;
  z-index: 10;
}

.gris {
  background-color: #647280;
}

@media (width <= 1388px) {
  ul li:nth-child(2),
  ul li:nth-child(3) {
    display: none;
  }
}

@media (width <= 600px) {
  li {
    width: 2.283rem;
    height: 2.283rem;
    margin-right: -1.039rem;
  }

  .rounded {
    width: 0.652rem;
    height: 0.652rem;
  }
}
</style>
