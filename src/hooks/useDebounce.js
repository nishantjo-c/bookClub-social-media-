// debounce hook

import { useState, useEffect } from 'react';

function useDebounce(value){

	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounced(value);
		}, 1000);
		return () => {
			clearTimeout(handler);
		}
	})
	return debounced;
}

export default useDebounce;