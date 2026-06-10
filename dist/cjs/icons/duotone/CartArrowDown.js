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
var CartArrowDown_exports = {};
__export(CartArrowDown_exports, {
  default: () => CartArrowDown_default
});
module.exports = __toCommonJS(CartArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartArrowDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M574.791 72.797L519.932 264.781C516.041 278.438 503.4 288 489.166 288H170.76L122 32H312.043V134.062L289.012 111.031C279.637 101.656 264.449 101.656 255.074 111.031S245.699 135.594 255.074 144.969L319.074 208.969C323.762 213.656 329.902 216 336.043 216S348.324 213.656 353.012 208.969L417.012 144.969C426.387 135.594 426.387 120.406 417.012 111.031S392.449 101.656 383.074 111.031L360.043 134.062V32H544.01C554.15 32 563.463 36.641 569.572 44.734C575.666 52.828 577.572 63.047 574.791 72.797Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 416C149.49 416 128 437.49 128 464S149.49 512 176 512S224 490.51 224 464S202.51 416 176 416ZM464 416C437.49 416 416 437.49 416 464S437.49 512 464 512S512 490.51 512 464S490.51 416 464 416ZM488 336H179.859L119.578 19.51C117.422 8.19 107.525 0 96.002 0H24C10.745 0 0 10.745 0 24V24C0 37.255 10.745 48 24 48H76.141L136.424 364.491C138.58 375.811 148.477 384 160 384H488C501.255 384 512 373.255 512 360V360C512 346.745 501.255 336 488 336ZM319.031 208.969C323.719 213.656 329.859 216 336 216S348.281 213.656 352.969 208.969L416.969 144.969C426.344 135.594 426.344 120.406 416.969 111.031S392.406 101.656 383.031 111.031L360 134.062V32H312V134.062L288.969 111.031C279.594 101.656 264.406 101.656 255.031 111.031S245.656 135.594 255.031 144.969L319.031 208.969Z" })
    ]
  }
));
CartArrowDownDuotone.displayName = "CartArrowDownDuotone";
var CartArrowDown_default = CartArrowDownDuotone;
