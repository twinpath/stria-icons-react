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
var CartShoppingFast_exports = {};
__export(CartShoppingFast_exports, {
  default: () => CartShoppingFast_default
});
module.exports = __toCommonJS(CartShoppingFast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartShoppingFastThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.988 416C501.482 416 479.99 437.49 479.99 464S501.482 512 527.988 512C554.496 512 575.988 490.51 575.988 464S554.496 416 527.988 416ZM527.988 496C510.344 496 495.99 481.645 495.99 464S510.344 432 527.988 432S559.988 446.355 559.988 464S545.633 496 527.988 496ZM635.236 73.688C630.674 67.531 623.643 64 615.986 64H150.881L135.748 5.984C134.811 2.453 131.654 0 127.998 0H72C67.594 0 64 3.578 64 8S67.594 16 72 16H121.811L216.246 378.016C217.184 381.547 220.34 384 223.996 384H567.988C572.395 384 575.988 380.422 575.988 376S572.395 368 567.988 368H230.184L217.66 320H541.676C559.488 320 574.895 308.547 579.986 291.484L638.955 94.906C641.174 87.562 639.83 79.828 635.236 73.688ZM564.676 286.891C561.645 296.969 552.207 304 541.676 304H213.496V304.031L155.057 80H615.986C618.549 80 620.893 81.172 622.393 83.219C623.924 85.266 624.361 87.844 623.643 90.297L564.676 286.891ZM239.996 416C213.488 416 191.998 437.49 191.998 464S213.488 512 239.996 512S287.994 490.51 287.994 464S266.504 416 239.996 416ZM239.996 496C222.352 496 207.996 481.645 207.996 464S222.352 432 239.996 432S271.996 446.355 271.996 464S257.641 496 239.996 496ZM8 144H120C124.418 144 128 140.418 128 136S124.418 128 120 128H8C3.582 128 0 131.582 0 136S3.582 144 8 144ZM8 208H136C140.418 208 144 204.418 144 200S140.418 192 136 192H8C3.582 192 0 195.582 0 200S3.582 208 8 208ZM152 256H8C3.582 256 0 259.582 0 264S3.582 272 8 272H152C156.418 272 160 268.418 160 264S156.418 256 152 256Z" })
  }
));
CartShoppingFastThin.displayName = "CartShoppingFastThin";
var CartShoppingFast_default = CartShoppingFastThin;
