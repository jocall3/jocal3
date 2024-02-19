define("client/app", ["vs/workbench/workbench.web.main"], (e=>(()=>{
    var t, n = {
        17283: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ":root {\n    --grid-unit: 1rem;\n    --button-bg-color: #0278d5;\n    --dev-panel-height: 2.5rem;\n    --dev-panel-text-color: hsla(0,0%,100%,.5);\n    --dev-panel-border-color: #2a2a2a;\n    --dev-panel-bg-emphasis: #000;\n    --dev-panel-bg-emphasis-hover: #111;\n    --dev-panel-selection-color: #00FFFF;\n    --dev-panel--linkselection-color: #00BEFF;\n}\n\n.cs-dev-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 10;\n    box-sizing: border-box;\n    color: white;\n    font-family: Helvetica, Arial, sans-serif;\n    transition: height .1s ease-in-out;\n    letter-spacing: 0.5px;\n}\n\n.cs-dev-panel.is-hidden {\n    height: var(--dev-panel-height);\n    box-shadow: none;\n}\n\n.cs-dev-panel input:focus {\n    background-color: rgba(255, 255, 255, .1);;\n    outline: none;\n    border-color: white;\n    color: white;\n}\n\n.cs-dev-panel__input[type='text'] {\n    height: calc(1 * var(--grid-unit));\n    border-radius: 0;\n    border: 1px solid var(--dev-panel-border-color);\n    color: inherit;\n    background-color: rgba(255, 255, 255, .05);\n    font-size: 12px;\n    --input-height: calc(2.5 * var(--grid-unit));\n    height: var(--input-height);\n    line-height: var(--input-height);\n    padding: calc(.5 * var(--grid-unit));\n    box-sizing: border-box;\n    margin: calc(.5 * var(--grid-unit)) 0;\n    width: 100%;\n}\n\n.cs-dev-panel__input--button {\n    padding: calc(.5 * var(--grid-unit)) calc(1 * var(--grid-unit));\n    margin: 0 calc(.25 * var(--grid-unit));\n    --button-height: calc(2.5 * var(--grid-unit));\n    height: var(--button-height);\n    line-height: calc((var(--button-height) / 2) - 1px);\n    font-size: 12px;\n    cursor: pointer;\n    border: none;\n}\n\n.cs-dev-panel__input--button-margin {\n    margin-top: 5px;\n}\n\n.cs-dev-panel__input--button:disabled {\n    opacity: .2;\n    cursor: default;\n}\n\n.cs-dev-panel__toggle-button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: var(--dev-panel-height);\n    width: var(--dev-panel-height);\n    background: var(--dev-panel-bg-emphasis);\n    font-size: 12px;\n    line-height: calc(var(--dev-panel-height) + 2px);\n    cursor: pointer;\n    text-align: center;\n    border-left: 1px solid var(--dev-panel-border-color);\n    box-sizing: content-box;\n    z-index: 1;\n}\n\n.cs-dev-panel__toggle-button:hover {\n    background-color: var(--dev-panel-bg-emphasis-hover);\n}\n\n.cs-dev-panel__header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: var(--dev-panel-height);\n    line-height: calc(var(--dev-panel-height) - 1px);\n    font-size: 12px;\n    background: #161818;\n    box-shadow: 0 5px 0 rgba(0,0,0,.15);\n    z-index: 0;\n    border-bottom: 1px solid var(--dev-panel-border-color);\n}\n\n.cs-dev-panel__body {\n    position: absolute;\n    top: var(--dev-panel-height);\n    right: 0;\n    width: calc(20 * var(--grid-unit));\n    padding: calc(1.5 * var(--grid-unit));\n    padding-bottom: calc(.5 * var(--grid-unit));\n    overflow: hidden;\n    overflow-y: auto;\n    background: #161818;\n    box-shadow: 5px 5px 0 rgba(0,0,0,.15),\n                inset 0 1px 0 var(--dev-panel-border-color);\n    max-height: calc(40 * var(--grid-unit));\n    z-index: 0;\n}\n\n.cs-dev-panel.is-hidden .cs-dev-panel__body {\n    display: none;\n}\n\n.cs-dev-panel.is-hidden .cs-dev-panel__header {\n    box-shadow: none;\n}\n", ""]);
            const a = s
        }
        ,
        66710: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ".cs-dev-panel-header {\n    padding-right: calc(var(--dev-panel-height) + var(--grid-unit));\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    z-index: 0;\n}\n\n.cs-dev-panel-header__section {\n    position: relative;\n    height: var(--dev-panel-height);\n    line-height: var(--dev-panel-height);\n    float: left;\n    overflow: hidden;\n}\n\n.cs-dev-panel-header__section--text {\n    padding-left: calc(1 * var(--grid-unit));\n}\n\n.cs-dev-panel-header__section--text + .cs-dev-panel-header__section--text {\n    padding-left: calc(.5 * var(--grid-unit));\n}\n\n.cs-dev-panel-header__section-title {\n    color: var(--dev-panel-text-color);\n    cursor: default;\n}\n\n.cs-dev-panel-header__section::selection {\n    background-color: var(--dev-panel-selection-color);\n}\n\n.cs-dev-panel-header__emoji {\n    display: inline-block;\n    border-right: 1px solid var(--dev-panel-border-color);\n    padding: 0 calc(.7 * var(--grid-unit));\n    height: 100%;\n    position: relative;\n}\n\n.cs-dev-panel-header__emoji.is-corner::after {\n    content: '';\n    position: absolute;\n    --gap: calc(.3 * var(--grid-unit));\n    --size: calc(.3 * var(--grid-unit));\n    top: var(--gap);\n    right: var(--gap);\n    width: var(--size);\n    height: var(--size);\n    border-radius: 50%;\n    background-color: #00E600;\n}\n", ""]);
            const a = s
        }
        ,
        76161: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ".cs-dev-panel-header-perf-block__controls {\n    float: left;\n    display: none;\n    margin-left: calc(.5 * var(--grid-unit));\n}\n\n.cs-dev-panel-header-perf-block__controls .cs-dev-panel-header-perf-block__console-button {\n    padding: calc(.4 * var(--grid-unit));\n    padding-bottom: calc(.2 * var(--grid-unit));\n    height: auto;\n    vertical-align: middle;\n}\n\n.cs-dev-panel-header-perf-block.is-ready {\n    cursor: pointer;\n}\n\n.cs-dev-panel-header-perf-block.is-ready:hover .cs-dev-panel-header-perf-block__controls {\n    display: block;\n}\n", ""]);
            const a = s
        }
        ,
        11974: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ".cs-dev-panel-section {\n    margin-bottom: calc(1.5 * var(--grid-unit));\n}\n\n.cs-dev-panel-section + .cs-dev-panel-section {\n    padding-top: calc(1.5 * var(--grid-unit));\n    border-top: 1px solid var(--dev-panel-border-color);\n}\n\n.cs-dev-panel-section__title {\n    position: relative;\n    font-size: 12px;\n    font-weight: bold;\n    cursor: pointer;\n    padding-left: calc(1.25 * var(--grid-unit));\n}\n\n.cs-dev-panel-section__title::before {\n    content: '▶';\n    color: inherit;\n    font-size: 10px;\n    font-family: monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    transition: transform .075s ease-in-out;\n    transform-origin: 25% 60%;\n}\n\n.cs-dev-panel-section.is-open .cs-dev-panel-section__title::before {\n    transform: rotate(90deg);\n}\n\n.cs-dev-panel-section.is-open .cs-dev-panel-section__body {\n    display: block;\n}\n\n.cs-dev-panel-section__title:hover {\n    opacity: .85;\n}\n\n.cs-dev-panel-section__body {\n    display: none;\n    margin-top: calc(1 * var(--grid-unit));\n    padding: 0 calc(1.5 * var(--grid-unit));\n    border-left: 1px solid var(--dev-panel-border-color);\n    min-width: calc(20 * var(--grid-unit));\n    box-sizing: border-box;\n}\n\n.cs-dev-panel-section__body hr {\n    margin: calc(1 * var(--grid-unit)) 0;\n    border: none;\n    border-top: 1px solid var(--dev-panel-border-color);\n}\n\n.cs-dev-panel-section__body p,\n.cs-dev-panel-section__body pre {\n    margin: calc(.5 * var(--grid-unit)) 0;\n}\n\n.cs-dev-panel-section__body .cs-dev-panel-section__footer {\n    margin-top: calc(1.5 * var(--grid-unit));\n}\n\n/* clearfix */\n.cs-dev-panel-section__body p::after {\n    content: '';\n    clear: both;\n    display: table;\n}\n\n.cs-dev-panel-section__body label {\n    color: #e1e1e1;\n    float: left;\n    margin-top: calc(.3 * var(--grid-unit));\n    margin-right: calc(.5 * var(--grid-unit));\n}\n\n.cs-dev-panel-section__body input[type='checkbox'] {\n    float: left;\n    margin-left: 0;\n    margin-right: calc(1 * var(--grid-unit));\n}\n", ""]);
            const a = s
        }
        ,
        30268: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ".jupyter-workbench {\n\theight: 100%;\n\twidth: 100%;\n}\n", ""]);
            const a = s
        }
        ,
        39738: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ".vsonline-serverless-workbench {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 3;\n}\n", ""]);
            const a = s
        }
        ,
        8680: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ".cs-icon {\n    display: inline-block;\n    position: relative;\n    width: calc(1.6 * var(--grid-unit));\n    height: calc(1.6 * var(--grid-unit));\n    /* prevent flex layout to affect the sice of the icons */\n    flex-shrink: 0;\n    flex-grow: 0;\n    fill: var(--vscode-editor-foreground, #444d56);\n}\n\n.cs-icon > svg,\n.cs-icon::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.cs-icon::after {\n    content: '';\n    z-index: 2;\n}\n\n.cs-icon svg,\n.cs-icon use {\n    fill: inherit;\n    z-index: 1;\n}\n\n.cs-icon--blue {\n    fill: var(--vscode-debugIcon-continueForeground, #0366d6);\n}\n.cs-icon--green {\n    fill: var(--vscode-debugIcon-startForeground, #28a745);\n}\n.cs-icon--red {\n    fill: var(--vscode-errorForeground, #cb2431);\n}\n.cs-icon--black {\n    fill: var(--vscode-editor-foreground, #444d56);\n}\n\n.cs-icon--white {\n    fill: var(--vscode-editor-foreground, #444d56);\n}", ""]);
            const a = s
        }
        ,
        45203: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, ".cs-workbench-root {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 0;\n}\n\n.cs-workbench-page__dev-panel {\n\tdisplay: none;\n}\n\n.cs-workbench-page__body {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\tbottom: 0;\n\ttransition: top 0.15s ease-in-out;\n}\n\n.cs-workbench-page.is-dev-panel .cs-workbench-page__dev-panel {\n\tdisplay: block;\n}\n\n.cs-workbench-page.is-dev-panel .cs-workbench-page__body {\n\ttop: var(--dev-panel-height);\n}\n\n.cs-workbench-page .Header {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\tz-index: 1;\n}\n\n.cs-workbench-page.is-dev-panel .Header {\n\ttop: var(--dev-panel-height);\n}\n", ""]);
            const a = s
        }
        ,
        82951: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                default: ()=>a
            });
            var o = n(54933)
              , r = n.n(o)
              , i = n(93476)
              , s = n.n(i)()(r());
            s.push([e.id, '/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author\'s permission):\n *   Fabrice Bellard\'s javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n /* xterm copyright applies to xterm styles below  */\n\n .cs-splash-screen .xterm {\n    font-feature-settings: "liga"0;\n    user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    cursor: text;\n}\n\n.cs-splash-screen .xterm.focus,\n.cs-splash-screen .xterm:focus {\n    outline: none;\n}\n\n.cs-splash-screen .xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n   * The z-index of the helpers must be higher than the canvases in order for\n   * IMEs to appear on top.\n   */\n    z-index: 5;\n}\n\n.cs-splash-screen .xterm .xterm-helper-textarea {\n    /*\n   * HACK: to fix IE\'s blinking cursor\n   * Move textarea out of the screen to the far left, so that the cursor is not visible.\n   */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -5;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.cs-splash-screen .xterm .composition-view {\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.cs-splash-screen .xterm .composition-view.active {\n    display: block;\n}\n\n.cs-splash-screen .xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: auto;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.cs-splash-screen .xterm .xterm-screen {\n    position: relative;\n}\n\n.cs-splash-screen .xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.cs-splash-screen .xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.cs-splash-screen .xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: 17.5px;\n}\n\n.cs-splash-screen .xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.cs-splash-screen .xterm.xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.cs-splash-screen .xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.cs-splash-screen .xterm .xterm-accessibility,\n.cs-splash-screen .xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    color: transparent;\n}\n\n.cs-splash-screen .xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n.cs-splash-screen .xterm-dim {\n    opacity: 0.5;\n}\n\n.cs-splash-screen .xterm-underline {\n    text-decoration: underline;\n}', ""]);
            const a = s
        }
        ,
        95126: (e,t,n)=>{
            var o = {
                "./af": 1009,
                "./af.js": 1009,
                "./ar": 88769,
                "./ar-dz": 23739,
                "./ar-dz.js": 23739,
                "./ar-kw": 93745,
                "./ar-kw.js": 93745,
                "./ar-ly": 99576,
                "./ar-ly.js": 99576,
                "./ar-ma": 67408,
                "./ar-ma.js": 67408,
                "./ar-sa": 48781,
                "./ar-sa.js": 48781,
                "./ar-tn": 87856,
                "./ar-tn.js": 87856,
                "./ar.js": 88769,
                "./az": 2030,
                "./az.js": 2030,
                "./be": 56476,
                "./be.js": 56476,
                "./bg": 25304,
                "./bg.js": 25304,
                "./bm": 48125,
                "./bm.js": 48125,
                "./bn": 34,
                "./bn-bd": 29835,
                "./bn-bd.js": 29835,
                "./bn.js": 34,
                "./bo": 64082,
                "./bo.js": 64082,
                "./br": 8317,
                "./br.js": 8317,
                "./bs": 37982,
                "./bs.js": 37982,
                "./ca": 68272,
                "./ca.js": 68272,
                "./cs": 98567,
                "./cs.js": 98567,
                "./cv": 61583,
                "./cv.js": 61583,
                "./cy": 10076,
                "./cy.js": 10076,
                "./da": 31760,
                "./da.js": 31760,
                "./de": 8973,
                "./de-at": 63214,
                "./de-at.js": 63214,
                "./de-ch": 74728,
                "./de-ch.js": 74728,
                "./de.js": 8973,
                "./dv": 54053,
                "./dv.js": 54053,
                "./el": 7499,
                "./el.js": 7499,
                "./en-au": 67876,
                "./en-au.js": 67876,
                "./en-ca": 47010,
                "./en-ca.js": 47010,
                "./en-gb": 34239,
                "./en-gb.js": 34239,
                "./en-ie": 99830,
                "./en-ie.js": 99830,
                "./en-il": 28438,
                "./en-il.js": 28438,
                "./en-in": 25322,
                "./en-in.js": 25322,
                "./en-nz": 43264,
                "./en-nz.js": 43264,
                "./en-sg": 55449,
                "./en-sg.js": 55449,
                "./eo": 39486,
                "./eo.js": 39486,
                "./es": 32430,
                "./es-do": 16310,
                "./es-do.js": 16310,
                "./es-mx": 27038,
                "./es-mx.js": 27038,
                "./es-us": 73099,
                "./es-us.js": 73099,
                "./es.js": 32430,
                "./et": 34975,
                "./et.js": 34975,
                "./eu": 87063,
                "./eu.js": 87063,
                "./fa": 68073,
                "./fa.js": 68073,
                "./fi": 50957,
                "./fi.js": 50957,
                "./fil": 8764,
                "./fil.js": 8764,
                "./fo": 81775,
                "./fo.js": 81775,
                "./fr": 74179,
                "./fr-ca": 14306,
                "./fr-ca.js": 14306,
                "./fr-ch": 73791,
                "./fr-ch.js": 73791,
                "./fr.js": 74179,
                "./fy": 47014,
                "./fy.js": 47014,
                "./ga": 46911,
                "./ga.js": 46911,
                "./gd": 62958,
                "./gd.js": 62958,
                "./gl": 87344,
                "./gl.js": 87344,
                "./gom-deva": 33161,
                "./gom-deva.js": 33161,
                "./gom-latn": 35798,
                "./gom-latn.js": 35798,
                "./gu": 68485,
                "./gu.js": 68485,
                "./he": 27917,
                "./he.js": 27917,
                "./hi": 52159,
                "./hi.js": 52159,
                "./hr": 95842,
                "./hr.js": 95842,
                "./hu": 30005,
                "./hu.js": 30005,
                "./hy-am": 51312,
                "./hy-am.js": 51312,
                "./id": 60781,
                "./id.js": 60781,
                "./is": 64101,
                "./is.js": 64101,
                "./it": 43467,
                "./it-ch": 4759,
                "./it-ch.js": 4759,
                "./it.js": 43467,
                "./ja": 44164,
                "./ja.js": 44164,
                "./jv": 70079,
                "./jv.js": 70079,
                "./ka": 57036,
                "./ka.js": 57036,
                "./kk": 92022,
                "./kk.js": 92022,
                "./km": 63418,
                "./km.js": 63418,
                "./kn": 43655,
                "./kn.js": 43655,
                "./ko": 30986,
                "./ko.js": 30986,
                "./ku": 91902,
                "./ku.js": 91902,
                "./ky": 4604,
                "./ky.js": 4604,
                "./lb": 99026,
                "./lb.js": 99026,
                "./lo": 20537,
                "./lo.js": 20537,
                "./lt": 22288,
                "./lt.js": 22288,
                "./lv": 1495,
                "./lv.js": 1495,
                "./me": 60690,
                "./me.js": 60690,
                "./mi": 2571,
                "./mi.js": 2571,
                "./mk": 93959,
                "./mk.js": 93959,
                "./ml": 97225,
                "./ml.js": 97225,
                "./mn": 88,
                "./mn.js": 88,
                "./mr": 46622,
                "./mr.js": 46622,
                "./ms": 11070,
                "./ms-my": 48899,
                "./ms-my.js": 48899,
                "./ms.js": 11070,
                "./mt": 63931,
                "./mt.js": 63931,
                "./my": 95393,
                "./my.js": 95393,
                "./nb": 4274,
                "./nb.js": 4274,
                "./ne": 8914,
                "./ne.js": 8914,
                "./nl": 33114,
                "./nl-be": 68479,
                "./nl-be.js": 68479,
                "./nl.js": 33114,
                "./nn": 4513,
                "./nn.js": 4513,
                "./oc-lnc": 46549,
                "./oc-lnc.js": 46549,
                "./pa-in": 28264,
                "./pa-in.js": 28264,
                "./pl": 32848,
                "./pl.js": 32848,
                "./pt": 90899,
                "./pt-br": 55077,
                "./pt-br.js": 55077,
                "./pt.js": 90899,
                "./ro": 92512,
                "./ro.js": 92512,
                "./ru": 21753,
                "./ru.js": 21753,
                "./sd": 16840,
                "./sd.js": 16840,
                "./se": 78362,
                "./se.js": 78362,
                "./si": 50464,
                "./si.js": 50464,
                "./sk": 66324,
                "./sk.js": 66324,
                "./sl": 41963,
                "./sl.js": 41963,
                "./sq": 53039,
                "./sq.js": 53039,
                "./sr": 93454,
                "./sr-cyrl": 10466,
                "./sr-cyrl.js": 10466,
                "./sr.js": 93454,
                "./ss": 95158,
                "./ss.js": 95158,
                "./sv": 28859,
                "./sv.js": 28859,
                "./sw": 57594,
                "./sw.js": 57594,
                "./ta": 26915,
                "./ta.js": 26915,
                "./te": 15677,
                "./te.js": 15677,
                "./tet": 92154,
                "./tet.js": 92154,
                "./tg": 74098,
                "./tg.js": 74098,
                "./th": 89071,
                "./th.js": 89071,
                "./tk": 49381,
                "./tk.js": 49381,
                "./tl-ph": 1869,
                "./tl-ph.js": 1869,
                "./tlh": 92346,
                "./tlh.js": 92346,
                "./tr": 71483,
                "./tr.js": 71483,
                "./tzl": 30266,
                "./tzl.js": 30266,
                "./tzm": 33138,
                "./tzm-latn": 32960,
                "./tzm-latn.js": 32960,
                "./tzm.js": 33138,
                "./ug-cn": 29456,
                "./ug-cn.js": 29456,
                "./uk": 50805,
                "./uk.js": 50805,
                "./ur": 61127,
                "./ur.js": 61127,
                "./uz": 29628,
                "./uz-latn": 80840,
                "./uz-latn.js": 80840,
                "./uz.js": 29628,
                "./vi": 56962,
                "./vi.js": 56962,
                "./x-pseudo": 49257,
                "./x-pseudo.js": 49257,
                "./yo": 62423,
                "./yo.js": 62423,
                "./zh-cn": 61002,
                "./zh-cn.js": 61002,
                "./zh-hk": 6046,
                "./zh-hk.js": 6046,
                "./zh-mo": 36903,
                "./zh-mo.js": 36903,
                "./zh-tw": 24710,
                "./zh-tw.js": 24710
            };
            function r(e) {
                var t = i(e);
                return n(t)
            }
            function i(e) {
                if (!n.o(o, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return o[e]
            }
            r.keys = function() {
                return Object.keys(o)
            }
            ,
            r.resolve = i,
            e.exports = r,
            r.id = 95126
        }
        ,
        76186: (e,t,n)=>{
            var o = n(1892)
              , r = n(17283);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        18052: (e,t,n)=>{
            var o = n(1892)
              , r = n(66710);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        21271: (e,t,n)=>{
            var o = n(1892)
              , r = n(76161);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        49047: (e,t,n)=>{
            var o = n(1892)
              , r = n(11974);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        57979: (e,t,n)=>{
            var o = n(1892)
              , r = n(30268);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        96077: (e,t,n)=>{
            var o = n(1892)
              , r = n(39738);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        31944: (e,t,n)=>{
            var o = n(1892)
              , r = n(8680);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        18598: (e,t,n)=>{
            var o = n(1892)
              , r = n(45203);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        88116: (e,t,n)=>{
            var o = n(1892)
              , r = n(82951);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = {
                insert: "head",
                singleton: !1
            };
            o(r, i);
            e.exports = r.locals || {}
        }
        ,
        81883: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11627), n(50162), n(29951), n(44835), n(28788), n(19266), n(53286), n(88137), n(13350), n(92098)],
            r = function(e, t, o, r, s, a, c, d, l, u, p, h) {
                "use strict";
                var f, v;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenCommunicationAdapter = void 0,
                function(e) {
                    e[e.Green = 0] = "Green",
                    e[e.Red = 1] = "Red",
                    e[e.Yellow = 2] = "Yellow",
                    e[e.Underline = 3] = "Underline"
                }(f || (f = {})),
                function(e) {
                    e[e.Starting = 0] = "Starting",
                    e[e.Connecting = 1] = "Connecting",
                    e[e.Streaming = 2] = "Streaming",
                    e[e.Unknown = 3] = "Unknown"
                }(v || (v = {}));
                class m extends o.DisposableClass {
                    constructor(e, t, n, o, r) {
                        super(e),
                        this.performance = t,
                        this.correlationId = o,
                        this.telemetry = r,
                        this.frames = ["⣷", "⣯", "⣟", "⡿", "⢿", "⣻", "⣽", "⣾"],
                        this.streamStatus = v.Unknown,
                        this.intervalCounts = 0,
                        this.line = 1,
                        this.communicationProvider = n
                    }
                    connect(e, t, n) {
                        return i(this, void 0, void 0, (function*() {
                            return this.connectionPromise || (this.connectionPromise = new Promise((a=>i(this, void 0, void 0, (function*() {
                                try {
                                    if (n) {
                                        this.trace.verbose("connecting CommunicationAdapter using the ConnectionHub"),
                                        this.liveshareConnectionHub = n.childHubs[0],
                                        (0,
                                        o.assertDefined)(this.liveshareConnectionHub, "No LiveShare connection hub found.");
                                        const i = t === r.CodespaceStateInfo.Failed ? 10 : 40;
                                        try {
                                            this.performance.main.markBlockEnd({
                                                id: s.PerformanceEventIds.EarlyConnectionTime,
                                                name: "early connection time"
                                            }, !0);
                                            const e = this.performance.main.getBlockDurationTime(s.PerformanceEventIds.EarlyConnectionTime);
                                            this.trace.verbose(`early connect saved ${e}ms`)
                                        } catch (e) {}
                                        let a = {
                                            workspaceId: e.connection.sessionId,
                                            token: e.connection.sessionToken,
                                            liveShareEndpoint: e.connection.serviceUri
                                        };
                                        this.connectionOptions = (0,
                                        l.getWorkspaceSessionInfo)(a, e);
                                        const c = u.featureFlags.isEnabled(p.FeatureFlags.UseBasisForConnections) && !u.featureFlags.isEnabled(p.FeatureFlags.DevTunnelsOptOutMainConnection);
                                        c || (this.connection = yield this.liveshareConnectionHub.connect(this.connectionOptions, {
                                            retries: i,
                                            retryDelay: 2 * o.TIME_SECOND_MS,
                                            shouldReconnect: !1
                                        }),
                                        (0,
                                        o.assertDefined)(this.connection, "Connection object not initialized."));
                                        try {
                                            const e = yield(0,
                                            h.getRpcClient)(this.trace, this.telemetry, this.liveshareConnectionHub, this.connectionOptions);
                                            e.eventStream(this.trace);
                                            const t = e.getCreationLogUpdatedEvent()((e=>{
                                                this.processEntry(e)
                                            }
                                            ));
                                            !c && this.connection && this.connection.addToDisposables(t)
                                        } catch (e) {
                                            this.trace.error("CreationLogStatus API not supported", e)
                                        }
                                    } else {
                                        try {
                                            this.performance.main.markBlockEnd({
                                                id: s.PerformanceEventIds.EarlyConnectionTime,
                                                name: "early connection time"
                                            }, !0);
                                            const e = this.performance.main.getBlockDurationTime(s.PerformanceEventIds.EarlyConnectionTime);
                                            this.trace.verbose(`early connect saved ${e}ms`)
                                        } catch (e) {}
                                        const e = yield(0,
                                        h.getRpcClient)(this.trace, this.telemetry);
                                        e.eventStream(this.trace);
                                        e.getCreationLogUpdatedEvent()((e=>{
                                            this.processEntry(e)
                                        }
                                        ))
                                    }
                                } catch (e) {
                                    throw this.trace.error("connection failed", e),
                                    e
                                }
                                a()
                            }
                            ))))),
                            yield this.connectionPromise
                        }
                        ))
                    }
                    startStreamingTerminal() {
                        return i(this, void 0, void 0, (function*() {
                            try {
                                this.utf8Decoder = new TextDecoder("utf-8");
                                (yield(0,
                                h.getRpcClient)(this.trace, this.telemetry, this.liveshareConnectionHub, this.connectionOptions)).terminalStream((e=>{
                                    if (this.logsOpened) {
                                        let t = this.utf8Decoder.decode(e.getPayload_asU8());
                                        this.communicationProvider.writeToTerminalOutput(a.TerminalId.LogTerminal, t)
                                    }
                                }
                                ), (()=>{
                                    this.trace.info("Terminal stream closed")
                                }
                                ), this.trace)
                            } catch (e) {
                                this.trace.warning("error while creating creation log terminal", e),
                                e instanceof o.AggregateError && this.trace.warning("aggregate errors", e.errors)
                            }
                        }
                        ))
                    }
                    processEntry(e) {
                        this.streamStatus !== v.Streaming && (this.streamStatus = v.Streaming,
                        this.clearInterval(),
                        this.clearTerminal(a.TerminalId.HeaderTerminal),
                        this.line = 1),
                        e.type === c.CreationLogType.InProgress ? this.createProcessingInterval(e) : e.type === c.CreationLogType.Succeeded ? this.overrideWithSucceed(e.text) : this.overrideWithFailure(e.text)
                    }
                    createProcessingInterval(e, t=!1) {
                        this.clearInterval(),
                        this.line++;
                        var r = 0;
                        const i = ()=>{
                            const t = this.frames[r = ++r % this.frames.length];
                            if (t) {
                                const n = this.controlCharacters(t, {
                                    position: this.line,
                                    style: f.Yellow,
                                    moveBeginning: !0
                                });
                                this.communicationProvider.writeToTerminalOutput(a.TerminalId.HeaderTerminal, `${n} ${e.text}`),
                                this.shouldShowLogsLink(e) && this.showLogsLink(),
                                this.intervalCounts++
                            }
                        }
                        ;
                        t || i(),
                        this.interval = n.g.setInterval(i, .1 * o.TIME_SECOND_MS)
                    }
                    shouldShowLogsLink(e) {
                        if (this.intervalCounts < 80)
                            return !1;
                        const t = this.streamStatus !== v.Connecting && this.streamStatus !== v.Starting;
                        return void 0 !== e.isStreamingLogs ? t && e.isStreamingLogs : t
                    }
                    viewLogs() {
                        return i(this, void 0, void 0, (function*() {
                            this.telemetry.sendTelemetry([d.CodespacesTelemetryEventNames.WebSplashScreenLogsOpened, {
                                correlationId: this.correlationId
                            }]),
                            this.showLogsLink(),
                            this.logsOpened = !this.logsOpened,
                            this.startStreamingTerminal()
                        }
                        ))
                    }
                    overrideWithSucceed(e) {
                        this.clearInterval();
                        const t = this.controlCharacters(String.fromCharCode(parseInt("2714", 16)), {
                            eraseLine: !0,
                            position: this.line,
                            style: f.Green,
                            moveBeginning: !0
                        });
                        this.communicationProvider.writeToTerminalOutput(a.TerminalId.HeaderTerminal, `${t} ${e}`),
                        void 0 !== this.logsOpened && this.clearTerminal(a.TerminalId.LogTerminal)
                    }
                    overrideWithFailure(e) {
                        this.clearInterval();
                        const t = this.controlCharacters("x", {
                            eraseLine: !0,
                            position: this.line,
                            style: f.Red,
                            moveBeginning: !0
                        })
                          , n = this.controlCharacters("Check troubleshooting guide.", {
                            style: f.Underline
                        });
                        this.communicationProvider.writeToTerminalOutput(a.TerminalId.HeaderTerminal, `${t} ${e} ${n}`),
                        void 0 !== this.logsOpened && this.clearTerminal(a.TerminalId.LogTerminal)
                    }
                    showLogsLink() {
                        if (this.telemetry.sendTelemetry([d.CodespacesTelemetryEventNames.WebSplashScreenLogsAvailable, {
                            correlationId: this.correlationId
                        }]),
                        this.logsOpened) {
                            const e = this.controlCharacters("Hide logs", {
                                position: this.line + 1,
                                style: f.Underline,
                                alignment: 2,
                                moveBeginning: !0
                            });
                            this.communicationProvider.writeToTerminalOutput(a.TerminalId.HeaderTerminal, e)
                        } else {
                            this.clearTerminal(a.TerminalId.LogTerminal);
                            const e = this.controlCharacters("View logs", {
                                position: this.line + 1,
                                style: f.Underline,
                                alignment: 2,
                                moveBeginning: !0
                            });
                            this.communicationProvider.writeToTerminalOutput(a.TerminalId.HeaderTerminal, e)
                        }
                    }
                    showConnecting() {
                        if (this.streamStatus === v.Unknown || this.streamStatus === v.Streaming) {
                            var e = {
                                text: "Connecting...",
                                type: c.CreationLogType.InProgress,
                                isStreamingLogs: !1
                            };
                            this.createProcessingInterval(e),
                            this.streamStatus = v.Connecting
                        }
                    }
                    showStarting() {
                        if (this.streamStatus !== v.Starting) {
                            this.clearTerminal(a.TerminalId.HeaderTerminal),
                            this.line = 1;
                            var e = {
                                text: "Starting...",
                                type: c.CreationLogType.InProgress,
                                isStreamingLogs: !1
                            };
                            this.createProcessingInterval(e),
                            this.streamStatus = v.Starting
                        }
                    }
                    clearInterval() {
                        this.interval && (clearInterval(this.interval),
                        this.intervalCounts = 0)
                    }
                    clearTerminal(e) {
                        this.communicationProvider.writeToTerminalOutput(e, "c")
                    }
                    controlCharacters(e, t) {
                        var n;
                        const o = "["
                          , r = "[0m"
                          , i = void 0 !== t.style ? this.getStyle(t.style) : void 0
                          , s = " ".repeat(null !== (n = t.alignment) && void 0 !== n ? n : 0);
                        let a = t.position ? `${o}${t.position}H${r}` : "";
                        return a += t.moveBeginning ? "\r" : "",
                        a += t.eraseLine ? `${o}K${r}` : "",
                        a += i ? `${s}${o}${i}${e}${r}` : `${s}${e}`,
                        a
                    }
                    getStyle(e) {
                        let t = "";
                        switch (e) {
                        case f.Green:
                            t += "38;2;40;167;69";
                            break;
                        case f.Red:
                            t += "31";
                            break;
                        case f.Yellow:
                            t += "38;2;219;171;9";
                            break;
                        case f.Underline:
                            t += "4"
                        }
                        return `${t}m`
                    }
                }
                t.SplashScreenCommunicationAdapter = m
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        47226: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenConnectionAdapter = void 0;
                t.SplashScreenConnectionAdapter = class {
                    sendCommand(e, t) {
                        if ("connect" === e)
                            window.postMessage({
                                command: e,
                                codespaceId: t.codespaceId
                            }, window.origin)
                    }
                    onMessage(e) {
                        window.addEventListener("message", e, !1)
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        11398: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11627), n(44835), n(92098)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TerminalCommunicationAdapter = void 0;
                class s extends n.DisposableClass {
                    constructor(e, t, n) {
                        super(e),
                        this.telemetry = n,
                        this.communicationProvider = t
                    }
                    connect() {
                        return i(this, void 0, void 0, (function*() {
                            return this.connectionPromise || (this.connectionPromise = new Promise((e=>i(this, void 0, void 0, (function*() {
                                try {
                                    (yield(0,
                                    r.getRpcClient)(this.trace, this.telemetry)).eventStream(this.trace)
                                } catch (e) {
                                    throw this.trace.error("connection failed", e),
                                    e
                                }
                                e()
                            }
                            ))))),
                            yield this.connectionPromise
                        }
                        ))
                    }
                    startStreamingTerminal() {
                        return i(this, void 0, void 0, (function*() {
                            try {
                                this.utf8Decoder = new TextDecoder("utf-8");
                                (yield(0,
                                r.getRpcClient)(this.trace, this.telemetry)).terminalStream((e=>{
                                    let t = this.utf8Decoder.decode(e.getPayload_asU8());
                                    this.communicationProvider.writeToTerminalOutput(o.TerminalId.LogTerminal, t)
                                }
                                ), (()=>{
                                    this.trace.info("Terminal stream closed")
                                }
                                ), this.trace)
                            } catch (e) {
                                this.trace.warning("error while creating creation log terminal", e),
                                e instanceof n.AggregateError && this.trace.warning("aggregate errors", e.errors)
                            }
                        }
                        ))
                    }
                }
                t.TerminalCommunicationAdapter = s
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        59095: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(11627), n(52739), n(27593), n(78967), n(77306), n(17691), n(18761)],
            r = function(e, t, n, o, r, s, a, c, d, l) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.createCodespacesAPI = t.CodespacesAPI = void 0;
                class u extends n.Disposable {
                    constructor(e) {
                        super(),
                        this.authService = e,
                        this.retryDelayInMs = 250,
                        this.requestToStartCodespace = (e,t,n=this.retryDelayInMs,r={})=>i(this, void 0, void 0, (function*() {
                            return yield(0,
                            o.withRetries)((()=>i(this, void 0, void 0, (function*() {
                                var n;
                                const o = new URL(e)
                                  , i = {
                                    method: "POST",
                                    headers: Object.assign({
                                        Authorization: `Bearer ${this.getTokenString(t)}`
                                    }, r)
                                };
                                let l = yield(0,
                                d.fetchOrNetworkError)(o.toString(), i);
                                if (!l.ok) {
                                    let e = "";
                                    try {
                                        const t = yield l.json();
                                        t && t.message && (e = t.message)
                                    } catch (e) {
                                        throw new s.HttpError(500,e.message,o.toString())
                                    }
                                    if (403 === l.status && /machine type/.test(e))
                                        throw new s.CodespacesPolicyViolationError("Codespace was not started due to a violation of the owner's Codespaces policies");
                                    if (422 == l.status && /operation pending/.test(e))
                                        throw new c.CodespacesPendingOperationError(e);
                                    {
                                        const t = "" !== e ? e : void 0
                                          , r = l.statusText ? l.statusText : void 0;
                                        throw new s.HttpError(l.status,null !== (n = null != t ? t : r) && void 0 !== n ? n : (0,
                                        a.httpStatusCodeToMessage)(l.status),o.toString())
                                    }
                                }
                            }
                            ))), {
                                retries: 3,
                                retryDelay: n,
                                shouldStopRetries: e=>e instanceof s.CodespacesPolicyViolationError || e instanceof c.CodespacesPendingOperationError,
                                isAggregateError: !1
                            })
                        }
                        ))
                    }
                    getCodespaceInfo(e, t=this.retryDelayInMs) {
                        return i(this, void 0, void 0, (function*() {
                            return this.withValidAfterRetry(e, t, (()=>this.getCodespaceInfoInternal(e, t)))
                        }
                        ))
                    }
                    getCodespaceInfoInternal(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            return yield(0,
                            o.withRetries)((()=>i(this, void 0, void 0, (function*() {
                                let t = (0,
                                r.getName)(location.hostname);
                                const n = yield this.getApiUrl(`user/codespaces/${t}?internal=true&refresh=true&t=${Date.now()}`)
                                  , o = {
                                    Authorization: `Bearer ${this.getTokenString(e)}`
                                };
                                let i = yield(0,
                                d.fetchOrNetworkError)(n, {
                                    headers: o
                                });
                                if (!i.ok) {
                                    let t = "Cannot fetch Codespace info.";
                                    if (yield this.isAuthenticationNeeded(e, i.status))
                                        throw yield this.authService.signOut(),
                                        new s.AuthenticationError(t);
                                    if (429 === i.status || 403 === i.status && "0" === i.headers.get("X-RateLimit-Remaining"))
                                        throw new s.ThrottlingApiError(t);
                                    if (404 === i.status)
                                        throw new s.HttpError(404,"This codespace has been deleted.",n);
                                    try {
                                        const e = yield i.json();
                                        e && e.message && (t = e.message)
                                    } catch (e) {
                                        throw new s.HttpError(500,e.message,n)
                                    }
                                    if (403 === i.status && /rate limit/.test(t))
                                        throw new s.ThrottlingApiError(t);
                                    throw new s.HttpError(i.status,null != t ? t : i.statusText,n)
                                }
                                try {
                                    return yield i.json()
                                } catch (e) {
                                    throw new s.HttpError(500,e.message,n)
                                }
                            }
                            ))), {
                                retries: 3,
                                retryDelay: t,
                                shouldStopRetries: e=>e instanceof s.AuthenticationError || e instanceof s.ThrottlingApiError,
                                isAggregateError: !1
                            })
                        }
                        ))
                    }
                    isAuthenticationNeeded(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            if (401 === t)
                                return !0;
                            if (404 !== t)
                                return !1;
                            const n = yield this.getApiUrl(`user/codespaces?t=${Date.now()}`)
                              , o = {
                                Authorization: `Bearer ${this.getTokenString(e)}`
                            };
                            return (yield(0,
                            d.fetchOrNetworkError)(n, {
                                headers: o
                            })).headers.has("x-github-sso")
                        }
                        ))
                    }
                    startCodespace(e, t, n=this.retryDelayInMs) {
                        return i(this, void 0, void 0, (function*() {
                            const o = {
                                Authorization: `Bearer ${this.getTokenString(t)}`
                            }
                              , r = yield this.getApiUrl(`user/codespaces/${e.name}/start`);
                            return this.withValidAfterRetry(t, n, (()=>this.requestToStartCodespace(r, t, n, o)))
                        }
                        ))
                    }
                    suspendCodespace(e, t, n=this.retryDelayInMs) {
                        return i(this, void 0, void 0, (function*() {
                            const o = yield this.getApiUrl(`user/codespaces/${e.name}/stop?internal=true`)
                              , r = {
                                method: "POST",
                                headers: {
                                    Authorization: `Bearer ${this.getTokenString(t)}`
                                }
                            };
                            return this.withValidAfterRetry(t, n, (()=>i(this, void 0, void 0, (function*() {
                                var e;
                                let t = yield(0,
                                d.fetchOrNetworkError)(o, r, !0);
                                if (!t.ok)
                                    throw new s.HttpError(t.status,null !== (e = t.statusText) && void 0 !== e ? e : (0,
                                    a.httpStatusCodeToMessage)(t.status),o)
                            }
                            ))))
                        }
                        ))
                    }
                    getAnalyticsTrackingId(e, t=this.retryDelayInMs) {
                        return i(this, void 0, void 0, (function*() {
                            const n = yield this.getApiUrl("codespaces_internal/analytics_tracking_id")
                              , o = {
                                method: "GET",
                                headers: {
                                    Authorization: `Bearer ${this.getTokenString(e)}`
                                }
                            };
                            return this.withValidAfterRetry(e, t, (()=>i(this, void 0, void 0, (function*() {
                                var e;
                                let t = yield(0,
                                d.fetchOrNetworkError)(n, o, !0);
                                if (!t.ok)
                                    throw new s.HttpError(t.status,null !== (e = t.statusText) && void 0 !== e ? e : (0,
                                    a.httpStatusCodeToMessage)(t.status),n);
                                return (yield t.json()).analytics_tracking_id
                            }
                            ))))
                        }
                        ))
                    }
                    getApiUrl(e) {
                        return i(this, void 0, void 0, (function*() {
                            const t = yield this.authService.getPartnerInfo();
                            if (!t)
                                throw yield this.authService.signOut(),
                                new s.AuthenticationError("Invalid partner info");
                            return (0,
                            l.joinUrl)(t.gitHubApiUrl, e)
                        }
                        ))
                    }
                    getTokenString(e) {
                        var t;
                        return null !== (t = null == e ? void 0 : e.token) && void 0 !== t ? t : ""
                    }
                    withValidAfterRetry(e, t, n) {
                        return i(this, void 0, void 0, (function*() {
                            let o = 0;
                            for (; ; )
                                try {
                                    return yield n()
                                } catch (n) {
                                    const r = Date.now() / 1e3;
                                    if (!(n instanceof s.HttpError && 404 === n.errorCode && (null == e ? void 0 : e.validAfter) && r < e.validAfter))
                                        throw n;
                                    yield new Promise((e=>setTimeout(e, Math.pow(2, o++) * t)))
                                }
                        }
                        ))
                    }
                }
                t.CodespacesAPI = u;
                t.createCodespacesAPI = e=>new u(e)
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        48187: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27378), n(31542), n(23655), n(13121), n(60992), n(9987), n(88279), n(9215), n(98099), n(7562), n(59095), n(98259), n(99995), n(7490), n(19266), n(98221), n(55409), n(47035), n(8955), n(80934), n(29951)],
            r = function(e, t, n, o, r, i, s, d, l, u, p, h, f, v, m, g, y, b, C, S, w, T, _) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.main = void 0,
                n = a(n),
                o = a(o),
                p.mainTrace.info("init 👋"),
                t.main = function(e, t, a, E, P, k) {
                    var I;
                    return c(this, void 0, void 0, (function*() {
                        m.initPerformance.main.markBlockStart({
                            id: _.PerformanceEventIds.ReactInitToVSCodeCreate,
                            name: "react init to vscode.create"
                        }, !0);
                        const {workbenchConfig: c, workbenchType: O, partnerInfo: x} = e
                          , M = new s.Config(c,t,O,p.mainTrace.createChild("workbench-config"),e.serverCorrelationId,null == x ? void 0 : x.featureFlags)
                          , j = new g.CodespacesTelemetryService(p.mainTrace.createChild("workbench-telemetry"),a,M,O,t,(0,
                        g.configureTelemetryProperties)(M, e.serverCorrelationId),m.initPerformance,E);
                        m.initPerformance.main.markBlockStart({
                            id: _.PerformanceEventIds.TimeToInteractive,
                            name: "time to interactive"
                        }, !0),
                        j.sendTelemetry([y.CodespacesTelemetryEventNames.TimeToInteractiveActionStart, {}]);
                        try {
                            let s = n.createElement(n.Fragment, null);
                            if ("editor" === O) {
                                const e = new d.WebEditorAuthService(p.mainTrace.createChild("auth-service"),M,j);
                                if ((0,
                                w.isValidAuthRequestId)(M))
                                    s = n.createElement(i.WebEditorComponent, {
                                        telemetry: j,
                                        authService: e,
                                        config: M,
                                        trace: p.mainTrace.createChild("webeditor-component")
                                    });
                                else {
                                    s = n.createElement(T.AuthFailedMessage, {
                                        message: S.AUTH_FAILED_SCREEN_MESSAGE,
                                        buttonText: "Try again",
                                        onClick: ()=>{
                                            localStorage.removeItem(e.localStorageId),
                                            location.reload()
                                        }
                                    });
                                    const o = (0,
                                    C.isCodespaceWorkbenchType)(O) ? y.CodespacesTelemetryEventNames.WebRequestIdMismatch : y.CodespacesTelemetryEventNames.WebEditorRequestIdMismatch;
                                    j.sendTelemetry([o, {
                                        requestId: t
                                    }])
                                }
                            } else {
                                let t;
                                try {
                                    t = JSON.stringify(null == x ? void 0 : x.featureFlags)
                                } catch (e) {}
                                const o = Object.assign(Object.assign({}, e.workbenchConfig), {
                                    vscodeStableCommit: e.workbenchConfig.vscodeVersionInfo.stable.commit,
                                    vscodeInsidersCommit: e.workbenchConfig.vscodeVersionInfo.insider.commit,
                                    action: y.TelemetryActionTypes.Load,
                                    codespaceId: null == x ? void 0 : x.codespaceId,
                                    featureFlags: t,
                                    searchParams: location.search,
                                    bootstrapError: k ? {
                                        message: k.errorMessage,
                                        name: k.errorType,
                                        stack: k.stack
                                    } : void 0,
                                    firstKnownState: null == P ? void 0 : P.state,
                                    hasConnectionInfo: !!(null == P ? void 0 : P.connection),
                                    hasTunnelProperties: !!(null === (I = null == P ? void 0 : P.connection) || void 0 === I ? void 0 : I.tunnelProperties)
                                });
                                j.sendTelemetry([y.CodespacesTelemetryEventNames.WebLoadActionStart, o]);
                                const r = new u.CodespacesAuthService(p.mainTrace.createChild("auth-service"),M,j)
                                  , i = (0,
                                f.createCodespacesAPI)(r)
                                  , c = new h.CodespaceStateWatcher(p.mainTrace.createChild("codespace-state-watcher"),i,j,P);
                                s = n.createElement(l.CodespacesComponent, {
                                    authService: r,
                                    config: M,
                                    trace: p.mainTrace.createChild("codespaces-component"),
                                    telemetry: j,
                                    codespaceStateWatcher: c,
                                    codespacesAPI: i,
                                    initConnectionHub: v.initConnectionHub,
                                    performance: m.initPerformance,
                                    editor: a,
                                    initialCodespaceInfo: P
                                })
                            }
                            o.render(s, (0,
                            r.getAppRootElement)())
                        } catch (e) {
                            p.mainTrace.error("failed to render the app root", e);
                            const t = (0,
                            C.isCodespaceWorkbenchType)(O) ? y.CodespacesTelemetryEventNames.WebUnhandledError : y.CodespacesTelemetryEventNames.WebEditorUnhandledError;
                            j.sendTelemetry([t, (0,
                            b.errorToObject)(e)])
                        }
                    }
                    ))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        90360: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(11627), n(27593), n(47035), n(43538), n(98259)],
            r = function(e, t, n, o, r, i, s, d) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.AuthService = void 0,
                n = a(n);
                class l extends o.DisposableClass {
                    constructor(e, t, o, r) {
                        super(e),
                        this.config = t,
                        this.telemetry = o,
                        this.partnerAuthInfo = r,
                        this.MAX_AUTH_ATTEMPTS = 3,
                        this.ATTEMPT_TTL = 1800,
                        this.isInternalUser = !1,
                        this.eventsEventEmitter = new n.Emitter,
                        this.onEvent = this.eventsEventEmitter.event,
                        this.signOut = ()=>c(this, void 0, void 0, (function*() {
                            yield Promise.all([this.partnerAuthInfo.removePartnerInfo(), null === d.preconnectionStorage || void 0 === d.preconnectionStorage ? void 0 : d.preconnectionStorage.clearConnectionData()]),
                            this.keepUserAuthenticated && this.keepUserAuthenticated.stop(),
                            this.eventsEventEmitter.fire("signed-out")
                        }
                        )),
                        this.authAttempts = ()=>{
                            const e = localStorage.getItem(this.localStorageId);
                            if (!e)
                                return 0;
                            const t = parseInt(e, 10);
                            if (!isNaN(t))
                                return t;
                            const n = JSON.parse(e);
                            if ((new Date).getTime() > n.expiry)
                                return localStorage.removeItem(this.localStorageId),
                                0;
                            return n.value
                        }
                        ,
                        this.makeTokenRequest = ()=>c(this, void 0, void 0, (function*() {
                            try {
                                return yield this.partnerAuthInfo.getKeychainKeys(),
                                this
                            } catch (e) {
                                this.trace.error("failed to get encryption keys, redirecting for auth", e),
                                yield this.signOut()
                            }
                            return this
                        }
                        )),
                        this.keepUserAuthenticated = (0,
                        s.debounce)(this.makeTokenRequest, 3e5),
                        this.localStorageId = `${i.AUTH_ATTEMPTS_COUNT_LOCALSTORAGE_KEY}_${t.requestId}`,
                        this.addToDisposables(this.partnerAuthInfo, this.eventsEventEmitter)
                    }
                    get isInternal() {
                        return this.isInternalUser
                    }
                    getPartnerInfo() {
                        return c(this, void 0, void 0, (function*() {
                            const e = yield this.partnerAuthInfo.getCachedPartnerInfo();
                            return e ? (this.validatePartnerInfo(e),
                            localStorage.removeItem(this.localStorageId),
                            e) : null
                        }
                        ))
                    }
                    getCachedGithubToken() {
                        return c(this, void 0, void 0, (function*() {
                            const e = yield this.getPartnerInfo();
                            if (!e)
                                return null;
                            const t = this.getPartnerCredentials(e);
                            return t || null
                        }
                        ))
                    }
                    preventInfiniteAuthLoop() {
                        const e = this.authAttempts();
                        if (e >= this.MAX_AUTH_ATTEMPTS)
                            throw new r.AuthenticationFatalError;
                        const t = {
                            value: e + 1,
                            expiry: (new Date).getTime() + this.ATTEMPT_TTL
                        };
                        localStorage.setItem(this.localStorageId, JSON.stringify(t))
                    }
                }
                t.AuthService = l
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        9215: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27593), n(47035), n(54545), n(52739), n(90360), n(24663)],
            r = function(e, t, n, o, r, s, a, c) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getCodespacesAuthService = t.CodespacesAuthService = void 0;
                class d extends a.AuthService {
                    constructor(e, t, a, d=new c.CoreAuthService(e,a,t)) {
                        super(e, t, a, d),
                        this.partnerAuthInfo = d,
                        this.getManagementPortalUrl = ()=>i(this, void 0, void 0, (function*() {
                            const e = yield this.getPartnerInfo()
                              , t = (0,
                            r.getLoginRedirectionURL)(e);
                            if (!t)
                                throw new n.FatalPlatformRedirectionError("Cannot get login redirection URL.");
                            return t
                        }
                        )),
                        this.redirectToLogin = e=>i(this, void 0, void 0, (function*() {
                            this.preventInfiniteAuthLoop();
                            let t = e ? new URL(e) : yield this.getManagementPortalUrl()
                              , n = (0,
                            s.getName)(window.location.hostname) || "";
                            location.hostname.endsWith(".localhost") && (n = n.replace(/^codespace\-/, "")),
                            n && (t = new URL(n,t)),
                            localStorage.setItem(o.SEARCH_PARAMS_KEY, location.search),
                            location.href = t.toString()
                        }
                        )),
                        this.validatePartnerInfo = e=>{
                            if (!e.codespaceToken)
                                throw new Error("No `codespaceToken` set.");
                            if (!e.managementPortalUrl)
                                throw new Error("No `managementPortalUrl` set.");
                            if (!e.codespaceId)
                                throw new Error("No `codespaceId` set.")
                        }
                        ,
                        this.trace.createChild("core-auth"),
                        this.addToDisposables(this.partnerAuthInfo)
                    }
                    getVscodeSettings(e) {
                        return e.vscodeSettings
                    }
                    getPartnerCredentials(e) {
                        return e.credentials[0]
                    }
                }
                t.CodespacesAuthService = d;
                t.getCodespacesAuthService = (e,t,n)=>new d(e,t,n)
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        24663: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(11627), n(3546), n(8957), n(21398), n(47035), n(27593), n(24521), n(19266), n(98221)],
            r = function(e, t, n, o, r, i, s, d, l, u, p, h) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CoreAuthService = void 0,
                n = a(n);
                class f extends n.Disposable {
                    constructor(e, t, n) {
                        super(),
                        this.trace = e,
                        this.telemetry = t,
                        this.config = n,
                        this.keys = [],
                        this.getKeychainPartnerInfoKey = e=>`vso.partners.${e}`,
                        this.removePartnerInfo = e=>c(this, void 0, void 0, (function*() {
                            if (e) {
                                const t = this.getKeychainPartnerInfoKey(e);
                                yield i.localStorageKeychain.delete(t)
                            }
                            yield i.localStorageKeychain.delete(d.PARTNER_INFO_KEYCHAIN_KEY)
                        }
                        )),
                        this.getKeychainKeys = (0,
                        o.once)((()=>c(this, void 0, void 0, (function*() {
                            return yield(0,
                            u.withRetries)((()=>c(this, void 0, void 0, (function*() {
                                const e = yield(0,
                                r.fetchKeychainKeys)(this.config.serverCorrelationId);
                                return (0,
                                o.assert)(e.length > 0, new o.CancellationError("Encryption keys array is empty, giving up.")),
                                (0,
                                s.setKeychainKeys)(e),
                                this.trace.verbose("got keychain keys from the /keychain-keys endpoint"),
                                e
                            }
                            ))), {
                                retries: 3,
                                retryDelay: 50,
                                shouldStopRetries: e=>{
                                    const t = (0,
                                    h.errorToObject)(e);
                                    return this.telemetry.sendTelemetry([p.CodespacesTelemetryEventNames.KeychainKeyFault, t]),
                                    e instanceof l.AuthenticationError
                                }
                                ,
                                isAggregateError: !1
                            })
                        }
                        )))),
                        this.getCachedPartnerInfo = ()=>c(this, void 0, void 0, (function*() {
                            if (!this.keys.length)
                                try {
                                    this.keys = yield this.getKeychainKeys()
                                } catch (e) {
                                    if (e instanceof l.NetworkError)
                                        throw e;
                                    return console.log("failed to get encryption keys", e),
                                    null
                                }
                            return yield this.getInfoForKey(d.PARTNER_INFO_KEYCHAIN_KEY)
                        }
                        ))
                    }
                    getInfoForKey(e) {
                        var t;
                        return c(this, void 0, void 0, (function*() {
                            const n = e === d.PARTNER_INFO_KEYCHAIN_KEY ? d.PARTNER_INFO_KEYCHAIN_KEY : this.getKeychainPartnerInfoKey(e)
                              , o = yield i.localStorageKeychain.get(n);
                            if (!o.succeeded) {
                                const e = (0,
                                h.errorToObject)(null !== (t = o.error) && void 0 !== t ? t : new l.GenericAuthServiceError("Failed to get info for key"));
                                return this.telemetry.sendTelemetry([p.CodespacesTelemetryEventNames.KeychainKeyFault, e]),
                                null
                            }
                            try {
                                if (!o.result)
                                    throw new l.GenericAuthServiceError("Failed parse partner info");
                                return JSON.parse(o.result)
                            } catch (e) {
                                const t = (0,
                                h.errorToObject)(e);
                                this.telemetry.sendTelemetry([p.CodespacesTelemetryEventNames.KeychainKeyFault, t])
                            }
                            return null
                        }
                        ))
                    }
                }
                t.CoreAuthService = f
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        9987: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(47035), n(90360), n(24663)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.WebEditorAuthService = void 0;
                class s extends o.AuthService {
                    constructor(e, t, o, s=new r.CoreAuthService(e,o,t)) {
                        super(e, t, o, s),
                        this.partnerAuthInfo = s,
                        this.getManagementPortalUrl = ()=>i(this, void 0, void 0, (function*() {
                            const e = yield this.getPartnerInfo()
                              , t = (null == e ? void 0 : e.managementPortalUrl) || n.AUTH_REDIRECT_FALLBACK_URL;
                            return new URL(t)
                        }
                        )),
                        this.redirectToLogin = e=>i(this, void 0, void 0, (function*() {
                            this.preventInfiniteAuthLoop();
                            let t = e ? new URL(e) : yield this.getManagementPortalUrl();
                            "github.dev" !== location.host && t.searchParams.append("host", location.host);
                            const n = location.pathname + location.search + location.hash;
                            n && "/" !== n && t.searchParams.set("redirect", n),
                            t.searchParams.set("requestId", this.config.requestId),
                            location.href = t.toString()
                        }
                        )),
                        this.validatePartnerInfo = e=>{
                            if (!e.managementPortalUrl)
                                throw new Error("No `managementPortalUrl` set.")
                        }
                        ,
                        this.trace.createChild("core-auth"),
                        this.addToDisposables(this.partnerAuthInfo)
                    }
                    getVscodeSettings(e) {
                        return e.vscodeSettings
                    }
                    getPartnerCredentials(e) {
                        return e.credentials[0]
                    }
                }
                t.WebEditorAuthService = s
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        33350: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(83730), n(45895), n(48814), n(19522), n(29951), n(19266), n(43024), n(67720), n(33972), n(72995), n(11398)],
            r = function(e, t, n, o, r, i, s, d, l, u, p, h, f, v) {
                "use strict";
                var m;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.createCodespacesCommands = t.CodespacesCommandIds = void 0,
                n = a(n),
                function(e) {
                    e.CodespacesTimeToInteractive = "_codespaces.timeToInteractive",
                    e.CodespacesReloadBrowserWindow = "_codespaces.reloadBrowserWindow",
                    e.MyCodespaces = "_codespaces.embedder.myCodespaces",
                    e.ConnectWorkspace = "_codespaces.webeditor.connectWorkspace",
                    e.UnregisterServiceWorker = "_codespaces.embedder.unregisterServiceWorker",
                    e.TimeToInteractive = "_codespaces.timeToInteractive",
                    e.ViewCreationLogs = "_codespaces.viewCreationLog"
                }(m || (t.CodespacesCommandIds = m = {}));
                t.createCodespacesCommands = (e,t,a,g,y,b)=>[{
                    id: m.MyCodespaces,
                    handler: n=>{
                        (0,
                        i.vscodeMenuClickHandler)(e.createChild("my-codespaces"), (()=>(0,
                        s.getCodespacesUrl)(t)), null == n ? void 0 : n.openInSameTab)
                    }
                }, {
                    id: m.CodespacesReloadBrowserWindow,
                    handler: ()=>{
                        e.info(`command "${m.CodespacesReloadBrowserWindow}" is invoked'`),
                        window.location.reload()
                    }
                }, {
                    id: m.UnregisterServiceWorker,
                    handler: ()=>{
                        e.info(`command "${m.UnregisterServiceWorker}" is invoked'`),
                        (0,
                        r.unregister)()
                    }
                }, {
                    id: m.TimeToInteractive,
                    handler: ()=>{
                        var t, n, o, r;
                        a.main.markBlockEnd({
                            id: d.PerformanceEventIds.EditorsToExtensionActivation,
                            name: "editors to time to extensions"
                        }, !0),
                        e.info(`command "${m.TimeToInteractive}" is invoked'`),
                        a.main.markBlockEnd({
                            id: d.PerformanceEventIds.TimeToInteractive,
                            name: "time to interactive"
                        }, !0);
                        const i = a.main.getBlockMeasure(d.PerformanceEventIds.TotalWorkbenchConnectionTime)
                          , s = a.main.getBlockMeasure(d.PerformanceEventIds.TimeToInteractive);
                        let c, u;
                        (null === (t = null == i ? void 0 : i.measure) || void 0 === t ? void 0 : t.startTime) && (null === (n = null == i ? void 0 : i.measure) || void 0 === n ? void 0 : n.duration) && (c = i.measure.startTime + i.measure.duration),
                        (null === (o = null == s ? void 0 : s.measure) || void 0 === o ? void 0 : o.startTime) && (null === (r = null == s ? void 0 : s.measure) || void 0 === r ? void 0 : r.duration) && (u = s.measure.startTime + s.measure.duration),
                        g.sendTelemetry([l.CodespacesTelemetryEventNames.TimeToInteractiveActionStop, {
                            timeToWorkbench: c,
                            timeToInteractive: u
                        }]),
                        g.sendPerformanceTelemetry()
                    }
                }, {
                    id: m.ViewCreationLogs,
                    handler: ()=>c(void 0, void 0, void 0, (function*() {
                        e.info(`command "${m.ViewCreationLogs}" is invoked'`);
                        const t = new o.Emitter
                          , r = new h.TerminalCommunicationProvider(t)
                          , i = new v.TerminalCommunicationAdapter(e.createChild("communication-adapter"),r,g);
                        n.window.createTerminal({
                            name: "GitHub Codespaces: Details",
                            pty: {
                                onDidWrite: t.event,
                                open() {
                                    (0,
                                    u.pollUntilCodespaceConnectionReady)(y, b, g, e, !0).then((t=>c(this, void 0, void 0, (function*() {
                                        (0,
                                        p.initializeDevTunnelProvider)(e, g, t),
                                        yield(0,
                                        f.connectSplashScreen)(i, t, y.state),
                                        i.startStreamingTerminal()
                                    }
                                    ))))
                                },
                                close() {}
                            }
                        })
                    }
                    ))
                }]
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        13377: (e,t,n)=>{
            var o, r;
            o = [n, t, n(5604), n(19266), n(47035)],
            r = function(e, t, n, o, r) {
                "use strict";
                var i;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.createWebEditorCommands = t.WebEditorCommandIds = void 0,
                function(e) {
                    e.ConnectWorkspace = "_codespaces.webeditor.connectWorkspace",
                    e.GetTarballProxyEndpoints = "_remotehub.getTarballProxyEndpoints"
                }(i || (t.WebEditorCommandIds = i = {}));
                t.createWebEditorCommands = (e,t,s,a)=>{
                    let c = "Unknown";
                    null != a && (c = (0,
                    n.refTypeToString)(a));
                    return [{
                        id: i.ConnectWorkspace,
                        handler: n=>{
                            var r;
                            n.refType = null !== (r = n.refType) && void 0 !== r ? r : c,
                            null == s || s.webEditorAction(o.CodespacesTelemetryEventNames.WebEditorActionStop, n, e, t)
                        }
                    }, {
                        id: i.GetTarballProxyEndpoints,
                        handler: ()=>({
                            "github.com": r.GITHUB_TARBALL_PROXY_URL
                        })
                    }]
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        88279: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            , d = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042), n(7562), n(95456), n(27593), n(29951), n(58338), n(45421), n(76545), n(34545), n(4060), n(77306), n(50162), n(47035), n(45329), n(19266), n(88137), n(13350), n(69199), n(26725), n(98221), n(96516), n(29499), n(49630), n(2509)],
            r = function(e, t, n, o, r, i, s, l, u, p, h, f, v, m, g, y, b, C, S, w, T, _, E, P, k, I, O) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CodespacesComponent = void 0,
                n = a(n),
                o = d(o);
                class x extends n.Component {
                    constructor(e, t) {
                        var n, o, a;
                        super(e, t),
                        this.defaultCodespaceState = r.CodespaceStateWatcher.DefaultCodespaceState,
                        this.isInitialConnection = !0,
                        this.updateCodespaceState = (e,t)=>{
                            this.setState(Object.assign(Object.assign({}, this.state), {
                                codespaceState: t,
                                previousCodespaceState: e
                            }))
                        }
                        ,
                        this.onCodespaceStateChange = e=>c(this, void 0, void 0, (function*() {
                            try {
                                const [t,n,o] = e
                                  , {trace: r, codespaceStateWatcher: i} = this.props;
                                if (r.info("onCodespaceStateChange: ", e),
                                t)
                                    return this.componentDidCatch(t);
                                const {codespaceInfo: s} = i;
                                this.setState({
                                    codespaceState: n,
                                    previousCodespaceState: o,
                                    codespaceInfo: s
                                })
                            } catch (e) {
                                this.componentDidCatch(e)
                            }
                        }
                        )),
                        this.componentDidCatch = e=>c(this, void 0, void 0, (function*() {
                            const {telemetry: t, trace: n, authService: o, codespaceStateWatcher: r} = this.props
                              , {codespaceState: a} = this.state
                              , c = a;
                            try {
                                this.recordAppState();
                                const a = (0,
                                E.errorToObject)(e);
                                r.stop();
                                const d = y.HANDLED_WEB_ERROR_TYPES.some((t=>e instanceof t))
                                  , l = e instanceof s.HttpError && (401 === e.statusCode || 402 === e.statusCode || 404 === e.statusCode || y.HANDLED_HTTP_ERROR_MESSAGES.some((t=>{
                                    var n;
                                    return null === (n = e.message) || void 0 === n ? void 0 : n.startsWith(t)
                                }
                                )))
                                  , u = e instanceof m.ConnectedError ? C.TelemetryResultTypes.Success : C.TelemetryResultTypes.Failure;
                                if (this.isInitialConnection && (t.sendTelemetry([C.CodespacesTelemetryEventNames.WebLoadActionStop, Object.assign(Object.assign({}, a), {
                                    action: C.TelemetryActionTypes.Load,
                                    result: d || l ? C.TelemetryResultTypes.UserError : u
                                })]),
                                this.isInitialConnection = !1),
                                e instanceof m.ConnectedError)
                                    return n.verbose("Codespace connected"),
                                    void this.updateCodespaceState(c, i.CodespaceWorkspaceState.Connected);
                                if (e instanceof m.DisconnectedError)
                                    return n.warning(e.message),
                                    void (0,
                                    f.setQueryParamFlag)(h.CodespacesQueryParams.AutoStart, !1);
                                if (e instanceof s.HttpError && 401 === e.statusCode)
                                    return n.verbose("signed out"),
                                    this.updateCodespaceState(c, i.CodespaceWorkspaceState.Error),
                                    void (yield o.signOut());
                                if (e instanceof s.HttpError && 404 === e.statusCode)
                                    return n.verbose("Codespace was deleted"),
                                    void this.updateCodespaceState(c, g.CodespaceStateInfo.Deleted);
                                if (e instanceof s.ThrottlingApiError)
                                    return n.verbose("API throttling error hit"),
                                    void this.setState(Object.assign(Object.assign({}, this.state), {
                                        previousCodespaceState: c,
                                        codespaceState: i.CodespaceWorkspaceState.Error,
                                        error: e
                                    }));
                                if (e instanceof s.CodespacesPolicyViolationError)
                                    return n.verbose("Disallowed by Codespaces policy"),
                                    void (yield o.redirectToLogin());
                                if (e instanceof s.OutdatedCodespaceStateError)
                                    return n.verbose("Codespace state is outdated"),
                                    void this.updateCodespaceState(c, e.state);
                                if (e instanceof s.WorkbenchMountedTwiceError && window.location.reload(),
                                t.sendTelemetry([C.CodespacesTelemetryEventNames.WebCodespacesWorkbenchError, a]),
                                e instanceof m.CodespacesPendingOperationError)
                                    return n.verbose("Codespace is updating"),
                                    void this.updateCodespaceState(c, g.CodespaceStateInfo.Updating);
                                this.setState(Object.assign(Object.assign({}, this.state), {
                                    previousCodespaceState: c,
                                    codespaceState: i.CodespaceWorkspaceState.Error,
                                    error: e
                                }))
                            } catch (e) {
                                const o = (0,
                                E.errorToObject)(e, !0);
                                n.error("error in did catch: ", o),
                                t.sendTelemetry([C.CodespacesTelemetryEventNames.WebCodespacesWorkbenchError, o])
                            }
                        }
                        )),
                        this.startCodespace = ()=>c(this, void 0, void 0, (function*() {
                            return yield this.props.performance.measure({
                                id: l.PerformanceEventIds.StartCodespace,
                                name: "start codespace"
                            }, (()=>c(this, void 0, void 0, (function*() {
                                const {codespaceStateWatcher: e} = this.props;
                                return yield e.startCodespace()
                            }
                            ))))
                        }
                        )),
                        this.getCodespaceInfo = (e=!1)=>c(this, void 0, void 0, (function*() {
                            try {
                                const {codespaceStateWatcher: t} = this.props
                                  , {codespaceInfo: n, firstCodespaceInfoUpdatePromise: o} = t;
                                return e && n ? n : (yield o,
                                yield t.pollCodespace())
                            } catch (e) {
                                return this.componentDidCatch(e),
                                null
                            }
                        }
                        )),
                        this.waitUntilCodespaceAvailable = e=>c(this, void 0, void 0, (function*() {
                            const {codespaceStateWatcher: t} = this.props;
                            e && this.props.performance.main.markBlockStart({
                                id: l.PerformanceEventIds.IdleToAvailable,
                                name: "idle to available"
                            }, !0);
                            const n = new Promise(((n,o)=>c(this, void 0, void 0, (function*() {
                                const o = t=>c(this, void 0, void 0, (function*() {
                                    if (e)
                                        switch (null == t ? void 0 : t.state) {
                                        case g.CodespaceStateInfo.Provisioning:
                                            return void e.update(I.ProgressOptions.ProvisioningCodespace);
                                        case g.CodespaceStateInfo.Starting:
                                            return void e.update(I.ProgressOptions.ResumingCodespace);
                                        case g.CodespaceStateInfo.ShuttingDown:
                                            return void e.update(I.ProgressOptions.ShuttingDown);
                                        case g.CodespaceStateInfo.Rebuilding:
                                            return void e.update(I.ProgressOptions.RebuildCodespace)
                                        }
                                    if (!t)
                                        return yield this.componentDidCatch(new Error("Failed to fetch the codespace"));
                                    const o = t.state;
                                    if ([g.CodespaceStateInfo.Deleted, g.CodespaceStateInfo.Failed, g.CodespaceStateInfo.ShuttingDown, g.CodespaceStateInfo.Shutdown, g.CodespaceStateInfo.Unavailable].includes(o))
                                        return yield this.componentDidCatch(new s.OutdatedCodespaceStateError("The codespace is not in a state that can transition to available state.",o));
                                    o === g.CodespaceStateInfo.Available && (e && this.props.performance.main.markBlockEnd({
                                        id: l.PerformanceEventIds.IdleToAvailable,
                                        name: "idle to available"
                                    }, !0),
                                    n(t))
                                }
                                ));
                                o(yield this.getCodespaceInfo()),
                                t.onStateChange((e=>c(this, void 0, void 0, (function*() {
                                    const {codespaceInfo: e} = t;
                                    yield o(e)
                                }
                                ))))
                            }
                            ))));
                            return n
                        }
                        )),
                        this.state = {
                            codespaceState: null !== (o = null === (n = this.props.initialCodespaceInfo) || void 0 === n ? void 0 : n.state) && void 0 !== o ? o : this.defaultCodespaceState,
                            isDevPanel: !1,
                            codespaceInfo: null !== (a = this.props.initialCodespaceInfo) && void 0 !== a ? a : null,
                            platformInfo: null,
                            error: e.error,
                            connectionHub: null,
                            previousCodespaceState: null
                        }
                    }
                    recordAppState() {
                        const {telemetry: e} = this.props
                          , {codespaceState: t, previousCodespaceState: n, error: o} = this.state;
                        e.addContextProperties({
                            "codespace-state": t,
                            "previous-codespace-state": n
                        }),
                        e.recordAppState(t, o, (()=>!y.CODESPACE_IN_PROGRESS_STATES.includes(t)))
                    }
                    componentDidMount() {
                        var e, t, n;
                        const {telemetry: o, authService: r, error: a, trace: c, config: d, performance: p, initConnectionHub: h} = this.props;
                        o.addContextProperty("has-initial-connection-info", !!(null === (e = this.props.initialCodespaceInfo) || void 0 === e ? void 0 : e.connection)),
                        o.addContextProperty("has-initial-tunnel-properties", !!(null === (n = null === (t = this.props.initialCodespaceInfo) || void 0 === t ? void 0 : t.connection) || void 0 === n ? void 0 : n.tunnelProperties)),
                        S.featureFlags.initPromise.then((()=>{
                            S.featureFlags.isEnabled(w.FeatureFlags.UseBasisForConnections) && !S.featureFlags.isEnabled(w.FeatureFlags.DevTunnelsOptOutMainConnection) && (0,
                            O.registerServiceWorker)(c, !0)
                        }
                        )),
                        a || (r.keepUserAuthenticated(),
                        r.onEvent((e=>{
                            if ("signed-out" === e) {
                                if (this.state.codespaceState === g.CodespaceStateInfo.Shutdown || this.state.codespaceState === g.CodespaceStateInfo.ShuttingDown)
                                    throw new s.OutdatedCodespaceStateError("The codespace is not in an available state.",this.state.codespaceState);
                                this.setState({
                                    previousCodespaceState: this.state.codespaceState,
                                    codespaceState: i.CodespaceWorkspaceState.Error,
                                    error: new s.AuthenticationError("Codespace disconnected.")
                                })
                            }
                        }
                        )),
                        Promise.all([r.getPartnerInfo(), d.fetch()]).then((([e])=>{
                            const t = e;
                            p.main.markBlockStart({
                                id: l.PerformanceEventIds.TimeToFirstConnection,
                                name: "time to connection"
                            }, !0);
                            let n = null;
                            if (t) {
                                S.featureFlags.initialize(c.createChild("feature-flags"), t.featureFlags),
                                o.addConfigContextProperties({
                                    codespaceId: t.codespaceId
                                }),
                                S.featureFlags.isEnabled(w.FeatureFlags.UseBasisForConnections) || (n = h(c.createChild("connection-hub"), p.main, r, o, this.props.initialCodespaceInfo),
                                k.connectionMetricsLogger.beginLoggingMetrics(n, o, c));
                                const {codespaceId: e, credentials: i} = t;
                                (0,
                                u.setCurrentCodespaceId)(t.codespaceId);
                                const {codespaceStateWatcher: s} = this.props;
                                s.onStateChange(this.onCodespaceStateChange.bind(this)),
                                r && r.getCachedGithubToken().then((t=>{
                                    s.initialize(t, i[0].token, e),
                                    t && this.props.codespacesAPI.getAnalyticsTrackingId(t).then((e=>{
                                        o.addContextProperty("analyticsTrackingId", e)
                                    }
                                    ), (e=>{
                                        c.error("Failed to get analytics tracking id", e)
                                    }
                                    ))
                                }
                                )).catch(this.componentDidCatch)
                            }
                            c.verbose(`platform info found: ${!!t}`);
                            const i = S.featureFlags.isEnabled(w.FeatureFlags.Developer, "Production" !== d.environment);
                            if (this.setState({
                                isDevPanel: i,
                                platformInfo: t,
                                connectionHub: n
                            }),
                            !t) {
                                throw r.authAttempts() >= r.MAX_AUTH_ATTEMPTS ? new s.AuthenticationFatalError("Failed to connect to the codespace.") : new s.AuthenticationError("Refreshing Authentication Session")
                            }
                        }
                        )).catch(this.componentDidCatch))
                    }
                    componentDidUpdate() {
                        const {trace: e, authService: t} = this.props
                          , {codespaceState: n, previousCodespaceState: o, error: r} = this.state;
                        this.recordAppState(),
                        (0,
                        p.sideEffects)({
                            queryParams: {
                                isAutoStart: (0,
                                f.getQueryParamFlag)(h.CodespacesQueryParams.AutoStart, !0),
                                isAutoAuthRedirect: (0,
                                f.getQueryParamFlag)(h.CodespacesQueryParams.AutoAuthRedirect, !0)
                            },
                            trace: e.createChild("side-effects"),
                            codespaceState: n,
                            previousCodespaceState: o,
                            defaultCodespaceState: this.defaultCodespaceState,
                            redirectToLogin: t.redirectToLogin,
                            reloadWindow: ()=>{
                                location.reload()
                            }
                            ,
                            startCodespace: this.startCodespace,
                            dropServiceWorkerConnection: v.dropServiceWorkerConnection,
                            error: r
                        }).catch(this.componentDidCatch)
                    }
                    render() {
                        const {trace: e} = this.props
                          , {isDevPanel: t, codespaceState: r, previousCodespaceState: i, connectionHub: s} = this.state;
                        if ((0,
                        T.isIncompatibleBrowserVersion)())
                            return n.createElement(_.SplashScreenMessage, {
                                message: T.unsupportedBrowserVersionMessage
                            });
                        this.recordAppState(),
                        e.verbose(`render: "${r}", previous: "${i}"`);
                        const a = (0,
                        o.default)("cs-workbench-page", {
                            "is-dev-panel": t
                        });
                        return n.createElement("div", {
                            className: a
                        }, n.createElement(P.MaybeDevPanel, Object.assign({}, this.props, {
                            className: "cs-workbench-page__dev-panel",
                            connectionHub: s,
                            platformInfo: this.state.platformInfo,
                            isDevPanel: t
                        })), n.createElement("div", {
                            className: (0,
                            o.default)("cs-workbench-page__body")
                        }, n.createElement(b.WorkbenchLoader, Object.assign({}, this.props, this.state, {
                            trace: e.createChild("workbench-page"),
                            connectionHub: s,
                            onError: this.componentDidCatch,
                            getCodespaceInfo: this.getCodespaceInfo,
                            waitUntilCodespaceAvailable: this.waitUntilCodespaceAvailable,
                            updateCodespaceState: this.updateCodespaceState,
                            featureFlags: S.featureFlags
                        }))))
                    }
                }
                t.CodespacesComponent = x
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        45421: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50162), n(95456), n(27593), n(13350), n(88137)],
            r = function(e, t, n, o, r, s, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.sideEffects = void 0;
                t.sideEffects = e=>i(void 0, void 0, void 0, (function*() {
                    const {queryParams: t, codespaceState: i, previousCodespaceState: c, redirectToLogin: d, startCodespace: l, trace: u, error: p, defaultCodespaceState: h, dropServiceWorkerConnection: f, reloadWindow: v} = e;
                    if (u.verbose(`check: "${i}"/"${c}"`),
                    p instanceof r.AuthenticationError) {
                        if (!t.isAutoAuthRedirect || p instanceof r.AuthenticationFatalError)
                            return;
                        return c === n.CodespaceStateInfo.Available ? void u.verbose("auto redirecting to login") : (u.verbose("auto redirecting to login"),
                        yield d())
                    }
                    if (i === n.CodespaceStateInfo.Shutdown) {
                        if (!t.isAutoStart)
                            return;
                        if (c !== h)
                            return;
                        return u.verbose("autostarting the codespace"),
                        yield l()
                    }
                    if (i === n.CodespaceStateInfo.Rebuilding) {
                        a.featureFlags.isEnabled(s.FeatureFlags.UseBasisForConnections) && !a.featureFlags.isEnabled(s.FeatureFlags.DevTunnelsOptOutMainConnection) || (u.verbose('fire "disconnect current" message'),
                        f());
                        const e = [n.CodespaceStateInfo.Available, o.CodespaceWorkspaceState.Connected];
                        if (c && e.includes(c))
                            return u.verbose("codespace started rebuilding, need to reload the window"),
                            v()
                    }
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        45329: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27378), n(11627), n(98698), n(50162), n(29951), n(47035), n(180), n(481), n(14675), n(7094), n(36096), n(43024), n(16746), n(48160), n(51377), n(53286), n(67720), n(88137), n(13350), n(18598)],
            r = function(e, t, n, o, r, i, s, d, l, u, p, h, f, v, m, g, y, b, C, S, w) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.WorkbenchLoader = void 0,
                n = a(n);
                t.WorkbenchLoader = e=>{
                    var t, a, T, _, E;
                    const {codespaceState: P, performance: k, telemetry: I, trace: O} = e;
                    O.verbose(`render state: "${P}"`);
                    const x = "sessionType";
                    let M;
                    P === i.CodespaceStateInfo.Provisioning && I.addContextProperty(x, "create"),
                    P === i.CodespaceStateInfo.Starting && I.addContextProperty(x, "resume");
                    const j = t=>c(void 0, void 0, void 0, (function*() {
                        (0,
                        o.assertDefined)(e.platformInfo, "No `platformInfo` found."),
                        (0,
                        o.assertDefined)(t, "No `codespaceInfo` found.");
                        const n = S.featureFlags.isEnabled(w.FeatureFlags.UseBasisForConnections) && !S.featureFlags.isEnabled(w.FeatureFlags.DevTunnelsOptOutMainConnection);
                        return M || (yield(0,
                        v.pollUntilCodespaceConnectionReady)(t, e.getCodespaceInfo, I, O, n),
                        M = yield(0,
                        m.getVSCodeConnectionOptions)(t, e.platformInfo, e.config),
                        M = (0,
                        b.getWorkspaceSessionInfo)(M, t)),
                        M
                    }
                    ));
                    e.codespaceInfo && e.platformInfo && j(e.codespaceInfo).then((()=>{
                        try {
                            S.featureFlags.isEnabled(w.FeatureFlags.UseBasisForConnections) ? (O.info("initialize service worker Dev Tunnel connection"),
                            (0,
                            o.assertDefined)(e.codespaceInfo, "No `codespaceInfo` found."),
                            (0,
                            y.postServiceWorkerMessage)({
                                type: g.configureDevTunnelConnectionMessageType,
                                payload: {
                                    codespaceInfo: e.codespaceInfo
                                }
                            })) : (O.info("initialize service worker Live Share connection"),
                            (0,
                            y.postServiceWorkerMessage)({
                                type: g.connectToLiveShareMessageType,
                                payload: M
                            }))
                        } catch (e) {
                            O.error("request for service worker connection failed", e)
                        }
                    }
                    )).catch((e=>O.verbose(`failed getting early connection options, will retry later. ${e}`)));
                    let A = null;
                    !S.featureFlags.isEnabled(w.FeatureFlags.UseEarlyWorkbenchWebClient) && (0,
                    l.isSplashScreen)(e) && (A = n.createElement(p.SplashScreenState, Object.assign({}, e, {
                        trace: O.createChild("splash-screen")
                    }))),
                    O.verbose(`render splash screen: ${!!A}`);
                    let R = null;
                    if ((0,
                    u.isWorkbench)(e))
                        if (e.telemetry.addContextProperty("mounting-with-connection-info", !!(null === (t = e.codespaceInfo) || void 0 === t ? void 0 : t.connection)),
                        e.telemetry.addContextProperty("mounting-with-tunnel-properties", !!(null === (T = null === (a = e.codespaceInfo) || void 0 === a ? void 0 : a.connection) || void 0 === T ? void 0 : T.tunnelProperties)),
                        (0,
                        C.initializeDevTunnelProvider)(O, e.telemetry, e.codespaceInfo),
                        e.editor === r.IEditorType.jupyter)
                            R = n.createElement(f.JupyterWorkbench, Object.assign({}, e, {
                                trace: O.createChild("jupyter-workbench"),
                                tunnelProvider: (0,
                                C.getDevTunnelProvider)()
                            }));
                        else
                            I.addContextProperty("is-prebuild", !!(null === (_ = e.codespaceInfo) || void 0 === _ ? void 0 : _.prebuild)),
                            I.addContextProperty("has-devcontainer", !!(null === (E = e.codespaceInfo) || void 0 === E ? void 0 : E.devcontainer_path)),
                            R = n.createElement(h.CodespacesWorkbench, Object.assign({}, e, {
                                getConnectionOptions: j,
                                domElementId: d.WORKBENCH_REACT_ROOT_ELEMENT_ID,
                                performance: k.createGroup("workbench", s.PerformanceGroupIds.WorkbenchComponent),
                                trace: O.createChild("workbench")
                            }));
                    return O.verbose(`render workbench: ${!!R}`),
                    n.createElement(n.Fragment, null, A, R)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        96516: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042), n(57999), n(90023), n(81328), n(19876), n(76186)],
            r = function(e, t, n, o, r, i, s, d) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanel = t.MaybeDevPanel = void 0,
                n = a(n),
                o = c(o);
                t.MaybeDevPanel = e=>{
                    const {isDevPanel: t} = e;
                    if (!t)
                        return null;
                    const {id: o="cs-dev-panel-ls-key"} = e;
                    return n.createElement(l, Object.assign({}, e, {
                        id: o
                    }))
                }
                ;
                class l extends r.DevPanelToggleComponent {
                    render() {
                        const {platformInfo: e, className: t, config: r, performance: a, connectionHub: c, trace: l} = this.props
                          , {isOn: u} = this.state
                          , p = r.environment
                          , h = u ? "⬆" : "⬇"
                          , f = u ? "collapse panel" : "expand panel"
                          , v = (0,
                        o.default)(`cs-dev-panel ${t}`, {
                            "is-hidden": !u
                        });
                        return n.createElement("div", {
                            className: v
                        }, n.createElement(i.DevPanelHeader, {
                            trace: l,
                            onClick: this.onToggle,
                            environment: p,
                            performance: a,
                            platformInfo: e,
                            connectionHub: c
                        }), n.createElement("div", {
                            className: "cs-dev-panel__body"
                        }, n.createElement(s.DevPanelSuspendSection, Object.assign({}, this.props)), n.createElement(d.DevPanelConnectSection, {
                            platformInfo: e
                        })), n.createElement("div", {
                            className: "cs-dev-panel__toggle-button",
                            onClick: this.onToggle,
                            title: f,
                            "aria-hidden": !0
                        }, h))
                    }
                }
                t.DevPanel = l
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        47311: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(27378), n(89010), n(29499), n(88137), n(13350)],
            r = function(e, t, o, r, i, s, c) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelConnectionType = t.DevPanelConnectionTypeSection = void 0,
                o = a(o);
                t.DevPanelConnectionTypeSection = e=>{
                    const {title: t, text: n, emoji: r} = e;
                    return o.createElement("div", {
                        title: t,
                        className: "cs-dev-panel-header__section cs-dev-panel-header__emoji cs-dev-panel-header__section--text"
                    }, r, " ", n)
                }
                ;
                const d = i.connectionMetricUtils.formatLatency.bind(i.connectionMetricUtils)
                  , l = i.connectionMetricUtils.formatBytes.bind(i.connectionMetricUtils);
                class u extends o.Component {
                    constructor(e, t) {
                        super(e),
                        this.state = t,
                        this.connectionMetrics = {
                            bytesIn: void 0,
                            bytesOut: void 0,
                            latency: {
                                current: void 0,
                                avg: void 0,
                                min: void 0,
                                max: void 0,
                                movingAvg: void 0
                            }
                        },
                        this.lastLatencyVals = [];
                        const {lsConnection: o, vsCodeConnectionHub: r, trace: i} = e;
                        o && this.updateConnectionType(o, i),
                        r && this.updateConnectionMetrics(r),
                        this.interval = n.g.setInterval((()=>this.setConnectionMetricsState()), 1e3)
                    }
                    componentWillUnmount() {
                        clearInterval(this.interval)
                    }
                    componentDidUpdate(e) {
                        const {lsConnection: t, vsCodeConnectionHub: n, trace: o} = this.props;
                        t && e.lsConnection !== t && this.updateConnectionType(t, o),
                        n && e.vsCodeConnectionHub !== n && this.updateConnectionMetrics(n)
                    }
                    updateConnectionType(e, t) {
                        switch (e.type) {
                        case r.TConnectionTypes.ServiceWorker:
                            t.verbose("Connected by ServiceWorker");
                            break;
                        case r.TConnectionTypes.MainThread:
                            t.verbose("Connected by Main thread");
                            break;
                        default:
                            throw Error("Invalid connection type")
                        }
                        this.setState({
                            connectionType: e.type
                        })
                    }
                    updateConnectionMetrics(e) {
                        e.onConnection((e=>{
                            var t;
                            null === (t = e.workspaceClient) || void 0 === t || t.onWorkspaceMetricsUpdated((e=>{
                                if (e.latency && e.latency.current && e.latency.average && e.latency.min && e.latency.max) {
                                    const t = this.updateLatestLatencyVals(e.latency.current);
                                    this.connectionMetrics.latency = {
                                        current: e.latency.current,
                                        avg: e.latency.average,
                                        min: e.latency.min,
                                        max: e.latency.max,
                                        movingAvg: t
                                    }
                                }
                                e.bytesIn && (this.connectionMetrics.bytesIn = e.bytesIn),
                                e.bytesOut && (this.connectionMetrics.bytesOut = e.bytesOut)
                            }
                            ))
                        }
                        ))
                    }
                    setConnectionMetricsState() {
                        this.setState({
                            connectionMetrics: Object.assign({}, this.connectionMetrics)
                        })
                    }
                    updateLatestLatencyVals(e) {
                        let t = this.lastLatencyVals.length;
                        const n = Date.now()
                          , o = n - 1e4;
                        for (this.lastLatencyVals.push({
                            latency: e,
                            timeStamp: n
                        }); t--; )
                            this.lastLatencyVals[t] && this.lastLatencyVals[t].timeStamp < o && this.lastLatencyVals.splice(t, 1);
                        return this.lastLatencyVals.reduce(((e,t)=>e + t.latency), 0) / this.lastLatencyVals.length
                    }
                    render() {
                        const {connectionMetrics: e} = this.state;
                        let n = "🔌"
                          , r = "Main Thread Connection.";
                        if (s.featureFlags.isEnabled(c.FeatureFlags.UseBasisForConnections) && !s.featureFlags.isEnabled(c.FeatureFlags.DevTunnelsOptOutMainConnection) && (n = `🐟 ${n}`,
                        r = `${r} (Dev Tunnels)`),
                        !e)
                            return o.createElement(t.DevPanelConnectionTypeSection, {
                                title: r,
                                emoji: n
                            });
                        const {latency: i, bytesIn: a, bytesOut: u} = e
                          , p = [`Latency: ${d(i.current)}`, `Average: ${d(i.avg)}`, `10-Second Average: ${d(i.movingAvg)}`, `Min: ${d(i.min)}`, `Max: ${d(i.max)}`, `Total bytes received/sent: ${l(a)} / ${l(u)}`];
                        let h = null != i.movingAvg ? `${d(i.movingAvg)}` : "";
                        return i.max && i.max > 500 && (h += ` (🔥 ${d(i.max)})`),
                        o.createElement(t.DevPanelConnectionTypeSection, {
                            title: `${r} ${p.join(",\n")}`,
                            text: h,
                            emoji: n
                        })
                    }
                }
                t.DevPanelConnectionType = u
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        90023: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(27378), n(75061), n(47311), n(47035), n(93497), n(18052)],
            r = function(e, t, n, o, r, i, s) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelHeader = void 0,
                n = a(n);
                const c = e=>{
                    switch (e) {
                    case i.LOADING_ENVIRONMENT_STAGE:
                        return "⌛";
                    case "local":
                        return "🧑‍💻";
                    case "Development":
                        return "🚧";
                    case "Staging":
                        return "🏗";
                    case "Production":
                        return "📣";
                    case "test":
                        return "🧪"
                    }
                }
                ;
                class d extends n.Component {
                    constructor(e, t) {
                        super(e, t),
                        this.isSubscribedToConnectionChange = !1,
                        this.state = {
                            connection: null
                        }
                    }
                    subscribeToConnectionChange(e) {
                        if (!e || this.isSubscribedToConnectionChange)
                            return;
                        const t = e.childHubs[0];
                        t ? (this.isSubscribedToConnectionChange = !0,
                        t.onConnection((e=>{
                            this.setState({
                                connection: e
                            })
                        }
                        ))) : this.props.trace.warning("no liveshare connection hub found")
                    }
                    render() {
                        const {environment: e, onClick: t, performance: i, connectionHub: a, trace: d} = this.props
                          , {connection: l} = this.state
                          , u = (e=>"Staging" === e ? "pre-production" : e)(e);
                        return this.subscribeToConnectionChange(a),
                        n.createElement("div", {
                            className: "cs-dev-panel-header cs-dev-panel__header",
                            onMouseUp: t,
                            "aria-hidden": !0
                        }, n.createElement(o.DevPanelHeaderEmoji, {
                            emoji: c(e),
                            title: `env: ${u}`
                        }), n.createElement(r.DevPanelConnectionType, {
                            lsConnection: l,
                            vsCodeConnectionHub: a,
                            trace: d
                        }), n.createElement(s.DevPanelHeaderPerformance, {
                            performance: i
                        }))
                    }
                }
                t.DevPanelHeader = d
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        75061: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelHeaderEmoji = void 0,
                n = i(n),
                o = i(o);
                t.DevPanelHeaderEmoji = e=>{
                    const {title: t, emoji: r, isCorner: i} = e
                      , s = (0,
                    o.default)({
                        "is-corner": i
                    });
                    return n.default.createElement("span", {
                        title: t,
                        className: `cs-dev-panel-header__section cs-dev-panel-header__emoji ${s}`
                    }, r)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        93497: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(27378), n(11627), n(29951), n(39018)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelHeaderPerformance = void 0,
                n = a(n);
                t.DevPanelHeaderPerformance = e=>{
                    const {performance: t} = e
                      , s = t.getBlockMeasure(r.PerformanceGroupIds.Start);
                    (0,
                    o.assertDefined)(s, "No `start` performance block found.");
                    const {measure: a} = s
                      , {startTime: c} = a;
                    return n.createElement("span", {
                        className: "cs-dev-panel-header__section"
                    }, n.createElement(i.PerformanceSection, {
                        title: "time to javascript",
                        text: `🎨 ${(c / 1e3).toFixed(2)}s`
                    }), n.createElement(i.PerformanceBlock, {
                        emoji: "🔧",
                        performance: t,
                        title: "vscode server startup time (server port forwarding)",
                        startEvent: {
                            id: r.PerformanceEventIds.VSCodeServerStartupServerStart,
                            type: "start"
                        },
                        endEvent: {
                            id: r.PerformanceEventIds.VSCodeServerStartupServerTcpPortForwarding,
                            type: "end"
                        },
                        groupId: r.PerformanceGroupIds.VSCodeServerStartup
                    }), n.createElement(i.PerformanceBlock, {
                        emoji: "📡",
                        performance: t,
                        title: "pure connection time (from vscode requested connection to connected)",
                        startEvent: {
                            id: r.PerformanceEventIds.PureWorkbenchConnectionTime,
                            type: "start"
                        },
                        endEvent: {
                            id: r.PerformanceEventIds.PureWorkbenchConnectionTime,
                            type: "end"
                        },
                        groupId: r.PerformanceGroupIds.PureWorkbenchConnectionTimeGroup
                    }), n.createElement(i.PerformanceBlock, {
                        emoji: "🛰️",
                        performance: t,
                        title: "total connection time (from vscode workbench created to all websockets connected)",
                        startEvent: {
                            id: r.PerformanceEventIds.TotalWorkbenchConnectionTime,
                            type: "start"
                        },
                        endEvent: {
                            id: r.PerformanceEventIds.TotalWorkbenchConnectionTime,
                            type: "end"
                        },
                        groupId: r.PerformanceGroupIds.WebSocketFactoriesConnection
                    }), n.createElement(i.PerformanceBlock, {
                        emoji: "📖",
                        performance: t,
                        isFullTime: !0,
                        title: "total time to editors (from page load to be able to edit)",
                        startEvent: {
                            id: r.PerformanceEventIds.PureWorkbenchConnectionTime,
                            type: "start"
                        },
                        endEvent: {
                            id: r.PerformanceEventIds.TotalWorkbenchConnectionTime,
                            type: "end"
                        },
                        groupId: r.PerformanceGroupIds.WorkbenchComponent
                    }), n.createElement(i.PerformanceBlock, {
                        emoji: "🧩",
                        performance: t,
                        isFullTime: !0,
                        title: "total time to extensions (from page load to GHCS extension available)",
                        startEvent: {
                            id: r.PerformanceEventIds.PureWorkbenchConnectionTime,
                            type: "start"
                        },
                        endEvent: {
                            id: r.PerformanceEventIds.InitTimeToRemoteExtensions,
                            type: "end"
                        },
                        groupId: r.PerformanceGroupIds.Start
                    }))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        39018: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042), n(71082), n(11627), n(21271)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.PerformanceBlock = t.PerformanceSection = void 0,
                n = a(n),
                o = c(o);
                t.PerformanceSection = e=>{
                    const {title: t, text: o, children: r, className: i=""} = e
                      , s = `cs-dev-panel-header__section cs-dev-panel-header__emoji ${i}`;
                    return n.createElement("div", {
                        className: s,
                        title: t
                    }, n.createElement("div", {
                        style: {
                            float: "left"
                        }
                    }, o), r)
                }
                ;
                class s extends n.Component {
                    constructor(e, t={}) {
                        super(e),
                        this.state = t,
                        this.getText = ()=>{
                            const {emoji: e, isFullTime: t} = this.props
                              , {startTime: n, endTime: o} = this.state;
                            if (!n)
                                return "";
                            if (void 0 === o)
                                return "⌛";
                            return `${e} ${((t ? o : o - n) / 1e3).toFixed(2)}s`
                        }
                        ,
                        this.getTitle = ()=>{
                            const {title: e, isFullTime: t} = this.props
                              , {startTime: n, endTime: o} = this.state;
                            if (void 0 === n || void 0 === o)
                                return e;
                            const r = t ? 0 : n;
                            return `${e} [${Math.round(r)} - ${Math.round(o)}]`
                        }
                        ,
                        this.logWaterfall = ()=>{
                            const {groupId: e, performance: t} = this.props
                              , n = t.getBlockMeasure(e);
                            n ? (0,
                            r.logPerformanceWaterfall)(n) : console.error(`No "${e}" waterfall found.`)
                        }
                        ;
                        const {performance: n, startEvent: o, endEvent: s} = e;
                        n.onEvent(o, (({measure: e})=>{
                            this.setState({
                                startTime: e.startTime
                            })
                        }
                        )),
                        n.onEvent(s, (({measure: e})=>{
                            const {duration: t} = e
                              , o = n.main.getBlockStartTime(s.id);
                            (0,
                            i.assertDefined)(o, "No startTime found."),
                            this.setState({
                                endTime: o + t
                            })
                        }
                        ))
                    }
                    render() {
                        const {startTime: e, endTime: r} = this.state;
                        if (void 0 === e)
                            return null;
                        const i = (0,
                        o.default)("cs-dev-panel-header-perf-block", {
                            "is-ready": void 0 !== r
                        });
                        return n.createElement(t.PerformanceSection, {
                            className: i,
                            title: this.getTitle(),
                            text: this.getText()
                        }, n.createElement("div", {
                            className: "cs-dev-panel-header-perf-block__controls"
                        }, n.createElement("button", {
                            onClick: this.logWaterfall,
                            className: "cs-dev-panel__input cs-dev-panel__input--button cs-dev-panel-header-perf-block__console-button",
                            title: "log time breakdown to console"
                        }, "..")))
                    }
                }
                t.PerformanceBlock = s
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        50248: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042), n(57999), n(49047)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelSection = void 0,
                n = a(n),
                o = c(o);
                class i extends r.DevPanelToggleComponent {
                    render() {
                        const {title: e, children: t} = this.props
                          , {isOn: r} = this.state
                          , i = (0,
                        o.default)("cs-dev-panel-section", {
                            "is-open": r
                        });
                        return n.createElement("div", {
                            className: i
                        }, n.createElement("div", {
                            className: "cs-dev-panel-section__title",
                            onClick: this.onToggle,
                            "aria-hidden": !0
                        }, e), n.createElement("div", {
                            className: "cs-dev-panel-section__body"
                        }, t))
                    }
                }
                t.DevPanelSection = i
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        38252: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.devPanelLocalStorage = void 0;
                const n = "cs-dev-panel-section-states";
                t.devPanelLocalStorage = new class {
                    constructor() {
                        this.getData = ()=>{
                            try {
                                const e = localStorage.getItem(n) || "{}";
                                return JSON.parse(e)
                            } catch (e) {
                                return {}
                            }
                        }
                        ,
                        this.saveData = e=>{
                            try {
                                localStorage.setItem(n, JSON.stringify(e))
                            } catch (e) {
                                localStorage.setItem(n, "{}")
                            }
                        }
                        ,
                        this.getItem = e=>this.getData()[e],
                        this.setItem = (e,t)=>{
                            const n = this.getData();
                            return n[e] = t,
                            this.saveData(n),
                            this
                        }
                        ,
                        this.deleteItem = e=>{
                            const t = this.getData();
                            delete t[e],
                            this.saveData(t)
                        }
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        81328: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27378), n(50248)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelSuspendSection = void 0,
                n = a(n);
                class r extends n.Component {
                    constructor(e) {
                        super(e),
                        this.onSuspendCodespace = ()=>c(this, void 0, void 0, (function*() {
                            const {platformInfo: e, codespacesAPI: t, authService: n} = this.props;
                            if (!e || !("codespaceToken"in e))
                                return null;
                            if (n) {
                                const e = yield null == n ? void 0 : n.getCachedGithubToken()
                                  , o = yield t.getCodespaceInfo(e);
                                yield t.suspendCodespace(o, e)
                            }
                        }
                        )),
                        this.getCodespaceState = ()=>{
                            const {codespaceState: e, archiveStateCheckCount: t} = this.state;
                            if ("" === e)
                                return "";
                            let o = "Codespace State: " + e;
                            return n.createElement("div", null, n.createElement("span", null, o), " ", n.createElement("span", null, "(Remaining retries: ", t, ")"))
                        }
                        ,
                        this.state = {
                            codespaceState: "",
                            archiveStateCheckCount: 0
                        }
                    }
                    render() {
                        const {platformInfo: e} = this.props;
                        return e ? n.createElement(o.DevPanelSection, {
                            id: "dev-panel-suspend--section",
                            title: "Codespace Commands"
                        }, n.createElement("button", {
                            className: "cs-dev-panel__input cs-dev-panel__input--button one",
                            onClick: this.onSuspendCodespace
                        }, "😴  Stop"), this.getCodespaceState()) : null
                    }
                }
                t.DevPanelSuspendSection = r
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        57999: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(27378), n(38252)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelToggleComponent = void 0,
                n = a(n);
                class r extends n.Component {
                    constructor(e) {
                        super(e),
                        this.onToggle = e=>{
                            const {id: t, isAccountForChildEvents: n} = this.props
                              , {isOn: r} = this.state;
                            if (!n && e.currentTarget !== e.target)
                                return;
                            const i = !r;
                            o.devPanelLocalStorage.setItem(t, i),
                            this.onChange(i),
                            this.setState({
                                isOn: i
                            })
                        }
                        ;
                        const {isOnByDefault: t, id: n} = e;
                        let r = o.devPanelLocalStorage.getItem(n);
                        t && null == r && (r = "true");
                        const i = "true" == `${r}`;
                        this.onChange(i),
                        this.state = {
                            isOn: i
                        }
                    }
                    onChange(e) {}
                }
                t.DevPanelToggleComponent = r
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        19876: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(27378), n(50248)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DevPanelConnectSection = void 0,
                n = a(n);
                const r = "/";
                class i extends n.Component {
                    constructor(e) {
                        super(e),
                        this.onEndpointChange = e=>{
                            const {value: t=r} = e.target;
                            this.setState({
                                endpoint: t.trim()
                            })
                        }
                        ,
                        this.onTargetChanged = ()=>{
                            this.setState({
                                isNewTab: !this.state.isNewTab
                            })
                        }
                        ,
                        this.state = {
                            endpoint: r,
                            isNewTab: !0
                        }
                    }
                    render() {
                        const {platformInfo: e} = this.props;
                        if (!e || !("codespaceToken"in e))
                            return null;
                        const {codespaceToken: t} = e
                          , {isNewTab: i, endpoint: s} = this.state
                          , a = i ? "_blank" : void 0;
                        return n.createElement(o.DevPanelSection, {
                            id: "dev-panel-connect-section",
                            title: "Connect to Codespace"
                        }, n.createElement("form", {
                            action: s || r,
                            method: "POST",
                            target: a
                        }, n.createElement("p", null, n.createElement("label", {
                            htmlFor: "codespace-connection"
                        }, "Connection endpoint:")), n.createElement("input", {
                            type: "text",
                            className: "cs-dev-panel__input",
                            name: "codespace-connection",
                            placeholder: "Codespace endpoint",
                            onChange: this.onEndpointChange,
                            value: this.state.endpoint
                        }), n.createElement("p", null, n.createElement("input", {
                            id: "codespace-connection-new-tab",
                            type: "checkbox",
                            className: "cs-dev-panel__input",
                            onChange: this.onTargetChanged,
                            checked: i
                        }), n.createElement("label", {
                            htmlFor: "codespace-connection-new-tab"
                        }, "new tab"), " "), n.createElement("input", {
                            type: "text",
                            name: "cascadeToken",
                            defaultValue: t,
                            hidden: !0
                        }), n.createElement("input", {
                            type: "text",
                            name: "partnerInfo",
                            defaultValue: JSON.stringify(e),
                            hidden: !0
                        }), n.createElement("p", {
                            className: "cs-dev-panel-section__footer"
                        }, n.createElement("input", {
                            className: "cs-dev-panel__input cs-dev-panel__input--button",
                            type: "submit",
                            value: "Submit"
                        }))))
                    }
                }
                t.DevPanelConnectSection = i
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        47448: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(27378)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ButtonLink = void 0,
                n = a(n);
                t.ButtonLink = e=>{
                    const {className: t="", text: o, onClick: r} = e
                      , [i,s] = n.useState(!1);
                    if (!r)
                        throw new Error("Either `url` or `onClick` properties should be set.");
                    const a = `button-link ${t}`.trim()
                      , c = ()=>{
                        s(!0),
                        r()
                    }
                    ;
                    return i ? n.createElement("progress", {
                        className: "circular-progress"
                    }) : n.createElement("button", {
                        className: a,
                        onClick: c
                    }, o)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        75082: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(60042), n(27378), n(47035), n(96791), n(78543)],
            r = function(e, t, n, o, r, s, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreen = void 0,
                n = i(n),
                o = i(o);
                t.SplashScreen = e=>{
                    const t = o.default.useMemo((()=>r.tipEntries[Math.floor(4 * Math.random())]), []);
                    return o.default.createElement("div", {
                        className: "cs-splash-screen"
                    }, o.default.createElement("div", {
                        className: "container"
                    }, o.default.createElement(a.SplashScreenTerminalPane, null, " ", e.children, " "), o.default.createElement("div", {
                        className: "bottom-hint"
                    }, o.default.createElement("div", {
                        className: "learn-more"
                    }, o.default.createElement(s.SplashScreenIcon, {
                        type: "learn-more"
                    }), o.default.createElement("h4", {
                        className: (0,
                        n.default)("f4", "color-text-warning", "text-normal")
                    }, "Tip"), o.default.createElement("h4", {
                        id: "tip-entry-text",
                        className: (0,
                        n.default)("f4", "color-text-primary", "text-normal")
                    }, null == t ? void 0 : t.text), o.default.createElement("a", {
                        id: "tip-entry-link",
                        className: (0,
                        n.default)("f4", "Link"),
                        href: null == t ? void 0 : t.url,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, "Learn more")))))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        83460: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(89010), n(27378), n(98698), n(27593), n(76545), n(9010), n(34545), n(47448), n(96791)],
            r = function(e, t, n, o, r, i, s, d, l, u, p) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenGenericErrorMessage = void 0,
                o = a(o);
                t.SplashScreenGenericErrorMessage = e=>{
                    var t;
                    const a = o.createElement("a", {
                        href: "https://www.githubstatus.com/"
                    }, "check if Codespaces is having any issues")
                      , h = ()=>c(void 0, void 0, void 0, (function*() {
                        const {platformInfo: t, codespacesAPI: n, authService: o} = e;
                        if (!t || !("codespaceToken"in t))
                            return null;
                        if (o) {
                            const e = yield o.getCachedGithubToken()
                              , t = yield n.getCodespaceInfo(e);
                            yield n.suspendCodespace(t, e),
                            (0,
                            l.setQueryParamFlag)(s.CodespacesQueryParams.AutoStart, !0)
                        }
                    }
                    ))
                      , f = e.error instanceof i.NetworkError ? void 0 : o.createElement(o.Fragment, null, o.createElement("h5", null, "If this error persists,", " ", e.error instanceof n.ConnectionError || e.error instanceof i.AuthenticationFatalError ? o.createElement("a", {
                        href: "https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-your-connection-to-github-codespaces#browser-cannot-connect"
                    }, "try our troubleshooting guide") : o.createElement("a", {
                        href: "https://aka.ms/codespaces-support"
                    }, "contact support"), " or ", a, "."));
                    return o.createElement("div", {
                        className: "single-terminal cs-splash-screen pt-8 px-4"
                    }, o.createElement("div", {
                        className: "container"
                    }, o.createElement(p.SplashScreenIcon, {
                        type: "static-screen-icon"
                    }), o.createElement("div", {
                        className: "static-screen-message"
                    }, o.createElement("h4", null, e.error instanceof n.ConnectionError ? "Oh no, we were unable to connect to your codespace!" : e.error instanceof i.ThrottlingApiError ? "We are having trouble fetching your codespace information!" : e.error instanceof i.JupyterError ? "We were unable to connect to your codespace in JupyterLab!" : e.error instanceof i.AuthenticationFatalError ? "We were unable to authenticate your connection!" : e.error instanceof i.NetworkError ? "Oh no, it looks like you are offline!" : "Oh no, something unexpected went wrong!"), o.createElement("div", {
                        className: "restart-details"
                    }, (()=>{
                        var t, n, r;
                        if (e.error instanceof i.JupyterError)
                            return o.createElement("h5", {
                                className: "jupyter-fix-title"
                            }, "Please ensure JupyterLab is installed on the container. See our", " ", o.createElement("a", {
                                href: "https://docs.github.com/codespaces/troubleshooting/troubleshooting-your-connection-to-github-codespaces#unable-to-connect-to-your-codespace-in-jupyterlab",
                                target: "_blank"
                            }, "troubleshooting documentation"), " ", "for additional help, including JupyterLab installation instructions.");
                        let s = "Restarting your codespace may fix this error.";
                        return "Failed to connect to relay url Code: 1006 Reason: " === (null === (t = e.error) || void 0 === t ? void 0 : t.message) && (s = "Refreshing your window may fix this error."),
                        (null === (r = null === (n = e.error) || void 0 === n ? void 0 : n.message) || void 0 === r ? void 0 : r.startsWith("Request failed with status code 40")) && (s = "Clearing your cookies and restarting your codespace may fix this error."),
                        e.error instanceof i.ThrottlingApiError && (s = "Try waiting a couple minutes and refreshing."),
                        e.error instanceof i.AuthenticationFatalError && (s = "Try reloading the window."),
                        e.error instanceof i.NetworkError ? o.createElement("h5", null, "Make sure you are connected to the internet and try again. ", o.createElement("br", null), "If you verified that your connection is fine, your firewall might be blocking the connection. Please refer to", " ", o.createElement("a", {
                            href: "https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-your-connection-to-github-codespaces#browser-cannot-connect",
                            target: "_blank"
                        }, "this troubleshooting guide"), " ", "to diagnose the issue.", o.createElement("br", null)) : o.createElement("h5", null, s)
                    }
                    )(), e.error instanceof i.NetworkError, f), o.createElement("div", {
                        className: "action-buttons d-flex mx-auto text-center"
                    }, (()=>{
                        var t;
                        let n = o.createElement(u.ButtonLink, {
                            text: "Restart and reconnect to codespace",
                            onClick: h
                        });
                        if (("Failed to connect to relay url Code: 1006 Reason: " === (null === (t = e.error) || void 0 === t ? void 0 : t.message) || e.error instanceof i.ThrottlingApiError || e.error instanceof i.AuthenticationFatalError || e.error instanceof i.NetworkError) && (n = o.createElement(u.ButtonLink, {
                            text: "Retry connecting to the codespace",
                            onClick: ()=>location.reload()
                        })),
                        e.error instanceof i.AuthenticationFatalError) {
                            const t = (0,
                            d.codespaceStateToButton)(e.codespaceState, e.authService.localStorageId, e.error);
                            t && (n = o.createElement(u.ButtonLink, {
                                text: t.text,
                                onClick: t.onClick
                            }))
                        }
                        return n
                    }
                    )(), (()=>{
                        let t, n = "Open in ";
                        return e.editor !== r.IEditorType.jupyter ? null : (n += "Visual Studio Code",
                        t = r.IEditorType.vscode,
                        o.createElement(u.ButtonLink, {
                            text: n,
                            onClick: ()=>{
                                (e=>{
                                    e === r.IEditorType.jupyter ? (0,
                                    l.setQueryParamFlag)(s.CodespacesQueryParams.Editor, r.IEditorType.jupyter) : (0,
                                    l.deleteQueryParamFlag)(s.CodespacesQueryParams.Editor)
                                }
                                )(t)
                            }
                        }))
                    }
                    )()), o.createElement("div", {
                        className: "error-details"
                    }, o.createElement("h5", null, "Error details:"), o.createElement("h6", null, (null === (t = e.error) || void 0 === t ? void 0 : t.message) + (()=>{
                        var t, n, o;
                        return "Failed to connect to relay url Code: 1006 Reason: " === (null === (t = e.error) || void 0 === t ? void 0 : t.message) ? "(connection rejected by browser)" : (null === (o = null === (n = e.error) || void 0 === n ? void 0 : n.message) || void 0 === o ? void 0 : o.startsWith("Request failed with status code 40")) ? "(authentication error)" : ""
                    }
                    )() || "Error.")))))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        96791: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(27378), n(31944)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenIcon = void 0,
                n = a(n);
                t.SplashScreenIcon = e=>{
                    const {type: t} = e;
                    switch (t) {
                    case "static-screen-icon":
                        return n.createElement("svg", {
                            width: "96",
                            height: "96",
                            viewBox: "0 0 96 96",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, n.createElement("path", {
                            clipRule: "evenodd",
                            fillRule: "evenodd",
                            fill: "var(--color-icon-tertiary)",
                            d: "M 48 0 C 21.48 0 0 21.48 0 48 c 0 21.24 13.74 39.18 32.82 45.54 c 2.4 0.42 3.3 -1.02 3.3 -2.28 c 0 -1.14 -0.06 -4.92 -0.06 -8.94 c -12.06 2.22 -15.18 -2.94 -16.14 -5.64 c -0.54 -1.38 -2.88 -5.64 -4.92 -6.78 c -1.68 -0.9 -4.08 -3.12 -0.06 -3.18 c 3.78 -0.06 6.48 3.48 7.38 4.92 c 4.32 7.26 11.22 5.22 13.98 3.96 c 0.42 -3.12 1.68 -5.22 3.06 -6.42 c -10.68 -1.2 -21.84 -5.34 -21.84 -23.7 c 0 -5.22 1.86 -9.54 4.92 -12.9 c -0.48 -1.2 -2.16 -6.12 0.48 -12.72 c 0 0 4.02 -1.26 13.2 4.92 c 3.84 -1.08 7.92 -1.62 12 -1.62 c 4.08 0 8.16 0.54 12 1.62 c 9.18 -6.24 13.2 -4.92 13.2 -4.92 c 2.64 6.6 0.96 11.52 0.48 12.72 c 3.06 3.36 4.92 7.62 4.92 12.9 c 0 18.42 -11.22 22.5 -21.9 23.7 c 1.74 1.5 3.24 4.38 3.24 8.88 c 0 6.42 -0.06 11.58 -0.06 13.2 c 0 1.26 0.9 2.76 3.3 2.28 A 48.078 48.078 90 0 0 96 48 c 0 -26.52 -21.48 -48 -48 -48 z"
                        }));
                    case "learn-more":
                        return n.createElement("svg", {
                            className: "icon",
                            width: "12",
                            height: "16",
                            viewBox: "0 0 12 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, n.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6 1.5C3.637 1.5 2 3.19 2 5.25C2 6.234 2.424 6.875 2.984 7.554L3.198 7.807C3.421 8.071 3.668 8.363 3.871 8.655C4.155 9.066 4.408 9.551 4.492 10.145C4.51202 10.338 4.45649 10.5312 4.33707 10.6841C4.21766 10.837 4.04365 10.9376 3.85158 10.9649C3.65951 10.9922 3.46434 10.9441 3.30704 10.8305C3.14974 10.717 3.04256 10.5469 3.008 10.356C2.968 10.074 2.845 9.809 2.638 9.509C2.46879 9.27344 2.2879 9.04649 2.096 8.829C2.012 8.729 1.923 8.624 1.828 8.509C1.201 7.75 0.5 6.766 0.5 5.25C0.5 2.31 2.863 0 6 0C9.137 0 11.5 2.31 11.5 5.25C11.5 6.766 10.799 7.75 10.172 8.509C10.077 8.624 9.988 8.729 9.904 8.828C9.697 9.073 9.521 9.281 9.363 9.509C9.155 9.809 9.033 10.074 8.993 10.356C8.97908 10.4535 8.94609 10.5473 8.89592 10.6321C8.84574 10.7168 8.77936 10.7909 8.70057 10.85C8.62178 10.9091 8.53212 10.9521 8.43671 10.9765C8.3413 11.001 8.24201 11.0064 8.1445 10.9925C8.04699 10.9786 7.95318 10.9456 7.86843 10.8954C7.78367 10.8452 7.70962 10.7789 7.65052 10.7001C7.59142 10.6213 7.54841 10.5316 7.52396 10.4362C7.4995 10.3408 7.49408 10.2415 7.508 10.144C7.592 9.551 7.845 9.066 8.129 8.655C8.332 8.363 8.579 8.071 8.802 7.807C8.877 7.719 8.949 7.634 9.015 7.554C9.576 6.875 10 6.234 10 5.25C10 3.19 8.363 1.5 6 1.5ZM4 15.25C4 15.0511 4.07902 14.8603 4.21967 14.7197C4.36032 14.579 4.55109 14.5 4.75 14.5H7.25C7.44891 14.5 7.63968 14.579 7.78033 14.7197C7.92098 14.8603 8 15.0511 8 15.25C8 15.4489 7.92098 15.6397 7.78033 15.7803C7.63968 15.921 7.44891 16 7.25 16H4.75C4.55109 16 4.36032 15.921 4.21967 15.7803C4.07902 15.6397 4 15.4489 4 15.25ZM3.75 12C3.55109 12 3.36032 12.079 3.21967 12.2197C3.07902 12.3603 3 12.5511 3 12.75C3 12.9489 3.07902 13.1397 3.21967 13.2803C3.36032 13.421 3.55109 13.5 3.75 13.5H8.25C8.44891 13.5 8.63968 13.421 8.78033 13.2803C8.92098 13.1397 9 12.9489 9 12.75C9 12.5511 8.92098 12.3603 8.78033 12.2197C8.63968 12.079 8.44891 12 8.25 12H3.75Z",
                            fill: "#DBAB09"
                        }));
                    default:
                        return n.createElement(n.Fragment, null)
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        26725: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042), n(47448), n(96791)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenMessage = t.MaybeButton = void 0,
                n = a(n),
                o = c(o);
                t.MaybeButton = e=>e.button ? n.createElement(r.ButtonLink, {
                    text: e.button.text,
                    onClick: e.button.onClick
                }) : null;
                t.SplashScreenMessage = e=>{
                    const r = (0,
                    o.default)("cs-splash-screen", "pt-8");
                    return n.createElement("div", {
                        className: r
                    }, n.createElement("div", {
                        className: "container"
                    }, n.createElement(i.SplashScreenIcon, {
                        type: "static-screen-icon"
                    }), n.createElement("div", {
                        className: "static-screen-message"
                    }, n.createElement("h4", null, e.message), n.createElement(t.MaybeButton, Object.assign({}, e)))))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        11350: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(47226), n(75082), n(49219)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenShell = void 0,
                n = a(n),
                i = c(i);
                t.SplashScreenShell = e=>{
                    const t = n.useMemo((()=>new o.SplashScreenConnectionAdapter), [])
                      , {codespace: s, codespaceState: a, communicationAdapter: c, onError: d} = e;
                    return n.createElement(r.SplashScreen, {
                        codespace: s,
                        onError: d
                    }, n.createElement(i.default, {
                        connection: t,
                        codespaceState: a,
                        communicationAdapter: c
                    }))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        14675: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(11627), n(11627), n(95456), n(34545), n(50162), n(76545), n(27593), n(26725), n(11350), n(83460), n(20932), n(9010), n(47226), n(81883), n(84992), n(72995), n(19266), n(43024), n(98259), n(67720), n(88137), n(13350)],
            r = function(e, t, n, o, r, s, a, c, d, l, u, p, h, f, v, m, g, y, b, C, S, w, T, _, E) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenState = void 0,
                n = i(n);
                t.SplashScreenState = e=>{
                    var t;
                    const {codespaceState: i, previousCodespaceState: P, error: k, trace: I, telemetry: O, codespaceInfo: x, getCodespaceInfo: M, performance: j, onError: A, authService: R} = e
                      , D = n.default.useMemo((()=>{
                        const e = new y.SplashScreenCommunicationProvider;
                        return {
                            communicationAdapter: new g.SplashScreenCommunicationAdapter(I.createChild("communication-adapter"),j,e,(0,
                            r.randomString)(),O),
                            connectionAdapter: new m.SplashScreenConnectionAdapter
                        }
                    }
                    ), []);
                    switch (O.addContextProperty("last-splash-screen-state", i),
                    O.sendTelemetry([C.CodespacesTelemetryEventNames.WebSplashScreenStateTransition, {
                        currentState: i,
                        previousState: P,
                        error: k
                    }]),
                    i) {
                    case s.CodespaceWorkspaceState.Error:
                        if (k instanceof l.AuthenticationFatalError)
                            I.warning("failed after multiple auth, lock auto auth redirect"),
                            (0,
                            a.setQueryParamFlag)(d.CodespacesQueryParams.AutoAuthRedirect, !1);
                        else if (k instanceof l.AuthenticationError)
                            return D.communicationAdapter.showConnecting(),
                            n.default.createElement(p.SplashScreenShell, {
                                codespace: void 0,
                                codespaceState: i,
                                communicationAdapter: D.communicationAdapter,
                                onError: A
                            });
                        break;
                    case c.CodespaceStateInfo.ShuttingDown:
                        if (P === c.CodespaceStateInfo.Available) {
                            I.warning("shutting down after available state, lock auto start");
                            const e = (0,
                            a.getQueryParamFlag)(d.CodespacesQueryParams.AutoStart);
                            (0,
                            a.setQueryParamFlag)(d.CodespacesQueryParams.AutoStart, !!e)
                        }
                        break;
                    case c.CodespaceStateInfo.Shutdown:
                        (0,
                        a.getQueryParamFlag)(d.CodespacesQueryParams.AutoStart) && (0,
                        a.deleteQueryParamFlag)(d.CodespacesQueryParams.AutoStart);
                        break;
                    case c.CodespaceStateInfo.Created:
                    case c.CodespaceStateInfo.Awaiting:
                    case c.CodespaceStateInfo.Starting:
                        return D.communicationAdapter.showStarting(),
                        n.default.createElement(p.SplashScreenShell, {
                            codespace: null != x ? x : void 0,
                            codespaceState: i,
                            communicationAdapter: D.communicationAdapter,
                            onError: A
                        });
                    case c.CodespaceStateInfo.Failed:
                    case c.CodespaceStateInfo.Rebuilding:
                    case c.CodespaceStateInfo.Provisioning:
                    case c.CodespaceStateInfo.Available:
                        if ((0,
                        o.assertDefined)(x, "No `codespaceInfo` found."),
                        D.communicationAdapter.showConnecting(),
                        i !== c.CodespaceStateInfo.Available) {
                            let n;
                            const o = _.featureFlags.isEnabled(E.FeatureFlags.UseBasisForConnections) && !_.featureFlags.isEnabled(E.FeatureFlags.DevTunnelsOptOutMainConnection);
                            o || (n = null !== (t = e.connectionHub) && void 0 !== t ? t : (0,
                            w.initConnectionHub)(I, j, R, O, x)),
                            (0,
                            S.pollUntilCodespaceConnectionReady)(x, M, O, I, o).then((t=>{
                                (0,
                                T.initializeDevTunnelProvider)(I, e.telemetry, t),
                                (0,
                                b.connectSplashScreen)(D.communicationAdapter, t, i, n)
                            }
                            )).catch((e=>{
                                I.warning("cannot create splash screen connection", e)
                            }
                            )),
                            I.verbose("rendering creation logs")
                        }
                        return n.default.createElement(p.SplashScreenShell, {
                            codespace: x,
                            codespaceState: i,
                            communicationAdapter: D.communicationAdapter,
                            onError: A
                        });
                    case c.CodespaceStateInfo.Queued:
                    case s.CodespaceWorkspaceState.Unknown:
                        return D.communicationAdapter.showConnecting(),
                        n.default.createElement(p.SplashScreenShell, {
                            codespace: void 0,
                            codespaceState: i,
                            communicationAdapter: D.communicationAdapter,
                            onError: A
                        })
                    }
                    return k ? n.default.createElement(h.SplashScreenGenericErrorMessage, Object.assign({}, e)) : n.default.createElement(u.SplashScreenMessage, {
                        message: (0,
                        f.codespaceStateToMessage)(i, k),
                        button: (0,
                        v.codespaceStateToButton)(i, R.localStorageId, k, e.codespaceStateWatcher)
                    })
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        78543: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenTerminalPane = void 0,
                n = i(n);
                t.SplashScreenTerminalPane = e=>n.default.createElement("div", {
                    className: "terminal-pane"
                }, e.children)
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        49219: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042), n(94997), n(72758), n(69841), n(50162), n(88116)],
            r = function(e, t, n, o, r, s, a, c) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenWithTerminals = t.XTerminal = void 0,
                n = i(n),
                o = i(o);
                class d extends n.default.Component {
                    render() {
                        return n.default.createElement(n.default.Fragment, null, n.default.createElement("div", {
                            className: (0,
                            o.default)(this.props.className, "terminal-container")
                        }, n.default.createElement("div", {
                            id: `js-xterm-${this.props.id}`,
                            className: "codespaces-terminal"
                        })))
                    }
                }
                t.XTerminal = d;
                class l {
                    constructor(e, t) {
                        this.xterm = e,
                        this.communicationAdapter = t,
                        this.viewLogsStr = "View logs",
                        this.hideLogsStr = "Hide logs",
                        this.troubleShootingGuide = "Check troubleshooting guide."
                    }
                    provideLinks(e, t) {
                        t(this.getLink(e))
                    }
                    getLink(e) {
                        const t = e - 1
                          , n = this.xterm.buffer.active.getLine(t);
                        if (!n)
                            return [];
                        const o = n.translateToString(!0);
                        if (o.includes(this.viewLogsStr) || o.includes(this.hideLogsStr)) {
                            const t = o.indexOf(this.viewLogsStr)
                              , n = o.indexOf(this.hideLogsStr);
                            return [{
                                range: {
                                    start: {
                                        x: t < 0 ? n + 1 : t + 1,
                                        y: e - 2
                                    },
                                    end: {
                                        x: o.length + 5,
                                        y: e
                                    }
                                },
                                text: o,
                                activate: ()=>{
                                    this.communicationAdapter.viewLogs()
                                }
                                ,
                                decorations: {
                                    underline: !1,
                                    pointerCursor: !0
                                }
                            }]
                        }
                        if (o.includes(this.troubleShootingGuide)) {
                            return [{
                                range: {
                                    start: {
                                        x: o.indexOf(this.troubleShootingGuide) + 1,
                                        y: e - 2
                                    },
                                    end: {
                                        x: o.length + 5,
                                        y: e
                                    }
                                },
                                text: o,
                                activate: ()=>{
                                    window.open("https://aka.ms/codespaces-troubleshooting", "_blank")
                                }
                                ,
                                decorations: {
                                    underline: !1,
                                    pointerCursor: !0
                                }
                            }]
                        }
                        return []
                    }
                }
                class u extends n.default.Component {
                    constructor(e) {
                        super(e),
                        this.creationFailed = "Codespace creation failed",
                        this.settingUpCodespace = "Setting up your codespace",
                        this.terminalArray = [],
                        this.getTerminalOptions = ()=>{
                            const e = window.getComputedStyle(document.body)
                              , t = e.getPropertyValue("--vscode-terminal-background")
                              , n = e.getPropertyValue("--vscode-terminal-selectionBackground")
                              , o = e.getPropertyValue("--vscode-panel-background")
                              , r = e.getPropertyValue("--vscode-terminal-foreground")
                              , i = e.getPropertyValue("--vscode-terminalCursor-foreground")
                              , s = e.getPropertyValue("--vscode-editor-font-family")
                              , a = document.getElementsByClassName("container is-vs-codespaces").length > 0;
                            return {
                                theme: {
                                    background: t || o || (a ? "#181818" : "#FAFBFD"),
                                    foreground: r || (a ? "white" : "black"),
                                    cursor: i || r || (a ? "white" : "black"),
                                    selection: n
                                },
                                fontSize: 14,
                                fontFamily: s || "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace"
                            }
                        }
                        ,
                        this.onMessage = e=>{
                            if (e.data.terminal) {
                                const t = Number(e.data.terminal.id) - 1;
                                this.writeToTerminal(t, String(e.data.terminal.message))
                            } else
                                e.data.themeChange ? this.updateTerminalThemes() : e.data.failure && this.markFailure()
                        }
                        ,
                        this.sendLoadedCommand = ()=>{
                            this.props.connection.sendCommand("loaded")
                        }
                    }
                    initializeTerminal(e) {
                        const t = document.getElementById(`js-xterm-${e}`)
                          , n = this.terminalArray[e];
                        t && n && (n.isInitialized = !0,
                        n.terminal.open(t),
                        n.terminal.loadAddon(n.fitAddon),
                        n.terminal.loadAddon(n.searchAddon),
                        n.fitAddon.fit(),
                        n.hasWaitingText || (n.terminal.writeln("$ Waiting for output..."),
                        n.hasWaitingText = !0),
                        n.terminal.attachCustomKeyEventHandler((e=>e.ctrlKey && "c" === e.key.toLocaleLowerCase() ? (document.execCommand("copy"),
                        !1) : !e.ctrlKey || "f" !== e.key.toLocaleLowerCase() || (n.isSearching = !0,
                        this.forceUpdate(),
                        !1))))
                    }
                    writeToTerminal(e, t) {
                        let n = e;
                        n >= this.terminalArray.length && (n = this.terminalArray.length - 1);
                        const o = this.terminalArray[n];
                        o && !o.isVisible && (o.isVisible = !0),
                        this.forceUpdate((()=>{
                            o && !o.hasWaitingText && (o.terminal.writeln("$ Waiting for output..."),
                            o.hasWaitingText = !0),
                            null == o || o.terminal.write(t)
                        }
                        ))
                    }
                    updateTerminalThemes() {
                        const {theme: e, fontSize: t, fontFamily: n} = this.getTerminalOptions();
                        this.terminalArray.forEach((o=>{
                            o.terminal.setOption("theme", e),
                            o.terminal.setOption("fontSize", t),
                            o.terminal.setOption("fontFamily", n)
                        }
                        ))
                    }
                    markFailure() {
                        this.setState({
                            failure: !0
                        })
                    }
                    componentDidMount() {
                        this.props.connection.onMessage(this.onMessage),
                        this.sendLoadedCommand();
                        const e = new r.Terminal(this.getTerminalOptions())
                          , t = new r.Terminal(this.getTerminalOptions());
                        e.registerLinkProvider(new l(e,this.props.communicationAdapter)),
                        this.terminalArray.push({
                            stepName: "general",
                            terminal: e,
                            fitAddon: new s.FitAddon,
                            searchAddon: new a.SearchAddon,
                            isInitialized: !1,
                            hasWaitingText: !0,
                            isVisible: !1,
                            isSearching: !1
                        }),
                        this.terminalArray.push({
                            stepName: "general",
                            terminal: t,
                            fitAddon: new s.FitAddon,
                            searchAddon: new a.SearchAddon,
                            isInitialized: !1,
                            hasWaitingText: !0,
                            isVisible: !1,
                            isSearching: !1
                        }),
                        this.initializeTerminal(0),
                        this.initializeTerminal(1)
                    }
                    componentWillUnmount() {
                        window.removeEventListener("message", this.onMessage)
                    }
                    render() {
                        const {codespaceState: e} = this.props
                          , t = e === c.CodespaceStateInfo.Failed ? this.creationFailed : this.settingUpCodespace;
                        return n.default.createElement(n.default.Fragment, null, n.default.createElement("div", {
                            className: (0,
                            o.default)("main-title", "pt-8")
                        }, n.default.createElement("h4", null, t)), n.default.createElement("div", {
                            className: (0,
                            o.default)({
                                windows: window.navigator.platform.toLowerCase().includes("win")
                            }, "terminal-array")
                        }, n.default.createElement(d, {
                            id: 0,
                            className: "first"
                        }), n.default.createElement(d, {
                            id: 1,
                            className: "second"
                        })))
                    }
                }
                t.SplashScreenWithTerminals = u,
                t.default = u
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        80934: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(60042), n(96791), n(47448)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.AuthFailedMessage = void 0,
                n = a(n),
                o = c(o);
                t.AuthFailedMessage = e=>{
                    const t = (0,
                    o.default)("cs-splash-screen", "pt-8");
                    return n.createElement("div", {
                        className: t
                    }, n.createElement("div", {
                        className: "container"
                    }, n.createElement(r.SplashScreenIcon, {
                        type: "static-screen-icon"
                    }), n.createElement("div", {
                        className: "static-screen-message"
                    }, n.createElement("h4", null, e.message), n.createElement(i.ButtonLink, {
                        text: e.buttonText,
                        onClick: e.onClick
                    }))))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        13121: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27378), n(27378), n(68937), n(47035), n(71917), n(27593), n(98221), n(19266), n(88137), n(98099), n(26725), n(69199), n(80934), n(40688)],
            r = function(e, t, n, o, r, i, s, d, l, u, p, h, f, v, m, g) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.WebEditorComponent = void 0,
                n = a(n);
                class y extends n.Component {
                    constructor(e, t) {
                        super(e, t),
                        this.componentDidCatch = e=>c(this, void 0, void 0, (function*() {
                            const {telemetry: t} = this.props;
                            try {
                                const n = (0,
                                l.errorToObject)(e);
                                t.sendTelemetry([u.CodespacesTelemetryEventNames.WebEditorError, n])
                            } catch (e) {
                                const n = (0,
                                l.errorToObject)(e, !0);
                                t.sendTelemetry([u.CodespacesTelemetryEventNames.WebEditorError, n])
                            }
                            this.setState(Object.assign(Object.assign({}, this.state), {
                                error: e
                            }))
                        }
                        )),
                        this.state = {
                            vscodeChannel: null
                        }
                    }
                    componentDidMount() {
                        var e;
                        return c(this, void 0, void 0, (function*() {
                            const {error: t, authService: n, config: o} = this.props;
                            if (t)
                                return;
                            n.onEvent((e=>{
                                "signed-out" === e && this.setState({
                                    error: new d.AuthenticationError
                                })
                            }
                            )),
                            n.keepUserAuthenticated();
                            const [r] = yield Promise.all([n.getPartnerInfo(), o.fetch()]);
                            if (!r)
                                return yield n.signOut();
                            p.featureFlags.initialize(h.mainTrace, r.featureFlags);
                            const s = null !== (e = (0,
                            g.getFeatureSet)()) && void 0 !== e ? e : i.FeatureSet.Stable;
                            this.setState(Object.assign(Object.assign({}, this.state), {
                                vscodeChannel: s
                            }))
                        }
                        ))
                    }
                    componentDidUpdate() {
                        return c(this, void 0, void 0, (function*() {
                            try {
                                const {authService: e} = this.props
                                  , {error: t} = this.state;
                                if (t instanceof d.AuthenticationError) {
                                    if (t instanceof d.AuthenticationFatalError)
                                        return;
                                    return yield e.redirectToLogin()
                                }
                            } catch (e) {
                                this.componentDidCatch(e)
                            }
                        }
                        ))
                    }
                    render() {
                        const {error: e} = this.state;
                        if ((0,
                        v.isIncompatibleBrowserVersion)())
                            return n.createElement(f.SplashScreenMessage, {
                                message: v.unsupportedBrowserVersionMessage
                            });
                        if (e instanceof d.AuthenticationFatalError) {
                            const {authService: e} = this.props;
                            return n.createElement(m.AuthFailedMessage, {
                                message: i.AUTH_FAILED_SCREEN_MESSAGE,
                                buttonText: "Try again",
                                onClick: ()=>{
                                    localStorage.removeItem(e.localStorageId),
                                    location.reload()
                                }
                            })
                        }
                        const {vscodeChannel: t} = this.state;
                        return t ? n.createElement(r.BrowserRouter, null, n.createElement(r.Switch, null, n.createElement(r.Route, {
                            path: "/:owner/:repo/:rest*"
                        }, n.createElement(s.WebEditorWorkbench, Object.assign({}, this.props, {
                            vscodeChannel: t,
                            onError: this.componentDidCatch
                        }))), n.createElement(r.Route, {
                            path: "/:rest"
                        }, n.createElement(b, null)))) : null
                    }
                }
                t.WebEditorComponent = y;
                const b = ()=>{
                    const {rest: e} = (0,
                    r.useParams)();
                    return (0,
                    o.useEffect)((()=>{
                        window.location.href = `https://github.com/${e}`
                    }
                    ), [e]),
                    null
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        7094: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            , s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(27378), n(11627), n(47035), n(41249), n(27593), n(6017), n(13350)],
            r = function(e, t, n, o, r, a, c, d, l) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CodespacesWorkbench = void 0,
                n = s(n);
                class u extends n.default.Component {
                    shouldComponentUpdate() {
                        return !1
                    }
                    componentDidMount() {
                        return i(this, void 0, void 0, (function*() {
                            d.onbeforeunloadEventsManager.onEvent((()=>this.dispose()));
                            try {
                                const {platformInfo: e, connectionHub: t, domElementId: n, performance: r, trace: i, config: s, featureFlags: d} = this.props;
                                let {codespaceInfo: p} = this.props;
                                (0,
                                o.assertDefined)(e, "No `platformInfo` found."),
                                (0,
                                o.assertDefined)(p, "No `codespaceInfo` found.");
                                if (d.isEnabled(l.FeatureFlags.UseBasisForConnections) && !d.isEnabled(l.FeatureFlags.DevTunnelsOptOutMainConnection) || (0,
                                o.assertDefined)(t, "No `ConnectionHub` found."),
                                u.vscodeWorkbench)
                                    throw new c.WorkbenchMountedTwiceError("Preventing mounting workbench twice");
                                u.vscodeWorkbench = new a.VSCodeWorkbench(i.createChild(`${i.name}:vscode-workbench`),r,Object.assign(Object.assign({}, this.props), {
                                    domElementId: n,
                                    config: s,
                                    platformInfo: e,
                                    codespaceInfo: p,
                                    connectionHub: t,
                                    featureFlags: d
                                })),
                                u.vscodeWorkbench.mountWorkbench()
                            } catch (e) {
                                this.props.onError(e)
                            }
                        }
                        ))
                    }
                    render() {
                        return n.default.createElement(n.default.Fragment, null, n.default.createElement("div", {
                            id: r.WORKBENCH_REACT_ROOT_ELEMENT_ID,
                            className: "cs-workbench-root"
                        }), n.default.createElement("div", {
                            className: "vscode-workbench-root"
                        }))
                    }
                    componentWillUnmount() {
                        this.dispose()
                    }
                    dispose() {
                        var e;
                        null === (e = u.vscodeWorkbench) || void 0 === e || e.dispose(),
                        u.vscodeWorkbench = null
                    }
                }
                t.CodespacesWorkbench = u,
                u.vscodeWorkbench = null
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        36096: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            , s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(89010), n(11627), n(27378), n(88137), n(27593), n(19266), n(13350), n(95456), n(92098), n(53286), n(95009), n(57979)],
            r = function(e, t, n, o, r, a, c, d, l, u, p, h, f) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.JupyterWorkbench = void 0,
                r = s(r);
                class v extends r.default.Component {
                    constructor(e) {
                        super(e),
                        this.connectionRetries = 10,
                        this.retryDelay = 2 * o.TIME_SECOND_MS,
                        this.correlationId = (0,
                        o.randomString)(),
                        this.state = {
                            jupyterUrl: ""
                        }
                    }
                    componentDidMount() {
                        var e, t, r, s, v;
                        return i(this, void 0, void 0, (function*() {
                            const {codespaceInfo: m, config: g, connectionHub: y, telemetry: b, trace: C, getCodespaceInfo: S, updateCodespaceState: w} = this.props;
                            (0,
                            o.assertDefined)(m, "No `codespaceInfo` found.");
                            const T = Date.now();
                            b.sendTelemetry([d.CodespacesTelemetryEventNames.WebJupyterConnectionActionStart, {
                                correlationId: this.correlationId
                            }]);
                            try {
                                let u, w, _, E;
                                if (!(a.featureFlags.isEnabled(l.FeatureFlags.UseBasisForConnections) && !a.featureFlags.isEnabled(l.FeatureFlags.DevTunnelsOptOutMainConnection))) {
                                    (0,
                                    o.assertDefined)(y, "No `ConnectionHub` found.");
                                    const [e] = y.childHubs;
                                    w = e,
                                    (0,
                                    o.assertDefined)(w, "No LiveShare ConnectionHub found."),
                                    _ = {
                                        workspaceId: m.connection.sessionId,
                                        token: m.connection.sessionToken,
                                        liveShareEndpoint: m.connection.serviceUri
                                    },
                                    _ = (0,
                                    h.getWorkspaceSessionInfo)(_),
                                    E = yield w.connect(_, {
                                        retries: this.connectionRetries,
                                        retryDelay: this.retryDelay,
                                        shouldReconnect: !1
                                    }),
                                    E.onDispose((()=>i(this, void 0, void 0, (function*() {
                                        try {
                                            yield S()
                                        } catch (e) {
                                            this.props.onError(new c.JupyterError("Connection was disposed."))
                                        }
                                    }
                                    )))),
                                    u = E.getRpcService(n.jupyterServerHostRPCService)
                                }
                                const P = yield(0,
                                p.getRpcClient)(C, b, w, _)
                                  , k = yield P.getJupyterServerAsync(null !== (e = null == u ? void 0 : u.getRunningServerAsync) && void 0 !== e ? e : ()=>{}
                                , u, C)
                                  , I = {
                                    result: (null === (t = k.getResult) || void 0 === t ? void 0 : t.call(k)) || k.result,
                                    message: (null === (r = k.getMessage) || void 0 === r ? void 0 : r.call(k)) || k.message,
                                    port: (null === (s = k.getPort) || void 0 === s ? void 0 : s.call(k)) || k.port,
                                    serverUrl: (null === (v = k.getServerurl) || void 0 === v ? void 0 : v.call(k)) || k.serverUrl
                                };
                                if (!I.result)
                                    throw new c.JupyterError("Unable to start server.");
                                const O = parseInt(I.port, 10);
                                if (isNaN(O))
                                    throw new c.JupyterError("Not a valid port");
                                C.info(`Jupyter server running on port ${O}`);
                                const x = "?token=" + I.serverUrl.substring(I.serverUrl.indexOf("=") + 1)
                                  , M = `https://${m.name}-${O}`
                                  , j = `${g.portForwardingDomainTemplate.replace("{0}", M)}/lab`;
                                yield this.props.tunnelProvider.forwardPort(O, void 0, void 0, [f.TPortType.Internal]),
                                this.setState({
                                    jupyterUrl: `${j}/${x}`
                                }),
                                b.sendTelemetry([d.CodespacesTelemetryEventNames.WebJupyterConnectionActionStop, {
                                    correlationId: this.correlationId,
                                    duration: Date.now() - T,
                                    result: d.TelemetryResultTypes.Success
                                }])
                            } catch (e) {
                                b.sendTelemetry([d.CodespacesTelemetryEventNames.WebJupyterConnectionActionStop, {
                                    correlationId: this.correlationId,
                                    duration: Date.now() - T,
                                    error: e,
                                    result: d.TelemetryResultTypes.Failure
                                }]),
                                this.props.onError(new c.JupyterError("Failed to load the JupyterLab workbench: " + e.message))
                            }
                            w(m.state, u.CodespaceWorkspaceState.Connected)
                        }
                        ))
                    }
                    render() {
                        return this.state.jupyterUrl ? r.default.createElement("iframe", {
                            title: "JupyterLab notebook",
                            className: "jupyter-workbench",
                            src: this.state.jupyterUrl
                        }) : null
                    }
                }
                t.JupyterWorkbench = v
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        87452: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(27378), n(30397), n(77082), n(6017), n(31330), n(1877), n(96077)],
            r = function(e, t, n, o, r, i, s, d, l) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ServerlessWorkbench = void 0,
                o = a(o);
                class u extends o.Component {
                    constructor() {
                        super(...arguments),
                        this.workbenchMounted = !1,
                        this.workbenchRef = null
                    }
                    componentDidMount() {
                        const {onError: e=(()=>{}
                        )} = this.props;
                        this.mountWorkbench().catch(e)
                    }
                    mountWorkbench() {
                        var e;
                        return c(this, void 0, void 0, (function*() {
                            if (this.workbenchMounted)
                                return;
                            n.env.getUriScheme().then((()=>{
                                var e, t;
                                null === (e = document.getElementById("js-primer-css")) || void 0 === e || e.remove(),
                                null === (t = document.getElementById("js-splash-screen-css")) || void 0 === t || t.remove()
                            }
                            )),
                            this.workbenchMounted = !0;
                            const {getWorkbenchConfig: t} = this.props
                              , o = t && (yield t())
                              , a = Object.assign({
                                workspaceProvider: null !== (e = null == o ? void 0 : o.workspaceProvider) && void 0 !== e ? e : new i.ServerlessWorkspaceProvider(this.props.uri,this.props.targetURLFactory),
                                urlCallbackProvider: new l.UrlCallbackProvider
                            }, o);
                            (0,
                            n.create)(this.workbenchRef, a),
                            this.props.openUri && (null == o ? void 0 : o.type) === d.GitHubURLType.Folder && n.env.openUri(n.URI.from(Object.assign({
                                scheme: yield n.env.getUriScheme()
                            }, this.props.openUri))).catch((e=>{
                                this.props.trace.error("Error opening file", e)
                            }
                            )),
                            s.onbeforeunloadEventsManager.onEvent((()=>c(this, void 0, void 0, (function*() {
                                yield(0,
                                r.sendVSCodeCommand)(r.CodespacesVSCodeCommands.Dispose)
                            }
                            ))))
                        }
                        ))
                    }
                    render() {
                        return o.default.createElement("div", {
                            className: "vsonline-serverless-workbench"
                        }, o.default.createElement("div", {
                            id: "serverless-workbench",
                            style: {
                                height: "100%"
                            },
                            ref: e=>this.workbenchRef = e
                        }))
                    }
                }
                t.ServerlessWorkbench = u
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        41249: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(11627), n(29951), n(27593), n(77306), n(47035), n(22988), n(52104), n(20718), n(31541), n(51377), n(48160), n(50162), n(98221), n(19266), n(23866), n(76545), n(34545), n(11792), n(49630), n(44605), n(41840), n(21714), n(13350), n(92098), n(69030), n(20523), n(52588)],
            r = function(e, t, n, o, r, i, s, d, l, u, p, h, f, v, m, g, y, b, C, S, w, T, _, E, P, k, I, O, x, M) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.VSCodeWorkbench = void 0,
                n = a(n);
                class j extends o.DisposableClass {
                    constructor(e, t, a) {
                        super(e),
                        this.performance = t,
                        this.options = a,
                        this.mountingTwiceErrorMessage = "Unable to create the VSCode workbench more than once",
                        this.connectionErrorType = "ConnectionError",
                        this.workbenchId = "js-vscode-workbench-placeholder",
                        this.dispose = ()=>{
                            super.dispose(),
                            this.options.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.VSCodeWorkbenchDisposed, {}])
                        }
                        ,
                        this.initializeObserver = ()=>{
                            this.workbenchMountObserver = new MutationObserver((e=>{
                                e.forEach((e=>{
                                    const t = e.target;
                                    (null == t ? void 0 : t.id) === this.workbenchId ? (this.performance.main.markBlockEnd({
                                        id: r.PerformanceEventIds.VSCodeCreateToVSCodeLoaded,
                                        name: "vscode create to vscode loaded"
                                    }, !0),
                                    this.performance.main.markBlockStart({
                                        id: r.PerformanceEventIds.VSCodeLoadedToEditors,
                                        name: "vscode loaded to editors"
                                    }, !0),
                                    this.trace.verbose("vscode workbench loaded"),
                                    this.removeSplashScreen()) : e.removedNodes.length > 0 && e.removedNodes.forEach((e=>{
                                        e.id === this.workbenchId && (this.trace.verbose("vscode workbench removed"),
                                        this.addSplashScreen())
                                    }
                                    ))
                                }
                                ))
                            }
                            ));
                            const e = document.querySelector(".cs-workbench-page__body");
                            e && this.workbenchMountObserver.observe(e, {
                                subtree: !0,
                                childList: !0
                            })
                        }
                        ,
                        this.mountWorkbench = ()=>{
                            const e = (0,
                            w.v4)()
                              , {telemetry: t} = this.options
                              , n = {
                                mountCorrelationId: e
                            };
                            t.sendTelemetry([y.CodespacesTelemetryEventNames.WebMountWorkbenchActionStart, n]),
                            this.mount().then((()=>{
                                t.sendTelemetry([y.CodespacesTelemetryEventNames.WebMountWorkbenchActionStop, n])
                            }
                            )).catch((e=>{
                                e instanceof i.SshChannelError ? this.trace.warning("ssh channel error during the vscode workbench mounting") : (e.message.includes(this.mountingTwiceErrorMessage) && (e = new i.WorkbenchMountedTwiceError(e.message)),
                                t.sendTelemetry([y.CodespacesTelemetryEventNames.WebMountWorkbenchActionStop, Object.assign(Object.assign({}, n), (0,
                                g.errorToObject)(e))]),
                                e.message = `VSCodeWorkbench mount failed with "${e.message}"`,
                                this.options.onError(e))
                            }
                            ))
                        }
                        ,
                        this.mount = ()=>c(this, void 0, void 0, (function*() {
                            const {domElementId: e, getConnectionOptions: t, codespaceInfo: a, getCodespaceInfo: h, platformInfo: m, onError: g, connectionHub: y, authService: w, config: T, telemetry: I, waitUntilCodespaceAvailable: x, featureFlags: M} = this.options;
                            (0,
                            o.assertDefined)(a, "No CodespaceInfo found.");
                            const j = this.getVSCodeWorkbenchElement(e)
                              , A = M.isEnabled(k.FeatureFlags.UseBasisForConnections) && !M.isEnabled(k.FeatureFlags.DevTunnelsOptOutMainConnection);
                            let R = 0
                              , D = null;
                            const L = yield this.performance.measure({
                                name: "get providers"
                            }, (()=>c(this, void 0, void 0, (function*() {
                                return yield(0,
                                u.getProviders)(this.trace.createChild("providers"), I, y, t, a, m, w, x, this.performance, h, this)()
                            }
                            ))));
                            let F;
                            A && (F = yield O.StreamManager.getStreamManager(this.trace, L.tunnelProvider, I),
                            this.addToDisposables(F.onVSCodeConnectionDetailsChanged((e=>{
                                (0,
                                f.postServiceWorkerMessage)({
                                    type: v.setVSCodeServerPortMessageType,
                                    payload: {
                                        port: e.port
                                    }
                                })
                            }
                            ))));
                            const N = {
                                create: e=>{
                                    const n = "web socket factory #" + R++;
                                    let a;
                                    1 === R && (this.performance.main.markBlockStart({
                                        id: r.PerformanceEventIds.PureWorkbenchConnectionTime,
                                        name: "pure workbench connection time"
                                    }, !0),
                                    this.performance.main.markBlockStart({
                                        id: r.PerformanceEventIds.TotalWorkbenchConnectionTime,
                                        name: "full workbench connection time"
                                    }, !0),
                                    a = r.PerformanceGroupIds.PureWorkbenchConnectionTimeGroup),
                                    this.trace.info(`creating new WebSocket #${R}, url: ${e}`),
                                    D || (D = this.performance.createGroup("websocket-connection", r.PerformanceGroupIds.WebSocketFactoriesConnection));
                                    const c = new l.WebSocketFactory(this.trace.createChild("" + (A ? `dev-tunnel-web-socket-${R}` : `web-socket-${R}`)),D.createGroup(n, a),y,e,t,(0,
                                    o.randomString)(),h,I,T,(e=>{
                                        this.trace.verbose(`web socket ${e} is connected`),
                                        e > 0 && (this.trace.verbose("notifying connected state"),
                                        g(new s.ConnectedError("connected")),
                                        L.tunnelProvider.revivePorts())
                                    }
                                    ),void 0,void 0,F);
                                    return this.addToDisposables(c.onError((e=>{
                                        e instanceof s.DisconnectedError || e instanceof i.OutdatedCodespaceStateError ? this.options.onError(e) : (e.message = `WebSocket factory error: ${e.message}`,
                                        this.options.onError(e.message))
                                    }
                                    ))),
                                    c
                                }
                            }
                              , W = (0,
                            S.getQueryParamFlag)(C.CodespacesQueryParams.EditSessionId, void 0)
                              , B = (0,
                            P.getVSCodeVersion)(T.vscodeVersionInfo, M.isEnabled(k.FeatureFlags.Developer))
                              , U = {
                                embedderIdentifier: d.CODESPACES_EMBEDDER_NAME,
                                licenseUrl: d.LICENSE_URL,
                                privacyStatementUrl: d.PRIVACY_STATEMENT_URL,
                                documentationUrl: d.DOCUMENTATION_URL,
                                showTelemetryOptOut: !1
                            }
                              , H = Object.assign(Object.assign({
                                remoteAuthority: (0,
                                p.getUriAuthority)(a),
                                webSocketFactory: N,
                                connectionToken: this.getConnectionTokenWithProgress(F),
                                productQualityChangeHandler: (0,
                                b.productQualityChangeProviderFactory)(this.trace, w)
                            }, L), {
                                productConfiguration: U,
                                additionalTrustedDomains: d.TRUSTED_DOMAINS,
                                enabledExtensions: d.ENABLED_EXTENSIONS,
                                webviewEndpoint: `https://{{uuid}}.${new URL((0,
                                E.getFastlyUrl)(T.environment)).hostname}/${B.quality}/${B.commit}/out/vs/workbench/contrib/webview/browser/pre/`,
                                editSessionId: W,
                                developmentOptions: {
                                    logLevel: (0,
                                    _.getLogLevel)()
                                }
                            });
                            this.trace.verbose(`Creating workbench on #${e}`),
                            this.addToDisposables(this.createVSCodeWorkbench(j, H)),
                            this.performance.main.markBlockStart({
                                id: r.PerformanceEventIds.VSCodeCreateToVSCodeLoaded,
                                name: "vscode create to vscode loaded"
                            }, !0),
                            this.performance.main.markBlockEnd({
                                id: r.PerformanceEventIds.ReactInitToVSCodeCreate,
                                name: "react init to vscode.create"
                            }, !0),
                            n.commands.executeCommand("github.codespaces.activate")
                        }
                        )),
                        this.connect = (e,t,n,i,s)=>c(this, void 0, void 0, (function*() {
                            var a;
                            const d = (0,
                            o.randomString)(5);
                            let l, u = (null == s ? void 0 : s.billable_owner.type) == m.BillableOwnerType.Organization ? null == s ? void 0 : s.billable_owner.id : "";
                            n.addContextProperties({
                                "is-test-environment": null == s ? void 0 : s.test_account,
                                "organization-id": u.toString()
                            }),
                            n.sendTelemetry([y.CodespacesTelemetryEventNames.WebInitialConnectionActionStart, {
                                connectionId: d
                            }]);
                            try {
                                const [s] = e.childHubs;
                                (0,
                                o.assertDefined)(s, "No LiveShare ConnectionHub found."),
                                l = yield i.measure({
                                    id: r.PerformanceGroupIds.InitialConnection,
                                    name: "vscode connection"
                                }, (()=>c(this, void 0, void 0, (function*() {
                                    const o = yield(0,
                                    I.getRpcClient)(this.trace, n, s, t);
                                    return yield e.connect(t, {
                                        performance: i,
                                        trace: this.trace.createChild("vscode-connection"),
                                        retryDelay: 100,
                                        rpcClient: o
                                    })
                                }
                                ))));
                                const {liveshareConnection: a} = l;
                                (0,
                                o.assertDefined)(a, "No LiveShareConnection found.");
                                const {type: d} = a;
                                this.trace.info("connection type", d),
                                n.addContextProperties({
                                    connectionType: d
                                })
                            } catch (e) {
                                const t = yield(0,
                                h.ensureCodespaceIsAvailable)(this.options.getCodespaceInfo);
                                e = null !== (a = t.error) && void 0 !== a ? a : e;
                                const s = i.main.getBlockMeasure(r.PerformanceGroupIds.InitialConnection);
                                (0,
                                o.assertDefined)(s, `No measure found for the performance block "${r.PerformanceGroupIds.InitialConnection}"`);
                                const {measure: c} = s
                                  , l = (0,
                                x.addLatencyDetailsToEvent)({});
                                throw n.sendTelemetry([y.CodespacesTelemetryEventNames.WebInitialConnectionActionStop, Object.assign(Object.assign(Object.assign({}, (0,
                                g.errorToObject)(e)), l), {
                                    startTime: c.startTime,
                                    duration: c.duration,
                                    connectionId: d,
                                    errorType: null == e ? void 0 : e.errorType,
                                    codespaceState: t.state
                                })]),
                                e
                            }
                            const p = i.main.getBlockMeasure(r.PerformanceGroupIds.InitialConnection);
                            (0,
                            o.assertDefined)(p, `No measure found for the performance block "${r.PerformanceGroupIds.InitialConnection}"`);
                            const {liveshareConnection: b} = l;
                            (0,
                            o.assertDefined)(b, "VSCodeConnection does not contain LiveShareConnection.");
                            const {measure: C} = p;
                            n.sendTelemetry([y.CodespacesTelemetryEventNames.WebInitialConnectionActionStop, {
                                connectionId: d,
                                startTime: C.startTime,
                                duration: C.duration,
                                connectionType: b.type
                            }]);
                            try {
                                this.trace.verbose("initialize service worker VS Code connection"),
                                (0,
                                f.postServiceWorkerMessage)({
                                    type: v.connectToVSCodeMessageType,
                                    payload: t
                                })
                            } catch (e) {
                                this.trace.error("failed to send service worker message", e)
                            }
                            return l
                        }
                        )),
                        this.primerStyle = document.getElementById("js-primer-css") || void 0,
                        this.splashScreenStyle = document.getElementById("js-splash-screen-css") || void 0,
                        this.performance = this.performance.createGroup(e.name, r.PerformanceGroupIds.VSCodeInitialization),
                        this.initializeObserver(),
                        this.trace.verbose("initialized workbench")
                    }
                    getVSCodeWorkbenchElement(e) {
                        const t = document.querySelector(`#${e}`);
                        return (0,
                        o.assertDefined)(t, `No VSCode workbench root DOM element found (#${e}).`),
                        t
                    }
                    createVSCodeWorkbench(e, t) {
                        return n.create(e, t)
                    }
                    getConnectionTokenWithProgress(e) {
                        return c(this, void 0, void 0, (function*() {
                            return n.window.withProgress({
                                location: 15,
                                title: "Setting up remote connection"
                            }, (t=>c(this, void 0, void 0, (function*() {
                                var n;
                                try {
                                    const {codespaceInfo: r, waitUntilCodespaceAvailable: i, connectionHub: s, telemetry: a, getConnectionOptions: c} = this.options
                                      , d = new T.UserProgressReporter(t,r,this.trace)
                                      , l = this.performance.createGroup("bootstrap");
                                    (0,
                                    o.assertDefined)(r, "No `codespaceInfo` defined");
                                    const u = yield i(d);
                                    d.update(T.ProgressOptions.Connecting);
                                    const p = yield c(u);
                                    let m;
                                    if (e)
                                        try {
                                            const t = yield e.getVSCodeConnectionDetails(p);
                                            m = t.connectionToken,
                                            M.ResourceUriProvider.setVSCodeConnectionDetails(t.port, t.connectionToken),
                                            (0,
                                            f.postServiceWorkerMessage)({
                                                type: v.setVSCodeServerPortMessageType,
                                                payload: {
                                                    port: t.port
                                                }
                                            })
                                        } catch (e) {
                                            e = null !== (n = (yield(0,
                                            h.ensureCodespaceIsAvailable)(this.options.getCodespaceInfo)).error) && void 0 !== n ? n : e;
                                            const t = (0,
                                            g.errorToObject)(e);
                                            throw a.sendTelemetry([y.CodespacesTelemetryEventNames.GetConnectionTokenError, t]),
                                            e
                                        }
                                    else {
                                        (0,
                                        o.assertDefined)(s, "No `ConnectionHub` found.");
                                        m = (yield this.connect(s, p, a, l.createGroup("connection"), u)).connectionToken
                                    }
                                    return d.update(T.ProgressOptions.Done),
                                    m
                                } catch (e) {
                                    throw e.type === this.connectionErrorType && (/Network Error/.test(e.message) ? this.options.onError(new i.NetworkError(e)) : this.options.onError(e)),
                                    e
                                }
                            }
                            ))))
                        }
                        ))
                    }
                    addSplashScreen() {
                        this.splashScreenStyle && document.head.appendChild(this.splashScreenStyle),
                        this.primerStyle && document.head.appendChild(this.primerStyle)
                    }
                    removeSplashScreen() {
                        var e, t;
                        null === (e = this.splashScreenStyle) || void 0 === e || e.remove(),
                        null === (t = this.primerStyle) || void 0 === t || t.remove()
                    }
                }
                t.VSCodeWorkbench = j
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        71917: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            , s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(50777), n(27378), n(68937), n(27593), n(47035), n(90555), n(28652), n(87115), n(31330), n(87452), n(47123), n(19266), n(11792), n(60322), n(65127), n(85063), n(23866), n(13377), n(52458), n(29566), n(44625), n(88338)],
            r = function(e, t, n, o, r, a, c, d, l, u, p, h, f, v, m, g, y, b, C, S, w, T, _, E) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.WebEditorWorkbench = void 0,
                o = s(o);
                const P = (e,t,o,r)=>()=>i(void 0, void 0, void 0, (function*() {
                    try {
                        const {authService: s, trace: h} = e
                          , m = yield s.getPartnerInfo();
                        if (!m || !m.credentials[0])
                            return yield s.signOut(),
                            null;
                        const P = new f.SecretStorageProvider(h,s)
                          , [I,O,x] = yield Promise.all([(0,
                        g.getPartnerExtensions)(m), (0,
                        y.getHomeIndicator)(m), (0,
                        b.getDefaultSettings)(m)]);
                        let M = {
                            embedderIdentifier: c.EMBEDDER_NAME,
                            licenseUrl: c.LICENSE_URL,
                            privacyStatementUrl: c.PRIVACY_STATEMENT_URL,
                            documentationUrl: c.DOCUMENTATION_URL,
                            enableTelemetry: !1
                        };
                        const j = m.credentials[0].token
                          , A = yield function(e, t, n, o, r, s, c) {
                            var p;
                            return i(this, void 0, void 0, (function*() {
                                let i;
                                try {
                                    i = yield(0,
                                    l.getGitHubWorkspaceFromUrl)(t, new u.GithubRefRequest(e))
                                } catch (e) {
                                    return null === (p = null == s ? void 0 : s.telemetry) || void 0 === p || p.webEditorAction(v.CodespacesTelemetryEventNames.WebEditorActionStop, {
                                        result: v.TelemetryResultTypes.UserError,
                                        errorMessage: `User error of type ${e.errorType}`,
                                        errorDetail: e.errorCode
                                    }, c, null == s ? void 0 : s.config.environment),
                                    void (e instanceof a.GitHubNeedsAuthenticationError || e instanceof a.AuthenticationError ? yield n.signOut() : e instanceof a.GitHubRepoAccessError && (window.location.href = k(o)))
                                }
                                if (i) {
                                    const e = new URLSearchParams(location.search)
                                      , t = new d.WebEditorWorkspaceProvider(e,i,r);
                                    return Object.assign({
                                        provider: t
                                    }, i)
                                }
                            }
                            ))
                        }(j, t, s, o, h, e, r);
                        let R;
                        if ((null == A ? void 0 : A.type) === p.GitHubURLType.File && (null == A ? void 0 : A.path)) {
                            const e = A.provider.workspace;
                            R = (0,
                            w.getDefaultLayout)(o, e.folderUri, A.path, A.fragment)
                        }
                        let D = c.WEB_EDITOR_BUILT_IN_EXTENSIONS;
                        D.push({
                            id: c.REMOTE_HUB_EXTENSION_NAME,
                            preRelease: "insider" === e.vscodeChannel
                        });
                        const L = ()=>i(void 0, void 0, void 0, (function*() {
                            return yield s.redirectToLogin(m.managementPortalUrl)
                        }
                        ))
                          , F = {
                            enabled: (0,
                            _.isSettingsSyncEnabled)(m),
                            enablementHandler: (e,t)=>{
                                localStorage.setItem(E.TLocalStorageKey.SettingsSyncEnabled, `${e}`)
                            }
                            ,
                            authenticationProvider: (0,
                            T.getSettingsSyncAuthenticationProvider)(e.telemetry, L)
                        };
                        return {
                            additionalBuiltinExtensions: D.concat(I),
                            enabledExtensions: c.ENABLED_EXTENSIONS,
                            homeIndicator: O,
                            configurationDefaults: x,
                            secretStorageProvider: P,
                            productConfiguration: M,
                            workspaceProvider: null == A ? void 0 : A.provider,
                            additionalTrustedDomains: c.TRUSTED_DOMAINS,
                            commands: (0,
                            S.createWebEditorCommands)(r, e.config.environment, e.telemetry, null == A ? void 0 : A.refType),
                            productQualityChangeHandler: (0,
                            C.productQualityChangeProviderFactory)(h, s),
                            defaultLayout: R,
                            type: null == A ? void 0 : A.type,
                            repoInfo: o,
                            codeExchangeProxyEndpoints: {
                                microsoft: `${location.origin}/aad-code-grant-v2/`
                            },
                            _tarballProxyEndpoints: {
                                "github.com": c.GITHUB_TARBALL_PROXY_URL
                            },
                            resolveExternalUri: e=>i(void 0, void 0, void 0, (function*() {
                                if (A)
                                    return n.URI.parse(A.provider.resolveGithubFolderURI(e))
                            }
                            )),
                            settingsSyncOptions: F
                        }
                    } catch (t) {
                        e.onError(t);
                        let n = {
                            result: v.TelemetryResultTypes.Failure,
                            errorMessage: "Failure to configure workspace",
                            errorDetail: t instanceof Error ? t.name : void 0
                        };
                        throw t instanceof Error && (n.errorMessage = `Failure to configure workspace, error type ${t.message}`),
                        e.telemetry.webEditorAction(v.CodespacesTelemetryEventNames.WebEditorActionStop, n, r, e.config.environment),
                        t
                    }
                }
                ))
                  , k = e=>`https://github.com/${e.owner}/${e.repo}`;
                t.WebEditorWorkbench = function(e) {
                    const t = (0,
                    r.useParams)();
                    let n = `${location.pathname}${location.search}${location.hash}`;
                    n = n.endsWith("/") ? n.slice(0, n.length - 1) : n;
                    const i = (0,
                    m.v4)()
                      , s = P(e, n, t, i);
                    return e.telemetry.webEditorAction(v.CodespacesTelemetryEventNames.WebEditorActionStart, {}, i, e.config.environment),
                    o.default.createElement(h.ServerlessWorkbench, Object.assign({}, e, {
                        getWorkbenchConfig: s,
                        uri: "",
                        openUri: {
                            authority: c.REMOTE_HUB_EXTENSION_NAME,
                            path: "/open-files",
                            query: `url=${encodeURIComponent(`https://github.com${n}`)}`
                        }
                    }))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        60992: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(50777), n(11792), n(88137)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.Config = void 0,
                n = a(n);
                const i = {
                    portalConfig: {
                        environment: "local"
                    }
                };
                class s extends n.Disposable {
                    constructor(e, t, n, i, s, a) {
                        super(),
                        this.workbenchConfig = e,
                        this.requestId = t,
                        this.workbenchType = n,
                        this.trace = i,
                        this.serverCorrelationId = s,
                        this.fetchedSignal = null,
                        this.withAuthRequest = !!t,
                        this.requestId = t,
                        this.requestId || "editor" !== n || (this.requestId = (0,
                        o.v4)()),
                        a && r.featureFlags.initialize(this.trace, a)
                    }
                    get environment() {
                        return this.workbenchConfig.environment
                    }
                    get iKey() {
                        return this.workbenchConfig.iKey
                    }
                    fetch() {
                        return i
                    }
                    get portForwardingDomainTemplate() {
                        switch (this.environment) {
                        case "local":
                        case "Development":
                            return "{0}.app.dev.github.dev";
                        case "Staging":
                            return "{0}.app.ppe.github.dev";
                        default:
                            return "{0}.app.github.dev"
                        }
                    }
                    get portForwardingDomain() {
                        return "github.dev"
                    }
                    get vscodeVersionInfo() {
                        return this.workbenchConfig.vscodeVersionInfo
                    }
                    get version() {
                        return this.workbenchConfig.version
                    }
                    get serviceLocation() {
                        return this.workbenchConfig.serviceLocation
                    }
                    get serviceInstance() {
                        return this.workbenchConfig.serviceInstance
                    }
                }
                t.Config = s
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        88137: (e,t,n)=>{
            var o, r;
            o = [n, t, n(13350)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.featureFlags = t.FeatureFlagsAccessor = void 0;
                class o {
                    constructor(e) {
                        this.flagFallbacks = {
                            [n.FeatureFlags.ReducedCodespaceStatePollingInterval]: n.FeatureFlags.Developer
                        },
                        void 0 !== e && (this.flagFallbacks = e),
                        this.initPromise = new Promise((e=>{
                            this.initResolve = e
                        }
                        ))
                    }
                    initialize(e, t) {
                        t && (this.featureFlags && this.trace ? this.trace.verbose("Feature flags already initialized") : (this.featureFlags = t,
                        this.trace = e)),
                        this.initResolve()
                    }
                    isEnabled(e, t=!1) {
                        var n, o;
                        if (void 0 === this.featureFlags)
                            return null === (n = this.trace) || void 0 === n || n.verbose(`No featureFlags defined in partner info, falling back to the default "${t}".`),
                            t;
                        const r = this.flagFallbacks[e]
                          , i = r ? this.isEnabled(r, t) : t;
                        return null !== (o = this.featureFlags[e]) && void 0 !== o ? o : i
                    }
                    clearAll() {
                        this.featureFlags = void 0
                    }
                }
                t.FeatureFlagsAccessor = o,
                t.featureFlags = new o
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        2468: function(e, t, n) {
            var o, r, i = n(48764).lW, s = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            , a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(66959), n(11627), n(2065), n(27593), n(19266), n(47035), n(98221), n(96439)],
            r = function(e, t, o, r, c, d, l, u, p, h) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CodespacesInternalTransportFactory = void 0,
                c = a(c);
                const f = n(80798)
                  , v = "\r\n"
                  , [m,g] = Array.from((new TextEncoder).encode(v));
                t.CodespacesInternalTransportFactory = (e,t,n,o)=>r=>new y(r,e,t,n,o);
                class y {
                    constructor(e, t, n, o, r) {
                        this.options = e,
                        this.trace = t,
                        this.telemetry = n,
                        this.connection = o,
                        this.streamManager = r,
                        this.channelLockKey = "channelLock",
                        this.streamLockKey = "streamLock",
                        this.processingDataLockKey = "processingDataLock",
                        this.lock = new c.default,
                        this.requestFailed = !1
                    }
                    start(e) {
                        return s(this, void 0, void 0, (function*() {
                            this.trace.verbose(`Received request for ${this.options.methodDefinition.methodName} from client`),
                            this.metadata = e,
                            this.connection ? yield this.setupLiveShareTransport() : yield this.startDevTunnelsTransport()
                        }
                        ))
                    }
                    setupLiveShareTransport() {
                        return s(this, void 0, void 0, (function*() {
                            yield this.executeAndReleaseLock(this.channelLockKey, (()=>s(this, void 0, void 0, (function*() {
                                try {
                                    (0,
                                    r.assertDefined)(this.connection, "Cannot establish connection."),
                                    this.channel = yield this.connection.getGrpcWebChannel()
                                } catch (e) {
                                    const t = new d.CodespacesInternalTransportError(`Failed to get channel: ${e.message}`);
                                    return void this.handleEndRequest(t)
                                }
                                this.channel.onDataReceived((e=>s(this, void 0, void 0, (function*() {
                                    yield this.parseResponse(e)
                                }
                                )))),
                                this.channel.onClosed((e=>s(this, void 0, void 0, (function*() {
                                    yield this.handleEndRequest(e.error)
                                }
                                ))))
                            }
                            ))))
                        }
                        ))
                    }
                    startDevTunnelsTransport() {
                        return s(this, void 0, void 0, (function*() {
                            yield this.executeAndReleaseLock(this.streamLockKey, (()=>s(this, void 0, void 0, (function*() {
                                try {
                                    (0,
                                    r.assertDefined)(this.streamManager, "Stream manager is not defined"),
                                    this.stream = yield this.streamManager.getGRPCStream()
                                } catch (e) {
                                    let t;
                                    return t = e instanceof d.ConnectionError ? e : new d.CodespacesInternalTransportError(`Failed to get stream: ${e.message}`),
                                    void this.handleEndRequest(t)
                                }
                                this.stream.on("data", (e=>s(this, void 0, void 0, (function*() {
                                    yield this.parseResponse(e)
                                }
                                )))),
                                this.stream.on("end", (()=>s(this, void 0, void 0, (function*() {
                                    yield this.handleEndRequest()
                                }
                                )))),
                                this.stream.on("error", (e=>s(this, void 0, void 0, (function*() {
                                    yield this.handleEndRequest(e)
                                }
                                ))))
                            }
                            ))))
                        }
                        ))
                    }
                    parseResponse(e, t) {
                        return s(this, void 0, void 0, (function*() {
                            let n = i.from(e);
                            yield this.executeAndReleaseLock(this.processingDataLockKey, (()=>s(this, void 0, void 0, (function*() {
                                try {
                                    if (this.chunkOverflow && (n = i.concat([this.chunkOverflow, n]),
                                    this.chunkOverflow = void 0),
                                    !this.headerString) {
                                        const {headers: e, body: r} = this.parseGrpcResponse(n);
                                        if (this.headerString = e,
                                        n = r,
                                        !this.headerString)
                                            return void this.handleMissingChunkData(n, t);
                                        const i = f(this.headerString);
                                        this.options.onHeaders(new o.grpc.Metadata(i.headers), i.statusCode)
                                    }
                                    const e = yield(0,
                                    h.parseHttpMessageChunks)(n, (e=>(this.options.onChunk(e),
                                    Promise.resolve())), t);
                                    this.handleMissingChunkData(e)
                                } catch (e) {
                                    this.trace.error("Failed to read data from server: ", e)
                                }
                            }
                            ))))
                        }
                        ))
                    }
                    sendMessage(e) {
                        return s(this, void 0, void 0, (function*() {
                            try {
                                if (this.requestFailed)
                                    return void this.trace.verbose("Request has failed, not sending any more data");
                                this.trace.verbose(`Sending message of size ${e.byteLength} bytes to server`),
                                (0,
                                r.assertDefined)(this.metadata, "Metadata is not defined.");
                                const t = this.createGrpcRequestHeaders(this.metadata, this.options.url, e.byteLength)
                                  , n = i.from(t)
                                  , o = i.from(e.buffer);
                                if (this.connection)
                                    return void (yield this.executeAndReleaseLock(this.channelLockKey, (()=>s(this, void 0, void 0, (function*() {
                                        if (!this.channel)
                                            throw new d.CodespacesInternalTransportError("No channel available");
                                        yield this.channel.send(n),
                                        yield this.channel.send(o)
                                    }
                                    )))));
                                yield this.executeAndReleaseLock(this.streamLockKey, (()=>s(this, void 0, void 0, (function*() {
                                    if (!this.stream)
                                        throw new d.CodespacesInternalTransportError("No stream available");
                                    this.stream.write(n),
                                    this.stream.write(o)
                                }
                                ))))
                            } catch (e) {
                                const t = new d.CodespacesInternalTransportError(`Failed to send message: ${e.message}`);
                                this.handleEndRequest(t)
                            }
                        }
                        ))
                    }
                    executeAndReleaseLock(e, t) {
                        return s(this, void 0, void 0, (function*() {
                            yield this.lock.acquire(e, (e=>s(this, void 0, void 0, (function*() {
                                try {
                                    yield t()
                                } catch (e) {
                                    throw e
                                } finally {
                                    e()
                                }
                            }
                            ))))
                        }
                        ))
                    }
                    finishSend() {
                        this.trace.verbose("Finished sending request to server")
                    }
                    cancel() {
                        const e = new d.CodespacesInternalTransportError("Request canceled by client");
                        this.handleEndRequest(e)
                    }
                    handleEndRequest(e) {
                        return s(this, void 0, void 0, (function*() {
                            yield this.executeAndReleaseLock(this.processingDataLockKey, (()=>s(this, void 0, void 0, (function*() {
                                var t;
                                try {
                                    this.trace.verbose("Sending end event to client"),
                                    e && (this.requestFailed = !0,
                                    this.trace.error(e.message),
                                    this.telemetry.sendTelemetry([l.CodespacesTelemetryEventNames.CodespacesInternalTransportErrorInfo, Object.assign(Object.assign({}, (0,
                                    p.errorToObject)(e)), {
                                        methodName: this.options.methodDefinition.methodName
                                    })]),
                                    this.options.onHeaders(new o.grpc.Metadata({
                                        "grpc-message": e.message,
                                        "error-type": "" + (e instanceof d.ConnectionError ? "ConnectionError" : "Unknown")
                                    }), 13)),
                                    this.options.onEnd(),
                                    null === (t = this.stream) || void 0 === t || t.end()
                                } catch (e) {
                                    this.trace.error("Failed to end request:", e.message)
                                }
                            }
                            ))))
                        }
                        ))
                    }
                    handleMissingChunkData(e, t) {
                        e.byteLength > 0 && (this.chunkOverflow = i.from(e),
                        null == t || t.adjustWindow(e.byteLength))
                    }
                    createGrpcRequestHeaders(e, t, n) {
                        const o = [];
                        e.forEach(((e,t)=>{
                            o.push(`${e}: ${t.join(", ")}`)
                        }
                        ));
                        return [`POST ${new URL(t).pathname.replace(/^\/codespaces\/internal/, "")} HTTP/1.1`, `Host: localhost:${u.CODESPACES_INTERNAL_WEB_PORT}`, "Connection: close", `Content-Length: ${n}`, ...o, v].join(v)
                    }
                    parseGrpcResponse(e) {
                        let t;
                        const n = e.findIndex(((t,n)=>e[n + 0] === m && e[n + 1] === g && e[n + 2] === m && e[n + 3] === g));
                        if (n > 0) {
                            t = e.subarray(0, n).toString().toLowerCase();
                            const o = n + 4;
                            e = e.subarray(o)
                        }
                        return {
                            headers: t,
                            body: e
                        }
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        98259: (e,t,n)=>{
            var o, r;
            o = [n, t, n(89010), n(11627), n(39327), n(24863), n(8957)],
            r = function(e, t, n, o, r, i, s) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.initConnectionHub = t.preconnectionStorage = void 0,
                t.preconnectionStorage = null,
                t.initConnectionHub = (0,
                o.once)(((e,o,a,c,d)=>{
                    const l = (0,
                    i.initLiveShareConnectionHub)(e, a, o)
                      , u = new n.ConnectionHub(e.createChild("vscode"),o,n.VSCodeConnection,[l],!0);
                    return t.preconnectionStorage = new r.PreconnectionStorage(e.createChild("preconnection-storage"),s.localStorageKeychain,l),
                    l.addToDisposables(l.onConnection((e=>{
                        const {options: n, type: o} = e;
                        t.preconnectionStorage ? (t.preconnectionStorage.saveConnectionData(n),
                        c.addContextProperty("connectionType", o)) : l.trace.verbose("no `PreconnectionStorage` found")
                    }
                    ))),
                    t.preconnectionStorage.preconnect(d),
                    u
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        24863: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(89010), n(11627), n(57781), n(10096), n(2509)],
            r = function(e, t, n, o, r, s, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.initLiveShareConnectionHub = void 0,
                t.initLiveShareConnectionHub = (0,
                o.once)(((e,t,c)=>{
                    (0,
                    a.registerServiceWorker)(e, !1);
                    const d = []
                      , l = new n.ConnectionHub(e.createChild("liveshare"),c,n.CodespaceConnection,void 0,!0);
                    d.push(l);
                    const u = new n.ConnectionHub(e.createChild("liveshare-joint"),c,n.LiveShareJointConnection,d,!0);
                    return u.onConnection((e=>i(void 0, void 0, void 0, (function*() {
                        const {workspaceClient: n, trace: i} = e;
                        (0,
                        o.assertDefined)(n, "No WorkspaceClient found.");
                        const a = n.getServiceProxy(r.vsls.SourceEventService);
                        new s.BrowserSyncService(i.createChild("browser-sync-service"),a);
                        const c = yield t.getPartnerInfo();
                        c && c.vscodeSettings
                    }
                    )))),
                    u
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        69030: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11536), n(11627), n(83730), n(47035), n(92098)],
            r = function(e, t, n, o, r, s, a) {
                "use strict";
                let c;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StreamManager = void 0;
                class d {
                    constructor(e, t, n) {
                        this.trace = e,
                        this.tunnelProvider = t,
                        this.rpcClient = n,
                        this.onVSCodeConnectionDetailsChangedEmitter = new r.Emitter,
                        this.onVSCodeConnectionDetailsChanged = this.onVSCodeConnectionDetailsChangedEmitter.event
                    }
                    static getStreamManager(e, t, n) {
                        return i(this, void 0, void 0, (function*() {
                            if (!c) {
                                const o = yield(0,
                                a.getRpcClient)(e, n);
                                c = new d(e,t,o)
                            }
                            return c
                        }
                        ))
                    }
                    getVSCodeStream(e) {
                        var t;
                        return i(this, void 0, void 0, (function*() {
                            return this.vsCodeServerDetails || (yield this.getVSCodeConnectionDetails(e)),
                            (0,
                            o.assertDefined)(null === (t = this.vsCodeServerDetails) || void 0 === t ? void 0 : t.port, "VS Code port not set"),
                            yield this.tunnelProvider.getStreamFromPort(this.vsCodeServerDetails.port, n.TunnelProtocol.Https)
                        }
                        ))
                    }
                    getVSCodeConnectionDetails(e) {
                        return i(this, void 0, void 0, (function*() {
                            return this.vsCodeServerDetails = yield this.rpcClient.startRemoteServerAsync((()=>{}
                            ), void 0, this.trace, [Object.assign(Object.assign({}, e), {
                                quality: e.vsCodeQuality
                            })]),
                            this.onVSCodeConnectionDetailsChangedEmitter.fire(this.vsCodeServerDetails),
                            this.vsCodeServerDetails
                        }
                        ))
                    }
                    getGRPCStream() {
                        return i(this, void 0, void 0, (function*() {
                            return yield this.tunnelProvider.getStreamFromPort(s.CODESPACES_INTERNAL_WEB_PORT, n.TunnelProtocol.Https)
                        }
                        ))
                    }
                }
                t.StreamManager = d
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        22988: function(e, t, n) {
            var o, r, i = n(48764).lW, s = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(89010), n(11627), n(57781), n(50162), n(27593), n(77306), n(47035), n(29951), n(27346), n(10096), n(44551), n(31541), n(98221), n(19266), n(83714), n(92098)],
            r = function(e, t, n, o, r, a, c, d, l, u, p, h, f, v, m, g, y, b, C) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.WebSocketFactory = void 0;
                const S = (e,t)=>s(void 0, void 0, void 0, (function*() {
                    try {
                        return yield e()
                    } catch (e) {
                        throw e.message = `${t} ${e.message}`,
                        e
                    }
                }
                ));
                class w extends r.DisposableClass {
                    constructor(e, t, o, i, s, a, c, d, l, u, p=window.performance, h=2, f) {
                        super(e),
                        this.performance = t,
                        this.connectionHub = o,
                        this.url = i,
                        this.getConnectionOptions = s,
                        this.correlationId = a,
                        this.getCodespaceInfo = c,
                        this.telemetry = d,
                        this.config = l,
                        this.windowPerformance = p,
                        this.OPEN_CHANNEL_RETRIES = h,
                        this.streamManager = f,
                        this.codespaceInfo = null,
                        this.onDataEmitter = new n.Emitter,
                        this.onData = this.onDataEmitter.event,
                        this.onOpenEmitter = new n.Emitter,
                        this.onOpen = this.onOpenEmitter.event,
                        this.onCloseEmitter = new n.Emitter,
                        this.onClose = this.onCloseEmitter.event,
                        this.onErrorEmitter = new n.Emitter,
                        this.onError = this.onErrorEmitter.event,
                        this.channel = null,
                        this.stream = null,
                        this.id = w.socketCnt++,
                        this.addToDisposables(this.onOpen((()=>u(this.id))), this.onError((e=>{
                            this.onCloseEmitter.fire(e)
                        }
                        )), this.onOpenEmitter, this.onCloseEmitter, this.onDataEmitter, this.onErrorEmitter, (0,
                        r.createDisposable)((()=>{
                            this.channel = null,
                            this.codespaceInfo = null
                        }
                        ))),
                        this.streamManager ? this.initializeOnDevTunnels(i) : this.initializeChannel(i)
                    }
                    send(e) {
                        const t = i.from(e);
                        if (this.isDisposed) {
                            this.trace.verbose(`[${this.getWebSocketIdentifier()}] the data is not sent since the channel is already disposed.`);
                            try {
                                this.onCloseEmitter.fire()
                            } catch (e) {}
                        } else
                            this.stream ? this.stream.write(t, void 0, (e=>{
                                e && (this.trace.warning("stream error, closing", e),
                                this.onCloseEmitter.fire())
                            }
                            )) : ((0,
                            r.assertDefined)(this.channel, "No channel found."),
                            this.channel.send(t).catch((e=>{
                                (e instanceof d.CancellationError ? e : new d.SshChannelError(e.message)).stack = e.stack,
                                this.trace.warning("ssh channel error, closing", e),
                                this.onCloseEmitter.fire()
                            }
                            )))
                    }
                    close() {
                        return s(this, void 0, void 0, (function*() {
                            (0,
                            r.assertDefined)(this.codespaceInfo, "No `codespaceInfo` found."),
                            this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebLSConnectionClose, {
                                connectionCorrelationId: this.correlationId,
                                isFirstConnection: 0 === this.id,
                                connectionNumber: this.id,
                                isReconnection: this.id > 1
                            }]),
                            this.stream ? this.stream.end("Workbench requested to close the connection.") : ((0,
                            r.assertDefined)(this.channel, "No `channel` found."),
                            this.channel.close("Workbench requested to close the connection.")),
                            this.onCloseEmitter.fire()
                        }
                        ))
                    }
                    isReconnection(e) {
                        try {
                            return "true" === new URL(e).searchParams.get("reconnection")
                        } catch (e) {
                            return !0
                        }
                    }
                    initializeChannel(e, t=this.OPEN_CHANNEL_RETRIES) {
                        var n, i, S, w, T, _;
                        return s(this, void 0, void 0, (function*() {
                            const E = e.replace(/skipWebSocketFrames=false/gim, "skipWebSocketFrames=true");
                            this.trace.verbose("initializing the channel", e, t),
                            this.codespaceInfo = yield this.getCodespaceInfo(this.id < 2),
                            (0,
                            r.assertDefined)(this.codespaceInfo, new d.CodespaceNotAvailableError("No `codespaceInfo` found."));
                            try {
                                let m = (null === (n = this.codespaceInfo) || void 0 === n ? void 0 : n.billable_owner.type) == c.BillableOwnerType.Organization ? null === (i = this.codespaceInfo) || void 0 === i ? void 0 : i.billable_owner.id : "";
                                this.telemetry.addContextProperties({
                                    "is-test-environment": null === (S = this.codespaceInfo) || void 0 === S ? void 0 : S.test_account,
                                    "organization-id": m.toString()
                                });
                                const g = this.OPEN_CHANNEL_RETRIES - t
                                  , b = this.performance.createGroup(`initialize channel (attempt: ${g})`);
                                this.windowPerformance.mark(`WebSocketFactory.initializeChannel[${this.id}] - ls-connection-initializing`),
                                this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebLSConnectionActionStart, {
                                    connectionCorrelationId: this.correlationId,
                                    isFirstConnection: 0 === this.id,
                                    connectionNumber: this.id,
                                    isReconnection: this.isReconnection(e)
                                }]),
                                (0,
                                r.assert)(this.codespaceInfo.state === c.CodespaceStateInfo.Available, new d.OutdatedCodespaceStateError("The codespace is not in an available state.",this.codespaceInfo.state));
                                const w = yield this.getConnectionOptions(this.codespaceInfo);
                                if (this.codespaceInfo.connection.sessionId !== w.workspaceId) {
                                    const e = new l.DisconnectedError("Codespace information is outdated");
                                    throw this.onErrorEmitter.fire(e),
                                    e
                                }
                                const T = this.isReconnection(e) ? u.VSCODE_RECONNECTION_TIMEOUT : u.VSCODE_INITIAL_CONNECTION_TIMEOUT;
                                this.trace.info("starting connection", this.codespaceInfo);
                                const [_] = yield b.measure({
                                    name: "connection"
                                }, (()=>s(this, void 0, void 0, (function*() {
                                    var e;
                                    0 === this.id && b.main.markBlockEnd({
                                        id: p.PerformanceEventIds.TimeToFirstConnection,
                                        name: "time to connection"
                                    }, !0),
                                    this.trace.verbose(`start connection, id ${this.id}, sessionId ${null === (e = this.codespaceInfo) || void 0 === e ? void 0 : e.connection.sessionId}`),
                                    (0,
                                    r.assertDefined)(this.connectionHub, "No `ConnectionHub` found.");
                                    const [t] = this.connectionHub.childHubs;
                                    return yield Promise.all([this.connectionHub.connect(w, {
                                        timeout: T,
                                        performance: b,
                                        trace: this.trace,
                                        rpcClient: yield(0,
                                        C.getRpcClient)(this.trace, this.telemetry, t, w)
                                    })])
                                }
                                ))));
                                this.addToDisposables(_.onDispose((()=>{
                                    this.onCloseEmitter.fire()
                                }
                                ))),
                                (0,
                                r.assertDefined)(_, "Failed to establish VSCode connection."),
                                this.trace.verbose("vscode connection established");
                                const P = yield b.measure({
                                    name: "open websocket channel"
                                }, (()=>s(this, void 0, void 0, (function*() {
                                    try {
                                        const e = 4 * r.TIME_SECOND_MS;
                                        return yield(0,
                                        r.timeoutPromise)(this.sendHandshakeRequest(_, this.createHandshakeRequest(E), b.createGroup("create WebSocket stream")), e, new o.ConnectionTimeoutError("WebSocket channel request timed out."))
                                    } catch (e) {
                                        throw this.trace.verbose("protocol upgrade request failed", e),
                                        yield _.disconnect(`protocol upgrade request failed, ${e.message}`),
                                        e
                                    }
                                }
                                ))));
                                yield b.measure({
                                    id: p.PerformanceEventIds.FinishingConnection,
                                    name: p.PerformanceEventNames.FinishingConnection
                                }, (()=>s(this, void 0, void 0, (function*() {
                                    var t, n;
                                    (0,
                                    r.assertDefined)(this.codespaceInfo, "No codespace info found."),
                                    this.addToDisposables(P.onClosed((e=>{
                                        this.trace.verbose(`[${this.getWebSocketIdentifier()}] Ssh channel closed.`, e),
                                        this.onCloseEmitter.fire()
                                    }
                                    ))),
                                    P.onDataReceived((e=>{
                                        P.adjustWindow(e.length),
                                        this.onDataEmitter.fire((0,
                                        h.bufferToArrayBuffer)(e))
                                    }
                                    )),
                                    this.trace.verbose(`[${this.getWebSocketIdentifier()}] Ssh channel open.`),
                                    this.onOpenEmitter.fire(),
                                    this.windowPerformance.measure(`WebSocketFactory.initializeChannel[${this.id}] - ls-connection-opened`, `WebSocketFactory.initializeChannel[${this.id}] - ls-connection-initializing`);
                                    const o = this.windowPerformance.getEntriesByName(`WebSocketFactory.initializeChannel[${this.id}] - ls-connection-opened`);
                                    if (0 === this.id) {
                                        b.main.markBlockEnd({
                                            id: p.PerformanceEventIds.PureWorkbenchConnectionTime,
                                            name: ""
                                        }, !0);
                                        const e = b.main.getBlockMeasure(p.PerformanceEventIds.PureWorkbenchConnectionTime);
                                        this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebInitialConnectionTime, Object.assign({}, null == e ? void 0 : e.measure)])
                                    } else {
                                        const e = null === (t = _.workspaceClient) || void 0 === t ? void 0 : t.getServiceProxy(a.vsls.SourceEventService);
                                        if (e) {
                                            new f.BrowserSyncService(this.trace.createChild("browser-sync-service"),e).sendMessage(v.BrowserConnectorMessages.SessionDisconnections, this.id - 1)
                                        }
                                    }
                                    if (1 === this.id) {
                                        b.main.markBlockEnd({
                                            id: p.PerformanceEventIds.TotalWorkbenchConnectionTime,
                                            name: ""
                                        }, !0),
                                        b.main.markBlockEnd({
                                            id: p.PerformanceEventIds.VSCodeLoadedToEditors,
                                            name: "vscode loaded to editors"
                                        }, !0),
                                        b.main.markBlockStart({
                                            id: p.PerformanceEventIds.EditorsToExtensionActivation,
                                            name: "editors to time to extensions"
                                        }, !0);
                                        const e = b.main.getBlockMeasure(p.PerformanceEventIds.TotalWorkbenchConnectionTime);
                                        this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebTotalConnectionTime, Object.assign({}, null == e ? void 0 : e.measure)])
                                    }
                                    this.channel = P,
                                    this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebLSConnectionActionStop, {
                                        connectionCorrelationId: this.correlationId,
                                        isFirstConnection: 0 === this.id,
                                        connectionNumber: this.id,
                                        duration: null === (n = null == o ? void 0 : o.at(0)) || void 0 === n ? void 0 : n.duration,
                                        isReconnection: this.isReconnection(e)
                                    }])
                                }
                                ))))
                            } catch (n) {
                                try {
                                    this.trace.error(`[${this.getWebSocketIdentifier()}] Ssh channel failed to open, retry: ${t}.`, n),
                                    this.windowPerformance.measure(`WebSocketFactory.initializeChannel[${this.id}] - ls-connection-failed`, `WebSocketFactory.initializeChannel[${this.id}] - ls-connection-initializing`);
                                    const r = this.windowPerformance.getEntriesByName(`WebSocketFactory.initializeChannel[${this.id}] - ls-connection-failed`)
                                      , i = n instanceof o.ConnectionTimeoutError
                                      , s = yield(0,
                                    m.ensureCodespaceIsAvailable)(this.getCodespaceInfo);
                                    n = null !== (w = s.error) && void 0 !== w ? w : n,
                                    this.trace.warning(`retry ${t}, timeout: ${i}`);
                                    const a = i || n instanceof d.CodespaceNotAvailableError || n instanceof d.OutdatedCodespaceStateError || n instanceof l.DisconnectedError;
                                    this.trace.verbose(`isFatalError: ${a}`, n.erroType);
                                    const c = Object.assign(Object.assign({
                                        connectionCorrelationId: this.correlationId,
                                        isFirstConnection: 0 === this.id,
                                        connectionNumber: this.id,
                                        isReconnection: this.isReconnection(e),
                                        duration: null === (T = null == r ? void 0 : r.at(0)) || void 0 === T ? void 0 : T.duration,
                                        isTimeout: i,
                                        codespaceState: null !== (_ = s.state) && void 0 !== _ ? _ : this.codespaceInfo.state
                                    }, (0,
                                    g.errorToObject)(n)), {
                                        errorStackTrace: (0,
                                        b.cleanupPII)(n.stack),
                                        errorType: n.errorType,
                                        error: n,
                                        retry: t
                                    });
                                    if (t <= 0 || a)
                                        return this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebLSConnectionActionStop, c]),
                                        void (n instanceof d.OutdatedCodespaceStateError ? this.onErrorEmitter.fire(n) : this.onCloseEmitter.fire(n));
                                    this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebLSConnectionFailed, c]),
                                    this.initializeChannel(E, t - 1)
                                } catch (e) {
                                    this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebLSConnectionActionStop, {
                                        connectionCorrelationId: this.correlationId,
                                        errorStackTrace: null == n ? void 0 : n.stack,
                                        error: n,
                                        errorType: null == n ? void 0 : n.errorType,
                                        retry: t
                                    }])
                                }
                            }
                        }
                        ))
                    }
                    sendHandshakeRequest(e, t, n) {
                        return s(this, void 0, void 0, (function*() {
                            const a = new r.Signal;
                            this.trace.verbose("opening ssh channel");
                            const c = yield n.measure({
                                name: "open channel"
                            }, (()=>s(this, void 0, void 0, (function*() {
                                return yield S((()=>s(this, void 0, void 0, (function*() {
                                    var t;
                                    try {
                                        return yield(0,
                                        r.timeoutPromise)(e.openChannel(), 4 * r.TIME_SECOND_MS, new o.ConnectionTimeoutError("Timed out."))
                                    } catch (n) {
                                        throw this.onCloseEmitter.fire(),
                                        null === (t = e.liveshareConnection) || void 0 === t || t.dispose(),
                                        n
                                    }
                                }
                                ))), "Opening SSH channel failed,")
                            }
                            ))));
                            return yield n.measure({
                                name: "vscode client 🤝 server"
                            }, (()=>s(this, void 0, void 0, (function*() {
                                (0,
                                r.assertDefined)(c, "Failed to open a channel"),
                                this.addToDisposables(c.onDataReceived((e=>{
                                    a.isFulfilled || this.trace.verbose(`response: \n${e.toString()}\n`),
                                    c.adjustWindow(e.length),
                                    a.resolve(c)
                                }
                                ))),
                                this.trace.verbose(`sending the request: \n${t}\n`),
                                yield S(c.send.bind(c, i.from(t)), "Openning web socket channel failed,");
                                const e = yield S((()=>s(this, void 0, void 0, (function*() {
                                    return yield a.promise
                                }
                                ))), "Opened channel await failed,");
                                return this.trace.verbose("🔌 web socket connected"),
                                e
                            }
                            ))))
                        }
                        ))
                    }
                    createHandshakeRequest(e) {
                        return [`GET ${e} HTTP/1.1`, "Connection: Upgrade", "Upgrade: websocket", `Sec-WebSocket-Key: ${(0,
                        r.randomString)(32)}`, "\r\n"].join("\r\n")
                    }
                    getWebSocketIdentifier() {
                        const e = new URL(this.url).searchParams.toString();
                        return `${this.id}:${e}`
                    }
                    sendHandShakeWithDevTunnels(e, t, n) {
                        return s(this, void 0, void 0, (function*() {
                            const o = new r.Signal;
                            return this.trace.verbose("sending handshake through stream"),
                            yield n.measure({
                                name: "vscode client 🤝 server"
                            }, (()=>s(this, void 0, void 0, (function*() {
                                e.on("data", (t=>{
                                    o.isFulfilled || this.trace.verbose(`response: \n${t.toString()}\n`),
                                    o.resolve(e)
                                }
                                )),
                                this.trace.verbose(`sending the request: \n${t}\n`),
                                e.write(i.from(t));
                                const n = yield o.promise;
                                return this.trace.verbose("🔌 web socket connected"),
                                n
                            }
                            ))))
                        }
                        ))
                    }
                    initializeOnDevTunnels(e, t=this.OPEN_CHANNEL_RETRIES) {
                        var n, i;
                        return s(this, void 0, void 0, (function*() {
                            let a = {
                                Action: y.TelemetryActionTypes.InitializeWebSocket,
                                RootActivityId: this.correlationId,
                                connectionNumber: this.id
                            };
                            try {
                                const l = e.replace(/skipWebSocketFrames=false/gim, "skipWebSocketFrames=true");
                                this.trace.verbose("initializing the channel through dev tunnels", t),
                                this.codespaceInfo = yield this.getCodespaceInfo(this.id < 2),
                                (0,
                                r.assertDefined)(this.codespaceInfo, new d.CodespaceNotAvailableError("No `codespaceInfo` found."));
                                let u = (null === (n = this.codespaceInfo) || void 0 === n ? void 0 : n.billable_owner.type) == c.BillableOwnerType.Organization ? null === (i = this.codespaceInfo) || void 0 === i ? void 0 : i.billable_owner.id : "";
                                this.telemetry.addContextProperties({
                                    "organization-id": u.toString()
                                });
                                const f = this.OPEN_CHANNEL_RETRIES - t
                                  , v = this.performance.createGroup(`initialize channel (attempt: ${f})`);
                                this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.ActionStart, a]),
                                (0,
                                r.assert)(this.codespaceInfo.state === c.CodespaceStateInfo.Available, new d.OutdatedCodespaceStateError("The codespace is not in an available state.",this.codespaceInfo.state)),
                                this.trace.info("opening vscode channel", this.codespaceInfo);
                                const m = yield this.getConnectionOptions(this.codespaceInfo);
                                this.stream = yield v.measure({
                                    name: "getting vscode stream"
                                }, (()=>s(this, void 0, void 0, (function*() {
                                    return 0 === this.id && v.main.markBlockEnd({
                                        id: p.PerformanceEventIds.TimeToFirstConnection,
                                        name: "time to get channel"
                                    }, !0),
                                    (0,
                                    r.assertDefined)(this.streamManager, "Stream manager not initialized"),
                                    yield this.streamManager.getVSCodeStream(m)
                                }
                                )))),
                                this.stream.on("error", (e=>{
                                    this.trace.error(e),
                                    this.closeWebSocket("error")
                                }
                                )),
                                this.stream.on("end", (e=>{
                                    this.trace.error(e),
                                    this.closeWebSocket("end")
                                }
                                )),
                                this.stream.on("close", (e=>{
                                    this.trace.error(e),
                                    this.closeWebSocket("close")
                                }
                                )),
                                this.stream.on("finish", (e=>{
                                    this.trace.error(e),
                                    this.closeWebSocket("finish")
                                }
                                )),
                                this.stream.on("data", (e=>{
                                    const t = (0,
                                    h.bufferToArrayBuffer)(e);
                                    this.onDataEmitter.fire(t)
                                }
                                )),
                                this.trace.verbose("vscode stream obtained"),
                                this.stream = yield v.measure({
                                    name: "send handshake request"
                                }, (()=>s(this, void 0, void 0, (function*() {
                                    try {
                                        const e = 4 * r.TIME_SECOND_MS;
                                        return (0,
                                        r.assertDefined)(this.stream, "Stream not initialized"),
                                        yield(0,
                                        r.timeoutPromise)(this.sendHandShakeWithDevTunnels(this.stream, this.createHandshakeRequest(l), v.createGroup("send handshake")), e, new o.ConnectionTimeoutError("WebSocket channel request timed out."))
                                    } catch (e) {
                                        throw this.trace.verbose("protocol upgrade request failed", e),
                                        e
                                    }
                                }
                                )))),
                                this.onOpenEmitter.fire(),
                                a.Result = y.TelemetryResultTypes.Success,
                                this.sendPerformanceInfo(v)
                            } catch (e) {
                                this.trace.error("failed to create websocket: ", e);
                                const t = (0,
                                g.errorToObject)(e);
                                throw a = Object.assign(Object.assign({}, a), t),
                                a.Result = y.TelemetryResultTypes.Failure,
                                e
                            } finally {
                                this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.ActionStop, a])
                            }
                        }
                        ))
                    }
                    sendPerformanceInfo(e) {
                        if (0 === this.id) {
                            e.main.markBlockEnd({
                                id: p.PerformanceEventIds.PureWorkbenchConnectionTime,
                                name: ""
                            }, !0);
                            const t = e.main.getBlockMeasure(p.PerformanceEventIds.PureWorkbenchConnectionTime);
                            this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebInitialConnectionTime, Object.assign({}, null == t ? void 0 : t.measure)])
                        }
                        if (1 === this.id) {
                            e.main.markBlockEnd({
                                id: p.PerformanceEventIds.TotalWorkbenchConnectionTime,
                                name: ""
                            }, !0),
                            e.main.markBlockEnd({
                                id: p.PerformanceEventIds.VSCodeLoadedToEditors,
                                name: "vscode loaded to editors"
                            }, !0),
                            e.main.markBlockStart({
                                id: p.PerformanceEventIds.EditorsToExtensionActivation,
                                name: "editors to time to extensions"
                            }, !0);
                            const t = e.main.getBlockMeasure(p.PerformanceEventIds.TotalWorkbenchConnectionTime);
                            this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebTotalConnectionTime, Object.assign({}, null == t ? void 0 : t.measure)])
                        }
                    }
                    closeWebSocket(e) {
                        this.telemetry.sendTelemetry([y.CodespacesTelemetryEventNames.WebSocketDisposed, {
                            disposeReason: e
                        }]),
                        this.onCloseEmitter.dispose()
                    }
                }
                t.WebSocketFactory = w,
                w.socketCnt = 0
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        19266: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n, o, r, i;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TelemetryResultTypes = t.TelemetryActionTypes = t.CodespacesTelemetryEventNames = t.PollTypes = void 0,
                function(e) {
                    e[e.ShutdownPolling = 0] = "ShutdownPolling",
                    e[e.ReadyPolling = 1] = "ReadyPolling"
                }(n || (t.PollTypes = n = {})),
                function(e) {
                    e.WebSplashScreenStateTransition = "codespaces/web/splash-screen-state-transition",
                    e.WebLSConnectionActionStart = "codespaces/web/ls-connection/action_start",
                    e.WebLSConnectionActionStop = "codespaces/web/ls-connection/action_stop",
                    e.WebLSConnectionFailed = "codespaces/web/ls-connection-failed",
                    e.WebLSConnectionClose = "codespaces/web/ls-connection-close",
                    e.WebInitialConnectionActionStart = "codespaces/web/initial-connection/action_start",
                    e.WebInitialConnectionActionStop = "codespaces/web/initial-connection/action_stop",
                    e.WebInitialConnectionTime = "codespaces/web/initial-connection-time",
                    e.WebJupyterConnectionActionStart = "codespaces/web/jupyter-connection/action_start",
                    e.WebJupyterConnectionActionStop = "codespaces/web/jupyter-connection/action_stop",
                    e.WebTotalConnectionTime = "codespaces/web/total-connection-time",
                    e.WebCodespacesWorkbenchError = "codespaces/web/error",
                    e.WebAppStateChanged = "codespaces/web/app-state-changed",
                    e.WebUnhandledError = "codespaces/web/unhandled-error",
                    e.WebEditorError = "codespaces/webeditor/error",
                    e.WebEditorActionStart = "codespaces/webeditor/connection/action_start",
                    e.WebEditorActionStop = "codespaces/webeditor/connection/action_stop",
                    e.WebEditorAppStateChanged = "codespaces/webeditor/app-state-changed",
                    e.WebEditorUnhandledError = "codespaces/webeditor/unhandled-error",
                    e.WebEditorLatencyUpdate = "codespaces/web/latency-update",
                    e.WebRequestIdMismatch = "codespaces/web/request-id-mismatch",
                    e.WebEditorRequestIdMismatch = "codespaces/webeditor/request-id-mismatch",
                    e.WebMountWorkbenchActionStart = "codespaces/web/mount-workbench/action_start",
                    e.WebMountWorkbenchActionStop = "codespaces/web/mount-workbench/action_stop",
                    e.WebSplashScreenLogsAvailable = "codespaces/web/splash-screen-logs-available",
                    e.WebSplashScreenLogsOpened = "codespaces/web/splash-screen-logs-opened",
                    e.TunnelOpenInfo = "codespaces/web/tunnel-open-info",
                    e.CodespacePollAttempts = "codespaces/web/codespace-poll-attempts",
                    e.TimeToInteractiveActionStart = "codespaces/web/time-to-interactive/action_start",
                    e.TimeToInteractiveActionStop = "codespaces/web/time-to-interactive/action_stop",
                    e.WebLoadActionStart = "codespaces/web/load/action_start",
                    e.WebLoadActionStop = "codespaces/web/load/action_stop",
                    e.WebOverallPerformance = "codespaces/web/performance",
                    e.TunnelPortStartTimeStart = "codespaces/web/tunnel-port-start-time/action_start",
                    e.TunnelPortStartTimeStop = "codespaces/web/tunnel-port-start-time/action_stop",
                    e.PortForwardingActionStart = "codespaces/web/pf/action_start",
                    e.PortForwardingActionStop = "codespaces/web/pf/action_stop",
                    e.KeychainKeyFault = "codespaces/web/keychain-key-fault",
                    e.VSCodeWorkbenchDisposed = "codespaces/web/vscode-workbench-disposed",
                    e.TunnelDisposed = "codespaces/web/tunnel-disposed",
                    e.SettingsSyncSignInActionStart = "codespaces/web/settings-sync-sign-in/action_start",
                    e.SettingsSyncSignInActionStop = "codespaces/web/settings-sync-sign-in/action_stop",
                    e.TunnelOperationError = "codespaces/web/tunnel-operation-error",
                    e.WaitingOnConnectionInfo = "codespaces/web/waiting-on-connection-info",
                    e.DeletePort = "codespaces/web/delete-port",
                    e.CodespacesInternalTransportErrorInfo = "codespaces/web/codespaces-internal-transport-error-info",
                    e.WebSocketDisposed = "codespaces/web/web-socket-disposed",
                    e.GetConnectionTokenError = "codespaces/web/get-connection-token-error",
                    e.TunnelConnectionRetry = "codespaces/web/tunnel-connection-retry",
                    e.TunnelProgressReport = "codespaces/web/tunnel-progress-report",
                    e.ForwardedPortConnecting = "codespaces/web/forwarded-port-connecting",
                    e.ActionStart = "action_start",
                    e.ActionStop = "action_stop"
                }(o || (t.CodespacesTelemetryEventNames = o = {})),
                function(e) {
                    e.Connect = "Connect",
                    e.Load = "Load",
                    e.OpenTunnel = "OpenTunnel",
                    e.ReconnectTunnelClient = "ReconnectTunnelClient",
                    e.ConnectTunnelClient = "ConnectTunnelClient",
                    e.InitializeWebSocket = "InitializeWebSocket"
                }(r || (t.TelemetryActionTypes = r = {})),
                function(e) {
                    e.Success = "Success",
                    e.Failure = "Failure",
                    e.UserError = "UserError"
                }(i || (t.TelemetryResultTypes = i = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        13350: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.FeatureFlags = void 0,
                function(e) {
                    e.Developer = "developer",
                    e.ReducedCodespaceStatePollingInterval = "reduced-codespace-state-polling-interval",
                    e.UseBasisForConnections = "useBasisForMainConnectionsWebClient",
                    e.UseEarlyWorkbenchWebClient = "useEarlyWorkbenchWebClient",
                    e.RemoveConnectRetriesWebClient = "removeConnectRetriesWebClient",
                    e.DevTunnelsOptOutMainConnection = "devTunnelsOptOut"
                }(n || (t.FeatureFlags = n = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        28788: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CreationLogType = void 0,
                function(e) {
                    e.InProgress = "inProgress",
                    e.Succeeded = "succeeded",
                    e.Failed = "failed"
                }(n || (t.CreationLogType = n = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        44835: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TerminalId = void 0,
                function(e) {
                    e[e.HeaderTerminal = 1] = "HeaderTerminal",
                    e[e.LogTerminal = 2] = "LogTerminal"
                }(n || (t.TerminalId = n = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        3546: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27593), n(17691), n(72736)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.fetchKeychainKeys = void 0;
                t.fetchKeychainKeys = e=>i(void 0, void 0, void 0, (function*() {
                    const t = new Headers
                      , i = `/keychain-keys?serverCorrelationId=${e}`;
                    t.append("cache-control", "no-store");
                    const s = yield(0,
                    o.fetchOrNetworkError)(i, {
                        method: "GET",
                        credentials: "include",
                        headers: t
                    });
                    if (s.ok) {
                        const e = yield s.json();
                        return (0,
                        r.enhanceEncryptionKeys)([e])
                    }
                    if (401 === s.status)
                        throw new n.AuthenticationError("keychain-keys returned 401");
                    throw new n.HttpError(s.status,s.statusText,i)
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        99995: (e,t,n)=>{
            var o, r;
            o = [n, t, n(71082), n(29951)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.initPerformance = void 0,
                t.initPerformance = (0,
                n.initializePerformanceInstance)(o.PerformanceGroupIds.Start),
                t.initPerformance.markBlockStart({
                    id: o.PerformanceEventIds.InitTimeToRemoteExtensions,
                    name: "time to remote extensions"
                }, !0)
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        29951: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n, o, r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.PerformanceGroupIds = t.PerformanceEventIds = t.PerformanceEventNames = void 0,
                function(e) {
                    e.OpenSshChannel = "open SSH channel",
                    e.FinishingConnection = "finishing up connection process",
                    e.VSCodeServerStartup = "start vscode server"
                }(n || (t.PerformanceEventNames = n = {})),
                function(e) {
                    e.InitTimeToRemoteExtensions = "InitTimeToRemoteExtensions",
                    e.WorkbenchPage = "WorkbenchPage",
                    e.WorkbenchPageInitialization = "WorkbenchPageInitialization",
                    e.OpenSshChannel = "OpenSshChannel",
                    e.FinishingConnection = "FinishingConnection",
                    e.VSCodeClientServerHandshake = "VSCodeClientServerHandshake",
                    e.StartCodespace = "StartCodespace",
                    e.GetCodespaceInfo1 = "GetCodespaceInfo1",
                    e.GetCodespaceInfo2 = "GetCodespaceInfo2",
                    e.GetLiveshareWorkspaceInfo = "GetLiveshareWorkspaceInfo",
                    e.WorkbenchClientConnection = "WorkbenchClientConnection",
                    e.PureWorkbenchConnectionTime = "PureWorkbenchConnection",
                    e.TotalWorkbenchConnectionTime = "TotalWorkbenchConnectionTime",
                    e.TimeToFirstConnection = "TimeToFirstConnection",
                    e.EarlyConnectionTime = "EarlyConnectionTime",
                    e.VSCodeServerStartupServerStart = "VSCodeServerStartupServerStart",
                    e.VSCodeServerStartupServerTcpPortForwarding = "VSCodeServerStartupServerTCPPortForwarding",
                    e.TimeToInteractive = "TimeToInteractive",
                    e.Bootstrap = "Bootstrap",
                    e.ReactInitToVSCodeCreate = "ReactInitToVSCodeCreate",
                    e.VSCodeCreateToVSCodeLoaded = "VSCodeCreateToVSCodeLoaded",
                    e.VSCodeLoadedToEditors = "VSCodeLoadedToEditors",
                    e.EditorsToExtensionActivation = "EditorsToExtensionActivation",
                    e.IdleToAvailable = "IdleToAvailable"
                }(o || (t.PerformanceEventIds = o = {})),
                function(e) {
                    e.Start = "Start",
                    e.PureWorkbenchConnectionTimeGroup = "PureWorkbenchConnectionTimeGroup",
                    e.WorkbenchComponent = "WorkbenchComponent",
                    e.WebSocketFactoriesConnection = "WebSocketFactoriesConnection",
                    e.VSCodeInitialization = "VSCodeInitialization",
                    e.InitialConnection = "InitialConnection",
                    e.VSCodeServerStartup = "VSCodeServerStartup"
                }(r || (t.PerformanceGroupIds = r = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        41750: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(76545), n(54545), n(52739), n(34545), n(43297), n(20718), n(8641), n(37073)],
            r = function(e, t, n, o, r, s, a, c, d, l, u) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CodespacesWorkspaceProvider = void 0;
                t.CodespacesWorkspaceProvider = class {
                    constructor(e, t, o, r) {
                        this.codespaceInfo = t,
                        this.getWorkspaceUrl = o,
                        this.defaultWorkspacePath = r,
                        this.trusted = !0;
                        const i = (0,
                        c.getSessionPath)(this.codespaceInfo)
                          , s = this.getDefaultWorkspacePath(i, e.get("workspace"), e.get("folder"));
                        let a, l;
                        const p = s[0]
                          , h = s[1];
                        "folder" === p && (a = h),
                        "workspace" === p && (l = h);
                        const f = e.get("ew")
                          , v = e.get("payload");
                        if (this.payload = (0,
                        u.parseWorkspacePayload)(v) || void 0,
                        "true" === f)
                            this.workspace = void 0;
                        else if (l) {
                            let e = n.URI.parse(l)
                              , t = (e=>!!e.match(/Untitled\-\d+\.code\-workspace/gim))(l);
                            if ("file" === e.scheme) {
                                const o = t ? "vscode-userdata" : "vscode-remote"
                                  , r = t ? e.authority : (0,
                                d.getUriAuthority)(this.codespaceInfo);
                                e = n.URI.from(Object.assign(Object.assign({}, e), {
                                    scheme: o,
                                    authority: r
                                }))
                            }
                            this.workspace = {
                                workspaceUri: e
                            },
                            this.updateRecentlyOpened(e, `${t ? "Untitled" : e.path.substring(0, e.path.lastIndexOf(".code-workspace"))} (Workspace) [Codespace ${this.codespaceInfo.name}]`, !1)
                        } else {
                            const e = n.URI.from({
                                path: this.normalizeVSCodePath(a),
                                scheme: "vscode-remote",
                                authority: (0,
                                d.getUriAuthority)(this.codespaceInfo)
                            });
                            this.workspace = {
                                folderUri: e
                            },
                            this.updateRecentlyOpened(e, `${e.path} [Codespace ${this.codespaceInfo.name}]`, !0)
                        }
                    }
                    updateRecentlyOpened(e, t, o) {
                        n.commands.executeCommand("_workbench.addToRecentlyOpened", {
                            uri: e,
                            type: o ? "folder" : "workspace",
                            label: t
                        })
                    }
                    getDefaultWorkspacePath(e, t, n) {
                        if (n)
                            return ["folder", n];
                        if (t)
                            return ["workspace", t];
                        if (this.codespaceInfo.recent_folders && this.codespaceInfo.recent_folders.length >= 1) {
                            const e = this.codespaceInfo.recent_folders[0] || "";
                            return e.endsWith(".code-workspace") ? ["workspace", e] : ["folder", e]
                        }
                        return this.defaultWorkspacePath ? this.defaultWorkspacePath.endsWith(".code-workspace") ? ["workspace", this.defaultWorkspacePath] : ["folder", this.defaultWorkspacePath] : ["folder", e]
                    }
                    normalizeVSCodePath(e="") {
                        if (!e)
                            return e;
                        return `/${(e = e.trim()).replace(/\\/g, "/").replace(/^\//, "")}`
                    }
                    open(e, t={}) {
                        return i(this, void 0, void 0, (function*() {
                            let n = new URL(document.location.pathname,document.location.origin)
                              , r = t && !0 !== t.reuse ? this.getWorkspaceUrl(n) : n;
                            if (e)
                                if (this.isFolderToOpen(e))
                                    n = this.isCurrentCodespace(e.folderUri.authority) ? n : this.getCodespaceURL(e.folderUri.authority),
                                    r = t && !0 !== t.reuse ? this.getWorkspaceUrl(n) : n,
                                    r.searchParams.set("folder", e.folderUri.path);
                                else {
                                    if (!this.isWorkspaceToOpen(e))
                                        throw new Error("Unsupported workspace type.");
                                    n = this.isCurrentCodespace(e.workspaceUri.authority) ? n : this.getCodespaceURL(e.workspaceUri.authority),
                                    r = t && !0 !== t.reuse ? this.getWorkspaceUrl(n) : n,
                                    r.searchParams.set("workspace", e.workspaceUri.path)
                                }
                            else
                                r.searchParams.set("ew", "true");
                            const i = (0,
                            a.getQueryParamFlag)(o.CodespacesQueryParams.VSCodeChannel);
                            return i && r.searchParams.set(o.CodespacesQueryParams.VSCodeChannel, i),
                            t.payload && r.searchParams.set("payload", JSON.stringify(t.payload)),
                            !t || t.reuse ? (window.location.href = r.href,
                            !0) : this.tryOpenNewTab(r)
                        }
                        ))
                    }
                    tryOpenNewTab(e) {
                        const t = window.open();
                        return !!t && (t.opener = null,
                        t.location.href = e.href,
                        !0)
                    }
                    getCodespaceURL(e) {
                        const t = (0,
                        r.getLoginRedirectionURL)(null)
                          , n = e.split("+").pop();
                        return n && !(0,
                        l.isGuid)(n) ? new URL(n,t) : t
                    }
                    isCurrentCodespace(e) {
                        if ("" === e)
                            return !0;
                        const t = e.split("+").pop()
                          , n = (0,
                        s.getName)(location.hostname);
                        return !!(t && n && n.includes(t))
                    }
                    isFolderToOpen(e) {
                        return !!e.folderUri
                    }
                    isWorkspaceToOpen(e) {
                        return !!e.workspaceUri
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        9112: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.makeDevTunnelExternalUriProvider = void 0;
                const o = ["http", "https"]
                  , r = ["localhost", "127.0.0.1", "0.0.0.0", "0:0:0:0:0:0:0:0"];
                t.makeDevTunnelExternalUriProvider = function(e, t) {
                    return s=>i(this, void 0, void 0, (function*() {
                        if (e.info("Getting external URI for", s),
                        !o.includes(s.scheme))
                            return e.info("Unallowed scheme", s.scheme),
                            s;
                        const i = new URL(`${s.scheme}://${s.authority}`);
                        if (!r.includes(i.hostname))
                            return e.info("Unallowed host", i.hostname),
                            s;
                        const a = function(e) {
                            try {
                                let t = e.port;
                                if (!t)
                                    switch (e.protocol) {
                                    case "http:":
                                        t = "80";
                                        break;
                                    case "https:":
                                        t = "443"
                                    }
                                return /^\d{2,5}$/.test(t) ? parseInt(t, 10) : null
                            } catch (e) {
                                return null
                            }
                        }(i);
                        if (!a)
                            return e.info("No port found", i),
                            s;
                        let c;
                        try {
                            c = yield t.forwardPort(a)
                        } catch (t) {
                            return e.error("Failed ensuring external URI was forwarded", t),
                            s
                        }
                        const d = c.tunnelPort.portForwardingUris && c.tunnelPort.portForwardingUris[c.tunnelPort.portForwardingUris.length - 1];
                        if (d) {
                            const t = new URL(d)
                              , o = t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol
                              , r = n.URI.from({
                                scheme: o,
                                authority: t.host,
                                path: t.pathname
                            });
                            return e.info("Using primary port forwarding URI", r),
                            r
                        }
                        return e.info("No primary port forwarding URI found"),
                        s
                    }
                    ))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        59646: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            , s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(97786), n(11536), n(93164), n(11627), n(2065), n(11792), n(83730), n(27593), n(50162), n(19266), n(20523), n(47035), n(98221), n(5385), n(95009)],
            r = function(e, t, n, o, r, a, c, d, l, u, p, h, f, v, m, g, y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.accessControlToPrivacy = t.AllowOrgAccess = t.AllowAnonymousAccess = t.DevTunnelProvider = t.PortPrivacyNotAllowed = void 0,
                c = s(c);
                class b extends Error {
                }
                t.PortPrivacyNotAllowed = b;
                const C = [/vsls\-agent/, /vscode\-remote(?![\\\/]extensions)/];
                class S extends a.DisposableClass {
                    constructor(e, t, s, l, y, b, S, w, T=!0) {
                        var E;
                        super(e),
                        this.telemetry = t,
                        this.privacySettings = l,
                        this.openTunnel = y,
                        this.shouldListenForPortEvents = T,
                        this.tunnels = new Map,
                        this.tunnelClientLock = new c.default,
                        this.listeningForPortEvents = !1,
                        this.WebSocketErrorRegex = /Failed to connect to relay url/,
                        this.createNewTunnelClient = ()=>{
                            this.tunnelClient && this.tunnelClient.dispose();
                            const e = new n.TunnelRelayTunnelClient(((e,t,n,o)=>{
                                o ? this.trace.error(`tunnelClient ${e} ${t}: ${n}`, o) : this.trace.verbose(`tunnelClient ${e} ${t}: ${n}`)
                            }
                            ),this.managementClient);
                            return e.acceptLocalConnectionsForForwardedPorts = !1,
                            this.listeningForPortEvents = !1,
                            this.subscribeToEvents(e),
                            e
                        }
                        ,
                        this.tunnelFactory = e=>i(this, void 0, void 0, (function*() {
                            const {remoteAddress: {port: t, host: n}, protocol: r, privacy: i} = e
                              , s = (0,
                            d.v4)();
                            this.trace.info("Tunnel factory called", e);
                            const a = function(e) {
                                return e && "http" !== e ? "https" === e ? o.TunnelProtocol.Https : o.TunnelProtocol.Auto : o.TunnelProtocol.Http
                            }(r);
                            let c = {
                                Action: h.TelemetryActionTypes.OpenTunnel,
                                port: t,
                                host: n,
                                tunnelProtocol: a,
                                privacy: i,
                                RootActivityId: s
                            };
                            this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.ActionStart, c]);
                            const l = function(e) {
                                return "public" === e ? p.PortPrivacy.Public : "org" === e ? p.PortPrivacy.Org : p.PortPrivacy.Private
                            }(i);
                            try {
                                const e = this.tunnels.get(t);
                                if (c.tunnelAction = e ? "update" : "create",
                                e && (c.existingTunnelProtocol = e.tunnelPort.protocol,
                                (0,
                                g.isInternalPort)(e.tunnelPort.labels)))
                                    throw new u.TunnelProviderError("The port is being used by another process.");
                                const o = yield this.forwardPort(t, a, l)
                                  , s = {
                                    remoteAddress: {
                                        port: t,
                                        host: n
                                    },
                                    protocol: r,
                                    localAddress: `127.0.0.1:${t}`,
                                    privacy: i,
                                    onDidDispose: o.onDidDisposeEmitter.event,
                                    dispose: ()=>this.deletePort(t)
                                };
                                return c.Result = h.TelemetryResultTypes.Success,
                                s
                            } catch (e) {
                                this.trace.error("failed to create tunnel: ", e),
                                c.Result = _(e);
                                const t = (0,
                                m.errorToObject)(e);
                                throw c = Object.assign(Object.assign({}, c), t),
                                e
                            } finally {
                                c.resolvedPrivacy = l,
                                c.connectionStatus = this.tunnel.status,
                                c.tunnelClientStatus = this.tunnelClient.connectionStatus,
                                c.tunnelStatus = this.tunnel.status,
                                c.tunnelsMapSize = this.tunnels.size;
                                const e = (0,
                                f.addLatencyDetailsToEvent)(c);
                                this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.ActionStop, e])
                            }
                        }
                        )),
                        this.showPortCandidate = (e,t,n)=>Promise.resolve(!C.some((e=>n.match(e)))),
                        this.features = {
                            public: !1,
                            elevation: !1,
                            privacyOptions: []
                        },
                        this.subscribeToEvents = e=>{
                            e.retryingTunnelConnection((e=>{
                                const t = (0,
                                m.errorToObject)(e.error);
                                this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.TunnelConnectionRetry, Object.assign({
                                    delay: e.delayMs,
                                    retry: e.retry
                                }, t)])
                            }
                            )),
                            e.onReportProgress((e=>{
                                this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.TunnelProgressReport, Object.assign(Object.assign({}, e), {
                                    source: "tunnel-client"
                                })])
                            }
                            )),
                            e.forwardedPortConnecting((e=>{
                                this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.ForwardedPortConnecting, Object.assign({}, e)])
                            }
                            ))
                        }
                        ,
                        this.pushPrivacyOptions(l);
                        const P = null === (E = s.connection) || void 0 === E ? void 0 : E.tunnelProperties;
                        (0,
                        a.assertDefined)(P, new Error("Tunnel Properties must be defined")),
                        this.managementClient = null != b ? b : new r.TunnelManagementHttpClient({
                            name: v.BASIS_CS_EXTENSION_NAME
                        },r.ManagementApiVersions.Version20230927preview,void 0,P.serviceUri,void 0,w),
                        this.managementClient.onReportProgress && this.managementClient.onReportProgress((e=>{
                            this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.TunnelProgressReport, Object.assign(Object.assign({}, e), {
                                source: "management-client"
                            })])
                        }
                        )),
                        this.tunnelClient = null != S ? S : this.createNewTunnelClient(),
                        this.tunnel = {
                            tunnelId: P.tunnelId,
                            clusterId: P.clusterId,
                            domain: P.domain,
                            accessTokens: {
                                [o.TunnelAccessScopes.Connect]: P.connectAccessToken,
                                [o.TunnelAccessScopes.ManagePorts]: P.managePortsAccessToken
                            }
                        }
                    }
                    forwardPort(e, t, n, o=[y.TPortType.User]) {
                        return i(this, void 0, void 0, (function*() {
                            if (n && !this.privacySettings.includes(n))
                                throw new b(`Unallowed port privacy: ${n}. Only ${this.privacySettings} is allowed.`);
                            const r = this.tunnels.get(e);
                            return yield this.createOrReuseTunnelPort(r, e, o, t, n)
                        }
                        ))
                    }
                    addForwardedPort(e) {
                        return i(this, void 0, void 0, (function*() {
                            this.trace.verbose(`Adding forwarded port ${e}`);
                            if (this.tunnels.get(e))
                                return void this.trace.verbose(`Forwarded port ${e} already exists`);
                            const t = yield this.withTunnelManagementClient((t=>t.getTunnelPort(this.tunnel, e)));
                            if (!t)
                                return void this.trace.verbose(`Forwarded port ${e} doesn't exist`);
                            const n = {
                                tunnelPort: t,
                                onDidDisposeEmitter: new l.Emitter
                            };
                            this.tunnels.set(e, n),
                            this.openWorkspaceTunnel(t),
                            this.trace.verbose(`Added port: ${t.portNumber}`)
                        }
                        ))
                    }
                    openWorkspaceTunnel(e) {
                        return i(this, void 0, void 0, (function*() {
                            const t = e.accessControl ? function(e) {
                                const t = T(e);
                                return t === p.PortPrivacy.Public ? "public" : t === p.PortPrivacy.Org ? "org" : p.PortPrivacy.Private
                            }(e.accessControl) : "private";
                            if ((0,
                            g.isInternalPort)(e.labels))
                                return void this.trace.verbose(`Skipping internal port ${e.portNumber}`);
                            const n = function(e) {
                                return "https" === e ? e : "http"
                            }(e.protocol);
                            yield this.openTunnel({
                                remoteAddress: {
                                    port: e.portNumber,
                                    host: "localhost"
                                },
                                privacy: t,
                                protocol: n
                            })
                        }
                        ))
                    }
                    revivePorts() {
                        return i(this, void 0, void 0, (function*() {
                            this.trace.verbose("Reviving ports...");
                            const e = yield this.managementClient.listTunnelPorts(this.tunnel);
                            this.telemetry.addContextProperty("listedTunnelPorts", e.length);
                            for (const t of e) {
                                const e = {
                                    tunnelPort: t,
                                    onDidDisposeEmitter: new l.Emitter
                                };
                                this.tunnels.set(t.portNumber, e),
                                this.openWorkspaceTunnel(t),
                                this.trace.verbose(`Revived port: ${t.portNumber}`)
                            }
                        }
                        ))
                    }
                    deletePort(e) {
                        return i(this, void 0, void 0, (function*() {
                            let t = {
                                currentTunnelStatus: this.tunnelClient.connectionStatus,
                                port: e,
                                Result: h.TelemetryResultTypes.Success
                            };
                            try {
                                const n = this.tunnels.get(e);
                                this.trace.info(`Deleting port for ${e}`),
                                yield this.withTunnelManagementClient((t=>t.deleteTunnelPort(this.tunnel, e))),
                                this.tunnels.delete(e),
                                yield this.refreshPorts([], e),
                                n && n.onDidDisposeEmitter.fire(),
                                this.trace.info(`Deleted port for ${e}`),
                                t.portExists = !!n
                            } catch (e) {
                                this.trace.error("Error deleting port", e),
                                t.Result = _(e);
                                const n = (0,
                                m.errorToObject)(e);
                                throw t = Object.assign(Object.assign({}, t), n),
                                e
                            } finally {
                                this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.DeletePort, t])
                            }
                        }
                        ))
                    }
                    refreshPorts(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            yield this.withConnectedTunnelClient((e=>e.refreshPorts()), "refresh_ports", e, t)
                        }
                        ))
                    }
                    createDevTunnel(e, t) {
                        const n = {
                            tunnelPort: e,
                            onDidDisposeEmitter: null != t ? t : new l.Emitter
                        };
                        return this.tunnels.set(e.portNumber, n),
                        n
                    }
                    createOrReuseTunnelPort(e, t, n, r, s, a=0) {
                        return i(this, void 0, void 0, (function*() {
                            if (this.trace.info(`Creating or reusing ${r}/${t} with privacy '${s}', attempt ${a}`),
                            e) {
                                const n = e.tunnelPort;
                                if (function(e, t, n) {
                                    return !(t && e.protocol !== t || n && T(e.accessControl) !== n)
                                }(n, r, s))
                                    return this.trace.info(`${n.protocol}/${t} already exists with privacy '${T(n.accessControl)}' so reusing the existing port`),
                                    e;
                                this.trace.info(`${n.protocol}/${t} already exists but doesn't match requested settings, deleting and recreating`),
                                yield this.deletePort(t)
                            }
                            const i = null != r ? r : o.TunnelProtocol.Http
                              , c = null != s ? s : p.PortPrivacy.Private
                              , d = {
                                portNumber: t,
                                protocol: i,
                                accessControl: w(c),
                                labels: n
                            };
                            try {
                                const o = yield this.withTunnelManagementClient((e=>e.createTunnelPort(this.tunnel, d)))
                                  , r = this.createDevTunnel(o, null == e ? void 0 : e.onDidDisposeEmitter);
                                return yield this.refreshPorts(null != n ? n : [], t),
                                this.trace.info(`Created port ${i}/${t} with privacy '${c}'`),
                                r
                            } catch (e) {
                                if (a >= 2)
                                    throw e;
                                if (e.response && 409 == e.response.status) {
                                    this.trace.info(`Port ${i}/${t} already exists, trying to get existing tunnel port`),
                                    yield this.refreshPorts(null != n ? n : [], t);
                                    const e = yield this.withTunnelManagementClient((e=>e.getTunnelPort(this.tunnel, t)));
                                    let o;
                                    return e && (o = this.createDevTunnel(e)),
                                    yield this.createOrReuseTunnelPort(o, t, n, r, s, a + 1)
                                }
                                throw e
                            }
                        }
                        ))
                    }
                    withConnectedTunnelClient(e, t, o, r) {
                        return i(this, void 0, void 0, (function*() {
                            yield this.tunnelClientLock.acquire("tunnelClient", (e=>i(this, void 0, void 0, (function*() {
                                if (this.tunnelClient.connectionStatus !== n.ConnectionStatus.Connected) {
                                    const i = (0,
                                    d.v4)();
                                    let s = {
                                        Action: h.TelemetryActionTypes.ConnectTunnelClient,
                                        RootActivityId: i,
                                        currentTunnelStatus: this.tunnelClient.connectionStatus,
                                        operationType: t,
                                        labels: o.join(","),
                                        port: r
                                    };
                                    this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.ActionStart, s]),
                                    this.trace.info("Tunnel client is unconnected, fetching tunnel and connecting", this.tunnel),
                                    this.tunnelClient.connectionStatus === n.ConnectionStatus.Disconnected && (this.tunnelClient = this.createNewTunnelClient(),
                                    this.trace.info("Recreated tunnel client", this.tunnel),
                                    s.newTunnel = !0);
                                    try {
                                        const e = yield this.withTunnelManagementClient((e=>e.getTunnel(this.tunnel, {
                                            includePorts: !0
                                        })));
                                        e && (e.accessTokens = this.tunnel.accessTokens,
                                        yield this.connectTunnelClientWithRetry(this.tunnelClient, e)),
                                        s.Result = h.TelemetryResultTypes.Success
                                    } catch (t) {
                                        this.trace.error("Error connecting tunnel client", t),
                                        this.WebSocketErrorRegex.test(t.message) && (t = new u.WebSocketError(t.message)),
                                        s.Result = _(t);
                                        const n = (0,
                                        m.errorToObject)(t);
                                        s = Object.assign(Object.assign({}, s), n),
                                        e(t)
                                    } finally {
                                        s.currentTunnelStatus = this.tunnelClient.connectionStatus;
                                        const e = (0,
                                        f.addLatencyDetailsToEvent)(s);
                                        this.telemetry.sendTelemetry([h.CodespacesTelemetryEventNames.ActionStop, e])
                                    }
                                }
                                e()
                            }
                            ))));
                            const s = yield this.tunnelClientRetryOnException(this.tunnelClient, e, o, r);
                            return this.shouldListenForPortEvents && !this.listeningForPortEvents && this.setupPortEventListeners(),
                            s
                        }
                        ))
                    }
                    withTunnelManagementClient(e) {
                        return i(this, void 0, void 0, (function*() {
                            try {
                                return yield(0,
                                a.withRetries)((()=>i(this, void 0, void 0, (function*() {
                                    return yield e(this.managementClient)
                                }
                                ))), {
                                    retries: 2,
                                    retryDelay: 250,
                                    shouldStopRetries: e=>i(this, void 0, void 0, (function*() {
                                        const t = null == e ? void 0 : e.code;
                                        return !/ECONNABORTED/.test(e.message) && "ECONNABORTED" !== t
                                    }
                                    )),
                                    isAggregateError: !1
                                })
                            } catch (e) {
                                const t = null == e ? void 0 : e.code;
                                if (/ECONNABORTED/.test(e.message) || "ECONNABORTED" === t)
                                    throw new u.ConnectionAbortedError(e.message);
                                throw e
                            }
                        }
                        ))
                    }
                    dispose() {
                        return i(this, void 0, void 0, (function*() {
                            yield this.tunnelClient.dispose()
                        }
                        ))
                    }
                    getStreamFromPort(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            try {
                                const n = [y.TPortType.Internal];
                                return yield this.forwardPort(e, t, void 0, n),
                                yield this.withConnectedTunnelClient((t=>i(this, void 0, void 0, (function*() {
                                    return t.waitForForwardedPort(e)
                                }
                                ))), "wait_for_forwarded_port", n, e),
                                yield this.withConnectedTunnelClient((t=>i(this, void 0, void 0, (function*() {
                                    return yield t.connectToForwardedPort(e)
                                }
                                ))), "connect_to_forwarded_port", n, e)
                            } catch (e) {
                                throw new u.ConnectionError(e.message)
                            }
                        }
                        ))
                    }
                    pushPrivacyOptions(e) {
                        e.forEach((e=>{
                            switch (e) {
                            case p.PortPrivacy.Private:
                                this.features.privacyOptions.push({
                                    id: e.toString(),
                                    label: v.PORT_FORWARDING_PRIVACY_PRIVATE,
                                    themeIcon: "lock"
                                });
                                break;
                            case p.PortPrivacy.Org:
                                this.features.privacyOptions.push({
                                    id: e.toString(),
                                    label: v.PORT_FORWARDING_PRIVACY_PRIVATE_ORG,
                                    themeIcon: "organization"
                                });
                                break;
                            case p.PortPrivacy.Public:
                                this.features.privacyOptions.push({
                                    id: e.toString(),
                                    label: v.PORT_FORWARDING_PRIVACY_PUBLIC,
                                    themeIcon: "eye"
                                })
                            }
                        }
                        ))
                    }
                    setupPortEventListeners() {
                        var e, t;
                        null === (e = this.tunnelClient.forwardedPorts) || void 0 === e || e.onPortAdded((e=>{
                            e.port.remotePort ? (this.trace.verbose(`Received port added event for port ${e.port.remotePort}`),
                            this.tunnels.has(e.port.remotePort) ? this.trace.verbose(`Port ${e.port.remotePort} already exists in the tunnels map, skipping`) : this.addForwardedPort(e.port.remotePort)) : this.trace.verbose("Attempted to add port without remote port value")
                        }
                        )),
                        null === (t = this.tunnelClient.forwardedPorts) || void 0 === t || t.onPortRemoved((e=>{
                            if (e.port.remotePort) {
                                this.trace.verbose(`Received port removed event for port ${e.port.remotePort}`);
                                const t = this.tunnels.get(e.port.remotePort);
                                t ? (t.onDidDisposeEmitter.fire(),
                                this.tunnels.delete(e.port.remotePort)) : this.trace.verbose(`Port ${e.port.remotePort} was not found in the tunnels map, skipping`)
                            } else
                                this.trace.verbose("Attempted to remove port without remote port value")
                        }
                        )),
                        this.listeningForPortEvents = !0
                    }
                    connectTunnelClientWithRetry(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            return yield(0,
                            a.withRetries)((()=>i(this, void 0, void 0, (function*() {
                                yield e.connect(t)
                            }
                            ))), {
                                retries: 2,
                                retryDelay: 250,
                                shouldStopRetries: e=>i(this, void 0, void 0, (function*() {
                                    return /Not connected/.test(e.message) || /disposed/.test(e.message) ? (this.tunnelClient = this.createNewTunnelClient(),
                                    !1) : !this.WebSocketErrorRegex.test(e.message) || (this.tunnelClient = this.createNewTunnelClient(),
                                    !1)
                                }
                                )),
                                isAggregateError: !1
                            })
                        }
                        ))
                    }
                    tunnelClientRetryOnException(e, t, n, o) {
                        return i(this, void 0, void 0, (function*() {
                            return yield(0,
                            a.withRetries)((()=>i(this, void 0, void 0, (function*() {
                                return yield t(e)
                            }
                            ))), {
                                retries: 1,
                                retryDelay: 250,
                                shouldStopRetries: e=>i(this, void 0, void 0, (function*() {
                                    var t;
                                    const r = null == e ? void 0 : e.response;
                                    if (/Not connected/.test(e.message) || /disposed/.test(e.message))
                                        return this.tunnelClient = this.createNewTunnelClient(),
                                        yield this.withConnectedTunnelClient((e=>i(this, void 0, void 0, (function*() {
                                            this.trace.verbose("tunnel client reconnected")
                                        }
                                        ))), "reconnect", n, o),
                                        !1;
                                    if (r && 429 === r.status) {
                                        const e = parseInt(null === (t = r.headers) || void 0 === t ? void 0 : t["x-ms-ratelimit-retry-after"], 10);
                                        return e && (yield(0,
                                        a.wait)(e * a.TIME_SECOND_MS - 250)),
                                        !1
                                    }
                                    return !0
                                }
                                )),
                                isAggregateError: !1
                            })
                        }
                        ))
                    }
                }
                function w(e) {
                    switch (e) {
                    case p.PortPrivacy.Public:
                        return {
                            entries: [t.AllowAnonymousAccess]
                        };
                    case p.PortPrivacy.Private:
                        return {
                            entries: []
                        };
                    case p.PortPrivacy.Org:
                        return {
                            entries: [t.AllowOrgAccess]
                        }
                    }
                }
                function T(e) {
                    const t = e.entries.find((e=>e.type === o.TunnelAccessControlEntryType.Anonymous));
                    if (t && !0 !== t.isDeny)
                        return p.PortPrivacy.Public;
                    const n = e.entries.find((e=>e.provider === r.TunnelAuthenticationSchemes.github));
                    return n && !0 !== n.isDeny ? p.PortPrivacy.Org : p.PortPrivacy.Private
                }
                function _(e) {
                    return /Network Error/.test(e.message) || e instanceof u.WebSocketError || e instanceof u.ConnectionAbortedError ? h.TelemetryResultTypes.UserError : h.TelemetryResultTypes.Failure
                }
                t.DevTunnelProvider = S,
                t.AllowAnonymousAccess = {
                    type: o.TunnelAccessControlEntryType.Anonymous,
                    subjects: [],
                    scopes: ["connect"]
                },
                t.AllowOrgAccess = {
                    type: o.TunnelAccessControlEntryType.Organizations,
                    provider: r.TunnelAuthenticationSchemes.github,
                    subjects: ["1"],
                    scopes: ["connect"]
                },
                t.accessControlToPrivacy = T
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        52104: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(11627), n(1877), n(41750), n(92546), n(65098), n(93871), n(47123), n(44625), n(88338), n(65127), n(85063), n(74856), n(33350), n(92098), n(29566), n(9112), n(67720), n(52588), n(88137), n(13350)],
            r = function(e, t, n, o, r, s, a, c, d, l, u, p, h, f, v, m, g, y, b, C, S, w, T) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getProviders = void 0;
                t.getProviders = (e,t,_,E,P,k,I,O,x,M,j)=>()=>i(void 0, void 0, void 0, (function*() {
                    var A, R;
                    let D, L = new n.Emitter;
                    const F = new s.CodespacesWorkspaceProvider(new URLSearchParams(location.search),P,(e=>e),yield(0,
                    a.getDefaultWorkspacePath)(I))
                      , N = new r.UrlCallbackProvider
                      , W = w.featureFlags.isEnabled(T.FeatureFlags.UseBasisForConnections) && !w.featureFlags.isEnabled(T.FeatureFlags.DevTunnelsOptOutMainConnection)
                      , B = (new S.ResourceUriProvider).resourceUriProviderFactory(W ? void 0 : _, W ? void 0 : ()=>i(void 0, void 0, void 0, (function*() {
                        if (!D || D.isDisposed) {
                            (0,
                            o.assertDefined)(_, "No `ConnectionHub` found"),
                            P = yield O();
                            const n = yield E(P)
                              , [r] = _.childHubs;
                            D = yield _.connect(n, {
                                rpcClient: yield(0,
                                g.getRpcClient)(e, t, r, n)
                            }),
                            L.fire(D)
                        }
                        return D
                    }
                    )), W || null === (A = P.connection) || void 0 === A ? void 0 : A.sessionId)
                      , U = (0,
                    C.getDevTunnelProvider)();
                    j.addToDisposables(U);
                    const H = (0,
                    b.makeDevTunnelExternalUriProvider)(e.createChild("dev-tunnel-external-uri-provider"), U)
                      , $ = (0,
                    c.getWorkbenchDefaultLayout)(P, k.workspaceCustomizations)
                      , V = (0,
                    d.getWorkbenchInitialColorTheme)()
                      , [G,z,q] = yield Promise.all([(0,
                    h.getHomeIndicator)(k), (0,
                    v.getProductConfiguration)(k), (0,
                    f.getDefaultSettings)(k)])
                      , {container_id: K} = P
                      , Q = {
                        secretStorageProvider: new l.SecretStorageProvider(e.createChild("secret-storage-provider"),I),
                        workspaceProvider: F,
                        urlCallbackProvider: N,
                        resourceUriProvider: B,
                        resolveExternalUri: H,
                        settingsSyncOptions: {
                            enabled: (0,
                            u.isSettingsSyncEnabled)(k),
                            extensionsSyncStateVersion: K,
                            enablementHandler: (e,t)=>{
                                localStorage.setItem(p.TLocalStorageKey.SettingsSyncEnabled, `${e}`)
                            }
                            ,
                            authenticationProvider: (0,
                            y.getSettingsSyncAuthenticationProvider)(t, (()=>i(void 0, void 0, void 0, (function*() {
                                return yield I.redirectToLogin(k.managementPortalUrl)
                            }
                            ))), P.name)
                        },
                        tunnelProvider: U,
                        homeIndicator: G,
                        configurationDefaults: q,
                        productConfiguration: z,
                        defaultLayout: $,
                        initialColorTheme: V,
                        commands: (0,
                        m.createCodespacesCommands)(e.createChild("commands"), k, x, t, P, M)
                    };
                    return t.addContextProperty("is-settings-sync-enabled", null === (R = Q.settingsSyncOptions) || void 0 === R ? void 0 : R.enabled),
                    Q
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        29566: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(19266), n(88338), n(47035), n(6731), n(47123)],
            r = function(e, t, n, o, r, s, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getSettingsSyncAuthenticationProvider = void 0;
                t.getSettingsSyncAuthenticationProvider = (e,t,c,d=s.popupCenter)=>({
                    id: "github",
                    signIn: ()=>i(void 0, void 0, void 0, (function*() {
                        let s;
                        e.sendTelemetry([n.CodespacesTelemetryEventNames.SettingsSyncSignInActionStart, {}]);
                        let l = n.TelemetryResultTypes.Failure;
                        const u = document.createElement("form");
                        if (u.target = "auth-frame",
                        u.method = "GET",
                        u.action = r.SETTINGS_SYNC_AUTH_URL,
                        c) {
                            const e = document.createElement("input");
                            e.type = "text",
                            e.name = "codespace_name",
                            e.value = c,
                            u.appendChild(e)
                        }
                        document.body.appendChild(u);
                        const p = d("", u.target, 800, 600)
                          , h = new Promise((e=>{
                            s = e
                        }
                        ));
                        if (p) {
                            u.submit();
                            let r = 120;
                            const c = setInterval((()=>{
                                if (r <= 0)
                                    throw clearInterval(c),
                                    new Error("No response from user");
                                (null == p ? void 0 : p.closed) && (clearInterval(c),
                                l = n.TelemetryResultTypes.Success,
                                s(a.SecretStorageProvider.SettingsSyncServiceId)),
                                r--
                            }
                            ), 500);
                            return yield h.finally((()=>i(void 0, void 0, void 0, (function*() {
                                e.sendTelemetry([n.CodespacesTelemetryEventNames.SettingsSyncSignInActionStop, {
                                    result: l
                                }]),
                                localStorage.removeItem(o.TLocalStorageKey.SettingsSyncEnabled),
                                yield t()
                            }
                            ))))
                        }
                        throw new Error("Failed to authenticate to Settings Sync")
                    }
                    ))
                })
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        23866: (e,t,n)=>{
            var o, r;
            o = [n, t, n(11627), n(8011), n(47035), n(18761)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.productQualityChangeProviderFactory = void 0;
                t.productQualityChangeProviderFactory = (e,t,s=new o.HttpClient(e.createChild("http-client"),{
                    retryCount: 1,
                    timeout: 2 * n.TIME_SECOND_MS
                }))=>(e.createChild("product-quality-handler"),
                o=>{
                    e.verbose(`updating vscode quality to "${o}"`),
                    localStorage.setItem(r.CS_FEATURESET_LOCALSTORAGE_KEY, o),
                    e.verbose(`vscode quality "${o}" set to localstorage`),
                    Promise.all([t.getCachedGithubToken(), t.getPartnerInfo()]).then((([t,r])=>{
                        (0,
                        n.assertDefined)(r, "partnerInfo not defined");
                        const a = r.gitHubApiUrl || "https://api.github.com"
                          , c = (0,
                        i.joinUrl)(a, "vscs_internal/user-settings");
                        return (0,
                        n.assertDefined)(null == t ? void 0 : t.token, "GitHub token is not defined."),
                        e.info(`patching new vscode quality "${o}" to github at "${c}"`),
                        s.patch(c, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${t.token}`
                            },
                            body: JSON.stringify({
                                vscode_channel: o
                            })
                        })
                    }
                    )).then((()=>{
                        e.verbose(`vscode quality "${o}" updated on GitHub`)
                    }
                    )).catch((t=>{
                        e.warning("failed to update vscode quality on GitHub: ", t)
                    }
                    )).finally((()=>{
                        e.info("reloading the page to apply new vscode quality"),
                        window.location.reload()
                    }
                    ))
                }
                )
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        52588: (e,t,n)=>{
            var o, r;
            o = [n, t, n(50777), n(11627), n(47035)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ResourceUriProvider = void 0;
                class i {
                    constructor() {
                        this.resourceUriProviderFactory = (e,t,s)=>{
                            let a;
                            return t && e && (t().then((e=>{
                                a = e
                            }
                            )),
                            e.onConnection((e=>{
                                a = e
                            }
                            ))),
                            e=>{
                                t && ((0,
                                o.assertDefined)(a, "VSCode connection is not established yet"),
                                (0,
                                o.assert)(!a.isDisposed, "VSCode connection is disposed [resourceUriProvider]."),
                                i.setVSCodeConnectionDetails(a.remotePort, a.connectionToken, null != s ? s : a.liveshareConnection.options.workspaceId)),
                                (0,
                                o.assert)(!!i.vscodePort || !!i.connectionToken, "Cannot resolve asset URLs before connection to cloud environment is established.");
                                const c = new URLSearchParams
                                  , d = null != s ? s : i.sessionId;
                                return t && (0,
                                o.assertDefined)(d, "Connection session id is undefined"),
                                c.set("path", e.path),
                                c.set("tkn", i.connectionToken),
                                n.URI.from({
                                    scheme: "https",
                                    authority: window.location.host,
                                    path: `/${r.assetsPathComponent}/${d}/${i.vscodePort}/${r.vscodeRemoteResourcePathComponent}`,
                                    query: c.toString()
                                })
                            }
                        }
                    }
                    static setVSCodeConnectionDetails(e, t, n) {
                        this.vscodePort = e,
                        this.connectionToken = t,
                        this.sessionId = n
                    }
                }
                t.ResourceUriProvider = i
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        47123: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(8957), n(58993), n(27125), n(50648), n(47035)],
            r = function(e, t, n, o, r, s, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SecretStorageProvider = void 0;
                class c {
                    constructor(e, t) {
                        this.trace = e,
                        this.authService = t,
                        this.type = "persisted",
                        this._keyChain = n.localStorageKeychain,
                        this._quality = (0,
                        s.getVSCodeScheme)(),
                        this._githubAuthSecretStorageKey = JSON.stringify({
                            extensionId: a.GH_AUTH_EXTENSION_ID,
                            key: a.GH_ACCOUNT_KEY
                        }),
                        this._defaultAccountKey = `${this._quality}.loginAccount`
                    }
                    get(e) {
                        return i(this, void 0, void 0, (function*() {
                            const t = yield this.getTokenFromVScodeSettings(e)
                              , n = this.generateGenericLocalStorageKey(e)
                              , r = yield this._keyChain.get(n);
                            return r.succeeded && r.result ? e === this._githubAuthSecretStorageKey && t ? (this.trace.verbose("Found password in partner info strategy as well. Merging results."),
                            (0,
                            o.mergeSecretStorageGitHubAuthSessions)(r.result, t, this.trace)) : r.result : t
                        }
                        ))
                    }
                    set(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            const n = this.generateGenericLocalStorageKey(e);
                            yield this._keyChain.set(n, t)
                        }
                        ))
                    }
                    delete(e) {
                        return i(this, void 0, void 0, (function*() {
                            const t = this.generateGenericLocalStorageKey(e);
                            yield this._keyChain.delete(t)
                        }
                        ))
                    }
                    generateGenericLocalStorageKey(e) {
                        return `vsonline.keytar.${this._quality}.${e}`
                    }
                    getTokenFromVScodeSettings(e) {
                        return i(this, void 0, void 0, (function*() {
                            if (e !== this._githubAuthSecretStorageKey && e !== this._defaultAccountKey)
                                return;
                            const t = yield this.authService.getPartnerInfo()
                              , n = null == t ? void 0 : t.vscodeSettings;
                            if (!n)
                                return;
                            const o = n.defaultAuthSessions;
                            if (!o)
                                return;
                            if (e === this._githubAuthSecretStorageKey) {
                                const e = (0,
                                r.getSessionsByType)(o, "github");
                                return JSON.stringify(e)
                            }
                            const i = n.authenticationSessionId;
                            if (void 0 === i)
                                return;
                            const s = (0,
                            r.getSessionsById)(o, i);
                            if (s) {
                                const {id: e, type: t, accessToken: n} = s;
                                return JSON.stringify({
                                    id: e,
                                    providerId: t,
                                    accessToken: n
                                })
                            }
                        }
                        ))
                    }
                }
                t.SecretStorageProvider = c,
                c.SettingsSyncServiceId = "github-session-sync-service"
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        77082: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ServerlessWorkspaceProvider = void 0;
                t.ServerlessWorkspaceProvider = class {
                    constructor(e, t) {
                        this.uri = e,
                        this.targetURLFactory = t,
                        this.trusted = !0,
                        this.isWorkspace = e.includes(".code-workspace")
                    }
                    get workspace() {
                        return {
                            [this.isWorkspace ? "workspaceUri" : "folderUri"]: n.URI.parse(this.uri)
                        }
                    }
                    open(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            const n = e;
                            if (n && n.folderUri && this.targetURLFactory) {
                                const e = this.targetURLFactory(n.folderUri);
                                if (e) {
                                    if (!t || t.reuse)
                                        return window.location.href = e.href,
                                        !0;
                                    return !!window.open(e.href, "_blank")
                                }
                            }
                            return !1
                        }
                        ))
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        84992: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SplashScreenCommunicationProvider = void 0;
                t.SplashScreenCommunicationProvider = class {
                    constructor(e=(()=>{}
                    )) {
                        window.addEventListener("message", (t=>{
                            t.origin === window.origin && e(t)
                        }
                        ), !1)
                    }
                    writeToTerminalOutput(e, t) {
                        try {
                            window.postMessage({
                                terminal: {
                                    id: e,
                                    message: t
                                }
                            }, window.origin)
                        } catch (e) {}
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        33972: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TerminalCommunicationProvider = void 0;
                t.TerminalCommunicationProvider = class {
                    constructor(e) {
                        this.writer = e
                    }
                    writeToTerminalOutput(e, t) {
                        try {
                            this.writer.fire(t)
                        } catch (e) {}
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        1877: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(50777), n(52830), n(81681), n(50648)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                var s;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.UrlCallbackProvider = t.callbackSymbol = void 0,
                n = a(n),
                o = a(o),
                t.callbackSymbol = Symbol("URICallbackSymbol");
                t.UrlCallbackProvider = class {
                    constructor() {
                        this.callbackSymbol = t.callbackSymbol,
                        this[s] = new n.Emitter,
                        this.extensionCallbackPath = "/extension-auth-callback",
                        this.expectedNonceMap = new Map,
                        this.onStorage = e=>{
                            const {key: o, newValue: s} = e;
                            if (!o || !s)
                                return;
                            const [a,c] = o.split("::");
                            if (!a || "vsonline.redirect.url" !== c)
                                return;
                            const d = this.expectedNonceMap.get(a);
                            if (!d)
                                return;
                            localStorage.removeItem(o),
                            this.expectedNonceMap.delete(a);
                            const l = s
                              , u = (0,
                            r.getQueryParams)(l)
                              , p = n.URI.from({
                                authority: d.authority,
                                query: u.toString(),
                                scheme: (0,
                                i.getVSCodeScheme)(),
                                path: d.path,
                                fragment: ""
                            });
                            this[t.callbackSymbol].fire(p)
                        }
                        ,
                        this.onCallback = this[t.callbackSymbol].event,
                        window.addEventListener ? window.addEventListener("storage", this.onStorage, !1) : window.attachEvent("onstorage", this.onStorage)
                    }
                    generateUrlCallbackParams(e, t, n) {
                        const r = o.default(16).toString("hex");
                        this.expectedNonceMap.set(r, {
                            authority: e,
                            path: t
                        });
                        const i = new URLSearchParams(n);
                        return i.append("state", r),
                        i.toString()
                    }
                    create(e) {
                        if (!e)
                            throw new Error('No "options" set.');
                        const {authority: t, path: o="/", query: r=""} = e;
                        if (!t)
                            throw new Error('No "authority" set.');
                        return n.URI.from({
                            scheme: location.protocol.replace(/\:/g, ""),
                            path: this.extensionCallbackPath,
                            authority: location.host,
                            query: this.generateUrlCallbackParams(t, o, r),
                            fragment: e.fragment || ""
                        })
                    }
                }
                ,
                s = t.callbackSymbol
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        90555: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(14850), n(17801)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.WebEditorWorkspaceProvider = void 0;
                t.WebEditorWorkspaceProvider = class {
                    constructor(e, t, o) {
                        this.params = e,
                        this.UriToOpen = t,
                        this.trace = o,
                        this.trusted = !0;
                        if ("true" === e.get("workspace")) {
                            const e = n.URI.revive(t.uri);
                            this.workspace = {
                                workspaceUri: e
                            }
                        } else {
                            const e = n.URI.revive(t.uri);
                            this.workspace = {
                                folderUri: e
                            }
                        }
                    }
                    isFolderToOpen(e) {
                        return e.folderUri instanceof n.URI
                    }
                    isWorkspaceToOpen(e) {
                        return e.workspaceUri instanceof n.URI
                    }
                    resolveGithubFolderURI(e) {
                        if ("vscode-vfs" !== e.scheme)
                            throw new Error(`URI scheme not supported: ${e.scheme}`);
                        const t = new URL(location.href)
                          , n = (0,
                        o.decodeAuthority)(e.authority, this.trace).metadata;
                        return t.pathname = e.path,
                        t.hash = "",
                        t.search = "",
                        (0,
                        r.appendGithubMetaDatatoPathName)(t, n),
                        t.toString()
                    }
                    resolveGitHubWorkspaceURI(e) {
                        var t;
                        if ("vscode-vfs" !== e.scheme)
                            throw new Error(`URI scheme not supported: ${e.scheme}`);
                        const n = new URL(location.href);
                        let r = "";
                        const i = (0,
                        o.decodeAuthority)(e.authority, this.trace).metadata
                          , [,s,a] = e.path.split("/");
                        s && a && (r = `/${s}/${a}`);
                        let c = e.path.replace(r, "");
                        return n.pathname = r,
                        n.hash = "",
                        n.search = "",
                        n.pathname += `/blob/${null === (t = null == i ? void 0 : i.ref) || void 0 === t ? void 0 : t.id}`,
                        c && (n.pathname += c),
                        n.toString()
                    }
                    open(e) {
                        return i(this, void 0, void 0, (function*() {
                            let t, n;
                            if (this.isFolderToOpen(e))
                                try {
                                    return t = this.resolveGithubFolderURI(e.folderUri),
                                    location.href = t,
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            else if (this.isWorkspaceToOpen(e))
                                try {
                                    return n = new URL(this.resolveGitHubWorkspaceURI(e.workspaceUri)),
                                    n.searchParams.set("workspace", "true"),
                                    this.tryOpenNewTab(n)
                                } catch (e) {
                                    return !1
                                }
                            return !1
                        }
                        ))
                    }
                    tryOpenNewTab(e) {
                        const t = window.open();
                        return !!t && (t.opener = null,
                        t.location.href = e.href,
                        !0)
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        10096: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(92126), n(44551)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.BrowserSyncService = void 0;
                t.BrowserSyncService = class {
                    constructor(e, t) {
                        this.trace = e,
                        this.sourceEventService = t,
                        this.browserConnectorServiceInitCompletionPromise = new n.PromiseCompletionSource,
                        this.sourceEventService.onEvent((e=>{
                            this.onSourceEvent(e)
                        }
                        ))
                    }
                    getInitializationPromise() {
                        return this.browserConnectorServiceInitCompletionPromise.promise
                    }
                    sendMessage(e, t) {
                        return i(this, void 0, void 0, (function*() {
                            if (!this.sourceEventService)
                                throw new Error("Init the `BrowserConnector` first!");
                            return yield this.getInitializationPromise(),
                            yield this.sourceEventService.fireEventAsync(e, JSON.stringify(t))
                        }
                        ))
                    }
                    onSourceEvent(e) {
                        return i(this, void 0, void 0, (function*() {
                            if (e.sourceId === o.BrowserConnectorMessages.BrowserConnectorServiceInitialized)
                                this.trace.verbose("Browser sync service initialized"),
                                this.browserConnectorServiceInitCompletionPromise.resolve()
                        }
                        ))
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        4060: (e,t,n)=>{
            var o, r;
            o = [n, t, n(51377), n(48160)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.dropServiceWorkerConnection = void 0;
                t.dropServiceWorkerConnection = (e=n.postServiceWorkerMessage)=>{
                    e({
                        type: o.disconnectCurrentMessageType
                    })
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        51377: (e,t,n)=>{
            var o, r;
            o = [n, t, n(41695)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.postServiceWorkerMessage = void 0;
                const o = n.mainTrace.createChild("post-message");
                t.postServiceWorkerMessage = function e(t, n=function() {
                    return window.navigator && window.navigator.serviceWorker && window.navigator.serviceWorker.controller
                }(), i=!0) {
                    if (navigator.serviceWorker) {
                        if (!n || "activated" !== n.state && "activating" !== n.state)
                            return o.warning("cannot send message to unavailable worker", {
                                message: t.type
                            }),
                            i && 0 === r.length && navigator.serviceWorker.ready.then((t=>{
                                for (const n of r)
                                    e(n, t.active, !1);
                                r = []
                            }
                            )),
                            void (i && r.push(t));
                        o.verbose("Sending message to service worker.", {
                            message: t.type
                        }),
                        n.postMessage(t)
                    } else
                        o.warning("Service worker not supported")
                }
                ;
                let r = []
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        2509: (e,t,n)=>{
            var o, r;
            o = [n, t, n(45895)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.registerServiceWorker = void 0;
                t.registerServiceWorker = (e,t)=>(0,
                n.register)({
                    passthroughUrls: [{
                        host: location.origin
                    }],
                    useDevTunnels: t
                }).catch((t=>{
                    e.createChild("service-worker-registration").warning("error while registering servive worker", t)
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        45895: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11627), n(50777), n(14243), n(51377), n(48160), n(41695)],
            r = function(e, t, n, o, r, s, a, c) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.onMessage = t.unregister = t.unregisterOldServiceWorkers = t.messageHandler = t.register = void 0,
                "undefined" == typeof window && (globalThis.window = globalThis),
                "undefined" == typeof document && (globalThis.document = {
                    createElement(e) {
                        if ("a" === e)
                            return new URL(location.href)
                    }
                });
                const d = c.mainTrace.createChild("service-worker-installer")
                  , l = new o.Emitter
                  , u = l.event;
                t.register = e=>i(void 0, void 0, void 0, (function*() {
                    d.verbose("registering service worker", e),
                    "serviceWorker"in navigator && (d.verbose("registering valid service worker"),
                    yield function(e, n) {
                        return i(this, void 0, void 0, (function*() {
                            yield p();
                            try {
                                navigator.serviceWorker.addEventListener("controllerchange", (()=>{
                                    d.verbose("New service worker version is controlling this client.")
                                }
                                )),
                                navigator.serviceWorker.addEventListener("message", (e=>{
                                    (0,
                                    t.messageHandler)(e, n)
                                }
                                ));
                                const o = yield navigator.serviceWorker.register(e);
                                o.addEventListener("updatefound", (()=>{
                                    d.verbose("Update found."),
                                    (0,
                                    s.postServiceWorkerMessage)({
                                        type: a.configureServiceWorker,
                                        payload: n
                                    }, o.installing || o.waiting)
                                }
                                )),
                                (0,
                                s.postServiceWorkerMessage)({
                                    type: a.configureServiceWorker,
                                    payload: n
                                }, o.active || o.installing)
                            } catch (e) {}
                        }
                        ))
                    }("/service-worker.js", e),
                    setInterval((()=>{
                        d.verbose("ping"),
                        (0,
                        s.postServiceWorkerMessage)({
                            type: a.pingMessageType
                        })
                    }
                    ), 10 * n.TIME_SECOND_MS))
                }
                ));
                function p() {
                    return i(this, void 0, void 0, (function*() {
                        const e = (yield navigator.serviceWorker.getRegistrations()).map((e=>{
                            if (e.active || e.waiting || e.installing)
                                return e
                        }
                        )).filter(r.isDefined);
                        0 !== e.length ? (yield Promise.all(e.map((e=>{
                            e.unregister()
                        }
                        ))),
                        d.verbose("the service worker has been unregistered")) : d.verbose("no service workers to unregister")
                    }
                    ))
                }
                t.messageHandler = (e,t)=>{
                    const n = e.data.type;
                    (0,
                    a.isServiceWorkerMessage)(e.data) && (n !== a.tryConfigureMessageType ? l.fire(e.data) : (0,
                    s.postServiceWorkerMessage)({
                        type: a.configureServiceWorker,
                        payload: t
                    }))
                }
                ,
                t.unregisterOldServiceWorkers = p,
                t.unregister = function() {
                    "serviceWorker"in navigator && navigator.serviceWorker.ready.then((e=>{
                        e.unregister()
                    }
                    ))
                }
                ,
                t.onMessage = function(e) {
                    return u(e)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        48160: (e,t,n)=>{
            var o, r;
            o = [n, t, n(14243)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isServiceWorkerMessage = t.pongMessageType = t.pingMessageType = t.tryConfigureMessageType = t.disconnectCurrentMessageType = t.connectToVSCodeMessageType = t.setVSCodeServerPortMessageType = t.connectToLiveShareMessageType = t.configureDevTunnelConnectionMessageType = t.configureServiceWorker = void 0,
                t.configureServiceWorker = "codespaces/configure",
                t.configureDevTunnelConnectionMessageType = "codespaces/configure-dev-tunnel-connection",
                t.connectToLiveShareMessageType = "vscs/connect-to-live-share",
                t.setVSCodeServerPortMessageType = "codespaces/set-vscode-server-port",
                t.connectToVSCodeMessageType = "vscs/connect-to-vscode",
                t.disconnectCurrentMessageType = "vscs/disconnect-current",
                t.tryConfigureMessageType = "codespaces/tryConfigure",
                t.pingMessageType = "vscs/ping",
                t.pongMessageType = "vscs/pong",
                t.isServiceWorkerMessage = function(e) {
                    return (0,
                    n.isDefined)(e.type)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        41695: (e,t,n)=>{
            var o, r;
            o = [n, t, n(11627), n(93816)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.mainTrace = void 0;
                const r = (0,
                n.randomString)(2);
                t.mainTrace = n.globalTrace.createChild(`sw-client:${r}`),
                t.mainTrace.addTraceListener(new o.BrowserConsoleTraceListener),
                o.DebugConsoleLogger.enable(n.globalTrace.name)
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        47542: (e,t,n)=>{
            var o, r;
            o = [n, t, n(11627), n(98221)],
            r = function(e, t, n, o) {
                "use strict";
                var r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.StateHistoryTracker = t.TAppStates = void 0,
                function(e) {
                    e.AppInitialization = "AppInitialization",
                    e.AppUnload = "AppUnload"
                }(r || (t.TAppStates = r = {}));
                class i extends n.DisposableClass {
                    constructor() {
                        super(...arguments),
                        this.states = []
                    }
                    cleanupError(e) {
                        return (0,
                        o.errorToObject)(e)
                    }
                    addState(e, t) {
                        const n = this.states[this.states.length - 1];
                        return (!n || n.state !== e || n.error !== t) && (this.states.push({
                            state: e,
                            error: t && this.cleanupError(t),
                            timestamp: this.currentTime,
                            dateTimestamp: this.currentDateTime
                        }),
                        !0)
                    }
                    get state() {
                        let e = 0;
                        const t = {};
                        for (let n of this.states)
                            t["State" + e++] = JSON.stringify(Object.assign({}, n));
                        return t
                    }
                    get currentTime() {
                        return parseFloat(performance.now().toFixed(3))
                    }
                    get currentDateTime() {
                        return parseFloat(Date.now().toFixed(3))
                    }
                }
                t.StateHistoryTracker = i
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        1240: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.PropertiesTelemetryEvent = void 0;
                t.PropertiesTelemetryEvent = class {
                    constructor(e) {
                        const t = e[0]
                          , n = e[1];
                        this.name = t,
                        this.properties = Object.assign(Object.assign({}, n), {
                            timestamp: performance.now(),
                            dateTimestamp: Date.now()
                        })
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        54852: (e,t,n)=>{
            var o, r;
            o = [n, t, n(118), n(11627), n(32655), n(43026), n(50454)],
            r = function(e, t, n, o, r, i, s) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TelemetryService = t.TELEMETRY_KEY = void 0,
                t.TELEMETRY_KEY = "AIF-d9b70cd4-b9f9-4d70-929b-a071c400b217";
                let a = 0;
                class c extends o.DisposableClass {
                    get browserId() {
                        try {
                            let e = window.localStorage.getItem("codespaces_machine_id");
                            return e || (e = (0,
                            o.randomString)(),
                            window.localStorage.setItem("codespaces_machine_id", e)),
                            e
                        } catch (e) {
                            return this.trace.error("Failed to get session id.", {
                                error: e
                            }),
                            (0,
                            o.randomString)()
                        }
                    }
                    constructor(e, t) {
                        super(e.createChild("telemetry-service")),
                        this.addContextProperty = (e,t)=>(this.context[e] = t,
                        this),
                        this.addContextProperties = e=>{
                            for (let[t,n] of Object.entries(e))
                                this.addContextProperty(t, n);
                            return this
                        }
                        ,
                        this.send = e=>{
                            let t = Object.assign(Object.assign({}, this.context), {
                                date: new Date,
                                sequenceNumber: ++a,
                                telemetryEventId: (0,
                                o.randomString)()
                            });
                            t = (0,
                            s.prefixPropertyNames)(t, "codespaces.web.common");
                            const n = (0,
                            s.serializeTelemetry)(e, t);
                            this.trace.verbose("track", e.name),
                            n.send()
                        }
                        ;
                        const n = (0,
                        r.detect)();
                        this.context = Object.assign({
                            browserId: this.browserId,
                            sessionId: this.getSessionId(),
                            pageLoadId: this.getPageLoadId(),
                            host: (0,
                            i.excludeSubdomain)(location.host),
                            browserName: n && n.name || "<unknown>",
                            browserVersion: n && n.version || "<unknown>",
                            browserOS: n && n.os || "<unknown>",
                            vscodeCommit: "<unknown>",
                            vscodeQuality: "<unknown>"
                        }, t),
                        this.trace.info("initialize", JSON.stringify(this.context, null, 2))
                    }
                    getContextValue(e) {
                        return this.context[e]
                    }
                    getSessionId() {
                        try {
                            let e = window.sessionStorage.getItem("codespaces_sessionId");
                            return e || (e = (0,
                            o.randomString)(),
                            window.sessionStorage.setItem("codespaces_sessionId", e)),
                            e
                        } catch (e) {
                            return this.trace.error("Failed to get session id.", {
                                error: e
                            }),
                            (0,
                            o.randomString)()
                        }
                    }
                    getPageLoadId() {
                        return (0,
                        o.randomString)()
                    }
                    flush() {
                        this.trace.verbose("flushing events"),
                        n.Telemetry.dispose()
                    }
                }
                t.TelemetryService = c
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        7490: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(118), n(11792), n(54852), n(47542), n(6017), n(4147), n(1240), n(19266), n(21714), n(13350), n(88137), n(55409), n(83714), n(47035), n(26487), n(29951)],
            r = function(e, t, n, o, r, s, a, c, d, l, u, p, h, f, v, m, g, y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.configureTelemetryProperties = t.CodespacesTelemetryService = void 0,
                c = i(c);
                class b extends r.TelemetryService {
                    constructor(e, t, o, r, i, c, d, l) {
                        c.workbenchType = r,
                        c.editor = t,
                        super(e, c),
                        this.config = o,
                        this.workbenchType = r,
                        this.requestId = i,
                        this.performance = d,
                        this.bootstrapDuration = l,
                        this.stateHistoryTracker = new s.StateHistoryTracker(this.trace.createChild("telemetry:state-history-tracker")),
                        this.initialize = ()=>{
                            n.Telemetry.init((0,
                            g.createOneDSTelemetryReporter)(this.config.iKey, this.workbenchType).create()),
                            this.recordAppState(s.TAppStates.AppInitialization),
                            a.onbeforeunloadEventsManager.onEvent((()=>{
                                this.recordAppState(s.TAppStates.AppUnload),
                                this.flush()
                            }
                            ))
                        }
                        ,
                        this.initialize()
                    }
                    sendPerformanceTelemetry() {
                        var e, t, n, o, r, i, s, a, c, d;
                        const u = {
                            bootstrap: this.bootstrapDuration,
                            reactInitToVSCodeCreate: null !== (t = null === (e = this.performance.main.getBlockMeasure(y.PerformanceEventIds.ReactInitToVSCodeCreate)) || void 0 === e ? void 0 : e.measure.duration) && void 0 !== t ? t : -1,
                            vsCodeCreateToVSCodeLoaded: null !== (o = null === (n = this.performance.main.getBlockMeasure(y.PerformanceEventIds.VSCodeCreateToVSCodeLoaded)) || void 0 === n ? void 0 : n.measure.duration) && void 0 !== o ? o : -1,
                            vsCodeLoadedToEditors: null !== (i = null === (r = this.performance.main.getBlockMeasure(y.PerformanceEventIds.VSCodeLoadedToEditors)) || void 0 === r ? void 0 : r.measure.duration) && void 0 !== i ? i : -1,
                            editorsToExtensionActivation: null !== (a = null === (s = this.performance.main.getBlockMeasure(y.PerformanceEventIds.EditorsToExtensionActivation)) || void 0 === s ? void 0 : s.measure.duration) && void 0 !== a ? a : -1,
                            idleToAvailable: null !== (d = null === (c = this.performance.main.getBlockMeasure(y.PerformanceEventIds.IdleToAvailable)) || void 0 === c ? void 0 : c.measure.duration) && void 0 !== d ? d : -1
                        };
                        this.sendTelemetry([l.CodespacesTelemetryEventNames.WebOverallPerformance, u]),
                        this.trace.verbose(`overall-performance ${JSON.stringify(u)}`)
                    }
                    sendTelemetry(e) {
                        let t = new d.PropertiesTelemetryEvent(e);
                        "string" == typeof t.properties.stack && (this.trace.error(JSON.stringify(e)),
                        t.properties.stack = (0,
                        v.cleanupPII)(t.properties.stack)),
                        this.send(t)
                    }
                    addConfigContextProperties(e={}) {
                        for (let e of Object.values(p.FeatureFlags))
                            this.addContextProperty(`feature-flag.${e}`, h.featureFlags.isEnabled(e));
                        this.addContextProperties(e)
                    }
                    recordAppState(e, t, n=(()=>!1)) {
                        var o;
                        const r = this.stateHistoryTracker.addState(e, t);
                        this.addContextProperties(this.stateHistoryTracker.state);
                        const i = [s.TAppStates.AppInitialization, s.TAppStates.AppUnload].includes(e)
                          , a = null !== (o = localStorage.getItem(`${m.AUTH_ATTEMPTS_COUNT_LOCALSTORAGE_KEY}_${this.requestId}`)) && void 0 !== o ? o : void 0;
                        if (r && (n() || i)) {
                            const t = (0,
                            f.isCodespaceWorkbenchType)(this.workbenchType) ? l.CodespacesTelemetryEventNames.WebAppStateChanged : l.CodespacesTelemetryEventNames.WebEditorAppStateChanged;
                            this.sendTelemetry([t, {
                                state: e,
                                authAttempts: a
                            }])
                        }
                        return this
                    }
                    webEditorAction(e, t, n, o) {
                        const r = {
                            action: l.TelemetryActionTypes.Connect,
                            correlationId: n,
                            environment: o,
                            errorMessage: (0,
                            v.cleanupPII)(t.errorMessage),
                            errorDetail: (0,
                            v.cleanupPII)(t.errorDetail),
                            result: t.result,
                            refType: t.refType
                        };
                        this.sendTelemetry([e, r])
                    }
                }
                t.CodespacesTelemetryService = b;
                t.configureTelemetryProperties = (e,t)=>{
                    const n = (0,
                    u.getVSCodeVersion)(e.vscodeVersionInfo, h.featureFlags.isEnabled(p.FeatureFlags.Developer))
                      , r = e.vscodeVersionInfo
                      , i = (0,
                    o.v4)()
                      , s = navigator.cookieEnabled;
                    return {
                        portalName: c.default.name,
                        version: e.version,
                        vscodeCommit: n.commit,
                        vscodeQuality: n.quality,
                        stableVSCodeCommitId: r.stable.commit,
                        insiderVSCodeCommitId: r.insider.commit,
                        serviceLocation: e.serviceLocation,
                        serviceInstance: e.serviceInstance,
                        environment: e.environment,
                        sessionId: i,
                        serverCorrelationId: t,
                        cookiesEnabled: s
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        26487: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(72854), n(66624)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.createOneDSTelemetryReporter = void 0,
                n = a(n),
                o = a(o),
                t.createOneDSTelemetryReporter = function(e, t) {
                    return {
                        create: ()=>{
                            const r = new n.AppInsightsCore
                              , i = new o.PostChannel
                              , s = {
                                instrumentationKey: e,
                                endpointUrl: "/diagnostic",
                                loggingLevelTelemetry: 0,
                                loggingLevelConsole: 0,
                                disableCookiesUsage: !0,
                                disableDbgExt: !0,
                                disableInstrumentationKeyValidation: !0,
                                channels: [[i]]
                            };
                            return r.initialize(s, []),
                            r.addTelemetryInitializer((e=>{
                                var t, n;
                                e.ext = null !== (t = e.ext) && void 0 !== t ? t : {},
                                e.ext.utc = null !== (n = e.ext.utc) && void 0 !== n ? n : {},
                                e.ext.utc.flags = 8462029
                            }
                            )),
                            {
                                sendTelemetryEvent: (e,n,o)=>{
                                    r.track({
                                        name: e,
                                        baseData: {
                                            name: e,
                                            properties: n,
                                            measurements: o,
                                            client: `web-${t}`
                                        }
                                    })
                                }
                                ,
                                dispose: ()=>r.unload()
                            }
                        }
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        50454: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(118), n(61320), n(40156)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.prefixPropertyNames = t.serializeTelemetry = void 0,
                o = i(o);
                const s = ["Action", "Result", "RootActivityId"];
                function a(e, t) {
                    return Object.keys(e).reduce(((n,o)=>{
                        const r = s.includes(o) ? {
                            [`${o}`]: e[o]
                        } : {
                            [`${t}.${o}`]: e[o]
                        };
                        return Object.assign(Object.assign({}, n), r)
                    }
                    ), {})
                }
                t.serializeTelemetry = function(e, t, i="codespaces.web.event") {
                    const s = new n.TelemetryEvent(e.name)
                      , c = Object.assign(Object.assign({}, t), i ? a(e.properties, i) : e.properties);
                    for (const [e,t] of Object.entries(c))
                        if (void 0 === t)
                            s.addProperty(e, "undefined");
                        else if (null === t)
                            s.addProperty(e, "null");
                        else if ((0,
                        r.isNumber)(t))
                            s.addMeasure(e, t);
                        else if (t instanceof Date) {
                            const n = (0,
                            o.default)(t).utc().format("YYYY-MM-DD HH:mm:ss.SSS");
                            s.addProperty(e, n)
                        } else
                            t instanceof Error ? s.addProperty(e, t.message) : "boolean" == typeof t ? s.addProperty(e, t.toString()) : s.addProperty(e, t);
                    return s
                }
                ,
                t.prefixPropertyNames = a
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        76545: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CodespacesQueryParams = void 0,
                function(e) {
                    e.AutoStart = "autoStart",
                    e.AutoAuthRedirect = "autoConnect",
                    e.VSCodeChannel = "vscodeChannel",
                    e.VSCodeCommitId = "vscodeCommitId",
                    e.CodespaceId = "codespaceId",
                    e.LoadingScreenThemeColor = "loadingScreenThemeColor",
                    e.EditSessionId = "editSessionId",
                    e.Editor = "editor"
                }(n || (t.CodespacesQueryParams = n = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        88338: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TLocalStorageKey = void 0,
                function(e) {
                    e.SettingsSyncEnabled = "codespaces-settings-sync-enabled"
                }(n || (t.TLocalStorageKey = n = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        95009: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TPortType = void 0,
                function(e) {
                    e.Internal = "InternalPort",
                    e.User = "UserForwardedPort"
                }(n || (t.TPortType = n = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        44551: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.BrowserConnectorMessages = void 0,
                function(e) {
                    e.BrowserConnectorServiceInitialized = "codespaces:browser-connector-service-initialized",
                    e.SessionDisconnections = "codespaces:session-disconnections"
                }(n || (t.BrowserConnectorMessages = n = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        5604: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.shaRegex = t.refTypeToString = t.RepositoryRefType = t.githubAuthorityMetadataSchemaVersion = t.githubRepositoryRegex = void 0,
                t.githubRepositoryRegex = /^\/(?<owner>[^/]+)\/(?<repo>[^/?#]+)(?:|\.git|\/tree\/(?<tree>[^?#]+)|\/blob\/(?<blob>[^?#]+)|\/commit\/(?<commit>[0-9a-f]{40})|\/pull\/(?<pull>[0-9]+))?(?<extra>[^?#]*)(?:\?(?<query>[^#]*))?(?:#(?<fragment>.*))?$/i,
                t.githubAuthorityMetadataSchemaVersion = 1,
                function(e) {
                    e[e.Branch = 0] = "Branch",
                    e[e.Tag = 1] = "Tag",
                    e[e.Commit = 2] = "Commit",
                    e[e.PullRequest = 3] = "PullRequest",
                    e[e.Tree = 4] = "Tree",
                    e[e.Blob = 5] = "Blob",
                    e[e.Root = 6] = "Root"
                }(n || (t.RepositoryRefType = n = {}));
                t.refTypeToString = e=>{
                    switch (e) {
                    case n.Branch:
                        return "Branch";
                    case n.Tag:
                        return "Tag";
                    case n.Commit:
                        return "Commit";
                    case n.PullRequest:
                        return "PullRequest";
                    case n.Tree:
                        return "Tree";
                    case n.Root:
                        return "Root";
                    default:
                        return "Unknown"
                    }
                }
                ,
                t.shaRegex = /^[0-9a-f]{40}$/i
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        31330: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                var n, o;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.RepoType_QueryParam = t.GitHubURLType = void 0,
                function(e) {
                    e[e.File = 0] = "File",
                    e[e.Folder = 1] = "Folder",
                    e[e.Workspace = 2] = "Workspace"
                }(n || (t.GitHubURLType = n = {})),
                function(e) {
                    e.GitHub = "GitHub",
                    e.AzureDevOps = "AzureDevOps"
                }(o || (t.RepoType_QueryParam = o = {}))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        6017: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(50777)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.onbeforeunloadEventsManager = t.DOMEventsManager = void 0,
                n = a(n);
                class o {
                    constructor() {
                        this.emitter = new n.Emitter,
                        this.onEvent = this.emitter.event,
                        this.onEventCallback = ()=>{
                            this.emitter.fire(),
                            this.dispose()
                        }
                        ,
                        window.addEventListener("beforeunload", this.onEventCallback)
                    }
                    dispose() {
                        window.removeEventListener("beforeunload", this.onEventCallback)
                    }
                }
                t.DOMEventsManager = o,
                t.onbeforeunloadEventsManager = new o
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        20523: (e,t,n)=>{
            var o, r;
            o = [n, t, n(29499)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.addLatencyDetailsToEvent = void 0,
                t.addLatencyDetailsToEvent = function(e) {
                    const t = n.connectionMetricsLogger.getMostRecentLatency();
                    return e.currentLatency = null == t ? void 0 : t.current,
                    e.maxLatency = null == t ? void 0 : t.max,
                    e.avgLatency = null == t ? void 0 : t.average,
                    e
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        17801: (e,t,n)=>{
            var o, r;
            o = [n, t, n(5604)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.appendGithubMetaDatatoPathName = void 0,
                t.appendGithubMetaDatatoPathName = function(e, t) {
                    var o;
                    switch (null === (o = null == t ? void 0 : t.ref) || void 0 === o ? void 0 : o.type) {
                    case n.RepositoryRefType.PullRequest:
                        e.pathname += `/pull/${t.ref.id}`;
                        break;
                    case n.RepositoryRefType.Tree:
                        e.pathname += `/tree/${t.ref.id}`;
                        break;
                    case n.RepositoryRefType.Blob:
                        e.pathname += `/blob/${t.ref.id}`;
                        break;
                    case n.RepositoryRefType.Commit:
                        e.pathname += `/commit/${t.ref.id}`;
                        break;
                    case n.RepositoryRefType.Root:
                        e.pathname += `/blob/${t.ref.id}`
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        69199: (e,t,n)=>{
            var o, r;
            o = [n, t, n(32655)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isIncompatibleBrowserVersion = t.unsupportedBrowserVersionMessage = void 0;
                const o = (0,
                n.detect)();
                t.unsupportedBrowserVersionMessage = "This browser is out of date. Please update your browser to continue working with Codespaces.",
                t.isIncompatibleBrowserVersion = function() {
                    var e;
                    if ((null == o ? void 0 : o.name) && (null == o ? void 0 : o.version)) {
                        const t = null === (e = o.version) || void 0 === e ? void 0 : e.split(".", 1)[0]
                          , n = t ? parseInt(t) : 80;
                        return "chrome" === o.name && n < 80
                    }
                    return !1
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        27346: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.bufferToArrayBuffer = void 0;
                t.bufferToArrayBuffer = e=>{
                    const t = new ArrayBuffer(e.length)
                      , n = new Uint8Array(t);
                    for (let t = 0; t < e.length; ++t)
                        e[t] && (n[t] = e[t]);
                    return t
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        9010: (e,t,n)=>{
            var o, r;
            o = [n, t, n(27593), n(50162), n(76545), n(34545)],
            r = function(e, t, n, o, r, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.codespaceStateToButton = void 0;
                t.codespaceStateToButton = (e,t,s,a)=>{
                    if (s instanceof n.AuthenticationError) {
                        return {
                            text: s instanceof n.AuthenticationFatalError ? "Try again" : "Connect",
                            onClick: ()=>{
                                localStorage.removeItem(t),
                                (0,
                                i.deleteQueryParamFlag)(r.CodespacesQueryParams.AutoAuthRedirect)
                            }
                        }
                    }
                    switch (e) {
                    case o.CodespaceStateInfo.Shutdown:
                        return {
                            text: "Restart codespace",
                            onClick: ()=>{
                                null == a || a.startCodespace(!0)
                            }
                        };
                    case o.CodespaceStateInfo.Exporting:
                    case o.CodespaceStateInfo.Updating:
                        return {
                            text: "Try again",
                            onClick: ()=>{
                                (0,
                                i.deleteQueryParamFlag)(r.CodespacesQueryParams.AutoStart)
                            }
                        }
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        20932: (e,t,n)=>{
            var o, r;
            o = [n, t, n(27593), n(50162), n(95456)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.codespaceStateToMessage = void 0;
                t.codespaceStateToMessage = (e,t)=>{
                    if (t)
                        return (e=>e instanceof n.AuthenticationFatalError ? "Failed to connect to the codespace." : "Refreshing credentials.")(t);
                    switch (e) {
                    case o.CodespaceStateInfo.ShuttingDown:
                        return "Stopping codespace...";
                    case o.CodespaceStateInfo.Updating:
                        return "Codespace is being updated, you will need to wait for a few minutes for the operation to finish";
                    case o.CodespaceStateInfo.Exporting:
                        return "Codespace is being exported, please wait a few minutes for the operation to finish";
                    case o.CodespaceStateInfo.Shutdown:
                        return "Codespace is stopped";
                    case o.CodespaceStateInfo.Deleted:
                        return "The codespace has been deleted.";
                    case o.CodespaceStateInfo.Unavailable:
                        return "The codespace is not available.";
                    case r.CodespaceWorkspaceState.Error:
                        return "Codespace error.";
                    default:
                        throw new Error(`Invalid codespace state "${e}".`)
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        7562: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(11627), n(11627), n(50162), n(47035), n(95456), n(34545), n(76545)],
            r = function(e, t, n, o, r, i, s, d, l, u) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.CodespaceStateWatcher = void 0,
                n = a(n);
                class p extends n.Disposable {
                    constructor(e, t, o, i, a=s.CODESPACE_IN_PROGRESS_STATES) {
                        var c;
                        super(),
                        this.trace = e,
                        this.codespacesAPI = t,
                        this.telemetry = o,
                        this.progressStates = a,
                        this.intervalMs = 2 * r.TIME_SECOND_MS,
                        this.state = "stopped",
                        this.firstCodespaceInfoUpdateSignal = new r.Signal,
                        this.firstCodespaceInfoUpdatePromise = this.firstCodespaceInfoUpdateSignal.promise,
                        this.codespaceInfo = null,
                        this.onStateChangeEmitter = new n.Emitter,
                        this.onStateChange = this.onStateChangeEmitter.event,
                        this.pollCodespacePromise = null,
                        this.token = null,
                        this.partnerToken = null,
                        this.codespaceId = null,
                        this.onError = e=>{
                            this.setCodespaceState(d.CodespaceWorkspaceState.Error, e),
                            this.stop()
                        }
                        ,
                        this.codespaceState = null !== (c = null == i ? void 0 : i.state) && void 0 !== c ? c : p.DefaultCodespaceState,
                        this.watcherInitializedPromise = new Promise((e=>{
                            this.watcherInitializedResolve = e
                        }
                        ))
                    }
                    initialize(e, t, n, o=this.intervalMs) {
                        try {
                            return this.token = e,
                            this.partnerToken = t,
                            this.codespaceId = n,
                            this.intervalMs = o,
                            this.start(),
                            this
                        } catch (e) {
                            throw this.trace.error("Error initializing state watcher"),
                            e
                        } finally {
                            this.watcherInitializedResolve()
                        }
                    }
                    start() {
                        return "running" === this.state ? (this.trace.verbose("already running"),
                        this) : (this.trace.verbose(`start, current state: "${this.state}"`),
                        this.stop(),
                        this.state = "running",
                        this.pollCodespace(),
                        this)
                    }
                    stop() {
                        this.trace.verbose(`stop, current state: "${this.state}"`),
                        this.state = "stopped",
                        this.timeout && clearTimeout(this.timeout),
                        this.timeout = void 0
                    }
                    setCodespaceState(e, t=null) {
                        const n = this.codespaceState;
                        this.codespaceState = e;
                        const o = e === p.DefaultCodespaceState;
                        if (this.progressStates.includes(e) || o || (this.trace.verbose("auto stop"),
                        this.stop()),
                        n === this.codespaceState)
                            return;
                        const r = [t, this.codespaceState, n];
                        this.trace.verbose("fire state change", r),
                        this.onStateChangeEmitter.fire(r)
                    }
                    pollCodespace() {
                        return c(this, void 0, void 0, (function*() {
                            try {
                                return this.pollCodespacePromise ? (this.trace.verbose("Already polling for Codespace info, returning existing promise"),
                                this.pollCodespacePromise) : (this.pollCodespacePromise = new Promise(((e,t)=>c(this, void 0, void 0, (function*() {
                                    yield this.watcherInitializedPromise,
                                    this.codespaceState !== i.CodespaceStateInfo.Provisioning && this.codespaceState !== i.CodespaceStateInfo.Starting || (this.intervalMs = 1 * r.TIME_SECOND_MS),
                                    this.trace.verbose(`Polling at a ${this.intervalMs}ms rate`),
                                    this.trace.verbose("getting codespace info");
                                    try {
                                        (0,
                                        o.assertDefined)(this.codespaceId, "No `codespaceId` found, please call `initialize()` method first."),
                                        (0,
                                        o.assertDefined)(this.token, "No `token` found, please call `initialize()` method first."),
                                        (0,
                                        o.assertDefined)(this.partnerToken, "No `partnerToken` found, please call `initialize()` method first."),
                                        this.codespaceInfo = yield this.codespacesAPI.getCodespaceInfo(this.token),
                                        this.telemetry.addContextProperty("codespace-state-watcher", this.codespaceInfo.state),
                                        (0,
                                        o.assertDefined)(this.codespaceInfo, "No codespace info fetched.");
                                        const {location: e, created_at: t, updated_at: n, last_used_at: r} = this.codespaceInfo;
                                        this.telemetry.addContextProperties({
                                            skuName: this.codespaceInfo.machine.name,
                                            codespaceLocation: e,
                                            codespaceCreated: t,
                                            codespaceUpdated: n,
                                            codespaceLastUsed: r
                                        })
                                    } catch (e) {
                                        return this.onError(e),
                                        t(e),
                                        this.pollCodespacePromise = null,
                                        null
                                    }
                                    return this.trace.info(`codespace state -> ${this.codespaceInfo.state}`),
                                    this.setCodespaceState(this.codespaceInfo.state),
                                    this.firstCodespaceInfoUpdateSignal.resolve(this.codespaceInfo),
                                    "stopped" !== this.state && (this.timeout = setTimeout(this.pollCodespace.bind(this), this.intervalMs)),
                                    e(this.codespaceInfo),
                                    this.pollCodespacePromise = null,
                                    this.codespaceInfo
                                }
                                )))),
                                this.pollCodespacePromise)
                            } catch (e) {
                                return this.onError(e),
                                null
                            }
                        }
                        ))
                    }
                    startCodespace(e) {
                        var t;
                        return c(this, void 0, void 0, (function*() {
                            try {
                                yield this.watcherInitializedPromise;
                                const e = null !== (t = this.codespaceInfo) && void 0 !== t ? t : yield this.codespacesAPI.getCodespaceInfo(this.token);
                                this.stop(),
                                this.trace.verbose("starting codespace"),
                                (0,
                                o.assertDefined)(this.partnerToken, "No auth token found"),
                                yield this.codespacesAPI.startCodespace(e, this.token)
                            } catch (e) {
                                return this.onError(e)
                            }
                            e ? (0,
                            l.deleteQueryParamFlag)(u.CodespacesQueryParams.AutoStart) : this.start()
                        }
                        ))
                    }
                }
                t.CodespaceStateWatcher = p,
                p.DefaultCodespaceState = d.CodespaceWorkspaceState.Unknown
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        72995: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11627)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.connectSplashScreen = void 0;
                t.connectSplashScreen = (e,t,o,r)=>i(void 0, void 0, void 0, (function*() {
                    (0,
                    n.assertDefined)(t.connection.sessionToken, "Codespace session token not available"),
                    yield e.connect(t, o, r)
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        29499: (e,t,n)=>{
            var o, r;
            o = [n, t, n(11627), n(14580)],
            r = function(e, t, n, o) {
                "use strict";
                var r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.connectionMetricsLogger = t.connectionMetricUtils = t.ConnectionMetricsLogger = void 0,
                function(e) {
                    e[e.BytesIn = 0] = "BytesIn",
                    e[e.BytesOut = 1] = "BytesOut",
                    e[e.LatencyCurrent = 2] = "LatencyCurrent",
                    e[e.LatencyAvg = 3] = "LatencyAvg",
                    e[e.LatencyMin = 4] = "LatencyMin",
                    e[e.LatencyMax = 5] = "LatencyMax"
                }(r || (r = {}));
                class i {
                    constructor() {
                        this.bytesInLogBuffer = [],
                        this.bytesOutLogBuffer = [],
                        this.latencyCurrentLogBuffer = [],
                        this.latencyAvgLogBuffer = [],
                        this.latencyMinLogBuffer = [],
                        this.latencyMaxLogBuffer = [],
                        this.logTitles = ["Total Session Bytes Received / ms After Timestamp: ", "Total Session Bytes Sent / ms After Timestamp: ", "Session Latency / ms After Timestamp: ", "Average Session Latency / ms After Timestamp: ", "Minimum Session Latency: ", "Maximum Session Latency: "],
                        this.subscribedToConnection = !1
                    }
                    getMostRecentLatency() {
                        return this.mostRecentLatency
                    }
                    beginLoggingMetrics(e, i, s) {
                        e && !this.subscribedToConnection && (this.subscribedToConnection = !0,
                        e.onConnection((e=>{
                            let a = ""
                              , c = ""
                              , d = ""
                              , l = "";
                            (0,
                            n.assertDefined)(e.workspaceClient, "Undefined workspace client.");
                            const u = new o.LatencyTelemetry(i);
                            e.workspaceClient.onWorkspaceMetricsUpdated((e=>{
                                const n = Date.now();
                                if (e.latency) {
                                    if (this.mostRecentLatency = e.latency,
                                    u.updateLatency(e.latency),
                                    e.latency.current && this.logConnectionMetrics(t.connectionMetricUtils.formatLatency(e.latency.current), this.latencyCurrentLogBuffer, n, r.LatencyCurrent, s),
                                    e.latency.average && this.logConnectionMetrics(t.connectionMetricUtils.formatLatency(e.latency.average), this.latencyAvgLogBuffer, n, r.LatencyAvg, s),
                                    e.latency.min) {
                                        const o = t.connectionMetricUtils.formatLatency(e.latency.min);
                                        o !== d && (this.logConnectionMetrics(o, this.latencyMinLogBuffer, n, r.LatencyMin, s, !0),
                                        d = o)
                                    }
                                    if (e.latency.max) {
                                        const o = t.connectionMetricUtils.formatLatency(e.latency.max);
                                        o !== l && (this.logConnectionMetrics(o, this.latencyMaxLogBuffer, n, r.LatencyMax, s, !0),
                                        l = o)
                                    }
                                }
                                if (e.bytesIn) {
                                    const o = t.connectionMetricUtils.formatBytes(e.bytesIn);
                                    o !== a && (this.logConnectionMetrics(o, this.bytesInLogBuffer, n, r.BytesIn, s),
                                    a = o)
                                }
                                if (e.bytesOut) {
                                    const o = t.connectionMetricUtils.formatBytes(e.bytesOut);
                                    o !== c && (this.logConnectionMetrics(o, this.bytesOutLogBuffer, n, r.BytesOut, s),
                                    c = o)
                                }
                            }
                            ))
                        }
                        )))
                    }
                    logConnectionMetrics(e, t, n, o, r, s=!1) {
                        (t.push({
                            connectionMetricsUpdate: e,
                            timeStamp: n
                        }) === i.BUFFER_LENGTH_MAX || s) && this.flushLogBuffer(t, o, r)
                    }
                    flushAllLogBuffers(e) {
                        this.flushLogBuffer(this.latencyCurrentLogBuffer, r.LatencyCurrent, e),
                        this.flushLogBuffer(this.latencyAvgLogBuffer, r.LatencyAvg, e),
                        this.flushLogBuffer(this.latencyMinLogBuffer, r.LatencyMin, e),
                        this.flushLogBuffer(this.latencyMaxLogBuffer, r.LatencyMax, e),
                        this.flushLogBuffer(this.bytesInLogBuffer, r.BytesIn, e),
                        this.flushLogBuffer(this.bytesOutLogBuffer, r.BytesOut, e)
                    }
                    flushLogBuffer(e, t, n) {
                        let o = e.shift();
                        if (o) {
                            const i = o.timeStamp;
                            let s = `Timestamp: ${new Date(i).toISOString()},  ${this.logTitles[t]}`;
                            for (; o; ) {
                                const {connectionMetricsUpdate: n, timeStamp: a} = o;
                                s += t === r.LatencyMax || t === r.LatencyMin ? `${n}` : `\n \t ${n} / ${a - i},`,
                                o = e.shift()
                            }
                            n.verbose(s)
                        }
                    }
                }
                t.ConnectionMetricsLogger = i,
                i.BUFFER_LENGTH_MAX = 10;
                t.connectionMetricUtils = new class {
                    formatBytes(e, t=2) {
                        if (!e)
                            return "-";
                        const n = 1024
                          , o = Math.pow(n, 2)
                          , r = Math.pow(n, 3);
                        return e < 1024 ? `${e} Bytes ` : e < o ? (e / 1024).toFixed(t) + " KB" : e < r ? (e / o).toFixed(t) + " MB" : (e / r).toFixed(t) + " GB"
                    }
                    formatLatency(e) {
                        return e ? e > 99 ? (e / 1e3).toFixed(2) + "s" : e.toFixed(1) + "ms" : "-"
                    }
                }
                ,
                t.connectionMetricsLogger = new i
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        27125: (e,t,n)=>{
            var o, r;
            o = [n, t, n(47035), n(50648)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getSessionsById = t.getSessionsByType = t.formatValidServiceKey = t.isSupportedAccountKey = t.buildServiceKey = void 0;
                t.buildServiceKey = e=>`${(0,
                o.getVSCodeScheme)()}vscode.${e}-authentication`;
                t.isSupportedAccountKey = (e,t)=>[n.GH_ACCOUNT_KEY, n.MS_ACCOUNT_KEY].includes(t) || e === `${(0,
                o.getVSCodeScheme)()}.login` && "account" === t;
                t.formatValidServiceKey = (e,n)=>{
                    switch (n) {
                    case "github":
                    case "microsoft":
                        return e === (0,
                        t.buildServiceKey)(n);
                    default:
                        return !1
                    }
                }
                ;
                t.getSessionsByType = (e,t)=>e.filter((e=>e.type === t));
                t.getSessionsById = (e,t)=>e.find((e=>e.id === t))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        43538: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.debounce = void 0;
                t.debounce = (e,t)=>{
                    let n;
                    const o = (...o)=>{
                        clearInterval(n),
                        n = setInterval((()=>{
                            e(...o)
                        }
                        ), t)
                    }
                    ;
                    return o.stop = ()=>{
                        clearInterval(n)
                    }
                    ,
                    o
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        31541: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27593), n(50162)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ensureCodespaceIsAvailable = void 0,
                t.ensureCodespaceIsAvailable = function(e) {
                    return i(this, void 0, void 0, (function*() {
                        const t = yield e(!1);
                        return t && t.state !== o.CodespaceStateInfo.Available ? {
                            state: t.state,
                            error: new n.OutdatedCodespaceStateError("The codespace is not in an available state.",t.state)
                        } : {
                            state: null == t ? void 0 : t.state
                        }
                    }
                    ))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        43026: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.excludeSubdomain = void 0;
                t.excludeSubdomain = e=>{
                    const t = e.split(".");
                    return (t.length > 2 ? t.slice(1) : t).join(".")
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        17691: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27593), n(78967), n(24521)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.fetchOrNetworkError = void 0;
                const s = (e,t)=>i(void 0, void 0, void 0, (function*() {
                    try {
                        return yield fetch(e, t)
                    } catch (e) {
                        throw new n.NetworkError(null == e ? void 0 : e.message)
                    }
                }
                ));
                t.fetchOrNetworkError = (e,t,a=!1)=>i(void 0, void 0, void 0, (function*() {
                    return a ? yield(0,
                    r.withRetries)((r=>i(void 0, void 0, void 0, (function*() {
                        var i;
                        const a = yield s(e, t);
                        if (0 === r)
                            return a;
                        if (!a.ok && a.status > 299)
                            throw new n.HttpError(a.status,null !== (i = a.statusText) && void 0 !== i ? i : (0,
                            o.httpStatusCodeToMessage)(a.status),e.toString());
                        return a
                    }
                    ))), {
                        retries: 3,
                        retryDelay: 250,
                        isAggregateError: !1
                    }) : yield s(e, t)
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        40344: (e,t,n)=>{
            var o, r;
            o = [n, t, n(50162)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getAllowedPortPrivacySettings = void 0;
                const o = [n.PortPrivacy.Private, n.PortPrivacy.Public];
                t.getAllowedPortPrivacySettings = e=>{
                    var t, n;
                    return null !== (n = null === (t = e.runtime_constraints) || void 0 === t ? void 0 : t.allowed_port_privacy_settings) && void 0 !== n ? n : o
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        23655: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getAppRootElement = void 0;
                t.getAppRootElement = ()=>{
                    const e = document.getElementById("js-vscode-workbench");
                    if (!e)
                        throw new Error("No workbench DOM element found.");
                    return e
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        19522: (e,t,n)=>{
            var o, r;
            o = [n, t, n(47035)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getCodespacesUrl = void 0;
                t.getCodespacesUrl = e=>{
                    const {partnerName: t} = e;
                    if ("github" === e.partnerName)
                        return n.FALLBACK_REDIRECT_URL;
                    throw new Error(`Unknown partner "${t}"`)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        58338: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getCurrentCodespaceId = t.setCurrentCodespaceId = void 0;
                let n = null;
                t.setCurrentCodespaceId = e=>{
                    n = e
                }
                ;
                t.getCurrentCodespaceId = ()=>{
                    if (n)
                        return n
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        52458: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                function n(e) {
                    const t = /L(?<start>\d+)(?:-L(?<end>\d+))?/.exec(e);
                    if (null == t ? void 0 : t.groups) {
                        const {start: e, end: n} = t.groups;
                        if (void 0 !== e) {
                            let t = parseInt(e, 10)
                              , o = t + 1;
                            return void 0 !== n && (o = parseInt(n, 10) + 1),
                            {
                                startLineNumber: t,
                                startColumn: 0,
                                endLineNumber: o,
                                endColumn: 0
                            }
                        }
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getDefaultLayout = void 0,
                t.getDefaultLayout = function(e, t, o, r) {
                    let i;
                    return r && (i = function(e) {
                        const t = /(C(?<cell>\d+)(\:L(?<cell_line_start>\d+)(?:-L(?<cell_line_end>\d+))?)?)/.exec(e);
                        if (null == t ? void 0 : t.groups) {
                            const {cell: e, cell_line_start: n, cell_line_end: o} = t.groups;
                            if (void 0 !== e)
                                return {
                                    indexedCellOptions: {
                                        index: Math.max(0, Number(e) - 1),
                                        selection: void 0 !== n ? {
                                            startLineNumber: Number(n),
                                            startColumn: 1,
                                            endLineNumber: Number(null != o ? o : n) + 1,
                                            endColumn: 1
                                        } : void 0
                                    }
                                }
                        }
                    }(r),
                    void 0 === i && (i = {
                        selection: n(r)
                    })),
                    {
                        force: !0,
                        editors: [{
                            uri: {
                                scheme: "vscode-vfs",
                                authority: t.authority,
                                path: `/${e.owner}/${e.repo}/${o}`,
                                fragment: "",
                                query: ""
                            },
                            options: i,
                            openOnlyIfExists: !0
                        }]
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        85063: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(47035), n(50991)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getDefaultSettings = void 0;
                const r = {
                    "workbench.startupEditor": "readme"
                };
                t.getDefaultSettings = e=>i(void 0, void 0, void 0, (function*() {
                    var t;
                    const i = "vscodeSettings"in e ? e.vscodeSettings.defaultSettings : void 0;
                    return (0,
                    o.isGitHubDarkTheme)() && i && (null !== (t = i["workbench.colorTheme"]) && void 0 !== t || (i["workbench.colorTheme"] = n.GITHUB_PAYLOAD_DARK_THEME_NAME)),
                    Object.assign(Object.assign({}, r), i)
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        92546: function(e, t, n) {
            var o, r = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getDefaultWorkspacePath = void 0;
                t.getDefaultWorkspacePath = e=>r(void 0, void 0, void 0, (function*() {
                    const t = yield e.getPartnerInfo();
                    if (t)
                        return t.defaultWorkspacePath
                }
                ))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        },
        67720: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11627), n(50777), n(59646), n(40344)],
            r = function(e, t, n, o, r, s) {
                "use strict";
                let a;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.initializeDevTunnelProvider = t.getDevTunnelProvider = void 0;
                t.getDevTunnelProvider = ()=>((0,
                n.assertDefined)(a, "devTunnelProviderInstance is not defined"),
                a);
                t.initializeDevTunnelProvider = (e,t,n,c,d)=>{
                    if (a)
                        return;
                    const l = (0,
                    s.getAllowedPortPrivacySettings)(n);
                    a = new r.DevTunnelProvider(e,t,n,l,(e=>i(void 0, void 0, void 0, (function*() {
                        return o.workspace.openTunnel(e)
                    }
                    ))),c,d,void 0)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        40688: (e,t,n)=>{
            var o, r;
            o = [n, t, n(76545), n(47035), n(34545)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getFeatureSet = void 0;
                t.getFeatureSet = ()=>{
                    const e = (0,
                    r.getQueryParamFlag)(n.CodespacesQueryParams.VSCodeChannel);
                    if (e)
                        return e;
                    let t = o.FeatureSet.Stable;
                    const i = localStorage.getItem(o.CS_FEATURESET_LOCALSTORAGE_KEY);
                    return i || t
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        65127: function(e, t, n) {
            var o, r = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getHomeIndicator = void 0;
                t.getHomeIndicator = e=>r(void 0, void 0, void 0, (function*() {
                    if (e)
                        return "homeIndicator"in e.vscodeSettings ? e.vscodeSettings.homeIndicator : void 0
                }
                ))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        },
        44605: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            ;
            o = [n, t, n(50777)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getLogLevel = void 0,
                n = a(n);
                t.getLogLevel = ()=>{
                    var e;
                    switch (null === (e = new URL(location.href).searchParams.get("vscode-log")) || void 0 === e ? void 0 : e.toLowerCase()) {
                    case "trace":
                        return n.LogLevel.Trace;
                    case "debug":
                        return n.LogLevel.Debug;
                    case "warning":
                        return n.LogLevel.Warning;
                    case "error":
                        return n.LogLevel.Error;
                    case "critical":
                        return n.LogLevel.Critical;
                    case "off":
                        return n.LogLevel.Off;
                    default:
                        return n.LogLevel.Info
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        54545: (e,t,n)=>{
            var o, r;
            o = [n, t, n(47035)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getLoginRedirectionURL = void 0;
                const o = ()=>new URL(n.FALLBACK_REDIRECT_URL);
                t.getLoginRedirectionURL = e=>{
                    if (!e)
                        return o();
                    const {managementPortalUrl: t} = e;
                    return t ? new URL(t) : o()
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        52739: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getName = void 0;
                t.getName = e=>e.split(".")[0]
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        60322: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getPartnerExtensions = void 0;
                t.getPartnerExtensions = e=>{
                    var t;
                    const {vscodeSettings: n} = e;
                    return (null !== (t = null == n ? void 0 : n.defaultExtensions) && void 0 !== t ? t : []).map((e=>e.id))
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        74856: function(e, t, n) {
            var o, r = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getProductConfiguration = void 0;
                t.getProductConfiguration = e=>r(void 0, void 0, void 0, (function*() {
                    if ("productConfiguration"in e.vscodeSettings)
                        return e.vscodeSettings.productConfiguration
                }
                ))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        },
        34545: (e,t,n)=>{
            var o, r;
            o = [n, t, n(76545), n(47035)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.deleteQueryParamFlag = t.setQueryParamFlag = t.getQueryParamFlag = void 0;
                t.getQueryParamFlag = function(e, t) {
                    const r = new URLSearchParams(location.search).get(e);
                    return r ? e === n.CodespacesQueryParams.VSCodeChannel ? (e=>{
                        if ([o.FeatureSet.Insider, o.FeatureSet.Stable].includes(e))
                            return e
                    }
                    )(r || "") : e === n.CodespacesQueryParams.VSCodeCommitId ? r : "true" === (i = (r || "").toLowerCase()) || "false" !== i && i : t;
                    var i
                }
                ,
                t.setQueryParamFlag = function(e, t, n=window.location) {
                    const o = new URL(n.href)
                      , {searchParams: r} = o
                      , i = `${t}`;
                    r.get(e) !== i && (o.searchParams.set(e, i),
                    n.replace(o.toString()))
                }
                ,
                t.deleteQueryParamFlag = function(e) {
                    const t = new URL(window.location.href);
                    t.searchParams.delete(e),
                    window.location.replace(t.toString())
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        81681: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getQueryParams = void 0;
                t.getQueryParams = e=>{
                    const t = e.split("?")[1];
                    return t ? new URLSearchParams(`?${t}`) : new URLSearchParams
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        92098: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(7261), n(11627), n(118), n(88137), n(2468), n(69030), n(13350), n(47035), n(67720)],
            r = function(e, t, n, o, r, s, a, c, d, l, u) {
                "use strict";
                let p;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.disposeRpcClient = t.getRpcClient = void 0;
                t.getRpcClient = (e,h,f,v)=>i(void 0, void 0, void 0, (function*() {
                    if (e = e.createChild("rpc-client"),
                    p)
                        return e.verbose("RPC client already exists, returning existing instance"),
                        p;
                    p = new n.RpcClient,
                    p.setTelemetry(new r.TelemetryClass),
                    e.verbose("gRPC web feature flag is enabled, creating clients");
                    const i = s.featureFlags.isEnabled(d.FeatureFlags.UseBasisForConnections) && !s.featureFlags.isEnabled(d.FeatureFlags.DevTunnelsOptOutMainConnection);
                    let m, g;
                    if (f)
                        e.verbose("Using Live Share"),
                        (0,
                        o.assertDefined)(v, "connectionOptions is not defined"),
                        m = f.getConnection(v),
                        m || (e.verbose("Failed to get existing connection, creating new connection"),
                        m = yield f.connect(v)),
                        m.onDispose((()=>{
                            e.verbose("Connection disposed, disposing RPC client"),
                            (0,
                            t.disposeRpcClient)()
                        }
                        ));
                    else {
                        e.verbose("Using Dev Tunnels");
                        const t = (0,
                        u.getDevTunnelProvider)();
                        g = yield c.StreamManager.getStreamManager(e, t, h)
                    }
                    return p.createGrpcClients(!1, e, i, l.CODESPACES_INTERNAL_WEB_PORT, (()=>(0,
                    a.CodespacesInternalTransportFactory)(e.createChild("codespaces-internal-transport"), h, m, g))),
                    p
                }
                ));
                t.disposeRpcClient = ()=>{
                    (null == p ? void 0 : p.shouldUseGrpcService) && p.dispose(),
                    p = void 0
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        43297: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getSessionPath = void 0,
                t.getSessionPath = function(e) {
                    var t;
                    return (null === (t = e.connection) || void 0 === t ? void 0 : t.sessionPath) ? e.connection.sessionPath : `/workspaces/${e.repository.name}`
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        20718: (e,t,n)=>{
            var o, r;
            o = [n, t, n(47035)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getUriAuthority = void 0;
                t.getUriAuthority = e=>`${n.CODESPACES_EXTENSION_AUTHORITY}+${e.name}`
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        16746: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11627), n(60322), n(21714), n(47035), n(88137), n(13350)],
            r = function(e, t, n, o, r, s, a, c) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getVSCodeConnectionOptions = void 0;
                t.getVSCodeConnectionOptions = (e,t,d)=>i(void 0, void 0, void 0, (function*() {
                    const {connection: i, environment_id: l} = e
                      , {sessionId: u, sessionToken: p} = i;
                    (0,
                    n.assertDefined)(p, "Codespace session token not available");
                    const h = (0,
                    r.getVSCodeVersion)(d.vscodeVersionInfo, a.featureFlags.isEnabled(c.FeatureFlags.Developer));
                    return {
                        token: p,
                        workspaceId: u,
                        environmentId: l,
                        telemetry: !0,
                        extensions: [...(0,
                        o.getPartnerExtensions)(t), ...s.CODESPACES_BUILT_IN_EXTENSIONS],
                        vsCodeCommit: h.commit,
                        vsCodeQuality: h.quality,
                        version: h.productVersion,
                        liveShareEndpoint: i.serviceUri
                    }
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        50648: (e,t,n)=>{
            var o, r;
            o = [n, t, n(47035), n(40688)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getVSCodeScheme = void 0;
                t.getVSCodeScheme = ()=>(0,
                o.getFeatureSet)() === n.FeatureSet.Insider ? "vscode-insiders" : "vscode"
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        21714: (e,t,n)=>{
            var o, r;
            o = [n, t, n(27593), n(76545), n(47035), n(40688), n(34545)],
            r = function(e, t, n, o, r, i, s) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getVSCodeVersion = void 0;
                t.getVSCodeVersion = (e,t)=>{
                    const a = (0,
                    i.getFeatureSet)();
                    if (t) {
                        const e = (0,
                        s.getQueryParamFlag)(o.CodespacesQueryParams.VSCodeCommitId);
                        if (e)
                            return {
                                quality: a,
                                commit: e
                            }
                    }
                    const c = {
                        [r.FeatureSet.Insider]: {
                            commit: e.insider.commit,
                            productVersion: e.insider.productVersion
                        },
                        [r.FeatureSet.Stable]: {
                            commit: e.stable.commit,
                            productVersion: e.stable.productVersion
                        }
                    }[a];
                    if (!c.commit)
                        throw new n.VSCodeCommitNotFound(`No VSCode commit found for ${a} quality.`);
                    return {
                        quality: a,
                        commit: c.commit,
                        productVersion: c.productVersion
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        65098: function(e, t, n) {
            var o, r, i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            o = [n, t, n(67425), n(43297), n(20718)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getWorkbenchDefaultLayout = void 0,
                n = i(n);
                t.getWorkbenchDefaultLayout = (e,t)=>{
                    const i = e.html_url;
                    if ("string" == typeof (s = i) && s && null !== s.match(/https:\/\/github\.com\/.+\/.+\/pull\/\d+/))
                        return {
                            views: [{
                                id: "workbench.panel.comments"
                            }, {
                                id: "prStatus:github"
                            }]
                        };
                    {
                        const i = (null == t ? void 0 : t.openFiles) || []
                          , s = (0,
                        o.getSessionPath)(e);
                        return {
                            views: [{
                                id: "terminal"
                            }],
                            editors: i.map((t=>({
                                uri: {
                                    scheme: "vscode-remote",
                                    authority: (0,
                                    r.getUriAuthority)(e),
                                    path: n.default.join(s, t),
                                    fragment: "",
                                    query: ""
                                },
                                openOnlyIfExists: !0
                            })))
                        }
                    }
                    var s
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        93871: (e,t,n)=>{
            var o, r;
            o = [n, t, n(50991)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getWorkbenchInitialColorTheme = void 0;
                t.getWorkbenchInitialColorTheme = ()=>(0,
                n.isGitHubDarkTheme)() ? {
                    themeType: "dark",
                    colors: {
                        focusBorder: "#1158c7",
                        foreground: "#c9d1d9",
                        descriptionForeground: "#8b949e",
                        errorForeground: "#ff7b72",
                        "textLink.foreground": "#58a6ff",
                        "textLink.activeForeground": "#79c0ff",
                        "textBlockQuote.background": "#0d1117",
                        "textBlockQuote.border": "#21262d",
                        "textCodeBlock.background": "#161b22",
                        "textPreformat.foreground": "#8b949e",
                        "textSeparator.foreground": "#30363d",
                        "button.background": "#0f5323",
                        "button.foreground": "#7ee787",
                        "button.hoverBackground": "#196c2e",
                        "checkbox.background": "#21262d",
                        "checkbox.border": "#010409",
                        "dropdown.background": "#161b22",
                        "dropdown.border": "#30363d",
                        "dropdown.foreground": "#c9d1d9",
                        "dropdown.listBackground": "#0d1117",
                        "input.background": "#161b22",
                        "input.border": "#30363d",
                        "input.foreground": "#c9d1d9",
                        "input.placeholderForeground": "#6e7681",
                        "badge.foreground": "#79c0ff",
                        "badge.background": "#0d419d",
                        "progressBar.background": "#1f6feb",
                        "titleBar.activeForeground": "#c9d1d9",
                        "titleBar.activeBackground": "#0d1117",
                        "titleBar.inactiveForeground": "#6e7681",
                        "titleBar.inactiveBackground": "#0d1117",
                        "titleBar.border": "#30363d",
                        "activityBar.foreground": "#c9d1d9",
                        "activityBar.inactiveForeground": "#484f58",
                        "activityBar.background": "#0d1117",
                        "activityBarBadge.foreground": "#f0f6fc",
                        "activityBarBadge.background": "#1f6feb",
                        "activityBar.activeBorder": "#f9826c",
                        "activityBar.border": "#30363d",
                        "sideBar.foreground": "#8b949e",
                        "sideBar.background": "#0d1117",
                        "sideBar.border": "#30363d",
                        "sideBarTitle.foreground": "#c9d1d9",
                        "sideBarSectionHeader.foreground": "#c9d1d9",
                        "sideBarSectionHeader.background": "#0d1117",
                        "sideBarSectionHeader.border": "#30363d",
                        "list.hoverForeground": "#c9d1d9",
                        "list.inactiveSelectionForeground": "#c9d1d9",
                        "list.activeSelectionForeground": "#c9d1d9",
                        "list.hoverBackground": "#282e34",
                        "list.inactiveSelectionBackground": "#282e34",
                        "list.activeSelectionBackground": "#39414a",
                        "list.inactiveFocusBackground": "#1d2d3e",
                        "list.focusBackground": "#0d419d",
                        "tree.indentGuidesStroke": "#161b22",
                        "notificationCenterHeader.foreground": "#6e7681",
                        "notificationCenterHeader.background": "#0d1117",
                        "notifications.foreground": "#c9d1d9",
                        "notifications.background": "#161b22",
                        "notifications.border": "#30363d",
                        "notificationsErrorIcon.foreground": "#f85149",
                        "notificationsWarningIcon.foreground": "#f0883e",
                        "notificationsInfoIcon.foreground": "#58a6ff",
                        "pickerGroup.border": "#21262d",
                        "pickerGroup.foreground": "#c9d1d9",
                        "quickInput.background": "#0d1117",
                        "quickInput.foreground": "#c9d1d9",
                        "statusBar.foreground": "#8b949e",
                        "statusBar.background": "#0d1117",
                        "statusBar.border": "#30363d",
                        "statusBar.noFolderBackground": "#0d1117",
                        "statusBar.debuggingBackground": "#931b06",
                        "statusBar.debuggingForeground": "#f0f6fc",
                        "statusBarItem.prominentBackground": "#282e34",
                        "editorGroupHeader.tabsBackground": "#0d1117",
                        "editorGroupHeader.tabsBorder": "#30363d",
                        "editorGroup.border": "#30363d",
                        "tab.activeForeground": "#c9d1d9",
                        "tab.inactiveForeground": "#6e7681",
                        "tab.inactiveBackground": "#0d1117",
                        "tab.activeBackground": "#0d1117",
                        "tab.hoverBackground": "#0d1117",
                        "tab.unfocusedHoverBackground": "#0d1117",
                        "tab.border": "#30363d",
                        "tab.unfocusedActiveBorderTop": "#30363d",
                        "tab.activeBorder": "#0d1117",
                        "tab.unfocusedActiveBorder": "#0d1117",
                        "tab.activeBorderTop": "#f9826c",
                        "breadcrumb.foreground": "#6e7681",
                        "breadcrumb.focusForeground": "#c9d1d9",
                        "breadcrumb.activeSelectionForeground": "#8b949e",
                        "breadcrumbPicker.background": "#2b3036",
                        "editor.foreground": "#c9d1d9",
                        "editor.background": "#0d1117",
                        "editorWidget.background": "#0d1117",
                        "editor.foldBackground": "#282e33",
                        "editor.lineHighlightBackground": "#2b3036",
                        "editorLineNumber.foreground": "#f0f6fc4d",
                        "editorLineNumber.activeForeground": "#c9d1d9",
                        "editorIndentGuide.background": "#161b22",
                        "editorIndentGuide.activeBackground": "#21262d",
                        "editorWhitespace.foreground": "#21262d",
                        "editorCursor.foreground": "#79c0ff",
                        "editor.findMatchBackground": "#ffd33d44",
                        "editor.findMatchHighlightBackground": "#ffd33d22",
                        "editor.inactiveSelectionBackground": "#3392FF22",
                        "editor.selectionBackground": "#3392FF44",
                        "editor.selectionHighlightBackground": "#17E5E633",
                        "editor.selectionHighlightBorder": "#17E5E600",
                        "editor.wordHighlightBackground": "#17E5E600",
                        "editor.wordHighlightStrongBackground": "#17E5E600",
                        "editor.wordHighlightBorder": "#17E5E699",
                        "editor.wordHighlightStrongBorder": "#17E5E666",
                        "editorBracketMatch.background": "#17E5E650",
                        "editorBracketMatch.border": "#17E5E600",
                        "editorGutter.modifiedBackground": "#388bfd",
                        "editorGutter.addedBackground": "#238636",
                        "editorGutter.deletedBackground": "#f85149",
                        "diffEditor.insertedTextBackground": "#28a74530",
                        "diffEditor.removedTextBackground": "#d73a4930",
                        "scrollbar.shadow": "#0008",
                        "scrollbarSlider.background": "#6a737d33",
                        "scrollbarSlider.hoverBackground": "#6a737d44",
                        "scrollbarSlider.activeBackground": "#6a737d88",
                        "editorOverviewRuler.border": "#010409",
                        "panel.background": "#0d1117",
                        "panel.border": "#30363d",
                        "panelTitle.activeBorder": "#f9826c",
                        "panelTitle.activeForeground": "#c9d1d9",
                        "panelTitle.inactiveForeground": "#6e7681",
                        "panelInput.border": "#161b22",
                        "terminal.foreground": "#8b949e",
                        "gitDecoration.addedResourceForeground": "#2ea043",
                        "gitDecoration.modifiedResourceForeground": "#58a6ff",
                        "gitDecoration.deletedResourceForeground": "#f85149",
                        "gitDecoration.untrackedResourceForeground": "#2ea043",
                        "gitDecoration.ignoredResourceForeground": "#484f58",
                        "gitDecoration.conflictingResourceForeground": "#f0883e",
                        "gitDecoration.submoduleResourceForeground": "#484f58",
                        "debugToolBar.background": "#2b3036",
                        "editor.stackFrameHighlightBackground": "#a707",
                        "editor.focusedStackFrameHighlightBackground": "#b808",
                        "peekViewEditor.matchHighlightBackground": "#ffd33d33",
                        "peekViewResult.matchHighlightBackground": "#ffd33d33",
                        "peekViewEditor.background": "#0d111788",
                        "peekViewResult.background": "#0d1117",
                        "settings.headerForeground": "#c9d1d9",
                        "settings.modifiedItemIndicator": "#1f6feb",
                        "welcomePage.buttonBackground": "#161b22",
                        "welcomePage.buttonHoverBackground": "#21262d"
                    }
                } : {
                    themeType: "light",
                    colors: {
                        focusBorder: "#2188ff",
                        foreground: "#444d56",
                        descriptionForeground: "#6a737d",
                        errorForeground: "#cb2431",
                        "textLink.foreground": "#0366d6",
                        "textLink.activeForeground": "#005cc5",
                        "textBlockQuote.background": "#fafbfc",
                        "textBlockQuote.border": "#e1e4e8",
                        "textCodeBlock.background": "#f6f8fa",
                        "textPreformat.foreground": "#586069",
                        "textSeparator.foreground": "#d1d5da",
                        "button.background": "#159739",
                        "button.foreground": "#fff",
                        "button.hoverBackground": "#138934",
                        "checkbox.background": "#fafbfc",
                        "checkbox.border": "#d1d5da",
                        "dropdown.background": "#fafbfc",
                        "dropdown.border": "#e1e4e8",
                        "dropdown.foreground": "#2f363d",
                        "dropdown.listBackground": "#fff",
                        "input.background": "#fafbfc",
                        "input.border": "#e1e4e8",
                        "input.foreground": "#2f363d",
                        "input.placeholderForeground": "#959da5",
                        "badge.foreground": "#005cc5",
                        "badge.background": "#dbedff",
                        "progressBar.background": "#2188ff",
                        "titleBar.activeForeground": "#2f363d",
                        "titleBar.activeBackground": "#fff",
                        "titleBar.inactiveForeground": "#6a737d",
                        "titleBar.inactiveBackground": "#f6f8fa",
                        "titleBar.border": "#e1e4e8",
                        "activityBar.foreground": "#2f363d",
                        "activityBar.inactiveForeground": "#959da5",
                        "activityBar.background": "#fff",
                        "activityBarBadge.foreground": "#fff",
                        "activityBarBadge.background": "#2188ff",
                        "activityBar.activeBorder": "#f9826c",
                        "activityBar.border": "#e1e4e8",
                        "sideBar.foreground": "#586069",
                        "sideBar.background": "#f6f8fa",
                        "sideBar.border": "#e1e4e8",
                        "sideBarTitle.foreground": "#2f363d",
                        "sideBarSectionHeader.foreground": "#2f363d",
                        "sideBarSectionHeader.background": "#f6f8fa",
                        "sideBarSectionHeader.border": "#e1e4e8",
                        "list.hoverForeground": "#2f363d",
                        "list.inactiveSelectionForeground": "#2f363d",
                        "list.activeSelectionForeground": "#2f363d",
                        "list.hoverBackground": "#ebf0f4",
                        "list.inactiveSelectionBackground": "#e8eaed",
                        "list.activeSelectionBackground": "#e2e5e9",
                        "list.inactiveFocusBackground": "#dbedff",
                        "list.focusBackground": "#cce5ff",
                        "tree.indentGuidesStroke": "#e1e4e8",
                        "notificationCenterHeader.foreground": "#6a737d",
                        "notificationCenterHeader.background": "#e1e4e8",
                        "notifications.foreground": "#2f363d",
                        "notifications.background": "#fafbfc",
                        "notifications.border": "#e1e4e8",
                        "notificationsErrorIcon.foreground": "#d73a49",
                        "notificationsWarningIcon.foreground": "#e36209",
                        "notificationsInfoIcon.foreground": "#005cc5",
                        "pickerGroup.border": "#e1e4e8",
                        "pickerGroup.foreground": "#2f363d",
                        "quickInput.background": "#fafbfc",
                        "quickInput.foreground": "#2f363d",
                        "statusBar.foreground": "#586069",
                        "statusBar.background": "#fff",
                        "statusBar.border": "#e1e4e8",
                        "statusBar.noFolderBackground": "#fff",
                        "statusBar.debuggingBackground": "#f9826c",
                        "statusBar.debuggingForeground": "#fff",
                        "statusBarItem.prominentBackground": "#e8eaed",
                        "editorGroupHeader.tabsBackground": "#f6f8fa",
                        "editorGroupHeader.tabsBorder": "#e1e4e8",
                        "editorGroup.border": "#e1e4e8",
                        "tab.activeForeground": "#2f363d",
                        "tab.inactiveForeground": "#6a737d",
                        "tab.inactiveBackground": "#f6f8fa",
                        "tab.activeBackground": "#fff",
                        "tab.hoverBackground": "#fff",
                        "tab.unfocusedHoverBackground": "#fff",
                        "tab.border": "#e1e4e8",
                        "tab.unfocusedActiveBorderTop": "#e1e4e8",
                        "tab.activeBorder": "#fff",
                        "tab.unfocusedActiveBorder": "#fff",
                        "tab.activeBorderTop": "#f9826c",
                        "breadcrumb.foreground": "#6a737d",
                        "breadcrumb.focusForeground": "#2f363d",
                        "breadcrumb.activeSelectionForeground": "#586069",
                        "breadcrumbPicker.background": "#fafbfc",
                        "editor.foreground": "#24292e",
                        "editor.background": "#fff",
                        "editorWidget.background": "#f6f8fa",
                        "editor.foldBackground": "#fafbfc",
                        "editor.lineHighlightBackground": "#f6f8fa",
                        "editorLineNumber.foreground": "#1b1f234d",
                        "editorLineNumber.activeForeground": "#24292e",
                        "editorIndentGuide.background": "#eff2f6",
                        "editorIndentGuide.activeBackground": "#d7dbe0",
                        "editorWhitespace.foreground": "#d1d5da",
                        "editorCursor.foreground": "#044289",
                        "editor.findMatchBackground": "#ffdf5d",
                        "editor.findMatchHighlightBackground": "#ffdf5d66",
                        "editor.inactiveSelectionBackground": "#0366d611",
                        "editor.selectionBackground": "#0366d625",
                        "editor.selectionHighlightBackground": "#34d05840",
                        "editor.selectionHighlightBorder": "#34d05800",
                        "editor.wordHighlightBackground": "#34d05800",
                        "editor.wordHighlightStrongBackground": "#34d05800",
                        "editor.wordHighlightBorder": "#24943e99",
                        "editor.wordHighlightStrongBorder": "#24943e50",
                        "editorBracketMatch.background": "#34d05840",
                        "editorBracketMatch.border": "#34d05800",
                        "editorGutter.modifiedBackground": "#2188ff",
                        "editorGutter.addedBackground": "#28a745",
                        "editorGutter.deletedBackground": "#d73a49",
                        "diffEditor.insertedTextBackground": "#34d05822",
                        "diffEditor.removedTextBackground": "#d73a4922",
                        "scrollbar.shadow": "#6a737d33",
                        "scrollbarSlider.background": "#959da533",
                        "scrollbarSlider.hoverBackground": "#959da544",
                        "scrollbarSlider.activeBackground": "#959da588",
                        "editorOverviewRuler.border": "#fff",
                        "panel.background": "#f6f8fa",
                        "panel.border": "#e1e4e8",
                        "panelTitle.activeBorder": "#f9826c",
                        "panelTitle.activeForeground": "#2f363d",
                        "panelTitle.inactiveForeground": "#6a737d",
                        "panelInput.border": "#e1e4e8",
                        "terminal.foreground": "#586069",
                        "gitDecoration.addedResourceForeground": "#28a745",
                        "gitDecoration.modifiedResourceForeground": "#005cc5",
                        "gitDecoration.deletedResourceForeground": "#d73a49",
                        "gitDecoration.untrackedResourceForeground": "#28a745",
                        "gitDecoration.ignoredResourceForeground": "#959da5",
                        "gitDecoration.conflictingResourceForeground": "#e36209",
                        "gitDecoration.submoduleResourceForeground": "#959da5",
                        "debugToolBar.background": "#fff",
                        "editor.stackFrameHighlightBackground": "#fffbdd",
                        "editor.focusedStackFrameHighlightBackground": "#fff5b1",
                        "settings.headerForeground": "#2f363d",
                        "settings.modifiedItemIndicator": "#2188ff",
                        "welcomePage.buttonBackground": "#f6f8fa",
                        "welcomePage.buttonHoverBackground": "#e1e4e8"
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        53286: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getWorkspaceSessionInfo = void 0;
                t.getWorkspaceSessionInfo = (e,t)=>{
                    if (e.connectionInfo || !t)
                        return e;
                    const {hostPublicKeys: n, sessionToken: o, relaySas: r} = t.connection;
                    return n && o && r ? Object.assign(Object.assign({}, e), {
                        connectionInfo: Object.assign(Object.assign({}, t.connection), {
                            id: t.connection.sessionId,
                            relayLink: t.connection.relayEndpoint,
                            hostPublicKeys: n,
                            sessionToken: o,
                            relaySas: r,
                            name: "",
                            connectLinks: []
                        })
                    }) : e
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        14850: (e,t,n)=>{
            var o, r;
            o = [n, t, n(5604)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isSha = t.decodeAuthority = t.encodeAuthority = t.decodeUtf8Hex = t.encodeUtf8Hex = void 0;
                const o = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
                function r(e) {
                    var t;
                    const n = (new TextEncoder).encode(e)
                      , r = new Array(n.length);
                    for (let e = 0; e < n.length; ++e)
                        r[e] = o[null !== (t = n[e]) && void 0 !== t ? t : 0] || "";
                    return r.join("")
                }
                function i(e) {
                    const t = e.match(/(\w{2})/g);
                    if (null === t)
                        return "";
                    const n = new Uint8Array(t.map((e=>parseInt(e, 16))));
                    return (new TextDecoder).decode(n)
                }
                t.encodeUtf8Hex = r,
                t.decodeUtf8Hex = i,
                t.encodeAuthority = function(e, t) {
                    return `${e}${t ? `+${r(JSON.stringify(t))}` : ""}`
                }
                ,
                t.decodeAuthority = function(e, t) {
                    const [n,o] = e.split("+");
                    let r;
                    if (o)
                        try {
                            r = JSON.parse(i(o))
                        } catch (e) {
                            t.warning("decoding metadata failed", e)
                        }
                    return {
                        scheme: n,
                        metadata: r
                    }
                }
                ,
                t.isSha = function(e) {
                    return !!e && n.shaRegex.test(e)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        87115: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(17452), n(27593)],
            r = function(e, t, n, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GithubRefRequest = void 0;
                t.GithubRefRequest = class {
                    constructor(e) {
                        this.token = e
                    }
                    validateOwnerAndRepoAndGetPotentialRefForPath(e, t, n) {
                        var r;
                        return i(this, void 0, void 0, (function*() {
                            try {
                                const {data: o} = yield this.extractRef({
                                    owner: e,
                                    repo: t,
                                    ref: null != n ? n : "HEAD"
                                })
                                  , r = yield this.extractDefaultBranch({
                                    owner: e,
                                    repo: t
                                });
                                return {
                                    owner: e,
                                    repo: t,
                                    defaultBranch: r,
                                    ref: o.ref,
                                    path: o.path
                                }
                            } catch (e) {
                                if (403 === e.status && (null === (r = e.message) || void 0 === r ? void 0 : r.startsWith("Resource protected by organization SAML enforcement")))
                                    throw new o.GitHubNeedsAuthenticationError;
                                if (404 === e.status)
                                    throw new o.GitHubRepoAccessError;
                                if (401 === e.status)
                                    throw new o.AuthenticationError;
                                return
                            }
                        }
                        ))
                    }
                    extractRef(e) {
                        return i(this, void 0, void 0, (function*() {
                            const t = this.requestWithAuth();
                            return yield t("GET /repos/{owner}/{repo}/git/extract-ref/{ref}", e)
                        }
                        ))
                    }
                    extractDefaultBranch(e) {
                        return i(this, void 0, void 0, (function*() {
                            const t = this.requestWithAuth();
                            return (yield t("GET /repos/{owner}/{repo}", e)).data.default_branch
                        }
                        ))
                    }
                    requestWithAuth() {
                        return (new n.Octokit).request.defaults({
                            headers: {
                                authorization: `token ${this.token}`
                            }
                        })
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        28652: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(31330), n(5604), n(14850), n(50777)],
            r = function(e, t, n, o, r, s) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getGitHubWorkspaceFromUrl = void 0,
                t.getGitHubWorkspaceFromUrl = function(e, t) {
                    return i(this, void 0, void 0, (function*() {
                        const i = o.githubRepositoryRegex.exec(e);
                        if (void 0 === (null == i ? void 0 : i.groups))
                            return;
                        let a, c, {owner: d, repo: l, blob: u, commit: p, tree: h, pull: f, fragment: v} = i.groups;
                        h ? c = n.GitHubURLType.Folder : u && (c = n.GitHubURLType.File);
                        let m = null != h ? h : u;
                        m && (m = decodeURIComponent(m));
                        const g = yield t.validateOwnerAndRepoAndGetPotentialRefForPath(d, l, m);
                        if (!g)
                            return;
                        let y, b;
                        ({owner: d, repo: l, ref: b, path: y} = g);
                        const C = "true" === new URLSearchParams(location.search).get("workspace");
                        let S;
                        const w = g.defaultBranch;
                        (h || u) && b ? (S = (0,
                        r.isSha)(b) ? o.RepositoryRefType.Commit : h ? o.RepositoryRefType.Tree : o.RepositoryRefType.Blob,
                        a = {
                            v: o.githubAuthorityMetadataSchemaVersion,
                            ref: {
                                type: S,
                                id: b
                            }
                        }) : p ? (S = o.RepositoryRefType.Commit,
                        a = {
                            v: o.githubAuthorityMetadataSchemaVersion,
                            ref: {
                                type: S,
                                id: p
                            }
                        }) : f ? (S = o.RepositoryRefType.PullRequest,
                        a = {
                            v: o.githubAuthorityMetadataSchemaVersion,
                            ref: {
                                type: S,
                                id: f
                            }
                        }) : (S = o.RepositoryRefType.Root,
                        w && (a = {
                            v: o.githubAuthorityMetadataSchemaVersion,
                            ref: {
                                type: S,
                                id: w
                            }
                        })),
                        c = C ? n.GitHubURLType.Workspace : c;
                        return {
                            uri: s.URI.from({
                                scheme: "vscode-vfs",
                                authority: (0,
                                r.encodeAuthority)("github", a),
                                path: C ? `/${d}/${l}/${y}` : `/${d}/${l}`
                            }),
                            path: y,
                            fragment: v,
                            type: c,
                            refType: S
                        }
                    }
                    ))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        78967: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.httpStatusCodeToMessage = void 0;
                t.httpStatusCodeToMessage = e=>401 === e ? "Codespace is disconnected." : `${e}: HTTP request failed.`
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        14243: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isDefined = void 0,
                t.isDefined = function(e) {
                    return null != e
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        50991: (e,t,n)=>{
            var o, r;
            o = [n, t, n(47035)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isGitHubDarkTheme = void 0;
                t.isGitHubDarkTheme = ()=>document.documentElement.classList.contains(n.GITHUB_DARK_THEME_CSS_CLASS)
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        8641: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isGuid = void 0,
                t.isGuid = function(e) {
                    return /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(e)
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        5385: (e,t,n)=>{
            var o, r;
            o = [n, t, n(95009)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isInternalPort = void 0;
                t.isInternalPort = e=>{
                    var t;
                    return null !== (t = null == e ? void 0 : e.includes(n.TPortType.Internal)) && void 0 !== t && t
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        40156: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isNumber = void 0;
                t.isNumber = e=>"number" == typeof e && !isNaN(e)
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        44625: (e,t,n)=>{
            var o, r;
            o = [n, t, n(88338)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isSettingsSyncEnabled = void 0;
                t.isSettingsSyncEnabled = (e,t=localStorage)=>{
                    const o = t.getItem(n.TLocalStorageKey.SettingsSyncEnabled);
                    if (o)
                        return "true" === o;
                    const {vscodeSettings: r} = e;
                    return "enabled" === r.settingsSync
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        180: (e,t,n)=>{
            var o, r;
            o = [n, t, n(98698), n(50162), n(19266), n(13350), n(95456), n(47035)],
            r = function(e, t, n, o, r, i, s, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isSplashScreen = void 0;
                t.isSplashScreen = e=>{
                    var t, c, d, l;
                    const {codespaceState: u, codespaceInfo: p, error: h, editor: f} = e;
                    if (h)
                        return !0;
                    if (!p || !u)
                        return !0;
                    if (f === n.IEditorType.vscode) {
                        const n = (null === (t = e.featureFlags) || void 0 === t ? void 0 : t.isEnabled(i.FeatureFlags.UseBasisForConnections)) && !(null === (c = e.featureFlags) || void 0 === c ? void 0 : c.isEnabled(i.FeatureFlags.DevTunnelsOptOutMainConnection));
                        if (!p.connection || n && !p.connection.tunnelProperties)
                            return e.telemetry.sendTelemetry([r.CodespacesTelemetryEventNames.WaitingOnConnectionInfo, {
                                origin: "isSplashScreen",
                                codespaceState: p.state,
                                hasConnectionInfo: !!p.connection,
                                hasTunnelProperties: !!(null === (d = p.connection) || void 0 === d ? void 0 : d.tunnelProperties)
                            }]),
                            !0;
                        if (null === (l = e.featureFlags) || void 0 === l ? void 0 : l.isEnabled(i.FeatureFlags.UseEarlyWorkbenchWebClient)) {
                            if (!a.STATES_TO_RENDER_EARLY_WORKBENCH.includes(u))
                                return !0
                        } else {
                            if (u === o.CodespaceStateInfo.Provisioning)
                                return !(!p.devcontainer_path || p.prebuild);
                            if (!a.STATES_TO_RENDER_WORKBENCH.includes(u))
                                return !0
                        }
                    } else if (u !== s.CodespaceWorkspaceState.Connected)
                        return !0;
                    return !1
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        8955: (e,t,n)=>{
            var o, r;
            o = [n, t, n(47035)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isValidAuthRequestId = void 0,
                t.isValidAuthRequestId = function(e) {
                    return !e.withAuthRequest || !!localStorage.getItem(`${n.AUTH_ATTEMPTS_COUNT_LOCALSTORAGE_KEY}_${e.requestId}`)
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        481: (e,t,n)=>{
            var o, r;
            o = [n, t, n(98698), n(50162), n(19266), n(13350), n(95456), n(47035)],
            r = function(e, t, n, o, r, i, s, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isWorkbench = void 0;
                const c = [o.CodespaceStateInfo.Available, s.CodespaceWorkspaceState.Connected];
                t.isWorkbench = e=>{
                    var t, s, d, l;
                    const {platformInfo: u, codespaceInfo: p, codespaceState: h, error: f, editor: v} = e;
                    if (f)
                        return !1;
                    if (!u || !p)
                        return !1;
                    if (v === n.IEditorType.vscode) {
                        const n = (null === (t = e.featureFlags) || void 0 === t ? void 0 : t.isEnabled(i.FeatureFlags.UseBasisForConnections)) && !(null === (s = e.featureFlags) || void 0 === s ? void 0 : s.isEnabled(i.FeatureFlags.DevTunnelsOptOutMainConnection));
                        if (!p.connection || n && !p.connection.tunnelProperties)
                            return e.telemetry.sendTelemetry([r.CodespacesTelemetryEventNames.WaitingOnConnectionInfo, {
                                origin: "isWorkbench",
                                codespaceState: p.state,
                                hasConnectionInfo: !!p.connection,
                                hasTunnelProperties: !!(null === (d = p.connection) || void 0 === d ? void 0 : d.tunnelProperties)
                            }]),
                            !1;
                        if (null === (l = e.featureFlags) || void 0 === l ? void 0 : l.isEnabled(i.FeatureFlags.UseEarlyWorkbenchWebClient)) {
                            if (!a.STATES_TO_RENDER_EARLY_WORKBENCH.includes(h))
                                return !1
                        } else {
                            if (h === o.CodespaceStateInfo.Provisioning)
                                return !(p.devcontainer_path && !p.prebuild);
                            if (!a.STATES_TO_RENDER_WORKBENCH.includes(h))
                                return !1
                        }
                    } else if (!c.includes(h))
                        return !1;
                    return !0
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        18761: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.joinUrl = void 0,
                t.joinUrl = function(e, t) {
                    return t.startsWith("/") && (t = t.substring(1)),
                    e.endsWith("/") && (e = e.substring(0, e.length - 1)),
                    `${e}/${t}`
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        14580: (e,t,n)=>{
            var o, r;
            o = [n, t, n(19266)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.LatencyTelemetry = void 0;
                class o {
                    constructor(e) {
                        this.maxUpdateLimitReached = !1,
                        this.shouldUpdateLatencyTelemetry = ()=>!this.maxUpdateLimitReached && !!this.mostRecentLatency && !!this.mostRecentLatency.average && (void 0 === this.lastReportedLatency || !!this.lastReportedLatency.average && (this.lastReportedLatency.average - o.UPDATE_THRESHOLD > this.mostRecentLatency.average || this.lastReportedLatency.average + o.UPDATE_THRESHOLD < this.mostRecentLatency.average)),
                        this.resetLatencyTelemetryUpdateInterval = ()=>{
                            this.interval && clearInterval(this.interval),
                            this.interval = setInterval(this.sendTelemetryUpdate, o.MIN_UPDATE_CADENCE)
                        }
                        ,
                        this.setMaxUpdateLimit = ()=>{
                            this.maxUpdateLimitReached = !0,
                            setTimeout((()=>{
                                this.maxUpdateLimitReached = !1
                            }
                            ), o.MAX_UPDATE_CADENCE)
                        }
                        ,
                        this.sendTelemetryUpdate = ()=>{
                            this.mostRecentLatency && this.mostRecentLatency.average && this.mostRecentLatency.min && this.mostRecentLatency.max && (this.telemetry.sendTelemetry([n.CodespacesTelemetryEventNames.WebEditorLatencyUpdate, {
                                averageLatency: this.mostRecentLatency.average,
                                minLatency: this.mostRecentLatency.min,
                                maxLatency: this.mostRecentLatency.max
                            }]),
                            this.lastReportedLatency = this.mostRecentLatency,
                            this.setMaxUpdateLimit())
                        }
                        ,
                        this.telemetry = e
                    }
                    updateLatency(e) {
                        this.mostRecentLatency = e,
                        this.shouldUpdateLatencyTelemetry() && (this.resetLatencyTelemetryUpdateInterval(),
                        this.sendTelemetryUpdate())
                    }
                }
                t.LatencyTelemetry = o,
                o.TIME_SECOND_MS = 1e3,
                o.TIME_MINUTE_MS = 60 * o.TIME_SECOND_MS,
                o.MIN_UPDATE_CADENCE = 5 * o.TIME_MINUTE_MS,
                o.MAX_UPDATE_CADENCE = 10 * o.TIME_SECOND_MS,
                o.UPDATE_THRESHOLD = 10
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        58993: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.mergeSecretStorageGitHubAuthSessions = t.mergeKeytarGitHubAuthSessions = void 0;
                t.mergeKeytarGitHubAuthSessions = (e,t)=>{
                    try {
                        const n = JSON.parse(e)
                          , o = JSON.parse(t);
                        if (!(null == n ? void 0 : n.extensionId) || (null == n ? void 0 : n.extensionId) !== (null == o ? void 0 : o.extensionId))
                            return e;
                        const r = JSON.parse(n.content)
                          , i = JSON.parse(o.content);
                        if (!r || !i)
                            return e;
                        const s = i;
                        r.forEach((e=>{
                            s.some((t=>t.id === e.id)) || s.push(e)
                        }
                        ));
                        const a = {
                            extensionId: n.extensionId,
                            content: JSON.stringify(s)
                        };
                        return JSON.stringify(a)
                    } catch (t) {
                        return e
                    }
                }
                ;
                t.mergeSecretStorageGitHubAuthSessions = (e,t,n)=>{
                    try {
                        const n = JSON.parse(e)
                          , o = JSON.parse(t);
                        if (!n || !o)
                            return e;
                        const r = o;
                        return n.forEach((e=>{
                            r.some((t=>t.id === e.id)) || r.push(e)
                        }
                        )),
                        JSON.stringify(r)
                    } catch (t) {
                        return n.error(t),
                        e
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        96439: function(e, t, n) {
            var o, r = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.parseHttpMessageChunks = void 0;
                const [n,o] = Array.from((new TextEncoder).encode("\r\n"));
                t.parseHttpMessageChunks = (e,t,i)=>r(void 0, void 0, void 0, (function*() {
                    for (; e.byteLength > 0; ) {
                        const r = e.findIndex(((t,r)=>e[r + 0] === n && e[r + 1] === o));
                        if (!(r >= 0))
                            return e;
                        {
                            const n = parseInt(e.subarray(0, r).toString(), 16);
                            if (n > e.byteLength)
                                return e;
                            const o = (e = e.subarray(r + 2)).subarray(0, n);
                            yield t(o),
                            null == i || i.adjustWindow(n),
                            e = e.subarray(n)
                        }
                    }
                    return e
                }
                ))
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        },
        37073: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.parseWorkspacePayload = void 0;
                const n = e=>{
                    if (!Array.isArray(e))
                        return !1;
                    return !e.find((e=>!(e=>!!Array.isArray(e) && 2 === e.length && "string" == typeof e[0])(e)))
                }
                ;
                t.parseWorkspacePayload = e=>{
                    if ("string" != typeof e)
                        return null;
                    try {
                        const t = JSON.parse(e);
                        return n(t) ? t : null
                    } catch (e) {
                        return null
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        43024: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(11627), n(27593), n(19266), n(47035)],
            r = function(e, t, n, o, r, s) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.pollUntilCodespaceConnectionReady = void 0;
                let a = null;
                t.pollUntilCodespaceConnectionReady = (e,t,d,l,u)=>i(void 0, void 0, void 0, (function*() {
                    if (a)
                        return l.verbose("Already polling for Codespace connection readiness, returning existing promise"),
                        a;
                    let p = 0;
                    return a = new Promise(((l,h)=>i(void 0, void 0, void 0, (function*() {
                        for (; !c(e, u) && p++ < s.MAX_POLL_ATTEMPTS; ) {
                            const o = yield t();
                            (0,
                            n.assertDefined)(o, "Could not fetch Codespace details"),
                            e = o
                        }
                        d.sendTelemetry([r.CodespacesTelemetryEventNames.CodespacePollAttempts, {
                            connectionAttempts: p,
                            origin: r.PollTypes.ReadyPolling
                        }]),
                        p >= s.MAX_POLL_ATTEMPTS ? h(new o.ThrottlingApiError("Max poll attempts reached for pollUntilCodespaceConnectionReady")) : l(e),
                        a = null
                    }
                    )))),
                    a
                }
                ));
                const c = (e,t)=>{
                    var n, o, r, i;
                    return !(t || !(null === (n = e.connection) || void 0 === n ? void 0 : n.sessionId) || !(null === (o = e.connection) || void 0 === o ? void 0 : o.serviceUri) || !(null === (r = e.connection) || void 0 === r ? void 0 : r.sessionToken)) || !(!t || !(null === (i = e.connection) || void 0 === i ? void 0 : i.tunnelProperties))
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        6731: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.popupCenter = void 0;
                t.popupCenter = (e,t,n,o)=>{
                    const r = void 0 !== window.screenLeft ? window.screenLeft : window.screenX
                      , i = void 0 !== window.screenTop ? window.screenTop : window.screenY
                      , s = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
                      , a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height
                      , c = s / window.screen.availWidth
                      , d = (s - n) / 2 / c + r
                      , l = (a - o) / 2 / c + i;
                    return window.open(e, t, `\n      scrollbars=yes,\n      width=${n / c}, \n      height=${o / c}, \n      top=${l}, \n      left=${d}\n      `)
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        39327: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777), n(11627), n(53286)],
            r = function(e, t, n, o, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.PreconnectionStorage = void 0,
                n = a(n);
                const i = "codespaces.workbench.connection.data.keychain.key";
                class s extends n.Disposable {
                    constructor(e, t, n) {
                        super(),
                        this.trace = e,
                        this.keychain = t,
                        this.connectionHub = n,
                        this.saveConnectionData = e=>c(this, void 0, void 0, (function*() {
                            try {
                                const t = JSON.stringify(e);
                                yield this.keychain.set(i, t)
                            } catch (e) {
                                this.trace.warning("failed to save connection data", e)
                            }
                        }
                        )),
                        this.clearConnectionData = ()=>c(this, void 0, void 0, (function*() {
                            try {
                                yield this.keychain.set(i, "")
                            } catch (e) {
                                this.trace.warning("failed to clear connection data", e)
                            }
                        }
                        )),
                        this.preconnect = e=>c(this, void 0, void 0, (function*() {
                            try {
                                const t = yield this.keychain.get(i);
                                if (!t.result)
                                    throw new o.CancellationError("Preconnection data not found.");
                                let n = JSON.parse(t.result);
                                n = (0,
                                r.getWorkspaceSessionInfo)(n, e);
                                if (!(yield this.connectionHub.connectOnce(n)))
                                    return this.clearConnectionData()
                            } catch (e) {
                                if (e instanceof o.CancellationError)
                                    return this.clearConnectionData();
                                this.clearConnectionData()
                            }
                        }
                        ))
                    }
                }
                t.PreconnectionStorage = s
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        49630: (e,t,n)=>{
            var o, r;
            o = [n, t, n(50162)],
            r = function(e, t, n) {
                "use strict";
                var o, r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.UserProgressReporter = t.ProgressType = t.ProgressOptions = void 0,
                function(e) {
                    e[e.Connecting = 1] = "Connecting",
                    e[e.Done = 2] = "Done",
                    e[e.ResumingCodespace = 3] = "ResumingCodespace",
                    e[e.ShuttingDown = 4] = "ShuttingDown",
                    e[e.ProvisioningCodespace = 5] = "ProvisioningCodespace",
                    e[e.RebuildCodespace = 6] = "RebuildCodespace"
                }(o || (t.ProgressOptions = o = {})),
                function(e) {
                    e[e.Default = 0] = "Default",
                    e[e.Resume = 1] = "Resume",
                    e[e.ShuttingDown = 2] = "ShuttingDown",
                    e[e.Rebuild = 3] = "Rebuild"
                }(r || (t.ProgressType = r = {}));
                const i = [o.Connecting, o.Done]
                  , s = [o.ResumingCodespace].concat(i)
                  , a = [o.ProvisioningCodespace].concat(i)
                  , c = [o.ShuttingDown].concat(s)
                  , d = [o.RebuildCodespace].concat(i)
                  , l = new Map([[o.Connecting, {
                    message: "Connecting to codespace...",
                    weight: 5
                }], [o.ResumingCodespace, {
                    message: "Starting codespace...",
                    weight: 10
                }], [o.ProvisioningCodespace, {
                    message: "[Building codespace...](command:_codespaces.viewCreationLog)",
                    weight: 12
                }], [o.RebuildCodespace, {
                    message: "[Rebuilding codespace...](command:_codespaces.viewCreationLog)",
                    weight: 5
                }], [o.ShuttingDown, {
                    message: "Shutting down codespace...",
                    weight: 5
                }]]);
                t.UserProgressReporter = class {
                    constructor(e, t, o) {
                        var l;
                        this.progress = e,
                        this.logger = o,
                        this.currentMarkIndex = -1,
                        this.currentFakeProgress = 0,
                        this.fakeTick = 0,
                        t.state === n.CodespaceStateInfo.Starting || t.state === n.CodespaceStateInfo.Shutdown || t.state === n.CodespaceStateInfo.Queued && (null === (l = t.connection) || void 0 === l ? void 0 : l.sessionPath) ? (this.totalWeight = this.calculateWeight(s),
                        this.progressMark = s,
                        this.type = r.Resume) : t.state === n.CodespaceStateInfo.Provisioning ? (this.totalWeight = this.calculateWeight(a),
                        this.progressMark = a,
                        this.type = r.Rebuild) : t.state === n.CodespaceStateInfo.Rebuilding ? (this.totalWeight = this.calculateWeight(d),
                        this.progressMark = d,
                        this.type = r.Rebuild) : t.state === n.CodespaceStateInfo.ShuttingDown ? (this.totalWeight = this.calculateWeight(c),
                        this.progressMark = c,
                        this.type = r.ShuttingDown) : (this.totalWeight = this.calculateWeight(i),
                        this.progressMark = i,
                        this.type = r.Default),
                        this.startFakeProgress()
                    }
                    update(e) {
                        var t, n, r, i;
                        const s = l.get(e)
                          , a = this.progressMark.indexOf(e);
                        if (a <= this.currentMarkIndex)
                            throw new Error("Progress can't move backwards");
                        e === o.Done && this.stopFakeProgress(),
                        this.currentMarkIndex = a;
                        const c = this.progressMark[a - 1];
                        if (!c)
                            return;
                        const d = null !== (n = null === (t = l.get(c)) || void 0 === t ? void 0 : t.weight) && void 0 !== n ? n : 0
                          , u = Math.max(d / this.totalWeight * 100 - this.currentFakeProgress, 0);
                        this.progress.report({
                            message: null !== (r = null == s ? void 0 : s.message) && void 0 !== r ? r : "Done",
                            increment: u
                        }),
                        this.logger.info("Progress: " + (null !== (i = null == s ? void 0 : s.message) && void 0 !== i ? i : "Done")),
                        this.fakeTick = 0,
                        this.currentFakeProgress = 0
                    }
                    startFakeProgress() {
                        this.fakeProgressTimer = setInterval((()=>{
                            this.addFakeProgress()
                        }
                        ), 100)
                    }
                    stopFakeProgress() {
                        clearInterval(this.fakeProgressTimer)
                    }
                    addFakeProgress() {
                        const e = this.progressMark[this.currentMarkIndex];
                        if (e) {
                            const t = l.get(e);
                            if (null == t ? void 0 : t.weight) {
                                const e = 13
                                  , n = 2 * Math.atan(this.fakeTick / e) / Math.PI * t.weight * .9 / this.totalWeight * 100
                                  , o = n - this.currentFakeProgress
                                  , r = t.message;
                                this.progress.report({
                                    message: r,
                                    increment: o
                                }),
                                this.currentFakeProgress = n,
                                this.fakeTick++
                            }
                        }
                    }
                    get progressType() {
                        return this.type
                    }
                    calculateWeight(e) {
                        return Array.from(l.entries()).map((t=>e.includes(t[0]) ? t[1].weight : 0)).reduce(((e,t)=>e + t), 0)
                    }
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        30397: function(e, t, n) {
            var o, r, i = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && !("get"in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }),
                Object.defineProperty(e, o, r)
            }
            : function(e, t, n, o) {
                void 0 === o && (o = n),
                e[o] = t[n]
            }
            ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), a = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e),
                t
            }
            , c = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(50777)],
            r = function(e, t, n) {
                "use strict";
                var o;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.sendVSCodeCommand = t.CodespacesVSCodeCommands = void 0,
                n = a(n),
                function(e) {
                    e.Dispose = "codespaces.workbench.dispose"
                }(o || (t.CodespacesVSCodeCommands = o = {}));
                t.sendVSCodeCommand = (e,...t)=>c(void 0, void 0, void 0, (function*() {
                    return yield n.commands.executeCommand(e, ...t)
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        48814: (e,t,n)=>{
            var o, r;
            o = [n, t, n(11627)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.vscodeMenuClickHandler = void 0;
                t.vscodeMenuClickHandler = (e,t,o)=>{
                    const r = t();
                    e.verbose(`Opening url: "${r}"`),
                    (0,
                    n.assertDefined)(r, "Cannot find url."),
                    o ? window.location.href = r : window.open(r, "_blank")
                }
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        }
        ,
        24521: function(e, t, n) {
            var o, r, i = this && this.__awaiter || function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(s, a)
                    }
                    c((o = o.apply(e, t || [])).next())
                }
                ))
            }
            ;
            o = [n, t, n(27593)],
            r = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.withRetries = void 0;
                class o {
                    constructor() {
                        this.errorType = "AggregateError",
                        this.errorsReference = []
                    }
                    get errors() {
                        return [...this.errorsReference]
                    }
                    addErrors(...e) {
                        return this.errorsReference.push(...e),
                        this
                    }
                    cloneWithErrors(...e) {
                        const t = new o;
                        return t.addErrors(...this.errors, ...e),
                        t
                    }
                    get lastError() {
                        const e = this.errorsReference.length - 1;
                        return this.errorsReference[e]
                    }
                }
                const r = (e,t)=>{
                    if (!0 !== e) {
                        throw "string" == typeof t ? new n.AssertionError : t
                    }
                }
                  , s = (e,t)=>{
                    if (t)
                        throw e.lastError;
                    throw e
                }
                  , a = {
                    retries: 2,
                    retryDelay: 0,
                    shouldStopRetries: ()=>!1,
                    isAggregateError: !0
                };
                t.withRetries = (e,c={},d=new o)=>i(void 0, void 0, void 0, (function*() {
                    const o = Object.assign(Object.assign({}, a), c)
                      , {retries: i, retryDelay: l, shouldStopRetries: u, cancellationToken: p, isAggregateError: h} = o
                      , f = new n.AssertionError;
                    r(i > -1, h ? d.cloneWithErrors() : f);
                    try {
                        return r(!(null == p ? void 0 : p.isCancellationRequested), new n.CancellationError),
                        yield e(i)
                    } catch (a) {
                        d.addErrors(a);
                        if (yield u(a))
                            return s(d, !h);
                        if (a instanceof n.CancellationError)
                            return s(d, !h);
                        const c = new n.CancellationError;
                        return r(!(null == p ? void 0 : p.isCancellationRequested), h ? d.cloneWithErrors() : c),
                        i > 0 ? (yield(v = l,
                        new Promise((e=>{
                            setTimeout(e, v)
                        }
                        ))),
                        yield(0,
                        t.withRetries)(e, Object.assign(Object.assign({}, o), {
                            retries: i - 1
                        }), d)) : s(d, !h)
                    }
                    var v
                }
                ))
            }
            .apply(t, o),
            void 0 === r || (e.exports = r)
        },
        55409: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.isCodespaceWorkbenchType = void 0,
                t.isCodespaceWorkbenchType = function(e) {
                    return "codespaces" === e
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        41840: (e,t,n)=>{
            var o;
            o = function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.getFastlyUrl = void 0;
                t.getFastlyUrl = e=>{
                    switch (e) {
                    case "local":
                    case "dev":
                    case "Development":
                    case "latest-dev":
                        return "https://assets.dev.github.dev";
                    case "ppe":
                    case "Staging":
                    case "latest-ppe":
                        return "https://assets.ppe.github.dev";
                    default:
                        return "https://assets.github.dev"
                    }
                }
            }
            .apply(t, [n, t]),
            void 0 === o || (e.exports = o)
        }
        ,
        50777: t=>{
            "use strict";
            t.exports = e
        }
        ,
        4147: e=>{
            "use strict";
            e.exports = JSON.parse('{"name":"codespaces-web-client","version":"1.0.0","description":"Node Web Client","main":"../out/static/app.js","private":"true","scripts":{"clean":"rimraf ../out/static/**/*.{html,js,js.map}","build":"npm run clean && webpack --mode production","lint":"eslint --ext .ts,.tsx .","lint-fix":"npm run lint -- --fix","pretty-quick-staged":"pretty-quick --staged","test":"npm run build && jest --config ./jest.config.js","test-update":"jest --config ./jest.config.js --updateSnapshot","watch":"npm run clean && webpack --mode development --watch"},"repository":{"type":"git","url":"git+https://github.com/osortega/webapi.git"},"author":"Osvaldo Ortega","bugs":{"url":"https://github.com/osortega/webapi/issues"},"devDependencies":{"@types/deep-equal":"^1.0.1","@types/enzyme-adapter-react-16":"^1.0.6","@types/jest":"^27.4.1","@types/randombytes":"^2.0.0","@types/react":"^16.14.23","@types/react-dom":"^17.0.11","@types/react-router-dom":"^5.3.3","@types/trusted-types":"^2.0.2","@types/uuid":"8.0.0","constants-browserify":"^1.0.0","copy-webpack-plugin":"^11.0.0","crypto-browserify":"^3.12.0","css-loader":"^6.8.1","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.6","eslint-plugin-github":"^4.10.1","fork-ts-checker-webpack-plugin":"^9.0.2","git-repo-info":"^2.1.1","html-webpack-plugin":"^5.3.2","http-message-parser":"^0.0.34","jest":"^27.5.1","jest-fetch-mock":"^3.0.3","mini-css-extract-plugin":"^2.6.1","os-browserify":"^0.3.0","path-browserify":"^1.0.1","rimraf":"^3.0.2","stream-browserify":"^3.0.0","style-loader":"^1.2.1","ts-jest":"^27.1.3","ts-loader":"^9.2.3","tsconfig-paths-webpack-plugin":"^3.5.2","typescript":"^5.3.3","wait-for-expect":"^3.0.2","webpack":"^5.76.0","webpack-cli":"^4.7.2"},"dependencies":{"@microsoft/1ds-core-js":"^3.2.4","@microsoft/1ds-post-js":"^3.2.4","@microsoft/applicationinsights-web":"^2.5.3","@microsoft/dev-tunnels-connections":"^1.1.16","@microsoft/dev-tunnels-contracts":"^1.1.16","@microsoft/dev-tunnels-management":"^1.1.16","@octokit/core":"^3.5.1","@types/async-lock":"^1.4.0","@vs/grpc":"^2.0.976","@vs/vs-ssh":"^3.7.6","@vs/vscs-connection-hub":"^2.0.878","async-lock":"^1.4.0","buffer":"^6.0.3","classnames":"^2.3.1","deep-equal":"^2.0.1","detect-browser":"^5.0.0","es5-ext":"0.10.53","http-browserify":"^1.7.0","js-base64":"^3.7.1","moment":"^2.29.4","process":"^0.11.10","randombytes":"^2.1.0","react":"^16.13.1","react-dom":"^16.13.1","react-router-dom":"^5.2.0","setimmediate":"^1.0.5","stream-http":"^3.2.0","url":"^0.11.0","url-loader":"^4.1.1","xterm":"^4.18.0","xterm-addon-fit":"^0.5.0","xterm-addon-search":"^0.8.2"},"_moduleAliases":{"@grpc-clients":"../node_modules/@vs/grpc/dist/src/clients/browser"}}')
        }
    }, o = {};
    function r(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var i = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(i.exports, i, i.exports, r),
        i.loaded = !0,
        i.exports
    }
    r.m = n,
    t = [],
    r.O = (e,n,o,i)=>{
        if (!n) {
            var s = 1 / 0;
            for (l = 0; l < t.length; l++) {
                for (var [n,o,i] = t[l], a = !0, c = 0; c < n.length; c++)
                    (!1 & i || s >= i) && Object.keys(r.O).every((e=>r.O[e](n[c]))) ? n.splice(c--, 1) : (a = !1,
                    i < s && (s = i));
                if (a) {
                    t.splice(l--, 1);
                    var d = o();
                    void 0 !== d && (e = d)
                }
            }
            return e
        }
        i = i || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > i; l--)
            t[l] = t[l - 1];
        t[l] = [n, o, i]
    }
    ,
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    r.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.nmd = e=>(e.paths = [],
    e.children || (e.children = []),
    e),
    (()=>{
        var e = {
            143: 0
        };
        r.O.j = t=>0 === e[t];
        var t = (t,n)=>{
            var o, i, [s,a,c] = n, d = 0;
            if (s.some((t=>0 !== e[t]))) {
                for (o in a)
                    r.o(a, o) && (r.m[o] = a[o]);
                if (c)
                    var l = c(r)
            }
            for (t && t(n); d < s.length; d++)
                i = s[d],
                r.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return r.O(l)
        }
          , n = self.webpackChunkcodespaces_web_client = self.webpackChunkcodespaces_web_client || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )(),
    r.nc = void 0;
    var i = r.O(void 0, [962, 69, 415, 158, 718, 46, 63, 750, 784, 330, 692, 599, 436, 823, 495, 877, 245, 476, 319, 702, 752, 260, 825, 990, 322, 155, 4, 175, 650, 353, 960, 422, 564, 498, 222, 57, 693, 371, 779, 66, 211], (()=>r(48187)));
    return i = r.O(i)
}
)()));