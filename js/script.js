
document.addEventListener("DOMContentLoaded", function() {
    const originalTitle = document.title; 
    const animatedTitles = ["meow", "fuck niggers", "nigger","hi"];
    let index = 0;

    setInterval(() => {
        
        document.title = animatedTitles[index];
        index = (index + 1) % animatedTitles.length; 
    }, 1300); 
});
