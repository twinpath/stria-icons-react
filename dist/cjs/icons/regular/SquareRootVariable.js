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
var SquareRootVariable_exports = {};
__export(SquareRootVariable_exports, {
  default: () => SquareRootVariable_default
});
module.exports = __toCommonJS(SquareRootVariable_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareRootVariableRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M562.969 241.031C553.781 231.594 538.594 231.313 529.031 240.594L480.461 287.85L433.219 239.281C423.969 229.781 408.781 229.563 399.281 238.781C389.75 248.031 389.562 263.219 398.781 272.719L446.057 321.322L397.469 368.594C387.969 377.813 387.781 393.031 397.031 402.531C401.719 407.344 407.969 409.781 414.219 409.781C420.25 409.781 426.281 407.531 430.969 402.969L479.523 355.729L526.781 404.313C531.5 409.156 537.75 411.594 544 411.594C550.031 411.594 556.062 409.344 560.719 404.812C570.25 395.562 570.437 380.375 561.219 370.875L513.928 322.256L562.531 274.969C572.031 265.75 572.219 250.531 562.969 241.031ZM576 24C576 10.75 565.25 0 552 0H320C308.906 0 299.281 7.594 296.656 18.375L200.75 415.719L117.75 237.844C113.812 229.406 105.312 224 96 224H24C10.75 224 0 234.75 0 248S10.75 272 24 272H80.719L186.25 498.156C190.219 506.656 198.75 512 208 512C208.781 512 209.594 511.969 210.406 511.875C220.531 510.875 228.938 503.531 231.344 493.625L338.906 48H552C565.25 48 576 37.25 576 24Z" })
  }
));
SquareRootVariableRegular.displayName = "SquareRootVariableRegular";
var SquareRootVariable_default = SquareRootVariableRegular;
