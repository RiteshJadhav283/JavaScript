const counterDisplay = document.getElementById("1");
const buttons = document.querySelectorAll("button");

let count = 0;

buttons.forEach(button => 
{
    button.addEventListener("click", () => 
    {
        if (button.textContent === "Increment")
        {
            count++;
        } 
        else if (button.textContent === "Decrement") 
        {
            count--;
        } 
        else if (button.textContent === "Reset") 
        {
            count = 0;
        }
        counterDisplay.textContent = count;
    });
});