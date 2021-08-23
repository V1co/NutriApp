function DebounceSearchBox() {
    let timeout = null;
    let query = "";

    return <input
                type="text"
                name="query"
                placeholder="i.e. Avocado"
                value={query}
                onKeyDown={() => {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    timeout = setTimeout(() => {
                        console.log('request');
                    }, 500);
    }}      />
}

export default DebounceSearchBox;
