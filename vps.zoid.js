
window.VPSComponent = zoid.create({

    // The html tag used to render my component
    tag: 'vps-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    url: '/1903181417843D13E354319031814178VpsCheckout?token=1abc&callbackUrl=https://devel.vpsenv.com/Vps.CheckoutAPI.Version2/Payment/CurrentSession/1903181417843D13E354319031814178',

    // Allow the component to be rendered as a popup
    contexts: {
        popup: true
    },

    dimensions: {
        width: '500px',
        height: '550px'
    }
});
