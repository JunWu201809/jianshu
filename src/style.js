import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: green;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {font-family: "iconfont";
  src: url('./statics/iconfont/iconfont.eot?t=1605382995268'); /* IE9 */
  src: url(./statics/iconfont/iconfont.eot?t=1605382995268#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWsAAsAAAAAC0QAAAVgAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqKBIgIATYCJAMQCwoABCAFhG0HQRtzCVGUT06d7ENJkFAiALgIkMEiMAAkKAAkEA/975fe+W929wUYZE5cAXVVNaEwrUtdFZDwMapGogXSdYHp3y17wMJKdh1pT7NmBpVIxZAkeLhsIK2H1sOdJ6Fu/ndz3+f/c++ea2NZOK83XOZa9qgTR1GaZmv/sRbJAsH/CK8R1WH0k9cT6DavgOJy1wACoiRQhFrxxEGZQVTFKAfIoWraHcemeAXUavNCeRPwMvn7+KcsKo1WATe6dq/TBlp+Kj8/VvH/8yYUHvDb2WGdRMEuIIkHnc5bVJl8N1F2d+VH2AdUtDds1Xfm5+P/TzPxuSir7qJZ/M+LNlD2qri9VOGnkikkqkZV2KVyqeI7oEzRXLENxIexItDObnOOxtpi7GypQ3194/1dfZ3M3NEdXVg8mTnW3VtDe6c30tqn2IXyTwfY48dEEZCHDyk8+ujRkhB+w4RKoR1BS6f9yRO8yYsXjItRHGwXtgLQzan8NghCDe1QKHreIbidGj920lToJXgcCk2fcVposCEi4N/rwgacOhP0CXIwHRIOSbwWEfFS3hhx8/blBk2rnyqTa5dHBL0sG4rDYUnSFoiuBrT5TLDptIDmJnLtrFxpqRaxSTq8AIXhKJKH5yI2WY9oc3HZFToErbg9aUco1yyyW+5dPYqL4aVQOCgLYkFGQBTUASu0JvEwM18fzsbxsOK44wiWj45g/NWr5C/D8sbN8nx6CvWJClFWBA2G3OwmXLcN4k/Rd3N1XA6WvyN0j0d2hpNQbr7hF2mb2GMwULZ6imEV+0cvqJ+imjHjl5Wppr3ECg8GAoOwKXUvT+oCgTJix77Xhs+Yse3rjq/vVC5VXb+uWoo8wefSYtyIRT5fQsc3HQkyBmaofp6DtTezdCnYkvYjM+nci7UXMFD9/I/EcYl///3ke2YU9P/eG22f3KWNMXbSMw0HVQhCO6Q3PXymXgyVG40xTz2j/FzNxY3lff0HN3Z84/6w6B3eor3TSiKSRuZp6zJ/3VibWVf151Ju9SpSOVaZOK7q6itKkd5v2YmM49+uPuEPCEJm5/F38xesWmU0rV5tMt4yGl+Jl67hyJw9o5afOD/h7QeLpuJ62vUKaDFU0V7bXgFN/bh9N03FXMf4eA0Xi7IfMlIACkQhbsMR07a+xQbv8vffK+4PtVASl/jzPDDv2cgstgrE0d9X78w6uURIF4TjS5aU06pVq8wdr63ZN9VppLyfJoVE9H6/sGT8J4A5EhmRQh/fsaxvdXnisGHp6gFJacmaW8KSVy+Ny0ZOubgvVCwP7Svj1XsU7DX3KzQ+6smTREpocrXajgM/W6etgBZBj+Li1VQsF//kitF6mRrAB+D0TDlXWgA4fVRkVT5w+rhsUX3zP9jk8J8YPzmh4X+FPgg93x4jo5PA6ZkEy0RfZtFk0bdeNLElQwmYMn0pE0alGZdAJvBV0utGC9/1LMNeb2EZs106VGMFNDrmoKhWUYnbhZYee9BWnYNuO7pP7jGCoRLZhW0LFAiD9kCj30coBt1CJe4VtIz7HdoGo0C365Fyzh7r8TCmnSHMLGGDLdNgh5X2kmRhY9LKUQTld5uZsiShYgQz5IjApUUl9Uw34SWYLQ4YClBlLEvCJEN74C7lZoTbTcM+hnYSVrbIzrK+uuJisuuLiqy0B8S4hEEwYxFsYBbTwBysaF6k6M6Kafz+KASKn5sZM4AYcGMIjCGOwWGlipRMQHUrvZMQj6V+SAClDKvFSTDSKqd5wLo0O8GNSRrM173OiWDFKmJfEPepU6y1I6cqi/av9fzlOugG58lookRGS/c9s5eymZ0OsUph1nznMHstDgAA') format('woff2'),
  url('./statics/iconfont/iconfont.woff?t=1605382995268') format('woff'),
  url('./statics/iconfont/iconfont.ttf?t=1605382995268') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./statics/iconfont/iconfont.svg?t=1605382995268#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;