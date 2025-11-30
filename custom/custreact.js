const customRender = (reactElem, mainContainer) => {
    // const domElement = document.createElement(reactElem.type)

    // domElement.textContent = reactElem.children
    // domElement.setAttribute('href', reactElem.props.href)
    // domElement.setAttribute('target', reactElem.props.target)

    // mainContainer.appendChild(domElement)

    const domElem = document.createElement(reactElem.type);
    domElem.innerHTML = reactElem.children;
    for(const prop in reactElem.props)
    {
        if(prop == reactElem.children)
            continue;
        domElem.setAttribute(prop, reactElem.props[prop] );
    }
    mainContainer.appendChild(domElem);
}

const reactElem = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElem, mainContainer)