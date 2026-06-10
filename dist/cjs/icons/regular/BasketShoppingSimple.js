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
var BasketShoppingSimple_exports = {};
__export(BasketShoppingSimple_exports, {
  default: () => BasketShoppingSimple_default
});
module.exports = __toCommonJS(BasketShoppingSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BasketShoppingSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M552 192.003H415.416L358.844 16.63C354.781 4.036 341.266 -2.901 328.625 1.161C316.016 5.239 309.094 18.755 313.156 31.38L364.971 192.003H211.029L262.844 31.38C266.906 18.755 259.984 5.239 247.375 1.161C234.781 -2.885 221.219 4.036 217.156 16.63L160.584 192.003H24C10.75 192.003 0 202.753 0 216.003C0 229.253 10.75 240 24 240H42.854L88.453 454.938C95.469 488 125.094 512 158.891 512H417.109C450.906 512 480.531 488 487.547 454.938L533.146 240H552C565.25 240 576 229.253 576 216.003C576 202.753 565.25 192.003 552 192.003ZM440.578 444.969C438.25 456.001 428.375 464 417.109 464H158.891C147.625 464 137.75 456.001 135.422 444.969L91.936 240H145.1L137.156 264.628C133.094 277.252 140.016 290.768 152.625 294.846C155.078 295.627 157.562 296.002 160 296.002C170.141 296.002 179.562 289.533 182.844 279.377L195.545 240H380.455L393.156 279.377C396.438 289.533 405.859 296.002 416 296.002C418.438 296.002 420.922 295.627 423.375 294.846C435.984 290.768 442.906 277.252 438.844 264.628L430.9 240H484.064L440.578 444.969Z" })
  }
));
BasketShoppingSimpleRegular.displayName = "BasketShoppingSimpleRegular";
var BasketShoppingSimple_default = BasketShoppingSimpleRegular;
