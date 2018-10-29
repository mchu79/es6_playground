import $ from 'jquery';

export function addToDom(tag, text){
    const newElement = $(`<${tag}>`, {text: text});

    $('#root').append(newElement);
}