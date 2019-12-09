wp.blocks.registerBlockType('max-lynx/slider', {
    title: 'Slider',
    icon: 'admin-page',
    category: 'common',
    attributes: {
        imageFileName: {type: 'string'},
        text1: {type: 'string'},
        text2: {type: 'string'}
    },
    edit: function(props){
            function updateText1(event) {
                props.setAttributes({text1: event.target.value})
            }

            function updateText2(event) {
                props.setAttributes({text2: event.target.value})
            }

            return wp.element.createElement("div", null, 
                        wp.element.createElement("image", {
                            src: props.attributes.imageFileName
                            }), 
                        wp.element.createElement("input", {
                            type: "file",
                            value: props.attributes.imageFileName
                            }), 
                        wp.element.createElement("p", null, "Text 1:"), 
                        wp.element.createElement("input", {
                            type: "text",
                            value: props.attributes.text1,
                            onChange: "updateText1"
                            }), 
                        wp.element.createElement("p", null, "Text 2:"), 
                        wp.element.createElement("input", {
                            type: "text",
                            value: props.attributes.text2,
                            onChange: "updateText2"
                    }));
    },
    save: function(props) {
                
        const getFunctionBody = (fullFunction) => {
            const bodyStart = fullFunction.indexOf("{") + 1
            const bodyEnd = fullFunction.lastIndexOf("}")
            return fullFunction.substring(bodyStart, bodyEnd)
        }
/*
        function showHiddenText() {
            Array.from(document.getElementsByClassName("hidden-p"))
                    .forEach(paragraph => 
                    {
                        if(paragraph.parentElement==event.target.parentElement){
                            if(paragraph.style.display=="none"){
                                paragraph.style.display="block";
                            }
                            else {
                                paragraph.style.display="none";
                            }
                        return;
                        }            }
                    )
        }
        return wp.element.createElement("div", null, 
                wp.element.createElement("button", {
                    class: "show-button",
                    style: "display: inline; border-radius: 50%; background-color: black; color: white;",
                    onClick: getFunctionBody(showHiddenText.toString())
                    //only static content could be created here
                    }, ">"), 
                wp.element.createElement("h3", {
                    style: "text-weight: bold"
                    }, props.attributes.title), 
                wp.element.createElement("p", {
                    class: "hidden-p",
                    style: "display: " + props.attributes.display + ";"
                    }, props.attributes.description));
                    */
                   return null;
    }
});