"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@popperjs/core/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    afterMain: () => afterMain,
    afterRead: () => afterRead,
    afterWrite: () => afterWrite,
    applyStyles: () => applyStyles_default,
    arrow: () => arrow_default,
    auto: () => auto,
    basePlacements: () => basePlacements,
    beforeMain: () => beforeMain,
    beforeRead: () => beforeRead,
    beforeWrite: () => beforeWrite,
    bottom: () => bottom,
    clippingParents: () => clippingParents,
    computeStyles: () => computeStyles_default,
    createPopper: () => createPopper3,
    createPopperBase: () => createPopper,
    createPopperLite: () => createPopper2,
    detectOverflow: () => detectOverflow,
    end: () => end,
    eventListeners: () => eventListeners_default,
    flip: () => flip_default,
    hide: () => hide_default,
    left: () => left,
    main: () => main,
    modifierPhases: () => modifierPhases,
    offset: () => offset_default,
    placements: () => placements,
    popper: () => popper,
    popperGenerator: () => popperGenerator,
    popperOffsets: () => popperOffsets_default,
    preventOverflow: () => preventOverflow_default,
    read: () => read,
    reference: () => reference,
    right: () => right,
    start: () => start,
    top: () => top,
    variationPlacements: () => variationPlacements,
    viewport: () => viewport,
    write: () => write
  });

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper4(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper = /* @__PURE__ */ popperGenerator();

  // node_modules/@popperjs/core/lib/popper-lite.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper2 = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper3 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers2
  });

  // node_modules/bootstrap/dist/js/bootstrap.esm.js
  var elementMap = /* @__PURE__ */ new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement2 = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement2(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement2(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn2) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn2);
      }
      return fn2.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn2) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn2);
          }
          return fn2.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn3) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn3.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn2.delegationSelector = isDelegated ? handler : null;
    fn2.callable = callable;
    fn2.oneOff = oneOff;
    fn2.uidEvent = uid;
    handlers[uid] = fn2;
    element.addEventListener(typeEvent, fn2, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn2) {
      return;
    }
    element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
    delete events[typeEvent][fn2.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), typeof jsonConfig === "object" ? jsonConfig : {}), isElement2(element) ? Manipulator.getDataAttributes(element) : {}), typeof config === "object" ? config : {});
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement2(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  };
  var VERSION = "5.3.8";
  var BaseComponent = class extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    // Private
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  var NAME$f = "alert";
  var DATA_KEY$a = "bs.alert";
  var EVENT_KEY$b = `.${DATA_KEY$a}`;
  var EVENT_CLOSE = `close${EVENT_KEY$b}`;
  var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  var CLASS_NAME_FADE$5 = "fade";
  var CLASS_NAME_SHOW$8 = "show";
  var Alert = class _Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  var NAME$e = "button";
  var DATA_KEY$9 = "bs.button";
  var EVENT_KEY$a = `.${DATA_KEY$9}`;
  var DATA_API_KEY$6 = ".data-api";
  var CLASS_NAME_ACTIVE$3 = "active";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  var Button = class _Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  var NAME$d = "swipe";
  var EVENT_KEY$9 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var NAME$c = "carousel";
  var DATA_KEY$8 = "bs.carousel";
  var EVENT_KEY$8 = `.${DATA_KEY$8}`;
  var DATA_API_KEY$5 = ".data-api";
  var ARROW_LEFT_KEY$1 = "ArrowLeft";
  var ARROW_RIGHT_KEY$1 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  var EVENT_SLID = `slid${EVENT_KEY$8}`;
  var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE$2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  var Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var NAME$b = "collapse";
  var DATA_KEY$7 = "bs.collapse";
  var EVENT_KEY$7 = `.${DATA_KEY$7}`;
  var DATA_API_KEY$4 = ".data-api";
  var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  var CLASS_NAME_SHOW$7 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    // Private
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  var NAME$a = "dropdown";
  var DATA_KEY$6 = "bs.dropdown";
  var EVENT_KEY$6 = `.${DATA_KEY$6}`;
  var DATA_API_KEY$3 = ".data-api";
  var ESCAPE_KEY$2 = "Escape";
  var TAB_KEY$1 = "Tab";
  var ARROW_UP_KEY$1 = "ArrowUp";
  var ARROW_DOWN_KEY$1 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var CLASS_NAME_SHOW$6 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement2(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper3(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [void 0, defaultBsPopperConfig]));
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  var NAME$9 = "backdrop";
  var CLASS_NAME_FADE$4 = "fade";
  var CLASS_NAME_SHOW$5 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  var Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var NAME$8 = "focustrap";
  var DATA_KEY$5 = "bs.focustrap";
  var EVENT_KEY$5 = `.${DATA_KEY$5}`;
  var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  var TAB_KEY = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement2(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var NAME$7 = "modal";
  var DATA_KEY$4 = "bs.modal";
  var EVENT_KEY$4 = `.${DATA_KEY$4}`;
  var DATA_API_KEY$2 = ".data-api";
  var ESCAPE_KEY$1 = "Escape";
  var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  var CLASS_NAME_OPEN = "modal-open";
  var CLASS_NAME_FADE$3 = "fade";
  var CLASS_NAME_SHOW$4 = "show";
  var CLASS_NAME_STATIC = "modal-static";
  var OPEN_SELECTOR$1 = ".modal.show";
  var SELECTOR_DIALOG = ".modal-dialog";
  var SELECTOR_MODAL_BODY = ".modal-body";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  var Modal = class _Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = _Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  var NAME$6 = "offcanvas";
  var DATA_KEY$3 = "bs.offcanvas";
  var EVENT_KEY$3 = `.${DATA_KEY$3}`;
  var DATA_API_KEY$1 = ".data-api";
  var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var ESCAPE_KEY = "Escape";
  var CLASS_NAME_SHOW$3 = "show";
  var CLASS_NAME_SHOWING$1 = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var NAME$5 = "TemplateFactory";
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = __spreadValues(__spreadValues({}, this._config.content), content);
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement2(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [void 0, this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE$2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW$2 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE$2 = "hide";
  var EVENT_HIDDEN$2 = "hidden";
  var EVENT_SHOW$2 = "show";
  var EVENT_SHOWN$2 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK$1 = "click";
  var EVENT_FOCUSIN$1 = "focusin";
  var EVENT_FOCUSOUT$1 = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory(__spreadProps(__spreadValues({}, this._config), {
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }));
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper3(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element, this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [void 0, defaultBsPopperConfig]));
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[TRIGGER_CLICK]);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = __spreadValues(__spreadValues({}, dataAttributes), typeof config === "object" && config ? config : {});
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var SELECTOR_TITLE = ".popover-header";
  var SELECTOR_CONTENT = ".popover-body";
  var Default$2 = __spreadProps(__spreadValues({}, Tooltip.Default), {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  });
  var DefaultType$2 = __spreadProps(__spreadValues({}, Tooltip.DefaultType), {
    content: "(null|string|element|function)"
  });
  var Popover = class _Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var DATA_KEY$2 = "bs.scrollspy";
  var EVENT_KEY$2 = `.${DATA_KEY$2}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  var EVENT_CLICK = `click${EVENT_KEY$2}`;
  var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE$1 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  var NAME$1 = "tab";
  var DATA_KEY$1 = "bs.tab";
  var EVENT_KEY$1 = `.${DATA_KEY$1}`;
  var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE$1 = "fade";
  var CLASS_NAME_SHOW$1 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  var NAME = "toast";
  var DATA_KEY = "bs.toast";
  var EVENT_KEY = `.${DATA_KEY}`;
  var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_HIDE = "hide";
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_SHOWING = "showing";
  var DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  var Toast = class _Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);
})();
/*! Bundled license information:

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91c2VyQWdlbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNMYXlvdXRWaWV3cG9ydC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1saXRlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2RvbS9kYXRhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2J1dHRvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Nhcm91c2VsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2NvbGxhcHNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9mb2N1c3RyYXAuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvb2ZmY2FudmFzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvdGVtcGxhdGUtZmFjdG9yeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy90b29sdGlwLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3BvcG92ZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3RhYi5qcyIsICIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy90b2FzdC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSBcIi4vZW51bXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3csIGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJCYXNlIH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIi4vcG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyIsICJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsICJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwgImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5cbiAgaWYgKHVhRGF0YSAhPSBudWxsICYmIHVhRGF0YS5icmFuZHMgJiYgQXJyYXkuaXNBcnJheSh1YURhdGEuYnJhbmRzKSkge1xuICAgIHJldHVybiB1YURhdGEuYnJhbmRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uYnJhbmQgKyBcIi9cIiArIGl0ZW0udmVyc2lvbjtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn0iLCAiaW1wb3J0IGdldFVBU3RyaW5nIGZyb20gXCIuLi91dGlscy91c2VyQWdlbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGF5b3V0Vmlld3BvcnQoKSB7XG4gIHJldHVybiAhL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChnZXRVQVN0cmluZygpKTtcbn0iLCAiaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgaWYgKGluY2x1ZGVTY2FsZSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG4gICAgc2NhbGVZID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMSA6IDE7XG4gIH1cblxuICB2YXIgX3JlZiA9IGlzRWxlbWVudChlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcbiAgICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblxuICB2YXIgYWRkVmlzdWFsT2Zmc2V0cyA9ICFpc0xheW91dFZpZXdwb3J0KCkgJiYgaXNGaXhlZFN0cmF0ZWd5O1xuICB2YXIgeCA9IChjbGllbnRSZWN0LmxlZnQgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQgOiAwKSkgLyBzY2FsZVg7XG4gIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XG4gIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZVg7XG4gIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdG9wOiB5LFxuICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG4gICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgIGxlZnQ6IHgsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCAiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwgImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG4gIHZhciBpc0lFID0gL1RyaWRlbnQvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgaWYgKGlzU2hhZG93Um9vdChjdXJyZW50Tm9kZSkpIHtcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmhvc3Q7XG4gIH1cblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCAiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwgImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4gfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCAiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZiwgd2luKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgdmFyIF9vZmZzZXRzJHggPSBvZmZzZXRzLngsXG4gICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgeSA9IF9vZmZzZXRzJHkgPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR5O1xuXG4gIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9KSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjMueDtcbiAgeSA9IF9yZWYzLnk7XG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0sIGdldFdpbmRvdyhwb3BwZXIpKSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjQueDtcbiAgeSA9IF9yZWY0Lnk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjUuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCAidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwgInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIHZhciBsYXlvdXRWaWV3cG9ydCA9IGlzTGF5b3V0Vmlld3BvcnQoKTtcblxuICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCAiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCAiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCAiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgZmFsc2UsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCAiaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkc3RyYXRlZ3kgPSBfb3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIHN0cmF0ZWd5ID0gX29wdGlvbnMkc3RyYXRlZ3kgPT09IHZvaWQgMCA/IHN0YXRlLnN0cmF0ZWd5IDogX29wdGlvbnMkc3RyYXRlZ3ksXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufSIsICJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIFx1MjAxMyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsICJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59OyIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsICJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwgImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4sIHdpdGhpbk1heENsYW1wIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWluIGFzIG1hdGhNaW4sIG1heCBhcyBtYXRoTWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgYWx0QXhpczogMFxuICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwgImltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRIVE1MRWxlbWVudFNjcm9sbCBmcm9tIFwiLi9nZXRIVE1MRWxlbWVudFNjcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDE7XG4gIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xufSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnRJc1NjYWxlZCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQsIGlzRml4ZWQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCAiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIFx1MjAxMyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUgXHUyMDEzIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZi5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCAiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCAiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxXzAwMF8wMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLyoqXG4gKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHBhcnNlU2VsZWN0b3IgPSBzZWxlY3RvciA9PiB7XG4gIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csIChtYXRjaCwgaWQpID0+IGAjJHtDU1MuZXNjYXBlKGlkKX1gKVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbi8vIFNob3V0LW91dCBBbmd1cyBDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmplY3R9YFxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogUHVibGljIFV0aWwgQVBJXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmplY3QgPT4ge1xuICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iamVjdCA9IG9iamVjdFswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdFxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyc2VTZWxlY3RvcihvYmplY3QpKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnXG4gIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKVxuXG4gIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG4gIH1cblxuICBpZiAoY2xvc2VkRGV0YWlscyAhPT0gZWxlbWVudCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKVxuICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG4vKipcbiAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4gdm9pZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuaGFycnl0aGVvLmNvbS9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICovXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbn1cblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdXG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSAocG9zc2libGVDYWxsYmFjaywgYXJncyA9IFtdLCBkZWZhdWx0VmFsdWUgPSBwb3NzaWJsZUNhbGxiYWNrKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgcG9zc2libGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHBvc3NpYmxlQ2FsbGJhY2suY2FsbCguLi5hcmdzKSA6IGRlZmF1bHRWYWx1ZVxufVxuXG5jb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodHJhbnNpdGlvbkVsZW1lbnQpICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgY29uc3QgaGFuZGxlciA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB0cmFuc2l0aW9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gIH1cblxuICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpXG4gICAgfVxuICB9LCBlbXVsYXRlZER1cmF0aW9uKVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcHJldmlvdXMvbmV4dCBlbGVtZW50IG9mIGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudCAgIFRoZSBhY3RpdmUgZWxlbWVudFxuICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gKiBAcmV0dXJuIHtFbGVtZW50fGVsZW19IFRoZSBwcm9wZXIgZWxlbWVudFxuICovXG5jb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG5cbiAgLy8gaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3QgcmV0dXJuIGFuIGVsZW1lbnRcbiAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAhc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3RbbGlzdExlbmd0aCAtIDFdIDogbGlzdFswXVxuICB9XG5cbiAgaW5kZXggKz0gc2hvdWxkR2V0TmV4dCA/IDEgOiAtMVxuXG4gIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgIGluZGV4ID0gKGluZGV4ICsgbGlzdExlbmd0aCkgJSBsaXN0TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gbGlzdFtNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgbGlzdExlbmd0aCAtIDEpKV1cbn1cblxuZXhwb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0alF1ZXJ5LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wLFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIHBhcnNlU2VsZWN0b3IsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHRvVHlwZVxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuXG5jb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFtcbiAgJ2NsaWNrJyxcbiAgJ2RibGNsaWNrJyxcbiAgJ21vdXNldXAnLFxuICAnbW91c2Vkb3duJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ21vdXNld2hlZWwnLFxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAnbW91c2VvdmVyJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlbW92ZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzZWxlY3RlbmQnLFxuICAna2V5ZG93bicsXG4gICdrZXlwcmVzcycsXG4gICdrZXl1cCcsXG4gICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZScsXG4gICd0b3VjaGVuZCcsXG4gICd0b3VjaGNhbmNlbCcsXG4gICdwb2ludGVyZG93bicsXG4gICdwb2ludGVybW92ZScsXG4gICdwb2ludGVydXAnLFxuICAncG9pbnRlcmxlYXZlJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAnZ2VzdHVyZXN0YXJ0JyxcbiAgJ2dlc3R1cmVjaGFuZ2UnLFxuICAnZ2VzdHVyZWVuZCcsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ2NoYW5nZScsXG4gICdyZXNldCcsXG4gICdzZWxlY3QnLFxuICAnc3VibWl0JyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnbG9hZCcsXG4gICd1bmxvYWQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ3Jlc2l6ZScsXG4gICdtb3ZlJyxcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICdlcnJvcicsXG4gICdhYm9ydCcsXG4gICdzY3JvbGwnXG5dKVxuXG4vKipcbiAqIFByaXZhdGUgbWV0aG9kc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VFdmVudFVpZChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuICh1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWApIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrK1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpIHtcbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpXG5cbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZFxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge31cblxuICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdXG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiBlbGVtZW50IH0pXG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiB0YXJnZXQgfSlcblxuICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgY2FsbGFibGUsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRzKVxuICAgIC5maW5kKGV2ZW50ID0+IGV2ZW50LmNhbGxhYmxlID09PSBjYWxsYWJsZSAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcilcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gIGNvbnN0IGlzRGVsZWdhdGVkID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIC8vIFRPRE86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogKGhhbmRsZXIgfHwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KVxuXG4gIGlmICghbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcblxuICAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG4gICAgY29uc3Qgd3JhcEZ1bmN0aW9uID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKVxuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0Z1bmN0aW9uID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0Z1bmN0aW9uKSB7XG4gICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGNhbGxhYmxlKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSlcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLmNhbGxhYmxlID0gY2FsbGFibGVcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBpc0RlbGVnYXRlZClcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBmb3IgKGNvbnN0IFtoYW5kbGVyS2V5LCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnRcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudEV2ZW50IG9mIE9iamVjdC5rZXlzKGV2ZW50cykpIHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXlIYW5kbGVycywgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudClcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcblxuICAgIGxldCBqUXVlcnlFdmVudCA9IG51bGxcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBjb25zdCBldnQgPSBoeWRyYXRlT2JqKG5ldyBFdmVudChldmVudCwgeyBidWJibGVzLCBjYW5jZWxhYmxlOiB0cnVlIH0pLCBhcmdzKVxuXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgIH1cblxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlT2JqKG9iaiwgbWV0YSA9IHt9KSB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGEpKSB7XG4gICAgdHJ5IHtcbiAgICAgIG9ialtrZXldID0gdmFsdWVcbiAgICB9IGNhdGNoIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBic0tleXMpIHtcbiAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEpXG4gICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb25maWcuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IHsgaXNFbGVtZW50LCB0b1R5cGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDb25maWcge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgY29uc3QganNvbkNvbmZpZyA9IGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge30gLy8gdHJ5IHRvIHBhcnNlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBqc29uQ29uZmlnID09PSAnb2JqZWN0JyA/IGpzb25Db25maWcgOiB7fSksXG4gICAgICAuLi4oaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gIH1cblxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgZm9yIChjb25zdCBbcHJvcGVydHksIGV4cGVjdGVkVHlwZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgICBjb25zdCB2YWx1ZVR5cGUgPSBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YS5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi91dGlsL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjMuOCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eU5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudClcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG5cbiAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNEaXNhYmxlZCwgaXNWaXNpYmxlLCBwYXJzZVNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAoIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yID8gc2VsZWN0b3Iuc3BsaXQoJywnKS5tYXAoc2VsID0+IHBhcnNlU2VsZWN0b3Ioc2VsKSkuam9pbignLCcpIDogbnVsbFxufVxuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcblxuICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBmb2N1c2FibGVzID0gW1xuICAgICAgJ2EnLFxuICAgICAgJ2J1dHRvbicsXG4gICAgICAnaW5wdXQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2RldGFpbHMnLFxuICAgICAgJ1t0YWJpbmRleF0nLFxuICAgICAgJ1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJ1xuICAgIF0ubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pYCkuam9pbignLCcpXG5cbiAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSlcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgOiBudWxsXG4gIH0sXG5cbiAgZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikgOiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRGlzYWJsZWQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5jb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YFxuICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUVcblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKSB8fCB0aGlzLmNsb3Nlc3QoYC4ke25hbWV9YClcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICAgIC8vIE1ldGhvZCBhcmd1bWVudCBpcyBsZWZ0LCBmb3IgQWxlcnQgYW5kIG9ubHksIGFzIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSAnaGlkZScgbWV0aG9kXG4gICAgaW5zdGFuY2VbbWV0aG9kXSgpXG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyXG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0UpXG5cbiAgICBpZiAoY2xvc2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kZXN0cm95RWxlbWVudCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICAgIHRoaXMuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBBbGVydC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoQWxlcnQsICdjbG9zZScpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEFsZXJ0KVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSdcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UoYnV0dG9uKVxuXG4gIGRhdGEudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbilcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc3dpcGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc3dpcGUnXG5jb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJ1xuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGVuZENhbGxiYWNrOiBudWxsLFxuICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kZWx0YVggPSAwXG4gICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG4gICAgdGhpcy5faW5pdEV2ZW50cygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9zdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFhcbiAgICB9XG4gIH1cblxuICBfZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKVxuICB9XG5cbiAgX21vdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAwIDpcbiAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVhcblxuICAgIHRoaXMuX2RlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spXG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU3dpcGUgZnJvbSAnLi91dGlsL3N3aXBlLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU1cbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICBbQVJST1dfUklHSFRfS0VZXTogRElSRUNUSU9OX0xFRlRcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgcmlkZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB3cmFwOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLCAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICB0b3VjaDogJ2Jvb2xlYW4nLFxuICB3cmFwOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbFxuXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gIH1cblxuICBjeWNsZSgpIHtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgfVxuXG4gIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jeWNsZSgpXG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKVxuICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWxcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCAoKSA9PiB0aGlzLnBhdXNlKCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgfVxuXG4gICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICB9XG5cbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZylcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV1cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsXG4gIH1cblxuICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcClcblxuICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpXG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIC8vIFRPRE86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5wYXVzZSgpXG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG5cbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSlcbiAgfVxuXG4gIF9nZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9jbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gIGlmIChzbGlkZUluZGV4KSB7XG4gICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgY2Fyb3VzZWwubmV4dCgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2Fyb3VzZWwucHJldigpXG4gIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2NvbGxhcHNlJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJ1xuY29uc3QgQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4gPSBgOnNjb3BlIC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YFxuY29uc3QgQ0xBU1NfTkFNRV9IT1JJWk9OVEFMID0gJ2NvbGxhcHNlLWhvcml6b250YWwnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgcGFyZW50OiBudWxsLFxuICB0b2dnbGU6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHBhcmVudDogJyhudWxsfGVsZW1lbnQpJyxcbiAgdG9nZ2xlOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29sbGFwc2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgdG9nZ2xlTGlzdCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3RvckVuZ2luZS5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW1lbnQgPT4gZm91bmRFbGVtZW50ID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0aWFsaXplQ2hpbGRyZW4oKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0aGlzLl9pc1Nob3duKCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVDaGlsZHJlbiA9IFtdXG5cbiAgICAvLyBmaW5kIGFjdGl2ZSBjaGlsZHJlblxuICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICBhY3RpdmVDaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkVTKVxuICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudClcbiAgICAgICAgLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgeyB0b2dnbGU6IGZhbHNlIH0pKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVDaGlsZHJlbi5sZW5ndGggJiYgYWN0aXZlQ2hpbGRyZW5bMF0uX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhY3RpdmVJbnN0YW5jZSBvZiBhY3RpdmVDaGlsZHJlbikge1xuICAgICAgYWN0aXZlSW5zdGFuY2UuaGlkZSgpXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0cnVlKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbdHJpZ2dlcl0sIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfSE9SSVpPTlRBTCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2luaXRpYWxpemVDaGlsZHJlbigpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbZWxlbWVudF0sIHRoaXMuX2lzU2hvd24oc2VsZWN0ZWQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmQoQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4sIHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgLy8gcmVtb3ZlIGNoaWxkcmVuIGlmIGdyZWF0ZXIgZGVwdGhcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fY29uZmlnLnBhcmVudCkuZmlsdGVyKGVsZW1lbnQgPT4gIWNoaWxkcmVuLmluY2x1ZGVzKGVsZW1lbnQpKVxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0cmlnZ2VyQXJyYXksIGlzT3Blbikge1xuICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRyaWdnZXJBcnJheSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgY29uc3QgX2NvbmZpZyA9IHt9XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgX2NvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IChldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiBldmVudC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lID09PSAnQScpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IodGhpcykpIHtcbiAgICBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KS50b2dnbGUoKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LiR7Q0xBU1NfTkFNRV9TSE9XfWBcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcidcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b0Nsb3NlOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlUG9wcGVyKClcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBzdXBlci5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi8pJylcbiAgICB9XG5cbiAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudFxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudFxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9UT1BDRU5URVJcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVJcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJykgLy8gVE9ETzogdjYgcmVtb3ZlXG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW3VuZGVmaW5lZCwgZGVmYXVsdEJzUG9wcGVyQ29uZmlnXSlcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0TWVudUl0ZW0oeyBrZXksIHRhcmdldCB9KSB7XG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihlbGVtZW50ID0+IGlzVmlzaWJsZShlbGVtZW50KSlcblxuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBpZiB0YXJnZXQgaXNuJ3QgaW5jbHVkZWQgaW4gaXRlbXMgKGUuZy4gd2hlbiBleHBhbmRpbmcgdGhlIGRyb3Bkb3duKVxuICAgIC8vIGFsbG93IGN5Y2xpbmcgdG8gZ2V0IHRoZSBsYXN0IGl0ZW0gaW4gY2FzZSBrZXkgZXF1YWxzIEFSUk9XX1VQX0tFWVxuICAgIGdldE5leHRBY3RpdmVFbGVtZW50KGl0ZW1zLCB0YXJnZXQsIGtleSA9PT0gQVJST1dfRE9XTl9LRVksICFpdGVtcy5pbmNsdWRlcyh0YXJnZXQpKS5mb2N1cygpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcGVuVG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04pXG5cbiAgICBmb3IgKGNvbnN0IHRvZ2dsZSBvZiBvcGVuVG9nZ2xlcykge1xuICAgICAgY29uc3QgY29udGV4dCA9IERyb3Bkb3duLmdldEluc3RhbmNlKHRvZ2dsZSlcbiAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpXG4gICAgICBpZiAoXG4gICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ2luc2lkZScgJiYgIWlzTWVudVRhcmdldCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdvdXRzaWRlJyAmJiBpc01lbnVUYXJnZXQpXG4gICAgICApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ID09PSBUQUJfS0VZKSB8fCAvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnQgfVxuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGFuIFVQIHwgRE9XTiB8IEVTQ0FQRSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhICYmIGlmIGtleSBpcyBvdGhlciB0aGFuIEVTQ0FQRSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG5cbiAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSlcbiAgICBjb25zdCBpc0VzY2FwZUV2ZW50ID0gZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZXG4gICAgY29uc3QgaXNVcE9yRG93bkV2ZW50ID0gW0FSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcblxuICAgIGlmICghaXNVcE9yRG93bkV2ZW50ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNJbnB1dCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSkgP1xuICAgICAgdGhpcyA6XG4gICAgICAoU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF0gfHxcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF0gfHxcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQuZGVsZWdhdGVUYXJnZXQucGFyZW50Tm9kZSkpXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UoZ2V0VG9nZ2xlQnV0dG9uKVxuXG4gICAgaWYgKGlzVXBPckRvd25FdmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLnNob3coKVxuICAgICAgaW5zdGFuY2UuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLl9pc1Nob3duKCkpIHsgLy8gZWxzZSBpcyBlc2NhcGUgYW5kIHdlIGNoZWNrIGlmIGl0IGlzIHNob3duXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2UuaGlkZSgpXG4gICAgICBnZXRUb2dnbGVCdXR0b24uZm9jdXMoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9iYWNrZHJvcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgZXhlY3V0ZSwgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCwgcmVmbG93XG59IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdiYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRX1gXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGNsYXNzTmFtZTogJ21vZGFsLWJhY2tkcm9wJyxcbiAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBjbGlja0NhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICcoZWxlbWVudHxzdHJpbmcpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSB0aGlzLl9jb25maWcuY2xhc3NOYW1lXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyB1c2UgZ2V0RWxlbWVudCgpIHdpdGggdGhlIGRlZmF1bHQgXCJib2R5XCIgdG8gZ2V0IGEgZnJlc2ggRWxlbWVudCBvbiBlYWNoIGluc3RhbnRpYXRpb25cbiAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYXBwZW5kKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgdGhpcy5fZ2V0RWxlbWVudCgpLCB0aGlzLl9jb25maWcuaXNBbmltYXRlZClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2ZvY3VzdHJhcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdmb2N1c3RyYXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5mb2N1c3RyYXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9UQUIgPSBga2V5ZG93bi50YWIke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgVEFCX05BVl9GT1JXQVJEID0gJ2ZvcndhcmQnXG5jb25zdCBUQUJfTkFWX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvZm9jdXM6IHRydWUsXG4gIHRyYXBFbGVtZW50OiBudWxsIC8vIFRoZSBlbGVtZW50IHRvIHRyYXAgZm9jdXMgaW5zaWRlIG9mXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhdXRvZm9jdXM6ICdib29sZWFuJyxcbiAgdHJhcEVsZW1lbnQ6ICdlbGVtZW50J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBGb2N1c1RyYXAgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9mb2N1cykge1xuICAgICAgdGhpcy5fY29uZmlnLnRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpXG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWVcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2hhbmRsZUZvY3VzaW4oZXZlbnQpIHtcbiAgICBjb25zdCB7IHRyYXBFbGVtZW50IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmIChldmVudC50YXJnZXQgPT09IGRvY3VtZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdHJhcEVsZW1lbnQgfHwgdHJhcEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5mb2N1c2FibGVDaGlsZHJlbih0cmFwRWxlbWVudClcblxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPT09IFRBQl9OQVZfQkFDS1dBUkQpIHtcbiAgICAgIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudHNbMF0uZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSAhPT0gVEFCX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IGV2ZW50LnNoaWZ0S2V5ID8gVEFCX05BVl9CQUNLV0FSRCA6IFRBQl9OQVZfRk9SV0FSRFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvY3VzVHJhcFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5jb25zdCBQUk9QRVJUWV9QQURESU5HID0gJ3BhZGRpbmctcmlnaHQnXG5jb25zdCBQUk9QRVJUWV9NQVJHSU4gPSAnbWFyZ2luLXJpZ2h0J1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxCYXJIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldFdpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpXG4gICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4sIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTilcbiAgfVxuXG4gIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSA+IDBcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9XG5cbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGApXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHksIGFjdHVhbFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgaWYgKGlzRWxlbWVudChzZWxlY3RvcikpIHtcbiAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGNhbGxCYWNrKHNlbClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQmFySGVscGVyXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcC5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbiwgaXNSVEwsIGlzVmlzaWJsZSwgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhci5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ21vZGFsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnXG5cbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm1vZGFsLnNob3cnXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgZm9jdXM6ICdib29sZWFuJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIHRoaXMuX3Njcm9sbEJhci5oaWRlKClcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYod2luZG93LCBFVkVOVF9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlLFxuICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgLy8gdHJ5IHRvIGFwcGVuZCBkeW5hbWljIG1vZGFsXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG4gICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiAhdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gICAgICB9XG4gICAgfSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgLy8gYSBiYWQgdHJpY2sgdG8gc2VncmVnYXRlIGNsaWNrcyB0aGF0IG1heSBzdGFydCBpbnNpZGUgZGlhbG9nIGJ1dCBlbmQgb3V0c2lkZSwgYW5kIGF2b2lkIGxpc3RlbiB0byBzY3JvbGxiYXIgY2xpY2tzXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50MiA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9zY3JvbGxCYXIucmVzZXQoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBpbml0aWFsT3ZlcmZsb3dZID0gdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1lcbiAgICAvLyByZXR1cm4gaWYgdGhlIGZvbGxvd2luZyBiYWNrZ3JvdW5kIHRyYW5zaXRpb24gaGFzbid0IHlldCBjb21wbGV0ZWRcbiAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxPdmVyZmxvd1lcbiAgICAgIH0sIHRoaXMuX2RpYWxvZylcbiAgICB9LCB0aGlzLl9kaWFsb2cpXG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgKi9cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKClcbiAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMFxuXG4gICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIG1vZGFsIHRvZ2dsZXIgd2hpbGUgYW5vdGhlciBvbmUgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuKSB7XG4gICAgTW9kYWwuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbClcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcC5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGlzRGlzYWJsZWQsXG4gIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXIuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURJTkcgPSAnaGlkaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdvZmZjYW52YXMtYmFja2Ryb3AnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCB8fCB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORylcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKClcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX0hJRElORylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICBjb25zdCBjbGlja0NhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgIGNvbnN0IGlzVmlzaWJsZSA9IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKVxuXG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBjbGFzc05hbWU6IENMQVNTX05BTUVfQkFDS0RST1AsXG4gICAgICBpc1Zpc2libGUsXG4gICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgcm9vdEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KClcbiAgfVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKCdbYXJpYS1tb2RhbF1bY2xhc3MqPXNob3ddW2NsYXNzKj1vZmZjYW52YXMtXScpKSB7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKVxuICAgIH1cbiAgfVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoT2ZmY2FudmFzKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8vIGpzLWRvY3Mtc3RhcnQgYWxsb3ctbGlzdFxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRkOiBbXSxcbiAgZGl2OiBbXSxcbiAgZGw6IFtdLFxuICBkdDogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG4vLyBqcy1kb2NzLWVuZCBhbGxvdy1saXN0XG5cbmNvbnN0IHVyaUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBVUkxzIHRoYXQgYXJlIHNhZmUgd3J0LiBYU1MgaW4gVVJMIG5hdmlnYXRpb25cbiAqIGNvbnRleHRzLlxuICpcbiAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xNS4yLjgvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHMjTDM4XG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/IWphdmFzY3JpcHQ6KSg/OlthLXowLTkrLi1dKzp8W14mOi8/I10qKD86Wy8/I118JCkpL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgIGlmICh1cmlBdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgcmV0dXJuIGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyaWJ1dGVSZWdleCA9PiBhdHRyaWJ1dGVSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAuc29tZShyZWdleCA9PiByZWdleC50ZXN0KGF0dHJpYnV0ZU5hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGdW5jdGlvbikge1xuICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZ1bmN0aW9uICYmIHR5cGVvZiBzYW5pdGl6ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRnVuY3Rpb24odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnROYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGFsbG93TGlzdCkuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWxlbWVudC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxlbWVudE5hbWVdIHx8IFtdKVxuXG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlTGlzdCkge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IERlZmF1bHRBbGxvd2xpc3QsIHNhbml0aXplSHRtbCB9IGZyb20gJy4vc2FuaXRpemVyLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZSwgZ2V0RWxlbWVudCwgaXNFbGVtZW50IH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RlbXBsYXRlRmFjdG9yeSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBjb250ZW50OiB7fSwgLy8geyBzZWxlY3RvciA6IHRleHQgLCAgc2VsZWN0b3IyIDogdGV4dDIgLCB9XG4gIGV4dHJhQ2xhc3M6ICcnLFxuICBodG1sOiBmYWxzZSxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBjb250ZW50OiAnb2JqZWN0JyxcbiAgZXh0cmFDbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnXG59XG5cbmNvbnN0IERlZmF1bHRDb250ZW50VHlwZSA9IHtcbiAgZW50cnk6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb258bnVsbCknLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KVxuICAgICAgLm1hcChjb25maWcgPT4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29uZmlnKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuX2NoZWNrQ29udGVudChjb250ZW50KVxuICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0geyAuLi50aGlzLl9jb25maWcuY29udGVudCwgLi4uY29udGVudCB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRvSHRtbCgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSlcblxuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCB0ZXh0XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcuY29udGVudCkpIHtcbiAgICAgIHRoaXMuX3NldENvbnRlbnQodGVtcGxhdGVXcmFwcGVyLCB0ZXh0LCBzZWxlY3RvcilcbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXVxuICAgIGNvbnN0IGV4dHJhQ2xhc3MgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcylcblxuICAgIGlmIChleHRyYUNsYXNzKSB7XG4gICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcpIHtcbiAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29uZmlnLmNvbnRlbnQpXG4gIH1cblxuICBfY2hlY2tDb250ZW50KGFyZykge1xuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhhcmcpKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHsgc2VsZWN0b3IsIGVudHJ5OiBjb250ZW50IH0sIERlZmF1bHRDb250ZW50VHlwZSlcbiAgICB9XG4gIH1cblxuICBfc2V0Q29udGVudCh0ZW1wbGF0ZSwgY29udGVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSlcblxuICAgIGlmICghdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZW50ID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudClcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICB0aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShnZXRFbGVtZW50KGNvbnRlbnQpLCB0ZW1wbGF0ZUVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gIH1cblxuICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplID8gc2FuaXRpemVIdG1sKGFyZywgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pIDogYXJnXG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdW5kZWZpbmVkLCB0aGlzXSlcbiAgfVxuXG4gIF9wdXRFbGVtZW50SW5UZW1wbGF0ZShlbGVtZW50LCB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbiwgZXhlY3V0ZSwgZmluZFNoYWRvd1Jvb3QsIGdldEVsZW1lbnQsIGdldFVJRCwgaXNSVEwsIG5vb3Bcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IHsgRGVmYXVsdEFsbG93bGlzdCB9IGZyb20gJy4vdXRpbC9zYW5pdGl6ZXIuanMnXG5pbXBvcnQgVGVtcGxhdGVGYWN0b3J5IGZyb20gJy4vdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcbmNvbnN0IFNFTEVDVE9SX01PREFMID0gYC4ke0NMQVNTX05BTUVfTU9EQUx9YFxuXG5jb25zdCBFVkVOVF9NT0RBTF9ISURFID0gJ2hpZGUuYnMubW9kYWwnXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJ1xuY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuY29uc3QgRVZFTlRfSElERSA9ICdoaWRlJ1xuY29uc3QgRVZFTlRfSElEREVOID0gJ2hpZGRlbidcbmNvbnN0IEVWRU5UX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX1NIT1dOID0gJ3Nob3duJ1xuY29uc3QgRVZFTlRfSU5TRVJURUQgPSAnaW5zZXJ0ZWQnXG5jb25zdCBFVkVOVF9DTElDSyA9ICdjbGljaydcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSAnZm9jdXNpbidcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gJ2ZvY3Vzb3V0J1xuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9ICdtb3VzZWVudGVyJ1xuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9ICdtb3VzZWxlYXZlJ1xuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPOiAnYXV0bycsXG4gIFRPUDogJ3RvcCcsXG4gIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBhbmltYXRpb246IHRydWUsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBkZWxheTogMCxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICBodG1sOiBmYWxzZSxcbiAgb2Zmc2V0OiBbMCwgNl0sXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gIHRpdGxlOiAnJyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi8pJylcbiAgICB9XG5cbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBudWxsXG4gICAgdGhpcy5fbmV3Q29udGVudCA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2xlYXZlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VudGVyKClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSlcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLl9pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPVykpXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNJblRoZURvbSA9IChzaGFkb3dSb290IHx8IHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRPRE86IHY2IHJlbW92ZSB0aGlzIG9yIG1ha2UgaXQgb3B0aW9uYWxcbiAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXAuZ2V0QXR0cmlidXRlKCdpZCcpKVxuXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXApXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9JTlNFUlRFRCkpXG4gICAgfVxuXG4gICAgdGhpcy5fcG9wcGVyID0gdGhpcy5fY3JlYXRlUG9wcGVyKHRpcClcblxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XTikpXG5cbiAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElERSkpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KClcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZVxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGwgLy8gaXQgaXMgYSB0cmljayB0byBzdXBwb3J0IG1hbnVhbCB0cmlnZ2VyaW5nXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURERU4pKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG4gIF9pc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX2dldFRpdGxlKCkpXG4gIH1cblxuICBfZ2V0VGlwRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMudGlwKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudCB8fCB0aGlzLl9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIF9jcmVhdGVUaXBFbGVtZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkudG9IdG1sKClcblxuICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGNoZWNrIGluIHY2XG4gICAgaWYgKCF0aXApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgLy8gVE9ETzogdjYgdGhlIGZvbGxvd2luZyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgb25seVxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKGBicy0ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXV0b2ApXG5cbiAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKClcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG5cbiAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpcFxuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5fbmV3Q29udGVudCA9IGNvbnRlbnRcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KSB7XG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlRmFjdG9yeSkge1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5LmNoYW5nZUNvbnRlbnQoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbmV3IFRlbXBsYXRlRmFjdG9yeSh7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgLy8gdGhlIGBjb250ZW50YCB2YXIgaGFzIHRvIGJlIGFmdGVyIGB0aGlzLl9jb25maWdgXG4gICAgICAgIC8vIHRvIG92ZXJyaWRlIGNvbmZpZy5jb250ZW50IGluIGNhc2Ugb2YgcG9wb3ZlclxuICAgICAgICBjb250ZW50LFxuICAgICAgICBleHRyYUNsYXNzOiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3RvcnlcbiAgfVxuXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9UT09MVElQX0lOTkVSXTogdGhpcy5fZ2V0VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLnRpdGxlKSB8fCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRPckNyZWF0ZUluc3RhbmNlKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hbmltYXRpb24gfHwgKHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfY3JlYXRlUG9wcGVyKHRpcCkge1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IGV4ZWN1dGUodGhpcy5fY29uZmlnLnBsYWNlbWVudCwgW3RoaXMsIHRpcCwgdGhpcy5fZWxlbWVudF0pXG4gICAgY29uc3QgYXR0YWNobWVudCA9IEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gICAgcmV0dXJuIFBvcHBlci5jcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXMuX2VsZW1lbnQsIHRoaXMuX2VsZW1lbnRdKVxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG4gICAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbdW5kZWZpbmVkLCBkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9ICEoY29udGV4dC5faXNTaG93bigpICYmIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10pXG4gICAgICAgICAgY29udGV4dC50b2dnbGUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4pXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUKVxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZVxuICAgICAgICAgIGNvbnRleHQuX2VudGVyKClcbiAgICAgICAgfSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9XG4gICAgICAgICAgICBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKSAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpXG4gIH1cblxuICBfZW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKCkge1xuICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dClcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpIHtcbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlXG4gICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJ1xuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICAgIHRoaXMudGlwID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcC5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBjb250ZW50OiAnJyxcbiAgb2Zmc2V0OiBbMCwgOF0sXG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArXG4gICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnY2xpY2snXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBPdmVycmlkZXNcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICBbU0VMRUNUT1JfQ09OVEVOVF06IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldEVsZW1lbnQsIGlzRGlzYWJsZWQsIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzY3JvbGxzcHknXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWBcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IG51bGwsIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yNSUnLFxuICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuICB0YXJnZXQ6IG51bGwsXG4gIHRocmVzaG9sZDogWzAuMSwgMC41LCAxXVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsIC8vIFRPRE8gdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJ3N0cmluZycsXG4gIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICB0YXJnZXQ6ICdlbGVtZW50JyxcbiAgdGhyZXNob2xkOiAnYXJyYXknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyB0aGlzLl9lbGVtZW50IGlzIHRoZSBvYnNlcnZhYmxlc0NvbnRhaW5lciBhbmQgY29uZmlnLnRhcmdldCB0aGUgbWVudSBsaW5rcyB3cmFwcGVyXG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9vYnNlcnZlciA9IG51bGxcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICB2aXNpYmxlRW50cnlUb3A6IDAsXG4gICAgICBwYXJlbnRTY3JvbGxUb3A6IDBcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKCkgLy8gaW5pdGlhbGl6ZVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKVxuICAgIHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKClcblxuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbilcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuYm9keVxuXG4gICAgLy8gVE9ETzogdjYgT25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gVXNlIHJvb3RNYXJnaW4gb25seVxuICAgIGNvbmZpZy5yb290TWFyZ2luID0gY29uZmlnLm9mZnNldCA/IGAke2NvbmZpZy5vZmZzZXR9cHggMHB4IC0zMCVgIDogY29uZmlnLnJvb3RNYXJnaW5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZy50aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1bnJlZ2lzdGVyIGFueSBwcmV2aW91cyBsaXN0ZW5lcnNcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaClcbiAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3dcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgICAgaWYgKHJvb3Quc2Nyb2xsVG8pIHtcbiAgICAgICAgICByb290LnNjcm9sbFRvKHsgdG9wOiBoZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG4gICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9nZXROZXdPYnNlcnZlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMuX2NvbmZpZy50aHJlc2hvbGQsXG4gICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKVxuICB9XG5cbiAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICBfb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApXG4gICAgY29uc3QgYWN0aXZhdGUgPSBlbnRyeSA9PiB7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcFxuICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3BcbiAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3BcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIGRvd24sIHBpY2sgdGhlIGJpZ2dlciBvZmZzZXRUb3BcbiAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgICAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuICAgICAgICBpZiAoIXBhcmVudFNjcm9sbFRvcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyB1cCwgcGljayB0aGUgc21hbGxlc3Qgb2Zmc2V0VG9wXG4gICAgICBpZiAoIXVzZXJTY3JvbGxzRG93biAmJiAhZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCkge1xuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG5cbiAgICBjb25zdCB0YXJnZXRMaW5rcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVEFSR0VUX0xJTktTLCB0aGlzLl9jb25maWcudGFyZ2V0KVxuXG4gICAgZm9yIChjb25zdCBhbmNob3Igb2YgdGFyZ2V0TGlua3MpIHtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcbiAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgdGhpcy5fdGFyZ2V0TGlua3Muc2V0KGRlY29kZVVSSShhbmNob3IuaGFzaCksIGFuY2hvcilcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnNldChhbmNob3IuaGFzaCwgb2JzZXJ2YWJsZVNlY3Rpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldClcblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7IHJlbGF0ZWRUYXJnZXQ6IHRhcmdldCB9KVxuICB9XG5cbiAgX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpIHtcbiAgICAvLyBBY3RpdmF0ZSBkcm9wZG93biBwYXJlbnRzXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RHcm91cCBvZiBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRhcmdldCwgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApKSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTElOS19JVEVNUykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jbGVhckFjdGl2ZUNsYXNzKHBhcmVudCkge1xuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRX1gLCBwYXJlbnQpXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGFjdGl2ZU5vZGVzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNweSBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKSkge1xuICAgIFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHNweSlcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldE5leHRBY3RpdmVFbGVtZW50LCBpc0Rpc2FibGVkIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBIT01FX0tFWSA9ICdIb21lJ1xuY29uc3QgRU5EX0tFWSA9ICdFbmQnXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bidcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9IGA6bm90KCR7U0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSlgXG5cbmNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWBcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScgLy8gVE9ETzogY291bGQgb25seSBiZSBgdGFiYCBpbiB2NlxuY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKVxuXG4gICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgICAgLy8gVE9ETzogc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBpbiB2NlxuICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7IC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudFxuICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKClcblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUsIHsgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0OiBhY3RpdmUgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSlcbiAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICB0aGlzLl9hY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBlbGVtZW50LmJsdXIoKVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiwgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbSB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICghKFtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZLCBIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKGVsZW1lbnQgPT4gIWlzRGlzYWJsZWQoZWxlbWVudCkpXG4gICAgbGV0IG5leHRBY3RpdmVFbGVtZW50XG5cbiAgICBpZiAoW0hPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGNoaWxkcmVuW2V2ZW50LmtleSA9PT0gSE9NRV9LRVkgPyAwIDogY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNOZXh0ID0gW0FSUk9XX1JJR0hUX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoY2hpbGRyZW4sIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldENoaWxkcmVuKCkgeyAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKVxuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZClcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSlcblxuICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZClcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJylcblxuICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCR7Y2hpbGQuaWR9YClcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KVxuICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3BlbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKVxuICB9XG5cbiAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KClcbn0pXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuICovXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KVxuICB9XG59KVxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgcmVmbG93IH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndG9hc3QnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJyAvLyBAZGVwcmVjYXRlZCAtIGtlcHQgaGVyZSBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcblxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpIC8vIEBkZXByZWNhdGVkXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKSAvLyBAZGVwcmVjYXRlZFxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORywgQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLmlzU2hvd24oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIGlzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX21heWJlU2NoZWR1bGVIaWRlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgfVxuXG4gIF9vbkludGVyYWN0aW9uKGV2ZW50LCBpc0ludGVyYWN0aW5nKSB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgY2FzZSAnbW91c2VvdXQnOiB7XG4gICAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgY2FzZSAnZm9jdXNvdXQnOiB7XG4gICAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKFRvYXN0KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFBQTtBQUFBLElBQUE7QUFBQSw0QkFBQUE7QUFBQSxJQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FPLE1BQUksTUFBTTtBQUNWLE1BQUksU0FBUztBQUNiLE1BQUksUUFBUTtBQUNaLE1BQUksT0FBTztBQUNYLE1BQUksT0FBTztBQUNYLE1BQUksaUJBQWlCLENB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VSxvQkFBb0JaLE1BQU0sR0FBRztVQUNuRDtBQUVBcUUsZUFBS3JFLE1BQU0sRUFBRSxJQUFJO1FBQ25CO01BQ0YsQ0FBQztJQUNIO0VBQ0Y7QUFNQXVELHVCQUFxQnNrQixLQUFLO0FBTTFCbndCLHFCQUFtQm13QixLQUFLOyIsCiAgIm5hbWVzIjogWyJjcmVhdGVQb3BwZXIiLCAibmFtZSIsICJzdHlsZSIsICJnZXRDb21wdXRlZFN0eWxlIiwgImdldENvbXB1dGVkU3R5bGUiLCAid2luZG93IiwgIm1pbiIsICJtYXgiLCAidG9QYWRkaW5nT2JqZWN0IiwgInBvcHBlck9mZnNldHMiLCAibWluIiwgIm1heCIsICJvZmZzZXQiLCAiZWZmZWN0IiwgInBvcHBlciIsICJnZXRDb21wdXRlZFN0eWxlIiwgImVmZmVjdCIsICJ3aW5kb3ciLCAiaGFzaCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImdldENvbXB1dGVkU3R5bGUiLCAiY2xpcHBpbmdQYXJlbnRzIiwgImdldENvbXB1dGVkU3R5bGUiLCAicmVmZXJlbmNlIiwgInBvcHBlck9mZnNldHMiLCAib2Zmc2V0IiwgInBsYWNlbWVudHMiLCAicGxhY2VtZW50IiwgInBsYWNlbWVudHMiLCAicGxhY2VtZW50IiwgIl9sb29wIiwgIl9pIiwgImNoZWNrcyIsICJvZmZzZXQiLCAicG9wcGVyT2Zmc2V0cyIsICJvZmZzZXQiLCAibWluIiwgIm1heCIsICJmbiIsICJtZXJnZWQiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJjcmVhdGVQb3BwZXIiLCAicmVmZXJlbmNlIiwgInBvcHBlciIsICJvcHRpb25zIiwgImZuIiwgInN0YXRlIiwgImVmZmVjdCIsICJub29wRm4iLCAiY3JlYXRlUG9wcGVyIiwgImRlZmF1bHRNb2RpZmllcnMiLCAiY3JlYXRlUG9wcGVyIiwgImVsZW1lbnRNYXAiLCAiTWFwIiwgInNldCIsICJlbGVtZW50IiwgImtleSIsICJpbnN0YW5jZSIsICJoYXMiLCAiaW5zdGFuY2VNYXAiLCAiZ2V0IiwgInNpemUiLCAiY29uc29sZSIsICJlcnJvciIsICJBcnJheSIsICJmcm9tIiwgImtleXMiLCAicmVtb3ZlIiwgImRlbGV0ZSIsICJNQVhfVUlEIiwgIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwgIlRSQU5TSVRJT05fRU5EIiwgInBhcnNlU2VsZWN0b3IiLCAic2VsZWN0b3IiLCAid2luZG93IiwgIkNTUyIsICJlc2NhcGUiLCAicmVwbGFjZSIsICJtYXRjaCIsICJpZCIsICJ0b1R5cGUiLCAib2JqZWN0IiwgInVuZGVmaW5lZCIsICJPYmplY3QiLCAicHJvdG90eXBlIiwgInRvU3RyaW5nIiwgImNhbGwiLCAidG9Mb3dlckNhc2UiLCAiZ2V0VUlEIiwgInByZWZpeCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJkb2N1bWVudCIsICJnZXRFbGVtZW50QnlJZCIsICJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsICJ0cmFuc2l0aW9uRHVyYXRpb24iLCAidHJhbnNpdGlvbkRlbGF5IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCAic3BsaXQiLCAidHJpZ2dlclRyYW5zaXRpb25FbmQiLCAiZGlzcGF0Y2hFdmVudCIsICJFdmVudCIsICJpc0VsZW1lbnQiLCAianF1ZXJ5IiwgIm5vZGVUeXBlIiwgImdldEVsZW1lbnQiLCAibGVuZ3RoIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaXNWaXNpYmxlIiwgImdldENsaWVudFJlY3RzIiwgImVsZW1lbnRJc1Zpc2libGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJjbG9zZWREZXRhaWxzIiwgImNsb3Nlc3QiLCAic3VtbWFyeSIsICJwYXJlbnROb2RlIiwgImlzRGlzYWJsZWQiLCAiTm9kZSIsICJFTEVNRU5UX05PREUiLCAiY2xhc3NMaXN0IiwgImNvbnRhaW5zIiwgImRpc2FibGVkIiwgImhhc0F0dHJpYnV0ZSIsICJnZXRBdHRyaWJ1dGUiLCAiZmluZFNoYWRvd1Jvb3QiLCAiZG9jdW1lbnRFbGVtZW50IiwgImF0dGFjaFNoYWRvdyIsICJnZXRSb290Tm9kZSIsICJyb290IiwgIlNoYWRvd1Jvb3QiLCAibm9vcCIsICJyZWZsb3ciLCAib2Zmc2V0SGVpZ2h0IiwgImdldGpRdWVyeSIsICJqUXVlcnkiLCAiYm9keSIsICJET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzIiwgIm9uRE9NQ29udGVudExvYWRlZCIsICJjYWxsYmFjayIsICJyZWFkeVN0YXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicHVzaCIsICJpc1JUTCIsICJkaXIiLCAiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwgInBsdWdpbiIsICIkIiwgIm5hbWUiLCAiTkFNRSIsICJKUVVFUllfTk9fQ09ORkxJQ1QiLCAiZm4iLCAialF1ZXJ5SW50ZXJmYWNlIiwgIkNvbnN0cnVjdG9yIiwgIm5vQ29uZmxpY3QiLCAiZXhlY3V0ZSIsICJwb3NzaWJsZUNhbGxiYWNrIiwgImFyZ3MiLCAiZGVmYXVsdFZhbHVlIiwgImV4ZWN1dGVBZnRlclRyYW5zaXRpb24iLCAidHJhbnNpdGlvbkVsZW1lbnQiLCAid2FpdEZvclRyYW5zaXRpb24iLCAiZHVyYXRpb25QYWRkaW5nIiwgImVtdWxhdGVkRHVyYXRpb24iLCAiY2FsbGVkIiwgImhhbmRsZXIiLCAidGFyZ2V0IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAic2V0VGltZW91dCIsICJnZXROZXh0QWN0aXZlRWxlbWVudCIsICJsaXN0IiwgImFjdGl2ZUVsZW1lbnQiLCAic2hvdWxkR2V0TmV4dCIsICJpc0N5Y2xlQWxsb3dlZCIsICJsaXN0TGVuZ3RoIiwgImluZGV4IiwgImluZGV4T2YiLCAibWF4IiwgIm1pbiIsICJuYW1lc3BhY2VSZWdleCIsICJzdHJpcE5hbWVSZWdleCIsICJzdHJpcFVpZFJlZ2V4IiwgImV2ZW50UmVnaXN0cnkiLCAidWlkRXZlbnQiLCAiY3VzdG9tRXZlbnRzIiwgIm1vdXNlZW50ZXIiLCAibW91c2VsZWF2ZSIsICJuYXRpdmVFdmVudHMiLCAiU2V0IiwgIm1ha2VFdmVudFVpZCIsICJ1aWQiLCAiZ2V0RWxlbWVudEV2ZW50cyIsICJib290c3RyYXBIYW5kbGVyIiwgImV2ZW50IiwgImh5ZHJhdGVPYmoiLCAiZGVsZWdhdGVUYXJnZXQiLCAib25lT2ZmIiwgIkV2ZW50SGFuZGxlciIsICJvZmYiLCAidHlwZSIsICJhcHBseSIsICJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsICJkb21FbGVtZW50cyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImRvbUVsZW1lbnQiLCAiZmluZEhhbmRsZXIiLCAiZXZlbnRzIiwgImNhbGxhYmxlIiwgImRlbGVnYXRpb25TZWxlY3RvciIsICJ2YWx1ZXMiLCAiZmluZCIsICJub3JtYWxpemVQYXJhbWV0ZXJzIiwgIm9yaWdpbmFsVHlwZUV2ZW50IiwgImRlbGVnYXRpb25GdW5jdGlvbiIsICJpc0RlbGVnYXRlZCIsICJ0eXBlRXZlbnQiLCAiZ2V0VHlwZUV2ZW50IiwgImFkZEhhbmRsZXIiLCAid3JhcEZ1bmN0aW9uIiwgInJlbGF0ZWRUYXJnZXQiLCAiaGFuZGxlcnMiLCAicHJldmlvdXNGdW5jdGlvbiIsICJyZW1vdmVIYW5kbGVyIiwgIkJvb2xlYW4iLCAicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwgIm5hbWVzcGFjZSIsICJzdG9yZUVsZW1lbnRFdmVudCIsICJoYW5kbGVyS2V5IiwgImVudHJpZXMiLCAiaW5jbHVkZXMiLCAib24iLCAib25lIiwgImluTmFtZXNwYWNlIiwgImlzTmFtZXNwYWNlIiwgInN0YXJ0c1dpdGgiLCAiZWxlbWVudEV2ZW50IiwgInNsaWNlIiwgImtleUhhbmRsZXJzIiwgInRyaWdnZXIiLCAialF1ZXJ5RXZlbnQiLCAiYnViYmxlcyIsICJuYXRpdmVEaXNwYXRjaCIsICJkZWZhdWx0UHJldmVudGVkIiwgImlzUHJvcGFnYXRpb25TdG9wcGVkIiwgImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwgImlzRGVmYXVsdFByZXZlbnRlZCIsICJldnQiLCAiY2FuY2VsYWJsZSIsICJwcmV2ZW50RGVmYXVsdCIsICJvYmoiLCAibWV0YSIsICJ2YWx1ZSIsICJfdW51c2VkIiwgImRlZmluZVByb3BlcnR5IiwgImNvbmZpZ3VyYWJsZSIsICJub3JtYWxpemVEYXRhIiwgIkpTT04iLCAicGFyc2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIm5vcm1hbGl6ZURhdGFLZXkiLCAiY2hyIiwgIk1hbmlwdWxhdG9yIiwgInNldERhdGFBdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgInJlbW92ZURhdGFBdHRyaWJ1dGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgImdldERhdGFBdHRyaWJ1dGVzIiwgImF0dHJpYnV0ZXMiLCAiYnNLZXlzIiwgImRhdGFzZXQiLCAiZmlsdGVyIiwgInB1cmVLZXkiLCAiY2hhckF0IiwgImdldERhdGFBdHRyaWJ1dGUiLCAiQ29uZmlnIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiRXJyb3IiLCAiX2dldENvbmZpZyIsICJjb25maWciLCAiX21lcmdlQ29uZmlnT2JqIiwgIl9jb25maWdBZnRlck1lcmdlIiwgIl90eXBlQ2hlY2tDb25maWciLCAianNvbkNvbmZpZyIsICJjb25zdHJ1Y3RvciIsICJjb25maWdUeXBlcyIsICJwcm9wZXJ0eSIsICJleHBlY3RlZFR5cGVzIiwgInZhbHVlVHlwZSIsICJSZWdFeHAiLCAidGVzdCIsICJUeXBlRXJyb3IiLCAidG9VcHBlckNhc2UiLCAiVkVSU0lPTiIsICJCYXNlQ29tcG9uZW50IiwgIl9lbGVtZW50IiwgIl9jb25maWciLCAiRGF0YSIsICJEQVRBX0tFWSIsICJkaXNwb3NlIiwgIkVWRU5UX0tFWSIsICJwcm9wZXJ0eU5hbWUiLCAiZ2V0T3duUHJvcGVydHlOYW1lcyIsICJfcXVldWVDYWxsYmFjayIsICJpc0FuaW1hdGVkIiwgImdldEluc3RhbmNlIiwgImdldE9yQ3JlYXRlSW5zdGFuY2UiLCAiZXZlbnROYW1lIiwgImdldFNlbGVjdG9yIiwgImhyZWZBdHRyaWJ1dGUiLCAidHJpbSIsICJtYXAiLCAic2VsIiwgImpvaW4iLCAiU2VsZWN0b3JFbmdpbmUiLCAiY29uY2F0IiwgIkVsZW1lbnQiLCAiZmluZE9uZSIsICJjaGlsZHJlbiIsICJjaGlsZCIsICJtYXRjaGVzIiwgInBhcmVudHMiLCAiYW5jZXN0b3IiLCAicHJldiIsICJwcmV2aW91cyIsICJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwgIm5leHQiLCAibmV4dEVsZW1lbnRTaWJsaW5nIiwgImZvY3VzYWJsZUNoaWxkcmVuIiwgImZvY3VzYWJsZXMiLCAiZWwiLCAiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsICJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwgImdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IiLCAiZW5hYmxlRGlzbWlzc1RyaWdnZXIiLCAiY29tcG9uZW50IiwgIm1ldGhvZCIsICJjbGlja0V2ZW50IiwgInRhZ05hbWUiLCAiRVZFTlRfQ0xPU0UiLCAiRVZFTlRfQ0xPU0VEIiwgIkNMQVNTX05BTUVfRkFERSIsICJDTEFTU19OQU1FX1NIT1ciLCAiQWxlcnQiLCAiY2xvc2UiLCAiY2xvc2VFdmVudCIsICJfZGVzdHJveUVsZW1lbnQiLCAiZWFjaCIsICJkYXRhIiwgIkRBVEFfQVBJX0tFWSIsICJDTEFTU19OQU1FX0FDVElWRSIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJCdXR0b24iLCAidG9nZ2xlIiwgImJ1dHRvbiIsICJFVkVOVF9UT1VDSFNUQVJUIiwgIkVWRU5UX1RPVUNITU9WRSIsICJFVkVOVF9UT1VDSEVORCIsICJFVkVOVF9QT0lOVEVSRE9XTiIsICJFVkVOVF9QT0lOVEVSVVAiLCAiUE9JTlRFUl9UWVBFX1RPVUNIIiwgIlBPSU5URVJfVFlQRV9QRU4iLCAiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwgIlNXSVBFX1RIUkVTSE9MRCIsICJlbmRDYWxsYmFjayIsICJsZWZ0Q2FsbGJhY2siLCAicmlnaHRDYWxsYmFjayIsICJTd2lwZSIsICJpc1N1cHBvcnRlZCIsICJfZGVsdGFYIiwgIl9zdXBwb3J0UG9pbnRlckV2ZW50cyIsICJQb2ludGVyRXZlbnQiLCAiX2luaXRFdmVudHMiLCAiX3N0YXJ0IiwgInRvdWNoZXMiLCAiY2xpZW50WCIsICJfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCIsICJfZW5kIiwgIl9oYW5kbGVTd2lwZSIsICJfbW92ZSIsICJhYnNEZWx0YVgiLCAiYWJzIiwgImRpcmVjdGlvbiIsICJhZGQiLCAicG9pbnRlclR5cGUiLCAibmF2aWdhdG9yIiwgIm1heFRvdWNoUG9pbnRzIiwgIkFSUk9XX0xFRlRfS0VZIiwgIkFSUk9XX1JJR0hUX0tFWSIsICJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwgIk9SREVSX05FWFQiLCAiT1JERVJfUFJFViIsICJESVJFQ1RJT05fTEVGVCIsICJESVJFQ1RJT05fUklHSFQiLCAiRVZFTlRfU0xJREUiLCAiRVZFTlRfU0xJRCIsICJFVkVOVF9LRVlET1dOIiwgIkVWRU5UX01PVVNFRU5URVIiLCAiRVZFTlRfTU9VU0VMRUFWRSIsICJFVkVOVF9EUkFHX1NUQVJUIiwgIkVWRU5UX0xPQURfREFUQV9BUEkiLCAiQ0xBU1NfTkFNRV9DQVJPVVNFTCIsICJDTEFTU19OQU1FX1NMSURFIiwgIkNMQVNTX05BTUVfRU5EIiwgIkNMQVNTX05BTUVfU1RBUlQiLCAiQ0xBU1NfTkFNRV9ORVhUIiwgIkNMQVNTX05BTUVfUFJFViIsICJTRUxFQ1RPUl9BQ1RJVkUiLCAiU0VMRUNUT1JfSVRFTSIsICJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsICJTRUxFQ1RPUl9JVEVNX0lNRyIsICJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwgIlNFTEVDVE9SX0RBVEFfU0xJREUiLCAiU0VMRUNUT1JfREFUQV9SSURFIiwgIktFWV9UT19ESVJFQ1RJT04iLCAiaW50ZXJ2YWwiLCAia2V5Ym9hcmQiLCAicGF1c2UiLCAicmlkZSIsICJ0b3VjaCIsICJ3cmFwIiwgIkNhcm91c2VsIiwgIl9pbnRlcnZhbCIsICJfYWN0aXZlRWxlbWVudCIsICJfaXNTbGlkaW5nIiwgInRvdWNoVGltZW91dCIsICJfc3dpcGVIZWxwZXIiLCAiX2luZGljYXRvcnNFbGVtZW50IiwgIl9hZGRFdmVudExpc3RlbmVycyIsICJjeWNsZSIsICJfc2xpZGUiLCAibmV4dFdoZW5WaXNpYmxlIiwgImhpZGRlbiIsICJfY2xlYXJJbnRlcnZhbCIsICJfdXBkYXRlSW50ZXJ2YWwiLCAic2V0SW50ZXJ2YWwiLCAiX21heWJlRW5hYmxlQ3ljbGUiLCAidG8iLCAiaXRlbXMiLCAiX2dldEl0ZW1zIiwgImFjdGl2ZUluZGV4IiwgIl9nZXRJdGVtSW5kZXgiLCAiX2dldEFjdGl2ZSIsICJvcmRlciIsICJkZWZhdWx0SW50ZXJ2YWwiLCAiX2tleWRvd24iLCAiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCAiaW1nIiwgImVuZENhbGxCYWNrIiwgImNsZWFyVGltZW91dCIsICJzd2lwZUNvbmZpZyIsICJfZGlyZWN0aW9uVG9PcmRlciIsICJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsICJhY3RpdmVJbmRpY2F0b3IiLCAibmV3QWN0aXZlSW5kaWNhdG9yIiwgImVsZW1lbnRJbnRlcnZhbCIsICJwYXJzZUludCIsICJpc05leHQiLCAibmV4dEVsZW1lbnQiLCAibmV4dEVsZW1lbnRJbmRleCIsICJ0cmlnZ2VyRXZlbnQiLCAiX29yZGVyVG9EaXJlY3Rpb24iLCAic2xpZGVFdmVudCIsICJpc0N5Y2xpbmciLCAiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCAib3JkZXJDbGFzc05hbWUiLCAiY29tcGxldGVDYWxsQmFjayIsICJfaXNBbmltYXRlZCIsICJjbGVhckludGVydmFsIiwgImNhcm91c2VsIiwgInNsaWRlSW5kZXgiLCAiY2Fyb3VzZWxzIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsICJDTEFTU19OQU1FX0NPTExBUFNJTkciLCAiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCAiQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4iLCAiQ0xBU1NfTkFNRV9IT1JJWk9OVEFMIiwgIldJRFRIIiwgIkhFSUdIVCIsICJTRUxFQ1RPUl9BQ1RJVkVTIiwgInBhcmVudCIsICJDb2xsYXBzZSIsICJfaXNUcmFuc2l0aW9uaW5nIiwgIl90cmlnZ2VyQXJyYXkiLCAidG9nZ2xlTGlzdCIsICJlbGVtIiwgImZpbHRlckVsZW1lbnQiLCAiZm91bmRFbGVtZW50IiwgIl9pbml0aWFsaXplQ2hpbGRyZW4iLCAiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsICJfaXNTaG93biIsICJoaWRlIiwgInNob3ciLCAiYWN0aXZlQ2hpbGRyZW4iLCAiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsICJzdGFydEV2ZW50IiwgImFjdGl2ZUluc3RhbmNlIiwgImRpbWVuc2lvbiIsICJfZ2V0RGltZW5zaW9uIiwgInN0eWxlIiwgImNvbXBsZXRlIiwgImNhcGl0YWxpemVkRGltZW5zaW9uIiwgInNjcm9sbFNpemUiLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgInNlbGVjdGVkIiwgInRyaWdnZXJBcnJheSIsICJpc09wZW4iLCAiRVNDQVBFX0tFWSIsICJUQUJfS0VZIiwgIkFSUk9XX1VQX0tFWSIsICJBUlJPV19ET1dOX0tFWSIsICJSSUdIVF9NT1VTRV9CVVRUT04iLCAiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsICJFVkVOVF9LRVlVUF9EQVRBX0FQSSIsICJDTEFTU19OQU1FX0RST1BVUCIsICJDTEFTU19OQU1FX0RST1BFTkQiLCAiQ0xBU1NfTkFNRV9EUk9QU1RBUlQiLCAiQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSIiwgIkNMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOIiwgIlNFTEVDVE9SX01FTlUiLCAiU0VMRUNUT1JfTkFWQkFSIiwgIlNFTEVDVE9SX05BVkJBUl9OQVYiLCAiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsICJQTEFDRU1FTlRfVE9QIiwgIlBMQUNFTUVOVF9UT1BFTkQiLCAiUExBQ0VNRU5UX0JPVFRPTSIsICJQTEFDRU1FTlRfQk9UVE9NRU5EIiwgIlBMQUNFTUVOVF9SSUdIVCIsICJQTEFDRU1FTlRfTEVGVCIsICJQTEFDRU1FTlRfVE9QQ0VOVEVSIiwgIlBMQUNFTUVOVF9CT1RUT01DRU5URVIiLCAiYXV0b0Nsb3NlIiwgImJvdW5kYXJ5IiwgImRpc3BsYXkiLCAib2Zmc2V0IiwgInBvcHBlckNvbmZpZyIsICJyZWZlcmVuY2UiLCAiRHJvcGRvd24iLCAiX3BvcHBlciIsICJfcGFyZW50IiwgIl9tZW51IiwgIl9pbk5hdmJhciIsICJfZGV0ZWN0TmF2YmFyIiwgInNob3dFdmVudCIsICJfY3JlYXRlUG9wcGVyIiwgImZvY3VzIiwgIl9jb21wbGV0ZUhpZGUiLCAiZGVzdHJveSIsICJ1cGRhdGUiLCAiaGlkZUV2ZW50IiwgIlBvcHBlciIsICJyZWZlcmVuY2VFbGVtZW50IiwgIl9nZXRQb3BwZXJDb25maWciLCAiY3JlYXRlUG9wcGVyIiwgIl9nZXRQbGFjZW1lbnQiLCAicGFyZW50RHJvcGRvd24iLCAiaXNFbmQiLCAiX2dldE9mZnNldCIsICJwb3BwZXJEYXRhIiwgImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsICJwbGFjZW1lbnQiLCAibW9kaWZpZXJzIiwgIm9wdGlvbnMiLCAiZW5hYmxlZCIsICJfc2VsZWN0TWVudUl0ZW0iLCAiY2xlYXJNZW51cyIsICJvcGVuVG9nZ2xlcyIsICJjb250ZXh0IiwgImNvbXBvc2VkUGF0aCIsICJpc01lbnVUYXJnZXQiLCAiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwgImlzSW5wdXQiLCAiaXNFc2NhcGVFdmVudCIsICJpc1VwT3JEb3duRXZlbnQiLCAiZ2V0VG9nZ2xlQnV0dG9uIiwgInN0b3BQcm9wYWdhdGlvbiIsICJFVkVOVF9NT1VTRURPV04iLCAiY2xhc3NOYW1lIiwgImNsaWNrQ2FsbGJhY2siLCAicm9vdEVsZW1lbnQiLCAiQmFja2Ryb3AiLCAiX2lzQXBwZW5kZWQiLCAiX2FwcGVuZCIsICJfZ2V0RWxlbWVudCIsICJfZW11bGF0ZUFuaW1hdGlvbiIsICJiYWNrZHJvcCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJFVkVOVF9GT0NVU0lOIiwgIkVWRU5UX0tFWURPV05fVEFCIiwgIlRBQl9OQVZfRk9SV0FSRCIsICJUQUJfTkFWX0JBQ0tXQVJEIiwgImF1dG9mb2N1cyIsICJ0cmFwRWxlbWVudCIsICJGb2N1c1RyYXAiLCAiX2lzQWN0aXZlIiwgIl9sYXN0VGFiTmF2RGlyZWN0aW9uIiwgImFjdGl2YXRlIiwgIl9oYW5kbGVGb2N1c2luIiwgIl9oYW5kbGVLZXlkb3duIiwgImRlYWN0aXZhdGUiLCAiZWxlbWVudHMiLCAic2hpZnRLZXkiLCAiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsICJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsICJQUk9QRVJUWV9QQURESU5HIiwgIlBST1BFUlRZX01BUkdJTiIsICJTY3JvbGxCYXJIZWxwZXIiLCAiZ2V0V2lkdGgiLCAiZG9jdW1lbnRXaWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgIndpZHRoIiwgIl9kaXNhYmxlT3ZlckZsb3ciLCAiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwgImNhbGN1bGF0ZWRWYWx1ZSIsICJyZXNldCIsICJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsICJpc092ZXJmbG93aW5nIiwgIl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSIsICJvdmVyZmxvdyIsICJzdHlsZVByb3BlcnR5IiwgInNjcm9sbGJhcldpZHRoIiwgIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwgInNldFByb3BlcnR5IiwgIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwgImFjdHVhbFZhbHVlIiwgInJlbW92ZVByb3BlcnR5IiwgImNhbGxCYWNrIiwgIkVWRU5UX0hJREVfUFJFVkVOVEVEIiwgIkVWRU5UX1JFU0laRSIsICJFVkVOVF9DTElDS19ESVNNSVNTIiwgIkVWRU5UX01PVVNFRE9XTl9ESVNNSVNTIiwgIkVWRU5UX0tFWURPV05fRElTTUlTUyIsICJDTEFTU19OQU1FX09QRU4iLCAiQ0xBU1NfTkFNRV9TVEFUSUMiLCAiT1BFTl9TRUxFQ1RPUiIsICJTRUxFQ1RPUl9ESUFMT0ciLCAiU0VMRUNUT1JfTU9EQUxfQk9EWSIsICJNb2RhbCIsICJfZGlhbG9nIiwgIl9iYWNrZHJvcCIsICJfaW5pdGlhbGl6ZUJhY2tEcm9wIiwgIl9mb2N1c3RyYXAiLCAiX2luaXRpYWxpemVGb2N1c1RyYXAiLCAiX3Njcm9sbEJhciIsICJfYWRqdXN0RGlhbG9nIiwgIl9zaG93RWxlbWVudCIsICJfaGlkZU1vZGFsIiwgImhhbmRsZVVwZGF0ZSIsICJzY3JvbGxUb3AiLCAibW9kYWxCb2R5IiwgInRyYW5zaXRpb25Db21wbGV0ZSIsICJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsICJldmVudDIiLCAiX3Jlc2V0QWRqdXN0bWVudHMiLCAiaXNNb2RhbE92ZXJmbG93aW5nIiwgInNjcm9sbEhlaWdodCIsICJjbGllbnRIZWlnaHQiLCAiaW5pdGlhbE92ZXJmbG93WSIsICJvdmVyZmxvd1kiLCAiaXNCb2R5T3ZlcmZsb3dpbmciLCAicGFkZGluZ0xlZnQiLCAicGFkZGluZ1JpZ2h0IiwgImFscmVhZHlPcGVuIiwgIkNMQVNTX05BTUVfU0hPV0lORyIsICJDTEFTU19OQU1FX0hJRElORyIsICJDTEFTU19OQU1FX0JBQ0tEUk9QIiwgInNjcm9sbCIsICJPZmZjYW52YXMiLCAiYmx1ciIsICJjb21wbGV0ZUNhbGxiYWNrIiwgInBvc2l0aW9uIiwgIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCAiRGVmYXVsdEFsbG93bGlzdCIsICJhIiwgImFyZWEiLCAiYiIsICJiciIsICJjb2wiLCAiY29kZSIsICJkZCIsICJkaXYiLCAiZGwiLCAiZHQiLCAiZW0iLCAiaHIiLCAiaDEiLCAiaDIiLCAiaDMiLCAiaDQiLCAiaDUiLCAiaDYiLCAiaSIsICJsaSIsICJvbCIsICJwIiwgInByZSIsICJzIiwgInNtYWxsIiwgInNwYW4iLCAic3ViIiwgInN1cCIsICJzdHJvbmciLCAidSIsICJ1bCIsICJ1cmlBdHRyaWJ1dGVzIiwgIlNBRkVfVVJMX1BBVFRFUk4iLCAiYWxsb3dlZEF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCAiYXR0cmlidXRlTmFtZSIsICJub2RlTmFtZSIsICJub2RlVmFsdWUiLCAiYXR0cmlidXRlUmVnZXgiLCAic29tZSIsICJyZWdleCIsICJzYW5pdGl6ZUh0bWwiLCAidW5zYWZlSHRtbCIsICJhbGxvd0xpc3QiLCAic2FuaXRpemVGdW5jdGlvbiIsICJkb21QYXJzZXIiLCAiRE9NUGFyc2VyIiwgImNyZWF0ZWREb2N1bWVudCIsICJwYXJzZUZyb21TdHJpbmciLCAiZWxlbWVudE5hbWUiLCAiYXR0cmlidXRlTGlzdCIsICJhbGxvd2VkQXR0cmlidXRlcyIsICJpbm5lckhUTUwiLCAiY29udGVudCIsICJleHRyYUNsYXNzIiwgImh0bWwiLCAic2FuaXRpemUiLCAic2FuaXRpemVGbiIsICJ0ZW1wbGF0ZSIsICJEZWZhdWx0Q29udGVudFR5cGUiLCAiZW50cnkiLCAiVGVtcGxhdGVGYWN0b3J5IiwgImdldENvbnRlbnQiLCAiX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uIiwgImhhc0NvbnRlbnQiLCAiY2hhbmdlQ29udGVudCIsICJfY2hlY2tDb250ZW50IiwgInRvSHRtbCIsICJ0ZW1wbGF0ZVdyYXBwZXIiLCAiX21heWJlU2FuaXRpemUiLCAidGV4dCIsICJfc2V0Q29udGVudCIsICJhcmciLCAidGVtcGxhdGVFbGVtZW50IiwgIl9wdXRFbGVtZW50SW5UZW1wbGF0ZSIsICJ0ZXh0Q29udGVudCIsICJESVNBTExPV0VEX0FUVFJJQlVURVMiLCAiQ0xBU1NfTkFNRV9NT0RBTCIsICJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwgIlNFTEVDVE9SX01PREFMIiwgIkVWRU5UX01PREFMX0hJREUiLCAiVFJJR0dFUl9IT1ZFUiIsICJUUklHR0VSX0ZPQ1VTIiwgIlRSSUdHRVJfQ0xJQ0siLCAiVFJJR0dFUl9NQU5VQUwiLCAiRVZFTlRfSU5TRVJURUQiLCAiRVZFTlRfQ0xJQ0siLCAiRVZFTlRfRk9DVVNPVVQiLCAiQXR0YWNobWVudE1hcCIsICJBVVRPIiwgIlRPUCIsICJSSUdIVCIsICJCT1RUT00iLCAiTEVGVCIsICJhbmltYXRpb24iLCAiY29udGFpbmVyIiwgImN1c3RvbUNsYXNzIiwgImRlbGF5IiwgImZhbGxiYWNrUGxhY2VtZW50cyIsICJ0aXRsZSIsICJUb29sdGlwIiwgIl9pc0VuYWJsZWQiLCAiX3RpbWVvdXQiLCAiX2lzSG92ZXJlZCIsICJfYWN0aXZlVHJpZ2dlciIsICJfdGVtcGxhdGVGYWN0b3J5IiwgIl9uZXdDb250ZW50IiwgInRpcCIsICJfc2V0TGlzdGVuZXJzIiwgIl9maXhUaXRsZSIsICJlbmFibGUiLCAiZGlzYWJsZSIsICJ0b2dnbGVFbmFibGVkIiwgIl9sZWF2ZSIsICJfZW50ZXIiLCAiX2hpZGVNb2RhbEhhbmRsZXIiLCAiX2Rpc3Bvc2VQb3BwZXIiLCAiX2lzV2l0aENvbnRlbnQiLCAic2hhZG93Um9vdCIsICJpc0luVGhlRG9tIiwgIm93bmVyRG9jdW1lbnQiLCAiX2dldFRpcEVsZW1lbnQiLCAiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCAiX2dldFRpdGxlIiwgIl9jcmVhdGVUaXBFbGVtZW50IiwgIl9nZXRDb250ZW50Rm9yVGVtcGxhdGUiLCAiX2dldFRlbXBsYXRlRmFjdG9yeSIsICJ0aXBJZCIsICJzZXRDb250ZW50IiwgIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCAiX2dldERlbGVnYXRlQ29uZmlnIiwgImF0dGFjaG1lbnQiLCAicGhhc2UiLCAic3RhdGUiLCAidHJpZ2dlcnMiLCAiZXZlbnRJbiIsICJldmVudE91dCIsICJfc2V0VGltZW91dCIsICJ0aW1lb3V0IiwgImRhdGFBdHRyaWJ1dGVzIiwgImRhdGFBdHRyaWJ1dGUiLCAiU0VMRUNUT1JfVElUTEUiLCAiU0VMRUNUT1JfQ09OVEVOVCIsICJQb3BvdmVyIiwgIl9nZXRDb250ZW50IiwgIkVWRU5UX0FDVElWQVRFIiwgIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsICJTRUxFQ1RPUl9EQVRBX1NQWSIsICJTRUxFQ1RPUl9UQVJHRVRfTElOS1MiLCAiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCAiU0VMRUNUT1JfTkFWX0xJTktTIiwgIlNFTEVDVE9SX05BVl9JVEVNUyIsICJTRUxFQ1RPUl9MSVNUX0lURU1TIiwgIlNFTEVDVE9SX0xJTktfSVRFTVMiLCAiU0VMRUNUT1JfRFJPUERPV04iLCAiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwgInJvb3RNYXJnaW4iLCAic21vb3RoU2Nyb2xsIiwgInRocmVzaG9sZCIsICJTY3JvbGxTcHkiLCAiX3RhcmdldExpbmtzIiwgIl9vYnNlcnZhYmxlU2VjdGlvbnMiLCAiX3Jvb3RFbGVtZW50IiwgIl9hY3RpdmVUYXJnZXQiLCAiX29ic2VydmVyIiwgIl9wcmV2aW91c1Njcm9sbERhdGEiLCAidmlzaWJsZUVudHJ5VG9wIiwgInBhcmVudFNjcm9sbFRvcCIsICJyZWZyZXNoIiwgIl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzIiwgIl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCIsICJkaXNjb25uZWN0IiwgIl9nZXROZXdPYnNlcnZlciIsICJzZWN0aW9uIiwgIm9ic2VydmUiLCAib2JzZXJ2YWJsZVNlY3Rpb24iLCAiaGFzaCIsICJoZWlnaHQiLCAib2Zmc2V0VG9wIiwgInNjcm9sbFRvIiwgInRvcCIsICJiZWhhdmlvciIsICJJbnRlcnNlY3Rpb25PYnNlcnZlciIsICJfb2JzZXJ2ZXJDYWxsYmFjayIsICJ0YXJnZXRFbGVtZW50IiwgIl9wcm9jZXNzIiwgInVzZXJTY3JvbGxzRG93biIsICJpc0ludGVyc2VjdGluZyIsICJfY2xlYXJBY3RpdmVDbGFzcyIsICJlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMiLCAidGFyZ2V0TGlua3MiLCAiYW5jaG9yIiwgImRlY29kZVVSSSIsICJfYWN0aXZhdGVQYXJlbnRzIiwgImxpc3RHcm91cCIsICJpdGVtIiwgImFjdGl2ZU5vZGVzIiwgIm5vZGUiLCAic3B5IiwgIkhPTUVfS0VZIiwgIkVORF9LRVkiLCAiQ0xBU1NfRFJPUERPV04iLCAiU0VMRUNUT1JfRFJPUERPV05fTUVOVSIsICJOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwgIlNFTEVDVE9SX1RBQl9QQU5FTCIsICJTRUxFQ1RPUl9PVVRFUiIsICJTRUxFQ1RPUl9JTk5FUiIsICJTRUxFQ1RPUl9JTk5FUl9FTEVNIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSIsICJUYWIiLCAiX3NldEluaXRpYWxBdHRyaWJ1dGVzIiwgIl9nZXRDaGlsZHJlbiIsICJpbm5lckVsZW0iLCAiX2VsZW1Jc0FjdGl2ZSIsICJhY3RpdmUiLCAiX2dldEFjdGl2ZUVsZW0iLCAiX2RlYWN0aXZhdGUiLCAiX2FjdGl2YXRlIiwgInJlbGF0ZWRFbGVtIiwgIl90b2dnbGVEcm9wRG93biIsICJuZXh0QWN0aXZlRWxlbWVudCIsICJwcmV2ZW50U2Nyb2xsIiwgIl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyIsICJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkIiwgIl9nZXRJbm5lckVsZW1lbnQiLCAiaXNBY3RpdmUiLCAib3V0ZXJFbGVtIiwgIl9nZXRPdXRlckVsZW1lbnQiLCAiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCIsICJvcGVuIiwgIkVWRU5UX01PVVNFT1ZFUiIsICJFVkVOVF9NT1VTRU9VVCIsICJDTEFTU19OQU1FX0hJREUiLCAiYXV0b2hpZGUiLCAiVG9hc3QiLCAiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCAiX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24iLCAiX2NsZWFyVGltZW91dCIsICJfbWF5YmVTY2hlZHVsZUhpZGUiLCAiaXNTaG93biIsICJfb25JbnRlcmFjdGlvbiIsICJpc0ludGVyYWN0aW5nIl0KfQo=
