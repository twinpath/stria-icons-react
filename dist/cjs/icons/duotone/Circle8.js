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
var Circle8_exports = {};
__export(Circle8_exports, {
  default: () => Circle8_default
});
module.exports = __toCommonJS(Circle8_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle8Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 272H240C222.344 272 208 286.344 208 304S222.344 336 240 336H272C289.656 336 304 321.656 304 304S289.656 272 272 272ZM248 224H264C277.219 224 288 213.219 288 200S277.219 176 264 176H248C234.781 176 224 186.781 224 200S234.781 224 248 224ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM272 384H240C195.875 384 160 348.125 160 304C160 278.938 171.811 256.812 189.896 242.135C181.254 230.258 176 215.773 176 200C176 160.312 208.312 128 248 128H264C303.688 128 336 160.312 336 200C336 215.773 330.746 230.258 322.104 242.135C340.189 256.812 352 278.938 352 304C352 348.125 316.125 384 272 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M322.104 242.135C330.746 230.258 336 215.773 336 200C336 160.312 303.688 128 264 128H248C208.312 128 176 160.312 176 200C176 215.773 181.254 230.258 189.896 242.135C171.811 256.812 160 278.938 160 304C160 348.125 195.875 384 240 384H272C316.125 384 352 348.125 352 304C352 278.938 340.189 256.812 322.104 242.135ZM248 176H264C277.219 176 288 186.781 288 200S277.219 224 264 224H248C234.781 224 224 213.219 224 200S234.781 176 248 176ZM272 336H240C222.344 336 208 321.656 208 304S222.344 272 240 272H272C289.656 272 304 286.344 304 304S289.656 336 272 336Z" })
    ]
  }
));
Circle8Duotone.displayName = "Circle8Duotone";
var Circle8_default = Circle8Duotone;
