<script setup>
const textColor = "red"; //style object
const fontStyle = "italic"; //style object

const isEmpty = false;

const successText = "color:green"; //style array
const warningText = "color:red"; //style array
const underlineText = "text-decoration:underline"; //style array

const hasSuccessText = false; 

const errorStyle = 'error-text underline-text' //class array
</script>

<template>
  <div>
    <!--basic style-->
    <p style="color: green; text-decoration: underline">Test style</p>
    
    <!--basic class-->
    <p class="example-text">Test Class</p>
    
    <!--v-bind style object syntax-->
    <p :style="{ color: textColor, 'font-style': fontStyle }">
      This is style text.
    </p>
    <!--v-bind style object condition-->
    <p :style="isEmpty ? { color: 'red' } : { color: 'green' }">
      This is a style under condition.
    </p>

    <!-- v-bind style (array syntax)-->
    <p :style="[successText, underlineText]">This is array style.</p>

    <!-- v-bind style (array syntax) condition-->
    <p :style="[hasSuccessText ? successText : warningText, underlineText]">
      This is unsuccessful array style.
    </p>

    <!--class binding object-->
    <p :class="{'success-text' : hasSuccessText, 'underline-text' : true}">This is class unsuccess text</p>

    <!--class attribute with array syntax-->
    <p :class="[errorStyle]">This is class error text</p>

    <!--class attribute with condition-->
    <p :class="hasSuccessText ? 'success-text': [errorStyle]">This is condition class</p>
  </div>
</template>
<style scoped>
/*local style (use in this class only)*/

/*example basic class*/
.example-text {
  color: red;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

/*example binding class*/
.success-text {
  color: green;
}

.error-text {
  color: red;
  font-style: italic;
}

.warning-text {
  color: orange;
}

.underline-text {
  text-decoration: underline ;
}
</style>
