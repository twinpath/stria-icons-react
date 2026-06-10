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
const BasketShoppingSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M538.625 240.182C534.25 239.307 530.031 241.964 529.078 246.245L483.328 452.124C477.578 477.968 455.094 496 428.656 496H147.344C120.906 496 98.422 477.968 92.672 452.124L46.922 246.245C45.969 241.964 41.766 239.307 37.375 240.182C33.062 241.151 30.344 245.433 31.297 249.745L77.047 455.624C84.438 488.812 113.344 512 147.344 512H428.656C462.656 512 491.562 488.812 498.953 455.624L544.703 249.745C545.656 245.433 542.938 241.151 538.625 240.182ZM568 191.994H415.568L335.359 4.834C333.594 0.772 328.891 -1.041 324.844 0.647C320.781 2.366 318.906 7.084 320.641 11.147L398.145 191.994H177.855L255.359 11.147C257.094 7.084 255.219 2.366 251.156 0.647S242.391 0.74 240.641 4.834L160.432 191.994H8C3.578 191.994 0 195.588 0 199.994S3.578 207.994 8 207.994H153.574L120.641 284.84C118.906 288.902 120.781 293.621 124.844 295.34C125.875 295.777 126.938 295.996 128 295.996C131.094 295.996 134.047 294.183 135.359 291.152L170.998 207.994H405.002L440.641 291.152C441.953 294.183 444.906 295.996 448 295.996C449.062 295.996 450.125 295.777 451.156 295.34C455.219 293.621 457.094 288.902 455.359 284.84L422.426 207.994H568C572.422 207.994 576 204.401 576 199.994S572.422 191.994 568 191.994Z" })
  }
));
BasketShoppingSimpleThin.displayName = "BasketShoppingSimpleThin";
var BasketShoppingSimple_default = BasketShoppingSimpleThin;
