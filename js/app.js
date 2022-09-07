document.addEventListener("DOMContentLoaded", function(event) {
    

    const countDown = e=> {
      
      const days = document.querySelector('.timer__item_days .timer__number')
      const hours = document.querySelector('.timer__item_hours .timer__number')
      const minutes = document.querySelector('.timer__item_minutes .timer__number')
      const seconds = document.querySelector('.timer__item_seconds .timer__number')
      
      const currentDate = new Date()
  
      const nextYear = currentDate.getFullYear() + 1
  
      const newYearDate = new Date(`${nextYear}-01-01T00:00:00`) 

  
      const remainingSeconds = (Date.parse(newYearDate) - Date.parse(currentDate)) / 1000
  
  
      document.querySelector('.timer__year').innerHTML = nextYear
      

      days.innerHTML = Math.floor(remainingSeconds / 60 / 60 / 24)
      hours.innerHTML = Math.floor(remainingSeconds / 60 / 60 % 24)
      minutes.innerHTML = Math.floor(remainingSeconds / 60 % 60)
      seconds.innerHTML = Math.floor(remainingSeconds % 60)
  
  
    
    }


    setInterval(countDown, 1000)


  });