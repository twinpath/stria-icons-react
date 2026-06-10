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
var Circle2_exports = {};
__export(Circle2_exports, {
  default: () => Circle2_default
});
module.exports = __toCommonJS(Circle2_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle2Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM328 384H184C174.078 384 165.188 377.906 161.609 368.625C158.031 359.375 160.531 348.875 167.875 342.219L276.313 243.906C283.359 236.969 287.625 226.906 287.625 216.25S283.359 195.531 275.625 187.938C259.391 172 232.875 172 216.609 187.938L205.594 198.719C196.141 208.062 180.969 207.875 171.656 198.406C162.375 188.938 162.531 173.719 172 164.469L183 153.687C217.797 119.5 274.453 119.5 309.25 153.687C326.25 170.375 335.625 192.594 335.625 216.25S326.25 262.125 309.25 278.812L246.188 336H328C341.25 336 352 346.75 352 360S341.25 384 328 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.003 360C352.003 373.25 341.253 384 328.003 384H184.003C174.082 384 165.191 377.906 161.613 368.625C158.035 359.375 160.535 348.875 167.878 342.219L276.316 243.906C283.363 236.969 287.628 226.906 287.628 216.25S283.363 195.531 275.628 187.938C259.394 172 232.878 172 216.613 187.938L205.597 198.719C196.144 208.062 180.972 207.875 171.66 198.406C162.378 188.938 162.535 173.719 172.003 164.469L183.003 153.687C217.8 119.5 274.457 119.5 309.253 153.687C326.253 170.375 335.628 192.594 335.628 216.25S326.253 262.125 309.253 278.812L246.191 336H328.003C341.253 336 352.003 346.75 352.003 360Z" })
    ]
  }
));
Circle2Duotone.displayName = "Circle2Duotone";
var Circle2_default = Circle2Duotone;
