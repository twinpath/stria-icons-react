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
var SpellCheck_exports = {};
__export(SpellCheck_exports, {
  default: () => SpellCheck_default
});
module.exports = __toCommonJS(SpellCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpellCheckRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M569.306 279.369C560.121 269.836 544.933 269.492 535.371 278.682L352.341 454.404L264.968 367.027C255.593 357.652 240.406 357.652 231.031 367.027S221.656 391.59 231.031 400.965L335.029 504.969C339.716 509.656 345.841 512 351.998 512C357.998 512 363.966 509.781 368.623 505.312L568.619 313.307C578.181 304.119 578.494 288.932 569.306 279.369ZM280 256H372C413.906 256 448 221.906 448 180C448 155.4 436.062 133.719 417.882 119.82C426.699 107.41 432 92.346 432 76C432 34.094 397.906 0 356 0H280C266.75 0 256 10.75 256 24V232C256 245.25 266.75 256 280 256ZM304 48H356C371.437 48 384 60.562 384 76S371.437 104 356 104H304V48ZM304 152H372C387.437 152 400 164.562 400 180S387.437 208 372 208H304V152ZM222.086 222.656L134.091 14.656C126.591 -3.094 97.408 -3.094 89.908 14.656L1.914 222.656C-3.272 234.844 2.445 248.938 14.664 254.094C26.787 259.375 40.943 253.562 46.099 241.344L56.822 216H167.177L177.9 241.344C181.775 250.5 190.65 256 199.994 256C203.119 256 206.304 255.406 209.336 254.094C221.554 248.938 227.273 234.844 222.086 222.656ZM77.131 168L112 85.594L146.869 168H77.131Z" })
  }
));
SpellCheckRegular.displayName = "SpellCheckRegular";
var SpellCheck_default = SpellCheckRegular;
