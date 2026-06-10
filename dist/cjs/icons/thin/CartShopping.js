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
var CartShopping_exports = {};
__export(CartShopping_exports, {
  default: () => CartShopping_default
});
module.exports = __toCommonJS(CartShopping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartShoppingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.995 416C149.488 416 127.997 437.49 127.997 464S149.488 512 175.995 512S223.994 490.51 223.994 464S202.503 416 175.995 416ZM175.995 496C158.351 496 143.996 481.645 143.996 464S158.351 432 175.995 432S207.995 446.355 207.995 464S193.64 496 175.995 496ZM571.235 73.688C566.673 67.531 559.642 64 551.986 64H86.881L71.748 5.984C70.811 2.453 67.655 0 63.998 0H8C3.594 0 0 3.578 0 8S3.594 16 8 16H57.811L152.246 378.016C153.184 381.547 156.34 384 159.996 384H503.987C508.393 384 511.987 380.422 511.987 376S508.393 368 503.987 368H166.183L153.66 320H477.675C495.487 320 510.893 308.547 515.987 291.484L574.954 94.906C577.173 87.562 575.829 79.828 571.235 73.688ZM500.675 286.891C497.643 296.969 488.206 304 477.675 304H149.496V304.031L91.056 80H551.986C554.548 80 556.892 81.172 558.392 83.219C559.923 85.266 560.361 87.844 559.642 90.297L500.675 286.891ZM463.988 416C437.481 416 415.989 437.49 415.989 464S437.481 512 463.988 512S511.987 490.51 511.987 464S490.495 416 463.988 416ZM463.988 496C446.344 496 431.989 481.645 431.989 464S446.344 432 463.988 432C481.632 432 495.987 446.355 495.987 464S481.632 496 463.988 496Z" })
  }
));
CartShoppingThin.displayName = "CartShoppingThin";
var CartShopping_default = CartShoppingThin;
