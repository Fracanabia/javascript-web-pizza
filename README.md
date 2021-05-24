# javascript

## Obter elementos:
```js
const id = document.querySelector('#id')
const class = document.querySelectorAll('.class')
```
## Adicionar eventos:
```js
element.addEventListener('click', fn)
function fn(){
  console.log('botão clicado')
}
```
## Obter formulário e previnir evento padrão:
```js
const form = document.forms.formName
form.addEventListener('submit', (event) => {
event.preventDefault()
})
```


