module.exports = {
    installOptions: {
        sourceMaps: true,
        externalPackage: [
            "react",
            "react-dom",
            "rxjs",
            "rxjs/operators",
            "rxjs/ajax"
        ]
    },
    buildOptions: {
        sourceMaps: true
    },
    mount: {
        "src": "/"
    },
    plugins: [
        "@snowpack/plugin-sass"
    ]
};
