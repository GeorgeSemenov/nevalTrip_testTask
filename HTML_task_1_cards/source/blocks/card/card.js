$( document ).ready(function() {
  let advantages = $('.card__advantage');
  advantages.each((index,advantage)=>{
    if($(advantage).has(`.card__departure-time`).length){
      setMoreButtonProperly(advantage);
    }
  })
    
  //При клике на кнопку "ещё" - все элементы departure-times станут видимыми
  $(".card__button_theme_more").click(function(){
    changeClassesInRow(this, 'card__departure-time_invisible',
      'card__departure-time_invisible', 'card__button_invisible')
  })

  //При клики на элемент departure-time - он становится активным, все остальные элементы перестают быть активными
  $(".card__departure-time").click(function(){
    changeClassesInRow(this, 'card__departure-time',
      'card__departure-time_active', 'card__departure-time_active')
  })
});

function setMoreButtonProperly(advantageRow){
  let arwdt = $(advantageRow);//advantage row with departure time
  let arwdtWidth = arwdt.width();//Тут нужно учитывать только место(ширину) для контента, без паддингов и марджинов
  let arwdtText = arwdt.children('.card__advantage-text');
  let arwdtTextWidth = getTotalElementWidth(arwdtText) + 25; //почему то неправильно считает, не успеваю разобраться почему, просто добавлю 25 пунктов
  let moreButton = arwdt.children('.card__button_theme_more');
  let moreButtonWidth = getTotalElementWidth(moreButton);
  let departureTimes = arwdt.children('.card__departure-time');
  let departureTimesWidth = getTotalArrayWidth(departureTimes);
  let isAllDepartureTimesContainsInRow = true;

  let rowContentWidthWithoutDepartureTiemsElementsWidth = ($(window).width() < 767) // для разных широт экранов условие переполнения строки будет разным
    ? arwdtWidth - moreButtonWidth
    : arwdtWidth - arwdtTextWidth - moreButtonWidth
  $(departureTimes.get().reverse()).each((index,element)=>{
    if(rowContentWidthWithoutDepartureTiemsElementsWidth - departureTimesWidth < 0){
      $(element).addClass('card__departure-time_invisible')
      isAllDepartureTimesContainsInRow = false;
      departureTimesWidth = getTotalArrayWidth(departureTimes);
    }
  });
  $(departureTimes[0]).removeClass('card__departure-time_invisible');//Если так выйдет, что ни один из элементов departure time
  //не поместится вместе с текстом, то нужно чтобы хотябы один был виден, иначе пользователь не поёмёт зачем там стоит кнопка "ещё"
  
  //Если все элементы departureTimes умещаются в строку, то кнопку "ещё" нужно убрать
  if(isAllDepartureTimesContainsInRow){$(moreButton).addClass('card__button_invisible')}
}

function getTotalArrayWidth(arr){
  let sum=0;
  arr.each((index,element)=>{
    $(element).hasClass('card__departure-time_invisible')
    ? sum+=0
    : sum+=getTotalElementWidth(element);
  })
  return sum;
}

function getTotalElementWidth(elem){
  let totalWidth = $(elem).width();
  totalWidth += parseInt($(elem).css("padding-left"), 10) 
             + parseInt($(elem).css("padding-right"), 10); //Total Padding Width
  totalWidth += parseInt($(elem).css("margin-left"), 10) 
             + parseInt($(elem).css("margin-right"), 10); //Total Margin Width
  totalWidth += parseInt($(elem).css("borderLeftWidth"), 10) 
             + parseInt($(elem).css("borderRightWidth"), 10); //Total Border Width
  return totalWidth;
}

function changeClassesInRow(thisElement, affectedElementsClass,removedClass, addedClass){
  let row = $(thisElement).parent();
  $(row).children(`.${affectedElementsClass}`).removeClass(removedClass);
  $(thisElement).addClass(addedClass); 
}