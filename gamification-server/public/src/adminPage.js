axios
    .get('/getState')
    .then((response) => {
        console.log(response);
        if (!response.data.state.value) {
            window.location.href = '../';
        }
        if (response.data.state.value.email != "pedro@a") {
            window.location.href = '../';
        }
    });
