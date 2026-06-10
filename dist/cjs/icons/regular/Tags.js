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
var Tags_exports = {};
__export(Tags_exports, {
  default: () => Tags_default
});
module.exports = __toCommonJS(Tags_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TagsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M426.373 211.909L268.137 53.674C255.574 41.11 233.571 32 215.819 32H49.005C21.987 32 0 53.987 0 81.005V247.819C0 265.571 9.11 287.574 21.674 300.137L179.894 458.388C194.333 472.796 213.272 480 232.227 480S270.138 472.796 284.561 458.373L426.388 316.577C455.219 287.714 455.219 240.772 426.373 211.909ZM392.432 282.636L250.62 424.416C240.494 434.573 223.961 434.558 213.835 424.432L55.615 266.196C52.052 262.634 48.005 252.851 48.005 247.819V81.005L49.005 80.005H215.819C220.851 80.005 230.633 84.052 234.196 87.615L392.416 245.85C402.558 255.992 402.558 272.494 392.432 282.636ZM136.014 144.012C136.014 157.271 125.263 168.014 112.012 168.014S88.009 157.271 88.009 144.012S98.76 120.009 112.012 120.009S136.014 130.753 136.014 144.012ZM559.654 304.829L400.829 463.645C389.941 474.531 375.711 479.939 361.462 479.939C351.416 479.939 341.358 477.25 332.457 471.896L516.505 287.859C529.005 275.361 529.005 255.098 516.507 242.598L305.915 32H342.841C355.6 32 373.42 39.382 382.442 48.404L559.656 225.624C581.53 247.495 581.528 282.958 559.654 304.829Z" })
  }
));
TagsRegular.displayName = "TagsRegular";
var Tags_default = TagsRegular;
