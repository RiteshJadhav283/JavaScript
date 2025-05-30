function logParent() 
{
    const child = document.getElementById('child1');
    console.log('Parent of #child1:', child.parentElement);
}

function logChildren() 
{
    const parent = document.getElementById('parent1');
    console.log('Children of #parent1:', parent.children);
}

function findClosestSpecial(btn) 
{
    const closestSpecial = btn.closest('.special');
    console.log('Closest .special parent:', closestSpecial);
}

function toggleHighlight(btn) 
{
    const parent = btn.parentElement;
    parent.classList.toggle('highlight');
}