    
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pause").addEventListener("click", decideCounter);
    startCounter()
}  ) 

    var el = document.getElementById("counter");
    var counter = parseInt(el.innerHTML)
    var pauseResume = document.getElementById("pause")
    var submitButton = document.getElementById("submit")
    var plusButton = document.getElementById("plus")
    var minusButton = document.getElementById("minus")
    var heartButton = document.getElementById("heart")
    var intervalId
    var isPaused = false 
    
    function startCounter() {
        intervalId = setInterval(function() {
            if(!isPaused) {
                counter++
                el.innerHTML = counter
            }
        }, 1000);
    }

    function toggleDisable(paused) { //change naming here?
        submitButton.disabled = paused 
        plusButton.disabled = paused  
        minusButton.disabled = paused 
        heartButton.disabled = paused 
    }
    
    function decideCounter() {
        if (isPaused) {
          isPaused = false
           pauseResume.innerHTML = "pause"
      } else {
          isPaused = true
          pauseResume.innerHTML = "resume"
     }
     toggleDisable(isPaused)
    } 

    function incrementCounter() {
        plusButton.onclick = counter.value = ++counter;
        el.innerHTML = counter
    }
    plusButton.addEventListener("click", incrementCounter)

    function decrementCounter() {
        minusButton.onclick = counter.value = --counter;
        el.innerHTML = counter
    }
    minusButton.addEventListener("click", decrementCounter)

    function likeNumber() {
        const likesArea = document.querySelector('ul')
        const likes = document.createElement('li')
        likes.innerHTML = `${counter} has been liked 1 time` 
        likesArea.appendChild(likes)
    } //need to modify string for how many times liked: do I need to do an incrementer here?
    heartButton.addEventListener("click", likeNumber)

    function leaveComment() {
        event.preventDefault();
        const commentArea = document.getElementById('list')
        const ul = document.createElement('ul')
        commentArea.appendChild(ul)
        const comments = document.createElement('li')
        ul.appendChild(comments)
        comments.innerHTML = document.getElementById('comment-input').value
    }
    submitButton.addEventListener("click", leaveComment)


