
window.XPropsComponent = zoid.create({

    // The html tag used to render my component
    tag: 'xprops-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    url: 'xprops.html',

    // Allow the component to be rendered as a popup
    contexts: {
        popup: true
    },

    dimensions: {
        width: '700px',
        height: '500px'
    },   
    props: {
        startTime: {
            type: 'string',
            required: false
        },
        inMessage: {
            type: 'string',
            required: false
        },
        onComplete: {
            type: 'function',
            required: true
        }
    }
});
