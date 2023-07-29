// This code will not work because we are using const. if the value of the variable is re-assigned in code, we need to use the let keyword to declare the variable. Once we change it to let, the code works and numberVariable will be equal to 3. Each time we use the expression numberVariable++, our variable is incremented by 1, and re-assigned the new value.

let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable); // 3