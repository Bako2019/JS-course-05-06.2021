import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import clas from './modules/class';
import form from './modules/form';
import slider from './modules/slider';
import calc from './modules/calculator';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);


    // TABS
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    // TIMER
    timer('.timer', '2021-08-08');
    //MODAL CONTENT
    modal('[data-modal]', '.modal', modalTimerId);
    // CLASS
    clas();
    //Form
    form('form', modalTimerId);
    // Slides
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    //CALCULATOR  
    calc();
});