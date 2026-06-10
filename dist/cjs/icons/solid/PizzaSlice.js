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
var PizzaSlice_exports = {};
__export(PizzaSlice_exports, {
  default: () => PizzaSlice_default
});
module.exports = __toCommonJS(PizzaSlice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PizzaSliceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100.362 112.269V112.144L0.479 491.628C-0.896 497.253 0.729 503.253 4.854 507.253C8.981 511.378 14.981 513.003 20.481 511.378L399.512 406.257C395.26 231.388 276.502 114.144 100.362 112.269ZM127.989 416.007C110.364 416.007 95.987 401.632 95.987 384.007C95.987 366.384 110.364 352.009 127.989 352.009C145.616 352.009 159.993 366.384 159.993 384.007C159.993 401.632 145.616 416.007 127.989 416.007ZM175.998 271.998C158.371 271.998 143.994 257.623 143.994 239.998C143.994 222.375 158.371 208 175.998 208C193.623 208 208 222.375 208 239.998C208 257.623 193.623 271.998 175.998 271.998ZM272.002 368C254.377 368 240 353.625 240 336.002C240 318.377 254.377 304.002 272.002 304.002C289.629 304.002 304.006 318.377 304.006 336.002C304.006 353.625 289.629 368 272.002 368ZM158.868 0.148C142.741 -1.352 127.614 8.648 123.489 24.271L108.739 80.519C296.377 86.019 423.264 211.14 431.264 397.507L488.143 381.757C503.895 377.382 513.645 362.134 511.77 345.884C490.893 165.142 340.756 17.398 158.868 0.148Z" })
  }
));
PizzaSliceSolid.displayName = "PizzaSliceSolid";
var PizzaSlice_default = PizzaSliceSolid;
