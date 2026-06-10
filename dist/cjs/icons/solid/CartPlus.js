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
var CartPlus_exports = {};
__export(CartPlus_exports, {
  default: () => CartPlus_default
});
module.exports = __toCommonJS(CartPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartPlusSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 416C149.49 416 128 437.49 128 464S149.49 512 176 512S224 490.51 224 464S202.51 416 176 416ZM569.529 44.734C563.42 36.641 554.107 32 543.967 32H121.957L119.578 19.51C117.422 8.19 107.525 0 96.002 0H24C10.745 0 0 10.745 0 24V24C0 37.255 10.745 48 24 48H76.141L136.424 364.491C138.58 375.811 148.477 384 160 384H488C501.255 384 512 373.255 512 360V360C512 346.745 501.255 336 488 336H179.859L170.717 288H489.106C503.399 288 515.961 278.525 519.889 264.781L574.748 72.797C577.529 63.047 575.623 52.828 569.529 44.734ZM416 160.007C416 171.32 406.744 180.576 395.431 180.576H356.572V219.429C356.572 230.743 347.315 240 336.001 240H335.999C324.685 240 315.428 230.743 315.428 219.429V180.576H276.569C265.256 180.576 256 171.32 256 160.007V160.007C256 148.694 265.256 139.438 276.569 139.438H315.428V100.587C315.428 89.273 324.685 80.016 335.999 80.016H336.001C347.315 80.016 356.572 89.273 356.572 100.587V139.437H395.431C406.744 139.438 416 148.694 416 160.007V160.007ZM464 416C437.49 416 416 437.49 416 464S437.49 512 464 512S512 490.51 512 464S490.51 416 464 416Z" })
  }
));
CartPlusSolid.displayName = "CartPlusSolid";
var CartPlus_default = CartPlusSolid;
