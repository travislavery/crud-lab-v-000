
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
	switch(action.type) {
		case "ADD_RESTAURANT":
			const restaurant = {text: action.text, id: cuid()}
			return { ...state, restaurants: state.restaurants.concat(restaurant)}
		case "DELETE_RESTAURANT":
			const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
			return {restaurants}
		case "ADD_REVIEW":
			const review = {text: action.text, id: cuid(), restaurantId: action.restaurantId}
			return { ...state, reviews: state.reviews.concat(review)}
		case "DELETE_REVIEW":
			const reviews = state.reviews.filter(review => review.id !== action.id)
			return {reviews}
		default:
			return state
	}
}