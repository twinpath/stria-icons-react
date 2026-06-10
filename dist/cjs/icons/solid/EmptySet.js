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
var EmptySet_exports = {};
__export(EmptySet_exports, {
  default: () => EmptySet_default
});
module.exports = __toCommonJS(EmptySet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EmptySetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.664 9.332C490.218 -3.111 469.855 -3.111 457.41 9.33L390.033 76.688C342.367 40.986 280.066 23.574 213.759 35.852C124.47 52.385 52.369 124.471 35.851 213.762C23.591 280.033 41.005 342.297 76.707 389.938L9.335 457.285C-3.112 469.729 -3.112 490.094 9.335 502.537L9.451 502.654C21.921 515.123 42.14 515.113 54.599 502.635L121.966 435.187C169.632 470.887 231.933 488.299 298.24 476.021C387.529 459.49 459.63 387.404 476.148 298.113C488.408 231.84 470.994 169.578 435.292 121.937L502.664 54.586C515.111 42.143 515.111 21.777 502.664 9.332ZM111.964 255.938C111.964 176.562 176.605 111.938 256 111.938C284.132 111.938 310.138 120.313 332.394 134.313L134.345 332.313C120.341 310.062 111.964 284.062 111.964 255.938ZM256 399.938C227.867 399.938 201.861 391.562 179.605 377.562L377.654 179.562C391.658 201.812 400.035 227.812 400.035 255.938C400.035 335.312 335.394 399.938 256 399.938Z" })
  }
));
EmptySetSolid.displayName = "EmptySetSolid";
var EmptySet_default = EmptySetSolid;
