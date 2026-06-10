var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var HighlighterLine_exports = {};
__export(HighlighterLine_exports, {
  default: () => HighlighterLine_default
});
module.exports = __toCommonJS(HighlighterLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HighlighterLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M303.877 419.498L339.502 377.873L166.125 204.496L124.625 239.996C113.875 249.498 109.625 264.373 113.875 278.123L126.875 320.873L76 371.873L172.125 468.123L223 417.248L265.752 430.248C279.502 434.498 294.377 430.248 303.877 419.498ZM552 464H248C234.746 464 224 474.744 224 488C224 501.254 234.746 512 248 512H552C565.254 512 576 501.254 576 488C576 474.744 565.254 464 552 464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.877 79.246L464.752 16.121C444.252 -4.379 411.377 -5.504 389.627 13.746L166.125 204.496L339.502 377.873L530.252 154.371C549.502 132.621 548.377 99.746 527.877 79.246ZM71.482 409.617L6.404 474.848C-7.276 488.557 2.412 512 21.756 512H94.295C98.527 512 102.588 510.314 105.582 507.312L137.609 475.211L71.482 409.617Z" })
    ]
  }
));
HighlighterLineDuotone.displayName = "HighlighterLineDuotone";
var HighlighterLine_default = HighlighterLineDuotone;
