angular.module('app').factory('cardFactory', function(){
	var service = {};
	var cards = [
		{
			id: 1,
			desc: 'fix bug',
			list_id: 1
		},
		{
			id: 2,
			desc: 'fix bug 11',
			list_id: 1
		},
		{
			id: 3,
			desc: 'fix bug 222',
			list_id: 3
		}
	];

	service.getCards = function(list){
		return _.filter(cards, {list_id: list.id});
	};

	service.createCard = function(list, cardDesc){
		cards.push({
			id: _.uniqueId('card_'),
			desc: cardDesc,
			list_id: list.id
		})
	};
	service.deleteCard = function(card){
		return _.pull(cards, card)
	};

	service.updateCard = function(uptCard){
		var cardFound = _.find(cards, {id: uptCard.id});
		cardFound.desc = uptCard.desc;
		cardFound.list_id = uptCard.list_id;
	}

	// service.updateCard = function (updatingCard) {
 //    var card = _.find(cards, { id: updatingCard.id });
 //    card.desc = updatingCard.desc;
 //    card.list_id = updatingCard.list_id;
 //  };

	return service;
});