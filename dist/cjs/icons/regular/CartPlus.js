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
const CartPlusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 416C149.49 416 128 437.49 128 464S149.49 512 176 512S224 490.51 224 464S202.51 416 176 416ZM272 112H312V152C312 165.25 322.75 176 336 176S360 165.25 360 152V112H400C413.25 112 424 101.25 424 88S413.25 64 400 64H360V24C360 10.75 349.25 0 336 0S312 10.75 312 24V64H272C258.75 64 248 74.75 248 88S258.75 112 272 112ZM569.529 44.734C563.42 36.641 554.107 32 543.967 32H480V80H522.77L477.049 240H161.574L131.1 80H192V32H121.957L119.578 19.51C117.422 8.189 107.523 0 96 0H24C10.744 0 0 10.744 0 24C0 37.254 10.744 48 24 48H76.141L136.424 364.488C138.58 375.809 148.479 384 160.002 384H488C501.254 384 512 373.254 512 360C512 346.744 501.254 336 488 336H179.859L170.717 288H489.123C503.406 288 515.959 278.531 519.885 264.797L574.748 72.797C577.529 63.047 575.623 52.828 569.529 44.734ZM464 416C437.49 416 416 437.49 416 464S437.49 512 464 512S512 490.51 512 464S490.51 416 464 416Z" })
  }
));
CartPlusRegular.displayName = "CartPlusRegular";
var CartPlus_default = CartPlusRegular;
