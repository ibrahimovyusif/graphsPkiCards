var CARD_SELECTED = 'CARD_SELECTED'
export function selectCard(card) {
	//action object with type property
	return {
		type: CARD_SELECTED,
		payload: card
	}
}

export function selectType(item) {
	//action object with type property
	return {
		type: TYPE_SELECTED,
		payload: item
	}
}
