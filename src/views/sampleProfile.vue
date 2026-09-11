<template>
  <div>
    <h2>Live Profile Form</h2>

    <label>Name:</label>
    <input v-model="name" type="text" placeholder="Enter your name">

    <br><br>

    <label>Age:</label>
    <input v-model="age" type="number" placeholder="Enter your age">

    <br><br>

    <label>Course:</label>
    <input v-model="course" type="text" placeholder="Enter your course">

    <h3>Entered Information</h3>

    <p>Name: {{name}}</p>
    <p>Age: {{ age }}</p>
    <p>Course: {{ course }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      course: ""
    }
  }
}
</script>