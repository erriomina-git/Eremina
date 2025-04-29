function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')
        parent.append(errorLabel)
    }
    let result = true;
    const inputs = form.querySelectorAll('input');

    for (const input of inputs) {

        removeError(input)

        if (input.dataset.minLength) {

            if (input.value.length < input.dataset.minLength) {
                removeError(input)
                createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                result = false
            }
        }

        if (input.dataset.maxLength) {
            if (input.value.length > input.dataset.maxLength) {
                removeError(input)
                createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result = false
            }

            return result
        }
    }
}

    document.getElementById('add-form').addEventListener('submit', function (event) {
        event.preventDefault()

        if (validation(this)) {
            alert(`Спасибо за обращение!
        Ваше имя: ${firstname.value}
        Ваша фамилия: ${lastname.value}
        Ваш Email: ${email.value}
        Ваш номер телефона: ${telephone.value}
        Ваш заказ: ${product.value}`)
        }
    })

    document.getElementById('add-form-2').addEventListener('submit', function (event) {
        event.preventDefault()

        if (validation(this)) {
            alert(`Спасибо за обращение!
        Ваше имя: ${first.value}
        Ваш Email: ${mail.value}
        Ваш номер телефона: ${tel.value}
        Ваша тема: ${theme.value}`)
        }
    })

