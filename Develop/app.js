$(document).ready(function () {

    console.log(parseInt(moment().format('H')))

    const currentDay = moment().format("MMMM Do YYYY")
    $("#currentDay").text(currentDay)

    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

    hours.forEach(hour => {
        const hourCheck = window.localStorage.getItem(hour)

        const currentTime = moment().hour()

        console.log(currentTime)
        console.log(hour)

        if (currentTime > hour) {
            $(`#row${hour}`).addClass("bg-danger text-light")
            $(`#${hour}`).attr("disabled", true)
        } else if (currentTime === hour) {
            $(`#row${hour}`).addClass("bg-secondary text-light")
        } else {
            $(`#row${hour}`).addClass("bg-success text-light")
        }

        if (hourCheck === null) {
            window.localStorage.setItem(hour, "")
        } else if (hourCheck.length > 0) {
            $(`#${hour}`).attr("value", window.localStorage.getItem(hour))
        }
    })

    $(".saveBtn").on("click", function (e) {
        e.preventDefault()
        const hour = e.target.getAttribute("data-value")
        console.log(hour)
        const text = $(`#${hour}`).val ()
        console.log(text)
        

        window.localStorage.setItem(hour, text)
    })
})

